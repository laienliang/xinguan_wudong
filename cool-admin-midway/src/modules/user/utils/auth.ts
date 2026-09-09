import * as jwt from 'jsonwebtoken';
import { Context } from '@midwayjs/koa';

/**
 * 从请求中获取用户信息
 * 优先使用 ctx.user，如果不存在则手动解析 token
 */
export function getUserFromContext(ctx: Context, jwtSecret: string): any {
  // 如果已经有用户信息，直接返回
  if (ctx.user) {
    return ctx.user;
  }

  // 尝试从 Authorization 头获取 token
  let token = ctx.get('Authorization');
  if (!token) {
    return null;
  }

  // 去掉 Bearer 前缀（如果有）
  if (token.startsWith('Bearer ')) {
    token = token.substring(7);
  }

  try {
    // 验证并解析 token
    const decoded = jwt.verify(token, jwtSecret);
    // 将解析结果设置到 ctx.user，供后续使用
    ctx.user = decoded;
    return decoded;
  } catch (error) {
    return null;
  }
}
