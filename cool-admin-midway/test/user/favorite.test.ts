import { createHttpRequest } from '@midwayjs/mock';
import { TestHelper } from '../helpers/test-helper';

describe('test/user/favorite.test.ts', () => {
  let app;
  let token: string;
  let favoriteId: number;

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

  it('should add favorite', async () => {
    const result = await createHttpRequest(app)
      .post('/app/user/favorite/add')
      .set('Authorization', `Bearer ${token}`)
      .send({
        targetId: String(Date.now()),
        targetType: 1, // 商品
      });

    expect(result.status).toBe(200);
    expect(result.body.code).toBe(1000);
    favoriteId = result.body.data.id;
  });

  it('should list favorites', async () => {
    const result = await createHttpRequest(app)
      .post('/app/user/favorite/list')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toBe(200);
    expect(result.body.code).toBe(1000);
    expect(Array.isArray(result.body.data)).toBe(true);
  });

  it('should check if favorited', async () => {
    const result = await createHttpRequest(app)
      .get('/app/user/favorite/check?targetId=1&targetType=1')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toBe(200);
    expect(result.body.code).toBe(1000);
    expect(typeof result.body.data.isFavorite).toBe('boolean');
  });

  it('should remove favorite', async () => {
    const result = await createHttpRequest(app)
      .post('/app/user/favorite/delete')
      .set('Authorization', `Bearer ${token}`)
      .send({
        ids: [favoriteId],
      });

    expect(result.status).toBe(200);
    expect(result.body.code).toBe(1000);
  });
});
