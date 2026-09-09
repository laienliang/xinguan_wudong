import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 餐位预订订单表
 */
@Entity('food_booking_order')
export class FoodBookingOrderEntity extends BaseEntity {
  @Column({ comment: '关联统一订单ID', type: 'bigint', unique: true })
  orderId: string;

  @Index()
  @Column({ comment: '用户ID', type: 'bigint' })
  userId: string;

  @Index()
  @Column({ comment: '餐厅ID', type: 'bigint' })
  restaurantId: string;

  @Index()
  @Column({ comment: '预订日期', type: 'date' })
  bookingDate: string;

  @Column({ comment: '时段ID', type: 'int' })
  timeSlotId: number;

  @Column({ comment: '就餐人数', type: 'int', default: 1 })
  peopleCount: number;

  @Column({ comment: '联系人姓名', length: 50 })
  contactName: string;

  @Column({ comment: '联系电话', length: 11 })
  contactPhone: string;

  @Column({ comment: '备注', length: 500, nullable: true })
  remark: string;

  @Column({ comment: '状态：1待确认 2已确认 3已完成 4已取消', type: 'tinyint', default: 1 })
  status: number;
}
