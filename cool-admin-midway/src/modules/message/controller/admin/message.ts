import { Body, Controller, Post, Inject } from '@midwayjs/core';
import { MessageService } from '../../service/message';

@Controller('/admin/message')
export class AdminMessageController {
  @Inject()
  messageService: MessageService;

  @Post('/send', { summary: '发送消息给指定用户' })
  async send(@Body() body: any) {
    await this.messageService.send(body);
    return { code: 0, message: 'success' };
  }

  @Post('/send-to-all', { summary: '群发消息' })
  async sendToAll(@Body() body: any) {
    await this.messageService.sendToAll(body);
    return { code: 0, message: 'success' };
  }
}
