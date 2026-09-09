import { Provide, Config, Inject } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { ShopOrderEntity } from '../entity/order';
import { ShopOrderItemEntity } from '../entity/order_item';
import { BaseService } from '@cool-midway/core';

/**
 * 商品订单服务
 */
@Provide()
export class ShopOrderService extends BaseService {
  @InjectEntityModel(ShopOrderEntity)
  shopOrderEntity: Repository<ShopOrderEntity>;

  @InjectEntityModel(ShopOrderItemEntity)
  shopOrderItemEntity: Repository<ShopOrderItemEntity>;

  @Config('typeorm.dataSource.default.type')
  ormType: string;

  /**
   * 修改前处理
   */
  async modifyBefore(data: any, type: 'delete' | 'update' | 'add') {
    if (type === 'add') {
      // 创建订单时的业务逻辑可以在这里处理
      if (!data.orderId) {
        throw new Error('关联订单ID不能为空');
      }
    }
  }

  /**
   * 更新物流信息
   */
  async updateLogistics(id: string, logisticsCompany: string, logisticsNo: string): Promise<void> {
    await this.shopOrderEntity.update(id, {
      logisticsCompany,
      logisticsNo,
      status: 2, // 已发货
    });
  }
}
