import { BaseEntity } from '../../base/entity/base';
import { Column, Entity } from 'typeorm';

/**
 * 首页轮播图表
 */
@Entity('platform_banner')
export class PlatformBannerEntity extends BaseEntity {
  @Column({ comment: '标题', length: 100 })
  title: string;

  @Column({ comment: '图片URL', length: 255 })
  imageUrl: string;

  @Column({ comment: '跳转链接', length: 255, nullable: true })
  linkUrl: string;

  @Column({ comment: '排序', type: 'int', default: 0 })
  sort: number;

  @Column({ comment: '状态：0下架 1上架', type: 'tinyint', default: 1 })
  status: number;
}
