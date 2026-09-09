<template>
	<cl-crud ref="Crud">
		<cl-row>
			<cl-refresh-btn />
			<el-button type="primary" @click="openVerifyDialog">扫码核销</el-button>
			<cl-flex1 />
			<cl-search-key :placeholder="'搜索电子票号'" />
		</cl-row>

		<cl-row>
			<cl-table ref="Table" />
		</cl-row>

		<cl-row>
			<cl-flex1 />
			<cl-pagination />
		</cl-row>

		<cl-upsert ref="Upsert" />

		<!-- 核销对话框 -->
		<el-dialog v-model="verifyDialogVisible" title="电子票核销" width="500px">
			<el-form :model="verifyForm" label-width="100px">
				<el-form-item label="电子票号">
					<el-input
						v-model="verifyForm.ticketNo"
						placeholder="请输入电子票号"
						clearable
					/>
				</el-form-item>
			</el-form>
			<template #footer>
				<el-button @click="verifyDialogVisible = false">取消</el-button>
				<el-button type="primary" @click="handleVerify">确认核销</el-button>
			</template>
		</el-dialog>
	</cl-crud>
</template>

<script lang="ts" setup>
defineOptions({
	name: 'tour-e-ticket'
});

import { ref, reactive } from 'vue';
import { useTable, useUpsert, useCrud } from '@cool-vue/crud';
import { useCool } from '/@/cool';
import { ElMessage } from 'element-plus';

const { service } = useCool();

// 核销对话框
const verifyDialogVisible = ref(false);
const verifyForm = reactive({
	ticketNo: ''
});

// cl-crud 配置
const Crud = useCrud(
	{
		service: service.tour.eTicket
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
			prop: 'ticketNo',
			label: '电子票号',
			minWidth: 150
		},
		{
			prop: 'orderId',
			label: '订单ID',
			width: 120
		},
		{
			prop: 'validDate',
			label: '有效日期',
			width: 120
		},
		{
			prop: 'status',
			label: '状态',
			width: 100,
			dict: [
				{ label: '未使用', value: 1, type: 'primary' },
				{ label: '已使用', value: 2, type: 'success' },
				{ label: '已过期', value: 3, type: 'info' }
			]
		},
		{
			prop: 'usedTime',
			label: '使用时间',
			width: 160
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
			prop: 'ticketNo',
			label: '电子票号',
			span: 24,
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
			span: 24,
			component: {
				name: 'el-radio-group',
				options: [
					{ label: '未使用', value: 1 },
					{ label: '已使用', value: 2 },
					{ label: '已过期', value: 3 }
				]
			}
		}
	]
});

// 打开核销对话框
const openVerifyDialog = () => {
	verifyForm.ticketNo = '';
	verifyDialogVisible.value = true;
};

// 核销电子票
const handleVerify = async () => {
	if (!verifyForm.ticketNo) {
		ElMessage.warning('请输入电子票号');
		return;
	}

	try {
		const res = await service.tour.eTicket.verify({ ticketNo: verifyForm.ticketNo });
		if (res.success) {
			ElMessage.success('核销成功');
			verifyDialogVisible.value = false;
			Crud.value?.refresh();
		} else {
			ElMessage.error(res.message || '核销失败');
		}
	} catch (error) {
		ElMessage.error('核销失败');
	}
};
</script>
