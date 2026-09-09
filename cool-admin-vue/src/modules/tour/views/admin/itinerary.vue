<template>
	<cl-crud ref="Crud">
		<cl-row>
			<cl-refresh-btn />
			<cl-add-btn />
			<cl-multi-delete-btn />
			<cl-flex1 />
			<cl-search-key :placeholder="'搜索行程标题'" />
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
	name: 'tour-itinerary'
});

import { useTable, useUpsert, useCrud } from '@cool-vue/crud';
import { useCool } from '/@/cool';

const { service } = useCool();

// cl-crud 配置
const Crud = useCrud(
	{
		service: service.tour.itinerary
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
			prop: 'routeId',
			label: '路线ID',
			width: 100
		},
		{
			prop: 'dayNumber',
			label: '第几天',
			width: 100
		},
		{
			prop: 'title',
			label: '标题',
			minWidth: 200
		},
		{
			prop: 'meals',
			label: '用餐安排',
			width: 120
		},
		{
			prop: 'accommodation',
			label: '住宿安排',
			width: 120
		},
		{
			prop: 'transportation',
			label: '交通方式',
			width: 120
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
		width: '800px'
	},
	items: [
		{
			prop: 'routeId',
			label: '路线ID',
			span: 12,
			required: true,
			component: {
				name: 'el-input',
				props: {
					placeholder: '请输入路线ID'
				}
			}
		},
		{
			prop: 'dayNumber',
			label: '第几天',
			span: 12,
			required: true,
			component: {
				name: 'el-input-number',
				props: {
					min: 1
				}
			}
		},
		{
			prop: 'title',
			label: '标题',
			span: 24,
			required: true,
			component: {
				name: 'el-input',
				props: {
					placeholder: '请输入标题'
				}
			}
		},
		{
			prop: 'description',
			label: '行程描述',
			span: 24,
			component: {
				name: 'el-input',
				props: {
					type: 'textarea',
					rows: 4,
					placeholder: '请输入行程描述'
				}
			}
		},
		{
			prop: 'meals',
			label: '用餐安排',
			span: 8,
			component: {
				name: 'el-input',
				props: {
					placeholder: '如：早中晚餐'
				}
			}
		},
		{
			prop: 'accommodation',
			label: '住宿安排',
			span: 8,
			component: {
				name: 'el-input',
				props: {
					placeholder: '如：四星酒店'
				}
			}
		},
		{
			prop: 'transportation',
			label: '交通方式',
			span: 8,
			component: {
				name: 'el-input',
				props: {
					placeholder: '如：大巴'
				}
			}
		}
	]
});
</script>
