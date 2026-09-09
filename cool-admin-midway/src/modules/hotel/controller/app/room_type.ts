import { Provide, Inject, Get, Query } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { HotelRoomTypeEntity } from '../../entity/room_type';
import { HotelRoomTypeService } from '../../service/room_type';

/**
 * App端房型控制器
 */
@Provide()
@CoolController({
  api: ['list', 'info'],
  entity: HotelRoomTypeEntity,
  service: HotelRoomTypeService,
  listQueryOp: {
    keyWordLikeFields: ['name'],
    fieldEq: ['houseId', 'status'],
    addOrderBy: {
      price: 'ASC',
      createTime: 'DESC',
    },
  },
})
export class AppHotelRoomTypeController extends BaseController {
  @Inject()
  hotelRoomTypeService: HotelRoomTypeService;
}
