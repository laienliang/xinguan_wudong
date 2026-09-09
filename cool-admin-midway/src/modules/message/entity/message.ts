import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 系统消息
 */
@Entity('message')
export class MessageEntity extends BaseEntity {
  @Index()
  @Column({ comment: '接收用户ID（0表示全体用户）', type: 'bigint', default: 0 })
  userId: string;

  @Column({
    comment: '类型：1系统 2订单 3互动',
    type: 'tinyint',
    default: 1
  })
  type: number;

  @Column({ comment: '标题', length: 100 })
  title: string;

  @Column({ comment: '内容', type: 'text' })
  content: string;

  @Index()
  @Column({ comment: '是否已读：0未读 1已读', type: 'tinyint', default: 0 })
  isRead: number;
}
