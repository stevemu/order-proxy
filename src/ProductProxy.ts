import { Product } from './Product';
import { db } from './db';

export class ProductProxy implements Product {
  constructor(private sku: string) {}

  async getName() {
    return (await db.getProduct(this.sku))!.name;
  }

  async getPrice() {
    return (await db.getProduct(this.sku))!.price;
  }

  async getSKU() {
    return this.sku;
  }
}
