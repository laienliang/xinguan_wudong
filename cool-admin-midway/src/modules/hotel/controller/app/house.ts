import { Provide, Inject, Get, Query } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { HotelHouseEntity } from '../../entity/house';
import { HotelHouseService } from '../../service/house';

/**
 * App端民宿控制器
 */
@Provide()
@CoolController({
  api: ['list', 'page', 'info'],
  entity: HotelHouseEntity,
  service: HotelHouseService,
  listQueryOp: {
    keyWordLikeFields: ['name', 'address'],
    fieldEq: ['status'],
    addOrderBy: {
      score: 'DESC',
      createTime: 'DESC',
    },
  },
  pageQueryOp: {
    keyWordLikeFields: ['name', 'address'],
    fieldEq: ['status'],
    addOrderBy: {
      score: 'DESC',
      createTime: 'DESC',
    },
  },
})
export class AppHotelHouseController extends BaseController {
  @Inject()
  hotelHouseService: HotelHouseService;

  /**
   * 查询附近民宿
   */
  @Get('/nearby', { summary: '查询附近民宿' })
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
      await this.hotelHouseService.findNearby(
        Number(longitude),
        Number(latitude),
        radius,
        size
      )
    );
  }
}
