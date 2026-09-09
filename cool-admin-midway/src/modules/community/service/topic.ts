import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '@cool-midway/core';
import { CommunityTopicEntity } from '../entity/topic';

/**
 * 话题服务
 */
@Provide()
export class CommunityTopicService extends BaseService {
  @InjectEntityModel(CommunityTopicEntity)
  communityTopicEntity: Repository<CommunityTopicEntity>;

  /**
   * 更新关注数
   */
  async updateFollowCount(id: number, increment: number): Promise<void> {
    if (increment > 0) {
      await this.communityTopicEntity.increment({ id }, 'followCount', increment);
    } else {
      await this.communityTopicEntity.decrement({ id }, 'followCount', Math.abs(increment));
    }
  }

  /**
   * 获取热门话题
   */
  async getHotTopics(limit: number = 10): Promise<CommunityTopicEntity[]> {
    return await this.communityTopicEntity.find({
      where: { status: 1, isHot: 1 },
      order: { followCount: 'DESC' },
      take: limit,
    });
  }
}
