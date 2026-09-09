import { Provide, Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { ShopCategoryEntity } from '../../entity/category';
import { ShopCategoryService } from '../../service/category';

/**
 * Admin端商品分类控制器
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: ShopCategoryEntity,
  service: ShopCategoryService,
  listQueryOp: {
    fieldEq: ['parentId', 'status'],
    addOrderBy: {
      sort: 'ASC',
      createTime: 'DESC',
    },
  },
  pageQueryOp: {
    fieldEq: ['parentId'],
    addOrderBy: {
      sort: 'ASC',
      createTime: 'DESC',
    },
  },
})
export class AdminShopCategoryController extends BaseController {
  @Inject()
  shopCategoryService: ShopCategoryService;
}
