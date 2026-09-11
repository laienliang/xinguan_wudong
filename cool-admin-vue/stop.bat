@echo off
chcp 65001 >nul

REM 管理后台停止脚本

echo 停止管理后台...
echo.

REM 查找占用 9000 端口的进程
for /f "tokens=5" %%a in ('netstat -ano ^| find ":9000 " ^| find "LISTENING"') do (
    echo 停止进程 (PID: %%a^)...
    taskkill /PID %%a /F >nul 2>&1
)

echo √ 管理后台已停止
pause
