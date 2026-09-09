import { Provide, Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { FoodProductCategoryEntity } from '../../entity/product_category';
import { FoodProductCategoryService } from '../../service/product_category';

/**
 * App端农产品分类控制器
 */
@Provide()
@CoolController({
  api: ['list'],
  entity: FoodProductCategoryEntity,
  service: FoodProductCategoryService,
  listQueryOp: {
    fieldEq: ['status'],
    addOrderBy: {
      sort: 'ASC',
      createTime: 'DESC',
    },
  },
})
export class AppFoodProductCategoryController extends BaseController {
  @Inject()
  foodProductCategoryService: FoodProductCategoryService;
}
