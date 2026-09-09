import { Provide, Inject, Put } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { UserAddressService } from '../../service/address';
import { UserAddressEntity } from '../../entity/address';
import { getUserFromContext } from '../../utils/auth';

/**
 * 用户收货地址
 */
@Provide()
@CoolController({
  prefix: '/app/user/address',
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: UserAddressEntity,
  service: UserAddressService,
  insertParam: ctx => {
    const user = getUserFromContext(ctx, '5bd61df7-8a04-4a6e-aaad-9d520d0ec195x');
    return {
      userId: user?.id,
    };
  },
  listQueryOp: {
    fieldEq: ['userId'],
    addOrderBy: {
      isDefault: 'DESC',
      createTime: 'DESC',
    },
  },
  pageQueryOp: {
    fieldEq: ['userId'],
    addOrderBy: {
      isDefault: 'DESC',
      createTime: 'DESC',
    },
  },
})
export class AppUserAddressController extends BaseController {
  @Inject()
  userAddressService: UserAddressService;

  /**
   * 设置默认地址
   */
  @Put('/:id/default', { summary: '设置默认地址' })
  async setDefault() {
    const userId = this.getUserId('app');
    await this.userAddressService.setDefault(this.baseCtx.params.id, userId);
    return this.ok();
  }
}
