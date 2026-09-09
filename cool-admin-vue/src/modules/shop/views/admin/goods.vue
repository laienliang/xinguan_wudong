<template>
	<cl-crud ref="Crud">
		<cl-row>
			<!-- 刷新按钮 -->
			<cl-refresh-btn />
			<!-- 新增按钮 -->
			<cl-add-btn />
			<!-- 批量删除按钮 -->
			<cl-multi-delete-btn />
			<cl-flex1 />
			<cl-search-key :placeholder="'搜索商品标题'" />
		</cl-row>

		<cl-row>
			<cl-table ref="Table" />
		</cl-row>

		<cl-row>
			<cl-flex1 />
			<cl-pagination />
		</cl-row>

		<!-- 新增、编辑 -->
		<cl-upsert ref="Upsert" />
	</cl-crud>
</template>

<script lang="ts" setup>
defineOptions({
	name: 'shop-goods'
});

import { useTable, useUpsert, useCrud } from '@cool-vue/crud';
import { useCool } from '/@/cool';

const { service } = useCool();

// cl-crud 配置
const Crud = useCrud({
	service: service.shop.goods
});

// cl-table 配置
const Table = useTable({
	columns: [
		{
			type: 'selection',
			width: 60
		},
		{
			prop: 'mainImage',
			label: '主图',
			width: 100,
			component: {
				name: 'cl-image',
				props: {
					size: 60
				}
			}
		},
		{
			prop: 'title',
			label: '商品标题',
			minWidth: 200
		},
		{
			prop: 'subtitle',
			label: '副标题',
			minWidth: 150,
			showOverflowTooltip: true
		},
		{
			prop: 'price',
			label: '价格',
			width: 100
		},
		{
			prop: 'marketPrice',
			label: '市场价',
			width: 100
		},
		{
			prop: 'stock',
			label: '库存',
			width: 100
		},
		{
			prop: 'salesVolume',
			label: '销量',
			width: 100
		},
		{
			prop: 'status',
			label: '状态',
			width: 120,
			dict: [
				{ label: '下架', value: 0, type: 'danger' },
				{ label: '上架', value: 1, type: 'success' }
			]
		},
		{
			prop: 'createTime',
			label: '创建时间',
			width: 160,
			sortable: 'desc'
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
			label: '商品分类',
			span: 12,
			required: true,
			component: {
				name: 'el-input-number',
				props: {
					placeholder: '请输入分类ID',
					min: 1
				}
			}
		},
		{
			prop: 'merchantId',
			label: '商家ID',
			span: 12,
			component: {
				name: 'el-input-number',
				props: {
					placeholder: '请输入商家ID（可选）',
					min: 1
				}
			}
		},
		{
			prop: 'title',
			label: '商品标题',
			span: 24,
			required: true,
			component: {
				name: 'el-input',
				props: {
					placeholder: '请输入商品标题'
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
					precision: 2,
					placeholder: '售价'
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
					precision: 2,
					placeholder: '市场价'
				}
			}
		},
		{
			prop: 'stock',
			label: '库存',
			span: 8,
			required: true,
			value: 0,
			component: {
				name: 'el-input-number',
				props: {
					min: 0,
					placeholder: '库存数量'
				}
			}
		},
		{
			prop: 'mainImage',
			label: '商品主图',
			span: 24,
			required: true,
			component: {
				name: 'cl-upload',
				props: {
					type: 'image',
					text: '选择主图'
				}
			}
		},
		{
			prop: 'craftIntro',
			label: '工艺介绍',
			span: 24,
			component: {
				name: 'el-input',
				props: {
					type: 'textarea',
					rows: 3,
					placeholder: '请输入非遗工艺介绍'
				}
			}
		},
		{
			prop: 'detail',
			label: '商品详情',
			span: 24,
			component: {
				name: 'el-input',
				props: {
					type: 'textarea',
					rows: 5,
					placeholder: '请输入商品详情（支持富文本）'
				}
			}
		},
		{
			prop: 'status',
			label: '状态',
			span: 24,
			value: 1,
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
