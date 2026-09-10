import * as mysql from 'mysql2/promise';

const marker = '[TEST_SEED_20260909]';

describe('造数后的管理端模块集成测试', () => {
  const listCases = [
    ['shop_goods', 'title'],
    ['food_restaurant', 'name'],
    ['hotel_house', 'name'],
    ['tour_scenic_spot', 'name'],
    ['community_post', 'title'],
    ['platform_notice', 'title'],
  ] as const;

  it.each(listCases)('%s 包含造数记录', async (table, field) => {
    const db = await mysql.createConnection({
      host: process.env.TEST_DB_HOST || '127.0.0.1',
      port: Number(process.env.TEST_DB_PORT || 3306),
      user: process.env.TEST_DB_USER || 'root',
      password: process.env.TEST_DB_PASSWORD || '',
      database: process.env.TEST_DB_NAME || 'cool_test',
    });
    try {
      const [rows] = await db.query(
        `SELECT COUNT(*) AS count FROM \`${table}\` WHERE \`${field}\` LIKE ?`,
        [`${marker}%`]
      );
      expect(Number((rows as any[])[0].count)).toBeGreaterThan(0);
    } finally {
      await db.end();
    }
  });

  it('cool 数据库包含六个新增模块的管理菜单和权限节点', async () => {
    const db = await mysql.createConnection({
      host: process.env.TEST_DB_HOST || '127.0.0.1',
      port: Number(process.env.TEST_DB_PORT || 3306),
      user: process.env.TEST_DB_USER || 'root',
      password: process.env.TEST_DB_PASSWORD || '',
      database: 'cool',
    });

    try {
      const [rows] = await db.query(
        `SELECT name, router, perms, type FROM base_sys_menu
         WHERE name IN ('衣-非遗商品', '食-餐饮美食', '住-住宿预订', '行-线路订票', '社区-照片分享', '平台管理')
            OR (type = 2 AND perms IS NOT NULL)`
      );
      const menus = rows as Array<{ name: string; router: string; perms: string; type: number }>;
      for (const name of ['衣-非遗商品', '食-餐饮美食', '住-住宿预订', '行-线路订票', '社区-照片分享', '平台管理']) {
        expect(menus.some(menu => menu.name === name)).toBe(true);
      }
      expect(menus.filter(menu => menu.type === 2 && menu.perms).length).toBeGreaterThanOrEqual(30);
    } finally {
      await db.end();
    }
  });
});
