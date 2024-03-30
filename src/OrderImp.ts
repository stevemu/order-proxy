import { Item } from './Item';
import { Order } from './Order';
import { Product } from './Product';

export class OrderImp implements Order {
  private items: Item[] = [];

  constructor(private customerId: string) {}

  public async addItem(p: Product, qty: number): Promise<void> {
    this.items.push(new Item(p, qty));
  }

  public async total(): Promise<number> {
    let total = 0;
    for (const item of this.items) {
      total += (await item.product.getPrice()) * item.qty;
    }
    return total;
  }

  async getCustomerId(): Promise<string> {
    return this.customerId;
  }
}
