import { Provide, Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { PlatformNoticeEntity } from '../../entity/platform-notice';
import { PlatformNoticeService } from '../../service/platform-notice';

/**
 * App端平台公告控制器
 */
@Provide()
@CoolController({
  api: ['list', 'page', 'info'],
  entity: PlatformNoticeEntity,
  service: PlatformNoticeService,
  pageQueryOp: {
    fieldEq: ['type'],
    where: async () => {
      return [['status = :status', { status: 1 }]]; // 只返回已发布的公告
    },
    addOrderBy: {
      publishTime: 'DESC',
    },
  },
})
export class AppPlatformNoticeController extends BaseController {
  @Inject()
  platformNoticeService: PlatformNoticeService;
}
