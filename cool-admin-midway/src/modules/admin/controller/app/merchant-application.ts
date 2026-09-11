import { Body, Get, Inject, Post, Provide } from '@midwayjs/core';
import { BaseController, CoolController } from '@cool-midway/core';
import { MerchantApplicationEntity } from '../../entity/merchant-application';
import { MerchantApplicationService } from '../../service/merchant-application';
import { MerchantUserEntity } from '../../entity/merchant-user';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';

/**
 * 游客端商家入驻申请
 */
@Provide()
@CoolController({ api: [], entity: MerchantApplicationEntity })
export class AppMerchantApplicationController extends BaseController {
  @Inject()
  ctx;

  @Inject()
  merchantApplicationService: MerchantApplicationService;

  @InjectEntityModel(MerchantUserEntity)
  merchantUserEntity: Repository<MerchantUserEntity>;

  @Post('/submit', { summary: '提交商家入驻申请' })
  async submit(@Body() body: any) {
    const {
      shopName,
      moduleType,
      idCard,
      idCardFront,
      idCardBack,
      businessLicense,
      contactName,
      contactPhone,
    } = body;
    if (
      !shopName ||
      !moduleType ||
      !idCard ||
      !idCardFront ||
      !idCardBack ||
      !businessLicense ||
      !contactName ||
      !contactPhone
    ) {
      return this.fail('请完整填写入驻资料');
    }
    if (![1, 2, 3, 4].includes(Number(moduleType))) {
      return this.fail('请选择正确的经营类型');
    }
    if (!/^1\d{10}$/.test(contactPhone)) {
      return this.fail('请输入正确的联系电话');
    }
    const current =
      await this.merchantApplicationService.merchantApplicationEntity.findOne({
        where: { userId: this.ctx.user.id as any, status: 1 },
      });
    if (current) {
      return this.fail('已有待审核申请，请勿重复提交');
    }
    const application =
      await this.merchantApplicationService.merchantApplicationEntity.save({
        userId: this.ctx.user.id,
        shopName: shopName.trim(),
        moduleType: Number(moduleType),
        idCard: idCard.trim(),
        idCardFront,
        idCardBack,
        businessLicense,
        contactName: contactName.trim(),
        contactPhone,
        status: 1,
      });
    return this.ok({ id: application.id, status: application.status });
  }

  @Get('/mine', { summary: '查看我的入驻申请' })
  async mine() {
    const list =
      await this.merchantApplicationService.merchantApplicationEntity.find({
        where: { userId: this.ctx.user.id as any },
        order: { createTime: 'DESC' },
      });
    return this.ok(list);
  }

  @Get('/center', { summary: '获取我的商家中心信息' })
  async center() {
    const merchant = await this.merchantUserEntity.findOne({
      where: { userId: this.ctx.user.id as any, status: 1 },
      order: { createTime: 'DESC' },
    });
    if (!merchant) {
      return this.ok(null);
    }
    return this.ok({
      id: merchant.id,
      shopName: merchant.shopName,
      moduleType: merchant.moduleType,
      username: merchant.username,
      adminUrl: 'http://127.0.0.1:9000',
    });
  }
}
