import { Provide, Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { HotelBookingOrderEntity } from '../../entity/booking_order';
import { HotelBookingOrderService } from '../../service/booking_order';

/**
 * Admin端预订管理控制器
 */
@Provide()
@CoolController({
  api: ['delete', 'update', 'info', 'list', 'page'],
  entity: HotelBookingOrderEntity,
  service: HotelBookingOrderService,
  listQueryOp: {
    keyWordLikeFields: ['guestName', 'guestPhone', 'checkInCode'],
    fieldEq: ['houseId', 'status'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
  pageQueryOp: {
    keyWordLikeFields: ['guestName', 'guestPhone', 'checkInCode'],
    fieldEq: ['houseId', 'status'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
})
export class AdminHotelBookingController extends BaseController {
  @Inject()
  hotelBookingOrderService: HotelBookingOrderService;
}
