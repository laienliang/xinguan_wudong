import { Provide } from '@midwayjs/core';
import { BaseService } from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { PlatformNoticeEntity } from '../entity/platform-notice';

/**
 * 平台公告服务
 */
@Provide()
export class PlatformNoticeService extends BaseService {
  @InjectEntityModel(PlatformNoticeEntity)
  platformNoticeEntity: Repository<PlatformNoticeEntity>;

  /**
   * 修改前处理
   */
  async modifyBefore(data: any, type: 'delete' | 'update' | 'add') {
    if (type === 'add' && !data.publishTime) {
      data.publishTime = new Date();
    }
  }
}
