import { Provide, Inject, Get, Post, Body } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { CommunityPostService } from '../../service/post';
import { CommunityPostEntity } from '../../entity/post';

/**
 * 游记控制器（App端）
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: CommunityPostEntity,
  service: CommunityPostService,
  pageQueryOp: {
    keyWordLikeFields: ['title', 'content'],
    fieldEq: ['userId', 'status', 'relatedType'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
})
export class AppCommunityPostController extends BaseController {
  @Inject()
  communityPostService: CommunityPostService;

  /**
   * 游记详情（增加浏览数）
   */
  @Get('/:id/detail', { summary: '游记详情' })
  async detail() {
    const id = Number(this.baseCtx.params.id);

    // 增加浏览数
    await this.communityPostService.incrementViewCount(id);

    // 获取详情
    const post = await this.communityPostService.info(id);
    return this.ok(post);
  }

  /**
   * 我的游记
   */
  @Get('/my', { summary: '我的游记' })
  async myPosts() {
    const userId = this.baseCtx.admin?.userId || this.baseCtx.userId;
    const posts = await this.communityPostService.list(
      { userId },
      { fieldEq: ['userId'], addOrderBy: { createTime: 'DESC' } }
    );
    return this.ok(posts);
  }

  /**
   * 发布游记
   */
  @Post('/publish', { summary: '发布游记' })
  async publish(@Body() body: any) {
    const userId = this.baseCtx.admin?.userId || this.baseCtx.userId;
    body.userId = userId;

    const id = await this.communityPostService.add(body);
    return this.ok(id);
  }
}
