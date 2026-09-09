import { Provide, Inject } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { HotelReviewEntity } from '../entity/review';
import { BaseService } from '@cool-midway/core';

/**
 * 民宿评价服务
 */
@Provide()
export class HotelReviewService extends BaseService {
  @InjectEntityModel(HotelReviewEntity)
  hotelReviewEntity: Repository<HotelReviewEntity>;

  /**
   * 修改前处理
   */
  async modifyBefore(data: any, type: 'delete' | 'update' | 'add') {
    if (type === 'add' || type === 'update') {
      // 验证评分范围
      if (data.score !== undefined && (data.score < 1 || data.score > 5)) {
        throw new Error('评分必须在1-5之间');
      }
    }
  }

  /**
   * 商家回复评价
   * @param reviewId 评价ID
   * @param reply 回复内容
   */
  async merchantReply(reviewId: number, reply: string) {
    await this.hotelReviewEntity.update(
      { id: reviewId },
      {
        merchantReply: reply,
        replyTime: new Date(),
      }
    );
    return { success: true };
  }
}
