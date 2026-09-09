<template>
	<cl-crud ref="Crud">
		<cl-row>
			<cl-refresh-btn />
			<cl-flex1 />
			<cl-search-key :placeholder="'搜索举报原因'" />
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
	name: 'community-report'
});

import { useTable, useUpsert, useCrud } from '@cool-vue/crud';
import { useCool } from '/@/cool';
import { ElMessage, ElMessageBox } from 'element-plus';

const { service } = useCool();

// cl-crud 配置
const Crud = useCrud(
	{
		service: service.community.report
	},
	app => {
		app.refresh();
	}
);

// 处理举报
async function handleReport(id: number, status: number) {
	const { value: handleResult } = await ElMessageBox.prompt('请输入处理结果', '处理举报', {
		confirmButtonText: '确定',
		cancelButtonText: '取消',
		inputType: 'textarea',
		inputValidator: (value) => {
			if (!value) {
				return '请输入处理结果';
			}
			return true;
		}
	});

	await service.community.report.handle(id, { status, handleResult });
	ElMessage.success('处理成功');
	Crud.value.refresh();
}

// cl-table 配置
const Table = useTable({
	columns: [
		{
			prop: 'userId',
			label: '举报用户ID',
			width: 120
		},
		{
			prop: 'targetType',
			label: '举报类型',
			width: 100,
			dict: [
				{ label: '游记', value: 1 },
				{ label: '评论', value: 2 }
			]
		},
		{
			prop: 'targetId',
			label: '目标ID',
			width: 100
		},
		{
			prop: 'reason',
			label: '举报原因',
			minWidth: 200,
			showOverflowTooltip: true
		},
		{
			prop: 'status',
			label: '状态',
			width: 100,
			dict: [
				{ label: '待处理', value: 1, type: 'warning' },
				{ label: '已处理', value: 2, type: 'success' },
				{ label: '已驳回', value: 3, type: 'info' }
			]
		},
		{
			prop: 'handleResult',
			label: '处理结果',
			minWidth: 200,
			showOverflowTooltip: true
		},
		{
			prop: 'handleTime',
			label: '处理时间',
			width: 160
		},
		{
			prop: 'createTime',
			label: '举报时间',
			sortable: 'desc',
			width: 160
		},
		{
			type: 'op',
			buttons: ['info'],
			width: 200,
			operate: [
				{
					label: '处理',
					type: 'success',
					hidden: ({ scope }) => scope.row.status !== 1,
					onClick: ({ scope }) => handleReport(scope.row.id, 2)
				},
				{
					label: '驳回',
					type: 'warning',
					hidden: ({ scope }) => scope.row.status !== 1,
					onClick: ({ scope }) => handleReport(scope.row.id, 3)
				}
			]
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
			prop: 'userId',
			label: '举报用户ID',
			span: 12,
			component: {
				name: 'el-input',
				props: {
					disabled: true
				}
			}
		},
		{
			prop: 'targetType',
			label: '举报类型',
			span: 12,
			component: {
				name: 'el-radio-group',
				props: {
					disabled: true
				},
				options: [
					{ label: '游记', value: 1 },
					{ label: '评论', value: 2 }
				]
			}
		},
		{
			prop: 'targetId',
			label: '目标ID',
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
					{ label: '待处理', value: 1 },
					{ label: '已处理', value: 2 },
					{ label: '已驳回', value: 3 }
				]
			}
		},
		{
			prop: 'reason',
			label: '举报原因',
			span: 24,
			component: {
				name: 'el-input',
				props: {
					type: 'textarea',
					rows: 3,
					disabled: true
				}
			}
		},
		{
			prop: 'handleResult',
			label: '处理结果',
			span: 24,
			component: {
				name: 'el-input',
				props: {
					type: 'textarea',
					rows: 3,
					disabled: true
				}
			}
		},
		{
			prop: 'handleTime',
			label: '处理时间',
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
			label: '举报时间',
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
