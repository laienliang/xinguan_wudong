import { Provide } from '@midwayjs/core';
import { BaseService } from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { MerchantUserEntity } from '../entity/merchant-user';
import * as bcrypt from 'bcryptjs';

/**
 * 商家账号服务
 */
@Provide()
export class MerchantUserService extends BaseService {
  @InjectEntityModel(MerchantUserEntity)
  merchantUserEntity: Repository<MerchantUserEntity>;

  /**
   * 修改前处理 - 密码加密
   */
  async modifyBefore(data: any, type: 'delete' | 'update' | 'add') {
    if (type === 'add' || (type === 'update' && data.password)) {
      // 使用 bcrypt 加密密码
      if (data.password) {
        const saltRounds = 10;
        data.password = await bcrypt.hash(data.password, saltRounds);
      }
    }
  }

  /**
   * 验证登录密码
   */
  async verifyPassword(username: string, password: string): Promise<boolean> {
    const user = await this.merchantUserEntity.findOne({ where: { username } });
    if (!user) {
      return false;
    }
    return await bcrypt.compare(password, user.password);
  }

  /**
   * 创建商家账号
   */
  async createMerchant(
    userId: string,
    username: string,
    password: string,
    shopName: string,
    moduleType: number,
    contactName: string,
    contactPhone: string
  ): Promise<number> {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const merchant = await this.merchantUserEntity.save({
      userId,
      username,
      password: hashedPassword,
      shopName,
      moduleType,
      contactName,
      contactPhone,
      status: 1,
    });

    return merchant.id;
  }
}
