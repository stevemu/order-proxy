import { Item } from './Item';
import { Product } from './Product';

export class Order {
  private items: Item[] = [];

  public addItem(p: Product, qty: number): void {
    this.items.push(new Item(p, qty));
  }

  public total(): number {
    return this.items.reduce((acc, item) => acc + item.product.price * item.qty, 0);
  }
}
