import { Body, Controller, Get, Put, Inject, Query } from '@midwayjs/core';
import { MessageService } from '../../service/message';
import { Context } from '@midwayjs/koa';

@Controller('/app/message')
export class AppMessageController {
  @Inject()
  ctx: Context;

  @Inject()
  messageService: MessageService;

  @Get('/', { summary: '消息列表' })
  async list(@Query() query: any) {
    const userId = this.ctx.user.id;
    const data = await this.messageService.list(userId, query);
    return { code: 0, message: 'success', data };
  }

  @Get('/unread-count', { summary: '未读消息数' })
  async getUnreadCount() {
    const userId = this.ctx.user.id;
    const data = await this.messageService.getUnreadCount(userId);
    return { code: 0, message: 'success', data };
  }

  @Put('/read', { summary: '标记已读' })
  async markAsRead(@Body('ids') ids: string[]) {
    await this.messageService.markAsRead(ids);
    return { code: 0, message: 'success' };
  }

  @Put('/read-all', { summary: '全部标记已读' })
  async markAllAsRead() {
    const userId = this.ctx.user.id;
    await this.messageService.markAllAsRead(userId);
    return { code: 0, message: 'success' };
  }
}
