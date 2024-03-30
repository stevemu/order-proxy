import { PrismaClient } from '@prisma/client';
import { testPrismaClient } from '../_tests_/_utils/prismaUtil';

export class Db {
  constructor(private prismaClient: PrismaClient) {}

  async storeProduct(sku: string, name: string, price: number) {
    await this.prismaClient.productData.create({
      data: {
        name,
        price,
        sku,
      },
    });
  }

  async getProduct(sku: string) {
    return await this.prismaClient.productData.findUnique({
      where: {
        sku,
      },
    });
  }

  async deleteProduct(sku: string) {
    await this.prismaClient.productData.delete({
      where: {
        sku,
      },
    });
  }

  async newOrder(customerId: string) {
    const order = await this.prismaClient.orderData.create({
      data: {
        id: (await this.getMaxOrderId()) + 1,
        customerId,
      },
    });
    return order;
  }

  async getMaxOrderId() {
    const maxOrder = await this.prismaClient.orderData.findFirst({
      orderBy: {
        id: 'desc',
      },
    });
    return maxOrder?.id || 0;
  }

  async storeItem(orderId: number, quantity: number, sku: string) {
    await this.prismaClient.itemData.create({
      data: {
        orderId,
        quantity,
        sku,
      },
    });
  }

  async getItemsForOrder(orderId: number) {
    return await this.prismaClient.itemData.findMany({
      where: {
        orderId,
      },
    });
  }

  async getOrder(orderId: number) {
    return await this.prismaClient.orderData.findUnique({
      where: {
        id: orderId,
      },
    });
  }

  async clear() {
    await this.prismaClient.productData.deleteMany();
    await this.prismaClient.orderData.deleteMany();
    await this.prismaClient.itemData.deleteMany();
  }
}

export const db = new Db(testPrismaClient);
