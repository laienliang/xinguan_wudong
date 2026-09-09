import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 入住须知表
 */
@Entity('hotel_check_in_notice')
export class HotelCheckInNoticeEntity extends BaseEntity {
  @Index({ unique: true })
  @Column({ comment: '民宿ID', type: 'bigint' })
  houseId: number;

  @Column({ comment: '入住时间', type: 'time', default: '14:00:00' })
  checkInTime: string;

  @Column({ comment: '离店时间', type: 'time', default: '12:00:00' })
  checkOutTime: string;

  @Column({ comment: '宠物政策', length: 200, nullable: true })
  petPolicy: string;

  @Column({ comment: '是否含早餐：0否 1是', type: 'tinyint', default: 0 })
  hasBreakfast: number;

  @Column({ comment: '押金', type: 'decimal', precision: 10, scale: 2, default: 0 })
  deposit: number;

  @Column({ comment: '其他须知', type: 'text', nullable: true })
  otherNotice: string;
}
