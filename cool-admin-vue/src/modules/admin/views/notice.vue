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

<script lang="ts" name="admin-notice" setup>
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
					placeholder: '请输入公告标题'
				}
			},
			required: true
		},
		{
			label: '内容',
			prop: 'content',
			component: {
				name: 'el-input',
				props: {
					type: 'textarea',
					rows: 6,
					placeholder: '请输入公告内容'
				}
			},
			required: true
		},
		{
			label: '类型',
			prop: 'type',
			value: 1,
			component: {
				name: 'el-radio-group',
				options: [
					{ label: '系统公告', value: 1 },
					{ label: '活动公告', value: 2 }
				]
			},
			required: true
		},
		{
			label: '状态',
			prop: 'status',
			value: 1,
			component: {
				name: 'el-radio-group',
				options: [
					{ label: '下架', value: 0 },
					{ label: '发布', value: 1 }
				]
			}
		},
		{
			label: '发布时间',
			prop: 'publishTime',
			component: {
				name: 'el-date-picker',
				props: {
					type: 'datetime',
					placeholder: '请选择发布时间',
					valueFormat: 'YYYY-MM-DD HH:mm:ss'
				}
			}
		}
	]
});

// cl-table 配置
const Table = useTable({
	columns: [
		{ type: 'selection' },
		{ label: 'ID', prop: 'id', minWidth: 80 },
		{ label: '标题', prop: 'title', minWidth: 200 },
		{
			label: '类型',
			prop: 'type',
			minWidth: 100,
			dict: [
				{ label: '系统公告', value: 1, type: 'primary' },
				{ label: '活动公告', value: 2, type: 'success' }
			]
		},
		{
			label: '状态',
			prop: 'status',
			minWidth: 100,
			dict: [
				{ label: '下架', value: 0, type: 'info' },
				{ label: '发布', value: 1, type: 'success' }
			]
		},
		{ label: '发布时间', prop: 'publishTime', minWidth: 160 },
		{ label: '创建时间', prop: 'createTime', minWidth: 160 },
		{ type: 'op', buttons: ['edit', 'delete'], width: 200 }
	]
});

// cl-crud 配置
useCrud(
	{
		service: service.admin.platformNotice
	},
	(app) => {
		app.refresh();
	}
);
</script>
