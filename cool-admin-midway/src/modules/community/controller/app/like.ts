import { Provide, Inject, Post, Get, Body } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { CommunityLikeService } from '../../service/like';
import { CommunityLikeEntity } from '../../entity/like';

/**
 * 点赞控制器（App端）
 */
@Provide()
@CoolController({
  api: ['list'],
  entity: CommunityLikeEntity,
  service: CommunityLikeService,
})
export class AppCommunityLikeController extends BaseController {
  @Inject()
  communityLikeService: CommunityLikeService;

  /**
   * 点赞/取消点赞
   */
  @Post('/toggle', { summary: '点赞/取消点赞' })
  async toggle(@Body() body: { targetId: number; targetType: number }) {
    const userId = this.baseCtx.admin?.userId || this.baseCtx.userId;
    const isLiked = await this.communityLikeService.toggle(
      userId,
      body.targetId,
      body.targetType
    );
    return this.ok({ isLiked });
  }

  /**
   * 检查是否已点赞
   */
  @Get('/check', { summary: '检查是否已点赞' })
  async check() {
    const userId = this.baseCtx.admin?.userId || this.baseCtx.userId;
    const { targetId, targetType } = this.baseCtx.query;
    const isLiked = await this.communityLikeService.isLiked(
      userId,
      Number(targetId),
      Number(targetType)
    );
    return this.ok({ isLiked });
  }
}
