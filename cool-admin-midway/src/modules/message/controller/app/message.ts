import { Provide, Inject, Get, Put, Body } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { MessageService } from '../../service/message';
import { MessageEntity } from '../../entity/message';

/**
 * 消息控制器
 */
@Provide()
@CoolController({
  prefix: '/app/message',
  api: ['delete', 'info', 'list', 'page'],
  entity: MessageEntity,
  service: MessageService,
  listQueryOp: {
    fieldEq: ['type'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
  pageQueryOp: {
    fieldEq: ['type'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
})
export class AppMessageController extends BaseController {
  @Inject()
  messageService: MessageService;

  /**
   * 获取未读消息数
   */
  @Get('/unread-count', { summary: '未读消息数' })
  async getUnreadCount() {
    const userId = this.getUserId('app');
    const data = await this.messageService.getUnreadCount(userId);
    return this.ok(data);
  }

  /**
   * 标记已读
   */
  @Put('/read', { summary: '标记已读' })
  async markAsRead(@Body('ids') ids: string[]) {
    await this.messageService.markAsRead(ids);
    return this.ok();
  }

  /**
   * 全部标记已读
   */
  @Put('/read-all', { summary: '全部标记已读' })
  async markAllAsRead() {
    const userId = this.getUserId('app');
    await this.messageService.markAllAsRead(userId);
    return this.ok();
  }
}
