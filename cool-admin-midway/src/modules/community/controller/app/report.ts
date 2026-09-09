import { Provide, Inject, Post, Body } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { CommunityReportService } from '../../service/report';
import { CommunityReportEntity } from '../../entity/report';

/**
 * 举报控制器（App端）
 */
@Provide()
@CoolController({
  api: ['add'],
  entity: CommunityReportEntity,
  service: CommunityReportService,
})
export class AppCommunityReportController extends BaseController {
  @Inject()
  communityReportService: CommunityReportService;

  /**
   * 提交举报
   */
  @Post('/submit', { summary: '提交举报' })
  async submit(@Body() body: any) {
    const userId = this.baseCtx.admin?.userId || this.baseCtx.userId;
    body.userId = userId;

    const id = await this.communityReportService.add(body);
    return this.ok(id);
  }
}
