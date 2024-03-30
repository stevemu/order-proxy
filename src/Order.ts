import { Product } from './Product';

export interface Order {
  getCustomerId(): Promise<string>;
  addItem(p: Product, qty: number): Promise<void>;
  total(): Promise<number>;
}
