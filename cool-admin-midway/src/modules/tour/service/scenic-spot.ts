import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { TourScenicSpotEntity } from '../entity/scenic-spot';
import { BaseService } from '@cool-midway/core';

/**
 * 景区服务
 */
@Provide()
export class TourScenicSpotService extends BaseService {
  @InjectEntityModel(TourScenicSpotEntity)
  tourScenicSpotEntity: Repository<TourScenicSpotEntity>;
}
