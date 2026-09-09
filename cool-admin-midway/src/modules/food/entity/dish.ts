import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 餐厅菜品表
 */
@Entity('food_dish')
export class FoodDishEntity extends BaseEntity {
  @Index()
  @Column({ comment: '餐厅ID', type: 'bigint' })
  restaurantId: string;

  @Column({ comment: '菜品名称', length: 100 })
  name: string;

  @Column({ comment: '价格', type: 'decimal', precision: 10, scale: 2, default: 0 })
  price: number;

  @Column({ comment: '主图', length: 255, nullable: true })
  mainImage: string;

  @Column({ comment: '介绍', length: 500, nullable: true })
  intro: string;

  @Column({ comment: '是否招牌菜：0否 1是', type: 'tinyint', default: 0 })
  isSignature: number;

  @Index()
  @Column({ comment: '状态：0下架 1上架', type: 'tinyint', default: 1 })
  status: number;
}
