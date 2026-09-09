import { Controller, Get, Inject, Query } from '@midwayjs/core';
import { UserAddressService } from '../../service/address';

/**
 * 用户收货地址（管理员）
 */
@Controller('/admin/user/address')
export class AdminUserAddressController {
  @Inject()
  userAddressService: UserAddressService;

  @Get('/list', { summary: '查询用户地址列表（管理员）' })
  async list(@Query('userId') userId: string) {
    const data = await this.userAddressService.list(userId);
    return { code: 0, message: 'success', data };
  }
}
