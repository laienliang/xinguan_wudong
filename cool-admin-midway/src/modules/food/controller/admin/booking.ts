import { Provide, Inject, Post, Body } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { FoodBookingOrderEntity } from '../../entity/booking_order';
import { FoodBookingOrderService } from '../../service/booking_order';

/**
 * Admin端预订管理控制器
 */
@Provide()
@CoolController({
  api: ['update', 'info', 'list', 'page'],
  entity: FoodBookingOrderEntity,
  service: FoodBookingOrderService,
  listQueryOp: {
    fieldEq: ['restaurantId', 'status', 'bookingDate'],
    addOrderBy: {
      bookingDate: 'DESC',
      createTime: 'DESC',
    },
  },
  pageQueryOp: {
    fieldEq: ['restaurantId', 'status', 'bookingDate'],
    addOrderBy: {
      bookingDate: 'DESC',
      createTime: 'DESC',
    },
  },
})
export class AdminFoodBookingController extends BaseController {
  @Inject()
  foodBookingOrderService: FoodBookingOrderService;

  /**
   * 确认预订
   */
  @Post('/confirm', { summary: '确认预订' })
  async confirm(@Body('id') id: string) {
    await this.foodBookingOrderService.foodBookingOrderEntity.update(id, { status: 2 });
    return this.ok('预订已确认');
  }

  /**
   * 完成预订
   */
  @Post('/complete', { summary: '完成预订' })
  async complete(@Body('id') id: string) {
    await this.foodBookingOrderService.foodBookingOrderEntity.update(id, { status: 3 });
    return this.ok('预订已完成');
  }
}
