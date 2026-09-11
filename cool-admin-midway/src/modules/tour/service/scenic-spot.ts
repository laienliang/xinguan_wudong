import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { TourScenicSpotEntity } from '../entity/scenic-spot';
import { BaseService } from '@cool-midway/core';

/**
 * 景区服务
 */
@Provide()
export class TourScenicSpotService extends BaseService {
  @InjectEntityModel(TourScenicSpotEntity)
  tourScenicSpotEntity: Repository<TourScenicSpotEntity>;

  /**
   * 按距离查询附近景区
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
      FROM tour_scenic_spot
      WHERE status = 1
      HAVING distance < ?
      ORDER BY distance ASC
      LIMIT ?
    `;
    return this.tourScenicSpotEntity.query(sql, [
      latitude,
      longitude,
      latitude,
      distance,
      limit,
    ]);
  }
}
