<template>
	<cl-crud ref="Crud">
		<cl-row>
			<cl-refresh-btn />
			<cl-flex1 />
			<cl-search-key :placeholder="'搜索订单ID'" />
		</cl-row>

		<cl-row>
			<cl-table ref="Table" />
		</cl-row>

		<cl-row>
			<cl-flex1 />
			<cl-pagination />
		</cl-row>

		<cl-upsert ref="Upsert" />
	</cl-crud>
</template>

<script lang="ts" setup>
defineOptions({
	name: 'tour-ticket-order'
});

import { useTable, useUpsert, useCrud } from '@cool-vue/crud';
import { useCool } from '/@/cool';

const { service } = useCool();

// cl-crud 配置
const Crud = useCrud(
	{
		service: service.tour.ticketOrder
	},
	app => {
		app.refresh();
	}
);

// cl-table 配置
const Table = useTable({
	columns: [
		{
			type: 'selection',
			width: 60
		},
		{
			prop: 'orderId',
			label: '订单ID',
			width: 120
		},
		{
			prop: 'userId',
			label: '用户ID',
			width: 100
		},
		{
			prop: 'scenicSpotId',
			label: '景区ID',
			width: 100
		},
		{
			prop: 'ticketTypeId',
			label: '票种ID',
			width: 100
		},
		{
			prop: 'useDate',
			label: '使用日期',
			width: 120
		},
		{
			prop: 'quantity',
			label: '数量',
			width: 80
		},
		{
			prop: 'status',
			label: '状态',
			width: 100,
			dict: [
				{ label: '待使用', value: 1, type: 'primary' },
				{ label: '已使用', value: 2, type: 'success' },
				{ label: '已过期', value: 3, type: 'info' },
				{ label: '已退票', value: 4, type: 'danger' }
			]
		},
		{
			prop: 'createTime',
			label: '创建时间',
			sortable: 'desc',
			width: 160
		},
		{
			type: 'op',
			buttons: ['edit', 'delete'],
			width: 150
		}
	]
});

// cl-upsert 配置
const Upsert = useUpsert({
	dialog: {
		width: '600px'
	},
	items: [
		{
			prop: 'orderId',
			label: '订单ID',
			span: 24,
			component: {
				name: 'el-input',
				props: {
					disabled: true
				}
			}
		},
		{
			prop: 'status',
			label: '状态',
			span: 24,
			component: {
				name: 'el-radio-group',
				options: [
					{ label: '待使用', value: 1 },
					{ label: '已使用', value: 2 },
					{ label: '已过期', value: 3 },
					{ label: '已退票', value: 4 }
				]
			}
		}
	]
});
</script>
