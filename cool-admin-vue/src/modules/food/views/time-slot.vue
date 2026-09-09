<template>
	<cl-crud ref="Crud">
		<cl-row>
			<cl-refresh-btn />
			<cl-add-btn />
			<cl-multi-delete-btn />
			<cl-flex1 />
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
	name: 'food-time-slot'
});

import { useTable, useUpsert, useCrud } from '@cool-vue/crud';
import { useCool } from '/@/cool';

const { service } = useCool();

// cl-crud 配置
const Crud = useCrud(
	{
		service: service.food.timeSlot
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
			prop: 'name',
			label: '时段名称',
			minWidth: 150
		},
		{
			prop: 'startTime',
			label: '开始时间',
			width: 120
		},
		{
			prop: 'endTime',
			label: '结束时间',
			width: 120
		},
		{
			prop: 'maxPeople',
			label: '最大预订人数',
			width: 120
		},
		{
			prop: 'status',
			label: '状态',
			width: 100,
			dict: [
				{ label: '禁用', value: 0, type: 'danger' },
				{ label: '启用', value: 1, type: 'success' }
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
			prop: 'restaurantId',
			label: '餐厅',
			span: 24,
			required: true,
			component: {
				name: 'el-input',
				props: {
					placeholder: '请输入餐厅ID'
				}
			}
		},
		{
			prop: 'name',
			label: '时段名称',
			span: 24,
			required: true,
			component: {
				name: 'el-input',
				props: {
					placeholder: '如：午餐 11:30-13:30'
				}
			}
		},
		{
			prop: 'startTime',
			label: '开始时间',
			span: 12,
			required: true,
			component: {
				name: 'el-time-picker',
				props: {
					format: 'HH:mm:ss',
					valueFormat: 'HH:mm:ss',
					placeholder: '请选择开始时间'
				}
			}
		},
		{
			prop: 'endTime',
			label: '结束时间',
			span: 12,
			required: true,
			component: {
				name: 'el-time-picker',
				props: {
					format: 'HH:mm:ss',
					valueFormat: 'HH:mm:ss',
					placeholder: '请选择结束时间'
				}
			}
		},
		{
			prop: 'maxPeople',
			label: '最大预订人数',
			span: 24,
			required: true,
			component: {
				name: 'el-input-number',
				props: {
					min: 0
				}
			}
		},
		{
			prop: 'status',
			label: '状态',
			value: 1,
			span: 24,
			component: {
				name: 'el-radio-group',
				options: [
					{ label: '禁用', value: 0 },
					{ label: '启用', value: 1 }
				]
			}
		}
	]
});
</script>
