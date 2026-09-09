import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 景区表（支持多租户）
 */
@Entity('tour_scenic_spot')
export class TourScenicSpotEntity extends BaseEntity {
  @Column({ comment: '景区名称', length: 100 })
  name: string;

  @Column({ comment: '地址', length: 200 })
  address: string;

  @Column({ comment: '经度', type: 'decimal', precision: 10, scale: 6 })
  longitude: number;

  @Column({ comment: '纬度', type: 'decimal', precision: 10, scale: 6 })
  latitude: number;

  @Column({ comment: '开放时间', length: 100, nullable: true })
  openingHours: string;

  @Column({ comment: '主图', length: 255 })
  mainImage: string;

  @Column({ comment: '图片集', type: 'simple-json', nullable: true })
  images: string[];

  @Column({ comment: '介绍', type: 'text', nullable: true })
  intro: string;

  @Index()
  @Column({ comment: '状态：0下架 1上架', type: 'tinyint', default: 1 })
  status: number;
}
