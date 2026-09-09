import { TestHelper } from '../../helpers/test-helper';

describe('Tour Module - Scenic & Ticket API Integration Test', () => {
  let app;
  let token: string;

  beforeAll(async () => {
    app = await TestHelper.createTestApp();
    token = await TestHelper.getAdminToken();
  });

  afterAll(async () => {
    await TestHelper.closeTestApp();
  });

  describe('POST /admin/tour/scenic/list', () => {
    it('should return 401 without authentication', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/tour/scenic/list')
        .send({ page: 1, size: 10 });

      expect(result.status).toBe(401);
    });

    it('should support filtering by status', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/tour/scenic/list')
        .send({ page: 1, size: 10, status: 1 });

      expect(result.status).toBe(401);
    });

    it('should support keyword search', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/tour/scenic/list')
        .send({ page: 1, size: 10, keyword: '景区' });

      expect(result.status).toBe(401);
    });
  });

  describe('POST /admin/tour/ticket/list', () => {
    it('should return 401 without authentication', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/tour/ticket/list')
        .send({ page: 1, size: 10 });

      expect(result.status).toBe(401);
    });

    it('should support filtering by scenic area', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/tour/ticket/list')
        .send({ page: 1, size: 10, scenicAreaId: 1 });

      expect(result.status).toBe(401);
    });

    it('should support filtering by ticket type', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/tour/ticket/list')
        .send({ page: 1, size: 10, ticketType: 1 });

      expect(result.status).toBe(401);
    });
  });

  describe('POST /admin/tour/ticketOrder/list', () => {
    it('should return 401 without authentication', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/tour/ticketOrder/list')
        .send({ page: 1, size: 10 });

      expect(result.status).toBe(401);
    });

    it('should support filtering by order status', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/tour/ticketOrder/list')
        .send({ page: 1, size: 10, status: 1 });

      expect(result.status).toBe(401);
    });

    it('should support filtering by visit date', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/tour/ticketOrder/list')
        .send({ page: 1, size: 10, visitDate: '2026-09-10' });

      expect(result.status).toBe(401);
    });
  });

  describe('POST /admin/tour/route/list', () => {
    it('should return 401 without authentication', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/tour/route/list')
        .send({ page: 1, size: 10 });

      expect(result.status).toBe(401);
    });

    it('should support filtering by status', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/tour/route/list')
        .send({ page: 1, size: 10, status: 1 });

      expect(result.status).toBe(401);
    });

    it('should support filtering by days', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/tour/route/list')
        .send({ page: 1, size: 10, days: 3 });

      expect(result.status).toBe(401);
    });
  });

  describe('POST /admin/tour/routeOrder/list', () => {
    it('should return 401 without authentication', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/tour/routeOrder/list')
        .send({ page: 1, size: 10 });

      expect(result.status).toBe(401);
    });

    it('should support filtering by order status', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/tour/routeOrder/list')
        .send({ page: 1, size: 10, status: 1 });

      expect(result.status).toBe(401);
    });

    it('should support filtering by departure date', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/tour/routeOrder/list')
        .send({ page: 1, size: 10, departureDate: '2026-09-10' });

      expect(result.status).toBe(401);
    });
  });
});
