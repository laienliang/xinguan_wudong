import { Provide, Inject, Post, Body } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { FoodRestaurantReviewEntity } from '../../entity/restaurant_review';
import { FoodRestaurantReviewService } from '../../service/restaurant_review';

/**
 * Admin端餐厅评价控制器
 */
@Provide()
@CoolController({
  api: ['info', 'list', 'page'],
  entity: FoodRestaurantReviewEntity,
  service: FoodRestaurantReviewService,
  listQueryOp: {
    fieldEq: ['restaurantId'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
  pageQueryOp: {
    fieldEq: ['restaurantId'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
})
export class AdminFoodRestaurantReviewController extends BaseController {
  @Inject()
  foodRestaurantReviewService: FoodRestaurantReviewService;

  /**
   * 商家回复评价
   */
  @Post('/reply', { summary: '商家回复评价' })
  async reply(@Body('id') id: string, @Body('merchantReply') merchantReply: string) {
    await this.foodRestaurantReviewService.foodRestaurantReviewEntity.update(id, {
      merchantReply,
      replyTime: new Date(),
    });
    return this.ok('回复成功');
  }
}
