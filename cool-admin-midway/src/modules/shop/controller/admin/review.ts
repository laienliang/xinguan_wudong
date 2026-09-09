import { Provide, Inject, Post, Body } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { ShopReviewEntity } from '../../entity/review';
import { ShopReviewService } from '../../service/review';

/**
 * Admin端商品评价控制器
 */
@Provide()
@CoolController({
  api: ['info', 'list', 'page'],
  entity: ShopReviewEntity,
  service: ShopReviewService,
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
export class AdminShopReviewController extends BaseController {
  @Inject()
  shopReviewService: ShopReviewService;

  /**
   * 商家回复
   */
  @Post('/reply', { summary: '商家回复' })
  async reply(@Body('id') id: string, @Body('merchantReply') merchantReply: string) {
    await this.shopReviewService.merchantReply(id, merchantReply);
    return this.ok();
  }
}
