import { Provide, Inject, Put, Body } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { CommunityReportService } from '../../service/report';
import { CommunityReportEntity } from '../../entity/report';

/**
 * 举报管理控制器（Admin端）
 */
@Provide()
@CoolController({
  api: ['list', 'page', 'info'],
  entity: CommunityReportEntity,
  service: CommunityReportService,
  pageQueryOp: {
    fieldEq: ['status', 'targetType'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
})
export class AdminCommunityReportController extends BaseController {
  @Inject()
  communityReportService: CommunityReportService;

  /**
   * 处理举报
   */
  @Put('/:id/handle', { summary: '处理举报' })
  async handle(@Body() body: { status: number; handleResult: string }) {
    const id = Number(this.baseCtx.params.id);
    await this.communityReportService.handle(id, body.status, body.handleResult);
    return this.ok();
  }
}
