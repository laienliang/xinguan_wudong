import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 游记表
 */
@Entity('community_post')
@Index(['userId'])
@Index(['status'])
export class CommunityPostEntity extends BaseEntity {
  @Column({ comment: '用户ID', type: 'bigint' })
  userId: string;

  @Column({ comment: '标题', length: 200 })
  title: string;

  @Column({ comment: '文字内容', type: 'text' })
  content: string;

  @Column({ comment: '图片列表（JSON数组，最多9张）', type: 'simple-json', nullable: true })
  images: string[];

  @Column({ comment: '视频URL', length: 255, nullable: true })
  videoUrl: string;

  @Column({ comment: '地点', length: 100, nullable: true })
  location: string;

  @Column({ comment: '关联类型：1商品 2餐厅 3民宿 4景区', type: 'tinyint', nullable: true })
  relatedType: number;

  @Column({ comment: '关联ID', type: 'bigint', nullable: true })
  relatedId: string;

  @Column({ comment: '话题ID（JSON数组）', type: 'simple-json', nullable: true })
  topicIds: number[];

  @Column({ comment: '点赞数', type: 'int', default: 0 })
  likeCount: number;

  @Column({ comment: '评论数', type: 'int', default: 0 })
  commentCount: number;

  @Column({ comment: '收藏数', type: 'int', default: 0 })
  favoriteCount: number;

  @Column({ comment: '浏览数', type: 'int', default: 0 })
  viewCount: number;

  @Column({ comment: '状态：0审核中 1正常 2已下架', type: 'tinyint', default: 0 })
  status: number;
}
