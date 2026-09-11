<template>
	<cl-crud ref="Crud">
		<cl-row>
			<!-- 刷新按钮 -->
			<cl-refresh-btn />
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

		<!-- 查看详情 -->
		<cl-upsert ref="Upsert" />

		<!-- 审核对话框 -->
		<el-dialog v-model="reviewDialog.visible" :title="reviewDialog.title" width="500px">
			<el-form :model="reviewDialog.form" label-width="100px">
				<el-form-item label="审核结果" required>
					<el-radio-group v-model="reviewDialog.form.approved">
						<el-radio :label="true">通过</el-radio>
						<el-radio :label="false">驳回</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item v-if="!reviewDialog.form.approved" label="驳回原因" required>
					<el-input
						v-model="reviewDialog.form.rejectReason"
						type="textarea"
						:rows="4"
						placeholder="请输入驳回原因"
					/>
				</el-form-item>
			</el-form>
			<template #footer>
				<el-button @click="reviewDialog.visible = false">取消</el-button>
				<el-button type="primary" @click="handleReview">确定</el-button>
			</template>
		</el-dialog>
	</cl-crud>
</template>

<script lang="ts" name="admin-application" setup>
import { reactive } from 'vue';
import { useCrud, useTable, useUpsert } from '@cool-vue/crud';
import { useCool } from '/@/cool';
import { ElMessage } from 'element-plus';

const { service } = useCool();

// 审核对话框
const reviewDialog = reactive({
	visible: false,
	title: '审核商家入驻申请',
	form: {
		applicationId: null,
		approved: true,
		rejectReason: ''
	}
});

// 打开审核对话框
const openReviewDialog = (row: any) => {
	reviewDialog.form.applicationId = row.id;
	reviewDialog.form.approved = true;
	reviewDialog.form.rejectReason = '';
	reviewDialog.visible = true;
};

// 处理审核
const handleReview = async () => {
	if (!reviewDialog.form.approved && !reviewDialog.form.rejectReason) {
		ElMessage.warning('驳回时必须填写驳回原因');
		return;
	}

	try {
		await service.admin.merchantApplication.review(reviewDialog.form);
		ElMessage.success('审核成功');
		reviewDialog.visible = false;
		Crud.value?.refresh();
	} catch (error) {
		ElMessage.error('审核失败');
	}
};

// cl-upsert 配置
const Upsert = useUpsert({
	items: [
		{ label: '店铺名称', prop: 'shopName', component: { name: 'el-input' } },
		{
			label: '申请模块',
			prop: 'moduleType',
			component: {
				name: 'el-select',
				options: [
					{ label: '衣-非遗商品', value: 1 },
					{ label: '食-餐饮美食', value: 2 },
					{ label: '住-住宿预订', value: 3 },
					{ label: '行-线路订票', value: 4 }
				]
			}
		},
		{ label: '身份证号', prop: 'idCard', component: { name: 'el-input' } },
		{
			label: '身份证正面',
			prop: 'idCardFront',
			component: { name: 'cl-upload', props: { type: 'image' } }
		},
		{
			label: '身份证反面',
			prop: 'idCardBack',
			component: { name: 'cl-upload', props: { type: 'image' } }
		},
		{
			label: '营业执照',
			prop: 'businessLicense',
			component: { name: 'cl-upload', props: { type: 'image' } }
		},
		{ label: '联系人', prop: 'contactName', component: { name: 'el-input' } },
		{ label: '联系电话', prop: 'contactPhone', component: { name: 'el-input' } },
		{
			label: '驳回原因',
			prop: 'rejectReason',
			component: { name: 'el-input', props: { type: 'textarea' } }
		}
	]
});

// cl-table 配置
const Table = useTable({
	columns: [
		{ label: 'ID', prop: 'id', minWidth: 80 },
		{ label: '店铺名称', prop: 'shopName', minWidth: 150 },
		{
			label: '申请模块',
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
				{ label: '待审核', value: 1, type: 'warning' },
				{ label: '已通过', value: 2, type: 'success' },
				{ label: '已驳回', value: 3, type: 'danger' }
			]
		},
		{ label: '申请时间', prop: 'createTime', minWidth: 160 },
		{
			type: 'op',
			buttons: ({ scope }) => [
				'info',
				...(scope.row.status === 1
					? [
							{
								label: '审核',
								type: 'success',
								onClick: () => openReviewDialog(scope.row)
							}
						]
					: [])
			],
			width: 200
		}
	]
});

// cl-crud 配置
const Crud = useCrud(
	{
		service: service.admin.merchantApplication
	},
	app => {
		app.refresh();
	}
);
</script>
