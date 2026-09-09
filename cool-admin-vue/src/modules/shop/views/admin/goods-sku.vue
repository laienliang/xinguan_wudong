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
			<cl-search-key :placeholder="'搜索SKU名称'" />
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
	name: 'shop-goods-sku'
});

import { useTable, useUpsert, useCrud } from '@cool-vue/crud';
import { useCool } from '/@/cool';

const { service } = useCool();

// cl-crud 配置
const Crud = useCrud({
	service: service.shop.goodsSku
});

// cl-table 配置
const Table = useTable({
	columns: [
		{
			type: 'selection',
			width: 60
		},
		{
			prop: 'goodsId',
			label: '商品ID',
			width: 100
		},
		{
			prop: 'skuName',
			label: 'SKU名称',
			minWidth: 150
		},
		{
			prop: 'skuImage',
			label: 'SKU图片',
			width: 100,
			component: {
				name: 'cl-image',
				props: {
					size: 60
				}
			}
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
			prop: 'status',
			label: '状态',
			width: 120,
			dict: [
				{ label: '禁用', value: 0, type: 'danger' },
				{ label: '启用', value: 1, type: 'success' }
			]
		},
		{
			prop: 'createTime',
			label: '创建时间',
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
			prop: 'goodsId',
			label: '商品ID',
			span: 24,
			required: true,
			component: {
				name: 'el-input-number',
				props: {
					placeholder: '请输入商品ID',
					min: 1
				}
			}
		},
		{
			prop: 'skuName',
			label: 'SKU名称',
			span: 24,
			required: true,
			component: {
				name: 'el-input',
				props: {
					placeholder: '请输入SKU规格名称，如：红色-L'
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
					precision: 2,
					placeholder: 'SKU价格'
				}
			}
		},
		{
			prop: 'stock',
			label: '库存',
			span: 12,
			required: true,
			value: 0,
			component: {
				name: 'el-input-number',
				props: {
					min: 0,
					placeholder: 'SKU库存'
				}
			}
		},
		{
			prop: 'skuImage',
			label: 'SKU图片',
			span: 24,
			component: {
				name: 'cl-upload',
				props: {
					type: 'image',
					text: '选择SKU图片'
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
					{ label: '禁用', value: 0 },
					{ label: '启用', value: 1 }
				]
			}
		}
	]
});
</script>
