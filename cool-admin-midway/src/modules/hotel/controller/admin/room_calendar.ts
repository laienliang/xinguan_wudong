import { Provide, Inject, Post, Body, Get, Query } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { HotelRoomCalendarEntity } from '../../entity/room_calendar';
import { HotelRoomCalendarService } from '../../service/room_calendar';

/**
 * Admin端房态日历控制器
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: HotelRoomCalendarEntity,
  service: HotelRoomCalendarService,
  listQueryOp: {
    fieldEq: ['roomTypeId', 'status'],
    addOrderBy: {
      date: 'ASC',
    },
  },
  pageQueryOp: {
    fieldEq: ['roomTypeId', 'status'],
    addOrderBy: {
      date: 'ASC',
    },
  },
})
export class AdminHotelRoomCalendarController extends BaseController {
  @Inject()
  hotelRoomCalendarService: HotelRoomCalendarService;

  /**
   * 批量设置房态
   */
  @Post('/batchSet', { summary: '批量设置房态' })
  async batchSet(@Body() body: any) {
    const { roomTypeId, startDate, endDate, price, availableRooms, status } = body;
    return this.ok(
      await this.hotelRoomCalendarService.batchSet(
        roomTypeId,
        startDate,
        endDate,
        price,
        availableRooms,
        status
      )
    );
  }

  /**
   * 查询房态
   */
  @Get('/queryAvailability', { summary: '查询房态' })
  async queryAvailability(@Query() query: any) {
    const { roomTypeId, startDate, endDate } = query;
    return this.ok(
      await this.hotelRoomCalendarService.queryAvailability(
        roomTypeId,
        startDate,
        endDate
      )
    );
  }
}
