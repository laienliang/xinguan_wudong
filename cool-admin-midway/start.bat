@echo off
chcp 65001 >nul

REM 后端 API 启动脚本

echo 启动后端 API (Midway.js)...
echo.

cd /d "%~dp0"

REM 检查依赖
if not exist node_modules (
    echo 首次运行，正在安装依赖...
    call npm install
    echo.
)

REM 检查端口占用
netstat -ano | find ":8001 " | find "LISTENING" >nul 2>&1
if not errorlevel 1 (
    echo 错误: 端口 8001 已被占用
    echo 请先停止占用该端口的服务
    pause
    exit /b 1
)

REM 启动开发服务器
echo 启动服务...
npm run dev
