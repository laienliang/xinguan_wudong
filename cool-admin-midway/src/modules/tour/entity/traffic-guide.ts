import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 交通攻略表
 */
@Entity('tour_traffic_guide')
export class TourTrafficGuideEntity extends BaseEntity {
  @Column({ comment: '标题', length: 200 })
  title: string;

  @Column({ comment: '出发地', length: 100 })
  departure: string;

  @Column({ comment: '目的地', length: 100 })
  destination: string;

  @Column({ comment: '交通方式', length: 50 })
  transportation: string;

  @Column({ comment: '时长', length: 50, nullable: true })
  duration: string;

  @Column({ comment: '费用', length: 50, nullable: true })
  cost: string;

  @Column({ comment: '详细说明', type: 'text', nullable: true })
  detail: string;

  @Column({ comment: '攻略图片', type: 'simple-json', nullable: true })
  images: string[];

  @Index()
  @Column({ comment: '状态：0下架 1发布', type: 'tinyint', default: 1 })
  status: number;
}
