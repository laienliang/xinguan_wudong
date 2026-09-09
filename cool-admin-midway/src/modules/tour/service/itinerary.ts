import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { TourRouteItineraryEntity } from '../entity/itinerary';
import { BaseService } from '@cool-midway/core';

/**
 * 路线行程服务
 */
@Provide()
export class TourRouteItineraryService extends BaseService {
  @InjectEntityModel(TourRouteItineraryEntity)
  tourRouteItineraryEntity: Repository<TourRouteItineraryEntity>;

  /**
   * 修改前处理
   */
  async modifyBefore(data: any, type: 'delete' | 'update' | 'add') {
    if (type === 'update' || type === 'add') {
      // 验证天数必须大于0
      if (data.dayNumber !== undefined && data.dayNumber <= 0) {
        throw new Error('天数必须大于0');
      }
    }
  }
}
