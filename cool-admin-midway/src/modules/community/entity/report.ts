import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 举报表
 */
@Entity('community_report')
@Index(['status'])
@Index(['targetType'])
export class CommunityReportEntity extends BaseEntity {
  @Column({ comment: '举报用户ID', type: 'bigint' })
  userId: string;

  @Column({ comment: '目标ID', type: 'bigint' })
  targetId: string;

  @Index()
  @Column({ comment: '类型：1游记 2评论', type: 'tinyint' })
  targetType: number;

  @Column({ comment: '举报原因', length: 200 })
  reason: string;

  @Index()
  @Column({ comment: '状态：1待处理 2已处理 3已驳回', type: 'tinyint', default: 1 })
  status: number;

  @Column({ comment: '处理结果', length: 500, nullable: true })
  handleResult: string;

  @Column({ comment: '处理时间', type: 'datetime', nullable: true })
  handleTime: Date;
}
