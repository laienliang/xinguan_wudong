@echo off
chcp 65001 >nul

REM 后端 API 状态查看脚本

echo 后端 API 状态
echo ====================
echo.

REM 检查端口占用
netstat -ano | find ":8001 " | find "LISTENING" >nul 2>&1
if errorlevel 1 (
    echo 状态: 未运行
) else (
    for /f "tokens=5" %%a in ('netstat -ano ^| find ":8001 " ^| find "LISTENING"') do (
        echo 状态: 运行中
        echo PID:  %%a
        echo 端口: 8001
        echo URL:  http://localhost:8001

        REM 健康检查
        curl -s http://localhost:8001/swagger-ui/index.html >nul 2>&1
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
