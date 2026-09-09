import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework } from '@midwayjs/koa';

describe('test/message/message.test.ts', () => {
  let app;
  let token: string;
  let adminToken: string;

  beforeAll(async () => {
    app = await createApp<Framework>();

    // 用户登录
    const loginResult = await createHttpRequest(app)
      .post('/app/user/login')
      .send({ phone: '13800138000', password: '123456' });
    token = loginResult.body.data.token;

    // 管理员登录
    const adminLoginResult = await createHttpRequest(app)
      .post('/admin/base/open/login')
      .send({ username: 'admin', password: 'admin' });
    adminToken = adminLoginResult.body.data.token;
  });

  afterAll(async () => {
    await close(app);
  });

  it('should list messages', async () => {
    const result = await createHttpRequest(app)
      .get('/app/message?page=1&pageSize=10')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toBe(200);
    expect(result.body.code).toBe(0);
    expect(result.body.data).toHaveProperty('list');
    expect(result.body.data).toHaveProperty('total');
    expect(result.body.data).toHaveProperty('unreadCount');
  });

  it('should get unread count', async () => {
    const result = await createHttpRequest(app)
      .get('/app/message/unread-count')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toBe(200);
    expect(result.body.code).toBe(0);
    expect(typeof result.body.data).toBe('number');
  });

  it('should send message to user (admin)', async () => {
    const result = await createHttpRequest(app)
      .post('/admin/message/send')
      .set('Authorization', `Bearer ${adminToken}`)
      .send({
        userId: '1',
        type: 1,
        title: '系统通知',
        content: '这是一条测试消息',
      });

    expect(result.status).toBe(200);
    expect(result.body.code).toBe(0);
  });

  it('should send message to all (admin)', async () => {
    const result = await createHttpRequest(app)
      .post('/admin/message/send-to-all')
      .set('Authorization', `Bearer ${adminToken}`)
      .send({
        type: 1,
        title: '全体通知',
        content: '这是一条群发消息',
      });

    expect(result.status).toBe(200);
    expect(result.body.code).toBe(0);
  });

  it('should mark messages as read', async () => {
    // 假设有消息ID
    const result = await createHttpRequest(app)
      .put('/app/message/read')
      .set('Authorization', `Bearer ${token}`)
      .send({ ids: ['1', '2'] });

    expect(result.status).toBe(200);
    expect(result.body.code).toBe(0);
  });

  it('should mark all as read', async () => {
    const result = await createHttpRequest(app)
      .put('/app/message/read-all')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toBe(200);
    expect(result.body.code).toBe(0);
  });
});
