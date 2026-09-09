import { Provide, Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { HotelHouseEntity } from '../../entity/house';
import { HotelHouseService } from '../../service/house';

/**
 * App端民宿控制器
 */
@Provide()
@CoolController({
  api: ['list', 'page', 'info'],
  entity: HotelHouseEntity,
  service: HotelHouseService,
  listQueryOp: {
    keyWordLikeFields: ['name', 'address'],
    fieldEq: ['status'],
    addOrderBy: {
      score: 'DESC',
      createTime: 'DESC',
    },
  },
  pageQueryOp: {
    keyWordLikeFields: ['name', 'address'],
    fieldEq: ['status'],
    addOrderBy: {
      score: 'DESC',
      createTime: 'DESC',
    },
  },
})
export class AppHotelHouseController extends BaseController {
  @Inject()
  hotelHouseService: HotelHouseService;
}
