import { Product } from './Product';

export class ProductImp implements Product {
  constructor(
    private sku: string,
    private name: string,
    private price: number,
  ) {}

  async getName() {
    return this.name;
  }

  async getPrice() {
    return this.price;
  }

  async getSKU() {
    return this.sku;
  }
}
