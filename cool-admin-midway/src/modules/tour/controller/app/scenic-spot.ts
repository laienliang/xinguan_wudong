import { Provide, Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { TourScenicSpotEntity } from '../../entity/scenic-spot';
import { TourScenicSpotService } from '../../service/scenic-spot';

/**
 * App端景区控制器
 */
@Provide()
@CoolController({
  api: ['info', 'list', 'page'],
  entity: TourScenicSpotEntity,
  service: TourScenicSpotService,
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
export class AppTourScenicSpotController extends BaseController {
  @Inject()
  tourScenicSpotService: TourScenicSpotService;
}
