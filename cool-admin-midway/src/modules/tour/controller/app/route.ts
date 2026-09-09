import { Provide, Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { TourRouteEntity } from '../../entity/route';
import { TourRouteService } from '../../service/route';

/**
 * App端路线控制器
 */
@Provide()
@CoolController({
  api: ['info', 'list', 'page'],
  entity: TourRouteEntity,
  service: TourRouteService,
  listQueryOp: {
    keyWordLikeFields: ['title', 'departure', 'destination'],
    fieldEq: ['status', 'days'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
  pageQueryOp: {
    keyWordLikeFields: ['title', 'departure', 'destination'],
    fieldEq: ['status', 'days'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
})
export class AppTourRouteController extends BaseController {
  @Inject()
  tourRouteService: TourRouteService;
}
