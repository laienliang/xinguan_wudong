import { Provide, Inject, Get, Query } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { UserFavoriteService } from '../../service/favorite';
import { UserFavoriteEntity } from '../../entity/favorite';

/**
 * 用户收藏
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'list', 'page'],
  entity: UserFavoriteEntity,
  service: UserFavoriteService,
  listQueryOp: {
    fieldEq: ['userId', 'targetType'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
  pageQueryOp: {
    fieldEq: ['userId', 'targetType'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
})
export class AppUserFavoriteController extends BaseController {
  @Inject()
  userFavoriteService: UserFavoriteService;

  /**
   * 检查是否已收藏
   */
  @Get('/check', { summary: '检查是否已收藏' })
  async checkFavorite(
    @Query('targetId') targetId: string,
    @Query('targetType') targetType: number
  ) {
    const userId = this.getUserId('app');
    const isFavorite = await this.userFavoriteService.checkFavorite(
      userId,
      targetId,
      targetType
    );
    return this.ok({ isFavorite });
  }
}
