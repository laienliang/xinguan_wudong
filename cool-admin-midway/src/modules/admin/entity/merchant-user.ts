import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 商家账号表
 */
@Entity('merchant_user')
export class MerchantUserEntity extends BaseEntity {
  @Index()
  @Column({ comment: '关联用户ID', type: 'bigint' })
  userId: string;

  @Column({ comment: '商家用户名（唯一）', length: 50, unique: true })
  username: string;

  @Column({ comment: '密码', length: 255 })
  password: string;

  @Column({ comment: '店铺名称', length: 100 })
  shopName: string;

  @Index()
  @Column({ comment: '所属模块：1衣 2食 3住 4行', type: 'tinyint' })
  moduleType: number;

  @Column({ comment: '联系人', length: 50 })
  contactName: string;

  @Column({ comment: '联系电话', length: 11 })
  contactPhone: string;

  @Column({ comment: '状态：0禁用 1正常', type: 'tinyint', default: 1 })
  status: number;
}
