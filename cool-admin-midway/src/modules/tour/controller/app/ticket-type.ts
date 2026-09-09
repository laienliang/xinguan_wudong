import { Provide, Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { TourTicketTypeEntity } from '../../entity/ticket-type';
import { TourTicketTypeService } from '../../service/ticket-type';

/**
 * App端票种控制器
 */
@Provide()
@CoolController({
  api: ['info', 'list', 'page'],
  entity: TourTicketTypeEntity,
  service: TourTicketTypeService,
  listQueryOp: {
    keyWordLikeFields: ['name'],
    fieldEq: ['scenicSpotId', 'status'],
    addOrderBy: {
      price: 'ASC',
    },
  },
  pageQueryOp: {
    keyWordLikeFields: ['name'],
    fieldEq: ['scenicSpotId', 'status'],
    addOrderBy: {
      price: 'ASC',
    },
  },
})
export class AppTourTicketTypeController extends BaseController {
  @Inject()
  tourTicketTypeService: TourTicketTypeService;
}
