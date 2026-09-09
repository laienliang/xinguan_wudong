import { Provide } from '@midwayjs/core';
import { IMiddleware } from '@midwayjs/core';

/**
 * 测试环境 Mock 翻译中间件
 */
@Provide()
export class BaseTranslateMiddleware implements IMiddleware<any, any> {
  resolve() {
    return async (ctx, next) => {
      // 测试环境不做任何处理，直接通过
      await next();
    };
  }
}
