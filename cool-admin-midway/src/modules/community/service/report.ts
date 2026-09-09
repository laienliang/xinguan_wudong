import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '@cool-midway/core';
import { CommunityReportEntity } from '../entity/report';

/**
 * 举报服务
 */
@Provide()
export class CommunityReportService extends BaseService {
  @InjectEntityModel(CommunityReportEntity)
  communityReportEntity: Repository<CommunityReportEntity>;

  /**
   * 新增前设置为待处理
   */
  async modifyBefore(data: any, type: 'delete' | 'update' | 'add') {
    if (type === 'add') {
      data.status = 1; // 待处理
    }
  }

  /**
   * 处理举报
   */
  async handle(id: number, status: number, handleResult: string): Promise<void> {
    await this.communityReportEntity.update(id, {
      status,
      handleResult,
      handleTime: new Date(),
    });
  }
}
