@echo off
chcp 65001 >nul

REM 游客PC端停止脚本

echo 停止游客PC端...
echo.

REM 查找占用 9100 端口的进程
for /f "tokens=5" %%a in ('netstat -ano ^| find ":9100 " ^| find "LISTENING"') do (
    echo 停止进程 (PID: %%a^)...
    taskkill /PID %%a /F >nul 2>&1
)

echo √ 游客PC端已停止
pause
