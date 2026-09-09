import { Provide, Inject, Post, Get, Body } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { CommunityFollowService } from '../../service/follow';
import { CommunityFollowEntity } from '../../entity/follow';

/**
 * 关注控制器（App端）
 */
@Provide()
@CoolController({
  api: ['list'],
  entity: CommunityFollowEntity,
  service: CommunityFollowService,
})
export class AppCommunityFollowController extends BaseController {
  @Inject()
  communityFollowService: CommunityFollowService;

  /**
   * 关注/取消关注
   */
  @Post('/toggle', { summary: '关注/取消关注' })
  async toggle(@Body() body: { targetId: number; targetType: number }) {
    const userId = this.baseCtx.admin?.userId || this.baseCtx.userId;
    const isFollowing = await this.communityFollowService.toggle(
      userId,
      body.targetId,
      body.targetType
    );
    return this.ok({ isFollowing });
  }

  /**
   * 检查是否已关注
   */
  @Get('/check', { summary: '检查是否已关注' })
  async check() {
    const userId = this.baseCtx.admin?.userId || this.baseCtx.userId;
    const { targetId, targetType } = this.baseCtx.query;
    const isFollowing = await this.communityFollowService.isFollowing(
      userId,
      Number(targetId),
      Number(targetType)
    );
    return this.ok({ isFollowing });
  }

  /**
   * 我的关注列表
   */
  @Get('/my', { summary: '我的关注列表' })
  async myFollowing() {
    const userId = this.baseCtx.admin?.userId || this.baseCtx.userId;
    const targetType = Number(this.baseCtx.query.targetType) || 1;
    const list = await this.communityFollowService.getFollowingList(userId, targetType);
    return this.ok(list);
  }
}
