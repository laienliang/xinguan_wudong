import { ModuleConfig } from '@cool-midway/core';

export default () => {
  return {
    // 模块名称
    name: '消息通知模块',
    // 模块描述
    description: '消息通知模块',
    // 中间件
    middlewares: [],
    // 模块加载顺序，默认为0，值越大越优先加载
    order: 0,
  } as ModuleConfig;
};
