import { Provide, Inject } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository, In } from 'typeorm';
import { MessageEntity } from '../entity/message';
import { BaseService } from '@cool-midway/core';

@Provide()
export class MessageService extends BaseService {
  @InjectEntityModel(MessageEntity)
  messageEntity: Repository<MessageEntity>;

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
   * 消息列表（分页）
   */
  async list(userId: string, query: any): Promise<{ list: MessageEntity[], total: number, unreadCount: number }> {
    const { page = 1, pageSize = 10, type } = query;

    // 查询条件：发给当前用户的消息 或 群发消息
    const where: any = [
      { userId },
      { userId: '0' },
    ];

    if (type) {
      where.forEach(w => w.type = type);
    }

    const [list, total] = await this.messageEntity.findAndCount({
      where,
      order: { createTime: 'DESC' },
      skip: (page - 1) * pageSize,
      take: pageSize,
    });

    // 未读消息数
    const unreadCount = await this.messageEntity.count({
      where: [...where].map(w => ({ ...w, isRead: 0 })),
    });

    return { list, total, unreadCount };
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
    // 更新当前用户的未读消息
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
   * 删除消息
   */
  async delete(ids: string[]): Promise<void> {
    await this.messageEntity.delete({ id: In(ids) });
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
