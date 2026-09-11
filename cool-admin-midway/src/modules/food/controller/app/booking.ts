import { Provide, Inject, Get, Query, Post, Body } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { FoodBookingOrderEntity } from '../../entity/booking_order';
import { FoodBookingOrderService } from '../../service/booking_order';
import { OrderService } from '../../../order/service/order';
import { OrderEntity } from '../../../order/entity/order';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { FoodRestaurantEntity } from '../../entity/restaurant';

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

  @Inject()
  orderService: OrderService;

  @InjectEntityModel(OrderEntity)
  orderEntity: Repository<OrderEntity>;

  @InjectEntityModel(FoodRestaurantEntity)
  foodRestaurantEntity: Repository<FoodRestaurantEntity>;

  @Inject()
  ctx;

  /**
   * 创建餐位预订及统一订单
   */
  @Post('/create', { summary: '创建餐位预订' })
  async create(@Body() body: any) {
    const {
      restaurantId,
      timeSlotId,
      bookingDate,
      peopleCount,
      contactName,
      contactPhone,
      remark,
    } = body;
    if (
      !restaurantId ||
      !timeSlotId ||
      !bookingDate ||
      !peopleCount ||
      !contactName ||
      !contactPhone
    ) {
      return this.fail('请完整填写餐位预订信息');
    }
    if (!/^1\d{10}$/.test(contactPhone)) {
      return this.fail('请输入正确的联系电话');
    }
    const restaurant = await this.foodRestaurantEntity.findOneBy({
      id: Number(restaurantId),
      status: 1,
    });
    if (!restaurant) {
      return this.fail('餐厅不存在或暂未营业');
    }
    const data = {
      userId: this.ctx.user.id,
      restaurantId: String(restaurantId),
      timeSlotId: Number(timeSlotId),
      bookingDate,
      peopleCount: Number(peopleCount),
      contactName,
      contactPhone,
      remark,
      status: 1,
      tenantId: restaurant.tenantId,
    };
    await this.foodBookingOrderService.modifyBefore(data, 'add');
    const orderNo = this.orderService.generateOrderNo();
    const order = await this.orderEntity.save({
      orderNo,
      userId: this.ctx.user.id,
      type: 2,
      totalAmount: 0,
      payAmount: 0,
      status: 1,
      tenantId: restaurant.tenantId,
      remark: `餐位预订：${bookingDate}，${peopleCount}人；${remark || ''}`,
    });
    const booking =
      await this.foodBookingOrderService.foodBookingOrderEntity.save({
        ...data,
        orderId: String(order.id),
      });
    return this.ok({ id: booking.id, orderNo });
  }

  /**
   * 检查餐位可用性
   */
  @Get('/checkAvailability', { summary: '检查餐位可用性' })
  async checkAvailability(
    @Query('restaurantId') restaurantId: string,
    @Query('bookingDate') bookingDate: string,
    @Query('timeSlotId') timeSlotId: number
  ) {
    return this.ok(
      await this.foodBookingOrderService.checkAvailability(
        restaurantId,
        bookingDate,
        timeSlotId
      )
    );
  }

  /**
   * 取消预订
   */
  @Post('/cancel', { summary: '取消预订' })
  async cancel(@Body('id') id: string) {
    await this.foodBookingOrderService.foodBookingOrderEntity.update(id, {
      status: 4,
    });
    return this.ok('预订已取消');
  }
}
