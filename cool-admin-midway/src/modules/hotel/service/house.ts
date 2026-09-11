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

  /**
   * 按距离查询附近民宿
   */
  async findNearby(
    longitude: number,
    latitude: number,
    distance: number = 10,
    limit: number = 20
  ) {
    const sql = `
      SELECT *,
      (6371 * acos(cos(radians(?)) * cos(radians(latitude)) * cos(radians(longitude) - radians(?)) + sin(radians(?)) * sin(radians(latitude)))) AS distance
      FROM hotel_house
      WHERE status = 1
      HAVING distance < ?
      ORDER BY distance ASC
      LIMIT ?
    `;
    return this.hotelHouseEntity.query(sql, [
      latitude,
      longitude,
      latitude,
      distance,
      limit,
    ]);
  }
}
