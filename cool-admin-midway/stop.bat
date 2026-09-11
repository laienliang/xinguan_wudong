@echo off
chcp 65001 >nul

REM 后端 API 停止脚本

echo 停止后端 API...
echo.

REM 查找占用 8001 端口的进程
for /f "tokens=5" %%a in ('netstat -ano ^| find ":8001 " ^| find "LISTENING"') do (
    echo 停止进程 (PID: %%a^)...
    taskkill /PID %%a /F >nul 2>&1
)

echo √ 后端 API 已停止
pause
