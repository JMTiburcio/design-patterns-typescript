export class Product {
  propertyA?: string;
  propertyB?: string;
  propertyC?: string;
}

export class Builder {
  private product: Product;

  constructor() {
    this.product = new Product();
  }

  public setPropertyA(property: string): this {
    this.product.propertyA = property;
    return this;
  }

  public setPropertyB(property: string): this {
    this.product.propertyB = property;
    return this;
  }

  public setPropertyC(property: string): this {
    this.product.propertyC = property;
    return this;
  }

  public build(): Product {
    const product = this.product;
    this.reset();
    return product;
  }

  private reset(): void {
    this.product = new Product();
  }
}

export class Director {
  constructor(private readonly builder: Builder) {}

  public buildProductWithAllProperties(): Product {
    return this.builder.setPropertyA("A").setPropertyB("B").setPropertyC("C").build();
  }

  public buildProductWithProperyA(): Product {
    return this.builder.setPropertyA("A").build();
  }

  public buildProductWithProperyC(): Product {
    return this.builder.setPropertyC("C").build();
  }
}
