import { ModuleConfig } from '@cool-midway/core';

export default () => {
  return {
    // 模块名称
    name: '订单模块',
    // 模块描述
    description: '统一订单中心',
    // 中间件
    middlewares: [],
    // 模块加载顺序，默认为0，值越大越优先加载
    order: 0,
  } as ModuleConfig;
};
