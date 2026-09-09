import { Provide, Inject, Get, Put } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { OrderService } from '../../service/order';
import { OrderEntity } from '../../entity/order';
import { getUserFromContext } from '../../../user/utils/auth';

/**
 * 订单管理（前台）
 */
@Provide()
@CoolController({
  prefix: '/app/order',
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: OrderEntity,
  service: OrderService,
  insertParam: ctx => {
    const user = getUserFromContext(ctx, '5bd61df7-8a04-4a6e-aaad-9d520d0ec195x');
    return {
      userId: user?.id,
    };
  },
  listQueryOp: {
    fieldEq: ['userId', 'status', 'type'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
  pageQueryOp: {
    fieldEq: ['userId', 'status', 'type'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
})
export class AppOrderController extends BaseController {
  @Inject()
  orderService: OrderService;

  /**
   * 订单详情（按订单号）
   */
  @Get('/:orderNo/detail', { summary: '订单详情' })
  async detail() {
    const orderNo = this.baseCtx.params.orderNo;
    const data = await this.orderService.detail(orderNo);
    return this.ok(data);
  }

  /**
   * 取消订单
   */
  @Put('/:orderNo/cancel', { summary: '取消订单' })
  async cancel() {
    const orderNo = this.baseCtx.params.orderNo;
    await this.orderService.cancel(orderNo);
    return this.ok();
  }
}
