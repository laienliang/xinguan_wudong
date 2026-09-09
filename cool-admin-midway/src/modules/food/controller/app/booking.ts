import { Provide, Inject, Get, Query, Post, Body } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { FoodBookingOrderEntity } from '../../entity/booking_order';
import { FoodBookingOrderService } from '../../service/booking_order';

/**
 * App端餐位预订控制器
 */
@Provide()
@CoolController({
  api: ['add', 'info', 'list', 'page'],
  entity: FoodBookingOrderEntity,
  service: FoodBookingOrderService,
  listQueryOp: {
    fieldEq: ['userId', 'status'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
  pageQueryOp: {
    fieldEq: ['userId', 'status'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
})
export class AppFoodBookingController extends BaseController {
  @Inject()
  foodBookingOrderService: FoodBookingOrderService;

  /**
   * 检查餐位可用性
   */
  @Get('/checkAvailability', { summary: '检查餐位可用性' })
  async checkAvailability(
    @Query('restaurantId') restaurantId: string,
    @Query('bookingDate') bookingDate: string,
    @Query('timeSlotId') timeSlotId: number
  ) {
    return this.ok(await this.foodBookingOrderService.checkAvailability(restaurantId, bookingDate, timeSlotId));
  }

  /**
   * 取消预订
   */
  @Post('/cancel', { summary: '取消预订' })
  async cancel(@Body('id') id: string) {
    await this.foodBookingOrderService.foodBookingOrderEntity.update(id, { status: 4 });
    return this.ok('预订已取消');
  }
}
