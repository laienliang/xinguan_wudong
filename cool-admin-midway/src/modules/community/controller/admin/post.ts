import { Provide, Inject, Put, Body } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { CommunityPostService } from '../../service/post';
import { CommunityPostEntity } from '../../entity/post';

/**
 * 游记管理控制器（Admin端）
 */
@Provide()
@CoolController({
  api: ['delete', 'update', 'info', 'list', 'page'],
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
export class AdminCommunityPostController extends BaseController {
  @Inject()
  communityPostService: CommunityPostService;

  /**
   * 审核游记
   */
  @Put('/:id/review', { summary: '审核游记' })
  async review(@Body() body: { status: number }) {
    const id = Number(this.baseCtx.params.id);
    await this.communityPostService.review(id, body.status);
    return this.ok();
  }
}
