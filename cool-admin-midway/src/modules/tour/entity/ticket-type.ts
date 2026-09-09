import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 票种表
 */
@Entity('tour_ticket_type')
export class TourTicketTypeEntity extends BaseEntity {
  @Index()
  @Column({ comment: '景区ID', type: 'bigint' })
  scenicSpotId: string;

  @Column({ comment: '票种名称（成人/儿童/学生票）', length: 100 })
  name: string;

  @Column({ comment: '价格', type: 'decimal', precision: 10, scale: 2, default: 0 })
  price: number;

  @Column({ comment: '库存（-1表示无限制）', type: 'int', default: 999999 })
  stock: number;

  @Column({ comment: '有效天数', type: 'int', default: 1 })
  validityDays: number;

  @Column({ comment: '说明', length: 500, nullable: true })
  intro: string;

  @Column({ comment: '状态：0下架 1上架', type: 'tinyint', default: 1 })
  status: number;
}
