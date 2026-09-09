import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 餐位时段表
 */
@Entity('food_time_slot')
export class FoodTimeSlotEntity extends BaseEntity {
  @Index()
  @Column({ comment: '餐厅ID', type: 'bigint' })
  restaurantId: string;

  @Column({ comment: '时段名称（如"午餐 11:30-13:30"）', length: 50 })
  name: string;

  @Column({ comment: '开始时间', type: 'time' })
  startTime: string;

  @Column({ comment: '结束时间', type: 'time' })
  endTime: string;

  @Column({ comment: '最大预订人数', type: 'int', default: 0 })
  maxPeople: number;

  @Column({ comment: '状态：0禁用 1启用', type: 'tinyint', default: 1 })
  status: number;
}
