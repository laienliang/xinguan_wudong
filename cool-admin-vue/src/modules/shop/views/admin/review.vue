<template>
	<cl-crud ref="Crud">
		<cl-row>
			<!-- 刷新按钮 -->
			<cl-refresh-btn />
			<cl-flex1 />
			<cl-search-key :placeholder="'搜索商品名称或用户'" />
		</cl-row>

		<cl-row>
			<cl-table ref="Table" />
		</cl-row>

		<cl-row>
			<cl-flex1 />
			<cl-pagination />
		</cl-row>

		<!-- 查看、回复 -->
		<cl-upsert ref="Upsert" />
	</cl-crud>
</template>

<script lang="ts" setup>
defineOptions({
	name: 'shop-review'
});

import { useTable, useUpsert, useCrud } from '@cool-vue/crud';
import { useCool } from '/@/cool';

const { service } = useCool();

// cl-crud 配置
const Crud = useCrud({
	service: service.shop.review
});

// cl-table 配置
const Table = useTable({
	columns: [
		{
			type: 'selection',
			width: 60
		},
		{
			prop: 'goodsId',
			label: '商品ID',
			width: 100
		},
		{
			prop: 'userId',
			label: '用户ID',
			width: 100
		},
		{
			prop: 'rating',
			label: '评分',
			width: 100
		},
		{
			prop: 'content',
			label: '评价内容',
			minWidth: 200,
			showOverflowTooltip: true
		},
		{
			prop: 'images',
			label: '评价图片',
			width: 120,
			component: {
				name: 'cl-image',
				props: {
					size: 60
				}
			}
		},
		{
			prop: 'merchantReply',
			label: '商家回复',
			minWidth: 150,
			showOverflowTooltip: true
		},
		{
			prop: 'createTime',
			label: '评价时间',
			width: 160,
			sortable: 'desc'
		},
		{
			type: 'op',
			buttons: ['edit'],
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
			prop: 'goodsId',
			label: '商品ID',
			span: 12,
			component: {
				name: 'el-input-number',
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
				name: 'el-input-number',
				props: {
					disabled: true
				}
			}
		},
		{
			prop: 'rating',
			label: '评分',
			span: 24,
			component: {
				name: 'el-rate',
				props: {
					disabled: true,
					max: 5
				}
			}
		},
		{
			prop: 'content',
			label: '评价内容',
			span: 24,
			component: {
				name: 'el-input',
				props: {
					type: 'textarea',
					rows: 4,
					disabled: true
				}
			}
		},
		{
			prop: 'images',
			label: '评价图片',
			span: 24,
			component: {
				name: 'cl-upload',
				props: {
					type: 'image',
					multiple: true,
					disabled: true
				}
			}
		},
		{
			prop: 'merchantReply',
			label: '商家回复',
			span: 24,
			component: {
				name: 'el-input',
				props: {
					type: 'textarea',
					rows: 3,
					placeholder: '请输入商家回复内容'
				}
			}
		},
		{
			prop: 'replyTime',
			label: '回复时间',
			span: 24,
			component: {
				name: 'el-date-picker',
				props: {
					type: 'datetime',
					placeholder: '选择回复时间',
					valueFormat: 'YYYY-MM-DD HH:mm:ss'
				}
			}
		}
	]
});
</script>
