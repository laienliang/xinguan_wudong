<template>
	<cl-crud ref="Crud">
		<cl-row>
			<cl-refresh-btn />
			<cl-add-btn />
			<cl-multi-delete-btn />
			<cl-flex1 />
			<cl-search-key :placeholder="'搜索菜品名称'" />
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
	name: 'food-dish'
});

import { useTable, useUpsert, useCrud } from '@cool-vue/crud';
import { useCool } from '/@/cool';

const { service } = useCool();

// cl-crud 配置
const Crud = useCrud(
	{
		service: service.food.dish
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
			label: '菜品名称',
			minWidth: 150
		},
		{
			prop: 'price',
			label: '价格',
			width: 100
		},
		{
			prop: 'isSignature',
			label: '招牌菜',
			width: 100,
			dict: [
				{ label: '否', value: 0, type: 'info' },
				{ label: '是', value: 1, type: 'warning' }
			]
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
			label: '菜品名称',
			span: 24,
			required: true,
			component: {
				name: 'el-input',
				props: {
					placeholder: '请输入菜品名称'
				}
			}
		},
		{
			prop: 'price',
			label: '价格',
			span: 12,
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
			prop: 'isSignature',
			label: '是否招牌菜',
			value: 0,
			span: 12,
			component: {
				name: 'el-radio-group',
				options: [
					{ label: '否', value: 0 },
					{ label: '是', value: 1 }
				]
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
			label: '介绍',
			span: 24,
			component: {
				name: 'el-input',
				props: {
					type: 'textarea',
					rows: 3,
					placeholder: '请输入菜品介绍'
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
