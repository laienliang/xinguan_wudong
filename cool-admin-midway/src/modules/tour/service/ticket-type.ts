import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { TourTicketTypeEntity } from '../entity/ticket-type';
import { BaseService } from '@cool-midway/core';

/**
 * 票种服务
 */
@Provide()
export class TourTicketTypeService extends BaseService {
  @InjectEntityModel(TourTicketTypeEntity)
  tourTicketTypeEntity: Repository<TourTicketTypeEntity>;

  /**
   * 修改前处理
   */
  async modifyBefore(data: any, type: 'delete' | 'update' | 'add') {
    if (type === 'update' || type === 'add') {
      // 验证库存不能为负数（除了-1表示无限制）
      if (data.stock !== undefined && data.stock < -1) {
        throw new Error('库存值无效');
      }
      // 验证价格不能为负数
      if (data.price !== undefined && data.price < 0) {
        throw new Error('价格不能为负数');
      }
    }
  }
}
