import { Provide, Inject } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '@cool-midway/core';
import { FoodBookingOrderEntity } from '../entity/booking_order';
import { FoodTimeSlotService } from './time_slot';

/**
 * 餐位预订订单服务
 */
@Provide()
export class FoodBookingOrderService extends BaseService {
  @InjectEntityModel(FoodBookingOrderEntity)
  foodBookingOrderEntity: Repository<FoodBookingOrderEntity>;

  @Inject()
  foodTimeSlotService: FoodTimeSlotService;

  /**
   * 修改前处理 - 检查餐位容量
   */
  async modifyBefore(data: any, type: 'delete' | 'update' | 'add') {
    if (type === 'add') {
      // 检查时段是否有效
      const timeSlot = await this.foodTimeSlotService.foodTimeSlotEntity.findOne({
        where: { id: data.timeSlotId, status: 1 },
      });

      if (!timeSlot) {
        throw new Error('该时段不可预订');
      }

      // 检查预订日期的容量
      const bookedCount = await this.foodBookingOrderEntity
        .createQueryBuilder('booking')
        .where('booking.restaurantId = :restaurantId', { restaurantId: data.restaurantId })
        .andWhere('booking.bookingDate = :bookingDate', { bookingDate: data.bookingDate })
        .andWhere('booking.timeSlotId = :timeSlotId', { timeSlotId: data.timeSlotId })
        .andWhere('booking.status IN (:...statuses)', { statuses: [1, 2] }) // 待确认和已确认
        .getCount();

      const totalPeople = await this.foodBookingOrderEntity
        .createQueryBuilder('booking')
        .select('SUM(booking.peopleCount)', 'total')
        .where('booking.restaurantId = :restaurantId', { restaurantId: data.restaurantId })
        .andWhere('booking.bookingDate = :bookingDate', { bookingDate: data.bookingDate })
        .andWhere('booking.timeSlotId = :timeSlotId', { timeSlotId: data.timeSlotId })
        .andWhere('booking.status IN (:...statuses)', { statuses: [1, 2] })
        .getRawOne();

      const currentTotal = parseInt(totalPeople?.total || '0');

      if (currentTotal + data.peopleCount > timeSlot.maxPeople) {
        throw new Error('该时段餐位已满，请选择其他时段');
      }
    }
  }

  /**
   * 检查餐位可用性
   */
  async checkAvailability(restaurantId: string, bookingDate: string, timeSlotId: number) {
    const timeSlot = await this.foodTimeSlotService.foodTimeSlotEntity.findOne({
      where: { id: timeSlotId, restaurantId, status: 1 },
    });

    if (!timeSlot) {
      return { available: false, message: '该时段不可预订' };
    }

    const totalPeople = await this.foodBookingOrderEntity
      .createQueryBuilder('booking')
      .select('SUM(booking.peopleCount)', 'total')
      .where('booking.restaurantId = :restaurantId', { restaurantId })
      .andWhere('booking.bookingDate = :bookingDate', { bookingDate })
      .andWhere('booking.timeSlotId = :timeSlotId', { timeSlotId })
      .andWhere('booking.status IN (:...statuses)', { statuses: [1, 2] })
      .getRawOne();

    const currentTotal = parseInt(totalPeople?.total || '0');
    const remaining = timeSlot.maxPeople - currentTotal;

    return {
      available: remaining > 0,
      maxPeople: timeSlot.maxPeople,
      booked: currentTotal,
      remaining,
    };
  }
}
