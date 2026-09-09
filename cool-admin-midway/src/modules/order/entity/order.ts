import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 统一订单表
 */
@Entity('order')
export class OrderEntity extends BaseEntity {
  @Index({ unique: true })
  @Column({ comment: '订单号', length: 32 })
  orderNo: string;

  @Index()
  @Column({ comment: '用户ID', type: 'bigint' })
  userId: string;

  @Column({
    comment: '订单类型：1商品 2餐位 3住宿 4门票 5线路',
    type: 'tinyint'
  })
  type: number;

  @Column({ comment: '订单总金额', type: 'decimal', precision: 10, scale: 2, default: 0 })
  totalAmount: number;

  @Column({ comment: '实付金额', type: 'decimal', precision: 10, scale: 2, default: 0 })
  payAmount: number;

  @Column({
    comment: '状态：1待支付 2已支付 3已取消 4已完成 5已退款',
    type: 'tinyint',
    default: 1
  })
  status: number;

  @Column({ comment: '支付方式：1微信 2支付宝', type: 'tinyint', nullable: true })
  payType: number;

  @Column({ comment: '支付时间', type: 'datetime', nullable: true })
  payTime: Date;

  @Column({ comment: '支付流水号', length: 64, nullable: true })
  payTransactionId: string;

  @Column({ comment: '备注', length: 500, nullable: true })
  remark: string;
}
