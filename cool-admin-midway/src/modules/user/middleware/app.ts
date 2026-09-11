import { ALL, Config, Middleware } from '@midwayjs/core';
import { NextFunction, Context } from '@midwayjs/koa';
import { IMiddleware, Init, Inject } from '@midwayjs/core';
import * as jwt from 'jsonwebtoken';
import * as _ from 'lodash';
import { CoolCommException, CoolUrlTagData, TagTypes } from '@cool-midway/core';
import { Utils } from '../../../comm/utils';

/**
 * 用户
 */
@Middleware()
export class UserMiddleware implements IMiddleware<Context, NextFunction> {
  @Config(ALL)
  coolConfig;

  @Inject()
  coolUrlTagData: CoolUrlTagData;

  @Config('module.user.jwt')
  jwtConfig;

  ignoreUrls: string[] = [];

  @Config('koa.globalPrefix')
  prefix;

  @Inject()
  utils: Utils;

  @Init()
  async init() {
    const publicBrowseUrls = [
      '/app/shop/goods/info',
      '/app/shop/goods/list',
      '/app/shop/goods/page',
      '/app/shop/goods',
      '/app/shop/category/info',
      '/app/shop/category/list',
      '/app/food/restaurant/info',
      '/app/food/restaurant/list',
      '/app/food/restaurant/page',
      '/app/food/restaurant/nearby',
      '/app/food/restaurant',
      '/app/food/time-slot/info',
      '/app/food/time-slot/list',
      '/app/hotel/house/info',
      '/app/hotel/house/list',
      '/app/hotel/house/page',
      '/app/hotel/house/nearby',
      '/app/hotel/house',
      '/app/hotel/room_type/info',
      '/app/hotel/room_type/list',
      '/app/tour/scenic-spot/info',
      '/app/tour/scenic-spot/list',
      '/app/tour/scenic-spot/page',
      '/app/tour/scenic-spot/nearby',
      '/app/tour/scenic-spot',
      '/app/tour/ticket-type/info',
      '/app/tour/ticket-type/list',
      '/app/tour/route/info',
      '/app/tour/route/list',
      '/app/tour/route/page',
      '/app/tour/route',
      '/app/community/post/info',
      '/app/community/post/list',
      '/app/community/post/page',
      '/app/community/post',
      '/app/community/post/*/detail',
    ];
    this.ignoreUrls = [
      ...this.coolUrlTagData.byKey(TagTypes.IGNORE_TOKEN, 'app'),
      ...publicBrowseUrls,
    ];
  }

  resolve() {
    return async (ctx: Context, next: NextFunction) => {
      let { url } = ctx;
      url = url.replace(this.prefix, '').split('?')[0];
      if (_.startsWith(url, '/app/')) {
        let token = ctx.get('Authorization');

        // 去掉 Bearer 前缀（如果有）
        if (token && token.startsWith('Bearer ')) {
          token = token.substring(7);
        }

        try {
          ctx.user = jwt.verify(token, this.jwtConfig.secret);

          if (ctx.user.isRefresh) {
            throw new CoolCommException('登录失效~');
          }
        } catch (error) {
          // JWT 验证失败，保持 ctx.user 为 undefined
        }
        // 使用matchUrl方法来检查URL是否应该被忽略
        const isIgnored = this.ignoreUrls.some(pattern =>
          this.utils.matchUrl(pattern, url)
        );
        if (isIgnored) {
          await next();
          return;
        } else {
          if (!ctx.user) {
            ctx.status = 401;
            throw new CoolCommException('登录失效~');
          }
        }
      }
      await next();
    };
  }
}
