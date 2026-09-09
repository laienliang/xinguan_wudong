import { Provide, Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { FoodRestaurantEntity } from '../../entity/restaurant';
import { FoodRestaurantService } from '../../service/restaurant';

/**
 * Admin端餐厅控制器
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: FoodRestaurantEntity,
  service: FoodRestaurantService,
  listQueryOp: {
    keyWordLikeFields: ['name', 'address'],
    fieldEq: ['status'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
  pageQueryOp: {
    keyWordLikeFields: ['name', 'address'],
    fieldEq: ['status'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
})
export class AdminFoodRestaurantController extends BaseController {
  @Inject()
  foodRestaurantService: FoodRestaurantService;
}
