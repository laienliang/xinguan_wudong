import { Provide, Inject, Post, Body } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { ShopReviewEntity } from '../../entity/review';
import { ShopReviewService } from '../../service/review';

/**
 * App端商品评价控制器
 */
@Provide()
@CoolController({
  api: ['add', 'list', 'page'],
  entity: ShopReviewEntity,
  service: ShopReviewService,
  listQueryOp: {
    fieldEq: ['goodsId', 'userId'],
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
export class AppShopReviewController extends BaseController {
  @Inject()
  shopReviewService: ShopReviewService;

  /**
   * 追加评价
   */
  @Post('/append', { summary: '追加评价' })
  async append(@Body('id') id: string, @Body('appendContent') appendContent: string) {
    const userId = this.getUserId('app');
    const review = await this.shopReviewService.shopReviewEntity.findOne({
      where: { id: Number(id), userId },
    });

    if (!review) {
      return this.fail('评价不存在');
    }

    await this.shopReviewService.appendReview(id, appendContent);
    return this.ok();
  }
}
