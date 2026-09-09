import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '@cool-midway/core';
import { FoodTimeSlotEntity } from '../entity/time_slot';

/**
 * 餐位时段服务
 */
@Provide()
export class FoodTimeSlotService extends BaseService {
  @InjectEntityModel(FoodTimeSlotEntity)
  foodTimeSlotEntity: Repository<FoodTimeSlotEntity>;
}
