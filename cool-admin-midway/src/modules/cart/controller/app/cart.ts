import { Provide, Inject, Get, Put, Del, Body } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { CartService } from '../../service/cart';
import { CartEntity } from '../../entity/cart';

/**
 * 购物车控制器
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: CartEntity,
  service: CartService,
  listQueryOp: {
    fieldEq: ['userId'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
  pageQueryOp: {
    fieldEq: ['userId'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
})
export class AppCartController extends BaseController {
  @Inject()
  cartService: CartService;

  /**
   * 更新数量
   */
  @Put('/:id/quantity', { summary: '更新数量' })
  async updateQuantity(@Body('quantity') quantity: number) {
    await this.cartService.updateQuantity(Number(this.baseCtx.params.id), quantity);
    return this.ok();
  }

  /**
   * 切换选中状态
   */
  @Put('/:id/toggle', { summary: '切换选中状态' })
  async toggleSelect() {
    await this.cartService.toggleSelect(Number(this.baseCtx.params.id));
    return this.ok();
  }

  /**
   * 清空购物车
   */
  @Del('/clear', { summary: '清空购物车' })
  async clear() {
    const userId = this.getUserId('app');
    await this.cartService.clear(userId);
    return this.ok();
  }

  /**
   * 获取已选中商品
   */
  @Get('/selected', { summary: '获取已选中商品' })
  async getSelected() {
    const userId = this.getUserId('app');
    const data = await this.cartService.getSelectedItems(userId);
    return this.ok(data);
  }
}
