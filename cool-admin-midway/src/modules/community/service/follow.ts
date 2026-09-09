import { Provide, Inject } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '@cool-midway/core';
import { CommunityFollowEntity } from '../entity/follow';
import { CommunityTopicService } from './topic';

/**
 * 关注服务
 */
@Provide()
export class CommunityFollowService extends BaseService {
  @InjectEntityModel(CommunityFollowEntity)
  communityFollowEntity: Repository<CommunityFollowEntity>;

  @Inject()
  communityTopicService: CommunityTopicService;

  /**
   * 关注/取消关注
   */
  async toggle(userId: string, targetId: number, targetType: number): Promise<boolean> {
    const existing = await this.communityFollowEntity.findOne({
      where: { userId, targetId: String(targetId), targetType },
    });

    if (existing) {
      // 已关注，取消关注
      await this.communityFollowEntity.remove(existing);

      // 如果是话题，更新话题的关注数
      if (targetType === 2) {
        await this.communityTopicService.updateFollowCount(targetId, -1);
      }

      return false; // 返回false表示取消关注
    } else {
      // 未关注，添加关注
      const follow = new CommunityFollowEntity();
      follow.userId = userId;
      follow.targetId = String(targetId);
      follow.targetType = targetType;
      await this.communityFollowEntity.save(follow);

      // 如果是话题，更新话题的关注数
      if (targetType === 2) {
        await this.communityTopicService.updateFollowCount(targetId, 1);
      }

      return true; // 返回true表示关注成功
    }
  }

  /**
   * 检查是否已关注
   */
  async isFollowing(userId: string, targetId: number, targetType: number): Promise<boolean> {
    const count = await this.communityFollowEntity.count({
      where: { userId, targetId: String(targetId), targetType },
    });
    return count > 0;
  }

  /**
   * 获取关注列表
   */
  async getFollowingList(userId: string, targetType: number): Promise<CommunityFollowEntity[]> {
    return await this.communityFollowEntity.find({
      where: { userId, targetType },
      order: { createTime: 'DESC' },
    });
  }
}
