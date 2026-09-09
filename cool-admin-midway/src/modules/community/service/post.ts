import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '@cool-midway/core';
import { CommunityPostEntity } from '../entity/post';
import { CommunityTopicEntity } from '../entity/topic';

/**
 * 游记服务
 */
@Provide()
export class CommunityPostService extends BaseService {
  @InjectEntityModel(CommunityPostEntity)
  communityPostEntity: Repository<CommunityPostEntity>;

  @InjectEntityModel(CommunityTopicEntity)
  communityTopicEntity: Repository<CommunityTopicEntity>;

  /**
   * 新增前设置审核状态
   */
  async modifyBefore(data: any, type: 'delete' | 'update' | 'add') {
    if (type === 'add') {
      // 新发布的游记设置为审核中
      data.status = 0;

      // 验证图片数量
      if (data.images && data.images.length > 9) {
        throw new Error('图片最多9张');
      }
    }
  }

  /**
   * 新增后更新话题的游记数
   */
  async modifyAfter(data: any, type: 'delete' | 'update' | 'add', id?: number) {
    if (type === 'add' && data.topicIds && data.topicIds.length > 0) {
      // 更新话题的游记数
      for (const topicId of data.topicIds) {
        await this.communityTopicEntity.increment({ id: topicId }, 'postCount', 1);
      }
    }

    if (type === 'delete' && id) {
      // 删除时减少话题的游记数
      const post = await this.communityPostEntity.findOne({ where: { id } });
      if (post && post.topicIds && post.topicIds.length > 0) {
        for (const topicId of post.topicIds) {
          await this.communityTopicEntity.decrement({ id: topicId }, 'postCount', 1);
        }
      }
    }
  }

  /**
   * 增加浏览数
   */
  async incrementViewCount(id: number): Promise<void> {
    await this.communityPostEntity.increment({ id }, 'viewCount', 1);
  }

  /**
   * 更新点赞数
   */
  async updateLikeCount(id: number, increment: number): Promise<void> {
    if (increment > 0) {
      await this.communityPostEntity.increment({ id }, 'likeCount', increment);
    } else {
      await this.communityPostEntity.decrement({ id }, 'likeCount', Math.abs(increment));
    }
  }

  /**
   * 更新评论数
   */
  async updateCommentCount(id: number, increment: number): Promise<void> {
    if (increment > 0) {
      await this.communityPostEntity.increment({ id }, 'commentCount', increment);
    } else {
      await this.communityPostEntity.decrement({ id }, 'commentCount', Math.abs(increment));
    }
  }

  /**
   * 审核游记
   */
  async review(id: number, status: number): Promise<void> {
    await this.communityPostEntity.update(id, { status });
  }
}
