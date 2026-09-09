import { Get, Inject, Provide } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { OrderEntity } from '../../../order/entity/order';

/**
 * Admin端数据统计控制器
 */
@Provide()
@CoolController()
export class AdminStatisticsController extends BaseController {
  @InjectEntityModel(OrderEntity)
  orderEntity: Repository<OrderEntity>;

  /**
   * 获取销售额和订单量统计
   */
  @Get('/salesStats')
  async salesStats() {
    // 查询总订单数
    const totalOrders = await this.orderEntity.count();

    // 查询已支付订单的总销售额
    const salesResult = await this.orderEntity
      .createQueryBuilder('order')
      .select('SUM(order.payAmount)', 'totalSales')
      .where('order.status IN (:...statuses)', { statuses: [2, 4] }) // 2=已支付, 4=已完成
      .getRawOne();

    // 按订单类型统计
    const ordersByType = await this.orderEntity
      .createQueryBuilder('order')
      .select('order.type', 'type')
      .addSelect('COUNT(*)', 'count')
      .addSelect('SUM(order.payAmount)', 'amount')
      .where('order.status IN (:...statuses)', { statuses: [2, 4] })
      .groupBy('order.type')
      .getRawMany();

    return this.ok({
      totalOrders,
      totalSales: parseFloat(salesResult?.totalSales || '0'),
      ordersByType: ordersByType.map(item => ({
        type: item.type,
        count: parseInt(item.count),
        amount: parseFloat(item.amount || '0'),
      })),
    });
  }

  /**
   * 获取最近7天订单趋势
   */
  @Get('/orderTrend')
  async orderTrend() {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const trend = await this.orderEntity
      .createQueryBuilder('order')
      .select('DATE(order.createTime)', 'date')
      .addSelect('COUNT(*)', 'count')
      .addSelect('SUM(order.payAmount)', 'amount')
      .where('order.createTime >= :date', { date: sevenDaysAgo })
      .andWhere('order.status IN (:...statuses)', { statuses: [2, 4] })
      .groupBy('DATE(order.createTime)')
      .orderBy('date', 'ASC')
      .getRawMany();

    return this.ok(
      trend.map(item => ({
        date: item.date,
        count: parseInt(item.count),
        amount: parseFloat(item.amount || '0'),
      }))
    );
  }
}
