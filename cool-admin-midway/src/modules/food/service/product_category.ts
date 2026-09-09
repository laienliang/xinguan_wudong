import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '@cool-midway/core';
import { FoodProductCategoryEntity } from '../entity/product_category';

/**
 * 农产品分类服务
 */
@Provide()
export class FoodProductCategoryService extends BaseService {
  @InjectEntityModel(FoodProductCategoryEntity)
  foodProductCategoryEntity: Repository<FoodProductCategoryEntity>;
}
