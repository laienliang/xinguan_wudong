import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { TourRouteEntity } from '../entity/route';
import { BaseService } from '@cool-midway/core';

/**
 * 路线服务
 */
@Provide()
export class TourRouteService extends BaseService {
  @InjectEntityModel(TourRouteEntity)
  tourRouteEntity: Repository<TourRouteEntity>;

  /**
   * 修改前处理
   */
  async modifyBefore(data: any, type: 'delete' | 'update' | 'add') {
    if (type === 'update' || type === 'add') {
      // 验证价格不能为负数
      if (data.price !== undefined && data.price < 0) {
        throw new Error('价格不能为负数');
      }
      // 验证天数必须大于0
      if (data.days !== undefined && data.days <= 0) {
        throw new Error('行程天数必须大于0');
      }
    }
  }
}
