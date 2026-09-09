import { Provide, Config } from '@midwayjs/core';
import { BaseService } from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { UserFavoriteEntity } from '../entity/favorite';

/**
 * 用户收藏服务
 */
@Provide()
export class UserFavoriteService extends BaseService {
  @InjectEntityModel(UserFavoriteEntity)
  userFavoriteEntity: Repository<UserFavoriteEntity>;

  @Config('typeorm.dataSource.default.type')
  ormType: string;

  /**
   * 新增前检查是否已收藏
   */
  async modifyBefore(data: any, type: 'delete' | 'update' | 'add') {
    if (type === 'add') {
      const { userId, targetId, targetType } = data;
      const exists = await this.userFavoriteEntity.findOne({
        where: { userId, targetId, targetType },
      });
      if (exists) {
        throw new Error('已收藏该内容');
      }
    }
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
