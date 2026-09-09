import { Provide, Config } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { ShopGoodsSKUEntity } from '../entity/goods_sku';
import { BaseService } from '@cool-midway/core';

/**
 * 商品SKU服务
 */
@Provide()
export class ShopGoodsSKUService extends BaseService {
  @InjectEntityModel(ShopGoodsSKUEntity)
  shopGoodsSKUEntity: Repository<ShopGoodsSKUEntity>;

  @Config('typeorm.dataSource.default.type')
  ormType: string;
}
