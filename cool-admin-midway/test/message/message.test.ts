import { createHttpRequest } from '@midwayjs/mock';
import { TestHelper } from '../helpers/test-helper';

describe('test/message/message.test.ts', () => {
  let app;
  let token: string;
  let adminToken: string;

  beforeAll(async () => {
    app = await TestHelper.createTestApp();

    // 用户登录
    const loginResult = await createHttpRequest(app)
      .post('/app/user/login/password')
      .send({ phone: '13800138000', password: '123456' });
    token = loginResult.body?.data?.token;

    // 管理员登录
    adminToken = await TestHelper.getAdminToken();
  });

  afterAll(async () => {
    await TestHelper.closeTestApp();
  });

  it('should list messages', async () => {
    const result = await createHttpRequest(app)
      .post('/app/message/list').send({ page: 1, pageSize: 10 })
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toBe(200);
    expect(result.body.code).toBe(1000);
    expect(Array.isArray(result.body.data)).toBe(true);
  });

  it('should get unread count', async () => {
    const result = await createHttpRequest(app)
      .get('/app/message/unread-count')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toBe(200);
    expect(result.body.code).toBe(1000);
    expect(typeof result.body.data).toBe('number');
  });

  it('should send message to user (admin)', async () => {
    const result = await createHttpRequest(app)
      .post('/admin/message/send')
      .set('Authorization', adminToken)
      .send({
        userId: '1',
        type: 1,
        title: '系统通知',
        content: '这是一条测试消息',
      });

    expect(result.status).toBe(200);
    expect(result.body.code).toBe(1000);
  });

  it('should send message to all (admin)', async () => {
    const result = await createHttpRequest(app)
      .post('/admin/message/send-to-all')
      .set('Authorization', adminToken)
      .send({
        type: 1,
        title: '全体通知',
        content: '这是一条群发消息',
      });

    expect(result.status).toBe(200);
    expect(result.body.code).toBe(1000);
  });

  it('should mark messages as read', async () => {
    // 假设有消息ID
    const result = await createHttpRequest(app)
      .put('/app/message/read')
      .set('Authorization', `Bearer ${token}`)
      .send({ ids: ['1', '2'] });

    expect(result.status).toBe(200);
    expect(result.body.code).toBe(1000);
  });

  it('should mark all as read', async () => {
    const result = await createHttpRequest(app)
      .put('/app/message/read-all')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toBe(200);
    expect(result.body.code).toBe(1000);
  });
});
