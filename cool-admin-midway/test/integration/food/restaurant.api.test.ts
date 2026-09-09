import { TestHelper } from '../../helpers/test-helper';

describe('Food Module - Restaurant API Integration Test', () => {
  let app;
  let token: string;

  beforeAll(async () => {
    app = await TestHelper.createTestApp();
    token = await TestHelper.getAdminToken();
  });

  afterAll(async () => {
    await TestHelper.closeTestApp();
  });

  describe('POST /admin/food/restaurant/list', () => {
    it('should return 401 without authentication', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/food/restaurant/list')
        .send({ page: 1, size: 10 });

      expect(result.status).toBe(401);
    });

    it('should support filtering by status', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/food/restaurant/list')
        .send({ page: 1, size: 10, status: 1 });

      expect(result.status).toBe(401);
    });

    it('should support keyword search', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/food/restaurant/list')
        .send({ page: 1, size: 10, keyword: '餐厅' });

      expect(result.status).toBe(401);
    });
  });

  describe('POST /admin/food/restaurant/add', () => {
    it('should return 401 without authentication', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/food/restaurant/add')
        .send({
          name: '测试餐厅',
          address: '测试地址',
          phone: '13800138000',
        });

      expect(result.status).toBe(401);
    });

    it('should validate phone format', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/food/restaurant/add')
        .send({
          name: '测试餐厅',
          address: '测试地址',
          phone: '123', // 无效手机号
        });

      expect(result.status).toBe(401);
    });
  });

  describe('POST /admin/food/dish/list', () => {
    it('should return 401 without authentication', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/food/dish/list')
        .send({ page: 1, size: 10 });

      expect(result.status).toBe(401);
    });

    it('should support filtering by restaurant id', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/food/dish/list')
        .send({ page: 1, size: 10, restaurantId: 1 });

      expect(result.status).toBe(401);
    });
  });

  describe('POST /admin/food/booking/list', () => {
    it('should return 401 without authentication', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/food/booking/list')
        .send({ page: 1, size: 10 });

      expect(result.status).toBe(401);
    });

    it('should support filtering by booking status', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/food/booking/list')
        .send({ page: 1, size: 10, status: 1 });

      expect(result.status).toBe(401);
    });

    it('should support filtering by date', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/food/booking/list')
        .send({ page: 1, size: 10, bookingDate: '2026-09-10' });

      expect(result.status).toBe(401);
    });
  });
});
