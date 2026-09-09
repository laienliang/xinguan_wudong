import { Body, Controller, Get, Post, Put, Del, Inject } from '@midwayjs/core';
import { CartService } from '../../service/cart';
import { Context } from '@midwayjs/koa';

@Controller('/app/cart')
export class AppCartController {
  @Inject()
  ctx: Context;

  @Inject()
  cartService: CartService;

  @Post('/', { summary: '加入购物车' })
  async add(@Body() body: any) {
    const userId = this.ctx.user.id;
    const data = await this.cartService.add({ ...body, userId });
    return { code: 0, message: 'success', data };
  }

  @Get('/', { summary: '购物车列表' })
  async list() {
    const userId = this.ctx.user.id;
    const data = await this.cartService.list(userId);
    return { code: 0, message: 'success', data };
  }

  @Put('/:id', { summary: '更新数量' })
  async updateQuantity(@Body('quantity') quantity: number) {
    await this.cartService.updateQuantity(Number(this.ctx.params.id), quantity);
    return { code: 0, message: 'success' };
  }

  @Put('/:id/toggle', { summary: '切换选中状态' })
  async toggleSelect() {
    await this.cartService.toggleSelect(Number(this.ctx.params.id));
    return { code: 0, message: 'success' };
  }

  @Del('/', { summary: '删除购物车项' })
  async remove(@Body('ids') ids: string[]) {
    await this.cartService.remove(ids);
    return { code: 0, message: 'success' };
  }

  @Del('/clear', { summary: '清空购物车' })
  async clear() {
    const userId = this.ctx.user.id;
    await this.cartService.clear(userId);
    return { code: 0, message: 'success' };
  }

  @Get('/selected', { summary: '获取已选中商品' })
  async getSelected() {
    const userId = this.ctx.user.id;
    const data = await this.cartService.getSelectedItems(userId);
    return { code: 0, message: 'success', data };
  }
}
