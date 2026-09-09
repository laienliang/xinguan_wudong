import { Provide, Config } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { ShopCategoryEntity } from '../entity/category';
import { BaseService } from '@cool-midway/core';

/**
 * 商品分类服务
 */
@Provide()
export class ShopCategoryService extends BaseService {
  @InjectEntityModel(ShopCategoryEntity)
  shopCategoryEntity: Repository<ShopCategoryEntity>;

  @Config('typeorm.dataSource.default.type')
  ormType: string;
}
