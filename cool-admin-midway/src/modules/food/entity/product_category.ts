import { BaseEntity } from '../../base/entity/base';
import { Column, Entity } from 'typeorm';

/**
 * 农产品分类表
 */
@Entity('food_product_category')
export class FoodProductCategoryEntity extends BaseEntity {
  @Column({ comment: '分类名称', length: 50 })
  name: string;

  @Column({ comment: '图标', length: 255, nullable: true })
  icon: string;

  @Column({ comment: '排序', type: 'int', default: 0 })
  sort: number;

  @Column({ comment: '状态：0禁用 1启用', type: 'tinyint', default: 1 })
  status: number;
}
