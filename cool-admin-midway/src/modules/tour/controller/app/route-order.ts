import { Provide, Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { TourRouteOrderEntity } from '../../entity/route-order';
import { TourRouteOrderService } from '../../service/route-order';

/**
 * App端路线订单控制器
 */
@Provide()
@CoolController({
  api: ['add', 'info', 'list', 'page'],
  entity: TourRouteOrderEntity,
  service: TourRouteOrderService,
  listQueryOp: {
    fieldEq: ['userId', 'status', 'departureDate'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
  pageQueryOp: {
    fieldEq: ['userId', 'status', 'departureDate'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
})
export class AppTourRouteOrderController extends BaseController {
  @Inject()
  tourRouteOrderService: TourRouteOrderService;
}
