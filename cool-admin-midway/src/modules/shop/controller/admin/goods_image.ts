import { Provide, Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { ShopGoodsImageEntity } from '../../entity/goods_image';
import { ShopGoodsImageService } from '../../service/goods_image';

/**
 * Admin端商品图片控制器
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list'],
  entity: ShopGoodsImageEntity,
  service: ShopGoodsImageService,
  listQueryOp: {
    fieldEq: ['goodsId'],
    addOrderBy: {
      sort: 'ASC',
      createTime: 'DESC',
    },
  },
})
export class AdminShopGoodsImageController extends BaseController {
  @Inject()
  shopGoodsImageService: ShopGoodsImageService;
}
