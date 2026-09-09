import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 民宿表（支持多租户）
 */
@Entity('hotel_house')
export class HotelHouseEntity extends BaseEntity {
  @Column({ comment: '民宿名称', length: 100 })
  name: string;

  @Column({ comment: '地址', length: 200 })
  address: string;

  @Column({ comment: '经度', type: 'decimal', precision: 10, scale: 6 })
  longitude: number;

  @Column({ comment: '纬度', type: 'decimal', precision: 10, scale: 6 })
  latitude: number;

  @Column({ comment: '风格标签（JSON数组）', type: 'simple-json', nullable: true })
  styleTags: string[];

  @Column({ comment: '设施标签（JSON数组）', type: 'simple-json', nullable: true })
  facilityTags: string[];

  @Column({ comment: '主图', length: 255 })
  mainImage: string;

  @Column({ comment: '图片集（JSON数组）', type: 'simple-json', nullable: true })
  images: string[];

  @Column({ comment: '介绍', type: 'text', nullable: true })
  intro: string;

  @Column({ comment: '评分', type: 'decimal', precision: 3, scale: 1, default: 5.0 })
  score: number;

  @Index()
  @Column({ comment: '状态：0下架 1上架', type: 'tinyint', default: 1 })
  status: number;
}
