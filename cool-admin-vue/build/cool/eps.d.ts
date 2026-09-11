declare namespace Eps {
	interface AdminUserEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 用户名（唯一）
		 */
		username?: string;

		/**
		 * 密码（bcrypt加密）
		 */
		password?: string;

		/**
		 * 真实姓名
		 */
		realName?: string;

		/**
		 * 角色ID
		 */
		roleId?: number;

		/**
		 * 状态：0禁用 1正常
		 */
		status?: number;

		/**
		 * 最后登录时间
		 */
		lastLoginTime?: Date;

		/**
		 * 最后登录IP
		 */
		lastLoginIp?: string;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface MerchantApplicationEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 用户ID
		 */
		userId?: BigInt;

		/**
		 * 店铺名称
		 */
		shopName?: string;

		/**
		 * 申请模块
		 */
		moduleType?: number;

		/**
		 * 身份证号
		 */
		idCard?: string;

		/**
		 * 身份证正面
		 */
		idCardFront?: string;

		/**
		 * 身份证反面
		 */
		idCardBack?: string;

		/**
		 * 营业执照
		 */
		businessLicense?: string;

		/**
		 * 联系人
		 */
		contactName?: string;

		/**
		 * 联系电话
		 */
		contactPhone?: string;

		/**
		 * 状态：1待审核 2已通过 3已驳回
		 */
		status?: number;

		/**
		 * 驳回原因
		 */
		rejectReason?: string;

		/**
		 * 审核人ID
		 */
		reviewerId?: BigInt;

		/**
		 * 审核时间
		 */
		reviewTime?: Date;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface MerchantUserEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 关联用户ID
		 */
		userId?: BigInt;

		/**
		 * 后台用户ID
		 */
		adminUserId?: BigInt;

		/**
		 * 商家用户名（唯一）
		 */
		username?: string;

		/**
		 * 密码
		 */
		password?: string;

		/**
		 * 店铺名称
		 */
		shopName?: string;

		/**
		 * 所属模块：1衣 2食 3住 4行
		 */
		moduleType?: number;

		/**
		 * 联系人
		 */
		contactName?: string;

		/**
		 * 联系电话
		 */
		contactPhone?: string;

		/**
		 * 状态：0禁用 1正常
		 */
		status?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface PlatformBannerEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 标题
		 */
		title?: string;

		/**
		 * 图片URL
		 */
		imageUrl?: string;

		/**
		 * 跳转链接
		 */
		linkUrl?: string;

		/**
		 * 排序
		 */
		sort?: number;

		/**
		 * 状态：0下架 1上架
		 */
		status?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface PlatformNoticeEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 标题
		 */
		title?: string;

		/**
		 * 内容
		 */
		content?: string;

		/**
		 * 类型：1系统公告 2活动公告
		 */
		type?: number;

		/**
		 * 状态：0下架 1发布
		 */
		status?: number;

		/**
		 * 发布时间
		 */
		publishTime?: Date;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysDepartmentEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 部门名称
		 */
		name?: string;

		/**
		 * 创建者ID
		 */
		userId?: number;

		/**
		 * 上级部门ID
		 */
		parentId?: number;

		/**
		 * 排序
		 */
		orderNum?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysLogEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 用户ID
		 */
		userId?: number;

		/**
		 * 行为
		 */
		action?: string;

		/**
		 * ip
		 */
		ip?: string;

		/**
		 * 参数
		 */
		params?: any;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 姓名
		 */
		name?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysMenuEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 父菜单ID
		 */
		parentId?: number;

		/**
		 * 菜单名称
		 */
		name?: string;

		/**
		 * 菜单地址
		 */
		router?: string;

		/**
		 * 权限标识
		 */
		perms?: string;

		/**
		 * 类型 0-目录 1-菜单 2-按钮
		 */
		type?: number;

		/**
		 * 图标
		 */
		icon?: string;

		/**
		 * 排序
		 */
		orderNum?: number;

		/**
		 * 视图地址
		 */
		viewPath?: string;

		/**
		 * 路由缓存
		 */
		keepAlive?: boolean;

		/**
		 * 是否显示
		 */
		isShow?: boolean;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysParamEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 键
		 */
		keyName?: string;

		/**
		 * 名称
		 */
		name?: string;

		/**
		 * 数据
		 */
		data?: string;

		/**
		 * 数据类型 0-字符串 1-富文本 2-文件
		 */
		dataType?: number;

		/**
		 * 备注
		 */
		remark?: string;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysRoleEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 用户ID
		 */
		userId?: string;

		/**
		 * 名称
		 */
		name?: string;

		/**
		 * 角色标签
		 */
		label?: string;

		/**
		 * 备注
		 */
		remark?: string;

		/**
		 * 数据权限是否关联上下级
		 */
		relevance?: boolean;

		/**
		 * 菜单权限
		 */
		menuIdList?: any;

		/**
		 * 部门权限
		 */
		departmentIdList?: any;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysUserEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 部门ID
		 */
		departmentId?: number;

		/**
		 * 创建者ID
		 */
		userId?: number;

		/**
		 * 姓名
		 */
		name?: string;

		/**
		 * 用户名
		 */
		username?: string;

		/**
		 * 密码
		 */
		password?: string;

		/**
		 * 密码版本, 作用是改完密码，让原来的token失效
		 */
		passwordV?: number;

		/**
		 * 昵称
		 */
		nickName?: string;

		/**
		 * 头像
		 */
		headImg?: string;

		/**
		 * 手机
		 */
		phone?: string;

		/**
		 * 邮箱
		 */
		email?: string;

		/**
		 * 备注
		 */
		remark?: string;

		/**
		 * 状态 0-禁用 1-启用
		 */
		status?: number;

		/**
		 * socketId
		 */
		socketId?: string;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface CommunityCommentEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 游记ID
		 */
		postId?: BigInt;

		/**
		 * 用户ID
		 */
		userId?: BigInt;

		/**
		 * 父评论ID（0为一级评论）
		 */
		parentId?: BigInt;

		/**
		 * 回复的用户ID
		 */
		replyToUserId?: BigInt;

		/**
		 * 评论内容
		 */
		content?: string;

		/**
		 * 点赞数
		 */
		likeCount?: number;

		/**
		 * 状态：0已删除 1正常
		 */
		status?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface CommunityPostEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 用户ID
		 */
		userId?: BigInt;

		/**
		 * 标题
		 */
		title?: string;

		/**
		 * 文字内容
		 */
		content?: string;

		/**
		 * 图片列表（JSON数组，最多9张）
		 */
		images?: string;

		/**
		 * 视频URL
		 */
		videoUrl?: string;

		/**
		 * 地点
		 */
		location?: string;

		/**
		 * 关联类型：1商品 2餐厅 3民宿 4景区
		 */
		relatedType?: number;

		/**
		 * 关联ID
		 */
		relatedId?: BigInt;

		/**
		 * 话题ID（JSON数组）
		 */
		topicIds?: string;

		/**
		 * 点赞数
		 */
		likeCount?: number;

		/**
		 * 评论数
		 */
		commentCount?: number;

		/**
		 * 收藏数
		 */
		favoriteCount?: number;

		/**
		 * 浏览数
		 */
		viewCount?: number;

		/**
		 * 状态：0审核中 1正常 2已下架
		 */
		status?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface CommunityReportEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 举报用户ID
		 */
		userId?: BigInt;

		/**
		 * 目标ID
		 */
		targetId?: BigInt;

		/**
		 * 类型：1游记 2评论
		 */
		targetType?: number;

		/**
		 * 举报原因
		 */
		reason?: string;

		/**
		 * 状态：1待处理 2已处理 3已驳回
		 */
		status?: number;

		/**
		 * 处理结果
		 */
		handleResult?: string;

		/**
		 * 处理时间
		 */
		handleTime?: Date;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface CommunityTopicEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 话题名称
		 */
		name?: string;

		/**
		 * 简介
		 */
		intro?: string;

		/**
		 * 封面图
		 */
		coverImage?: string;

		/**
		 * 关注数
		 */
		followCount?: number;

		/**
		 * 游记数
		 */
		postCount?: number;

		/**
		 * 是否热门：0否 1是
		 */
		isHot?: number;

		/**
		 * 状态：0禁用 1正常
		 */
		status?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface DemoGoodsEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 标题
		 */
		title?: string;

		/**
		 * 价格
		 */
		price?: number;

		/**
		 * 描述
		 */
		description?: string;

		/**
		 * 主图
		 */
		mainImage?: string;

		/**
		 * 分类
		 */
		type?: number;

		/**
		 * 状态
		 */
		status?: number;

		/**
		 * 示例图
		 */
		exampleImages?: any;

		/**
		 * 库存
		 */
		stock?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 昵称
		 */
		userName?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface DictInfoEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 类型ID
		 */
		typeId?: number;

		/**
		 * 名称
		 */
		name?: string;

		/**
		 * 值
		 */
		value?: string;

		/**
		 * 排序
		 */
		orderNum?: number;

		/**
		 * 备注
		 */
		remark?: string;

		/**
		 * 父ID
		 */
		parentId?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface DictTypeEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 名称
		 */
		name?: string;

		/**
		 * 标识
		 */
		key?: string;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface FoodBookingOrderEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 关联统一订单ID
		 */
		orderId?: BigInt;

		/**
		 * 用户ID
		 */
		userId?: BigInt;

		/**
		 * 餐厅ID
		 */
		restaurantId?: BigInt;

		/**
		 * 预订日期
		 */
		bookingDate?: Date;

		/**
		 * 时段ID
		 */
		timeSlotId?: number;

		/**
		 * 就餐人数
		 */
		peopleCount?: number;

		/**
		 * 联系人姓名
		 */
		contactName?: string;

		/**
		 * 联系电话
		 */
		contactPhone?: string;

		/**
		 * 备注
		 */
		remark?: string;

		/**
		 * 状态：1待确认 2已确认 3已完成 4已取消
		 */
		status?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface FoodDishEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 餐厅ID
		 */
		restaurantId?: BigInt;

		/**
		 * 菜品名称
		 */
		name?: string;

		/**
		 * 价格
		 */
		price?: number;

		/**
		 * 主图
		 */
		mainImage?: string;

		/**
		 * 介绍
		 */
		intro?: string;

		/**
		 * 是否招牌菜：0否 1是
		 */
		isSignature?: number;

		/**
		 * 状态：0下架 1上架
		 */
		status?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface FoodProductEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 分类ID
		 */
		categoryId?: number;

		/**
		 * 产品名称
		 */
		name?: string;

		/**
		 * 副标题
		 */
		subtitle?: string;

		/**
		 * 主图
		 */
		mainImage?: string;

		/**
		 * 价格
		 */
		price?: number;

		/**
		 * 市场价
		 */
		marketPrice?: number;

		/**
		 * 库存
		 */
		stock?: number;

		/**
		 * 销量
		 */
		sales?: number;

		/**
		 * 产地
		 */
		origin?: string;

		/**
		 * 保质期
		 */
		shelfLife?: string;

		/**
		 * 规格
		 */
		spec?: string;

		/**
		 * 详情
		 */
		detail?: string;

		/**
		 * 状态：0下架 1上架
		 */
		status?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface FoodProductCategoryEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 分类名称
		 */
		name?: string;

		/**
		 * 图标
		 */
		icon?: string;

		/**
		 * 排序
		 */
		sort?: number;

		/**
		 * 状态：0禁用 1启用
		 */
		status?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface FoodRestaurantEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 餐厅名称
		 */
		name?: string;

		/**
		 * 地址
		 */
		address?: string;

		/**
		 * 经度
		 */
		longitude?: number;

		/**
		 * 纬度
		 */
		latitude?: number;

		/**
		 * 营业时间
		 */
		businessHours?: string;

		/**
		 * 容纳人数
		 */
		capacity?: number;

		/**
		 * 主图
		 */
		mainImage?: string;

		/**
		 * 图片集
		 */
		images?: string;

		/**
		 * 餐厅介绍
		 */
		intro?: string;

		/**
		 * 人均消费
		 */
		avgPrice?: number;

		/**
		 * 评分
		 */
		score?: number;

		/**
		 * 状态：0下架 1营业
		 */
		status?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface FoodRestaurantReviewEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 订单ID
		 */
		orderId?: BigInt;

		/**
		 * 用户ID
		 */
		userId?: BigInt;

		/**
		 * 餐厅ID
		 */
		restaurantId?: BigInt;

		/**
		 * 评分：1-5星
		 */
		score?: number;

		/**
		 * 评价内容
		 */
		content?: string;

		/**
		 * 图片
		 */
		images?: string;

		/**
		 * 商家回复
		 */
		merchantReply?: string;

		/**
		 * 回复时间
		 */
		replyTime?: Date;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface FoodTimeSlotEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 餐厅ID
		 */
		restaurantId?: BigInt;

		/**
		 * 时段名称（如"午餐 11:30-13:30"）
		 */
		name?: string;

		/**
		 * 开始时间
		 */
		startTime?: time;

		/**
		 * 结束时间
		 */
		endTime?: time;

		/**
		 * 最大预订人数
		 */
		maxPeople?: number;

		/**
		 * 状态：0禁用 1启用
		 */
		status?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface HotelBookingOrderEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 关联统一订单ID
		 */
		orderId?: BigInt;

		/**
		 * 用户ID
		 */
		userId?: BigInt;

		/**
		 * 民宿ID
		 */
		houseId?: BigInt;

		/**
		 * 房型ID
		 */
		roomTypeId?: BigInt;

		/**
		 * 入住日期
		 */
		checkInDate?: Date;

		/**
		 * 离店日期
		 */
		checkOutDate?: Date;

		/**
		 * 入住天数
		 */
		nights?: number;

		/**
		 * 房间数
		 */
		roomCount?: number;

		/**
		 * 入住人姓名
		 */
		guestName?: string;

		/**
		 * 入住人电话
		 */
		guestPhone?: string;

		/**
		 * 身份证号
		 */
		guestIdCard?: string;

		/**
		 * 入住码
		 */
		checkInCode?: string;

		/**
		 * 状态：1待入住 2入住中 3已离店 4已取消
		 */
		status?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface HotelCheckInNoticeEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 民宿ID
		 */
		houseId?: BigInt;

		/**
		 * 入住时间
		 */
		checkInTime?: time;

		/**
		 * 离店时间
		 */
		checkOutTime?: time;

		/**
		 * 宠物政策
		 */
		petPolicy?: string;

		/**
		 * 是否含早餐：0否 1是
		 */
		hasBreakfast?: number;

		/**
		 * 押金
		 */
		deposit?: number;

		/**
		 * 其他须知
		 */
		otherNotice?: string;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface HotelHouseEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 民宿名称
		 */
		name?: string;

		/**
		 * 地址
		 */
		address?: string;

		/**
		 * 经度
		 */
		longitude?: number;

		/**
		 * 纬度
		 */
		latitude?: number;

		/**
		 * 风格标签（JSON数组）
		 */
		styleTags?: string;

		/**
		 * 设施标签（JSON数组）
		 */
		facilityTags?: string;

		/**
		 * 主图
		 */
		mainImage?: string;

		/**
		 * 图片集（JSON数组）
		 */
		images?: string;

		/**
		 * 介绍
		 */
		intro?: string;

		/**
		 * 评分
		 */
		score?: number;

		/**
		 * 状态：0下架 1上架
		 */
		status?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface HotelReviewEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 订单ID
		 */
		orderId?: BigInt;

		/**
		 * 用户ID
		 */
		userId?: BigInt;

		/**
		 * 民宿ID
		 */
		houseId?: BigInt;

		/**
		 * 评分：1-5星
		 */
		score?: number;

		/**
		 * 评价内容
		 */
		content?: string;

		/**
		 * 评价图片（JSON数组）
		 */
		images?: string;

		/**
		 * 商家回复
		 */
		merchantReply?: string;

		/**
		 * 回复时间
		 */
		replyTime?: Date;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface HotelRoomCalendarEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 房型ID
		 */
		roomTypeId?: BigInt;

		/**
		 * 日期
		 */
		date?: Date;

		/**
		 * 可用房间数
		 */
		availableRooms?: number;

		/**
		 * 当日价格（支持动态定价）
		 */
		price?: number;

		/**
		 * 状态：0不可订 1可订
		 */
		status?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface HotelRoomTypeEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 民宿ID
		 */
		houseId?: BigInt;

		/**
		 * 房型名称
		 */
		name?: string;

		/**
		 * 床型
		 */
		bedType?: string;

		/**
		 * 面积（平米）
		 */
		area?: number;

		/**
		 * 最多容纳人数
		 */
		maxPeople?: number;

		/**
		 * 设施（JSON数组）
		 */
		facilities?: string;

		/**
		 * 价格（基础价）
		 */
		price?: number;

		/**
		 * 房间总数
		 */
		totalRooms?: number;

		/**
		 * 主图
		 */
		mainImage?: string;

		/**
		 * 图片集（JSON数组）
		 */
		images?: string;

		/**
		 * 状态：0下架 1上架
		 */
		status?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface MessageEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 接收用户ID（0表示全体用户）
		 */
		userId?: BigInt;

		/**
		 * 类型：1系统 2订单 3互动
		 */
		type?: number;

		/**
		 * 标题
		 */
		title?: string;

		/**
		 * 内容
		 */
		content?: string;

		/**
		 * 是否已读：0未读 1已读
		 */
		isRead?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface OrderEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 订单号
		 */
		orderNo?: string;

		/**
		 * 用户ID
		 */
		userId?: BigInt;

		/**
		 * 订单类型：1商品 2餐位 3住宿 4门票 5线路
		 */
		type?: number;

		/**
		 * 订单总金额
		 */
		totalAmount?: number;

		/**
		 * 实付金额
		 */
		payAmount?: number;

		/**
		 * 状态：1待支付 2已支付 3已取消 4已完成 5已退款
		 */
		status?: number;

		/**
		 * 支付方式：1微信 2支付宝
		 */
		payType?: number;

		/**
		 * 支付时间
		 */
		payTime?: Date;

		/**
		 * 支付流水号
		 */
		payTransactionId?: string;

		/**
		 * 备注
		 */
		remark?: string;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface PluginInfoEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 名称
		 */
		name?: string;

		/**
		 * 简介
		 */
		description?: string;

		/**
		 * Key名
		 */
		keyName?: string;

		/**
		 * Hook
		 */
		hook?: string;

		/**
		 * 描述
		 */
		readme?: string;

		/**
		 * 版本
		 */
		version?: string;

		/**
		 * Logo(base64)
		 */
		logo?: string;

		/**
		 * 作者
		 */
		author?: string;

		/**
		 * 状态 0-禁用 1-启用
		 */
		status?: number;

		/**
		 * 内容
		 */
		content?: any;

		/**
		 * ts内容
		 */
		tsContent?: any;

		/**
		 * 插件的plugin.json
		 */
		pluginJson?: any;

		/**
		 * 配置
		 */
		config?: any;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface RecycleDataEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 表
		 */
		entityInfo?: any;

		/**
		 * 操作人
		 */
		userId?: number;

		/**
		 * 被删除的数据
		 */
		data?: any;

		/**
		 * 请求的接口
		 */
		url?: string;

		/**
		 * 请求参数
		 */
		params?: any;

		/**
		 * 删除数据条数
		 */
		count?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 姓名
		 */
		userName?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ShopCategoryEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 父分类ID（0为顶级）
		 */
		parentId?: number;

		/**
		 * 分类名称
		 */
		name?: string;

		/**
		 * 分类图标
		 */
		icon?: string;

		/**
		 * 排序
		 */
		sort?: number;

		/**
		 * 状态：0下架 1正常
		 */
		status?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ShopGoodsEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 分类ID
		 */
		categoryId?: number;

		/**
		 * 商品标题
		 */
		title?: string;

		/**
		 * 副标题
		 */
		subtitle?: string;

		/**
		 * 主图
		 */
		mainImage?: string;

		/**
		 * 价格
		 */
		price?: number;

		/**
		 * 市场价
		 */
		marketPrice?: number;

		/**
		 * 库存
		 */
		stock?: number;

		/**
		 * 销量
		 */
		sales?: number;

		/**
		 * 工艺介绍
		 */
		craftIntro?: string;

		/**
		 * 传承人ID
		 */
		artisanId?: BigInt;

		/**
		 * 商品详情（富文本）
		 */
		detail?: string;

		/**
		 * 状态：0下架 1上架
		 */
		status?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ShopGoodsImageEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 商品ID
		 */
		goodsId?: BigInt;

		/**
		 * 图片URL
		 */
		imageUrl?: string;

		/**
		 * 排序
		 */
		sort?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ShopGoodsSKUEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 商品ID
		 */
		goodsId?: BigInt;

		/**
		 * 规格名称
		 */
		skuName?: string;

		/**
		 * 价格
		 */
		price?: number;

		/**
		 * 库存
		 */
		stock?: number;

		/**
		 * SKU图片
		 */
		image?: string;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ShopOrderEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 关联统一订单ID
		 */
		orderId?: BigInt;

		/**
		 * 用户ID
		 */
		userId?: BigInt;

		/**
		 * 商品总金额
		 */
		totalAmount?: number;

		/**
		 * 运费
		 */
		freight?: number;

		/**
		 * 收货地址ID
		 */
		addressId?: BigInt;

		/**
		 * 地址快照
		 */
		addressSnapshot?: string;

		/**
		 * 物流公司
		 */
		logisticsCompany?: string;

		/**
		 * 物流单号
		 */
		logisticsNo?: string;

		/**
		 * 状态：1待发货 2已发货 3已收货
		 */
		status?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ShopReviewEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 订单ID
		 */
		orderId?: BigInt;

		/**
		 * 订单明细ID
		 */
		orderItemId?: BigInt;

		/**
		 * 用户ID
		 */
		userId?: BigInt;

		/**
		 * 商品ID
		 */
		goodsId?: BigInt;

		/**
		 * 评分：1-5星
		 */
		score?: number;

		/**
		 * 评价内容
		 */
		content?: string;

		/**
		 * 评价图片（JSON数组）
		 */
		images?: string;

		/**
		 * 追评内容
		 */
		appendContent?: string;

		/**
		 * 追评时间
		 */
		appendTime?: Date;

		/**
		 * 商家回复
		 */
		merchantReply?: string;

		/**
		 * 回复时间
		 */
		replyTime?: Date;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface SpaceInfoEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 地址
		 */
		url?: string;

		/**
		 * 类型
		 */
		type?: string;

		/**
		 * 分类ID
		 */
		classifyId?: number;

		/**
		 * 文件id
		 */
		fileId?: string;

		/**
		 * 文件名
		 */
		name?: string;

		/**
		 * 文件大小
		 */
		size?: number;

		/**
		 * 文档版本
		 */
		version?: number;

		/**
		 * 文件位置
		 */
		key?: string;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface SpaceTypeEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 类别名称
		 */
		name?: string;

		/**
		 * 父分类ID
		 */
		parentId?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface TaskInfoEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 任务ID
		 */
		jobId?: string;

		/**
		 * 任务配置
		 */
		repeatConf?: string;

		/**
		 * 名称
		 */
		name?: string;

		/**
		 * cron
		 */
		cron?: string;

		/**
		 * 最大执行次数 不传为无限次
		 */
		limit?: number;

		/**
		 * 每间隔多少毫秒执行一次 如果cron设置了 这项设置就无效
		 */
		every?: number;

		/**
		 * 备注
		 */
		remark?: string;

		/**
		 * 状态 0-停止 1-运行
		 */
		status?: number;

		/**
		 * 开始时间
		 */
		startDate?: Date;

		/**
		 * 结束时间
		 */
		endDate?: Date;

		/**
		 * 数据
		 */
		data?: string;

		/**
		 * 执行的service实例ID
		 */
		service?: string;

		/**
		 * 状态 0-系统 1-用户
		 */
		type?: number;

		/**
		 * 下一次执行时间
		 */
		nextRunTime?: Date;

		/**
		 * 状态 0-cron 1-时间间隔
		 */
		taskType?: number;

		/**
		 * undefined
		 */
		lastExecuteTime?: Date;

		/**
		 * undefined
		 */
		lockExpireTime?: Date;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface TourETicketEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 订单ID
		 */
		orderId?: BigInt;

		/**
		 * 电子票号（唯一）
		 */
		ticketNo?: string;

		/**
		 * 二维码图片URL
		 */
		qrCode?: string;

		/**
		 * 有效日期
		 */
		validDate?: Date;

		/**
		 * 状态：1未使用 2已使用 3已过期
		 */
		status?: number;

		/**
		 * 使用时间
		 */
		usedTime?: Date;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface TourRouteItineraryEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 路线ID
		 */
		routeId?: BigInt;

		/**
		 * 第几天
		 */
		dayNumber?: number;

		/**
		 * 标题
		 */
		title?: string;

		/**
		 * 行程描述
		 */
		description?: string;

		/**
		 * 景点
		 */
		attractions?: string;

		/**
		 * 用餐安排
		 */
		meals?: string;

		/**
		 * 住宿安排
		 */
		accommodation?: string;

		/**
		 * 交通方式
		 */
		transportation?: string;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface TourRouteEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 路线标题
		 */
		title?: string;

		/**
		 * 行程天数
		 */
		days?: number;

		/**
		 * 价格
		 */
		price?: number;

		/**
		 * 包含项目
		 */
		includeItems?: string;

		/**
		 * 出发地
		 */
		departure?: string;

		/**
		 * 目的地
		 */
		destination?: string;

		/**
		 * 住宿标准
		 */
		accommodation?: string;

		/**
		 * 餐饮标准
		 */
		catering?: string;

		/**
		 * 主图
		 */
		mainImage?: string;

		/**
		 * 图片集
		 */
		images?: string;

		/**
		 * 介绍
		 */
		intro?: string;

		/**
		 * 注意事项
		 */
		notice?: string;

		/**
		 * 状态：0下架 1上架
		 */
		status?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface TourScenicSpotEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 景区名称
		 */
		name?: string;

		/**
		 * 地址
		 */
		address?: string;

		/**
		 * 经度
		 */
		longitude?: number;

		/**
		 * 纬度
		 */
		latitude?: number;

		/**
		 * 开放时间
		 */
		openingHours?: string;

		/**
		 * 主图
		 */
		mainImage?: string;

		/**
		 * 图片集
		 */
		images?: string;

		/**
		 * 介绍
		 */
		intro?: string;

		/**
		 * 状态：0下架 1上架
		 */
		status?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface TourTicketOrderEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 关联统一订单ID
		 */
		orderId?: BigInt;

		/**
		 * 用户ID
		 */
		userId?: BigInt;

		/**
		 * 景区ID
		 */
		scenicSpotId?: BigInt;

		/**
		 * 票种ID
		 */
		ticketTypeId?: BigInt;

		/**
		 * 使用日期
		 */
		useDate?: Date;

		/**
		 * 数量
		 */
		quantity?: number;

		/**
		 * 游客信息
		 */
		tourists?: string;

		/**
		 * 状态：1待使用 2已使用 3已过期 4已退票
		 */
		status?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface TourTicketTypeEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 景区ID
		 */
		scenicSpotId?: BigInt;

		/**
		 * 票种名称（成人/儿童/学生票）
		 */
		name?: string;

		/**
		 * 价格
		 */
		price?: number;

		/**
		 * 库存（-1表示无限制）
		 */
		stock?: number;

		/**
		 * 有效天数
		 */
		validityDays?: number;

		/**
		 * 说明
		 */
		intro?: string;

		/**
		 * 状态：0下架 1上架
		 */
		status?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface UserAddressEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 用户ID
		 */
		userId?: BigInt;

		/**
		 * 收货人姓名
		 */
		name?: string;

		/**
		 * 收货人电话
		 */
		phone?: string;

		/**
		 * 省
		 */
		province?: string;

		/**
		 * 市
		 */
		city?: string;

		/**
		 * 区/县
		 */
		district?: string;

		/**
		 * 详细地址
		 */
		detail?: string;

		/**
		 * 是否默认
		 */
		isDefault?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface UserInfoEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 登录唯一ID
		 */
		unionid?: string;

		/**
		 * 头像
		 */
		avatarUrl?: string;

		/**
		 * 昵称
		 */
		nickName?: string;

		/**
		 * 手机号
		 */
		phone?: string;

		/**
		 * 性别
		 */
		gender?: number;

		/**
		 * 状态
		 */
		status?: number;

		/**
		 * 登录方式
		 */
		loginType?: number;

		/**
		 * 密码
		 */
		password?: string;

		/**
		 * 介绍
		 */
		description?: string;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	type json = any;

	type DictKey = "brand" | "occupation" | "product_type";

	interface PagePagination {
		size: number;
		page: number;
		total: number;
		[key: string]: any;
	}

	interface PageResponse<T> {
		pagination: PagePagination;
		list: T[];
		[key: string]: any;
	}

	interface AdminAdminUserPageResponse {
		pagination: PagePagination;
		list: AdminUserEntity[];
	}

	interface AdminMerchantApplicationPageResponse {
		pagination: PagePagination;
		list: MerchantApplicationEntity[];
	}

	interface AdminMerchantUserPageResponse {
		pagination: PagePagination;
		list: MerchantUserEntity[];
	}

	interface AdminPlatformBannerPageResponse {
		pagination: PagePagination;
		list: PlatformBannerEntity[];
	}

	interface AdminPlatformNoticePageResponse {
		pagination: PagePagination;
		list: PlatformNoticeEntity[];
	}

	interface BaseSysLogPageResponse {
		pagination: PagePagination;
		list: BaseSysLogEntity[];
	}

	interface BaseSysMenuPageResponse {
		pagination: PagePagination;
		list: BaseSysMenuEntity[];
	}

	interface BaseSysParamPageResponse {
		pagination: PagePagination;
		list: BaseSysParamEntity[];
	}

	interface BaseSysRolePageResponse {
		pagination: PagePagination;
		list: BaseSysRoleEntity[];
	}

	interface BaseSysUserPageResponse {
		pagination: PagePagination;
		list: BaseSysUserEntity[];
	}

	interface CommunityCommentPageResponse {
		pagination: PagePagination;
		list: CommunityCommentEntity[];
	}

	interface CommunityPostPageResponse {
		pagination: PagePagination;
		list: CommunityPostEntity[];
	}

	interface CommunityReportPageResponse {
		pagination: PagePagination;
		list: CommunityReportEntity[];
	}

	interface CommunityTopicPageResponse {
		pagination: PagePagination;
		list: CommunityTopicEntity[];
	}

	interface DemoGoodsPageResponse {
		pagination: PagePagination;
		list: DemoGoodsEntity[];
	}

	interface DictInfoPageResponse {
		pagination: PagePagination;
		list: DictInfoEntity[];
	}

	interface DictTypePageResponse {
		pagination: PagePagination;
		list: DictTypeEntity[];
	}

	interface FoodBookingPageResponse {
		pagination: PagePagination;
		list: FoodBookingOrderEntity[];
	}

	interface FoodDishPageResponse {
		pagination: PagePagination;
		list: FoodDishEntity[];
	}

	interface FoodProductPageResponse {
		pagination: PagePagination;
		list: FoodProductEntity[];
	}

	interface FoodProduct_categoryPageResponse {
		pagination: PagePagination;
		list: FoodProductCategoryEntity[];
	}

	interface FoodRestaurantPageResponse {
		pagination: PagePagination;
		list: FoodRestaurantEntity[];
	}

	interface FoodRestaurant_reviewPageResponse {
		pagination: PagePagination;
		list: FoodRestaurantReviewEntity[];
	}

	interface FoodTime_slotPageResponse {
		pagination: PagePagination;
		list: FoodTimeSlotEntity[];
	}

	interface HotelBookingPageResponse {
		pagination: PagePagination;
		list: HotelBookingOrderEntity[];
	}

	interface HotelCheck_in_noticePageResponse {
		pagination: PagePagination;
		list: HotelCheckInNoticeEntity[];
	}

	interface HotelHousePageResponse {
		pagination: PagePagination;
		list: HotelHouseEntity[];
	}

	interface HotelReviewPageResponse {
		pagination: PagePagination;
		list: HotelReviewEntity[];
	}

	interface HotelRoom_calendarPageResponse {
		pagination: PagePagination;
		list: HotelRoomCalendarEntity[];
	}

	interface HotelRoom_typePageResponse {
		pagination: PagePagination;
		list: HotelRoomTypeEntity[];
	}

	interface MessagePageResponse {
		pagination: PagePagination;
		list: MessageEntity[];
	}

	interface OrderOrderPageResponse {
		pagination: PagePagination;
		list: OrderEntity[];
	}

	interface PluginInfoPageResponse {
		pagination: PagePagination;
		list: PluginInfoEntity[];
	}

	interface RecycleDataPageResponse {
		pagination: PagePagination;
		list: RecycleDataEntity[];
	}

	interface ShopCategoryPageResponse {
		pagination: PagePagination;
		list: ShopCategoryEntity[];
	}

	interface ShopGoodsPageResponse {
		pagination: PagePagination;
		list: ShopGoodsEntity[];
	}

	interface ShopGoods_skuPageResponse {
		pagination: PagePagination;
		list: ShopGoodsSKUEntity[];
	}

	interface ShopOrderPageResponse {
		pagination: PagePagination;
		list: ShopOrderEntity[];
	}

	interface ShopReviewPageResponse {
		pagination: PagePagination;
		list: ShopReviewEntity[];
	}

	interface SpaceInfoPageResponse {
		pagination: PagePagination;
		list: SpaceInfoEntity[];
	}

	interface SpaceTypePageResponse {
		pagination: PagePagination;
		list: SpaceTypeEntity[];
	}

	interface TaskInfoPageResponse {
		pagination: PagePagination;
		list: TaskInfoEntity[];
	}

	interface TourETicketPageResponse {
		pagination: PagePagination;
		list: TourETicketEntity[];
	}

	interface TourItineraryPageResponse {
		pagination: PagePagination;
		list: TourRouteItineraryEntity[];
	}

	interface TourRoutePageResponse {
		pagination: PagePagination;
		list: TourRouteEntity[];
	}

	interface TourScenicSpotPageResponse {
		pagination: PagePagination;
		list: TourScenicSpotEntity[];
	}

	interface TourTicketOrderPageResponse {
		pagination: PagePagination;
		list: TourTicketOrderEntity[];
	}

	interface TourTicketTypePageResponse {
		pagination: PagePagination;
		list: TourTicketTypeEntity[];
	}

	interface UserAddressPageResponse {
		pagination: PagePagination;
		list: UserAddressEntity[];
	}

	interface UserInfoPageResponse {
		pagination: PagePagination;
		list: UserInfoEntity[];
	}

	interface AdminAdminUser {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<AdminUserEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<AdminUserEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<AdminAdminUserPageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface AdminMerchantApplication {
		/**
		 * review
		 */
		review(data?: any): Promise<any>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<MerchantApplicationEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<MerchantApplicationEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<AdminMerchantApplicationPageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			review: string;
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			review: boolean;
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface AdminMerchantUser {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<MerchantUserEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<MerchantUserEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<AdminMerchantUserPageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface AdminPlatformBanner {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<PlatformBannerEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<PlatformBannerEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<AdminPlatformBannerPageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface AdminPlatformNotice {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<PlatformNoticeEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<PlatformNoticeEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<AdminPlatformNoticePageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface AdminStatistics {
		/**
		 * salesStats
		 */
		salesStats(data?: any): Promise<any>;

		/**
		 * orderTrend
		 */
		orderTrend(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { salesStats: string; orderTrend: string };

		/**
		 * 权限状态
		 */
		_permission: { salesStats: boolean; orderTrend: boolean };

		request: Request;
	}

	interface BaseCoding {
		/**
		 * 获取模块目录结构
		 */
		getModuleTree(data?: any): Promise<any>;

		/**
		 * 创建代码
		 */
		createCode(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { getModuleTree: string; createCode: string };

		/**
		 * 权限状态
		 */
		_permission: { getModuleTree: boolean; createCode: boolean };

		request: Request;
	}

	interface BaseComm {
		/**
		 * 修改个人信息
		 */
		personUpdate(data?: any): Promise<any>;

		/**
		 * 文件上传模式
		 */
		uploadMode(data?: any): Promise<any>;

		/**
		 * 权限与菜单
		 */
		permmenu(data?: any): Promise<any>;

		/**
		 * 编程
		 */
		program(data?: any): Promise<any>;

		/**
		 * 个人信息
		 */
		person(data?: any): Promise<any>;

		/**
		 * 文件上传
		 */
		upload(data?: any): Promise<any>;

		/**
		 * 退出
		 */
		logout(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			personUpdate: string;
			uploadMode: string;
			permmenu: string;
			program: string;
			person: string;
			upload: string;
			logout: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			personUpdate: boolean;
			uploadMode: boolean;
			permmenu: boolean;
			program: boolean;
			person: boolean;
			upload: boolean;
			logout: boolean;
		};

		request: Request;
	}

	interface BaseOpen {
		/**
		 * 刷新token
		 */
		refreshToken(data?: any): Promise<any>;

		/**
		 * 验证码
		 */
		captcha(data?: any): Promise<any>;

		/**
		 * 登录
		 */
		login(data?: any): Promise<any>;

		/**
		 * 获得网页内容的参数值
		 */
		html(data?: any): Promise<any>;

		/**
		 * 实体信息与路径
		 */
		eps(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			refreshToken: string;
			captcha: string;
			login: string;
			html: string;
			eps: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			refreshToken: boolean;
			captcha: boolean;
			login: boolean;
			html: boolean;
			eps: boolean;
		};

		request: Request;
	}

	interface BaseSysDepartment {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 排序
		 */
		order(data?: any): Promise<any>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<BaseSysDepartmentEntity[]>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { delete: string; update: string; order: string; list: string; add: string };

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			order: boolean;
			list: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface BaseSysLog {
		/**
		 * 日志保存时间
		 */
		setKeep(data?: any): Promise<any>;

		/**
		 * 获得日志保存时间
		 */
		getKeep(data?: any): Promise<any>;

		/**
		 * 清理
		 */
		clear(data?: any): Promise<any>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<BaseSysLogPageResponse>;

		/**
		 * 权限标识
		 */
		permission: { setKeep: string; getKeep: string; clear: string; page: string };

		/**
		 * 权限状态
		 */
		_permission: { setKeep: boolean; getKeep: boolean; clear: boolean; page: boolean };

		request: Request;
	}

	interface BaseSysMenu {
		/**
		 * 创建代码
		 */
		create(data?: any): Promise<any>;

		/**
		 * 导出
		 */
		export(data?: any): Promise<any>;

		/**
		 * 导入
		 */
		import(data?: any): Promise<any>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 解析
		 */
		parse(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<BaseSysMenuEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<BaseSysMenuEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<BaseSysMenuPageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			create: string;
			export: string;
			import: string;
			delete: string;
			update: string;
			parse: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			create: boolean;
			export: boolean;
			import: boolean;
			delete: boolean;
			update: boolean;
			parse: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface BaseSysParam {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 获得网页内容的参数值
		 */
		html(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<BaseSysParamEntity>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<BaseSysParamPageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			html: string;
			info: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			html: boolean;
			info: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface BaseSysRole {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<BaseSysRoleEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<BaseSysRoleEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<BaseSysRolePageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface BaseSysUser {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 移动部门
		 */
		move(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<BaseSysUserEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<BaseSysUserEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<BaseSysUserPageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			move: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			move: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface CommunityComment {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<CommunityCommentEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<CommunityCommentPageResponse>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<CommunityCommentEntity>;

		/**
		 * 权限标识
		 */
		permission: { delete: string; list: string; page: string; info: string };

		/**
		 * 权限状态
		 */
		_permission: { delete: boolean; list: boolean; page: boolean; info: boolean };

		request: Request;
	}

	interface CommunityPost {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<CommunityPostEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<CommunityPostEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<CommunityPostPageResponse>;

		/**
		 * 审核游记
		 */
		review(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			review: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			review: boolean;
		};

		request: Request;
	}

	interface CommunityReport {
		/**
		 * 列表查询
		 */
		list(data?: any): Promise<CommunityReportEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<CommunityReportPageResponse>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<CommunityReportEntity>;

		/**
		 * 处理举报
		 */
		handle(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { list: string; page: string; info: string; handle: string };

		/**
		 * 权限状态
		 */
		_permission: { list: boolean; page: boolean; info: boolean; handle: boolean };

		request: Request;
	}

	interface CommunityTopic {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<CommunityTopicEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<CommunityTopicEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<CommunityTopicPageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface DemoGoods {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<DemoGoodsEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<DemoGoodsEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<DemoGoodsPageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface DemoTenant {
		/**
		 * 局部不使用多租户
		 */
		noTenant(data?: any): Promise<any>;

		/**
		 * 不使用多租户
		 */
		noUse(data?: any): Promise<any>;

		/**
		 * use
		 */
		use(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { noTenant: string; noUse: string; use: string };

		/**
		 * 权限状态
		 */
		_permission: { noTenant: boolean; noUse: boolean; use: boolean };

		request: Request;
	}

	interface DictInfo {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 获得所有字典类型
		 */
		types(data?: any): Promise<any>;

		/**
		 * 获得字典数据
		 */
		data(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<DictInfoEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<DictInfoEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<DictInfoPageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			types: string;
			data: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			types: boolean;
			data: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface DictType {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<DictTypeEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<DictTypeEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<DictTypePageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface FoodBooking {
		/**
		 * 完成预订
		 */
		complete(data?: any): Promise<any>;

		/**
		 * 确认预订
		 */
		confirm(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<FoodBookingOrderEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<FoodBookingOrderEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<FoodBookingPageResponse>;

		/**
		 * 权限标识
		 */
		permission: {
			complete: string;
			confirm: string;
			update: string;
			info: string;
			list: string;
			page: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			complete: boolean;
			confirm: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
		};

		request: Request;
	}

	interface FoodDish {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<FoodDishEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<FoodDishEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<FoodDishPageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface FoodProduct {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<FoodProductEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<FoodProductEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<FoodProductPageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface FoodProduct_category {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<FoodProductCategoryEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<FoodProductCategoryEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<FoodProduct_categoryPageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface FoodRestaurant {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<FoodRestaurantEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<FoodRestaurantEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<FoodRestaurantPageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface FoodRestaurant_review {
		/**
		 * 商家回复评价
		 */
		reply(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<FoodRestaurantReviewEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<FoodRestaurantReviewEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<FoodRestaurant_reviewPageResponse>;

		/**
		 * 权限标识
		 */
		permission: { reply: string; info: string; list: string; page: string };

		/**
		 * 权限状态
		 */
		_permission: { reply: boolean; info: boolean; list: boolean; page: boolean };

		request: Request;
	}

	interface FoodTime_slot {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<FoodTimeSlotEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<FoodTimeSlotEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<FoodTime_slotPageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface HotelBooking {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<HotelBookingOrderEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<HotelBookingOrderEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<HotelBookingPageResponse>;

		/**
		 * 权限标识
		 */
		permission: { delete: string; update: string; info: string; list: string; page: string };

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
		};

		request: Request;
	}

	interface HotelCheck_in_notice {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<HotelCheckInNoticeEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<HotelCheckInNoticeEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<HotelCheck_in_noticePageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface HotelHouse {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<HotelHouseEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<HotelHouseEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<HotelHousePageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface HotelReview {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 商家回复评价
		 */
		reply(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<HotelReviewEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<HotelReviewEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<HotelReviewPageResponse>;

		/**
		 * 权限标识
		 */
		permission: { delete: string; reply: string; info: string; list: string; page: string };

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			reply: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
		};

		request: Request;
	}

	interface HotelRoom_calendar {
		/**
		 * 查询房态
		 */
		queryAvailability(data?: any): Promise<any>;

		/**
		 * 批量设置房态
		 */
		batchSet(data?: any): Promise<any>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<HotelRoomCalendarEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<HotelRoomCalendarEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<HotelRoom_calendarPageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			queryAvailability: string;
			batchSet: string;
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			queryAvailability: boolean;
			batchSet: boolean;
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface HotelRoom_type {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<HotelRoomTypeEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<HotelRoomTypeEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<HotelRoom_typePageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface Message {
		/**
		 * 群发消息
		 */
		sendtoall(data?: any): Promise<any>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 发送消息给指定用户
		 */
		send(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<MessageEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<MessageEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<MessagePageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			sendtoall: string;
			delete: string;
			update: string;
			send: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			sendtoall: boolean;
			delete: boolean;
			update: boolean;
			send: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface OrderOrder {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<OrderEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<OrderEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<OrderOrderPageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 订单详情（按订单号）
		 */
		detail(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
			detail: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
			detail: boolean;
		};

		request: Request;
	}

	interface PluginInfo {
		/**
		 * 安装插件
		 */
		install(data?: any): Promise<any>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<PluginInfoEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<PluginInfoEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<PluginInfoPageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			install: string;
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			install: boolean;
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface RecycleData {
		/**
		 * 恢复数据
		 */
		restore(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<RecycleDataEntity>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<RecycleDataPageResponse>;

		/**
		 * 权限标识
		 */
		permission: { restore: string; info: string; page: string };

		/**
		 * 权限状态
		 */
		_permission: { restore: boolean; info: boolean; page: boolean };

		request: Request;
	}

	interface ShopCategory {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<ShopCategoryEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<ShopCategoryEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<ShopCategoryPageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface ShopGoods {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<ShopGoodsEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<ShopGoodsEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<ShopGoodsPageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface ShopGoods_image {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<ShopGoodsImageEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<ShopGoodsImageEntity[]>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { delete: string; update: string; info: string; list: string; add: string };

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface ShopGoods_sku {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<ShopGoodsSKUEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<ShopGoodsSKUEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<ShopGoods_skuPageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface ShopOrder {
		/**
		 * 更新物流信息
		 */
		updateLogistics(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<ShopOrderEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<ShopOrderEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<ShopOrderPageResponse>;

		/**
		 * 权限标识
		 */
		permission: {
			updateLogistics: string;
			update: string;
			info: string;
			list: string;
			page: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			updateLogistics: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
		};

		request: Request;
	}

	interface ShopReview {
		/**
		 * 商家回复
		 */
		reply(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<ShopReviewEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<ShopReviewEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<ShopReviewPageResponse>;

		/**
		 * 权限标识
		 */
		permission: { reply: string; info: string; list: string; page: string };

		/**
		 * 权限状态
		 */
		_permission: { reply: boolean; info: boolean; list: boolean; page: boolean };

		request: Request;
	}

	interface SpaceInfo {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<SpaceInfoEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<SpaceInfoEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<SpaceInfoPageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface SpaceType {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<SpaceTypeEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<SpaceTypeEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<SpaceTypePageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface TaskInfo {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 开始
		 */
		start(data?: any): Promise<any>;

		/**
		 * 执行一次
		 */
		once(data?: any): Promise<any>;

		/**
		 * 停止
		 */
		stop(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<TaskInfoEntity>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<TaskInfoPageResponse>;

		/**
		 * 日志
		 */
		log(data?: any): Promise<any>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			start: string;
			once: string;
			stop: string;
			info: string;
			page: string;
			log: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			start: boolean;
			once: boolean;
			stop: boolean;
			info: boolean;
			page: boolean;
			log: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface TourETicket {
		/**
		 * verify
		 */
		verify(data?: any): Promise<any>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * query
		 */
		query(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<TourETicketEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<TourETicketEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<TourETicketPageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			verify: string;
			delete: string;
			update: string;
			query: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			verify: boolean;
			delete: boolean;
			update: boolean;
			query: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface TourItinerary {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<TourRouteItineraryEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<TourRouteItineraryEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<TourItineraryPageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface TourRoute {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<TourRouteEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<TourRouteEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<TourRoutePageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface TourScenicSpot {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<TourScenicSpotEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<TourScenicSpotEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<TourScenicSpotPageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface TourTicketOrder {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<TourTicketOrderEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<TourTicketOrderEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<TourTicketOrderPageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface TourTicketType {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<TourTicketTypeEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<TourTicketTypeEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<TourTicketTypePageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface UserAddress {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<UserAddressEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<UserAddressEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<UserAddressPageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface UserInfo {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<UserInfoEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<UserInfoEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<UserInfoPageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface RequestOptions {
		url: string;
		method?: "OPTIONS" | "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT";
		data?: any;
		params?: any;
		headers?: any;
		timeout?: number;
		[key: string]: any;
	}

	type Request = (options: RequestOptions) => Promise<any>;

	type Service = {
		request: Request;

		admin: {
			adminUser: AdminAdminUser;
			merchantApplication: AdminMerchantApplication;
			merchantUser: AdminMerchantUser;
			platformBanner: AdminPlatformBanner;
			platformNotice: AdminPlatformNotice;
			statistics: AdminStatistics;
		};
		base: {
			coding: BaseCoding;
			comm: BaseComm;
			open: BaseOpen;
			sys: {
				department: BaseSysDepartment;
				log: BaseSysLog;
				menu: BaseSysMenu;
				param: BaseSysParam;
				role: BaseSysRole;
				user: BaseSysUser;
			};
		};
		community: {
			comment: CommunityComment;
			post: CommunityPost;
			report: CommunityReport;
			topic: CommunityTopic;
		};
		demo: { goods: DemoGoods; tenant: DemoTenant };
		dict: { info: DictInfo; type: DictType };
		food: {
			booking: FoodBooking;
			dish: FoodDish;
			product: FoodProduct;
			product_category: FoodProduct_category;
			restaurant: FoodRestaurant;
			restaurant_review: FoodRestaurant_review;
			time_slot: FoodTime_slot;
		};
		hotel: {
			booking: HotelBooking;
			check_in_notice: HotelCheck_in_notice;
			house: HotelHouse;
			review: HotelReview;
			room_calendar: HotelRoom_calendar;
			room_type: HotelRoom_type;
		};
		message: Message;
		order: { order: OrderOrder };
		plugin: { info: PluginInfo };
		recycle: { data: RecycleData };
		shop: {
			category: ShopCategory;
			goods: ShopGoods;
			goods_image: ShopGoods_image;
			goods_sku: ShopGoods_sku;
			order: ShopOrder;
			review: ShopReview;
		};
		space: { info: SpaceInfo; type: SpaceType };
		task: { info: TaskInfo };
		tour: {
			eTicket: TourETicket;
			itinerary: TourItinerary;
			route: TourRoute;
			scenicSpot: TourScenicSpot;
			ticketOrder: TourTicketOrder;
			ticketType: TourTicketType;
		};
		user: { address: UserAddress; info: UserInfo };
	};
}
