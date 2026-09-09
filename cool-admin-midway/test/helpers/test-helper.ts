import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework } from '@midwayjs/koa';
import { Application } from '@midwayjs/koa';

/**
 * 测试辅助工具类
 */
export class TestHelper {
  private static app: Application;

  /**
   * 创建测试应用
   */
  static async createTestApp() {
    if (!this.app) {
      this.app = await createApp<Framework>();
    }
    return this.app;
  }

  /**
   * 关闭测试应用
   */
  static async closeTestApp() {
    if (this.app) {
      await close(this.app);
      this.app = null;
    }
  }

  /**
   * 创建 HTTP 请求客户端
   */
  static createRequest() {
    return createHttpRequest(this.app);
  }

  /**
   * 模拟管理员登录并获取 Token
   */
  static async getAdminToken() {
    const result = await this.createRequest()
      .post('/admin/base/open/login')
      .send({
        username: 'admin',
        password: '123456',
        captchaId: 'test',
        verifyCode: '1234',
      });

    if (result.body && result.body.data && result.body.data.token) {
      return result.body.data.token;
    }
    return null;
  }

  /**
   * 生成测试用户数据
   */
  static generateUserData(overrides = {}) {
    return {
      username: `test_user_${Date.now()}`,
      password: '123456',
      phone: `1380000${Math.floor(Math.random() * 10000)}`,
      nickName: '测试用户',
      ...overrides,
    };
  }

  /**
   * 生成测试商品数据
   */
  static generateGoodsData(overrides = {}) {
    return {
      name: `测试商品_${Date.now()}`,
      categoryId: 1,
      price: 99.99,
      stock: 100,
      description: '这是一个测试商品',
      status: 1,
      ...overrides,
    };
  }

  /**
   * 生成测试订单数据
   */
  static generateOrderData(overrides = {}) {
    return {
      userId: 1,
      goodsId: 1,
      quantity: 1,
      totalAmount: 99.99,
      status: 1,
      ...overrides,
    };
  }

  /**
   * 清理测试数据
   */
  static async cleanTestData(entityClass: any, condition: any) {
    const app = await this.createTestApp();
    const repository = await app.getApplicationContext().getAsync(entityClass);
    if (repository) {
      await repository.delete(condition);
    }
  }

  /**
   * 等待指定时间
   */
  static wait(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

/**
 * 测试数据工厂
 */
export class TestDataFactory {
  /**
   * 创建测试分类
   */
  static createCategory(data = {}) {
    return {
      name: `分类_${Date.now()}`,
      sort: 0,
      status: 1,
      ...data,
    };
  }

  /**
   * 创建测试商品
   */
  static createGoods(data = {}) {
    return {
      name: `商品_${Date.now()}`,
      categoryId: 1,
      price: parseFloat((Math.random() * 1000).toFixed(2)),
      stock: Math.floor(Math.random() * 1000),
      sales: 0,
      status: 1,
      ...data,
    };
  }

  /**
   * 创建测试订单
   */
  static createOrder(data = {}) {
    return {
      userId: 1,
      orderNo: `ORDER_${Date.now()}`,
      totalAmount: 100.00,
      payAmount: 100.00,
      status: 1,
      ...data,
    };
  }

  /**
   * 批量创建测试数据
   */
  static createBatch<T>(factory: () => T, count: number): T[] {
    return Array.from({ length: count }, () => factory());
  }
}

/**
 * Mock 数据生成器
 */
export class MockDataGenerator {
  /**
   * 生成随机字符串
   */
  static randomString(length = 10): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  /**
   * 生成随机数字
   */
  static randomNumber(min = 0, max = 100): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * 生成随机手机号
   */
  static randomPhone(): string {
    return `138${this.randomNumber(10000000, 99999999)}`;
  }

  /**
   * 生成随机邮箱
   */
  static randomEmail(): string {
    return `${this.randomString(8)}@test.com`;
  }

  /**
   * 生成随机日期
   */
  static randomDate(start?: Date, end?: Date): Date {
    const startTime = start ? start.getTime() : Date.now() - 365 * 24 * 60 * 60 * 1000;
    const endTime = end ? end.getTime() : Date.now();
    return new Date(startTime + Math.random() * (endTime - startTime));
  }
}
