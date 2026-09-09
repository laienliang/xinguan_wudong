import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '@cool-midway/core';
import { FoodDishEntity } from '../entity/dish';

/**
 * 餐厅菜品服务
 */
@Provide()
export class FoodDishService extends BaseService {
  @InjectEntityModel(FoodDishEntity)
  foodDishEntity: Repository<FoodDishEntity>;
}
