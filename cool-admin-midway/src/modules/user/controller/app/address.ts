import { Provide, Inject, Put } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { UserAddressService } from '../../service/address';
import { UserAddressEntity } from '../../entity/address';

/**
 * 用户收货地址
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: UserAddressEntity,
  service: UserAddressService,
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
