import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 房型表
 */
@Entity('hotel_room_type')
export class HotelRoomTypeEntity extends BaseEntity {
  @Index()
  @Column({ comment: '民宿ID', type: 'bigint' })
  houseId: number;

  @Column({ comment: '房型名称', length: 100 })
  name: string;

  @Column({ comment: '床型', length: 50, nullable: true })
  bedType: string;

  @Column({ comment: '面积（平米）', type: 'int', default: 0 })
  area: number;

  @Column({ comment: '最多容纳人数', type: 'int', default: 2 })
  maxPeople: number;

  @Column({ comment: '设施（JSON数组）', type: 'simple-json', nullable: true })
  facilities: string[];

  @Column({ comment: '价格（基础价）', type: 'decimal', precision: 10, scale: 2, default: 0 })
  price: number;

  @Column({ comment: '房间总数', type: 'int', default: 1 })
  totalRooms: number;

  @Column({ comment: '主图', length: 255, nullable: true })
  mainImage: string;

  @Column({ comment: '图片集（JSON数组）', type: 'simple-json', nullable: true })
  images: string[];

  @Index()
  @Column({ comment: '状态：0下架 1上架', type: 'tinyint', default: 1 })
  status: number;
}
