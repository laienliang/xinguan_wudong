import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework } from '@midwayjs/koa';

describe('test/order/order.test.ts', () => {
  let app;
  let token: string;

  beforeAll(async () => {
    app = await createApp<Framework>();
    const loginResult = await createHttpRequest(app)
      .post('/app/user/login')
      .send({ phone: '13800138000', password: '123456' });
    token = loginResult.body.data.token;
  });

  afterAll(async () => {
    await close(app);
  });

  it('should create order', async () => {
    const result = await createHttpRequest(app)
      .post('/app/order')
      .set('Authorization', `Bearer ${token}`)
      .send({
        type: 1, // 商品订单
        totalAmount: 299.00,
        payAmount: 299.00,
        remark: '测试订单',
      });

    expect(result.status).toBe(200);
    expect(result.body.code).toBe(0);
    expect(result.body.data).toHaveProperty('orderNo');
    expect(result.body.data.status).toBe(1); // 待支付
  });

  it('should list orders', async () => {
    const result = await createHttpRequest(app)
      .get('/app/order?page=1&pageSize=10')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toBe(200);
    expect(result.body.code).toBe(0);
    expect(result.body.data).toHaveProperty('list');
    expect(result.body.data).toHaveProperty('total');
  });

  it('should get order detail', async () => {
    // 先创建订单
    const createResult = await createHttpRequest(app)
      .post('/app/order')
      .set('Authorization', `Bearer ${token}`)
      .send({
        type: 1,
        totalAmount: 199.00,
        payAmount: 199.00,
      });

    const orderNo = createResult.body.data.orderNo;

    // 查询详情
    const result = await createHttpRequest(app)
      .get(`/app/order/${orderNo}`)
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toBe(200);
    expect(result.body.code).toBe(0);
    expect(result.body.data.orderNo).toBe(orderNo);
  });

  it('should cancel order', async () => {
    // 先创建订单
    const createResult = await createHttpRequest(app)
      .post('/app/order')
      .set('Authorization', `Bearer ${token}`)
      .send({
        type: 1,
        totalAmount: 99.00,
        payAmount: 99.00,
      });

    const orderNo = createResult.body.data.orderNo;

    // 取消订单
    const result = await createHttpRequest(app)
      .put(`/app/order/${orderNo}/cancel`)
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toBe(200);
    expect(result.body.code).toBe(0);

    // 验证订单状态已更新
    const detailResult = await createHttpRequest(app)
      .get(`/app/order/${orderNo}`)
      .set('Authorization', `Bearer ${token}`);

    expect(detailResult.body.data.status).toBe(3); // 已取消
  });
});
