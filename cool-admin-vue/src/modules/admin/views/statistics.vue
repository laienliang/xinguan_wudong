<template>
	<div class="statistics-container">
		<el-row :gutter="20">
			<!-- 销售额统计 -->
			<el-col :span="8">
				<el-card shadow="hover">
					<template #header>
						<div class="card-header">
							<span>总销售额</span>
						</div>
					</template>
					<div class="stat-value">¥{{ stats.totalSales.toFixed(2) }}</div>
					<div class="stat-desc">总订单数：{{ stats.totalOrders }}</div>
				</el-card>
			</el-col>

			<!-- 按模块统计 -->
			<el-col :span="16">
				<el-card shadow="hover">
					<template #header>
						<div class="card-header">
							<span>各模块销售统计</span>
						</div>
					</template>
					<el-table :data="stats.ordersByType" style="width: 100%">
						<el-table-column label="模块" prop="type" width="150">
							<template #default="{ row }">
								<el-tag :type="getModuleType(row.type)">
									{{ getModuleName(row.type) }}
								</el-tag>
							</template>
						</el-table-column>
						<el-table-column label="订单数" prop="count" width="120" />
						<el-table-column label="销售额" prop="amount">
							<template #default="{ row }">
								¥{{ row.amount.toFixed(2) }}
							</template>
						</el-table-column>
					</el-table>
				</el-card>
			</el-col>
		</el-row>

		<el-row :gutter="20" style="margin-top: 20px">
			<!-- 订单趋势图 -->
			<el-col :span="24">
				<el-card shadow="hover">
					<template #header>
						<div class="card-header">
							<span>最近7天订单趋势</span>
						</div>
					</template>
					<div ref="chartRef" style="width: 100%; height: 400px"></div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script lang="ts" name="admin-statistics" setup>
import { onMounted, reactive, ref } from 'vue';
import { useCool } from '/@/cool';
import * as echarts from 'echarts';

const { service } = useCool();

const chartRef = ref();
const stats = reactive({
	totalOrders: 0,
	totalSales: 0,
	ordersByType: []
});

const trendData = ref([]);

// 获取模块名称
const getModuleName = (type: number) => {
	const names = {
		1: '商品订单',
		2: '餐位预订',
		3: '住宿预订',
		4: '门票订单',
		5: '线路订单'
	};
	return names[type] || '未知';
};

// 获取模块类型
const getModuleType = (type: number) => {
	const types = {
		1: 'primary',
		2: 'success',
		3: 'warning',
		4: 'danger',
		5: 'info'
	};
	return types[type] || '';
};

// 加载销售统计数据
const loadSalesStats = async () => {
	try {
		const res = await service.admin.statistics.salesStats();
		Object.assign(stats, res);
	} catch (error) {
		console.error('加载销售统计失败', error);
	}
};

// 加载订单趋势数据
const loadOrderTrend = async () => {
	try {
		const res = await service.admin.statistics.orderTrend();
		trendData.value = res;
		renderChart();
	} catch (error) {
		console.error('加载订单趋势失败', error);
	}
};

// 渲染图表
const renderChart = () => {
	if (!chartRef.value) return;

	const chart = echarts.init(chartRef.value);
	const dates = trendData.value.map((item: any) => item.date);
	const counts = trendData.value.map((item: any) => item.count);
	const amounts = trendData.value.map((item: any) => item.amount);

	const option = {
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			data: ['订单数', '销售额']
		},
		xAxis: {
			type: 'category',
			data: dates
		},
		yAxis: [
			{
				type: 'value',
				name: '订单数',
				position: 'left'
			},
			{
				type: 'value',
				name: '销售额',
				position: 'right'
			}
		],
		series: [
			{
				name: '订单数',
				type: 'line',
				data: counts,
				yAxisIndex: 0,
				smooth: true
			},
			{
				name: '销售额',
				type: 'bar',
				data: amounts,
				yAxisIndex: 1
			}
		]
	};

	chart.setOption(option);
};

onMounted(() => {
	loadSalesStats();
	loadOrderTrend();
});
</script>

<style scoped>
.statistics-container {
	padding: 20px;
}

.card-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-weight: bold;
}

.stat-value {
	font-size: 32px;
	font-weight: bold;
	color: #409eff;
	margin-bottom: 10px;
}

.stat-desc {
	font-size: 14px;
	color: #909399;
}
</style>
