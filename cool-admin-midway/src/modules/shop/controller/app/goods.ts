import { Provide, Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { ShopGoodsEntity } from '../../entity/goods';
import { ShopGoodsService } from '../../service/goods';

/**
 * App端商品控制器
 */
@Provide()
@CoolController({
  api: ['info', 'list', 'page'],
  entity: ShopGoodsEntity,
  service: ShopGoodsService,
  listQueryOp: {
    keyWordLikeFields: ['title'],
    fieldEq: ['categoryId', 'status'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
  pageQueryOp: {
    keyWordLikeFields: ['title'],
    fieldEq: ['categoryId', 'status'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
})
export class AppShopGoodsController extends BaseController {
  @Inject()
  shopGoodsService: ShopGoodsService;
}
