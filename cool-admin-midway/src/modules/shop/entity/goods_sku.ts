import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 商品SKU表（支持多租户）
 */
@Entity('shop_goods_sku')
export class ShopGoodsSKUEntity extends BaseEntity {
  @Index()
  @Column({ comment: '商品ID', type: 'bigint' })
  goodsId: string;

  @Column({ comment: '规格名称', length: 100 })
  skuName: string;

  @Column({ comment: '价格', type: 'decimal', precision: 10, scale: 2, default: 0 })
  price: number;

  @Column({ comment: '库存', type: 'int', default: 0 })
  stock: number;

  @Column({ comment: 'SKU图片', length: 255, nullable: true })
  image: string;
}
