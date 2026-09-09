import { Provide, Inject } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { OrderEntity } from '../entity/order';
import { BaseService } from '@cool-midway/core';

@Provide()
export class OrderService extends BaseService {
  @InjectEntityModel(OrderEntity)
  orderEntity: Repository<OrderEntity>;

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
   * 创建订单
   */
  async create(dto: any): Promise<OrderEntity> {
    const order = new OrderEntity();
    order.orderNo = this.generateOrderNo();
    order.userId = dto.userId;
    order.type = dto.type;
    order.totalAmount = dto.totalAmount;
    order.payAmount = dto.payAmount;
    order.remark = dto.remark;
    order.status = 1; // 待支付

    return await this.orderEntity.save(order);
  }

  /**
   * 订单列表（分页）
   */
  async list(userId: string, query: any): Promise<{ list: OrderEntity[], total: number }> {
    const { page = 1, pageSize = 10, status, type } = query;

    const where: any = { userId };
    if (status) where.status = status;
    if (type) where.type = type;

    const [list, total] = await this.orderEntity.findAndCount({
      where,
      order: { createTime: 'DESC' },
      skip: (page - 1) * pageSize,
      take: pageSize,
    });

    return { list, total };
  }

  /**
   * 订单详情
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
