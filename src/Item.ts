import { Product } from './Product';

export class Item {
  constructor(
    public product: Product,
    public qty: number,
  ) {}
}
