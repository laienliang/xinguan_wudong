import { Provide, Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { TourRouteItineraryEntity } from '../../entity/itinerary';
import { TourRouteItineraryService } from '../../service/itinerary';

/**
 * Admin端行程管理控制器
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: TourRouteItineraryEntity,
  service: TourRouteItineraryService,
  listQueryOp: {
    keyWordLikeFields: ['title'],
    fieldEq: ['routeId', 'dayNumber'],
    addOrderBy: {
      dayNumber: 'ASC',
    },
  },
  pageQueryOp: {
    keyWordLikeFields: ['title'],
    fieldEq: ['routeId', 'dayNumber'],
    addOrderBy: {
      dayNumber: 'ASC',
    },
  },
})
export class AdminTourItineraryController extends BaseController {
  @Inject()
  tourRouteItineraryService: TourRouteItineraryService;
}
