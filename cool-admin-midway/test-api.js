const http = require('http');

const BASE_URL = 'http://localhost:8001';
let authToken = '';

// 测试用例配置
const testCases = [
  // 商品模块
  { name: '商品-分类列表', path: '/admin/shop/category/list', method: 'POST', body: { page: 1, size: 10 } },
  { name: '商品-商品列表', path: '/admin/shop/goods/list', method: 'POST', body: { page: 1, size: 10 } },
  { name: '商品-订单列表', path: '/admin/shop/order/list', method: 'POST', body: { page: 1, size: 10 } },

  // 餐饮模块
  { name: '餐饮-餐厅列表', path: '/admin/food/restaurant/list', method: 'POST', body: { page: 1, size: 10 } },
  { name: '餐饮-菜品列表', path: '/admin/food/dish/list', method: 'POST', body: { page: 1, size: 10 } },
  { name: '餐饮-订座列表', path: '/admin/food/booking/list', method: 'POST', body: { page: 1, size: 10 } },

  // 住宿模块
  { name: '住宿-民宿列表', path: '/admin/hotel/hotel/list', method: 'POST', body: { page: 1, size: 10 } },
  { name: '住宿-房型列表', path: '/admin/hotel/roomType/list', method: 'POST', body: { page: 1, size: 10 } },
  { name: '住宿-订单列表', path: '/admin/hotel/order/list', method: 'POST', body: { page: 1, size: 10 } },

  // 门票模块
  { name: '门票-景区列表', path: '/admin/tour/scenic/list', method: 'POST', body: { page: 1, size: 10 } },
  { name: '门票-门票列表', path: '/admin/tour/ticket/list', method: 'POST', body: { page: 1, size: 10 } },
  { name: '门票-订单列表', path: '/admin/tour/ticketOrder/list', method: 'POST', body: { page: 1, size: 10 } },

  // 线路模块
  { name: '线路-线路列表', path: '/admin/tour/route/list', method: 'POST', body: { page: 1, size: 10 } },
  { name: '线路-订单列表', path: '/admin/tour/routeOrder/list', method: 'POST', body: { page: 1, size: 10 } },

  // 社区模块
  { name: '社区-游记列表', path: '/admin/community/post/list', method: 'POST', body: { page: 1, size: 10 } },
  { name: '社区-评论列表', path: '/admin/community/comment/list', method: 'POST', body: { page: 1, size: 10 } },
  { name: '社区-话题列表', path: '/admin/community/topic/list', method: 'POST', body: { page: 1, size: 10 } },

  // 管理模块
  { name: '管理-公告列表', path: '/admin/admin/notice/list', method: 'POST', body: { page: 1, size: 10 } },
];

function request(path, method, body, useAuth = false) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(body);
    const headers = {
      'Content-Type': 'application/json',
      'Content-Length': data.length,
    };

    if (useAuth && authToken) {
      headers['Authorization'] = authToken;
    }

    const options = {
      hostname: 'localhost',
      port: 8001,
      path: path,
      method: method,
      headers: headers,
      timeout: 5000,
    };

    const req = http.request(options, (res) => {
      let responseData = '';
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          data: responseData,
          headers: res.headers,
        });
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.on('timeout', () => {
      req.destroy();
      reject(new Error('请求超时'));
    });

    req.write(data);
    req.end();
  });
}

async function login() {
  console.log('尝试登录管理后台...\n');

  try {
    // 尝试使用默认管理员账号登录
    const result = await request('/admin/base/open/login', 'POST', {
      username: 'admin',
      password: '123456',
      captchaId: 'test',
      verifyCode: '1234'
    });

    if (result.statusCode === 200) {
      const jsonData = JSON.parse(result.data);
      if (jsonData.code === 1000 && jsonData.data && jsonData.data.token) {
        authToken = jsonData.data.token;
        console.log('✅ 登录成功\n');
        return true;
      }
    }

    console.log('⚠️  登录失败，将在无认证状态下测试接口\n');
    return false;
  } catch (error) {
    console.log(`⚠️  登录出错: ${error.message}，将在无认证状态下测试接口\n`);
    return false;
  }
}

async function runTests() {
  console.log('\n========== API 接口测试开始 ==========\n');

  // 尝试登录
  const isLoggedIn = await login();

  let successCount = 0;
  let failCount = 0;
  let authFailCount = 0;
  const results = [];

  for (const testCase of testCases) {
    try {
      const result = await request(testCase.path, testCase.method, testCase.body, isLoggedIn);

      if (result.statusCode === 200) {
        const jsonData = JSON.parse(result.data);
        if (jsonData.code === 1000 || jsonData.code === 200) {
          console.log(`✅ ${testCase.name} - 成功`);
          successCount++;
          results.push({ name: testCase.name, status: '成功', code: jsonData.code });
        } else {
          console.log(`⚠️  ${testCase.name} - 返回异常 (code: ${jsonData.code})`);
          failCount++;
          results.push({ name: testCase.name, status: '返回异常', code: jsonData.code, message: jsonData.message });
        }
      } else if (result.statusCode === 401) {
        console.log(`🔒 ${testCase.name} - 需要认证 (401)`);
        authFailCount++;
        results.push({ name: testCase.name, status: '需要认证' });
      } else {
        console.log(`❌ ${testCase.name} - HTTP ${result.statusCode}`);
        failCount++;
        results.push({ name: testCase.name, status: `HTTP ${result.statusCode}` });
      }
    } catch (error) {
      console.log(`❌ ${testCase.name} - 错误: ${error.message}`);
      failCount++;
      results.push({ name: testCase.name, status: '错误', error: error.message });
    }
  }

  console.log('\n========== 测试结果汇总 ==========\n');
  console.log(`总测试数: ${testCases.length}`);
  console.log(`成功: ${successCount}`);
  console.log(`需要认证: ${authFailCount}`);
  console.log(`失败: ${failCount}`);
  console.log(`成功率: ${((successCount / testCases.length) * 100).toFixed(2)}%`);

  if (authFailCount > 0) {
    console.log('\n说明：这些接口需要管理员登录后才能访问，属于正常的权限保护。');
  }

  if (failCount > 0) {
    console.log('\n失败的测试用例（排除认证问题）：');
    results.filter(r => r.status !== '成功' && r.status !== '需要认证').forEach(r => {
      console.log(`  - ${r.name}: ${r.status}${r.message ? ' - ' + r.message : ''}${r.error ? ' - ' + r.error : ''}`);
    });
  }

  console.log('\n========== API 接口测试结束 ==========\n');
}

runTests().catch(console.error);
