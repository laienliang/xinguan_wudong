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
			<cl-search-key :placeholder="'搜索民宿名称、地址'" />
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
	name: 'hotel-house'
});

import { useTable, useUpsert, useCrud } from '@cool-vue/crud';
import { useCool } from '/@/cool';

const { service } = useCool();

// cl-crud
const Crud = useCrud({
	service: service.hotel.house
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
			label: '民宿名称',
			minWidth: 150
		},
		{
			prop: 'address',
			label: '地址',
			minWidth: 200
		},
		{
			prop: 'score',
			label: '评分',
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
			prop: 'name',
			label: '民宿名称',
			required: true,
			component: {
				name: 'el-input',
				props: {
					placeholder: '请输入民宿名称'
				}
			}
		},
		{
			prop: 'address',
			label: '地址',
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
			component: {
				name: 'el-input-number',
				props: {
					placeholder: '请输入经度'
				}
			}
		},
		{
			prop: 'latitude',
			label: '纬度',
			component: {
				name: 'el-input-number',
				props: {
					placeholder: '请输入纬度'
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
			prop: 'styleTags',
			label: '风格标签',
			component: {
				name: 'el-input',
				props: {
					placeholder: '多个标签用逗号分隔'
				}
			}
		},
		{
			prop: 'facilityTags',
			label: '设施标签',
			component: {
				name: 'el-input',
				props: {
					placeholder: '多个标签用逗号分隔'
				}
			}
		},
		{
			prop: 'intro',
			label: '介绍',
			component: {
				name: 'el-input',
				props: {
					type: 'textarea',
					rows: 4,
					placeholder: '请输入民宿介绍'
				}
			}
		},
		{
			prop: 'score',
			label: '评分',
			component: {
				name: 'el-input-number',
				props: {
					min: 0,
					max: 5,
					step: 0.1
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
