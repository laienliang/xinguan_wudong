import { CoolConfig } from '@cool-midway/core';
import { MidwayConfig } from '@midwayjs/core';
import { TenantSubscriber } from '../modules/base/db/tenant';

/**
 * 单元测试环境配置
 */
export default {
  // 测试应用使用临时端口，避免多个测试实例关闭时发生端口竞争。
  koa: {
    port: 0,
  },
  typeorm: {
    dataSource: {
      default: {
        type: 'mysql',
        host: process.env.TEST_DB_HOST || '127.0.0.1',
        port: parseInt(process.env.TEST_DB_PORT || '3306'),
        username: process.env.TEST_DB_USER || 'root',
        password: process.env.TEST_DB_PASSWORD || '',
        database: process.env.TEST_DB_NAME || 'cool_test',
        // 自动建表 - 测试环境每次运行前清空并重建
        synchronize: true,
        // 测试环境清空数据库
        dropSchema: false,
        // 打印日志 - 测试时可以关闭以减少输出
        logging: false,
        // 字符集
        charset: 'utf8mb4',
        // 是否开启缓存 - 测试环境关闭缓存
        cache: false,
        // 实体路径
        entities: ['**/modules/*/entity'],
        // 订阅者
        subscribers: [TenantSubscriber],
      },
    },
  },
  cool: {
    // 测试环境不需要自动导入
    initDB: false,
    initMenu: false,
    eps: false,
    initJudge: 'file',
    // 测试环境禁用多租户（简化测试）
    tenant: {
      enable: false,
      urls: [],
    },
    // 测试环境禁用国际化
    i18n: {
      enable: false,
      languages: ['zh-cn'],
    },
    // 测试结束前关闭软删除事件，避免未等待的异步事件访问已关闭连接。
    crud: {
      softDelete: false,
    },
  } as CoolConfig,
  // 模块配置 - 测试环境需要手动添加
  module: {
    // base 模块配置
    base: {
      jwt: {
        sso: false,
        secret: '2eb0f9eb-f4b4-4d27-bd9e-c549ea34d833',
        token: {
          expire: 2 * 3600,
          refreshExpire: 24 * 3600 * 15,
        },
      },
    },
    // user 模块配置
    user: {
      sms: {
        timeout: 60 * 3,
      },
      jwt: {
        expire: 60 * 60 * 24,
        refreshExpire: 60 * 60 * 24 * 30,
        secret: '5bd61df7-8a04-4a6e-aaad-9d520d0ec195x',
      },
    },
  },
} as MidwayConfig;
