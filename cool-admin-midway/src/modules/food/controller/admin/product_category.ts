import { Provide, Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { FoodProductCategoryEntity } from '../../entity/product_category';
import { FoodProductCategoryService } from '../../service/product_category';

/**
 * Admin端农产品分类控制器
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: FoodProductCategoryEntity,
  service: FoodProductCategoryService,
  listQueryOp: {
    keyWordLikeFields: ['name'],
    fieldEq: ['status'],
    addOrderBy: {
      sort: 'ASC',
      createTime: 'DESC',
    },
  },
  pageQueryOp: {
    keyWordLikeFields: ['name'],
    fieldEq: ['status'],
    addOrderBy: {
      sort: 'ASC',
      createTime: 'DESC',
    },
  },
})
export class AdminFoodProductCategoryController extends BaseController {
  @Inject()
  foodProductCategoryService: FoodProductCategoryService;
}
