import { Provide, Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { FoodProductEntity } from '../../entity/product';
import { FoodProductService } from '../../service/product';

/**
 * Admin端农产品控制器
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: FoodProductEntity,
  service: FoodProductService,
  listQueryOp: {
    keyWordLikeFields: ['name'],
    fieldEq: ['categoryId', 'status'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
  pageQueryOp: {
    keyWordLikeFields: ['name'],
    fieldEq: ['categoryId', 'status'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
})
export class AdminFoodProductController extends BaseController {
  @Inject()
  foodProductService: FoodProductService;
}
