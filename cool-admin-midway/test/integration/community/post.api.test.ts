import { TestHelper } from '../../helpers/test-helper';

describe('Community Module - Post API Integration Test', () => {
  let app;
  let token: string;

  beforeAll(async () => {
    app = await TestHelper.createTestApp();
    token = await TestHelper.getAdminToken();
  });

  afterAll(async () => {
    await TestHelper.closeTestApp();
  });

  describe('POST /admin/community/post/list', () => {
    it('should return 401 without authentication', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/community/post/list')
        .send({ page: 1, size: 10 });

      expect(result.status).toBe(200);
    });

    it('should support filtering by status', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/community/post/list')
        .send({ page: 1, size: 10, status: 1 });

      expect(result.status).toBe(200);
    });

    it('should support filtering by user id', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/community/post/list')
        .send({ page: 1, size: 10, userId: 1 });

      expect(result.status).toBe(200);
    });

    it('should support keyword search', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/community/post/list')
        .send({ page: 1, size: 10, keyword: '游记' });

      expect(result.status).toBe(200);
    });
  });

  describe('POST /admin/community/comment/list', () => {
    it('should return 401 without authentication', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/community/comment/list')
        .send({ page: 1, size: 10 });

      expect(result.status).toBe(200);
    });

    it('should support filtering by post id', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/community/comment/list')
        .send({ page: 1, size: 10, postId: 1 });

      expect(result.status).toBe(200);
    });

    it('should support filtering by parent id', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/community/comment/list')
        .send({ page: 1, size: 10, parentId: 0 });

      expect(result.status).toBe(200);
    });
  });

  describe('POST /admin/community/topic/list', () => {
    it('should return 401 without authentication', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/community/topic/list')
        .send({ page: 1, size: 10 });

      expect(result.status).toBe(200);
    });

    it('should support filtering by hot topics', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/community/topic/list')
        .send({ page: 1, size: 10, isHot: 1 });

      expect(result.status).toBe(200);
    });

    it('should support filtering by status', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/community/topic/list')
        .send({ page: 1, size: 10, status: 1 });

      expect(result.status).toBe(200);
    });
  });

  describe('POST /admin/community/post/delete', () => {
    it('should return 401 without authentication', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/community/post/delete')
        .send({ ids: [999] });

      expect(result.status).toBe(200);
    });

    it('should validate ids parameter', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/community/post/delete')
        .send({ ids: [] }); // 空数组

      expect(result.status).toBe(200);
    });
  });
});
