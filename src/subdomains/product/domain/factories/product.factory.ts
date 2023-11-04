export class ProductFactory implements IFactory<Product> {
  static create() {
    return new Product();
  }
}

ProductFactory.create();
