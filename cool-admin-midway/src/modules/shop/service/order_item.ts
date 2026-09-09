import { Provide, Config } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { ShopOrderItemEntity } from '../entity/order_item';
import { BaseService } from '@cool-midway/core';

/**
 * 商品订单明细服务
 */
@Provide()
export class ShopOrderItemService extends BaseService {
  @InjectEntityModel(ShopOrderItemEntity)
  shopOrderItemEntity: Repository<ShopOrderItemEntity>;

  @Config('typeorm.dataSource.default.type')
  ormType: string;
}
