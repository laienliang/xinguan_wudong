<template>
	<cl-crud ref="Crud">
		<cl-row>
			<cl-refresh-btn />
			<cl-flex1 />
			<cl-search-key :placeholder="'搜索联系人'" />
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
	name: 'food-booking'
});

import { useTable, useUpsert, useCrud } from '@cool-vue/crud';
import { useCool } from '/@/cool';

const { service } = useCool();

// cl-crud 配置
const Crud = useCrud(
	{
		service: service.food.bookingOrder
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
			prop: 'contactName',
			label: '联系人',
			width: 100
		},
		{
			prop: 'contactPhone',
			label: '联系电话',
			width: 120
		},
		{
			prop: 'bookingDate',
			label: '预订日期',
			width: 120
		},
		{
			prop: 'peopleCount',
			label: '就餐人数',
			width: 100
		},
		{
			prop: 'status',
			label: '状态',
			width: 100,
			dict: [
				{ label: '待确认', value: 1, type: 'warning' },
				{ label: '已确认', value: 2, type: 'success' },
				{ label: '已完成', value: 3, type: 'info' },
				{ label: '已取消', value: 4, type: 'danger' }
			]
		},
		{
			prop: 'remark',
			label: '备注',
			minWidth: 150,
			showOverflowTooltip: true
		},
		{
			prop: 'createTime',
			label: '创建时间',
			sortable: 'desc',
			width: 160
		},
		{
			type: 'op',
			buttons: ['edit'],
			width: 100
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
			prop: 'contactName',
			label: '联系人',
			span: 12,
			component: {
				name: 'el-input',
				props: {
					disabled: true
				}
			}
		},
		{
			prop: 'contactPhone',
			label: '联系电话',
			span: 12,
			component: {
				name: 'el-input',
				props: {
					disabled: true
				}
			}
		},
		{
			prop: 'bookingDate',
			label: '预订日期',
			span: 12,
			component: {
				name: 'el-input',
				props: {
					disabled: true
				}
			}
		},
		{
			prop: 'peopleCount',
			label: '就餐人数',
			span: 12,
			component: {
				name: 'el-input-number',
				props: {
					disabled: true
				}
			}
		},
		{
			prop: 'remark',
			label: '备注',
			span: 24,
			component: {
				name: 'el-input',
				props: {
					type: 'textarea',
					rows: 3,
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
					{ label: '待确认', value: 1 },
					{ label: '已确认', value: 2 },
					{ label: '已完成', value: 3 },
					{ label: '已取消', value: 4 }
				]
			}
		}
	]
});
</script>
