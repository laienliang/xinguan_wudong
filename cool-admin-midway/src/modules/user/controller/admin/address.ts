import { Provide, Inject, Get, Query } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { UserAddressService } from '../../service/address';
import { UserAddressEntity } from '../../entity/address';

/**
 * 用户收货地址（管理员）
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
export class AdminUserAddressController extends BaseController {
  @Inject()
  userAddressService: UserAddressService;
}
