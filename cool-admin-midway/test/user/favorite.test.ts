import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework } from '@midwayjs/koa';

describe('test/user/favorite.test.ts', () => {
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

  it('should add favorite', async () => {
    const result = await createHttpRequest(app)
      .post('/app/user/favorite')
      .set('Authorization', `Bearer ${token}`)
      .send({
        targetId: '1',
        targetType: 1, // 商品
      });

    expect(result.status).toBe(200);
    expect(result.body.code).toBe(0);
  });

  it('should list favorites', async () => {
    const result = await createHttpRequest(app)
      .get('/app/user/favorite')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toBe(200);
    expect(result.body.code).toBe(0);
    expect(Array.isArray(result.body.data)).toBe(true);
  });

  it('should check if favorited', async () => {
    const result = await createHttpRequest(app)
      .get('/app/user/favorite/check?targetId=1&targetType=1')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toBe(200);
    expect(result.body.code).toBe(0);
    expect(typeof result.body.data.isFavorite).toBe('boolean');
  });

  it('should remove favorite', async () => {
    const result = await createHttpRequest(app)
      .del('/app/user/favorite')
      .set('Authorization', `Bearer ${token}`)
      .send({
        targetId: '1',
        targetType: 1,
      });

    expect(result.status).toBe(200);
    expect(result.body.code).toBe(0);
  });
});
