import { Provide, Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { HotelHouseEntity } from '../../entity/house';
import { HotelHouseService } from '../../service/house';

/**
 * Admin端民宿控制器
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: HotelHouseEntity,
  service: HotelHouseService,
  listQueryOp: {
    keyWordLikeFields: ['name', 'address'],
    fieldEq: ['status'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
  pageQueryOp: {
    keyWordLikeFields: ['name', 'address'],
    fieldEq: ['status'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
})
export class AdminHotelHouseController extends BaseController {
  @Inject()
  hotelHouseService: HotelHouseService;
}
