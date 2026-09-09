import { Provide, Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { FoodDishEntity } from '../../entity/dish';
import { FoodDishService } from '../../service/dish';

/**
 * Admin端菜品控制器
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: FoodDishEntity,
  service: FoodDishService,
  listQueryOp: {
    keyWordLikeFields: ['name'],
    fieldEq: ['restaurantId', 'status', 'isSignature'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
  pageQueryOp: {
    keyWordLikeFields: ['name'],
    fieldEq: ['restaurantId', 'status', 'isSignature'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
})
export class AdminFoodDishController extends BaseController {
  @Inject()
  foodDishService: FoodDishService;
}
