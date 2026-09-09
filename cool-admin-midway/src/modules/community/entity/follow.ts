import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 关注关系表
 */
@Entity('community_follow')
@Index(['userId', 'targetId', 'targetType'], { unique: true })
@Index(['userId'])
@Index(['targetType'])
export class CommunityFollowEntity extends BaseEntity {
  @Index()
  @Column({ comment: '用户ID', type: 'bigint' })
  userId: string;

  @Column({ comment: '目标ID', type: 'bigint' })
  targetId: string;

  @Index()
  @Column({ comment: '类型：1用户 2话题', type: 'tinyint' })
  targetType: number;
}
