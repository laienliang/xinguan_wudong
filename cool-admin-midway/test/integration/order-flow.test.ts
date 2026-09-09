import { createHttpRequest } from '@midwayjs/mock';
import { TestHelper } from '../helpers/test-helper';

describe('test/integration/order-flow.test.ts - 订单完整流程', () => {
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

  it('订单流程：创建 -> 查询 -> 取消', async () => {
    // 1. 创建订单
    const createResult = await createHttpRequest(app)
      .post('/app/order/add')
      .set('Authorization', `Bearer ${token}`)
      .send({
        type: 1,
        totalAmount: 299.00,
        payAmount: 299.00,
        remark: '测试订单',
      });

    expect(createResult.body.code).toBe(1000);
    const createdListResult = await createHttpRequest(app)
      .post('/app/order/list')
      .set('Authorization', `Bearer ${token}`)
      .send({ page: 1, size: 1 });
    const orderNo = createdListResult.body.data[0].orderNo;

    // 2. 查询订单详情
    const detailResult = await createHttpRequest(app)
      .get(`/app/order/${orderNo}/detail`)
      .set('Authorization', `Bearer ${token}`);

    expect(detailResult.body.code).toBe(1000);
    expect(detailResult.body.data.status).toBe(1); // 待支付

    // 3. 取消订单
    const cancelResult = await createHttpRequest(app)
      .put(`/app/order/${orderNo}/cancel`)
      .set('Authorization', `Bearer ${token}`);

    expect(cancelResult.body.code).toBe(1000);

    // 4. 再次查询，验证状态已更新
    const updatedDetailResult = await createHttpRequest(app)
      .get(`/app/order/${orderNo}/detail`)
      .set('Authorization', `Bearer ${token}`);

    expect(updatedDetailResult.body.data.status).toBe(3); // 已取消
  });

  it('订单列表筛选', async () => {
    // 创建多个不同状态的订单
    await createHttpRequest(app)
      .post('/app/order/add')
      .set('Authorization', `Bearer ${token}`)
      .send({ type: 1, totalAmount: 100, payAmount: 100 });

    await createHttpRequest(app)
      .post('/app/order/add')
      .set('Authorization', `Bearer ${token}`)
      .send({ type: 2, totalAmount: 200, payAmount: 200 });

    // 查询全部订单
    const allResult = await createHttpRequest(app)
      .post('/app/order/list').send({ page: 1, pageSize: 10 })
      .set('Authorization', `Bearer ${token}`);

    expect(allResult.body.code).toBe(1000);
    expect(Array.isArray(allResult.body.data)).toBe(true);
    expect(allResult.body.data.length).toBeGreaterThanOrEqual(2);

    // 按类型筛选
    const typeResult = await createHttpRequest(app)
      .post('/app/order/list').send({ type: 1 })
      .set('Authorization', `Bearer ${token}`);

    expect(typeResult.body.code).toBe(1000);

    // 按状态筛选
    const statusResult = await createHttpRequest(app)
      .post('/app/order/list').send({ status: 1 })
      .set('Authorization', `Bearer ${token}`);

    expect(statusResult.body.code).toBe(1000);
  });
});
