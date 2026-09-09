import { Provide, Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { CommunityCommentService } from '../../service/comment';
import { CommunityCommentEntity } from '../../entity/comment';

/**
 * 评论管理控制器（Admin端）
 */
@Provide()
@CoolController({
  api: ['delete', 'list', 'page', 'info'],
  entity: CommunityCommentEntity,
  service: CommunityCommentService,
  pageQueryOp: {
    keyWordLikeFields: ['content'],
    fieldEq: ['postId', 'userId', 'status'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
})
export class AdminCommunityCommentController extends BaseController {
  @Inject()
  communityCommentService: CommunityCommentService;
}
