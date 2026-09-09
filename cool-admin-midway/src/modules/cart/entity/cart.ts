import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 购物车
 */
@Entity('cart')
@Index(['userId', 'goodsId', 'skuId'], { unique: true })
export class CartEntity extends BaseEntity {
  @Index()
  @Column({ comment: '用户ID', type: 'bigint' })
  userId: string;

  @Column({ comment: '商品ID', type: 'bigint' })
  goodsId: string;

  @Column({
    comment: '商品类型：1非遗商品 2农产品',
    type: 'tinyint'
  })
  goodsType: number;

  @Column({ comment: 'SKU ID', type: 'bigint', nullable: true })
  skuId: string;

  @Column({ comment: '数量', type: 'int', default: 1 })
  quantity: number;

  @Column({ comment: '是否选中：0否 1是', type: 'tinyint', default: 1 })
  selected: number;
}
