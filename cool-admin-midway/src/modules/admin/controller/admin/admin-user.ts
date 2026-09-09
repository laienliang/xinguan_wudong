import { Provide, Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { AdminUserEntity } from '../../entity/admin-user';
import { AdminUserService } from '../../service/admin-user';

/**
 * Admin端管理员账号控制器
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: AdminUserEntity,
  service: AdminUserService,
  pageQueryOp: {
    keyWordLikeFields: ['username', 'realName'],
    fieldEq: ['status', 'roleId'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
})
export class AdminAdminUserController extends BaseController {
  @Inject()
  adminUserService: AdminUserService;
}
