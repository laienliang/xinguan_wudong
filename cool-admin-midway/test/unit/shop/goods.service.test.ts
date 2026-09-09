import { TestHelper } from '../../helpers/test-helper';

describe('Shop Module - Goods Service Unit Test', () => {
  let app;
  let goodsService;

  beforeAll(async () => {
    app = await TestHelper.createTestApp();
    goodsService = await app.getApplicationContext().getAsync('shopGoodsService');
  });

  afterAll(async () => {
    await TestHelper.closeTestApp();
  });

  describe('modifyBefore', () => {
    it('should throw error when stock is negative on update', async () => {
      const data = { stock: -1 };
      await expect(
        goodsService.modifyBefore(data, 'update')
      ).rejects.toThrow('库存不能为负数');
    });

    it('should throw error when sales is negative on update', async () => {
      const data = { sales: -1 };
      await expect(
        goodsService.modifyBefore(data, 'update')
      ).rejects.toThrow('销量不能为负数');
    });

    it('should pass when stock is valid', async () => {
      const data = { stock: 100 };
      await expect(
        goodsService.modifyBefore(data, 'update')
      ).resolves.not.toThrow();
    });

    it('should pass when sales is valid', async () => {
      const data = { sales: 50 };
      await expect(
        goodsService.modifyBefore(data, 'update')
      ).resolves.not.toThrow();
    });

    it('should pass when stock is zero', async () => {
      const data = { stock: 0 };
      await expect(
        goodsService.modifyBefore(data, 'update')
      ).resolves.not.toThrow();
    });

    it('should not validate stock on add operation', async () => {
      const data = { stock: -1 };
      await expect(
        goodsService.modifyBefore(data, 'add')
      ).resolves.not.toThrow();
    });

    it('should not validate stock on delete operation', async () => {
      const data = { stock: -1 };
      await expect(
        goodsService.modifyBefore(data, 'delete')
      ).resolves.not.toThrow();
    });
  });

  describe('data validation', () => {
    it('should handle undefined stock value', async () => {
      const data = { name: 'Test Product' };
      await expect(
        goodsService.modifyBefore(data, 'update')
      ).resolves.not.toThrow();
    });

    it('should handle both stock and sales validation', async () => {
      const data = { stock: -1, sales: -1 };
      await expect(
        goodsService.modifyBefore(data, 'update')
      ).rejects.toThrow('库存不能为负数');
    });

    it('should validate large stock numbers', async () => {
      const data = { stock: 999999 };
      await expect(
        goodsService.modifyBefore(data, 'update')
      ).resolves.not.toThrow();
    });
  });
});
