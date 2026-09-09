import { Provide, Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { HotelRoomTypeEntity } from '../../entity/room_type';
import { HotelRoomTypeService } from '../../service/room_type';

/**
 * Admin端房型控制器
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: HotelRoomTypeEntity,
  service: HotelRoomTypeService,
  listQueryOp: {
    keyWordLikeFields: ['name'],
    fieldEq: ['houseId', 'status'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
  pageQueryOp: {
    keyWordLikeFields: ['name'],
    fieldEq: ['houseId', 'status'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
})
export class AdminHotelRoomTypeController extends BaseController {
  @Inject()
  hotelRoomTypeService: HotelRoomTypeService;
}
