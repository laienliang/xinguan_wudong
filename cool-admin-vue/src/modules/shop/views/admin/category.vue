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
			<cl-search-key :placeholder="'搜索分类名称'" />
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
	name: 'shop-category'
});

import { useTable, useUpsert, useCrud } from '@cool-vue/crud';
import { useCool } from '/@/cool';

const { service } = useCool();

// cl-crud 配置
const Crud = useCrud({
	service: service.shop.category
});

// cl-table 配置（树形表格）
const Table = useTable({
	columns: [
		{
			type: 'selection',
			width: 60
		},
		{
			prop: 'name',
			label: '分类名称',
			minWidth: 200
		},
		{
			prop: 'icon',
			label: '图标',
			width: 100,
			component: {
				name: 'cl-image',
				props: {
					size: 50
				}
			}
		},
		{
			prop: 'sort',
			label: '排序',
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
			prop: 'parentId',
			label: '父级分类',
			span: 24,
			value: null,
			component: {
				name: 'el-input-number',
				props: {
					placeholder: '请输入父级分类ID，留空为顶级分类',
					min: 0
				}
			}
		},
		{
			prop: 'name',
			label: '分类名称',
			span: 24,
			required: true,
			component: {
				name: 'el-input',
				props: {
					placeholder: '请输入分类名称'
				}
			}
		},
		{
			prop: 'icon',
			label: '分类图标',
			span: 24,
			component: {
				name: 'cl-upload',
				props: {
					type: 'image',
					text: '选择图标'
				}
			}
		},
		{
			prop: 'sort',
			label: '排序',
			span: 24,
			value: 0,
			component: {
				name: 'el-input-number',
				props: {
					min: 0,
					placeholder: '数字越小越靠前'
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
