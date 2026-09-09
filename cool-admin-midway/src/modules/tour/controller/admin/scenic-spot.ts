import { Provide, Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { TourScenicSpotEntity } from '../../entity/scenic-spot';
import { TourScenicSpotService } from '../../service/scenic-spot';

/**
 * Admin端景区管理控制器
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
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
export class AdminTourScenicSpotController extends BaseController {
  @Inject()
  tourScenicSpotService: TourScenicSpotService;
}
