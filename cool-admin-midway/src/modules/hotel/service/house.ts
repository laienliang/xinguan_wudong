import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { HotelHouseEntity } from '../entity/house';
import { BaseService } from '@cool-midway/core';

/**
 * 民宿服务
 */
@Provide()
export class HotelHouseService extends BaseService {
  @InjectEntityModel(HotelHouseEntity)
  hotelHouseEntity: Repository<HotelHouseEntity>;

  /**
   * 修改前处理
   */
  async modifyBefore(data: any, type: 'delete' | 'update' | 'add') {
    if (type === 'update' || type === 'add') {
      // 验证评分范围
      if (data.score !== undefined && (data.score < 0 || data.score > 5)) {
        throw new Error('评分必须在0-5之间');
      }
    }
  }
}
