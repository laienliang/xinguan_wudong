import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 管理员账号表
 */
@Entity('admin_user')
export class AdminUserEntity extends BaseEntity {
  @Index({ unique: true })
  @Column({ comment: '用户名（唯一）', length: 50 })
  username: string;

  @Column({ comment: '密码（bcrypt加密）', length: 255 })
  password: string;

  @Column({ comment: '真实姓名', length: 50 })
  realName: string;

  @Column({ comment: '角色ID', type: 'int' })
  roleId: number;

  @Column({ comment: '状态：0禁用 1正常', type: 'tinyint', default: 1 })
  status: number;

  @Column({ comment: '最后登录时间', type: 'datetime', nullable: true })
  lastLoginTime: Date;

  @Column({ comment: '最后登录IP', length: 50, nullable: true })
  lastLoginIp: string;
}
