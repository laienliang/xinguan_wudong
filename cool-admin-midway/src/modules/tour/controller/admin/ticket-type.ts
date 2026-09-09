import { Provide, Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { TourTicketTypeEntity } from '../../entity/ticket-type';
import { TourTicketTypeService } from '../../service/ticket-type';

/**
 * Admin端票种管理控制器
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: TourTicketTypeEntity,
  service: TourTicketTypeService,
  listQueryOp: {
    keyWordLikeFields: ['name'],
    fieldEq: ['scenicSpotId', 'status'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
  pageQueryOp: {
    keyWordLikeFields: ['name'],
    fieldEq: ['scenicSpotId', 'status'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
})
export class AdminTourTicketTypeController extends BaseController {
  @Inject()
  tourTicketTypeService: TourTicketTypeService;
}
