import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '@cool-midway/core';
import { FoodProductEntity } from '../entity/product';

/**
 * 农产品服务
 */
@Provide()
export class FoodProductService extends BaseService {
  @InjectEntityModel(FoodProductEntity)
  foodProductEntity: Repository<FoodProductEntity>;

  /**
   * 修改前处理
   */
  async modifyBefore(data: any, type: 'delete' | 'update' | 'add') {
    if (type === 'update') {
      // 库存和销量验证
      if (data.stock !== undefined && data.stock < 0) {
        throw new Error('库存不能为负数');
      }
      if (data.sales !== undefined && data.sales < 0) {
        throw new Error('销量不能为负数');
      }
    }
  }
}
