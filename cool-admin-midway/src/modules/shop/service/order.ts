import { Provide, Config, Inject } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { ShopOrderEntity } from '../entity/order';
import { ShopOrderItemEntity } from '../entity/order_item';
import { BaseService } from '@cool-midway/core';
import { CartEntity } from '../../cart/entity/cart';
import { ShopGoodsEntity } from '../entity/goods';
import { UserAddressEntity } from '../../user/entity/address';
import { OrderEntity } from '../../order/entity/order';

/**
 * 商品订单服务
 */
@Provide()
export class ShopOrderService extends BaseService {
  @InjectEntityModel(ShopOrderEntity)
  shopOrderEntity: Repository<ShopOrderEntity>;

  @InjectEntityModel(ShopOrderItemEntity)
  shopOrderItemEntity: Repository<ShopOrderItemEntity>;

  /**
   * 从已选购物车项创建商品订单
   */
  async checkout(userId: string, addressId: string) {
    return this.shopOrderEntity.manager.transaction(async manager => {
      const cartRepository = manager.getRepository(CartEntity);
      const goodsRepository = manager.getRepository(ShopGoodsEntity);
      const addressRepository = manager.getRepository(UserAddressEntity);
      const orderRepository = manager.getRepository(OrderEntity);
      const shopOrderRepository = manager.getRepository(ShopOrderEntity);
      const itemRepository = manager.getRepository(ShopOrderItemEntity);

      const address = await addressRepository.findOne({
        where: { id: Number(addressId), userId },
      });
      if (!address) {
        throw new Error('收货地址不存在');
      }

      const carts = await cartRepository.find({
        where: { userId, selected: 1 },
      });
      if (!carts.length) {
        throw new Error('请先选择需要结算的商品');
      }

      const goodsIds = carts.map(item => Number(item.goodsId));
      const goods = await goodsRepository.findByIds(goodsIds);
      const goodsMap = new Map(goods.map(item => [String(item.id), item]));
      const lines = carts.map(cart => {
        const goodsItem = goodsMap.get(String(cart.goodsId));
        if (!goodsItem || goodsItem.status !== 1) {
          throw new Error('购物车中存在不可购买商品');
        }
        if (goodsItem.stock < cart.quantity) {
          throw new Error(`${goodsItem.title} 库存不足`);
        }
        const price = Number(goodsItem.price);
        return {
          cart,
          goods: goodsItem,
          price,
          amount: price * cart.quantity,
        };
      });
      const totalAmount = lines.reduce((sum, line) => sum + line.amount, 0);
      const order = await orderRepository.save(
        orderRepository.create({
          orderNo: `${Date.now()}${Math.floor(Math.random() * 1000000)
            .toString()
            .padStart(6, '0')}`,
          userId,
          type: 1,
          totalAmount,
          payAmount: totalAmount,
          status: 1,
          remark: `收货地址：${address.province}${address.city}${address.district}${address.detail}`,
        })
      );
      const shopOrder = await shopOrderRepository.save(
        shopOrderRepository.create({
          orderId: String(order.id),
          userId,
          totalAmount,
          freight: 0,
          addressId: String(address.id),
          addressSnapshot: address,
          status: 1,
        })
      );
      await itemRepository.save(
        lines.map(line =>
          itemRepository.create({
            orderId: String(shopOrder.id),
            goodsId: String(line.goods.id),
            skuId: line.cart.skuId,
            goodsName: line.goods.title,
            price: line.price,
            quantity: line.cart.quantity,
            amount: line.amount,
            goodsImage: line.goods.mainImage,
          })
        )
      );
      for (const line of lines) {
        await goodsRepository.update(
          { id: line.goods.id },
          {
            stock: line.goods.stock - line.cart.quantity,
            sales: line.goods.sales + line.cart.quantity,
          }
        );
      }
      await cartRepository.remove(carts);
      return { orderNo: order.orderNo, orderId: order.id };
    });
  }

  @Config('typeorm.dataSource.default.type')
  ormType: string;

  /**
   * 修改前处理
   */
  async modifyBefore(data: any, type: 'delete' | 'update' | 'add') {
    if (type === 'add') {
      // 创建订单时的业务逻辑可以在这里处理
      if (!data.orderId) {
        throw new Error('关联订单ID不能为空');
      }
    }
  }

  /**
   * 更新物流信息
   */
  async updateLogistics(
    id: string,
    logisticsCompany: string,
    logisticsNo: string
  ): Promise<void> {
    await this.shopOrderEntity.update(id, {
      logisticsCompany,
      logisticsNo,
      status: 2, // 已发货
    });
  }
}
