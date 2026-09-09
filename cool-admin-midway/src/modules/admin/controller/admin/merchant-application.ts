import { Body, Inject, Post, Provide } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { MerchantApplicationEntity } from '../../entity/merchant-application';
import { MerchantApplicationService } from '../../service/merchant-application';

/**
 * Admin端商家入驻申请控制器
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: MerchantApplicationEntity,
  service: MerchantApplicationService,
  pageQueryOp: {
    keyWordLikeFields: ['shopName', 'contactName'],
    fieldEq: ['status', 'moduleType'],
    addOrderBy: {
      createTime: 'DESC',
    },
  },
})
export class AdminMerchantApplicationController extends BaseController {
  @Inject()
  merchantApplicationService: MerchantApplicationService;

  /**
   * 审核商家入驻申请
   */
  @Post('/review')
  async review(@Body() body: any) {
    const { applicationId, approved, rejectReason } = body;
    return this.ok(
      await this.merchantApplicationService.reviewApplication(
        applicationId,
        approved,
        rejectReason
      )
    );
  }
}
