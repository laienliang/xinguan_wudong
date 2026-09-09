import { ModuleConfig } from '@cool-midway/core';

/**
 * 住宿预订模块配置
 */
export default () => {
  return {
    // 模块名称
    name: '住宿预订模块',
    // 模块描述
    description: '民宿管理、房态日历、住宿预订',
    // 中间件
    middlewares: [],
    // 全局中间件
    globalMiddlewares: [],
  } as ModuleConfig;
};
