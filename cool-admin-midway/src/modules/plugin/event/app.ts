import { CoolEvent, Event } from '@cool-midway/core';
import { CachingFactory, MidwayCache } from '@midwayjs/cache-manager';
import {
  App,
  Config,
  ILogger,
  Inject,
  InjectClient,
  Logger,
} from '@midwayjs/core';
import { IMidwayKoaApplication } from '@midwayjs/koa';
import { PLUGIN_CACHE_KEY, PluginCenterService } from '../service/center';

/**
 * 插件事件
 */
@CoolEvent()
export class PluginAppEvent {
  @Logger()
  coreLogger: ILogger;

  @Config('module')
  config;

  @App()
  app: IMidwayKoaApplication;

  @InjectClient(CachingFactory, 'default')
  midwayCache: MidwayCache;

  @Event('onServerReady')
  async onServerReady() {
    // 测试环境跳过插件初始化
    if (process.env.NODE_ENV === 'unittest') {
      return;
    }
    await this.midwayCache.set(PLUGIN_CACHE_KEY, []);
    const pluginCenterService = await this.app
      .getApplicationContext()
      .getAsync(PluginCenterService);
    pluginCenterService.init();
  }
}
