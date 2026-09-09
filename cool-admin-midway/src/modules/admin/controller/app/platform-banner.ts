import { Provide, Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { PlatformBannerEntity } from '../../entity/platform-banner';
import { PlatformBannerService } from '../../service/platform-banner';

/**
 * App端平台轮播图控制器
 */
@Provide()
@CoolController({
  api: ['list'],
  entity: PlatformBannerEntity,
  service: PlatformBannerService,
  listQueryOp: {
    where: async () => {
      return [['status = :status', { status: 1 }]]; // 只返回已上架的轮播图
    },
    addOrderBy: {
      sort: 'ASC',
      createTime: 'DESC',
    },
  },
})
export class AppPlatformBannerController extends BaseController {
  @Inject()
  platformBannerService: PlatformBannerService;
}
