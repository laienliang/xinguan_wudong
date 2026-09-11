import { Inject, Provide } from '@midwayjs/core';
import { BaseService, CoolCommException } from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { MerchantApplicationEntity } from '../entity/merchant-application';
import { MerchantUserService } from './merchant-user';

/**
 * 商家入驻申请服务
 */
@Provide()
export class MerchantApplicationService extends BaseService {
  @InjectEntityModel(MerchantApplicationEntity)
  merchantApplicationEntity: Repository<MerchantApplicationEntity>;

  @Inject()
  merchantUserService: MerchantUserService;

  @Inject()
  ctx;

  /**
   * 修改前处理 - 设置默认状态
   */
  async modifyBefore(data: any, type: 'delete' | 'update' | 'add') {
    if (type === 'add') {
      data.status = 1; // 待审核
    }
  }

  /**
   * 审核商家入驻申请
   */
  async reviewApplication(
    applicationId: number,
    approved: boolean,
    rejectReason?: string
  ) {
    const application = await this.merchantApplicationEntity.findOne({
      where: { id: applicationId as any },
    });

    if (!application) {
      throw new CoolCommException('申请记录不存在');
    }

    if (application.status !== 1) {
      throw new CoolCommException('该申请已经处理过了');
    }

    const reviewerId = this.ctx.admin?.userId || '1';

    if (approved) {
      // 审核通过 - 创建商家账号
      const username = `m_${application.userId}_${Date.now().toString(36)}`;
      const password = `${application.contactPhone.slice(-6)}`; // 默认密码：手机号后6位

      // 创建商家账号
      const merchant = await this.merchantUserService.createMerchant(
        application.userId,
        username,
        password,
        application.shopName,
        application.moduleType,
        application.contactName,
        application.contactPhone
      );

      // 更新申请状态
      await this.merchantApplicationEntity.update(applicationId, {
        status: 2, // 已通过
        reviewerId,
        reviewTime: new Date(),
      });

      return {
        success: true,
        merchantId: merchant.merchantId,
        username: merchant.username,
        defaultPassword: password,
      };
    } else {
      // 审核驳回
      if (!rejectReason) {
        throw new CoolCommException('驳回时必须填写驳回原因');
      }

      await this.merchantApplicationEntity.update(applicationId, {
        status: 3, // 已驳回
        rejectReason,
        reviewerId,
        reviewTime: new Date(),
      });

      return {
        success: true,
      };
    }
  }
}
