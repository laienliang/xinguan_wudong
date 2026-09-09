import { Provide, Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { FoodTimeSlotEntity } from '../../entity/time_slot';
import { FoodTimeSlotService } from '../../service/time_slot';

/**
 * Admin端餐位时段控制器
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: FoodTimeSlotEntity,
  service: FoodTimeSlotService,
  listQueryOp: {
    fieldEq: ['restaurantId', 'status'],
    addOrderBy: {
      startTime: 'ASC',
    },
  },
  pageQueryOp: {
    fieldEq: ['restaurantId', 'status'],
    addOrderBy: {
      startTime: 'ASC',
    },
  },
})
export class AdminFoodTimeSlotController extends BaseController {
  @Inject()
  foodTimeSlotService: FoodTimeSlotService;
}
