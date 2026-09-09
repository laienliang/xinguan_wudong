import { Provide, Config } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { CartEntity } from '../entity/cart';
import { BaseService } from '@cool-midway/core';

/**
 * 购物车服务
 */
@Provide()
export class CartService extends BaseService {
  @InjectEntityModel(CartEntity)
  cartEntity: Repository<CartEntity>;

  @Config('typeorm.dataSource.default.type')
  ormType: string;

  /**
   * 新增前检查是否已存在，存在则累加数量
   */
  async modifyBefore(data: any, type: 'delete' | 'update' | 'add') {
    if (type === 'add') {
      const existing = await this.cartEntity.findOne({
        where: {
          userId: data.userId,
          goodsId: data.goodsId,
          skuId: data.skuId || null,
        },
      });

      if (existing) {
        // 已存在，累加数量
        existing.quantity += data.quantity || 1;
        await this.cartEntity.save(existing);
        throw new Error('CART_ALREADY_EXISTS'); // 阻止继续执行 add
      }
    }
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
