import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 门票订单表
 */
@Entity('tour_ticket_order')
export class TourTicketOrderEntity extends BaseEntity {
  @Column({ comment: '关联统一订单ID', type: 'bigint', unique: true })
  orderId: string;

  @Index()
  @Column({ comment: '用户ID', type: 'bigint' })
  userId: string;

  @Column({ comment: '景区ID', type: 'bigint' })
  scenicSpotId: string;

  @Column({ comment: '票种ID', type: 'bigint' })
  ticketTypeId: string;

  @Index()
  @Column({ comment: '使用日期', type: 'date' })
  useDate: string;

  @Column({ comment: '数量', type: 'int', default: 1 })
  quantity: number;

  @Column({ comment: '游客信息', type: 'simple-json', nullable: true })
  tourists: any[];

  @Column({ comment: '状态：1待使用 2已使用 3已过期 4已退票', type: 'tinyint', default: 1 })
  status: number;
}
