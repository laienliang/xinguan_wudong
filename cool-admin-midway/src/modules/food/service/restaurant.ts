import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '@cool-midway/core';
import { FoodRestaurantEntity } from '../entity/restaurant';

/**
 * 餐厅服务
 */
@Provide()
export class FoodRestaurantService extends BaseService {
  @InjectEntityModel(FoodRestaurantEntity)
  foodRestaurantEntity: Repository<FoodRestaurantEntity>;

  /**
   * 按距离查询附近餐厅
   * @param longitude 经度
   * @param latitude 纬度
   * @param distance 距离范围（公里）
   * @param limit 返回数量
   */
  async findNearby(longitude: number, latitude: number, distance: number = 10, limit: number = 20) {
    // 使用 Haversine 公式计算距离
    const sql = `
      SELECT *,
      (6371 * acos(cos(radians(?)) * cos(radians(latitude)) * cos(radians(longitude) - radians(?)) + sin(radians(?)) * sin(radians(latitude)))) AS distance
      FROM food_restaurant
      WHERE status = 1
      HAVING distance < ?
      ORDER BY distance ASC
      LIMIT ?
    `;
    return await this.foodRestaurantEntity.query(sql, [latitude, longitude, latitude, distance, limit]);
  }
}
