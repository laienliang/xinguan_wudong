import { Body, Get, Post, Del, Inject, Query } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { UserFavoriteService } from '../../service/favorite';
import { UserFavoriteEntity } from '../../entity/favorite';

/**
 * 用户收藏
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: UserFavoriteEntity,
  pageQueryOp: {
    keyWordLikeFields: [],
  },
})
export class AppUserFavoriteController extends BaseController {
  @Inject()
  ctx;

  @Inject()
  userFavoriteService: UserFavoriteService;

  @Post('/', { summary: '添加收藏' })
  async addFavorite(@Body() body: { targetId: string; targetType: number }) {
    const userId = this.ctx.user.id;
    await this.userFavoriteService.add(userId, body.targetId, body.targetType);
    return this.ok();
  }

  @Del('/', { summary: '取消收藏' })
  async removeFavorite(@Body() body: { targetId: string; targetType: number }) {
    const userId = this.ctx.user.id;
    await this.userFavoriteService.remove(userId, body.targetId, body.targetType);
    return this.ok();
  }

  @Get('/', { summary: '收藏列表' })
  async listFavorites(@Query('targetType') targetType?: number) {
    const userId = this.ctx.user.id;
    const data = await this.userFavoriteService.list(userId, targetType);
    return this.ok(data);
  }

  @Get('/check', { summary: '检查是否已收藏' })
  async checkFavorite(
    @Query('targetId') targetId: string,
    @Query('targetType') targetType: number
  ) {
    const userId = this.ctx.user.id;
    const isFavorite = await this.userFavoriteService.checkFavorite(
      userId,
      targetId,
      targetType
    );
    return this.ok({ isFavorite });
  }
}
