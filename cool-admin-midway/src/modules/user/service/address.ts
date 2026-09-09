import { Provide, Config } from '@midwayjs/core';
import { BaseService } from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { UserAddressEntity } from '../entity/address';

/**
 * 用户收货地址服务
 */
@Provide()
export class UserAddressService extends BaseService {
  @InjectEntityModel(UserAddressEntity)
  userAddressEntity: Repository<UserAddressEntity>;

  @Config('typeorm.dataSource.default.type')
  ormType: string;

  /**
   * 新增地址前检查是否是第一个地址
   */
  async modifyBefore(data: any, type: 'delete' | 'update' | 'add') {
    if (type === 'add') {
      // 如果是第一个地址，自动设为默认
      const count = await this.userAddressEntity.count({
        where: { userId: data.userId },
      });
      if (count === 0) {
        data.isDefault = 1;
      }
    }
  }

  /**
   * 设置默认地址
   */
  async setDefault(id: string, userId: string): Promise<void> {
    // 先取消其他默认地址
    await this.userAddressEntity.update(
      { userId, isDefault: 1 },
      { isDefault: 0 }
    );

    // 设置当前地址为默认
    await this.userAddressEntity.update(id, { isDefault: 1 });
  }
}
