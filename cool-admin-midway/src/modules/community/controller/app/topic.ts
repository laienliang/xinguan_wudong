import { Provide, Inject, Get, Post } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { CommunityTopicService } from '../../service/topic';
import { CommunityTopicEntity } from '../../entity/topic';

/**
 * 话题控制器（App端）
 */
@Provide()
@CoolController({
  api: ['info', 'list', 'page'],
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
export class AppCommunityTopicController extends BaseController {
  @Inject()
  communityTopicService: CommunityTopicService;

  /**
   * 获取热门话题
   */
  @Get('/hot', { summary: '热门话题' })
  async hotTopics() {
    const limit = Number(this.baseCtx.query.limit) || 10;
    const topics = await this.communityTopicService.getHotTopics(limit);
    return this.ok(topics);
  }
}
