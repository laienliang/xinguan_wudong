import { Provide, Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { TourRouteEntity } from '../../entity/route';
import { TourRouteService } from '../../service/route';

/**
 * Admin端路线管理控制器
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
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
export class AdminTourRouteController extends BaseController {
  @Inject()
  tourRouteService: TourRouteService;
}
