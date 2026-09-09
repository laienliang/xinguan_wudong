import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 商品评价表
 */
@Entity('shop_review')
export class ShopReviewEntity extends BaseEntity {
  @Column({ comment: '订单ID', type: 'bigint' })
  orderId: string;

  @Column({ comment: '订单明细ID', type: 'bigint' })
  orderItemId: string;

  @Index()
  @Column({ comment: '用户ID', type: 'bigint' })
  userId: string;

  @Index()
  @Column({ comment: '商品ID', type: 'bigint' })
  goodsId: string;

  @Column({ comment: '评分：1-5星', type: 'tinyint', default: 5 })
  score: number;

  @Column({ comment: '评价内容', length: 500 })
  content: string;

  @Column({ comment: '评价图片（JSON数组）', type: 'simple-json', nullable: true })
  images: any;

  @Column({ comment: '追评内容', length: 500, nullable: true })
  appendContent: string;

  @Column({ comment: '追评时间', type: 'datetime', nullable: true })
  appendTime: Date;

  @Column({ comment: '商家回复', length: 500, nullable: true })
  merchantReply: string;

  @Column({ comment: '回复时间', type: 'datetime', nullable: true })
  replyTime: Date;
}
