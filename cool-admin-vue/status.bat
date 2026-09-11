@echo off
chcp 65001 >nul

REM 管理后台状态查看脚本

echo 管理后台状态
echo ====================
echo.

REM 检查端口占用
netstat -ano | find ":9000 " | find "LISTENING" >nul 2>&1
if errorlevel 1 (
    echo 状态: 未运行
) else (
    for /f "tokens=5" %%a in ('netstat -ano ^| find ":9000 " ^| find "LISTENING"') do (
        echo 状态: 运行中
        echo PID:  %%a
        echo 端口: 9000
        echo URL:  http://localhost:9000

        REM 健康检查
        curl -s http://localhost:9000 >nul 2>&1
        if errorlevel 1 (
            echo 健康: 无响应
        ) else (
            echo 健康: 正常
        )
        goto :end
    )
)
:end
echo.
pause
