import { Provide, Config } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository, In } from 'typeorm';
import { MessageEntity } from '../entity/message';
import { BaseService } from '@cool-midway/core';

/**
 * 消息服务
 */
@Provide()
export class MessageService extends BaseService {
  @InjectEntityModel(MessageEntity)
  messageEntity: Repository<MessageEntity>;

  @Config('typeorm.dataSource.default.type')
  ormType: string;

  /**
   * 发送消息给指定用户
   */
  async send(dto: any): Promise<void> {
    const message = new MessageEntity();
    Object.assign(message, dto);
    await this.messageEntity.save(message);
  }

  /**
   * 群发消息（所有用户）
   */
  async sendToAll(dto: any): Promise<void> {
    const message = new MessageEntity();
    message.userId = '0'; // 0 表示全体用户
    message.type = dto.type;
    message.title = dto.title;
    message.content = dto.content;
    await this.messageEntity.save(message);
  }

  /**
   * 标记已读
   */
  async markAsRead(ids: string[]): Promise<void> {
    await this.messageEntity.update({ id: In(ids) }, { isRead: 1 });
  }

  /**
   * 全部标记已读
   */
  async markAllAsRead(userId: string): Promise<void> {
    await this.messageEntity
      .createQueryBuilder()
      .update(MessageEntity)
      .set({ isRead: 1 })
      .where('(userId = :userId OR userId = :broadcast) AND isRead = 0', {
        userId,
        broadcast: '0'
      })
      .execute();
  }

  /**
   * 获取未读消息数
   */
  async getUnreadCount(userId: string): Promise<number> {
    return await this.messageEntity.count({
      where: [
        { userId, isRead: 0 },
        { userId: '0', isRead: 0 },
      ],
    });
  }
}
