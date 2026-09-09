import { Provide, Inject } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { UserFavoriteEntity } from '../entity/favorite';

@Provide()
export class UserFavoriteService {
  @InjectEntityModel(UserFavoriteEntity)
  userFavoriteEntity: Repository<UserFavoriteEntity>;

  /**
   * 添加收藏
   */
  async add(userId: string, targetId: string, targetType: number): Promise<void> {
    // 检查是否已收藏
    const exists = await this.userFavoriteEntity.findOne({
      where: { userId, targetId, targetType },
    });

    if (exists) {
      return; // 已收藏，直接返回
    }

    const favorite = new UserFavoriteEntity();
    favorite.userId = userId;
    favorite.targetId = targetId;
    favorite.targetType = targetType;

    await this.userFavoriteEntity.save(favorite);
  }

  /**
   * 取消收藏
   */
  async remove(userId: string, targetId: string, targetType: number): Promise<void> {
    await this.userFavoriteEntity.delete({ userId, targetId, targetType });
  }

  /**
   * 收藏列表
   */
  async list(userId: string, targetType?: number): Promise<UserFavoriteEntity[]> {
    const where: any = { userId };
    if (targetType) {
      where.targetType = targetType;
    }

    return await this.userFavoriteEntity.find({
      where,
      order: { createTime: 'DESC' },
    });
  }

  /**
   * 检查是否已收藏
   */
  async checkFavorite(userId: string, targetId: string, targetType: number): Promise<boolean> {
    const count = await this.userFavoriteEntity.count({
      where: { userId, targetId, targetType },
    });
    return count > 0;
  }
}
