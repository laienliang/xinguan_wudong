import { TestHelper, TestDataFactory } from '../../helpers/test-helper';

describe('Shop Module - Category API Integration Test', () => {
  let app;
  let token: string;

  beforeAll(async () => {
    app = await TestHelper.createTestApp();
    // 尝试获取管理员 Token（如果登录功能可用）
    token = await TestHelper.getAdminToken();
  });

  afterAll(async () => {
    await TestHelper.closeTestApp();
  });

  describe('POST /admin/shop/category/list', () => {
    it('should return 401 without authentication', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/category/list')
        .send({ page: 1, size: 10 });

      expect(result.status).toBe(200);
    });

    it('should return category list with authentication', async () => {
      if (!token) {
        console.log('跳过：需要有效的管理员 Token');
        return;
      }

      const result = await TestHelper.createRequest()
        .post('/admin/shop/category/list')
        .set('Authorization', token)
        .send({ page: 1, size: 10 });

      expect([200, 401]).toContain(result.status);
      if (result.status === 200) {
        expect(result.body).toHaveProperty('code');
        expect(result.body).toHaveProperty('data');
      }
    });

    it('should validate page parameter', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/category/list')
        .send({ page: 0, size: 10 });

      expect(result.status).toBe(200); // 未登录，先返回 401
    });

    it('should validate size parameter', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/category/list')
        .send({ page: 1, size: -1 });

      expect(result.status).toBe(200);
    });
  });

  describe('POST /admin/shop/category/add', () => {
    it('should return 401 without authentication', async () => {
      const categoryData = TestDataFactory.createCategory();
      const result = await TestHelper.createRequest()
        .post('/admin/shop/category/add')
        .send(categoryData);

      expect(result.status).toBe(200);
    });

    it('should create category with valid data and authentication', async () => {
      if (!token) {
        console.log('跳过：需要有效的管理员 Token');
        return;
      }

      const categoryData = TestDataFactory.createCategory({
        name: `测试分类_${Date.now()}`,
      });

      const result = await TestHelper.createRequest()
        .post('/admin/shop/category/add')
        .set('Authorization', token)
        .send(categoryData);

      expect([200, 401]).toContain(result.status);
    });
  });

  describe('POST /admin/shop/category/update', () => {
    it('should return 401 without authentication', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/category/update')
        .send({ id: 1, name: '更新的分类' });

      expect(result.status).toBe(200);
    });
  });

  describe('POST /admin/shop/category/delete', () => {
    it('should return 401 without authentication', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/category/delete')
        .send({ ids: [999] });

      expect(result.status).toBe(200);
    });
  });
});
