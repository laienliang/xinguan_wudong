import { Provide, Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { PlatformNoticeEntity } from '../../entity/platform-notice';
import { PlatformNoticeService } from '../../service/platform-notice';

/**
 * Admin端平台公告控制器
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: PlatformNoticeEntity,
  service: PlatformNoticeService,
  pageQueryOp: {
    keyWordLikeFields: ['title'],
    fieldEq: ['type', 'status'],
    addOrderBy: {
      publishTime: 'DESC',
    },
  },
})
export class AdminPlatformNoticeController extends BaseController {
  @Inject()
  platformNoticeService: PlatformNoticeService;
}
