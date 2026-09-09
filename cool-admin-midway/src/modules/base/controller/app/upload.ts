import { Provide, Post, Inject, Files } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { CoolController, BaseController, CoolUrlTag } from '@cool-midway/core';
import * as fs from 'fs';
import * as path from 'path';

@CoolUrlTag()
@Provide()
@CoolController('/app/upload')
export class BaseAppUploadController extends BaseController {
  @Inject()
  ctx: Context;

  /**
   * 上传图片
   */
  @Post('/image', { summary: '上传图片' })
  async uploadImage(@Files() files) {
    const file = files[0];

    // 校验文件类型
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.mimeType)) {
      return { code: 3001, message: '仅支持 jpg/png/gif/webp 格式图片' };
    }

    // 校验文件大小（5MB）
    if (file.data.length > 5 * 1024 * 1024) {
      return { code: 3002, message: '图片大小不能超过 5MB' };
    }

    // 保存文件
    const uploadDir = path.join(process.cwd(), 'uploads', 'images');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const filename = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}${path.extname(file.filename)}`;
    const filepath = path.join(uploadDir, filename);
    fs.writeFileSync(filepath, file.data);

    // 返回访问路径
    const url = `/uploads/images/${filename}`;
    return { code: 0, message: 'success', data: { url } };
  }

  /**
   * 上传视频
   */
  @Post('/video', { summary: '上传视频' })
  async uploadVideo(@Files() files) {
    const file = files[0];

    // 校验文件类型
    const allowedTypes = ['video/mp4', 'video/quicktime', 'video/x-msvideo'];
    if (!allowedTypes.includes(file.mimeType)) {
      return { code: 3003, message: '仅支持 mp4/mov/avi 格式视频' };
    }

    // 校验文件大小（50MB）
    if (file.data.length > 50 * 1024 * 1024) {
      return { code: 3004, message: '视频大小不能超过 50MB' };
    }

    // 保存文件
    const uploadDir = path.join(process.cwd(), 'uploads', 'videos');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const filename = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}${path.extname(file.filename)}`;
    const filepath = path.join(uploadDir, filename);
    fs.writeFileSync(filepath, file.data);

    const url = `/uploads/videos/${filename}`;
    return { code: 0, message: 'success', data: { url } };
  }
}
