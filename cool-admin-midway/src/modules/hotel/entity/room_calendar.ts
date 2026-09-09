import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 房态日历表
 */
@Entity('hotel_room_calendar')
@Index(['roomTypeId', 'date'], { unique: true })
export class HotelRoomCalendarEntity extends BaseEntity {
  @Column({ comment: '房型ID', type: 'bigint' })
  roomTypeId: number;

  @Column({ comment: '日期', type: 'date' })
  date: string;

  @Column({ comment: '可用房间数', type: 'int', default: 0 })
  availableRooms: number;

  @Column({ comment: '当日价格（支持动态定价）', type: 'decimal', precision: 10, scale: 2, default: 0 })
  price: number;

  @Column({ comment: '状态：0不可订 1可订', type: 'tinyint', default: 1 })
  status: number;
}
