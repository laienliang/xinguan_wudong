import { Provide, Inject } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { TourTicketOrderEntity } from '../entity/ticket-order';
import { BaseService } from '@cool-midway/core';
import { TourTicketTypeEntity } from '../entity/ticket-type';
import { TourETicketService } from './e-ticket';

/**
 * 门票订单服务
 */
@Provide()
export class TourTicketOrderService extends BaseService {
  @InjectEntityModel(TourTicketOrderEntity)
  tourTicketOrderEntity: Repository<TourTicketOrderEntity>;

  @InjectEntityModel(TourTicketTypeEntity)
  tourTicketTypeEntity: Repository<TourTicketTypeEntity>;

  @Inject()
  tourETicketService: TourETicketService;

  /**
   * 修改前处理
   */
  async modifyBefore(data: any, type: 'delete' | 'update' | 'add') {
    if (type === 'add') {
      // 检查票种库存
      const ticketType = await this.tourTicketTypeEntity.findOne({
        where: { id: data.ticketTypeId },
      });

      if (!ticketType) {
        throw new Error('票种不存在');
      }

      if (ticketType.stock !== -1 && ticketType.stock < data.quantity) {
        throw new Error('票种库存不足');
      }

      // 扣减库存（如果不是无限制）
      if (ticketType.stock !== -1) {
        await this.tourTicketTypeEntity.update(
          { id: data.ticketTypeId },
          { stock: ticketType.stock - data.quantity }
        );
      }
    }
  }

  /**
   * 生成电子票（支付成功后调用）
   */
  async generateETickets(orderId: string) {
    const order = await this.tourTicketOrderEntity.findOne({
      where: { orderId },
    });

    if (!order) {
      throw new Error('订单不存在');
    }

    // 根据数量生成对应数量的电子票
    const tickets = [];
    for (let i = 0; i < order.quantity; i++) {
      const ticket = await this.tourETicketService.generate(orderId, order.useDate);
      tickets.push(ticket);
    }

    return tickets;
  }
}
