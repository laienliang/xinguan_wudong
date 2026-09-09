import { Provide, Inject } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { HotelBookingOrderEntity } from '../entity/booking_order';
import { BaseService } from '@cool-midway/core';
import { HotelRoomCalendarService } from './room_calendar';
import * as moment from 'moment';

/**
 * 住宿预订订单服务
 */
@Provide()
export class HotelBookingOrderService extends BaseService {
  @InjectEntityModel(HotelBookingOrderEntity)
  hotelBookingOrderEntity: Repository<HotelBookingOrderEntity>;

  @Inject()
  hotelRoomCalendarService: HotelRoomCalendarService;

  /**
   * 生成入住码（8位随机码）
   */
  generateCheckInCode(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 8; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  }

  /**
   * 修改前处理
   */
  async modifyBefore(data: any, type: 'delete' | 'update' | 'add') {
    if (type === 'add') {
      // 计算入住天数
      if (data.checkInDate && data.checkOutDate) {
        const checkIn = moment(data.checkInDate);
        const checkOut = moment(data.checkOutDate);
        data.nights = checkOut.diff(checkIn, 'days');

        if (data.nights <= 0) {
          throw new Error('离店日期必须晚于入住日期');
        }
      }

      // 检查房态和扣减库存
      if (data.roomTypeId && data.checkInDate && data.checkOutDate && data.roomCount) {
        const calendars = await this.hotelRoomCalendarService.queryAvailability(
          data.roomTypeId,
          data.checkInDate,
          data.checkOutDate
        );

        // 检查每一天是否有足够的房间
        const start = moment(data.checkInDate);
        const end = moment(data.checkOutDate);
        let current = start.clone();

        while (current.isBefore(end)) {
          const dateStr = current.format('YYYY-MM-DD');
          const calendar = calendars.find(c => c.date === dateStr);

          if (!calendar || calendar.availableRooms < data.roomCount) {
            throw new Error(`${dateStr} 可用房间数不足`);
          }

          current.add(1, 'day');
        }

        // 扣减库存
        current = start.clone();
        while (current.isBefore(end)) {
          const dateStr = current.format('YYYY-MM-DD');
          const calendar = calendars.find(c => c.date === dateStr);

          if (calendar) {
            await this.hotelRoomCalendarService.hotelRoomCalendarEntity.update(
              { id: calendar.id },
              { availableRooms: calendar.availableRooms - data.roomCount }
            );
          }

          current.add(1, 'day');
        }
      }

      // 生成入住码
      data.checkInCode = this.generateCheckInCode();
    }
  }
}
