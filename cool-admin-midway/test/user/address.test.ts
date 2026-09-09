import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework } from '@midwayjs/koa';

describe('test/user/address.test.ts', () => {
  let app;
  let token: string;

  beforeAll(async () => {
    app = await createApp<Framework>();
    // 先登录获取 token
    const loginResult = await createHttpRequest(app)
      .post('/app/user/login')
      .send({ phone: '13800138000', password: '123456' });
    token = loginResult.body.data.token;
  });

  afterAll(async () => {
    await close(app);
  });

  it('should create address', async () => {
    const result = await createHttpRequest(app)
      .post('/app/user/address')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: '张三',
        phone: '13800138000',
        province: '贵州省',
        city: '黔东南苗族侗族自治州',
        district: '雷山县',
        detail: '乌东村123号',
      });

    expect(result.status).toBe(200);
    expect(result.body.code).toBe(0);
    expect(result.body.data).toHaveProperty('id');
  });

  it('should list addresses', async () => {
    const result = await createHttpRequest(app)
      .get('/app/user/address')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toBe(200);
    expect(result.body.code).toBe(0);
    expect(Array.isArray(result.body.data)).toBe(true);
  });

  it('should set default address', async () => {
    // 先创建地址
    const createResult = await createHttpRequest(app)
      .post('/app/user/address')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: '李四',
        phone: '13900139000',
        province: '贵州省',
        city: '黔东南苗族侗族自治州',
        district: '雷山县',
        detail: '乌东村456号',
      });

    const addressId = createResult.body.data.id;

    // 设置为默认
    const result = await createHttpRequest(app)
      .put(`/app/user/address/${addressId}/default`)
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toBe(200);
    expect(result.body.code).toBe(0);
  });
});
