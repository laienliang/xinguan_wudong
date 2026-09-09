<template>
	<cl-crud ref="Crud">
		<cl-row>
			<!-- 刷新按钮 -->
			<cl-refresh-btn />
			<cl-flex1 />
			<cl-search-key :placeholder="'搜索订单号'" />
		</cl-row>

		<cl-row>
			<cl-table ref="Table" />
		</cl-row>

		<cl-row>
			<cl-flex1 />
			<cl-pagination />
		</cl-row>

		<!-- 查看、编辑 -->
		<cl-upsert ref="Upsert" />
	</cl-crud>
</template>

<script lang="ts" setup>
defineOptions({
	name: 'shop-order'
});

import { useTable, useUpsert, useCrud } from '@cool-vue/crud';
import { useCool } from '/@/cool';

const { service } = useCool();

// cl-crud 配置
const Crud = useCrud({
	service: service.shop.order
});

// cl-table 配置
const Table = useTable({
	columns: [
		{
			type: 'selection',
			width: 60
		},
		{
			prop: 'orderNo',
			label: '订单号',
			minWidth: 180
		},
		{
			prop: 'userId',
			label: '用户ID',
			width: 100
		},
		{
			prop: 'totalAmount',
			label: '订单金额',
			width: 120
		},
		{
			prop: 'status',
			label: '订单状态',
			width: 120,
			dict: [
				{ label: '待付款', value: 0, type: 'info' },
				{ label: '待发货', value: 1, type: 'warning' },
				{ label: '待收货', value: 2, type: 'primary' },
				{ label: '已完成', value: 3, type: 'success' },
				{ label: '已取消', value: 4, type: 'danger' }
			]
		},
		{
			prop: 'paymentStatus',
			label: '支付状态',
			width: 120,
			dict: [
				{ label: '未支付', value: 0, type: 'info' },
				{ label: '已支付', value: 1, type: 'success' }
			]
		},
		{
			prop: 'shippingStatus',
			label: '物流状态',
			width: 120,
			dict: [
				{ label: '未发货', value: 0, type: 'info' },
				{ label: '已发货', value: 1, type: 'primary' },
				{ label: '已收货', value: 2, type: 'success' }
			]
		},
		{
			prop: 'createTime',
			label: '下单时间',
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
		width: '800px'
	},
	items: [
		{
			prop: 'orderNo',
			label: '订单号',
			span: 12,
			component: {
				name: 'el-input',
				props: {
					disabled: true
				}
			}
		},
		{
			prop: 'totalAmount',
			label: '订单金额',
			span: 12,
			component: {
				name: 'el-input-number',
				props: {
					disabled: true,
					precision: 2
				}
			}
		},
		{
			prop: 'receiverName',
			label: '收货人',
			span: 12,
			component: {
				name: 'el-input',
				props: {
					placeholder: '收货人姓名'
				}
			}
		},
		{
			prop: 'receiverPhone',
			label: '联系电话',
			span: 12,
			component: {
				name: 'el-input',
				props: {
					placeholder: '收货人电话'
				}
			}
		},
		{
			prop: 'receiverAddress',
			label: '收货地址',
			span: 24,
			component: {
				name: 'el-input',
				props: {
					type: 'textarea',
					rows: 2,
					placeholder: '完整收货地址'
				}
			}
		},
		{
			prop: 'shippingCompany',
			label: '物流公司',
			span: 12,
			component: {
				name: 'el-input',
				props: {
					placeholder: '请输入物流公司'
				}
			}
		},
		{
			prop: 'shippingNo',
			label: '物流单号',
			span: 12,
			component: {
				name: 'el-input',
				props: {
					placeholder: '请输入物流单号'
				}
			}
		},
		{
			prop: 'shippingStatus',
			label: '物流状态',
			span: 12,
			component: {
				name: 'el-select',
				options: [
					{ label: '未发货', value: 0 },
					{ label: '已发货', value: 1 },
					{ label: '已收货', value: 2 }
				]
			}
		},
		{
			prop: 'status',
			label: '订单状态',
			span: 12,
			component: {
				name: 'el-select',
				options: [
					{ label: '待付款', value: 0 },
					{ label: '待发货', value: 1 },
					{ label: '待收货', value: 2 },
					{ label: '已完成', value: 3 },
					{ label: '已取消', value: 4 }
				]
			}
		},
		{
			prop: 'remark',
			label: '订单备注',
			span: 24,
			component: {
				name: 'el-input',
				props: {
					type: 'textarea',
					rows: 3,
					placeholder: '订单备注信息'
				}
			}
		}
	]
});
</script>
