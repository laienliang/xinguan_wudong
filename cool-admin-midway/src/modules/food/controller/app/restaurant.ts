import { Provide, Inject, Get, Query } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { FoodRestaurantEntity } from '../../entity/restaurant';
import { FoodRestaurantService } from '../../service/restaurant';

/**
 * App端餐厅控制器
 */
@Provide()
@CoolController({
  api: ['info', 'list', 'page'],
  entity: FoodRestaurantEntity,
  service: FoodRestaurantService,
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
export class AppFoodRestaurantController extends BaseController {
  @Inject()
  foodRestaurantService: FoodRestaurantService;

  /**
   * 查询附近餐厅
   */
  @Get('/nearby', { summary: '查询附近餐厅' })
  async nearby(
    @Query('longitude') longitude: number,
    @Query('latitude') latitude: number,
    @Query('distance') distance: number = 10,
    @Query('limit') limit: number = 20
  ) {
    if (
      !Number.isFinite(Number(longitude)) ||
      !Number.isFinite(Number(latitude))
    ) {
      return this.fail('经纬度参数不正确');
    }
    const radius = Math.min(Math.max(Number(distance) || 10, 1), 100);
    const size = Math.min(Math.max(Number(limit) || 20, 1), 100);
    return this.ok(
      await this.foodRestaurantService.findNearby(
        Number(longitude),
        Number(latitude),
        radius,
        size
      )
    );
  }
}
