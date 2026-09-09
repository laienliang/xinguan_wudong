import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework } from '@midwayjs/koa';
import * as fs from 'fs';
import * as path from 'path';

describe('test/base/upload.test.ts', () => {
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

  it('should upload image', async () => {
    // 创建测试图片
    const testImagePath = path.join(__dirname, 'test.jpg');
    const testImage = Buffer.from('fake-image-data');
    fs.writeFileSync(testImagePath, testImage);

    const result = await createHttpRequest(app)
      .post('/app/upload/image')
      .set('Authorization', `Bearer ${token}`)
      .attach('file', testImagePath);

    expect(result.status).toBe(200);
    expect(result.body.code).toBe(0);
    expect(result.body.data).toHaveProperty('url');

    // 清理测试文件
    fs.unlinkSync(testImagePath);
  });

  it('should reject oversized image', async () => {
    // 创建超大图片（模拟）
    const testImagePath = path.join(__dirname, 'large.jpg');
    const largeImage = Buffer.alloc(6 * 1024 * 1024); // 6MB
    fs.writeFileSync(testImagePath, largeImage);

    const result = await createHttpRequest(app)
      .post('/app/upload/image')
      .set('Authorization', `Bearer ${token}`)
      .attach('file', testImagePath);

    expect(result.status).toBe(200);
    expect(result.body.code).toBe(3002); // 文件过大错误码

    // 清理测试文件
    fs.unlinkSync(testImagePath);
  });
});
