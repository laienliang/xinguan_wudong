import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { TourTrafficGuideEntity } from '../entity/traffic-guide';
import { BaseService } from '@cool-midway/core';

/**
 * 交通攻略服务
 */
@Provide()
export class TourTrafficGuideService extends BaseService {
  @InjectEntityModel(TourTrafficGuideEntity)
  tourTrafficGuideEntity: Repository<TourTrafficGuideEntity>;
}
