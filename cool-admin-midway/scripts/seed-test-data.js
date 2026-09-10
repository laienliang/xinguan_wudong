const mysql = require('mysql2/promise');

const marker = '[TEST_SEED_20260909]';
const connectionOptions = {
  host: process.env.TEST_DB_HOST || '127.0.0.1',
  port: Number(process.env.TEST_DB_PORT || 3306),
  user: process.env.TEST_DB_USER || 'root',
  password: process.env.TEST_DB_PASSWORD || '',
};

function mysqlDate(date = new Date()) {
  const pad = value => String(value).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

async function insert(db, table, data) {
  const fields = Object.keys(data);
  const values = fields.map(field => data[field]);
  const placeholders = fields.map(() => '?').join(', ');
  const [result] = await db.execute(
    `INSERT INTO \`${table}\` (${fields.map(field => `\`${field}\``).join(', ')}) VALUES (${placeholders})`,
    values
  );
  return result.insertId;
}

async function seedDatabase(database) {
  const db = await mysql.createConnection({ ...connectionOptions, database });
  const now = mysqlDate();
  const date = now.slice(0, 10);
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowDate = mysqlDate(tomorrow).slice(0, 10);

  const markerColumns = {
    shop_category: 'name',
    shop_goods: 'title',
    shop_goods_image: 'imageUrl',
    shop_goods_sku: 'skuName',
    food_restaurant: 'name',
    food_dish: 'name',
    food_product: 'name',
    food_time_slot: 'name',
    hotel_house: 'name',
    hotel_room_type: 'name',
    tour_scenic_spot: 'name',
    tour_ticket_type: 'name',
    tour_route: 'title',
    tour_route_itinerary: 'title',
    community_topic: 'name',
    community_post: 'title',
    community_comment: 'content',
    community_report: 'reason',
    platform_notice: 'title',
    platform_banner: 'title',
    merchant_user: 'username',
    merchant_application: 'shopName',
  };

  await db.beginTransaction();
  try {
    // 只清理本脚本生成的数据，保留用户已有数据。
    for (const [table, field] of Object.entries(markerColumns)) {
      await db.execute(`DELETE FROM \`${table}\` WHERE \`${field}\` LIKE ?`, [`${marker}%`]);
    }

    const common = { createTime: now, updateTime: now, tenantId: null };
    const categoryId = await insert(db, 'shop_category', {
      ...common,
      parentId: 0,
      name: `${marker}非遗商品分类`,
      icon: null,
      sort: 1,
      status: 1,
    });
    const goodsId = await insert(db, 'shop_goods', {
      ...common,
      categoryId,
      title: `${marker}蜀绣挂饰`,
      subtitle: '测试商品',
      mainImage: '/uploads/test-seed-goods.jpg',
      price: 99.9,
      marketPrice: 129.9,
      stock: 100,
      sales: 8,
      craftIntro: '传统工艺测试数据',
      artisanId: null,
      detail: '用于管理端接口测试。',
      status: 1,
    });
    await insert(db, 'shop_goods_image', {
      ...common,
      goodsId,
      imageUrl: `${marker}/goods-image.jpg`,
      sort: 1,
    });
    const skuId = await insert(db, 'shop_goods_sku', {
      ...common,
      goodsId,
      skuName: `${marker}标准规格`,
      price: 99.9,
      stock: 50,
      image: '/uploads/test-seed-goods.jpg',
    });

    const restaurantId = await insert(db, 'food_restaurant', {
      ...common,
      name: `${marker}山野餐厅`,
      address: '测试地址',
      longitude: 104.0668,
      latitude: 30.5728,
      businessHours: '10:00-22:00',
      capacity: 80,
      mainImage: '/uploads/test-seed-restaurant.jpg',
      images: null,
      intro: '餐饮模块测试餐厅',
      avgPrice: 68,
      score: 4.8,
      status: 1,
    });
    await insert(db, 'food_dish', {
      ...common,
      restaurantId,
      name: `${marker}招牌菜`,
      price: 38,
      mainImage: '/uploads/test-seed-dish.jpg',
      intro: '测试菜品',
      isSignature: 1,
      status: 1,
    });
    await insert(db, 'food_product', {
      ...common,
      categoryId: 1,
      name: `${marker}生态蜂蜜`,
      subtitle: '测试农产品',
      mainImage: '/uploads/test-seed-product.jpg',
      price: 58,
      marketPrice: 68,
      stock: 200,
      sales: 12,
      origin: '测试产地',
      shelfLife: '12个月',
      spec: '500g',
      detail: '用于农产品管理测试。',
      status: 1,
    });
    const timeSlotId = await insert(db, 'food_time_slot', {
      ...common,
      restaurantId,
      name: `${marker}午餐时段`,
      startTime: '11:00:00',
      endTime: '13:30:00',
      maxPeople: 30,
      status: 1,
    });

    const houseId = await insert(db, 'hotel_house', {
      ...common,
      name: `${marker}山居民宿`,
      address: '测试景区旁',
      longitude: 104.0668,
      latitude: 30.5728,
      styleTags: '山景,安静',
      facilityTags: '热水,WiFi',
      mainImage: '/uploads/test-seed-house.jpg',
      images: null,
      intro: '住宿模块测试民宿',
      score: 4.7,
      status: 1,
    });
    const roomTypeId = await insert(db, 'hotel_room_type', {
      ...common,
      houseId,
      name: `${marker}景观大床房`,
      bedType: '大床',
      area: 35,
      maxPeople: 2,
      facilities: '独立卫浴,空调',
      price: 268,
      totalRooms: 6,
      mainImage: '/uploads/test-seed-room.jpg',
      images: null,
      status: 1,
    });
    await insert(db, 'hotel_room_calendar', {
      ...common,
      roomTypeId,
      date: tomorrowDate,
      availableRooms: 5,
      price: 268,
      status: 1,
    });

    const scenicSpotId = await insert(db, 'tour_scenic_spot', {
      ...common,
      name: `${marker}云顶景区`,
      address: '测试景区地址',
      longitude: 104.0668,
      latitude: 30.5728,
      openingHours: '08:00-18:00',
      mainImage: '/uploads/test-seed-scenic.jpg',
      images: null,
      intro: '线路模块测试景区',
      status: 1,
    });
    const ticketTypeId = await insert(db, 'tour_ticket_type', {
      ...common,
      scenicSpotId,
      name: `${marker}成人票`,
      price: 80,
      stock: 1000,
      validityDays: 1,
      intro: '测试门票',
      status: 1,
    });
    const routeId = await insert(db, 'tour_route', {
      ...common,
      title: `${marker}两日文化之旅`,
      days: 2,
      price: 699,
      includeItems: '门票,导游',
      departure: '成都',
      destination: '测试景区',
      accommodation: '测试民宿',
      catering: '含早餐',
      mainImage: '/uploads/test-seed-route.jpg',
      images: null,
      intro: '测试线路',
      notice: '请提前预约',
      status: 1,
    });
    await insert(db, 'tour_route_itinerary', {
      ...common,
      routeId,
      dayNumber: 1,
      title: `${marker}第一天行程`,
      description: '景区游览',
      attractions: '云顶景区',
      meals: '午餐',
      accommodation: '山居民宿',
      transportation: '大巴',
    });

    const topicId = await insert(db, 'community_topic', {
      ...common,
      name: `${marker}非遗旅行`,
      intro: '测试社区话题',
      coverImage: '/uploads/test-seed-topic.jpg',
      followCount: 3,
      postCount: 1,
      isHot: 1,
      status: 1,
    });
    const postId = await insert(db, 'community_post', {
      ...common,
      userId: 1,
      title: `${marker}我的非遗之旅`,
      content: '这是一条用于接口测试的游记。',
      images: null,
      videoUrl: null,
      location: '成都',
      relatedType: 1,
      relatedId: scenicSpotId,
      topicIds: JSON.stringify([topicId]),
      likeCount: 2,
      commentCount: 1,
      favoriteCount: 1,
      viewCount: 10,
      status: 1,
    });
    await insert(db, 'community_comment', {
      ...common,
      postId,
      userId: 1,
      parentId: 0,
      replyToUserId: null,
      content: `${marker}这条评论很有帮助`,
      likeCount: 1,
      status: 1,
    });
    await insert(db, 'community_report', {
      ...common,
      userId: 1,
      targetId: postId,
      targetType: 1,
      reason: `${marker}测试举报`,
      status: 1,
      handleResult: null,
      handleTime: null,
    });

    await insert(db, 'platform_notice', {
      ...common,
      title: `${marker}平台公告`,
      content: '测试公告内容',
      type: 1,
      status: 1,
      publishTime: now,
    });
    await insert(db, 'platform_banner', {
      ...common,
      title: `${marker}平台轮播`,
      imageUrl: '/uploads/test-seed-banner.jpg',
      linkUrl: '/admin/statistics',
      sort: 1,
      status: 1,
    });
    await insert(db, 'merchant_user', {
      ...common,
      userId: 1,
      username: `seed_merchant_20260909_${database}`,
      password: 'e10adc3949ba59abbe56e057f20f883e',
      shopName: `${marker}测试商铺`,
      moduleType: 1,
      contactName: '测试联系人',
      contactPhone: '13800138000',
      status: 1,
    });
    await insert(db, 'merchant_application', {
      ...common,
      userId: 1,
      shopName: `${marker}待审核商铺`,
      moduleType: 1,
      idCard: '110101199001011234',
      idCardFront: '/uploads/test-seed-id-front.jpg',
      idCardBack: '/uploads/test-seed-id-back.jpg',
      businessLicense: '/uploads/test-seed-license.jpg',
      contactName: '测试申请人',
      contactPhone: '13900139000',
      status: 1,
      rejectReason: null,
      reviewerId: null,
      reviewTime: null,
    });

    await db.commit();
    console.log(`${database}: 测试数据已写入（商品 ${goodsId}、SKU ${skuId}、餐厅 ${restaurantId}、时段 ${timeSlotId}、房型 ${roomTypeId}、门票 ${ticketTypeId}、游记 ${postId}）。`);
  } catch (error) {
    await db.rollback();
    throw error;
  } finally {
    await db.end();
  }
}

const databases = process.argv.slice(2).length ? process.argv.slice(2) : ['cool', 'cool_test'];
Promise.all(databases.map(seedDatabase)).catch(error => {
  console.error(error);
  process.exitCode = 1;
});
