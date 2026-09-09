import { Provide, Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { CommunityTopicService } from '../../service/topic';
import { CommunityTopicEntity } from '../../entity/topic';

/**
 * 话题管理控制器（Admin端）
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: CommunityTopicEntity,
  service: CommunityTopicService,
  pageQueryOp: {
    keyWordLikeFields: ['name'],
    fieldEq: ['status', 'isHot'],
    addOrderBy: {
      followCount: 'DESC',
    },
  },
})
export class AdminCommunityTopicController extends BaseController {
  @Inject()
  communityTopicService: CommunityTopicService;
}
