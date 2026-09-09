import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 路线订单表
 */
@Entity('tour_route_order')
export class TourRouteOrderEntity extends BaseEntity {
  @Column({ comment: '关联统一订单ID', type: 'bigint', unique: true })
  orderId: string;

  @Index()
  @Column({ comment: '用户ID', type: 'bigint' })
  userId: string;

  @Column({ comment: '路线ID', type: 'bigint' })
  routeId: string;

  @Index()
  @Column({ comment: '出发日期', type: 'date' })
  departureDate: string;

  @Column({ comment: '人数', type: 'int', default: 1 })
  peopleCount: number;

  @Column({ comment: '游客信息', type: 'simple-json', nullable: true })
  tourists: any[];

  @Column({ comment: '状态：1待出行 2行程中 3已完成 4已取消', type: 'tinyint', default: 1 })
  status: number;
}
