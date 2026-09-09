<template>
	<cl-crud ref="Crud">
		<cl-row>
			<cl-refresh-btn />
			<cl-multi-delete-btn />
			<cl-flex1 />
			<cl-search-key :placeholder="'搜索评论内容'" />
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
	name: 'community-comment'
});

import { useTable, useUpsert, useCrud } from '@cool-vue/crud';
import { useCool } from '/@/cool';

const { service } = useCool();

// cl-crud 配置
const Crud = useCrud(
	{
		service: service.community.comment
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
			prop: 'postId',
			label: '游记ID',
			width: 100
		},
		{
			prop: 'userId',
			label: '用户ID',
			width: 100
		},
		{
			prop: 'content',
			label: '评论内容',
			minWidth: 300,
			showOverflowTooltip: true
		},
		{
			prop: 'parentId',
			label: '父评论ID',
			width: 120
		},
		{
			prop: 'likeCount',
			label: '点赞数',
			width: 100
		},
		{
			prop: 'status',
			label: '状态',
			width: 100,
			dict: [
				{ label: '已删除', value: 0, type: 'danger' },
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
			buttons: ['delete'],
			width: 100
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
			prop: 'postId',
			label: '游记ID',
			span: 12,
			component: {
				name: 'el-input',
				props: {
					disabled: true
				}
			}
		},
		{
			prop: 'userId',
			label: '用户ID',
			span: 12,
			component: {
				name: 'el-input',
				props: {
					disabled: true
				}
			}
		},
		{
			prop: 'parentId',
			label: '父评论ID',
			span: 12,
			component: {
				name: 'el-input',
				props: {
					disabled: true
				}
			}
		},
		{
			prop: 'status',
			label: '状态',
			span: 12,
			component: {
				name: 'el-radio-group',
				props: {
					disabled: true
				},
				options: [
					{ label: '已删除', value: 0 },
					{ label: '正常', value: 1 }
				]
			}
		},
		{
			prop: 'content',
			label: '评论内容',
			span: 24,
			component: {
				name: 'el-input',
				props: {
					type: 'textarea',
					rows: 6,
					disabled: true
				}
			}
		},
		{
			prop: 'likeCount',
			label: '点赞数',
			span: 12,
			component: {
				name: 'el-input',
				props: {
					disabled: true
				}
			}
		},
		{
			prop: 'createTime',
			label: '创建时间',
			span: 12,
			component: {
				name: 'el-input',
				props: {
					disabled: true
				}
			}
		}
	]
});
</script>
