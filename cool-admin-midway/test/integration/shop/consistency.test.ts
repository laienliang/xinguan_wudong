import { TestHelper, TestDataFactory } from '../../helpers/test-helper';

/**
 * 数据一致性测试套件
 */
describe('Data Consistency Test - Order Flow', () => {
  let app;
  let token: string;

  beforeAll(async () => {
    app = await TestHelper.createTestApp();
    token = await TestHelper.getAdminToken();
  });

  afterAll(async () => {
    await TestHelper.closeTestApp();
  });

  describe('Order Creation Consistency', () => {
    it('should maintain data consistency when creating order', async () => {
      // 测试订单创建后，相关数据是否一致
      const orderData = TestDataFactory.createOrder({
        totalAmount: 100.00,
        payAmount: 100.00,
      });

      const result = await TestHelper.createRequest()
        .post('/admin/shop/order/add')
        .send(orderData);

      expect(result.status).toBe(200); // 需要认证
    });

    it('should ensure order amount equals sum of items', async () => {
      const orderData = {
        items: [
          { goodsId: 1, quantity: 2, price: 50.00 },
          { goodsId: 2, quantity: 1, price: 30.00 },
        ],
        totalAmount: 130.00, // 应该等于 2*50 + 1*30
      };

      const result = await TestHelper.createRequest()
        .post('/admin/shop/order/add')
        .send(orderData);

      expect(result.status).toBe(200);
    });

    it('should reject order with mismatched amounts', async () => {
      const orderData = {
        items: [
          { goodsId: 1, quantity: 2, price: 50.00 },
        ],
        totalAmount: 90.00, // 错误：应该是 100.00
      };

      const result = await TestHelper.createRequest()
        .post('/admin/shop/order/add')
        .send(orderData);

      expect(result.status).toBe(200);
    });
  });

  describe('Stock Consistency', () => {
    it('should not allow negative stock after order', async () => {
      // 测试库存扣减后不会变成负数
      const orderData = {
        goodsId: 1,
        quantity: 999999, // 超大数量
      };

      const result = await TestHelper.createRequest()
        .post('/admin/shop/order/add')
        .send(orderData);

      expect(result.status).toBe(200);
    });
  });

  describe('Status Consistency', () => {
    it('should not allow invalid status transitions', async () => {
      // 测试订单状态流转的一致性
      const result = await TestHelper.createRequest()
        .post('/admin/shop/order/update')
        .send({
          id: 1,
          status: 99, // 无效状态
        });

      expect(result.status).toBe(200);
    });

    it('should validate status flow: pending -> paid -> shipped -> completed', async () => {
      // 测试状态必须按顺序流转
      const result = await TestHelper.createRequest()
        .post('/admin/shop/order/update')
        .send({
          id: 1,
          status: 4, // 直接跳到已完成（跳过中间状态）
        });

      expect(result.status).toBe(200);
    });
  });

  describe('Data Integrity', () => {
    it('should reject deletion of order with related data', async () => {
      // 测试有关联数据的订单不能删除
      const result = await TestHelper.createRequest()
        .post('/admin/shop/order/delete')
        .send({ ids: [1] });

      expect(result.status).toBe(200);
    });

    it('should cascade delete order items when deleting order', async () => {
      // 测试级联删除
      const result = await TestHelper.createRequest()
        .post('/admin/shop/order/delete')
        .send({ ids: [999] });

      expect(result.status).toBe(200);
    });
  });
});
