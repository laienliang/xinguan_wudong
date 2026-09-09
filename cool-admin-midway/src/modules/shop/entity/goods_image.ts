import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 商品图片表
 */
@Entity('shop_goods_image')
export class ShopGoodsImageEntity extends BaseEntity {
  @Index()
  @Column({ comment: '商品ID', type: 'bigint' })
  goodsId: string;

  @Column({ comment: '图片URL', length: 255 })
  imageUrl: string;

  @Column({ comment: '排序', type: 'int', default: 0 })
  sort: number;
}
