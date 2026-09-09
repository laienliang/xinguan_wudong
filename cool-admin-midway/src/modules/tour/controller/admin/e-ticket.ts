import { Provide, Inject, Post, Body } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { TourETicketEntity } from '../../entity/e-ticket';
import { TourETicketService } from '../../service/e-ticket';

/**
 * Admin端电子票核销控制器
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: TourETicketEntity,
  service: TourETicketService,
  listQueryOp: {
    keyWordLikeFields: ['ticketNo'],
    fieldEq: ['orderId', 'status', 'validDate'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
  pageQueryOp: {
    keyWordLikeFields: ['ticketNo'],
    fieldEq: ['orderId', 'status', 'validDate'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
})
export class AdminTourETicketController extends BaseController {
  @Inject()
  tourETicketService: TourETicketService;

  /**
   * 核销电子票
   */
  @Post('/verify')
  async verify(@Body('ticketNo') ticketNo: string) {
    return this.tourETicketService.verify(ticketNo);
  }

  /**
   * 查询电子票信息
   */
  @Post('/query')
  async query(@Body('ticketNo') ticketNo: string) {
    const ticket = await this.tourETicketService.getByTicketNo(ticketNo);
    if (!ticket) {
      return { success: false, message: '电子票不存在' };
    }
    return { success: true, data: ticket };
  }
}
