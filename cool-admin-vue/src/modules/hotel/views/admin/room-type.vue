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
			<cl-search-key :placeholder="'搜索房型名称'" />
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
	name: 'hotel-room-type'
});

import { useTable, useUpsert, useCrud } from '@cool-vue/crud';
import { useCool } from '/@/cool';

const { service } = useCool();

// cl-crud
const Crud = useCrud({
	service: service.hotel.roomType
});

// cl-table
const Table = useTable({
	columns: [
		{
			type: 'selection',
			width: 60
		},
		{
			prop: 'id',
			label: 'ID',
			width: 80
		},
		{
			prop: 'houseId',
			label: '民宿ID',
			width: 100
		},
		{
			prop: 'mainImage',
			label: '主图',
			component: {
				name: 'cl-image',
				props: {
					size: 60
				}
			}
		},
		{
			prop: 'name',
			label: '房型名称',
			minWidth: 150
		},
		{
			prop: 'bedType',
			label: '床型',
			width: 120
		},
		{
			prop: 'area',
			label: '面积(㎡)',
			width: 100
		},
		{
			prop: 'maxPeople',
			label: '容纳人数',
			width: 100
		},
		{
			prop: 'price',
			label: '价格',
			width: 120
		},
		{
			prop: 'totalRooms',
			label: '房间总数',
			width: 100
		},
		{
			prop: 'status',
			label: '状态',
			width: 120,
			dict: [
				{ label: '下架', value: 0, type: 'danger' },
				{ label: '上架', value: 1, type: 'success' }
			]
		},
		{
			prop: 'createTime',
			label: '创建时间',
			width: 160
		},
		{
			type: 'op',
			buttons: ['edit', 'delete']
		}
	]
});

// cl-upsert
const Upsert = useUpsert({
	items: [
		{
			prop: 'houseId',
			label: '民宿ID',
			required: true,
			component: {
				name: 'el-input-number',
				props: {
					placeholder: '请输入民宿ID'
				}
			}
		},
		{
			prop: 'name',
			label: '房型名称',
			required: true,
			component: {
				name: 'el-input',
				props: {
					placeholder: '请输入房型名称'
				}
			}
		},
		{
			prop: 'bedType',
			label: '床型',
			component: {
				name: 'el-input',
				props: {
					placeholder: '如：大床/双床'
				}
			}
		},
		{
			prop: 'area',
			label: '面积(㎡)',
			component: {
				name: 'el-input-number',
				props: {
					min: 0
				}
			}
		},
		{
			prop: 'maxPeople',
			label: '容纳人数',
			value: 2,
			component: {
				name: 'el-input-number',
				props: {
					min: 1
				}
			}
		},
		{
			prop: 'price',
			label: '价格',
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
			prop: 'totalRooms',
			label: '房间总数',
			value: 1,
			component: {
				name: 'el-input-number',
				props: {
					min: 1
				}
			}
		},
		{
			prop: 'mainImage',
			label: '主图',
			component: {
				name: 'cl-upload',
				props: {
					type: 'image'
				}
			}
		},
		{
			prop: 'images',
			label: '图片集',
			component: {
				name: 'cl-upload',
				props: {
					type: 'image',
					multiple: true,
					limit: 9
				}
			}
		},
		{
			prop: 'facilities',
			label: '设施',
			component: {
				name: 'el-input',
				props: {
					type: 'textarea',
					rows: 3,
					placeholder: '多个设施用逗号分隔'
				}
			}
		},
		{
			prop: 'status',
			label: '状态',
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
</script>
