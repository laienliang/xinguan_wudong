import { Provide } from '@midwayjs/core';
import { BaseService } from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { PlatformBannerEntity } from '../entity/platform-banner';

/**
 * 平台轮播图服务
 */
@Provide()
export class PlatformBannerService extends BaseService {
  @InjectEntityModel(PlatformBannerEntity)
  platformBannerEntity: Repository<PlatformBannerEntity>;
}
