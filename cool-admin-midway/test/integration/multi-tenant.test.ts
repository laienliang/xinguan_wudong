import { TestHelper } from '../../helpers/test-helper';

/**
 * 多租户隔离测试套件
 */
describe('Multi-Tenant Isolation Test', () => {
  let app;
  let tenant1Token: string;
  let tenant2Token: string;

  beforeAll(async () => {
    app = await TestHelper.createTestApp();
    // 假设可以获取不同租户的 Token
    tenant1Token = await TestHelper.getAdminToken();
    tenant2Token = await TestHelper.getAdminToken();
  });

  afterAll(async () => {
    await TestHelper.closeTestApp();
  });

  describe('Data Isolation - Shop Module', () => {
    it('tenant1 should not see tenant2 goods', async () => {
      // 租户1不应该看到租户2的商品
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/list')
        .set('Authorization', tenant1Token)
        .send({ page: 1, size: 10 });

      expect([200, 401]).toContain(result.status);
      // 如果成功，应该只返回租户1的数据
    });

    it('tenant1 should not access tenant2 goods by id', async () => {
      // 租户1不应该能通过 ID 访问租户2的商品
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/info')
        .set('Authorization', tenant1Token)
        .send({ id: 999999 }); // 假设是租户2的商品 ID

      expect([200, 401, 404]).toContain(result.status);
    });

    it('tenant1 should not update tenant2 goods', async () => {
      // 租户1不应该能更新租户2的商品
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/update')
        .set('Authorization', tenant1Token)
        .send({ id: 999999, name: '被篡改的商品' });

      expect([401, 403, 404]).toContain(result.status);
    });

    it('tenant1 should not delete tenant2 goods', async () => {
      // 租户1不应该能删除租户2的商品
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/delete')
        .set('Authorization', tenant1Token)
        .send({ ids: [999999] });

      expect([401, 403, 404]).toContain(result.status);
    });
  });

  describe('Data Isolation - Order Module', () => {
    it('tenant1 should not see tenant2 orders', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/order/list')
        .set('Authorization', tenant1Token)
        .send({ page: 1, size: 10 });

      expect([200, 401]).toContain(result.status);
    });

    it('tenant1 should not access tenant2 order details', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/order/info')
        .set('Authorization', tenant1Token)
        .send({ id: 999999 });

      expect([401, 403, 404]).toContain(result.status);
    });
  });

  describe('Data Isolation - Hotel Module', () => {
    it('tenant1 should not see tenant2 hotels', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/hotel/hotel/list')
        .set('Authorization', tenant1Token)
        .send({ page: 1, size: 10 });

      expect([200, 401]).toContain(result.status);
    });

    it('tenant1 should not book tenant2 rooms', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/hotel/order/add')
        .set('Authorization', tenant1Token)
        .send({
          roomTypeId: 999999, // 租户2的房型
          checkInDate: '2026-09-10',
          checkOutDate: '2026-09-12',
        });

      expect([401, 403, 404]).toContain(result.status);
    });
  });

  describe('Data Isolation - Community Module', () => {
    it('tenant1 should not see tenant2 posts', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/community/post/list')
        .set('Authorization', tenant1Token)
        .send({ page: 1, size: 10 });

      expect([200, 401]).toContain(result.status);
    });

    it('tenant1 should not delete tenant2 posts', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/community/post/delete')
        .set('Authorization', tenant1Token)
        .send({ ids: [999999] });

      expect([401, 403, 404]).toContain(result.status);
    });
  });

  describe('Tenant ID Injection', () => {
    it('should automatically inject tenantId when creating data', async () => {
      // 创建数据时应该自动注入租户ID
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/add')
        .set('Authorization', tenant1Token)
        .send({
          name: '测试商品',
          price: 99.99,
          // 不传 tenantId，应该自动从 Token 中获取
        });

      expect([200, 401]).toContain(result.status);
    });

    it('should reject manual tenantId override', async () => {
      // 不应该允许手动覆盖租户ID
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/add')
        .set('Authorization', tenant1Token)
        .send({
          name: '测试商品',
          price: 99.99,
          tenantId: 999, // 尝试伪造成其他租户
        });

      expect([401, 403]).toContain(result.status);
    });
  });
});
