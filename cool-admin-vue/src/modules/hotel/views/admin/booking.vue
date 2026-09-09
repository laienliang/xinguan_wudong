<template>
	<cl-crud ref="Crud">
		<cl-row>
			<!-- 刷新按钮 -->
			<cl-refresh-btn />
			<cl-flex1 />
			<!-- 筛选 -->
			<el-form :inline="true">
				<el-form-item label="民宿ID">
					<el-input-number v-model="query.houseId" placeholder="请输入民宿ID" />
				</el-form-item>
				<el-form-item label="状态">
					<el-select v-model="query.status" placeholder="请选择状态" clearable>
						<el-option label="待入住" :value="1" />
						<el-option label="入住中" :value="2" />
						<el-option label="已离店" :value="3" />
						<el-option label="已取消" :value="4" />
					</el-select>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="handleQuery">查询</el-button>
				</el-form-item>
			</el-form>
			<cl-search-key :placeholder="'搜索入住人姓名、电话、入住码'" />
		</cl-row>

		<cl-row>
			<cl-table ref="Table" />
		</cl-row>

		<cl-row>
			<cl-flex1 />
			<cl-pagination />
		</cl-row>

		<!-- 查看详情 -->
		<cl-upsert ref="Upsert" />
	</cl-crud>
</template>

<script lang="ts" setup>
defineOptions({
	name: 'hotel-booking'
});

import { reactive } from 'vue';
import { useTable, useUpsert, useCrud } from '@cool-vue/crud';
import { useCool } from '/@/cool';

const { service } = useCool();

// 查询条件
const query = reactive({
	houseId: null,
	status: null
});

// cl-crud
const Crud = useCrud({
	service: service.hotel.bookingOrder
});

// cl-table
const Table = useTable({
	columns: [
		{
			prop: 'id',
			label: 'ID',
			width: 80
		},
		{
			prop: 'orderId',
			label: '订单ID',
			width: 100
		},
		{
			prop: 'houseId',
			label: '民宿ID',
			width: 100
		},
		{
			prop: 'roomTypeId',
			label: '房型ID',
			width: 100
		},
		{
			prop: 'guestName',
			label: '入住人',
			width: 120
		},
		{
			prop: 'guestPhone',
			label: '联系电话',
			width: 130
		},
		{
			prop: 'checkInDate',
			label: '入住日期',
			width: 120
		},
		{
			prop: 'checkOutDate',
			label: '离店日期',
			width: 120
		},
		{
			prop: 'nights',
			label: '入住天数',
			width: 100
		},
		{
			prop: 'roomCount',
			label: '房间数',
			width: 100
		},
		{
			prop: 'checkInCode',
			label: '入住码',
			width: 120
		},
		{
			prop: 'status',
			label: '状态',
			width: 120,
			dict: [
				{ label: '待入住', value: 1, type: 'warning' },
				{ label: '入住中', value: 2, type: 'success' },
				{ label: '已离店', value: 3, type: 'info' },
				{ label: '已取消', value: 4, type: 'danger' }
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
			prop: 'orderId',
			label: '订单ID',
			component: {
				name: 'el-input-number',
				props: {
					disabled: true
				}
			}
		},
		{
			prop: 'houseId',
			label: '民宿ID',
			component: {
				name: 'el-input-number',
				props: {
					disabled: true
				}
			}
		},
		{
			prop: 'roomTypeId',
			label: '房型ID',
			component: {
				name: 'el-input-number',
				props: {
					disabled: true
				}
			}
		},
		{
			prop: 'guestName',
			label: '入住人',
			component: {
				name: 'el-input',
				props: {
					disabled: true
				}
			}
		},
		{
			prop: 'guestPhone',
			label: '联系电话',
			component: {
				name: 'el-input',
				props: {
					disabled: true
				}
			}
		},
		{
			prop: 'guestIdCard',
			label: '身份证号',
			component: {
				name: 'el-input',
				props: {
					disabled: true
				}
			}
		},
		{
			prop: 'checkInDate',
			label: '入住日期',
			component: {
				name: 'el-input',
				props: {
					disabled: true
				}
			}
		},
		{
			prop: 'checkOutDate',
			label: '离店日期',
			component: {
				name: 'el-input',
				props: {
					disabled: true
				}
			}
		},
		{
			prop: 'nights',
			label: '入住天数',
			component: {
				name: 'el-input-number',
				props: {
					disabled: true
				}
			}
		},
		{
			prop: 'roomCount',
			label: '房间数',
			component: {
				name: 'el-input-number',
				props: {
					disabled: true
				}
			}
		},
		{
			prop: 'checkInCode',
			label: '入住码',
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
			component: {
				name: 'el-radio-group',
				options: [
					{ label: '待入住', value: 1 },
					{ label: '入住中', value: 2 },
					{ label: '已离店', value: 3 },
					{ label: '已取消', value: 4 }
				]
			}
		}
	]
});

// 查询
function handleQuery() {
	const params: any = {};
	if (query.houseId) params.houseId = query.houseId;
	if (query.status) params.status = query.status;
	Crud.value.refresh(params);
}
</script>
