import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 餐厅评价表
 */
@Entity('food_restaurant_review')
export class FoodRestaurantReviewEntity extends BaseEntity {
  @Column({ comment: '订单ID', type: 'bigint' })
  orderId: string;

  @Index()
  @Column({ comment: '用户ID', type: 'bigint' })
  userId: string;

  @Index()
  @Column({ comment: '餐厅ID', type: 'bigint' })
  restaurantId: string;

  @Column({ comment: '评分：1-5星', type: 'tinyint', default: 5 })
  score: number;

  @Column({ comment: '评价内容', length: 500, nullable: true })
  content: string;

  @Column({ comment: '图片', type: 'simple-json', nullable: true })
  images: string[];

  @Column({ comment: '商家回复', length: 500, nullable: true })
  merchantReply: string;

  @Column({ comment: '回复时间', type: 'datetime', nullable: true })
  replyTime: Date;
}
