import { Provide, Inject } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '@cool-midway/core';
import { CommunityLikeEntity } from '../entity/like';
import { CommunityPostService } from './post';
import { CommunityCommentService } from './comment';

/**
 * 点赞服务
 */
@Provide()
export class CommunityLikeService extends BaseService {
  @InjectEntityModel(CommunityLikeEntity)
  communityLikeEntity: Repository<CommunityLikeEntity>;

  @Inject()
  communityPostService: CommunityPostService;

  @Inject()
  communityCommentService: CommunityCommentService;

  /**
   * 点赞/取消点赞
   */
  async toggle(userId: string, targetId: number, targetType: number): Promise<boolean> {
    const existing = await this.communityLikeEntity.findOne({
      where: { userId, targetId: String(targetId), targetType },
    });

    if (existing) {
      // 已点赞，取消点赞
      await this.communityLikeEntity.remove(existing);

      // 更新目标的点赞数
      if (targetType === 1) {
        await this.communityPostService.updateLikeCount(targetId, -1);
      } else if (targetType === 2) {
        await this.communityCommentService.updateLikeCount(targetId, -1);
      }

      return false; // 返回false表示取消点赞
    } else {
      // 未点赞，添加点赞
      const like = new CommunityLikeEntity();
      like.userId = userId;
      like.targetId = String(targetId);
      like.targetType = targetType;
      await this.communityLikeEntity.save(like);

      // 更新目标的点赞数
      if (targetType === 1) {
        await this.communityPostService.updateLikeCount(targetId, 1);
      } else if (targetType === 2) {
        await this.communityCommentService.updateLikeCount(targetId, 1);
      }

      return true; // 返回true表示点赞成功
    }
  }

  /**
   * 检查是否已点赞
   */
  async isLiked(userId: string, targetId: number, targetType: number): Promise<boolean> {
    const count = await this.communityLikeEntity.count({
      where: { userId, targetId: String(targetId), targetType },
    });
    return count > 0;
  }
}
