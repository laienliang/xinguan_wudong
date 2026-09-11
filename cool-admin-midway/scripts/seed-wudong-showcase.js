const mysql = require('mysql2/promise');

const dbConfig = {
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: '',
  database: 'cool',
};
const prefix = '[乌东展示]';
const image = number => `/upload/wudong/ctrip-${number}.jpg`;
const now = new Date().toISOString().slice(0, 19).replace('T', ' ');

async function add(db, table, data) {
  const keys = Object.keys(data);
  const [result] = await db.execute(
    `INSERT INTO \`${table}\` (${keys.map(key => `\`${key}\``).join(', ')}) VALUES (${keys.map(() => '?').join(', ')})`,
    keys.map(key => data[key])
  );
  return result.insertId;
}

async function run() {
  const db = await mysql.createConnection(dbConfig);
  const base = { createTime: now, updateTime: now, tenantId: null };
  await db.beginTransaction();
  try {
    await db.execute("DELETE FROM shop_goods WHERE title LIKE ?", [`${prefix}%`]);
    await db.execute("DELETE FROM hotel_house WHERE name LIKE ?", [`${prefix}%`]);
    await db.execute("DELETE FROM tour_scenic_spot WHERE name LIKE ?", [`${prefix}%`]);
    await db.execute("DELETE FROM tour_route WHERE title LIKE ?", [`${prefix}%`]);
    await db.execute("DELETE FROM community_post WHERE title LIKE ?", [`${prefix}%`]);
    await db.execute("DELETE FROM food_product WHERE name LIKE ?", [`${prefix}%`]);

    const categoryId = await add(db, 'shop_category', {
      ...base, parentId: 0, name: `${prefix}苗绣与银饰`, icon: null, sort: 20, status: 1,
    });
    await add(db, 'shop_goods', {
      ...base, categoryId, title: `${prefix}苗绣云纹手提包`, subtitle: '手工苗绣，日常可背的山野色彩', mainImage: image(2), price: 268, marketPrice: 328, stock: 36, sales: 18, craftIntro: '以苗族传统纹样为灵感，采用手工刺绣完成云纹与花草图案。', artisanId: null, detail: '每只手提包都保留手作的细微差别，适合通勤与旅行。', status: 1,
    });
    await add(db, 'shop_goods', {
      ...base, categoryId, title: `${prefix}苗银耳饰`, subtitle: '轻盈的苗族银饰纹样', mainImage: image(6), price: 198, marketPrice: 238, stock: 50, sales: 26, craftIntro: '以苗银錾刻纹理呈现山间花叶的细节。', artisanId: null, detail: '传统纹样与轻量化佩戴体验结合。', status: 1,
    });
    await add(db, 'shop_goods', {
      ...base, categoryId, title: `${prefix}蜡染方巾`, subtitle: '蓝靛染出的乌东山色', mainImage: image(7), price: 128, marketPrice: 158, stock: 80, sales: 42, craftIntro: '经过绘蜡、染色、去蜡等工序，保留蜡染独有裂纹。', artisanId: null, detail: '可作头巾、桌巾或旅行纪念。', status: 1,
    });

    await add(db, 'food_product', {
      ...base, categoryId: 1, name: `${prefix}山野蜂蜜`, subtitle: '来自苗岭山花的自然甜味', mainImage: image(10), price: 68, marketPrice: 78, stock: 120, sales: 34, origin: '贵州黔东南苗岭山区', shelfLife: '18个月', spec: '500克/瓶', detail: '清晨采收，保留山花蜜的清甜香气。', status: 1,
    });
    await add(db, 'food_product', {
      ...base, categoryId: 1, name: `${prefix}酸汤调味礼盒`, subtitle: '把苗家酸香带回家', mainImage: image(8), price: 88, marketPrice: 108, stock: 90, sales: 29, origin: '贵州台江', shelfLife: '12个月', spec: '三瓶装', detail: '适合酸汤鱼、酸汤牛肉和日常烹饪。', status: 1,
    });

    const houseId = await add(db, 'hotel_house', {
      ...base, name: `${prefix}吊脚楼山居民宿`, address: '乌东村半山观景台旁', longitude: 108.3231, latitude: 26.6712, styleTags: JSON.stringify(['吊脚楼', '山景', '安静']), facilityTags: JSON.stringify(['热水', '早餐', '观景露台']), mainImage: image(3), images: JSON.stringify([image(3), image(4), image(9)]), intro: '住进木构吊脚楼，推窗便是山谷与层层梯田。', score: 4.9, status: 1,
    });
    await add(db, 'hotel_room_type', {
      ...base, houseId, name: `${prefix}山谷观景大床房`, bedType: '大床', area: 32, maxPeople: 2, facilities: JSON.stringify(['独立卫浴', '山景阳台', '茶席']), price: 368, totalRooms: 5, mainImage: image(4), images: JSON.stringify([image(4), image(9)]), status: 1,
    });

    const scenicId = await add(db, 'tour_scenic_spot', {
      ...base, name: `${prefix}乌东梯田观景步道`, address: '乌东村村口至梯田观景台', longitude: 108.3215, latitude: 26.6726, openingHours: '全天开放', mainImage: image(1), images: JSON.stringify([image(1), image(11), image(12)]), intro: '沿着村寨石阶慢行，穿过吊脚楼与梯田，抵达眺望苗岭的高处。', status: 1,
    });
    await add(db, 'tour_ticket_type', {
      ...base, scenicSpotId: scenicId, name: `${prefix}梯田讲解体验`, price: 39, stock: 80, validityDays: 1, intro: '包含村寨步道讲解与苗寨文化介绍。', status: 1,
    });
    const routeId = await add(db, 'tour_route', {
      ...base, title: `${prefix}乌东苗寨两日慢游`, days: 2, price: 798, includeItems: JSON.stringify(['苗寨讲解', '长桌宴体验', '吊脚楼住宿']), departure: '凯里市区', destination: '乌东苗寨', accommodation: '吊脚楼山居民宿', catering: '一早一正，含苗家长桌宴', mainImage: image(12), images: JSON.stringify([image(12), image(1), image(3)]), intro: '以慢节奏走进乌东：看梯田、学蜡染、吃长桌宴、住进山风里。', notice: '建议穿舒适防滑鞋，雨天请备雨具。', status: 1,
    });
    await add(db, 'tour_route_itinerary', {
      ...base, routeId, dayNumber: 1, title: `${prefix}走进苗寨与长桌宴`, description: '村寨漫步、非遗手作体验、苗家长桌宴。', attractions: '吊脚楼群、乌东梯田', meals: '苗家长桌宴', accommodation: '吊脚楼山居民宿', transportation: '景区接驳',
    });
    await add(db, 'community_post', {
      ...base, userId: 1, title: `${prefix}清晨的乌东村，云雾刚刚散开`, content: '沿着石阶走到半山，吊脚楼屋檐还挂着晨雾。村里的阿婆说，乌东最适合慢下来，喝一碗热汤，再去看看梯田。', images: JSON.stringify([image(1), image(3), image(11)]), videoUrl: null, location: '贵州黔东南乌东苗寨', relatedType: 4, relatedId: scenicId, topicIds: null, likeCount: 128, commentCount: 16, favoriteCount: 37, viewCount: 860, status: 1,
    });
    await db.commit();
  } catch (error) {
    await db.rollback();
    throw error;
  } finally {
    await db.end();
  }
}

run().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
