<template>
	<cl-crud ref="Crud">
		<cl-row>
			<!-- 刷新按钮 -->
			<cl-refresh-btn />
			<!-- 新增按钮 -->
			<cl-add-btn />
			<!-- 删除按钮 -->
			<cl-multi-delete-btn />
			<cl-flex1 />
			<!-- 关键字搜索 -->
			<cl-search-key />
		</cl-row>

		<cl-row>
			<!-- 数据表格 -->
			<cl-table ref="Table" />
		</cl-row>

		<cl-row>
			<cl-flex1 />
			<!-- 分页控件 -->
			<cl-pagination />
		</cl-row>

		<!-- 新增、编辑 -->
		<cl-upsert ref="Upsert" />
	</cl-crud>
</template>

<script lang="ts" name="admin-banner" setup>
import { useCrud, useTable, useUpsert } from '@cool-vue/crud';
import { useCool } from '/@/cool';

const { service } = useCool();

// cl-upsert 配置
const Upsert = useUpsert({
	items: [
		{
			label: '标题',
			prop: 'title',
			component: {
				name: 'el-input',
				props: {
					placeholder: '请输入轮播图标题'
				}
			},
			required: true
		},
		{
			label: '图片',
			prop: 'imageUrl',
			component: {
				name: 'cl-upload',
				props: {
					type: 'image'
				}
			},
			required: true
		},
		{
			label: '跳转链接',
			prop: 'linkUrl',
			component: {
				name: 'el-input',
				props: {
					placeholder: '请输入跳转链接'
				}
			}
		},
		{
			label: '排序',
			prop: 'sort',
			value: 0,
			component: {
				name: 'el-input-number',
				props: {
					min: 0,
					placeholder: '请输入排序值'
				}
			}
		},
		{
			label: '状态',
			prop: 'status',
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

// cl-table 配置
const Table = useTable({
	columns: [
		{ type: 'selection' },
		{ label: 'ID', prop: 'id', minWidth: 80 },
		{ label: '标题', prop: 'title', minWidth: 150 },
		{
			label: '图片',
			prop: 'imageUrl',
			minWidth: 120,
			component: {
				name: 'cl-image',
				props: {
					size: 60
				}
			}
		},
		{ label: '跳转链接', prop: 'linkUrl', minWidth: 200, showOverflowTooltip: true },
		{ label: '排序', prop: 'sort', minWidth: 80 },
		{
			label: '状态',
			prop: 'status',
			minWidth: 100,
			dict: [
				{ label: '下架', value: 0, type: 'info' },
				{ label: '上架', value: 1, type: 'success' }
			]
		},
		{ label: '创建时间', prop: 'createTime', minWidth: 160 },
		{ type: 'op', buttons: ['edit', 'delete'], width: 200 }
	]
});

// cl-crud 配置
useCrud(
	{
		service: service.admin.platformBanner
	},
	(app) => {
		app.refresh();
	}
);
</script>
