import { Provide, Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { MerchantUserEntity } from '../../entity/merchant-user';
import { MerchantUserService } from '../../service/merchant-user';

/**
 * Admin端商家账号控制器
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: MerchantUserEntity,
  service: MerchantUserService,
  pageQueryOp: {
    keyWordLikeFields: ['username', 'shopName', 'contactName'],
    fieldEq: ['moduleType', 'status'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
})
export class AdminMerchantUserController extends BaseController {
  @Inject()
  merchantUserService: MerchantUserService;
}
