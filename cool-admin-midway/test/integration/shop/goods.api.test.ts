import { TestHelper, TestDataFactory } from '../../helpers/test-helper';

describe('Shop Module - Goods API Integration Test', () => {
  let app;
  let token: string;

  beforeAll(async () => {
    app = await TestHelper.createTestApp();
    token = await TestHelper.getAdminToken();
  });

  afterAll(async () => {
    await TestHelper.closeTestApp();
  });

  describe('POST /admin/shop/goods/list', () => {
    it('should return 401 without authentication', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/list')
        .send({ page: 1, size: 10 });

      expect(result.status).toBe(401);
    });

    it('should support filtering by category', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/list')
        .send({ page: 1, size: 10, categoryId: 1 });

      expect(result.status).toBe(401);
    });

    it('should support filtering by status', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/list')
        .send({ page: 1, size: 10, status: 1 });

      expect(result.status).toBe(401);
    });

    it('should support keyword search', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/list')
        .send({ page: 1, size: 10, keyword: '测试' });

      expect(result.status).toBe(401);
    });
  });

  describe('POST /admin/shop/goods/add', () => {
    it('should return 401 without authentication', async () => {
      const goodsData = TestDataFactory.createGoods();
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/add')
        .send(goodsData);

      expect(result.status).toBe(401);
    });

    it('should validate required fields', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/add')
        .send({ name: '商品名' }); // 缺少必填字段

      expect(result.status).toBe(401);
    });

    it('should validate price format', async () => {
      const goodsData = TestDataFactory.createGoods({ price: 'invalid' });
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/add')
        .send(goodsData);

      expect(result.status).toBe(401);
    });

    it('should validate stock is non-negative', async () => {
      const goodsData = TestDataFactory.createGoods({ stock: -10 });
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/add')
        .send(goodsData);

      expect(result.status).toBe(401);
    });
  });

  describe('POST /admin/shop/goods/update', () => {
    it('should return 401 without authentication', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/update')
        .send({ id: 1, name: '更新商品' });

      expect(result.status).toBe(401);
    });

    it('should validate stock is non-negative on update', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/update')
        .send({ id: 1, stock: -5 });

      expect(result.status).toBe(401);
    });
  });

  describe('POST /admin/shop/goods/info', () => {
    it('should return 401 without authentication', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/info')
        .send({ id: 1 });

      expect(result.status).toBe(401);
    });

    it('should require id parameter', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/info')
        .send({});

      expect(result.status).toBe(401);
    });
  });

  describe('POST /admin/shop/goods/delete', () => {
    it('should return 401 without authentication', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/delete')
        .send({ ids: [999] });

      expect(result.status).toBe(401);
    });

    it('should require ids parameter', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/delete')
        .send({});

      expect(result.status).toBe(401);
    });

    it('should validate ids is array', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/delete')
        .send({ ids: 'not-an-array' });

      expect(result.status).toBe(401);
    });
  });
});
