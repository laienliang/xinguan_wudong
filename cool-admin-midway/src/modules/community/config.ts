import { ModuleConfig } from '@cool-midway/core';

/**
 * 社区模块配置
 */
export default () => {
  return {
    // 模块名称
    name: '社区-照片分享',
    // 模块描述
    description: '游记发布、互动评论、关注系统',
    // 中间件
    middlewares: [],
    // 全局中间件
    globalMiddlewares: [],
  } as ModuleConfig;
};
