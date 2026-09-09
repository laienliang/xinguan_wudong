<template>
	<cl-crud ref="Crud">
		<cl-row>
			<cl-refresh-btn />
			<cl-multi-delete-btn />
			<cl-flex1 />
			<cl-search-key :placeholder="'搜索游记标题或内容'" />
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
	name: 'community-post'
});

import { useTable, useUpsert, useCrud } from '@cool-vue/crud';
import { useCool } from '/@/cool';
import { ElMessage, ElMessageBox } from 'element-plus';

const { service } = useCool();

// cl-crud 配置
const Crud = useCrud(
	{
		service: service.community.post
	},
	app => {
		app.refresh();
	}
);

// 审核游记
async function reviewPost(id: number, status: number) {
	const statusText = status === 1 ? '通过' : '下架';
	await ElMessageBox.confirm(`确定要${statusText}该游记吗？`, '提示', {
		type: 'warning'
	});

	await service.community.post.review(id, { status });
	ElMessage.success(`${statusText}成功`);
	Crud.value.refresh();
}

// cl-table 配置
const Table = useTable({
	columns: [
		{
			type: 'selection',
			width: 60
		},
		{
			prop: 'title',
			label: '标题',
			minWidth: 200
		},
		{
			prop: 'userId',
			label: '用户ID',
			width: 100
		},
		{
			prop: 'location',
			label: '地点',
			width: 150
		},
		{
			prop: 'likeCount',
			label: '点赞数',
			width: 100
		},
		{
			prop: 'commentCount',
			label: '评论数',
			width: 100
		},
		{
			prop: 'viewCount',
			label: '浏览数',
			width: 100
		},
		{
			prop: 'status',
			label: '状态',
			width: 120,
			dict: [
				{ label: '审核中', value: 0, type: 'warning' },
				{ label: '正常', value: 1, type: 'success' },
				{ label: '已下架', value: 2, type: 'danger' }
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
			width: 250,
			operate: [
				{
					label: '通过',
					type: 'success',
					hidden: ({ scope }) => scope.row.status !== 0,
					onClick: ({ scope }) => reviewPost(scope.row.id, 1)
				},
				{
					label: '下架',
					type: 'danger',
					hidden: ({ scope }) => scope.row.status === 2,
					onClick: ({ scope }) => reviewPost(scope.row.id, 2)
				}
			]
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
			label: '标题',
			span: 24,
			required: true,
			component: {
				name: 'el-input',
				props: {
					placeholder: '请输入标题'
				}
			}
		},
		{
			prop: 'content',
			label: '内容',
			span: 24,
			required: true,
			component: {
				name: 'el-input',
				props: {
					type: 'textarea',
					rows: 6,
					placeholder: '请输入内容'
				}
			}
		},
		{
			prop: 'location',
			label: '地点',
			span: 12,
			component: {
				name: 'el-input',
				props: {
					placeholder: '请输入地点'
				}
			}
		},
		{
			prop: 'status',
			label: '状态',
			value: 0,
			span: 12,
			component: {
				name: 'el-radio-group',
				options: [
					{ label: '审核中', value: 0 },
					{ label: '正常', value: 1 },
					{ label: '已下架', value: 2 }
				]
			}
		},
		{
			prop: 'images',
			label: '图片（最多9张）',
			span: 24,
			component: {
				name: 'cl-upload',
				props: {
					text: '选择图片',
					accept: 'image/*',
					multiple: true,
					limit: 9
				}
			}
		}
	]
});
</script>
