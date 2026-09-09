import { Provide, Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { HotelCheckInNoticeEntity } from '../../entity/check_in_notice';
import { HotelCheckInNoticeService } from '../../service/check_in_notice';

/**
 * Admin端入住须知控制器
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: HotelCheckInNoticeEntity,
  service: HotelCheckInNoticeService,
  listQueryOp: {
    fieldEq: ['houseId'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
  pageQueryOp: {
    fieldEq: ['houseId'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
})
export class AdminHotelCheckInNoticeController extends BaseController {
  @Inject()
  hotelCheckInNoticeService: HotelCheckInNoticeService;
}
