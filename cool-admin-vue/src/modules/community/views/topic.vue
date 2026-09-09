<template>
	<cl-crud ref="Crud">
		<cl-row>
			<cl-refresh-btn />
			<cl-add-btn />
			<cl-multi-delete-btn />
			<cl-flex1 />
			<cl-search-key :placeholder="'搜索话题名称'" />
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
	name: 'community-topic'
});

import { useTable, useUpsert, useCrud } from '@cool-vue/crud';
import { useCool } from '/@/cool';

const { service } = useCool();

// cl-crud 配置
const Crud = useCrud(
	{
		service: service.community.topic
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
			label: '话题名称',
			minWidth: 200
		},
		{
			prop: 'intro',
			label: '简介',
			minWidth: 250,
			showOverflowTooltip: true
		},
		{
			prop: 'followCount',
			label: '关注数',
			width: 100
		},
		{
			prop: 'postCount',
			label: '游记数',
			width: 100
		},
		{
			prop: 'isHot',
			label: '是否热门',
			width: 100,
			dict: [
				{ label: '否', value: 0, type: 'info' },
				{ label: '是', value: 1, type: 'danger' }
			]
		},
		{
			prop: 'status',
			label: '状态',
			width: 100,
			dict: [
				{ label: '禁用', value: 0, type: 'danger' },
				{ label: '正常', value: 1, type: 'success' }
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
		width: '700px'
	},
	items: [
		{
			prop: 'name',
			label: '话题名称',
			span: 12,
			required: true,
			component: {
				name: 'el-input',
				props: {
					placeholder: '请输入话题名称',
					maxlength: 50
				}
			}
		},
		{
			prop: 'isHot',
			label: '是否热门',
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
			prop: 'intro',
			label: '简介',
			span: 24,
			component: {
				name: 'el-input',
				props: {
					type: 'textarea',
					rows: 3,
					placeholder: '请输入简介',
					maxlength: 200
				}
			}
		},
		{
			prop: 'coverImage',
			label: '封面图',
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
			prop: 'status',
			label: '状态',
			value: 1,
			span: 24,
			component: {
				name: 'el-radio-group',
				options: [
					{ label: '禁用', value: 0 },
					{ label: '正常', value: 1 }
				]
			}
		}
	]
});
</script>
