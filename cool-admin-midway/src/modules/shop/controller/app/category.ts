import { Provide, Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { ShopCategoryEntity } from '../../entity/category';
import { ShopCategoryService } from '../../service/category';

/**
 * App端商品分类控制器
 */
@Provide()
@CoolController({
  api: ['info', 'list'],
  entity: ShopCategoryEntity,
  service: ShopCategoryService,
  listQueryOp: {
    fieldEq: ['parentId', 'status'],
    addOrderBy: {
      sort: 'ASC',
      createTime: 'DESC',
    },
  },
})
export class AppShopCategoryController extends BaseController {
  @Inject()
  shopCategoryService: ShopCategoryService;
}
