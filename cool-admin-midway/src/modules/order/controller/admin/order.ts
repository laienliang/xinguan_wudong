import { Controller, Get, Inject, Query } from '@midwayjs/core';
import { OrderService } from '../../service/order';

/**
 * 订单管理（后台）
 */
@Controller('/admin/order')
export class AdminOrderController {
  @Inject()
  orderService: OrderService;

  /**
   * 全局订单列表（管理员）
   */
  @Get('/list', { summary: '全局订单列表（管理员）' })
  async list(@Query() query: any) {
    // 管理员查询所有用户订单，不限制 userId
    const { page = 1, pageSize = 10, status, type, userId } = query;

    // TODO: 实现全局查询逻辑
    const data = { list: [], total: 0 };
    return { code: 0, message: 'success', data };
  }

  /**
   * 订单详情（管理员）
   */
  @Get('/:orderNo', { summary: '订单详情（管理员）' })
  async detail() {
    // TODO: 实现详情查询
    return { code: 0, message: 'success', data: {} };
  }
}
