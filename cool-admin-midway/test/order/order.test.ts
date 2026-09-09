import { createHttpRequest } from '@midwayjs/mock';
import { TestHelper } from '../helpers/test-helper';

describe('test/order/order.test.ts', () => {
  let app;
  let token: string;

  beforeAll(async () => {
    app = await TestHelper.createTestApp();
    const loginResult = await createHttpRequest(app)
      .post('/app/user/login/password')
      .send({ phone: '13800138000', password: '123456' });
    token = loginResult.body?.data?.token;
  });

  afterAll(async () => {
    await TestHelper.closeTestApp();
  });

  it('should create order', async () => {
    const result = await createHttpRequest(app)
      .post('/app/order/add')
      .set('Authorization', `Bearer ${token}`)
      .send({
        type: 1, // 商品订单
        totalAmount: 299.00,
        payAmount: 299.00,
        remark: '测试订单',
      });

    expect(result.status).toBe(200);
    expect(result.body.code).toBe(1000);
    expect(result.body.data).toHaveProperty('id');
  });

  it('should list orders', async () => {
    const result = await createHttpRequest(app)
      .post('/app/order/list').send({ page: 1, pageSize: 10 })
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toBe(200);
    expect(result.body.code).toBe(1000);
    expect(Array.isArray(result.body.data)).toBe(true);
  });

  it('should get order detail', async () => {
    // 先创建订单
    const createResult = await createHttpRequest(app)
      .post('/app/order/add')
      .set('Authorization', `Bearer ${token}`)
      .send({
        type: 1,
        totalAmount: 199.00,
        payAmount: 199.00,
      });

    const listResult = await createHttpRequest(app)
      .post('/app/order/list')
      .set('Authorization', `Bearer ${token}`)
      .send({ page: 1, size: 1 });
    const orderNo = listResult.body.data[0].orderNo;

    // 查询详情
    const result = await createHttpRequest(app)
      .get(`/app/order/${orderNo}/detail`)
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toBe(200);
    expect(result.body.code).toBe(1000);
    expect(result.body.data.orderNo).toBe(orderNo);
  });

  it('should cancel order', async () => {
    // 先创建订单
    const createResult = await createHttpRequest(app)
      .post('/app/order/add')
      .set('Authorization', `Bearer ${token}`)
      .send({
        type: 1,
        totalAmount: 99.00,
        payAmount: 99.00,
      });

    const listResult = await createHttpRequest(app)
      .post('/app/order/list')
      .set('Authorization', `Bearer ${token}`)
      .send({ page: 1, size: 1 });
    const orderNo = listResult.body.data[0].orderNo;

    // 取消订单
    const result = await createHttpRequest(app)
      .put(`/app/order/${orderNo}/cancel`)
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toBe(200);
    expect(result.body.code).toBe(1000);

    // 验证订单状态已更新
    const detailResult = await createHttpRequest(app)
      .get(`/app/order/${orderNo}/detail`)
      .set('Authorization', `Bearer ${token}`);

    expect(detailResult.body.data.status).toBe(3); // 已取消
  });
});
