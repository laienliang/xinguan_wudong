import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { HotelRoomTypeEntity } from '../entity/room_type';
import { BaseService } from '@cool-midway/core';

/**
 * 房型服务
 */
@Provide()
export class HotelRoomTypeService extends BaseService {
  @InjectEntityModel(HotelRoomTypeEntity)
  hotelRoomTypeEntity: Repository<HotelRoomTypeEntity>;

  /**
   * 修改前处理
   */
  async modifyBefore(data: any, type: 'delete' | 'update' | 'add') {
    if (type === 'update' || type === 'add') {
      // 验证房间总数
      if (data.totalRooms !== undefined && data.totalRooms < 0) {
        throw new Error('房间总数不能为负数');
      }
      // 验证价格
      if (data.price !== undefined && data.price < 0) {
        throw new Error('价格不能为负数');
      }
    }
  }
}
