import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 用户收货地址
 */
@Entity('user_address')
export class UserAddressEntity extends BaseEntity {
  @Index()
  @Column({ comment: '用户ID', type: 'bigint' })
  userId: string;

  @Column({ comment: '收货人姓名', length: 50 })
  name: string;

  @Column({ comment: '收货人电话', length: 11 })
  phone: string;

  @Column({ comment: '省', length: 50 })
  province: string;

  @Column({ comment: '市', length: 50 })
  city: string;

  @Column({ comment: '区/县', length: 50 })
  district: string;

  @Column({ comment: '详细地址', length: 200 })
  detail: string;

  @Column({ comment: '是否默认', default: 0, type: 'tinyint' })
  isDefault: number;
}
