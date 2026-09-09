import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 路线套餐表（支持多租户）
 */
@Entity('tour_route')
export class TourRouteEntity extends BaseEntity {
  @Column({ comment: '路线标题', length: 200 })
  title: string;

  @Column({ comment: '行程天数', type: 'int', default: 1 })
  days: number;

  @Column({ comment: '价格', type: 'decimal', precision: 10, scale: 2, default: 0 })
  price: number;

  @Column({ comment: '包含项目', type: 'simple-json', nullable: true })
  includeItems: string[];

  @Column({ comment: '出发地', length: 100 })
  departure: string;

  @Column({ comment: '目的地', length: 100 })
  destination: string;

  @Column({ comment: '住宿标准', length: 200, nullable: true })
  accommodation: string;

  @Column({ comment: '餐饮标准', length: 200, nullable: true })
  catering: string;

  @Column({ comment: '主图', length: 255 })
  mainImage: string;

  @Column({ comment: '图片集', type: 'simple-json', nullable: true })
  images: string[];

  @Column({ comment: '介绍', type: 'text', nullable: true })
  intro: string;

  @Column({ comment: '注意事项', type: 'text', nullable: true })
  notice: string;

  @Index()
  @Column({ comment: '状态：0下架 1上架', type: 'tinyint', default: 1 })
  status: number;
}
