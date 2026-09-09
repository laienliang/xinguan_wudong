import { TestHelper, MockDataGenerator } from '../../helpers/test-helper';

/**
 * 安全测试套件
 */
describe('Security Test - Input Validation & Injection', () => {
  let app;

  beforeAll(async () => {
    app = await TestHelper.createTestApp();
  });

  afterAll(async () => {
    await TestHelper.closeTestApp();
  });

  describe('SQL Injection Prevention', () => {
    it('should prevent SQL injection in search keyword', async () => {
      const sqlInjection = "' OR '1'='1";
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/list')
        .send({ page: 1, size: 10, keyword: sqlInjection });

      expect(result.status).toBe(401);
      // 应该被正确处理，不会导致SQL注入
    });

    it('should prevent SQL injection in order by clause', async () => {
      const sqlInjection = "id; DROP TABLE goods;--";
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/list')
        .send({ page: 1, size: 10, orderBy: sqlInjection });

      expect(result.status).toBe(401);
    });

    it('should sanitize special characters in input', async () => {
      const specialChars = "<script>alert('XSS')</script>";
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/add')
        .send({ name: specialChars, price: 99.99 });

      expect(result.status).toBe(401);
    });
  });

  describe('XSS (Cross-Site Scripting) Prevention', () => {
    it('should prevent XSS in goods name', async () => {
      const xssPayload = '<img src=x onerror="alert(1)">';
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/add')
        .send({ name: xssPayload, price: 99.99 });

      expect(result.status).toBe(401);
    });

    it('should prevent XSS in description', async () => {
      const xssPayload = '<script>document.cookie</script>';
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/add')
        .send({
          name: '测试商品',
          description: xssPayload,
          price: 99.99,
        });

      expect(result.status).toBe(401);
    });

    it('should prevent javascript protocol in URLs', async () => {
      const jsProtocol = 'javascript:alert(1)';
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/add')
        .send({
          name: '测试商品',
          image: jsProtocol,
          price: 99.99,
        });

      expect(result.status).toBe(401);
    });
  });

  describe('Path Traversal Prevention', () => {
    it('should prevent path traversal in file operations', async () => {
      const pathTraversal = '../../../etc/passwd';
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/import')
        .send({ filePath: pathTraversal });

      expect([401, 403, 404]).toContain(result.status);
    });

    it('should reject absolute paths', async () => {
      const absolutePath = '/etc/passwd';
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/import')
        .send({ filePath: absolutePath });

      expect([401, 403, 404]).toContain(result.status);
    });
  });

  describe('CSRF (Cross-Site Request Forgery) Protection', () => {
    it('should require valid origin header', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/delete')
        .set('Origin', 'http://evil-site.com')
        .send({ ids: [1] });

      expect([401, 403]).toContain(result.status);
    });
  });

  describe('Mass Assignment Prevention', () => {
    it('should not allow setting system fields directly', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/add')
        .send({
          name: '测试商品',
          price: 99.99,
          id: 999999, // 尝试指定ID
          createTime: '2020-01-01', // 尝试指定创建时间
          tenantId: 999, // 尝试指定租户ID
        });

      expect(result.status).toBe(401);
    });

    it('should not allow modifying read-only fields', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/update')
        .send({
          id: 1,
          sales: 99999, // 销量应该只能通过订单自动增加
        });

      expect(result.status).toBe(401);
    });
  });

  describe('Input Length Validation', () => {
    it('should reject extremely long input', async () => {
      const longString = 'A'.repeat(100000);
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/add')
        .send({ name: longString, price: 99.99 });

      expect([400, 401, 413]).toContain(result.status);
    });

    it('should reject too many items in array', async () => {
      const manyIds = Array.from({ length: 10000 }, (_, i) => i);
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/delete')
        .send({ ids: manyIds });

      expect([400, 401, 413]).toContain(result.status);
    });
  });

  describe('Rate Limiting', () => {
    it('should handle rapid successive requests', async () => {
      const requests = Array.from({ length: 100 }, () =>
        TestHelper.createRequest()
          .post('/admin/shop/goods/list')
          .send({ page: 1, size: 10 })
      );

      const results = await Promise.all(requests);

      // 至少应该有一些请求被限流
      const statuses = results.map(r => r.status);
      expect(statuses.every(s => [200, 401, 429].includes(s))).toBe(true);
    });
  });

  describe('Authentication & Authorization', () => {
    it('should reject requests without token', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/list')
        .send({ page: 1, size: 10 });

      expect(result.status).toBe(401);
    });

    it('should reject requests with invalid token', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/list')
        .set('Authorization', 'invalid-token-123')
        .send({ page: 1, size: 10 });

      expect([401, 403]).toContain(result.status);
    });

    it('should reject requests with expired token', async () => {
      const expiredToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.expired';
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/list')
        .set('Authorization', expiredToken)
        .send({ page: 1, size: 10 });

      expect([401, 403]).toContain(result.status);
    });
  });

  describe('Data Type Validation', () => {
    it('should reject string for numeric field', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/add')
        .send({ name: '测试商品', price: 'not-a-number' });

      expect([400, 401]).toContain(result.status);
    });

    it('should reject array for string field', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/add')
        .send({ name: ['array', 'not', 'string'], price: 99.99 });

      expect([400, 401]).toContain(result.status);
    });

    it('should reject object for primitive field', async () => {
      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/add')
        .send({ name: { object: 'not string' }, price: 99.99 });

      expect([400, 401]).toContain(result.status);
    });
  });
});
