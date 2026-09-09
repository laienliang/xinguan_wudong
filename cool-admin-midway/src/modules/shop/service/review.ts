import { Provide, Config } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { ShopReviewEntity } from '../entity/review';
import { BaseService } from '@cool-midway/core';

/**
 * 商品评价服务
 */
@Provide()
export class ShopReviewService extends BaseService {
  @InjectEntityModel(ShopReviewEntity)
  shopReviewEntity: Repository<ShopReviewEntity>;

  @Config('typeorm.dataSource.default.type')
  ormType: string;

  /**
   * 追加评价
   */
  async appendReview(id: string, appendContent: string): Promise<void> {
    await this.shopReviewEntity.update(id, {
      appendContent,
      appendTime: new Date(),
    });
  }

  /**
   * 商家回复
   */
  async merchantReply(id: string, merchantReply: string): Promise<void> {
    await this.shopReviewEntity.update(id, {
      merchantReply,
      replyTime: new Date(),
    });
  }
}
