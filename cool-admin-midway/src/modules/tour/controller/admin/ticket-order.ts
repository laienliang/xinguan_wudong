import { Provide, Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { TourTicketOrderEntity } from '../../entity/ticket-order';
import { TourTicketOrderService } from '../../service/ticket-order';

/**
 * Admin端门票订单管理控制器
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: TourTicketOrderEntity,
  service: TourTicketOrderService,
  listQueryOp: {
    fieldEq: ['userId', 'scenicSpotId', 'status', 'useDate'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
  pageQueryOp: {
    fieldEq: ['userId', 'scenicSpotId', 'status', 'useDate'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
})
export class AdminTourTicketOrderController extends BaseController {
  @Inject()
  tourTicketOrderService: TourTicketOrderService;
}
