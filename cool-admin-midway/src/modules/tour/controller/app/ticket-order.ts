import { Provide, Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { TourTicketOrderEntity } from '../../entity/ticket-order';
import { TourTicketOrderService } from '../../service/ticket-order';

/**
 * App端门票订单控制器
 */
@Provide()
@CoolController({
  api: ['add', 'info', 'list', 'page'],
  entity: TourTicketOrderEntity,
  service: TourTicketOrderService,
  listQueryOp: {
    fieldEq: ['userId', 'status', 'useDate'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
  pageQueryOp: {
    fieldEq: ['userId', 'status', 'useDate'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
})
export class AppTourTicketOrderController extends BaseController {
  @Inject()
  tourTicketOrderService: TourTicketOrderService;
}
