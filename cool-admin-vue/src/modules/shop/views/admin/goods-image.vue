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
			<cl-search-key :placeholder="'搜索商品ID'" />
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
	name: 'shop-goods-image'
});

import { useTable, useUpsert, useCrud } from '@cool-vue/crud';
import { useCool } from '/@/cool';

const { service } = useCool();

// cl-crud 配置
const Crud = useCrud({
	service: service.shop.goodsImage
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
			prop: 'imageUrl',
			label: '图片',
			width: 120,
			component: {
				name: 'cl-image',
				props: {
					size: 80
				}
			}
		},
		{
			prop: 'sort',
			label: '排序',
			width: 100
		},
		{
			prop: 'createTime',
			label: '创建时间',
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
			prop: 'goodsId',
			label: '商品ID',
			span: 24,
			required: true,
			component: {
				name: 'el-input-number',
				props: {
					placeholder: '请输入商品ID',
					min: 1
				}
			}
		},
		{
			prop: 'imageUrl',
			label: '商品图片',
			span: 24,
			required: true,
			component: {
				name: 'cl-upload',
				props: {
					type: 'image',
					text: '选择图片'
				}
			}
		},
		{
			prop: 'sort',
			label: '排序',
			span: 24,
			value: 0,
			component: {
				name: 'el-input-number',
				props: {
					min: 0,
					placeholder: '数字越小越靠前'
				}
			}
		}
	]
});
</script>
