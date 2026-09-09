import { Provide, Config } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { ShopGoodsEntity } from '../entity/goods';
import { BaseService } from '@cool-midway/core';

/**
 * 商品服务
 */
@Provide()
export class ShopGoodsService extends BaseService {
  @InjectEntityModel(ShopGoodsEntity)
  shopGoodsEntity: Repository<ShopGoodsEntity>;

  @Config('typeorm.dataSource.default.type')
  ormType: string;

  /**
   * 修改前处理
   */
  async modifyBefore(data: any, type: 'delete' | 'update' | 'add') {
    if (type === 'update') {
      // 更新库存和销量时的业务逻辑
      if (data.stock !== undefined && data.stock < 0) {
        throw new Error('库存不能为负数');
      }
      if (data.sales !== undefined && data.sales < 0) {
        throw new Error('销量不能为负数');
      }
    }
  }
}
