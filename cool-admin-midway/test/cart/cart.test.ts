import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework } from '@midwayjs/koa';

describe('test/cart/cart.test.ts', () => {
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

  it('should add to cart', async () => {
    const result = await createHttpRequest(app)
      .post('/app/cart')
      .set('Authorization', `Bearer ${token}`)
      .send({
        goodsId: '1',
        goodsType: 1,
        skuId: '1',
        quantity: 2,
      });

    expect(result.status).toBe(200);
    expect(result.body.code).toBe(0);
  });

  it('should list cart items', async () => {
    const result = await createHttpRequest(app)
      .get('/app/cart')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toBe(200);
    expect(result.body.code).toBe(0);
    expect(Array.isArray(result.body.data)).toBe(true);
  });

  it('should update quantity', async () => {
    // 先添加商品
    const addResult = await createHttpRequest(app)
      .post('/app/cart')
      .set('Authorization', `Bearer ${token}`)
      .send({
        goodsId: '2',
        goodsType: 1,
        quantity: 1,
      });

    const cartId = addResult.body.data.id;

    // 更新数量
    const result = await createHttpRequest(app)
      .put(`/app/cart/${cartId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ quantity: 5 });

    expect(result.status).toBe(200);
    expect(result.body.code).toBe(0);
  });

  it('should toggle select', async () => {
    // 先添加商品
    const addResult = await createHttpRequest(app)
      .post('/app/cart')
      .set('Authorization', `Bearer ${token}`)
      .send({
        goodsId: '3',
        goodsType: 1,
        quantity: 1,
      });

    const cartId = addResult.body.data.id;

    // 切换选中状态
    const result = await createHttpRequest(app)
      .put(`/app/cart/${cartId}/toggle`)
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toBe(200);
    expect(result.body.code).toBe(0);
  });

  it('should remove cart items', async () => {
    // 先添加商品
    const addResult = await createHttpRequest(app)
      .post('/app/cart')
      .set('Authorization', `Bearer ${token}`)
      .send({
        goodsId: '4',
        goodsType: 1,
        quantity: 1,
      });

    const cartId = addResult.body.data.id;

    // 删除
    const result = await createHttpRequest(app)
      .del('/app/cart')
      .set('Authorization', `Bearer ${token}`)
      .send({ ids: [cartId] });

    expect(result.status).toBe(200);
    expect(result.body.code).toBe(0);
  });

  it('should clear cart', async () => {
    const result = await createHttpRequest(app)
      .del('/app/cart/clear')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toBe(200);
    expect(result.body.code).toBe(0);
  });
});
