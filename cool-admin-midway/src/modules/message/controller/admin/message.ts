import { Provide, Inject, Post, Body } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { MessageService } from '../../service/message';
import { MessageEntity } from '../../entity/message';

/**
 * 消息管理（后台）
 */
@Provide()
@CoolController({
  prefix: '/admin/message',
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: MessageEntity,
  service: MessageService,
  listQueryOp: {
    fieldEq: ['userId', 'type', 'isRead'],
    keyWordLikeFields: ['title', 'content'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
  pageQueryOp: {
    fieldEq: ['userId', 'type', 'isRead'],
    keyWordLikeFields: ['title', 'content'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
})
export class AdminMessageController extends BaseController {
  @Inject()
  messageService: MessageService;

  /**
   * 发送消息给指定用户
   */
  @Post('/send', { summary: '发送消息给指定用户' })
  async send(@Body() body: any) {
    await this.messageService.send(body);
    return this.ok();
  }

  /**
   * 群发消息
   */
  @Post('/send-to-all', { summary: '群发消息' })
  async sendToAll(@Body() body: any) {
    await this.messageService.sendToAll(body);
    return this.ok();
  }
}
