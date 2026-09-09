import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '@cool-midway/core';
import { FoodRestaurantReviewEntity } from '../entity/restaurant_review';

/**
 * 餐厅评价服务
 */
@Provide()
export class FoodRestaurantReviewService extends BaseService {
  @InjectEntityModel(FoodRestaurantReviewEntity)
  foodRestaurantReviewEntity: Repository<FoodRestaurantReviewEntity>;
}
