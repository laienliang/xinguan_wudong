import { BaseEntity } from '../../base/entity/base';
import { Column, Entity } from 'typeorm';

/**
 * 平台公告表
 */
@Entity('platform_notice')
export class PlatformNoticeEntity extends BaseEntity {
  @Column({ comment: '标题', length: 200 })
  title: string;

  @Column({ comment: '内容', type: 'text' })
  content: string;

  @Column({ comment: '类型：1系统公告 2活动公告', type: 'tinyint', default: 1 })
  type: number;

  @Column({ comment: '状态：0下架 1发布', type: 'tinyint', default: 1 })
  status: number;

  @Column({ comment: '发布时间', type: 'datetime' })
  publishTime: Date;
}
