import { Provide, Inject, Get } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { OrderService } from '../../service/order';
import { OrderEntity } from '../../entity/order';

/**
 * 订单管理（后台）
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: OrderEntity,
  service: OrderService,
  listQueryOp: {
    fieldEq: ['userId', 'status', 'type'],
    keyWordLikeFields: ['orderNo'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
  pageQueryOp: {
    fieldEq: ['userId', 'status', 'type'],
    keyWordLikeFields: ['orderNo'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
})
export class AdminOrderController extends BaseController {
  @Inject()
  orderService: OrderService;

  /**
   * 订单详情（按订单号）
   */
  @Get('/:orderNo/detail', { summary: '订单详情（按订单号）' })
  async detail() {
    const orderNo = this.baseCtx.params.orderNo;
    const data = await this.orderService.detail(orderNo);
    return this.ok(data);
  }
}
