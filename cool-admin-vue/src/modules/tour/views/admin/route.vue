<template>
	<cl-crud ref="Crud">
		<cl-row>
			<cl-refresh-btn />
			<cl-add-btn />
			<cl-multi-delete-btn />
			<cl-flex1 />
			<cl-search-key :placeholder="'搜索路线标题'" />
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
	name: 'tour-route'
});

import { useTable, useUpsert, useCrud } from '@cool-vue/crud';
import { useCool } from '/@/cool';

const { service } = useCool();

// cl-crud 配置
const Crud = useCrud(
	{
		service: service.tour.route
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
			prop: 'title',
			label: '路线标题',
			minWidth: 200
		},
		{
			prop: 'days',
			label: '天数',
			width: 80
		},
		{
			prop: 'price',
			label: '价格',
			width: 100
		},
		{
			prop: 'departure',
			label: '出发地',
			width: 120
		},
		{
			prop: 'destination',
			label: '目的地',
			width: 120
		},
		{
			prop: 'status',
			label: '状态',
			width: 100,
			dict: [
				{ label: '下架', value: 0, type: 'danger' },
				{ label: '上架', value: 1, type: 'success' }
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
		width: '900px'
	},
	items: [
		{
			prop: 'title',
			label: '路线标题',
			span: 24,
			required: true,
			component: {
				name: 'el-input',
				props: {
					placeholder: '请输入路线标题'
				}
			}
		},
		{
			prop: 'days',
			label: '行程天数',
			span: 8,
			required: true,
			component: {
				name: 'el-input-number',
				props: {
					min: 1
				}
			}
		},
		{
			prop: 'price',
			label: '价格',
			span: 8,
			required: true,
			component: {
				name: 'el-input-number',
				props: {
					min: 0,
					precision: 2
				}
			}
		},
		{
			prop: 'departure',
			label: '出发地',
			span: 12,
			required: true,
			component: {
				name: 'el-input',
				props: {
					placeholder: '请输入出发地'
				}
			}
		},
		{
			prop: 'destination',
			label: '目的地',
			span: 12,
			required: true,
			component: {
				name: 'el-input',
				props: {
					placeholder: '请输入目的地'
				}
			}
		},
		{
			prop: 'accommodation',
			label: '住宿标准',
			span: 12,
			component: {
				name: 'el-input',
				props: {
					placeholder: '请输入住宿标准'
				}
			}
		},
		{
			prop: 'catering',
			label: '餐饮标准',
			span: 12,
			component: {
				name: 'el-input',
				props: {
					placeholder: '请输入餐饮标准'
				}
			}
		},
		{
			prop: 'mainImage',
			label: '主图',
			span: 24,
			component: {
				name: 'cl-upload',
				props: {
					text: '选择图片',
					accept: 'image/*'
				}
			}
		},
		{
			prop: 'intro',
			label: '路线介绍',
			span: 24,
			component: {
				name: 'el-input',
				props: {
					type: 'textarea',
					rows: 4,
					placeholder: '请输入路线介绍'
				}
			}
		},
		{
			prop: 'notice',
			label: '注意事项',
			span: 24,
			component: {
				name: 'el-input',
				props: {
					type: 'textarea',
					rows: 3,
					placeholder: '请输入注意事项'
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
					{ label: '下架', value: 0 },
					{ label: '上架', value: 1 }
				]
			}
		}
	]
});
</script>
