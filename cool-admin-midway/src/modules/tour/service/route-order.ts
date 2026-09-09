import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { TourRouteOrderEntity } from '../entity/route-order';
import { BaseService } from '@cool-midway/core';

/**
 * 路线订单服务
 */
@Provide()
export class TourRouteOrderService extends BaseService {
  @InjectEntityModel(TourRouteOrderEntity)
  tourRouteOrderEntity: Repository<TourRouteOrderEntity>;

  /**
   * 修改前处理
   */
  async modifyBefore(data: any, type: 'delete' | 'update' | 'add') {
    if (type === 'add') {
      // 验证人数必须大于0
      if (data.peopleCount !== undefined && data.peopleCount <= 0) {
        throw new Error('人数必须大于0');
      }

      // 验证出发日期不能早于今天
      const departureDate = new Date(data.departureDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (departureDate < today) {
        throw new Error('出发日期不能早于今天');
      }
    }
  }
}
