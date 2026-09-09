import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 商家入驻申请表
 */
@Entity('merchant_application')
export class MerchantApplicationEntity extends BaseEntity {
  @Index()
  @Column({ comment: '用户ID', type: 'bigint' })
  userId: string;

  @Column({ comment: '店铺名称', length: 100 })
  shopName: string;

  @Column({ comment: '申请模块', type: 'tinyint' })
  moduleType: number;

  @Column({ comment: '身份证号', length: 18 })
  idCard: string;

  @Column({ comment: '身份证正面', length: 255 })
  idCardFront: string;

  @Column({ comment: '身份证反面', length: 255 })
  idCardBack: string;

  @Column({ comment: '营业执照', length: 255 })
  businessLicense: string;

  @Column({ comment: '联系人', length: 50 })
  contactName: string;

  @Column({ comment: '联系电话', length: 11 })
  contactPhone: string;

  @Index()
  @Column({ comment: '状态：1待审核 2已通过 3已驳回', type: 'tinyint', default: 1 })
  status: number;

  @Column({ comment: '驳回原因', length: 500, nullable: true })
  rejectReason: string;

  @Column({ comment: '审核人ID', type: 'bigint', nullable: true })
  reviewerId: string;

  @Column({ comment: '审核时间', type: 'datetime', nullable: true })
  reviewTime: Date;
}
