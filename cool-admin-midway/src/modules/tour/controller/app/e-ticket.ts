import { Provide, Inject, Get, Query } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { TourETicketEntity } from '../../entity/e-ticket';
import { TourETicketService } from '../../service/e-ticket';

/**
 * App端电子票控制器
 */
@Provide()
@CoolController({
  api: ['info', 'list', 'page'],
  entity: TourETicketEntity,
  service: TourETicketService,
  listQueryOp: {
    fieldEq: ['orderId', 'status', 'validDate'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
  pageQueryOp: {
    fieldEq: ['orderId', 'status', 'validDate'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
})
export class AppTourETicketController extends BaseController {
  @Inject()
  tourETicketService: TourETicketService;

  /**
   * 根据订单ID获取电子票列表
   */
  @Get('/byOrder')
  async getByOrder(@Query('orderId') orderId: string) {
    const tickets = await this.tourETicketService.tourETicketEntity.find({
      where: { orderId },
    });
    return tickets;
  }
}
