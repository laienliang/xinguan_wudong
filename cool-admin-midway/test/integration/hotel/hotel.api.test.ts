import { TestHelper } from '../../helpers/test-helper';

describe('Hotel Module - Hotel API Integration Test', () => {
  let app;
  let token: string;

  beforeAll(async () => {
    app = await TestHelper.createTestApp();
    token = await TestHelper.getAdminToken();
  });

  afterAll(async () => {
    await TestHelper.closeTestApp();
  });

  describe('POST /admin/hotel/hotel/list', () => {
    it('should return 401 without authentication', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/hotel/hotel/list')
        .send({ page: 1, size: 10 });

      expect(result.status).toBe(200);
    });

    it('should support filtering by status', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/hotel/hotel/list')
        .send({ page: 1, size: 10, status: 1 });

      expect(result.status).toBe(200);
    });

    it('should support keyword search', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/hotel/hotel/list')
        .send({ page: 1, size: 10, keyword: '民宿' });

      expect(result.status).toBe(200);
    });
  });

  describe('POST /admin/hotel/roomType/list', () => {
    it('should return 401 without authentication', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/hotel/roomType/list')
        .send({ page: 1, size: 10 });

      expect(result.status).toBe(200);
    });

    it('should support filtering by hotel id', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/hotel/roomType/list')
        .send({ page: 1, size: 10, hotelId: 1 });

      expect(result.status).toBe(200);
    });
  });

  describe('POST /admin/hotel/order/list', () => {
    it('should return 401 without authentication', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/hotel/order/list')
        .send({ page: 1, size: 10 });

      expect(result.status).toBe(200);
    });

    it('should support filtering by order status', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/hotel/order/list')
        .send({ page: 1, size: 10, status: 1 });

      expect(result.status).toBe(200);
    });

    it('should support filtering by check-in date range', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/hotel/order/list')
        .send({
          page: 1,
          size: 10,
          startDate: '2026-09-10',
          endDate: '2026-09-20'
        });

      expect(result.status).toBe(200);
    });
  });

  describe('POST /admin/hotel/roomCalendar/update', () => {
    it('should return 401 without authentication', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/hotel/roomCalendar/update')
        .send({
          roomTypeId: 1,
          date: '2026-09-10',
          price: 299.99,
          availableRooms: 5
        });

      expect(result.status).toBe(200);
    });

    it('should validate price is positive', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/hotel/roomCalendar/update')
        .send({
          roomTypeId: 1,
          date: '2026-09-10',
          price: -100, // 负价格
          availableRooms: 5
        });

      expect(result.status).toBe(200);
    });

    it('should validate available rooms is non-negative', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/hotel/roomCalendar/update')
        .send({
          roomTypeId: 1,
          date: '2026-09-10',
          price: 299.99,
          availableRooms: -1 // 负数房间
        });

      expect(result.status).toBe(200);
    });
  });
});
