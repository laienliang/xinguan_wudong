<template>
	<cl-crud ref="Crud">
		<cl-row>
			<cl-refresh-btn />
			<cl-add-btn />
			<cl-multi-delete-btn />
			<cl-flex1 />
			<cl-search-key :placeholder="'搜索景区名称'" />
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
	name: 'tour-scenic-spot'
});

import { useTable, useUpsert, useCrud } from '@cool-vue/crud';
import { useCool } from '/@/cool';

const { service } = useCool();

// cl-crud 配置
const Crud = useCrud(
	{
		service: service.tour.scenicSpot
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
			label: '景区名称',
			minWidth: 150
		},
		{
			prop: 'address',
			label: '地址',
			minWidth: 200
		},
		{
			prop: 'openingHours',
			label: '开放时间',
			width: 150
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
		width: '800px'
	},
	items: [
		{
			prop: 'name',
			label: '景区名称',
			span: 12,
			required: true,
			component: {
				name: 'el-input',
				props: {
					placeholder: '请输入景区名称'
				}
			}
		},
		{
			prop: 'address',
			label: '地址',
			span: 12,
			required: true,
			component: {
				name: 'el-input',
				props: {
					placeholder: '请输入地址'
				}
			}
		},
		{
			prop: 'longitude',
			label: '经度',
			span: 12,
			required: true,
			component: {
				name: 'el-input-number',
				props: {
					placeholder: '请输入经度',
					precision: 6
				}
			}
		},
		{
			prop: 'latitude',
			label: '纬度',
			span: 12,
			required: true,
			component: {
				name: 'el-input-number',
				props: {
					placeholder: '请输入纬度',
					precision: 6
				}
			}
		},
		{
			prop: 'openingHours',
			label: '开放时间',
			span: 12,
			component: {
				name: 'el-input',
				props: {
					placeholder: '如：08:00-18:00'
				}
			}
		},
		{
			prop: 'mainImage',
			label: '主图',
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
			prop: 'intro',
			label: '景区介绍',
			span: 24,
			component: {
				name: 'el-input',
				props: {
					type: 'textarea',
					rows: 4,
					placeholder: '请输入景区介绍'
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
