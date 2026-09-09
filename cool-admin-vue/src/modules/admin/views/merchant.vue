<template>
	<cl-crud ref="Crud">
		<cl-row>
			<!-- 刷新按钮 -->
			<cl-refresh-btn />
			<!-- 新增按钮 -->
			<cl-add-btn />
			<!-- 删除按钮 -->
			<cl-multi-delete-btn />
			<cl-flex1 />
			<!-- 关键字搜索 -->
			<cl-search-key />
		</cl-row>

		<cl-row>
			<!-- 数据表格 -->
			<cl-table ref="Table" />
		</cl-row>

		<cl-row>
			<cl-flex1 />
			<!-- 分页控件 -->
			<cl-pagination />
		</cl-row>

		<!-- 新增、编辑 -->
		<cl-upsert ref="Upsert" />
	</cl-crud>
</template>

<script lang="ts" name="admin-merchant" setup>
import { useCrud, useTable, useUpsert } from '@cool-vue/crud';
import { useCool } from '/@/cool';

const { service } = useCool();

// cl-upsert 配置
const Upsert = useUpsert({
	items: [
		{
			label: '用户ID',
			prop: 'userId',
			component: {
				name: 'el-input',
				props: {
					placeholder: '请输入用户ID'
				}
			},
			required: true
		},
		{
			label: '商家用户名',
			prop: 'username',
			component: {
				name: 'el-input',
				props: {
					placeholder: '请输入商家用户名'
				}
			},
			required: true
		},
		{
			label: '密码',
			prop: 'password',
			component: {
				name: 'el-input',
				props: {
					type: 'password',
					placeholder: '请输入密码'
				}
			},
			required: true
		},
		{
			label: '店铺名称',
			prop: 'shopName',
			component: {
				name: 'el-input',
				props: {
					placeholder: '请输入店铺名称'
				}
			},
			required: true
		},
		{
			label: '所属模块',
			prop: 'moduleType',
			component: {
				name: 'el-select',
				options: [
					{ label: '衣-非遗商品', value: 1 },
					{ label: '食-餐饮美食', value: 2 },
					{ label: '住-住宿预订', value: 3 },
					{ label: '行-线路订票', value: 4 }
				]
			},
			required: true
		},
		{
			label: '联系人',
			prop: 'contactName',
			component: {
				name: 'el-input',
				props: {
					placeholder: '请输入联系人'
				}
			},
			required: true
		},
		{
			label: '联系电话',
			prop: 'contactPhone',
			component: {
				name: 'el-input',
				props: {
					placeholder: '请输入联系电话'
				}
			},
			required: true
		},
		{
			label: '状态',
			prop: 'status',
			value: 1,
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

// cl-table 配置
const Table = useTable({
	columns: [
		{ type: 'selection' },
		{ label: 'ID', prop: 'id', minWidth: 80 },
		{ label: '店铺名称', prop: 'shopName', minWidth: 150 },
		{ label: '商家用户名', prop: 'username', minWidth: 120 },
		{
			label: '所属模块',
			prop: 'moduleType',
			minWidth: 120,
			dict: [
				{ label: '衣-非遗商品', value: 1, type: 'primary' },
				{ label: '食-餐饮美食', value: 2, type: 'success' },
				{ label: '住-住宿预订', value: 3, type: 'warning' },
				{ label: '行-线路订票', value: 4, type: 'danger' }
			]
		},
		{ label: '联系人', prop: 'contactName', minWidth: 100 },
		{ label: '联系电话', prop: 'contactPhone', minWidth: 120 },
		{
			label: '状态',
			prop: 'status',
			minWidth: 100,
			dict: [
				{ label: '禁用', value: 0, type: 'danger' },
				{ label: '正常', value: 1, type: 'success' }
			]
		},
		{ label: '创建时间', prop: 'createTime', minWidth: 160 },
		{ type: 'op', buttons: ['edit', 'delete'], width: 200 }
	]
});

// cl-crud 配置
useCrud(
	{
		service: service.admin.merchantUser
	},
	(app) => {
		app.refresh();
	}
);
</script>
