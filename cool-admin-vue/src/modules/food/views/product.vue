<template>
	<cl-crud ref="Crud">
		<cl-row>
			<cl-refresh-btn />
			<cl-add-btn />
			<cl-multi-delete-btn />
			<cl-flex1 />
			<cl-search-key :placeholder="'搜索产品名称'" />
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
	name: 'food-product'
});

import { useTable, useUpsert, useCrud } from '@cool-vue/crud';
import { useCool } from '/@/cool';

const { service } = useCool();

// cl-crud 配置
const Crud = useCrud(
	{
		service: service.food.product
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
			label: '产品名称',
			minWidth: 150
		},
		{
			prop: 'price',
			label: '价格',
			width: 100
		},
		{
			prop: 'stock',
			label: '库存',
			width: 100
		},
		{
			prop: 'sales',
			label: '销量',
			width: 100
		},
		{
			prop: 'origin',
			label: '产地',
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
		width: '800px'
	},
	items: [
		{
			prop: 'categoryId',
			label: '分类',
			span: 12,
			required: true,
			component: {
				name: 'el-input-number',
				props: {
					placeholder: '请输入分类ID'
				}
			}
		},
		{
			prop: 'name',
			label: '产品名称',
			span: 12,
			required: true,
			component: {
				name: 'el-input',
				props: {
					placeholder: '请输入产品名称'
				}
			}
		},
		{
			prop: 'subtitle',
			label: '副标题',
			span: 24,
			component: {
				name: 'el-input',
				props: {
					placeholder: '请输入副标题'
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
			prop: 'marketPrice',
			label: '市场价',
			span: 8,
			component: {
				name: 'el-input-number',
				props: {
					min: 0,
					precision: 2
				}
			}
		},
		{
			prop: 'stock',
			label: '库存',
			span: 8,
			component: {
				name: 'el-input-number',
				props: {
					min: 0
				}
			}
		},
		{
			prop: 'origin',
			label: '产地',
			span: 8,
			component: {
				name: 'el-input',
				props: {
					placeholder: '请输入产地'
				}
			}
		},
		{
			prop: 'shelfLife',
			label: '保质期',
			span: 8,
			component: {
				name: 'el-input',
				props: {
					placeholder: '如：180天'
				}
			}
		},
		{
			prop: 'spec',
			label: '规格',
			span: 8,
			component: {
				name: 'el-input',
				props: {
					placeholder: '如：500g'
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
			prop: 'detail',
			label: '产品详情',
			span: 24,
			component: {
				name: 'el-input',
				props: {
					type: 'textarea',
					rows: 4,
					placeholder: '请输入产品详情'
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
