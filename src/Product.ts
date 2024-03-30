export interface Product {
  getName(): Promise<string>;
  getPrice(): Promise<number>;
  getSKU(): Promise<string>;
}
