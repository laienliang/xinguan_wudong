import { Provide, Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { ShopGoodsSKUEntity } from '../../entity/goods_sku';
import { ShopGoodsSKUService } from '../../service/goods_sku';

/**
 * Admin端商品SKU控制器
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: ShopGoodsSKUEntity,
  service: ShopGoodsSKUService,
  listQueryOp: {
    fieldEq: ['goodsId'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
  pageQueryOp: {
    fieldEq: ['goodsId'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
})
export class AdminShopGoodsSKUController extends BaseController {
  @Inject()
  shopGoodsSKUService: ShopGoodsSKUService;
}
