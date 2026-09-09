import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 民宿评价表
 */
@Entity('hotel_review')
export class HotelReviewEntity extends BaseEntity {
  @Column({ comment: '订单ID', type: 'bigint' })
  orderId: number;

  @Index()
  @Column({ comment: '用户ID', type: 'bigint' })
  userId: number;

  @Index()
  @Column({ comment: '民宿ID', type: 'bigint' })
  houseId: number;

  @Column({ comment: '评分：1-5星', type: 'tinyint', default: 5 })
  score: number;

  @Column({ comment: '评价内容', length: 500, nullable: true })
  content: string;

  @Column({ comment: '评价图片（JSON数组）', type: 'simple-json', nullable: true })
  images: string[];

  @Column({ comment: '商家回复', length: 500, nullable: true })
  merchantReply: string;

  @Column({ comment: '回复时间', type: 'datetime', nullable: true })
  replyTime: Date;
}
