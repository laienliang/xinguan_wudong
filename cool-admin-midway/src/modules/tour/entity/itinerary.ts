import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 路线行程表
 */
@Entity('tour_route_itinerary')
export class TourRouteItineraryEntity extends BaseEntity {
  @Index()
  @Column({ comment: '路线ID', type: 'bigint' })
  routeId: string;

  @Column({ comment: '第几天', type: 'int', default: 1 })
  dayNumber: number;

  @Column({ comment: '标题', length: 100 })
  title: string;

  @Column({ comment: '行程描述', type: 'text', nullable: true })
  description: string;

  @Column({ comment: '景点', type: 'simple-json', nullable: true })
  attractions: string[];

  @Column({ comment: '用餐安排', length: 100, nullable: true })
  meals: string;

  @Column({ comment: '住宿安排', length: 100, nullable: true })
  accommodation: string;

  @Column({ comment: '交通方式', length: 100, nullable: true })
  transportation: string;
}
