import { Order } from './Order';
import { Product } from './Product';

describe('Order', () => {
  it('should add items', () => {
    const order = new Order();

    const toothpaste = new Product('toothpaste', 1299);
    order.addItem(toothpaste, 1);
    expect(order.total()).toBe(129);

    const mouthwash = new Product('mouthwash', 342);
    order.addItem(mouthwash, 2);
    expect(order.total()).toBe(813);
  });
});
