import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 商品分类表
 */
@Entity('shop_category')
export class ShopCategoryEntity extends BaseEntity {
  @Index()
  @Column({ comment: '父分类ID（0为顶级）', type: 'int', default: 0 })
  parentId: number;

  @Column({ comment: '分类名称', length: 50 })
  name: string;

  @Column({ comment: '分类图标', length: 255, nullable: true })
  icon: string;

  @Column({ comment: '排序', type: 'int', default: 0 })
  sort: number;

  @Column({ comment: '状态：0下架 1正常', type: 'tinyint', default: 1 })
  status: number;
}
