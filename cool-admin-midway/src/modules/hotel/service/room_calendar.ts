import { Provide, Inject } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { HotelRoomCalendarEntity } from '../entity/room_calendar';
import { BaseService } from '@cool-midway/core';
import * as moment from 'moment';

/**
 * 房态日历服务
 */
@Provide()
export class HotelRoomCalendarService extends BaseService {
  @InjectEntityModel(HotelRoomCalendarEntity)
  hotelRoomCalendarEntity: Repository<HotelRoomCalendarEntity>;

  /**
   * 批量设置房态（批量设置价格和可用房间数）
   * @param roomTypeId 房型ID
   * @param startDate 开始日期
   * @param endDate 结束日期
   * @param price 价格
   * @param availableRooms 可用房间数
   * @param status 状态
   */
  async batchSet(
    roomTypeId: number,
    startDate: string,
    endDate: string,
    price?: number,
    availableRooms?: number,
    status?: number
  ) {
    const start = moment(startDate);
    const end = moment(endDate);
    const dates = [];

    // 生成日期范围
    let current = start.clone();
    while (current.isSameOrBefore(end)) {
      dates.push(current.format('YYYY-MM-DD'));
      current.add(1, 'day');
    }

    // 批量插入或更新
    for (const date of dates) {
      const existing = await this.hotelRoomCalendarEntity.findOne({
        where: { roomTypeId, date },
      });

      if (existing) {
        // 更新
        const updateData: any = {};
        if (price !== undefined) updateData.price = price;
        if (availableRooms !== undefined) updateData.availableRooms = availableRooms;
        if (status !== undefined) updateData.status = status;

        await this.hotelRoomCalendarEntity.update({ id: existing.id }, updateData);
      } else {
        // 插入
        await this.hotelRoomCalendarEntity.save({
          roomTypeId,
          date,
          price: price || 0,
          availableRooms: availableRooms || 0,
          status: status !== undefined ? status : 1,
        });
      }
    }

    return { success: true, count: dates.length };
  }

  /**
   * 查询房态（查询日期范围内的房态）
   * @param roomTypeId 房型ID
   * @param startDate 开始日期
   * @param endDate 结束日期
   */
  async queryAvailability(roomTypeId: number, startDate: string, endDate: string) {
    const calendars = await this.hotelRoomCalendarEntity
      .createQueryBuilder('calendar')
      .where('calendar.roomTypeId = :roomTypeId', { roomTypeId })
      .andWhere('calendar.date >= :startDate', { startDate })
      .andWhere('calendar.date <= :endDate', { endDate })
      .andWhere('calendar.status = 1')
      .orderBy('calendar.date', 'ASC')
      .getMany();

    return calendars;
  }

  /**
   * 修改前处理
   */
  async modifyBefore(data: any, type: 'delete' | 'update' | 'add') {
    if (type === 'update' || type === 'add') {
      // 验证可用房间数
      if (data.availableRooms !== undefined && data.availableRooms < 0) {
        throw new Error('可用房间数不能为负数');
      }
    }
  }
}
