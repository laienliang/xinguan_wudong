<template>
	<cl-crud ref="Crud">
		<cl-row>
			<cl-refresh-btn />
			<cl-add-btn />
			<cl-multi-delete-btn />
			<cl-flex1 />
			<cl-search-key :placeholder="'搜索票种名称'" />
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
	name: 'tour-ticket-type'
});

import { useTable, useUpsert, useCrud } from '@cool-vue/crud';
import { useCool } from '/@/cool';

const { service } = useCool();

// cl-crud 配置
const Crud = useCrud(
	{
		service: service.tour.ticketType
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
			label: '票种名称',
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
			prop: 'validityDays',
			label: '有效天数',
			width: 100
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
		width: '600px'
	},
	items: [
		{
			prop: 'scenicSpotId',
			label: '景区',
			span: 24,
			required: true,
			component: {
				name: 'el-input',
				props: {
					placeholder: '请输入景区ID'
				}
			}
		},
		{
			prop: 'name',
			label: '票种名称',
			span: 24,
			required: true,
			component: {
				name: 'el-input',
				props: {
					placeholder: '如：成人票、儿童票、学生票'
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
					precision: 2
				}
			}
		},
		{
			prop: 'stock',
			label: '库存',
			span: 12,
			required: true,
			component: {
				name: 'el-input-number',
				props: {
					min: -1,
					placeholder: '-1表示无限制'
				}
			}
		},
		{
			prop: 'validityDays',
			label: '有效天数',
			span: 12,
			component: {
				name: 'el-input-number',
				props: {
					min: 1
				}
			}
		},
		{
			prop: 'intro',
			label: '说明',
			span: 24,
			component: {
				name: 'el-input',
				props: {
					type: 'textarea',
					rows: 3,
					placeholder: '请输入票种说明'
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
