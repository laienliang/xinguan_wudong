import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 电子票表
 */
@Entity('tour_e_ticket')
export class TourETicketEntity extends BaseEntity {
  @Index()
  @Column({ comment: '订单ID', type: 'bigint' })
  orderId: string;

  @Index()
  @Column({ comment: '电子票号（唯一）', length: 32, unique: true })
  ticketNo: string;

  @Column({ comment: '二维码图片URL', length: 255, nullable: true })
  qrCode: string;

  @Index()
  @Column({ comment: '有效日期', type: 'date' })
  validDate: string;

  @Column({ comment: '状态：1未使用 2已使用 3已过期', type: 'tinyint', default: 1 })
  status: number;

  @Column({ comment: '使用时间', type: 'datetime', nullable: true })
  usedTime: Date;
}
