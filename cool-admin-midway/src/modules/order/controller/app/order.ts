import { Body, Controller, Get, Post, Put, Inject, Query } from '@midwayjs/core';
import { OrderService } from '../../service/order';
import { Context } from '@midwayjs/koa';

/**
 * 订单管理（前台）
 */
@Controller('/app/order')
export class AppOrderController {
  @Inject()
  ctx: Context;

  @Inject()
  orderService: OrderService;

  /**
   * 创建订单
   */
  @Post('/', { summary: '创建订单' })
  async create(@Body() body: any) {
    const userId = this.ctx.user.id;
    const data = await this.orderService.create({ ...body, userId });
    return { code: 0, message: 'success', data };
  }

  /**
   * 订单列表
   */
  @Get('/', { summary: '订单列表' })
  async list(@Query() query: any) {
    const userId = this.ctx.user.id;
    const data = await this.orderService.list(userId, query);
    return { code: 0, message: 'success', data };
  }

  /**
   * 订单详情
   */
  @Get('/:orderNo', { summary: '订单详情' })
  async detail() {
    const orderNo = this.ctx.params.orderNo;
    const data = await this.orderService.detail(orderNo);
    return { code: 0, message: 'success', data };
  }

  /**
   * 取消订单
   */
  @Put('/:orderNo/cancel', { summary: '取消订单' })
  async cancel() {
    const orderNo = this.ctx.params.orderNo;
    await this.orderService.cancel(orderNo);
    return { code: 0, message: 'success' };
  }
}
