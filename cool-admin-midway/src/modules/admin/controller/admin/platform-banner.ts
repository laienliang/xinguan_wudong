import { Provide, Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { PlatformBannerEntity } from '../../entity/platform-banner';
import { PlatformBannerService } from '../../service/platform-banner';

/**
 * Admin端平台轮播图控制器
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: PlatformBannerEntity,
  service: PlatformBannerService,
  pageQueryOp: {
    keyWordLikeFields: ['title'],
    fieldEq: ['status'],
    addOrderBy: {
      sort: 'ASC',
      createTime: 'DESC',
    },
  },
})
export class AdminPlatformBannerController extends BaseController {
  @Inject()
  platformBannerService: PlatformBannerService;
}
