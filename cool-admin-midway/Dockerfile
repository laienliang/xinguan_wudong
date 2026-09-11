
# 使用具体版本号，避免每次拉取
FROM node:18-alpine

WORKDIR /app

# 配置alpine国内镜像加速
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories \
    && apk add --no-cache tzdata curl

# 设置时区
ENV TZ="Asia/Shanghai"

# 配置npm国内镜像
RUN npm config set registry https://registry.npmmirror.com

# 复制依赖文件
COPY package*.json ./

# 安装依赖（使用 ci 更快更可靠）
RUN npm ci

# 复制源代码
COPY . .

# 构建项目
RUN npm run build

# 清理并重新安装依赖（保留 typescript，因为运行时需要）
RUN rm -rf node_modules && npm ci

EXPOSE 8001

HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
  CMD curl -f http://localhost:8001/ || exit 1

CMD ["npm", "run", "start"]