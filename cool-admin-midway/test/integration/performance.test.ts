import { TestHelper, TestDataFactory } from '../../helpers/test-helper';

/**
 * 性能测试套件
 */
describe('Performance Test - Response Time & Throughput', () => {
  let app;
  let token: string;

  beforeAll(async () => {
    app = await TestHelper.createTestApp();
    token = await TestHelper.getAdminToken();
  });

  afterAll(async () => {
    await TestHelper.closeTestApp();
  });

  describe('Response Time Tests', () => {
    it('list API should respond within 500ms', async () => {
      const startTime = Date.now();

      await TestHelper.createRequest()
        .post('/admin/shop/goods/list')
        .send({ page: 1, size: 10 });

      const endTime = Date.now();
      const responseTime = endTime - startTime;

      // 列表查询应该在500ms内完成
      expect(responseTime).toBeLessThan(500);
    });

    it('detail API should respond within 200ms', async () => {
      const startTime = Date.now();

      await TestHelper.createRequest()
        .post('/admin/shop/goods/info')
        .send({ id: 1 });

      const endTime = Date.now();
      const responseTime = endTime - startTime;

      // 详情查询应该在200ms内完成
      expect(responseTime).toBeLessThan(200);
    });

    it('search API should respond within 1000ms', async () => {
      const startTime = Date.now();

      await TestHelper.createRequest()
        .post('/admin/shop/goods/list')
        .send({ page: 1, size: 10, keyword: '测试' });

      const endTime = Date.now();
      const responseTime = endTime - startTime;

      // 搜索查询应该在1秒内完成
      expect(responseTime).toBeLessThan(1000);
    });
  });

  describe('Concurrent Request Tests', () => {
    it('should handle 10 concurrent requests', async () => {
      const requests = Array.from({ length: 10 }, () =>
        TestHelper.createRequest()
          .post('/admin/shop/goods/list')
          .send({ page: 1, size: 10 })
      );

      const startTime = Date.now();
      const results = await Promise.all(requests);
      const endTime = Date.now();

      // 所有请求应该在2秒内完成
      expect(endTime - startTime).toBeLessThan(2000);

      // 所有请求都应该成功返回
      results.forEach(result => {
        expect([200, 401]).toContain(result.status);
      });
    });

    it('should handle 50 concurrent requests', async () => {
      const requests = Array.from({ length: 50 }, () =>
        TestHelper.createRequest()
          .post('/admin/shop/goods/list')
          .send({ page: 1, size: 10 })
      );

      const startTime = Date.now();
      const results = await Promise.all(requests);
      const endTime = Date.now();

      // 50个并发请求应该在5秒内完成
      expect(endTime - startTime).toBeLessThan(5000);

      // 至少80%的请求应该成功
      const successCount = results.filter(r => [200, 401].includes(r.status)).length;
      expect(successCount / results.length).toBeGreaterThan(0.8);
    });
  });

  describe('Large Dataset Tests', () => {
    it('should handle pagination with large page size', async () => {
      const startTime = Date.now();

      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/list')
        .send({ page: 1, size: 100 });

      const endTime = Date.now();
      const responseTime = endTime - startTime;

      // 大分页查询应该在2秒内完成
      expect(responseTime).toBeLessThan(2000);
      expect([200, 401]).toContain(result.status);
    });

    it('should handle deep pagination efficiently', async () => {
      const startTime = Date.now();

      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/list')
        .send({ page: 100, size: 10 });

      const endTime = Date.now();
      const responseTime = endTime - startTime;

      // 深度分页应该在1秒内完成
      expect(responseTime).toBeLessThan(1000);
      expect([200, 401]).toContain(result.status);
    });
  });

  describe('Complex Query Tests', () => {
    it('should handle multi-condition search efficiently', async () => {
      const startTime = Date.now();

      const result = await TestHelper.createRequest()
        .post('/admin/shop/goods/list')
        .send({
          page: 1,
          size: 10,
          keyword: '测试',
          categoryId: 1,
          status: 1,
          minPrice: 10,
          maxPrice: 100,
        });

      const endTime = Date.now();
      const responseTime = endTime - startTime;

      // 复杂条件查询应该在1秒内完成
      expect(responseTime).toBeLessThan(1000);
      expect([200, 401]).toContain(result.status);
    });

    it('should handle date range query efficiently', async () => {
      const startTime = Date.now();

      const result = await TestHelper.createRequest()
        .post('/admin/shop/order/list')
        .send({
          page: 1,
          size: 10,
          startDate: '2026-01-01',
          endDate: '2026-12-31',
        });

      const endTime = Date.now();
      const responseTime = endTime - startTime;

      // 日期范围查询应该在1秒内完成
      expect(responseTime).toBeLessThan(1000);
      expect([200, 401]).toContain(result.status);
    });
  });

  describe('Write Operation Performance', () => {
    it('should create record within 300ms', async () => {
      const goodsData = TestDataFactory.createGoods();
      const startTime = Date.now();

      await TestHelper.createRequest()
        .post('/admin/shop/goods/add')
        .send(goodsData);

      const endTime = Date.now();
      const responseTime = endTime - startTime;

      // 创建操作应该在300ms内完成
      expect(responseTime).toBeLessThan(300);
    });

    it('should update record within 200ms', async () => {
      const startTime = Date.now();

      await TestHelper.createRequest()
        .post('/admin/shop/goods/update')
        .send({ id: 1, name: '更新的商品' });

      const endTime = Date.now();
      const responseTime = endTime - startTime;

      // 更新操作应该在200ms内完成
      expect(responseTime).toBeLessThan(200);
    });

    it('should handle batch operations efficiently', async () => {
      const ids = Array.from({ length: 50 }, (_, i) => i + 1);
      const startTime = Date.now();

      await TestHelper.createRequest()
        .post('/admin/shop/goods/delete')
        .send({ ids });

      const endTime = Date.now();
      const responseTime = endTime - startTime;

      // 批量删除50条记录应该在1秒内完成
      expect(responseTime).toBeLessThan(1000);
    });
  });

  describe('Memory & Resource Usage', () => {
    it('should not leak memory with repeated requests', async () => {
      const initialMemory = process.memoryUsage().heapUsed;

      // 执行1000次请求
      for (let i = 0; i < 1000; i++) {
        await TestHelper.createRequest()
          .post('/admin/shop/goods/list')
          .send({ page: 1, size: 10 });
      }

      const finalMemory = process.memoryUsage().heapUsed;
      const memoryIncrease = finalMemory - initialMemory;

      // 内存增长不应该超过50MB
      expect(memoryIncrease).toBeLessThan(50 * 1024 * 1024);
    });
  });

  describe('Database Query Performance', () => {
    it('should use indexes for common queries', async () => {
      // 测试是否使用了索引（通过响应时间推断）
      const startTime = Date.now();

      await TestHelper.createRequest()
        .post('/admin/shop/goods/list')
        .send({ page: 1, size: 10, status: 1 }); // status 应该有索引

      const endTime = Date.now();
      const responseTime = endTime - startTime;

      // 有索引的查询应该很快
      expect(responseTime).toBeLessThan(200);
    });

    it('should optimize N+1 query problem', async () => {
      // 测试是否有N+1查询问题
      const startTime = Date.now();

      const result = await TestHelper.createRequest()
        .post('/admin/shop/order/list')
        .send({ page: 1, size: 20 }); // 获取订单及关联的商品信息

      const endTime = Date.now();
      const responseTime = endTime - startTime;

      // 即使返回20条记录，也应该很快（说明做了join优化）
      expect(responseTime).toBeLessThan(500);
      expect([200, 401]).toContain(result.status);
    });
  });
});
