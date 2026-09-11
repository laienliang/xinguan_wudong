import { Provide, Inject, Get, Query } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { TourScenicSpotEntity } from '../../entity/scenic-spot';
import { TourScenicSpotService } from '../../service/scenic-spot';

/**
 * App端景区控制器
 */
@Provide()
@CoolController({
  api: ['info', 'list', 'page'],
  entity: TourScenicSpotEntity,
  service: TourScenicSpotService,
  listQueryOp: {
    keyWordLikeFields: ['name', 'address'],
    fieldEq: ['status'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
  pageQueryOp: {
    keyWordLikeFields: ['name', 'address'],
    fieldEq: ['status'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
})
export class AppTourScenicSpotController extends BaseController {
  @Inject()
  tourScenicSpotService: TourScenicSpotService;

  /**
   * 查询附近景区
   */
  @Get('/nearby', { summary: '查询附近景区' })
  async nearby(
    @Query('longitude') longitude: number,
    @Query('latitude') latitude: number,
    @Query('distance') distance: number = 10,
    @Query('limit') limit: number = 20
  ) {
    if (!Number.isFinite(Number(longitude)) || !Number.isFinite(Number(latitude))) {
      return this.fail('经纬度参数不正确');
    }
    const radius = Math.min(Math.max(Number(distance) || 10, 1), 100);
    const size = Math.min(Math.max(Number(limit) || 20, 1), 100);
    return this.ok(
      await this.tourScenicSpotService.findNearby(
        Number(longitude),
        Number(latitude),
        radius,
        size
      )
    );
  }
}
