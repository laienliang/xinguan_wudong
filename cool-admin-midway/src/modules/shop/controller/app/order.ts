import { Provide, Inject, Post, Body } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { ShopOrderEntity } from '../../entity/order';
import { ShopOrderService } from '../../service/order';

/**
 * App端商品订单控制器
 */
@Provide()
@CoolController({
  api: ['add', 'info', 'list', 'page'],
  entity: ShopOrderEntity,
  service: ShopOrderService,
  listQueryOp: {
    fieldEq: ['userId', 'status'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
  pageQueryOp: {
    fieldEq: ['userId', 'status'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
})
export class AppShopOrderController extends BaseController {
  @Inject()
  shopOrderService: ShopOrderService;

  /**
   * 从购物车结算商品订单
   */
  @Post('/checkout', { summary: '购物车商品结算' })
  async checkout(@Body('addressId') addressId: string) {
    const userId = this.getUserId('app');
    return this.ok(await this.shopOrderService.checkout(userId, addressId));
  }

  /**
   * 确认收货
   */
  @Post('/receive', { summary: '确认收货' })
  async receive(@Body('id') id: string) {
    const userId = this.getUserId('app');
    const order = await this.shopOrderService.shopOrderEntity.findOne({
      where: { id: Number(id), userId },
    });

    if (!order) {
      return this.fail('订单不存在');
    }

    if (order.status !== 2) {
      return this.fail('订单状态不正确');
    }

    await this.shopOrderService.shopOrderEntity.update(id, {
      status: 3, // 已收货
    });

    return this.ok();
  }
}
