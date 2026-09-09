import { Provide } from '@midwayjs/core';
import { BaseService } from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { AdminUserEntity } from '../entity/admin-user';
import * as bcrypt from 'bcryptjs';

/**
 * 管理员账号服务
 */
@Provide()
export class AdminUserService extends BaseService {
  @InjectEntityModel(AdminUserEntity)
  adminUserEntity: Repository<AdminUserEntity>;

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
    const user = await this.adminUserEntity.findOne({ where: { username } });
    if (!user) {
      return false;
    }
    return await bcrypt.compare(password, user.password);
  }

  /**
   * 更新最后登录信息
   */
  async updateLastLogin(userId: string, ip: string) {
    await this.adminUserEntity.update(userId, {
      lastLoginTime: new Date(),
      lastLoginIp: ip,
    });
  }
}
