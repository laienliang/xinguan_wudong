import { Provide, Config } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { OrderEntity } from '../entity/order';
import { BaseService } from '@cool-midway/core';

/**
 * 订单服务
 */
@Provide()
export class OrderService extends BaseService {
  @InjectEntityModel(OrderEntity)
  orderEntity: Repository<OrderEntity>;

  @Config('typeorm.dataSource.default.type')
  ormType: string;

  /**
   * 生成订单号
   * 格式：时间戳(13位) + 随机数(6位)
   */
  generateOrderNo(): string {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    return `${timestamp}${random}`;
  }

  /**
   * 新增订单前自动生成订单号
   */
  async modifyBefore(data: any, type: 'delete' | 'update' | 'add') {
    if (type === 'add') {
      data.orderNo = this.generateOrderNo();
      data.status = 1; // 待支付
    }
  }

  /**
   * 订单详情（按订单号）
   */
  async detail(orderNo: string): Promise<OrderEntity> {
    return await this.orderEntity.findOne({
      where: { orderNo },
    });
  }

  /**
   * 更新订单状态
   */
  async updateStatus(orderNo: string, status: number): Promise<void> {
    await this.orderEntity.update({ orderNo }, { status });
  }

  /**
   * 取消订单
   */
  async cancel(orderNo: string): Promise<void> {
    const order = await this.detail(orderNo);

    if (!order) {
      throw new Error('订单不存在');
    }

    if (order.status !== 1) {
      throw new Error('只能取消待支付订单');
    }

    await this.updateStatus(orderNo, 3); // 已取消
  }

  /**
   * 支付订单
   */
  async pay(orderNo: string, payType: number, transactionId: string): Promise<void> {
    await this.orderEntity.update(
      { orderNo },
      {
        status: 2, // 已支付
        payType,
        payTransactionId: transactionId,
        payTime: new Date(),
      }
    );
  }
}
