import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { TourETicketEntity } from '../entity/e-ticket';
import { BaseService } from '@cool-midway/core';
import * as QRCode from 'qrcode';

/**
 * 电子票服务
 */
@Provide()
export class TourETicketService extends BaseService {
  @InjectEntityModel(TourETicketEntity)
  tourETicketEntity: Repository<TourETicketEntity>;

  /**
   * 生成唯一票号
   */
  generateTicketNo(): string {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, '0');
    return `TK${timestamp}${random}`;
  }

  /**
   * 生成二维码（返回base64图片）
   */
  async generateQRCode(ticketNo: string): Promise<string> {
    try {
      const qrCodeDataURL = await QRCode.toDataURL(ticketNo, {
        errorCorrectionLevel: 'H',
        type: 'image/png',
        width: 300,
        margin: 1,
      });
      return qrCodeDataURL;
    } catch (error) {
      throw new Error('二维码生成失败');
    }
  }

  /**
   * 生成电子票
   */
  async generate(orderId: string, validDate: string) {
    const ticketNo = this.generateTicketNo();
    const qrCode = await this.generateQRCode(ticketNo);

    const ticket = await this.tourETicketEntity.save({
      orderId,
      ticketNo,
      qrCode,
      validDate,
      status: 1, // 未使用
    });

    return ticket;
  }

  /**
   * 核销电子票
   */
  async verify(ticketNo: string) {
    const ticket = await this.tourETicketEntity.findOne({
      where: { ticketNo },
    });

    if (!ticket) {
      return { success: false, message: '电子票不存在' };
    }

    if (ticket.status === 2) {
      return { success: false, message: '电子票已使用' };
    }

    if (ticket.status === 3) {
      return { success: false, message: '电子票已过期' };
    }

    // 检查是否在有效期内
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const validDate = new Date(ticket.validDate);
    validDate.setHours(0, 0, 0, 0);

    if (today > validDate) {
      // 更新为已过期
      await this.tourETicketEntity.update(
        { id: ticket.id },
        { status: 3 }
      );
      return { success: false, message: '电子票已过期' };
    }

    // 核销成功，更新状态
    await this.tourETicketEntity.update(
      { id: ticket.id },
      { status: 2, usedTime: new Date() }
    );

    return { success: true, message: '核销成功', ticket };
  }

  /**
   * 查询电子票信息
   */
  async getByTicketNo(ticketNo: string) {
    const ticket = await this.tourETicketEntity.findOne({
      where: { ticketNo },
    });
    return ticket;
  }
}
