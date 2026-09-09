import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 商品表（支持多租户）
 */
@Entity('shop_goods')
export class ShopGoodsEntity extends BaseEntity {
  @Index()
  @Column({ comment: '分类ID', type: 'int' })
  categoryId: number;

  @Column({ comment: '商品标题', length: 200 })
  title: string;

  @Column({ comment: '副标题', length: 200, nullable: true })
  subtitle: string;

  @Column({ comment: '主图', length: 255 })
  mainImage: string;

  @Column({ comment: '价格', type: 'decimal', precision: 10, scale: 2, default: 0 })
  price: number;

  @Column({ comment: '市场价', type: 'decimal', precision: 10, scale: 2, default: 0 })
  marketPrice: number;

  @Column({ comment: '库存', type: 'int', default: 0 })
  stock: number;

  @Column({ comment: '销量', type: 'int', default: 0 })
  sales: number;

  @Column({ comment: '工艺介绍', type: 'text', nullable: true })
  craftIntro: string;

  @Column({ comment: '传承人ID', type: 'bigint', nullable: true })
  artisanId: string;

  @Column({ comment: '商品详情（富文本）', type: 'text', nullable: true })
  detail: string;

  @Index()
  @Column({ comment: '状态：0下架 1上架', type: 'tinyint', default: 1 })
  status: number;
}
