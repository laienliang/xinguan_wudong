import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 商品订单明细表
 */
@Entity('shop_order_item')
export class ShopOrderItemEntity extends BaseEntity {
  @Index()
  @Column({ comment: '订单ID', type: 'bigint' })
  orderId: string;

  @Column({ comment: '商品ID', type: 'bigint' })
  goodsId: string;

  @Column({ comment: 'SKU ID', type: 'bigint', nullable: true })
  skuId: string;

  @Column({ comment: '商品名称', length: 200 })
  goodsName: string;

  @Column({ comment: '规格名称', length: 100, nullable: true })
  skuName: string;

  @Column({ comment: '单价', type: 'decimal', precision: 10, scale: 2, default: 0 })
  price: number;

  @Column({ comment: '数量', type: 'int', default: 1 })
  quantity: number;

  @Column({ comment: '小计', type: 'decimal', precision: 10, scale: 2, default: 0 })
  amount: number;

  @Column({ comment: '商品图片', length: 255, nullable: true })
  goodsImage: string;
}
