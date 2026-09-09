import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { HotelCheckInNoticeEntity } from '../entity/check_in_notice';
import { BaseService } from '@cool-midway/core';

/**
 * 入住须知服务
 */
@Provide()
export class HotelCheckInNoticeService extends BaseService {
  @InjectEntityModel(HotelCheckInNoticeEntity)
  hotelCheckInNoticeEntity: Repository<HotelCheckInNoticeEntity>;

  /**
   * 根据民宿ID获取入住须知
   * @param houseId 民宿ID
   */
  async getByHouseId(houseId: number) {
    return await this.hotelCheckInNoticeEntity.findOne({
      where: { houseId },
    });
  }
}
