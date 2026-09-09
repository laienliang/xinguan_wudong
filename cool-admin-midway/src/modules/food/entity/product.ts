import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 农产品表（支持多租户）
 */
@Entity('food_product')
export class FoodProductEntity extends BaseEntity {
  @Index()
  @Column({ comment: '分类ID', type: 'int' })
  categoryId: number;

  @Column({ comment: '产品名称', length: 200 })
  name: string;

  @Column({ comment: '副标题', length: 200, nullable: true })
  subtitle: string;

  @Column({ comment: '主图', length: 255, nullable: true })
  mainImage: string;

  @Column({ comment: '价格', type: 'decimal', precision: 10, scale: 2, default: 0 })
  price: number;

  @Column({ comment: '市场价', type: 'decimal', precision: 10, scale: 2, default: 0 })
  marketPrice: number;

  @Column({ comment: '库存', type: 'int', default: 0 })
  stock: number;

  @Column({ comment: '销量', type: 'int', default: 0 })
  sales: number;

  @Column({ comment: '产地', length: 100, nullable: true })
  origin: string;

  @Column({ comment: '保质期', length: 50, nullable: true })
  shelfLife: string;

  @Column({ comment: '规格', length: 50, nullable: true })
  spec: string;

  @Column({ comment: '详情', type: 'text', nullable: true })
  detail: string;

  @Index()
  @Column({ comment: '状态：0下架 1上架', type: 'tinyint', default: 1 })
  status: number;
}
