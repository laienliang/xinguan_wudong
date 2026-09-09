import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 餐厅表（支持多租户）
 */
@Entity('food_restaurant')
export class FoodRestaurantEntity extends BaseEntity {
  @Column({ comment: '餐厅名称', length: 100 })
  name: string;

  @Column({ comment: '地址', length: 200 })
  address: string;

  @Column({ comment: '经度', type: 'decimal', precision: 10, scale: 6 })
  longitude: number;

  @Column({ comment: '纬度', type: 'decimal', precision: 10, scale: 6 })
  latitude: number;

  @Column({ comment: '营业时间', length: 100, nullable: true })
  businessHours: string;

  @Column({ comment: '容纳人数', type: 'int', default: 0 })
  capacity: number;

  @Column({ comment: '主图', length: 255, nullable: true })
  mainImage: string;

  @Column({ comment: '图片集', type: 'simple-json', nullable: true })
  images: string[];

  @Column({ comment: '餐厅介绍', type: 'text', nullable: true })
  intro: string;

  @Column({ comment: '人均消费', type: 'decimal', precision: 10, scale: 2, default: 0 })
  avgPrice: number;

  @Column({ comment: '评分', type: 'decimal', precision: 3, scale: 1, default: 5.0 })
  score: number;

  @Index()
  @Column({ comment: '状态：0下架 1营业', type: 'tinyint', default: 1 })
  status: number;
}
