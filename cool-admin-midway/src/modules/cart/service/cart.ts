import { Provide, Inject } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository, In } from 'typeorm';
import { CartEntity } from '../entity/cart';
import { BaseService } from '@cool-midway/core';

@Provide()
export class CartService extends BaseService {
  @InjectEntityModel(CartEntity)
  cartEntity: Repository<CartEntity>;

  /**
   * 加入购物车
   */
  async add(dto: any): Promise<CartEntity> {
    // 检查是否已存在
    const existing = await this.cartEntity.findOne({
      where: {
        userId: dto.userId,
        goodsId: dto.goodsId,
        skuId: dto.skuId || null,
      },
    });

    if (existing) {
      // 已存在，累加数量
      existing.quantity += dto.quantity || 1;
      return await this.cartEntity.save(existing);
    }

    // 新增
    const cart = new CartEntity();
    Object.assign(cart, dto);
    return await this.cartEntity.save(cart);
  }

  /**
   * 购物车列表
   */
  async list(userId: string): Promise<CartEntity[]> {
    return await this.cartEntity.find({
      where: { userId },
      order: { createTime: 'DESC' },
    });
  }

  /**
   * 更新数量
   */
  async updateQuantity(id: number, quantity: number): Promise<void> {
    if (quantity <= 0) {
      throw new Error('数量必须大于0');
    }
    await this.cartEntity.update(id, { quantity });
  }

  /**
   * 切换选中状态
   */
  async toggleSelect(id: number): Promise<void> {
    const cart = await this.cartEntity.findOne({ where: { id } });
    if (cart) {
      cart.selected = cart.selected === 1 ? 0 : 1;
      await this.cartEntity.save(cart);
    }
  }

  /**
   * 删除购物车项
   */
  async remove(ids: string[]): Promise<void> {
    await this.cartEntity.delete({ id: In(ids) });
  }

  /**
   * 清空购物车
   */
  async clear(userId: string): Promise<void> {
    await this.cartEntity.delete({ userId });
  }

  /**
   * 获取已选中商品
   */
  async getSelectedItems(userId: string): Promise<CartEntity[]> {
    return await this.cartEntity.find({
      where: { userId, selected: 1 },
    });
  }
}
