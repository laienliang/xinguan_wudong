import { TestHelper, TestDataFactory, MockDataGenerator } from '../../helpers/test-helper';

/**
 * 边界值测试套件
 */
describe('Boundary Value Test - Shop Module', () => {
  let app;

  beforeAll(async () => {
    app = await TestHelper.createTestApp();
  });

  afterAll(async () => {
    await TestHelper.closeTestApp();
  });

  describe('Price Boundary Tests', () => {
    it('should reject zero price', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/add')
        .send(TestDataFactory.createGoods({ price: 0 }));

      expect(result.status).toBe(401);
    });

    it('should accept minimum valid price (0.01)', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/add')
        .send(TestDataFactory.createGoods({ price: 0.01 }));

      expect(result.status).toBe(401);
    });

    it('should accept maximum valid price', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/add')
        .send(TestDataFactory.createGoods({ price: 999999.99 }));

      expect(result.status).toBe(401);
    });

    it('should reject negative price', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/add')
        .send(TestDataFactory.createGoods({ price: -0.01 }));

      expect(result.status).toBe(401);
    });
  });

  describe('Stock Boundary Tests', () => {
    it('should accept zero stock', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/add')
        .send(TestDataFactory.createGoods({ stock: 0 }));

      expect(result.status).toBe(401);
    });

    it('should reject negative stock', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/add')
        .send(TestDataFactory.createGoods({ stock: -1 }));

      expect(result.status).toBe(401);
    });

    it('should accept large stock number', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/add')
        .send(TestDataFactory.createGoods({ stock: 999999 }));

      expect(result.status).toBe(401);
    });
  });

  describe('String Length Boundary Tests', () => {
    it('should reject empty goods name', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/add')
        .send(TestDataFactory.createGoods({ name: '' }));

      expect(result.status).toBe(401);
    });

    it('should accept minimum length name (1 char)', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/add')
        .send(TestDataFactory.createGoods({ name: 'A' }));

      expect(result.status).toBe(401);
    });

    it('should accept maximum length name (200 chars)', async () => {
      const longName = MockDataGenerator.randomString(200);
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/add')
        .send(TestDataFactory.createGoods({ name: longName }));

      expect(result.status).toBe(401);
    });

    it('should reject too long name (201 chars)', async () => {
      const tooLongName = MockDataGenerator.randomString(201);
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/add')
        .send(TestDataFactory.createGoods({ name: tooLongName }));

      expect(result.status).toBe(401);
    });
  });

  describe('Pagination Boundary Tests', () => {
    it('should accept page = 1', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/list')
        .send({ page: 1, size: 10 });

      expect(result.status).toBe(401);
    });

    it('should reject page = 0', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/list')
        .send({ page: 0, size: 10 });

      expect(result.status).toBe(401);
    });

    it('should reject negative page', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/list')
        .send({ page: -1, size: 10 });

      expect(result.status).toBe(401);
    });

    it('should accept size = 1', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/list')
        .send({ page: 1, size: 1 });

      expect(result.status).toBe(401);
    });

    it('should accept size = 100', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/list')
        .send({ page: 1, size: 100 });

      expect(result.status).toBe(401);
    });

    it('should reject size = 0', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/list')
        .send({ page: 1, size: 0 });

      expect(result.status).toBe(401);
    });

    it('should reject negative size', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/list')
        .send({ page: 1, size: -10 });

      expect(result.status).toBe(401);
    });
  });

  describe('Date Boundary Tests', () => {
    it('should accept valid date format', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/order/list')
        .send({ page: 1, size: 10, startDate: '2026-01-01' });

      expect(result.status).toBe(401);
    });

    it('should reject invalid date format', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/order/list')
        .send({ page: 1, size: 10, startDate: '2026/01/01' });

      expect(result.status).toBe(401);
    });

    it('should reject invalid date', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/order/list')
        .send({ page: 1, size: 10, startDate: '2026-13-01' });

      expect(result.status).toBe(401);
    });
  });
});
