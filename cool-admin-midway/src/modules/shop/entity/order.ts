import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 商品订单表
 */
@Entity('shop_order')
export class ShopOrderEntity extends BaseEntity {
  @Index({ unique: true })
  @Column({ comment: '关联统一订单ID', type: 'bigint' })
  orderId: string;

  @Index()
  @Column({ comment: '用户ID', type: 'bigint' })
  userId: string;

  @Column({ comment: '商品总金额', type: 'decimal', precision: 10, scale: 2, default: 0 })
  totalAmount: number;

  @Column({ comment: '运费', type: 'decimal', precision: 10, scale: 2, default: 0 })
  freight: number;

  @Column({ comment: '收货地址ID', type: 'bigint' })
  addressId: string;

  @Column({ comment: '地址快照', type: 'simple-json' })
  addressSnapshot: any;

  @Column({ comment: '物流公司', length: 50, nullable: true })
  logisticsCompany: string;

  @Column({ comment: '物流单号', length: 50, nullable: true })
  logisticsNo: string;

  @Column({ comment: '状态：1待发货 2已发货 3已收货', type: 'tinyint', default: 1 })
  status: number;
}
