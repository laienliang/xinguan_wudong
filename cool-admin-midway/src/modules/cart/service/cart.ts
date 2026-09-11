import { Provide, Config } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { CartEntity } from '../entity/cart';
import { ShopGoodsEntity } from '../../shop/entity/goods';
import { BaseService } from '@cool-midway/core';

/**
 * 购物车服务
 */
@Provide()
export class CartService extends BaseService {
  @InjectEntityModel(CartEntity)
  cartEntity: Repository<CartEntity>;

  @InjectEntityModel(ShopGoodsEntity)
  shopGoodsEntity: Repository<ShopGoodsEntity>;

  @Config('typeorm.dataSource.default.type')
  ormType: string;

  /**
   * 新增购物车项，相同商品与规格自动累加数量
   */
  async addOrIncrement(userId: string, data: Partial<CartEntity>) {
    const existing = await this.cartEntity.findOne({
      where: {
        userId,
        goodsId: String(data.goodsId),
        skuId: data.skuId || null,
      },
    });
    if (existing) {
      existing.quantity += Math.max(1, Number(data.quantity) || 1);
      return await this.cartEntity.save(existing);
    }
    return await this.cartEntity.save(
      this.cartEntity.create({
        userId,
        goodsId: String(data.goodsId),
        goodsType: Number(data.goodsType),
        skuId: data.skuId || null,
        quantity: Math.max(1, Number(data.quantity) || 1),
        selected: 1,
      })
    );
  }

  /**
   * 查询购物车并补充商品展示信息
   */
  async listWithGoods(userId: string) {
    const carts = await this.cartEntity.find({
      where: { userId },
      order: { createTime: 'DESC' },
    });
    const goodsIds = carts.map(cart => Number(cart.goodsId));
    const goods = goodsIds.length
      ? await this.shopGoodsEntity.findByIds(goodsIds)
      : [];
    const goodsMap = new Map(
      goods.map(goodsItem => [String(goodsItem.id), goodsItem])
    );
    return carts.map(cart => {
      const goodsItem = goodsMap.get(String(cart.goodsId));
      return {
        ...cart,
        title: goodsItem?.title,
        subtitle: goodsItem?.subtitle,
        price: goodsItem?.price,
        mainImage: goodsItem?.mainImage,
        stock: goodsItem?.stock,
      };
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
