import { ModuleConfig } from '@cool-midway/core';

/**
 * 模块配置
 */
export default () => {
  return {
    // 模块名称
    name: '餐饮美食模块',
    // 模块描述
    description: '餐厅管理、餐位预订、农产品销售等功能',
    // 中间件
    middlewares: [],
    // 全局中间件
    globalMiddlewares: [],
  } as ModuleConfig;
};
