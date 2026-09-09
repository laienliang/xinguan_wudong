import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 话题表
 */
@Entity('community_topic')
@Index(['isHot'])
@Index(['status'])
export class CommunityTopicEntity extends BaseEntity {
  @Column({ comment: '话题名称', length: 50 })
  name: string;

  @Column({ comment: '简介', length: 200, nullable: true })
  intro: string;

  @Column({ comment: '封面图', length: 255, nullable: true })
  coverImage: string;

  @Column({ comment: '关注数', type: 'int', default: 0 })
  followCount: number;

  @Column({ comment: '游记数', type: 'int', default: 0 })
  postCount: number;

  @Column({ comment: '是否热门：0否 1是', type: 'tinyint', default: 0 })
  isHot: number;

  @Column({ comment: '状态：0禁用 1正常', type: 'tinyint', default: 1 })
  status: number;
}
