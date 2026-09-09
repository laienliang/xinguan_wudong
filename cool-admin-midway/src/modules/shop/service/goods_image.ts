import { Provide, Config } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { ShopGoodsImageEntity } from '../entity/goods_image';
import { BaseService } from '@cool-midway/core';

/**
 * 商品图片服务
 */
@Provide()
export class ShopGoodsImageService extends BaseService {
  @InjectEntityModel(ShopGoodsImageEntity)
  shopGoodsImageEntity: Repository<ShopGoodsImageEntity>;

  @Config('typeorm.dataSource.default.type')
  ormType: string;
}
