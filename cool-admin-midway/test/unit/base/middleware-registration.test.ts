import { BaseAuthorityMiddleware } from '../../../src/modules/base/middleware/authority';
import { BaseTranslateService } from '../../../src/modules/base/service/translate';
import { TestHelper } from '../../helpers/test-helper';

describe('测试应用中间件注册', () => {
  afterAll(async () => {
    await TestHelper.closeTestApp();
  });

  it('应注册全局权限中间件', async () => {
    const app = await TestHelper.createTestApp();

    await expect(
      app.getApplicationContext().getAsync(BaseAuthorityMiddleware as any)
    ).resolves.toBeInstanceOf(BaseAuthorityMiddleware);
  });

  it('应注册翻译服务', async () => {
    const app = await TestHelper.createTestApp();

    await expect(
      app.getApplicationContext().getAsync(BaseTranslateService as any)
    ).resolves.toBeInstanceOf(BaseTranslateService);
  });

  it('应解析中间件队列中的权限中间件', async () => {
    const app = await TestHelper.createTestApp();
    const middleware = Array.from(app.getMiddleware() as any).find(
      (item: any) => item === 'baseAuthorityMiddleware'
    );

    expect(middleware).toBe('baseAuthorityMiddleware');
    await expect(
      app.getApplicationContext().getAsync(middleware as string)
    ).resolves.toBeInstanceOf(BaseAuthorityMiddleware);
  });
});
