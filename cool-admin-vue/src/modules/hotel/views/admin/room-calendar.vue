<template>
	<cl-crud ref="Crud">
		<cl-row>
			<!-- 刷新按钮 -->
			<cl-refresh-btn />
			<!-- 批量设置按钮 -->
			<el-button type="primary" @click="batchSetVisible = true">批量设置房态</el-button>
			<cl-flex1 />
			<!-- 查询表单 -->
			<el-form :inline="true">
				<el-form-item label="房型ID">
					<el-input-number v-model="query.roomTypeId" placeholder="请输入房型ID" />
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="handleQuery">查询</el-button>
				</el-form-item>
			</el-form>
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

		<!-- 批量设置对话框 -->
		<el-dialog v-model="batchSetVisible" title="批量设置房态" width="500px">
			<el-form :model="batchForm" label-width="120px">
				<el-form-item label="房型ID" required>
					<el-input-number v-model="batchForm.roomTypeId" placeholder="请输入房型ID" />
				</el-form-item>
				<el-form-item label="日期范围" required>
					<el-date-picker
						v-model="batchForm.dateRange"
						type="daterange"
						range-separator="至"
						start-placeholder="开始日期"
						end-placeholder="结束日期"
						value-format="YYYY-MM-DD"
					/>
				</el-form-item>
				<el-form-item label="可用房间数">
					<el-input-number v-model="batchForm.availableRooms" :min="0" placeholder="可用房间数" />
				</el-form-item>
				<el-form-item label="价格">
					<el-input-number v-model="batchForm.price" :min="0" :precision="2" placeholder="价格" />
				</el-form-item>
				<el-form-item label="状态">
					<el-radio-group v-model="batchForm.status">
						<el-radio :label="0">不可订</el-radio>
						<el-radio :label="1">可订</el-radio>
					</el-radio-group>
				</el-form-item>
			</el-form>
			<template #footer>
				<el-button @click="batchSetVisible = false">取消</el-button>
				<el-button type="primary" @click="handleBatchSet">确定</el-button>
			</template>
		</el-dialog>
	</cl-crud>
</template>

<script lang="ts" setup>
defineOptions({
	name: 'hotel-room-calendar'
});

import { reactive, ref } from 'vue';
import { useTable, useUpsert, useCrud } from '@cool-vue/crud';
import { useCool } from '/@/cool';
import { ElMessage } from 'element-plus';

const { service } = useCool();

// 查询条件
const query = reactive({
	roomTypeId: null
});

// 批量设置表单
const batchSetVisible = ref(false);
const batchForm = reactive({
	roomTypeId: null,
	dateRange: [],
	availableRooms: null,
	price: null,
	status: 1
});

// cl-crud
const Crud = useCrud({
	service: service.hotel.roomCalendar
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
			prop: 'roomTypeId',
			label: '房型ID',
			width: 100
		},
		{
			prop: 'date',
			label: '日期',
			width: 120
		},
		{
			prop: 'availableRooms',
			label: '可用房间数',
			width: 120
		},
		{
			prop: 'price',
			label: '价格',
			width: 120
		},
		{
			prop: 'status',
			label: '状态',
			width: 120,
			dict: [
				{ label: '不可订', value: 0, type: 'danger' },
				{ label: '可订', value: 1, type: 'success' }
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
			prop: 'roomTypeId',
			label: '房型ID',
			required: true,
			component: {
				name: 'el-input-number',
				props: {
					placeholder: '请输入房型ID'
				}
			}
		},
		{
			prop: 'date',
			label: '日期',
			required: true,
			component: {
				name: 'el-date-picker',
				props: {
					type: 'date',
					valueFormat: 'YYYY-MM-DD',
					placeholder: '请选择日期'
				}
			}
		},
		{
			prop: 'availableRooms',
			label: '可用房间数',
			value: 0,
			component: {
				name: 'el-input-number',
				props: {
					min: 0
				}
			}
		},
		{
			prop: 'price',
			label: '价格',
			value: 0,
			component: {
				name: 'el-input-number',
				props: {
					min: 0,
					precision: 2
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
					{ label: '不可订', value: 0 },
					{ label: '可订', value: 1 }
				]
			}
		}
	]
});

// 查询
function handleQuery() {
	if (!query.roomTypeId) {
		ElMessage.warning('请输入房型ID');
		return;
	}
	Crud.value.refresh({ roomTypeId: query.roomTypeId });
}

// 批量设置
async function handleBatchSet() {
	if (!batchForm.roomTypeId) {
		ElMessage.warning('请输入房型ID');
		return;
	}
	if (!batchForm.dateRange || batchForm.dateRange.length !== 2) {
		ElMessage.warning('请选择日期范围');
		return;
	}

	try {
		await service.hotel.roomCalendar.batchSet({
			roomTypeId: batchForm.roomTypeId,
			startDate: batchForm.dateRange[0],
			endDate: batchForm.dateRange[1],
			availableRooms: batchForm.availableRooms,
			price: batchForm.price,
			status: batchForm.status
		});
		ElMessage.success('批量设置成功');
		batchSetVisible.value = false;
		Crud.value.refresh();
	} catch (error) {
		ElMessage.error('批量设置失败');
	}
}
</script>
