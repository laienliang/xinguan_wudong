import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 点赞表
 */
@Entity('community_like')
@Index(['userId', 'targetId', 'targetType'], { unique: true })
@Index(['userId'])
@Index(['targetType'])
export class CommunityLikeEntity extends BaseEntity {
  @Column({ comment: '用户ID', type: 'bigint' })
  userId: string;

  @Column({ comment: '目标ID', type: 'bigint' })
  targetId: string;

  @Column({ comment: '类型：1游记 2评论', type: 'tinyint' })
  targetType: number;
}
