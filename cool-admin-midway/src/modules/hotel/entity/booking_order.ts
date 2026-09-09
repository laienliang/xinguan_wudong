import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 住宿预订订单表
 */
@Entity('hotel_booking_order')
export class HotelBookingOrderEntity extends BaseEntity {
  @Column({ comment: '关联统一订单ID', type: 'bigint', unique: true })
  orderId: number;

  @Index()
  @Column({ comment: '用户ID', type: 'bigint' })
  userId: number;

  @Index()
  @Column({ comment: '民宿ID', type: 'bigint' })
  houseId: number;

  @Column({ comment: '房型ID', type: 'bigint' })
  roomTypeId: number;

  @Index()
  @Column({ comment: '入住日期', type: 'date' })
  checkInDate: string;

  @Column({ comment: '离店日期', type: 'date' })
  checkOutDate: string;

  @Column({ comment: '入住天数', type: 'int', default: 1 })
  nights: number;

  @Column({ comment: '房间数', type: 'int', default: 1 })
  roomCount: number;

  @Column({ comment: '入住人姓名', length: 50 })
  guestName: string;

  @Column({ comment: '入住人电话', length: 11 })
  guestPhone: string;

  @Column({ comment: '身份证号', length: 18, nullable: true })
  guestIdCard: string;

  @Column({ comment: '入住码', length: 32, nullable: true })
  checkInCode: string;

  @Index()
  @Column({ comment: '状态：1待入住 2入住中 3已离店 4已取消', type: 'tinyint', default: 1 })
  status: number;
}
