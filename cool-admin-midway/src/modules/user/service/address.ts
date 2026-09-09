import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { UserAddressEntity } from '../entity/address';

@Provide()
export class UserAddressService {
  @InjectEntityModel(UserAddressEntity)
  userAddressEntity: Repository<UserAddressEntity>;

  /**
   * 获取用户地址列表
   */
  async list(userId: string): Promise<UserAddressEntity[]> {
    return await this.userAddressEntity.find({
      where: { userId },
      order: { isDefault: 'DESC', createTime: 'DESC' },
    });
  }

  /**
   * 创建地址
   */
  async create(dto: any): Promise<UserAddressEntity> {
    const address = new UserAddressEntity();
    Object.assign(address, dto);

    // 如果是第一个地址，自动设为默认
    const count = await this.userAddressEntity.count({
      where: { userId: dto.userId },
    });
    if (count === 0) {
      address.isDefault = 1;
    }

    return await this.userAddressEntity.save(address);
  }

  /**
   * 更新地址
   */
  async updateAddress(id: string, dto: any): Promise<void> {
    await this.userAddressEntity.update(id, dto);
  }

  /**
   * 删除地址
   */
  async deleteAddress(id: string): Promise<void> {
    await this.userAddressEntity.delete(id);
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
