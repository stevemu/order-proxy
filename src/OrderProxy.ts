import { Order } from './Order';
import { OrderImp } from './OrderImp';
import { Product } from './Product';
import { ProductProxy } from './ProductProxy';
import { db } from './db';

export class OrderProxy implements Order {
  constructor(private id: number) {}

  async total(): Promise<number> {
    const imp = new OrderImp(await this.getCustomerId());
    const itemDataArray = await db.getItemsForOrder(this.id);
    for (const itemData of itemDataArray) {
      const p = new ProductProxy(itemData.sku);
      await imp.addItem(p, itemData.quantity);
    }
    return imp.total();
  }

  async getCustomerId(): Promise<string> {
    const od = await db.getOrder(this.id);
    return od!.customerId;
  }

  async addItem(p: Product, qty: number): Promise<void> {
    const sku = await p.getSKU();
    await db.storeItem(this.id, qty, sku);
  }
}
