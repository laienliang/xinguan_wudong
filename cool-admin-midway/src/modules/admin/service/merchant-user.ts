import { Provide } from '@midwayjs/core';
import { BaseService } from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { MerchantUserEntity } from '../entity/merchant-user';
import * as bcrypt from 'bcryptjs';
import { BaseSysUserEntity } from '../../base/entity/sys/user';
import { BaseSysRoleEntity } from '../../base/entity/sys/role';
import { BaseSysUserRoleEntity } from '../../base/entity/sys/user_role';
import { BaseSysRoleMenuEntity } from '../../base/entity/sys/role_menu';
import * as md5 from 'md5';

/**
 * 商家账号服务
 */
@Provide()
export class MerchantUserService extends BaseService {
  @InjectEntityModel(MerchantUserEntity)
  merchantUserEntity: Repository<MerchantUserEntity>;

  @InjectEntityModel(BaseSysUserEntity)
  baseSysUserEntity: Repository<BaseSysUserEntity>;

  @InjectEntityModel(BaseSysRoleEntity)
  baseSysRoleEntity: Repository<BaseSysRoleEntity>;

  @InjectEntityModel(BaseSysUserRoleEntity)
  baseSysUserRoleEntity: Repository<BaseSysUserRoleEntity>;

  @InjectEntityModel(BaseSysRoleMenuEntity)
  baseSysRoleMenuEntity: Repository<BaseSysRoleMenuEntity>;

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
  ): Promise<{ merchantId: number; username: string }> {
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
    const menuIds =
      moduleType === 2
        ? [90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
        : [77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89];
    const role = await this.baseSysRoleEntity.save({
      userId: '1',
      name: `${shopName}商家`,
      label: `merchant_${merchant.id}`,
      remark: '商家后台账号',
      relevance: false,
      menuIdList: menuIds,
      departmentIdList: [],
    });
    const adminUser = await this.baseSysUserEntity.save({
      username,
      password: md5(password),
      passwordV: 1,
      name: contactName,
      nickName: shopName,
      phone: contactPhone,
      status: 1,
      tenantId: merchant.id,
    });
    await this.baseSysUserRoleEntity.save({
      userId: adminUser.id,
      roleId: role.id,
    });
    await this.baseSysRoleMenuEntity.save(
      menuIds.map(menuId => ({ roleId: role.id, menuId }))
    );
    await this.merchantUserEntity.update(merchant.id, {
      adminUserId: adminUser.id as any,
      tenantId: merchant.id,
    });
    return { merchantId: merchant.id, username };
  }
}
