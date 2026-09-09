import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 用户收藏
 */
@Entity('user_favorite')
@Index(['userId', 'targetId', 'targetType'], { unique: true })
export class UserFavoriteEntity extends BaseEntity {
  @Column({ comment: '用户ID', type: 'bigint' })
  userId: string;

  @Column({ comment: '目标ID', type: 'bigint' })
  targetId: string;

  @Column({
    comment: '目标类型：1商品 2餐厅 3民宿 4线路 5游记',
    type: 'tinyint'
  })
  targetType: number;
}
