import { Provide, Inject } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '@cool-midway/core';
import { CommunityCommentEntity } from '../entity/comment';
import { CommunityPostService } from './post';

/**
 * 评论服务
 */
@Provide()
export class CommunityCommentService extends BaseService {
  @InjectEntityModel(CommunityCommentEntity)
  communityCommentEntity: Repository<CommunityCommentEntity>;

  @Inject()
  communityPostService: CommunityPostService;

  /**
   * 新增后更新游记的评论数
   */
  async modifyAfter(data: any, type: 'delete' | 'update' | 'add', id?: number) {
    if (type === 'add') {
      // 增加游记的评论数
      await this.communityPostService.updateCommentCount(Number(data.postId), 1);
    }

    if (type === 'delete' && id) {
      // 减少游记的评论数
      const comment = await this.communityCommentEntity.findOne({ where: { id } });
      if (comment) {
        await this.communityPostService.updateCommentCount(Number(comment.postId), -1);
      }
    }
  }

  /**
   * 更新点赞数
   */
  async updateLikeCount(id: number, increment: number): Promise<void> {
    if (increment > 0) {
      await this.communityCommentEntity.increment({ id }, 'likeCount', increment);
    } else {
      await this.communityCommentEntity.decrement({ id }, 'likeCount', Math.abs(increment));
    }
  }

  /**
   * 获取评论列表（支持二级评论）
   */
  async getCommentList(postId: number, parentId: number = 0): Promise<any[]> {
    const comments = await this.communityCommentEntity.find({
      where: { postId: String(postId), parentId: String(parentId), status: 1 },
      order: { createTime: 'DESC' },
    });
    return comments;
  }
}
