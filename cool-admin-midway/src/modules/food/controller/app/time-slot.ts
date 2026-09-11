import { Inject, Provide } from '@midwayjs/core';
import { BaseController, CoolController } from '@cool-midway/core';
import { FoodTimeSlotEntity } from '../../entity/time_slot';
import { FoodTimeSlotService } from '../../service/time_slot';

/**
 * App端餐位时段控制器
 */
@Provide()
@CoolController({
  api: ['info', 'list'],
  entity: FoodTimeSlotEntity,
  service: FoodTimeSlotService,
  listQueryOp: {
    fieldEq: ['restaurantId', 'status'],
    addOrderBy: {
      startTime: 'ASC',
    },
  },
})
export class AppFoodTimeSlotController extends BaseController {
  @Inject()
  foodTimeSlotService: FoodTimeSlotService;
}
