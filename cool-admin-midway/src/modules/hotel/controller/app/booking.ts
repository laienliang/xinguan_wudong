import { Provide, Inject, Post, Body } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { HotelBookingOrderEntity } from '../../entity/booking_order';
import { HotelBookingOrderService } from '../../service/booking_order';

/**
 * App端预订控制器
 */
@Provide()
@CoolController({
  api: ['add', 'list', 'page', 'info'],
  entity: HotelBookingOrderEntity,
  service: HotelBookingOrderService,
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
export class AppHotelBookingController extends BaseController {
  @Inject()
  hotelBookingOrderService: HotelBookingOrderService;
}
