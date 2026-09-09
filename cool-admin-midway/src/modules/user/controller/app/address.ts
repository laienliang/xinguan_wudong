import { Body, Controller, Get, Inject, Post, Put, Del } from '@midwayjs/core';
import { UserAddressService } from '../../service/address';

/**
 * 用户收货地址
 */
@Controller('/app/user/address')
export class AppUserAddressController {
  @Inject()
  userAddressService: UserAddressService;

  @Inject()
  ctx;

  @Get('/', { summary: '获取收货地址列表' })
  async list() {
    const userId = this.ctx.user.id;
    const data = await this.userAddressService.list(userId);
    return { code: 0, message: 'success', data };
  }

  @Post('/', { summary: '创建收货地址' })
  async create(@Body() body) {
    const userId = this.ctx.user.id;
    const data = await this.userAddressService.create({ ...body, userId });
    return { code: 0, message: 'success', data };
  }

  @Put('/:id', { summary: '更新收货地址' })
  async update(@Body() body) {
    await this.userAddressService.updateAddress(this.ctx.params.id, body);
    return { code: 0, message: 'success' };
  }

  @Del('/:id', { summary: '删除收货地址' })
  async delete() {
    await this.userAddressService.deleteAddress(this.ctx.params.id);
    return { code: 0, message: 'success' };
  }

  @Put('/:id/default', { summary: '设置默认地址' })
  async setDefault() {
    const userId = this.ctx.user.id;
    await this.userAddressService.setDefault(this.ctx.params.id, userId);
    return { code: 0, message: 'success' };
  }
}
