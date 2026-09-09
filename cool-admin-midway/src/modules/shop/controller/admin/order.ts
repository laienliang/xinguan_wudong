import { Provide, Inject, Post, Body } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { ShopOrderEntity } from '../../entity/order';
import { ShopOrderService } from '../../service/order';

/**
 * Admin端商品订单控制器
 */
@Provide()
@CoolController({
  api: ['info', 'list', 'page', 'update'],
  entity: ShopOrderEntity,
  service: ShopOrderService,
  listQueryOp: {
    fieldEq: ['status'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
  pageQueryOp: {
    fieldEq: ['status'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
})
export class AdminShopOrderController extends BaseController {
  @Inject()
  shopOrderService: ShopOrderService;

  /**
   * 更新物流信息
   */
  @Post('/updateLogistics', { summary: '更新物流信息' })
  async updateLogistics(
    @Body('id') id: string,
    @Body('logisticsCompany') logisticsCompany: string,
    @Body('logisticsNo') logisticsNo: string
  ) {
    await this.shopOrderService.updateLogistics(id, logisticsCompany, logisticsNo);
    return this.ok();
  }
}
