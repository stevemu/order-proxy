import { PrismaClient } from '@prisma/client';

export class Db {
  constructor(private prismaClient: PrismaClient) {}

  async storeProduct(name: string, price: number, sku: string) {
    await this.prismaClient.productData.create({
      data: {
        name,
        price,
        sku,
      },
    });
  }

  async clear() {
    await this.prismaClient.productData.deleteMany();
  }
}
