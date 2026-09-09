import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 评论表
 */
@Entity('community_comment')
@Index(['postId'])
@Index(['parentId'])
@Index(['userId'])
export class CommunityCommentEntity extends BaseEntity {
  @Index()
  @Column({ comment: '游记ID', type: 'bigint' })
  postId: string;

  @Column({ comment: '用户ID', type: 'bigint' })
  userId: string;

  @Index()
  @Column({ comment: '父评论ID（0为一级评论）', type: 'bigint', default: 0 })
  parentId: string;

  @Column({ comment: '回复的用户ID', type: 'bigint', nullable: true })
  replyToUserId: string;

  @Column({ comment: '评论内容', length: 500 })
  content: string;

  @Column({ comment: '点赞数', type: 'int', default: 0 })
  likeCount: number;

  @Column({ comment: '状态：0已删除 1正常', type: 'tinyint', default: 1 })
  status: number;
}
