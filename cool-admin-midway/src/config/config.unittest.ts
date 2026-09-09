import { CoolConfig } from '@cool-midway/core';
import { MidwayConfig } from '@midwayjs/core';
import { TenantSubscriber } from '../modules/base/db/tenant';

/**
 * 单元测试环境配置
 */
export default {
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
    // 测试环境禁用多租户（简化测试）
    tenant: {
      enable: false,
    },
  } as CoolConfig,
} as MidwayConfig;
