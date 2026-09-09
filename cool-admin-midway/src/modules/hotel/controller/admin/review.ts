import { Provide, Inject, Post, Body } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { HotelReviewEntity } from '../../entity/review';
import { HotelReviewService } from '../../service/review';

/**
 * Admin端评价管理控制器
 */
@Provide()
@CoolController({
  api: ['delete', 'info', 'list', 'page'],
  entity: HotelReviewEntity,
  service: HotelReviewService,
  listQueryOp: {
    fieldEq: ['houseId', 'userId'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
  pageQueryOp: {
    fieldEq: ['houseId', 'userId'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
})
export class AdminHotelReviewController extends BaseController {
  @Inject()
  hotelReviewService: HotelReviewService;

  /**
   * 商家回复评价
   */
  @Post('/reply', { summary: '商家回复评价' })
  async reply(@Body() body: any) {
    const { reviewId, reply } = body;
    return this.ok(await this.hotelReviewService.merchantReply(reviewId, reply));
  }
}
