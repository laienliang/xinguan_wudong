import { Provide, Inject, Get, Post, Body } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { CommunityCommentService } from '../../service/comment';
import { CommunityCommentEntity } from '../../entity/comment';

/**
 * 评论控制器（App端）
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'list', 'page'],
  entity: CommunityCommentEntity,
  service: CommunityCommentService,
  pageQueryOp: {
    fieldEq: ['postId', 'parentId', 'status'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
})
export class AppCommunityCommentController extends BaseController {
  @Inject()
  communityCommentService: CommunityCommentService;

  /**
   * 发布评论
   */
  @Post('/publish', { summary: '发布评论' })
  async publish(@Body() body: any) {
    const userId = this.baseCtx.admin?.userId || this.baseCtx.userId;
    body.userId = userId;

    const id = await this.communityCommentService.add(body);
    return this.ok(id);
  }

  /**
   * 获取游记的评论列表（支持二级评论）
   */
  @Get('/post/:postId', { summary: '获取游记评论' })
  async getPostComments() {
    const postId = this.baseCtx.params.postId;
    const parentId = this.baseCtx.query.parentId || '0';

    const comments = await this.communityCommentService.getCommentList(Number(postId), Number(parentId));
    return this.ok(comments);
  }
}
