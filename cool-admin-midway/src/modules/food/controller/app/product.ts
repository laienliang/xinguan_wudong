import { Provide, Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { FoodProductEntity } from '../../entity/product';
import { FoodProductService } from '../../service/product';

/**
 * App端农产品控制器
 */
@Provide()
@CoolController({
  api: ['info', 'list', 'page'],
  entity: FoodProductEntity,
  service: FoodProductService,
  listQueryOp: {
    keyWordLikeFields: ['name'],
    fieldEq: ['categoryId', 'status'],
    addOrderBy: {
      sales: 'DESC',
      createTime: 'DESC',
    },
  },
  pageQueryOp: {
    keyWordLikeFields: ['name'],
    fieldEq: ['categoryId', 'status'],
    addOrderBy: {
      sales: 'DESC',
      createTime: 'DESC',
    },
  },
})
export class AppFoodProductController extends BaseController {
  @Inject()
  foodProductService: FoodProductService;
}
