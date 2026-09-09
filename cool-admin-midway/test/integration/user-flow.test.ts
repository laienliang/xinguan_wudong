import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework } from '@midwayjs/koa';

describe('test/integration/user-flow.test.ts - 用户完整流程', () => {
  let app;
  let token: string;

  beforeAll(async () => {
    app = await createApp<Framework>();
  });

  afterAll(async () => {
    await close(app);
  });

  it('完整用户流程：注册 -> 登录 -> 添加地址 -> 加购 -> 下单 -> 收藏 -> 查看消息', async () => {
    // 1. 用户登录
    const loginResult = await createHttpRequest(app)
      .post('/app/user/login')
      .send({ phone: '13800138000', password: '123456' });

    expect(loginResult.body.code).toBe(0);
    token = loginResult.body.data.token;

    // 2. 添加收货地址
    const addressResult = await createHttpRequest(app)
      .post('/app/user/address')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: '测试用户',
        phone: '13800138000',
        province: '贵州省',
        city: '黔东南苗族侗族自治州',
        district: '雷山县',
        detail: '乌东村测试地址',
      });

    expect(addressResult.body.code).toBe(0);
    const addressId = addressResult.body.data.id;

    // 3. 加入购物车
    const cartResult = await createHttpRequest(app)
      .post('/app/cart')
      .set('Authorization', `Bearer ${token}`)
      .send({
        goodsId: '1',
        goodsType: 1,
        quantity: 2,
      });

    expect(cartResult.body.code).toBe(0);

    // 4. 查看购物车
    const cartListResult = await createHttpRequest(app)
      .get('/app/cart')
      .set('Authorization', `Bearer ${token}`);

    expect(cartListResult.body.code).toBe(0);
    expect(cartListResult.body.data.length).toBeGreaterThan(0);

    // 5. 创建订单
    const orderResult = await createHttpRequest(app)
      .post('/app/order')
      .set('Authorization', `Bearer ${token}`)
      .send({
        type: 1,
        totalAmount: 598.00,
        payAmount: 598.00,
      });

    expect(orderResult.body.code).toBe(0);
    const orderNo = orderResult.body.data.orderNo;

    // 6. 查看订单详情
    const orderDetailResult = await createHttpRequest(app)
      .get(`/app/order/${orderNo}`)
      .set('Authorization', `Bearer ${token}`);

    expect(orderDetailResult.body.code).toBe(0);
    expect(orderDetailResult.body.data.orderNo).toBe(orderNo);

    // 7. 添加收藏
    const favoriteResult = await createHttpRequest(app)
      .post('/app/user/favorite')
      .set('Authorization', `Bearer ${token}`)
      .send({
        targetId: '1',
        targetType: 1,
      });

    expect(favoriteResult.body.code).toBe(0);

    // 8. 查看收藏列表
    const favoriteListResult = await createHttpRequest(app)
      .get('/app/user/favorite')
      .set('Authorization', `Bearer ${token}`);

    expect(favoriteListResult.body.code).toBe(0);

    // 9. 查看消息列表
    const messageResult = await createHttpRequest(app)
      .get('/app/message')
      .set('Authorization', `Bearer ${token}`);

    expect(messageResult.body.code).toBe(0);
    expect(messageResult.body.data).toHaveProperty('list');
    expect(messageResult.body.data).toHaveProperty('unreadCount');

    // 10. 查看未读消息数
    const unreadCountResult = await createHttpRequest(app)
      .get('/app/message/unread-count')
      .set('Authorization', `Bearer ${token}`);

    expect(unreadCountResult.body.code).toBe(0);
  });
});
