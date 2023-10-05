import { Builder, Director } from "../creational/builder";

describe("Builder", () => {
  it("should build a product with all properties", () => {
    const builder = new Builder();

    const product = builder.setPropertyA("A").setPropertyB("B").setPropertyC("C").build();
    expect(product).toEqual({ propertyA: "A", propertyB: "B", propertyC: "C" });
  });
  it("should build multiple products", () => {
    const builder = new Builder();

    const product1 = builder.setPropertyA("A").setPropertyB("B").setPropertyC("C").build();
    const product2 = builder.setPropertyA("A").setPropertyB("B").build();
    expect(product1).toEqual({ propertyA: "A", propertyB: "B", propertyC: "C" });
    expect(product2).toEqual({ propertyA: "A", propertyB: "B" });
  });
});

describe("Director", () => {
  it("should build a product with all properties", () => {
    const builder = new Builder();
    const director = new Director(builder);

    const product = director.buildProductWithAllProperties();
    expect(product).toEqual({ propertyA: "A", propertyB: "B", propertyC: "C" });
  });

  it("should build multiple products", () => {
    const builder = new Builder();
    const director = new Director(builder);

    const product1 = director.buildProductWithAllProperties();
    const product2 = director.buildProductWithProperyA();
    const product3 = director.buildProductWithProperyC();

    expect(product1).toEqual({ propertyA: "A", propertyB: "B", propertyC: "C" });
    expect(product2).toEqual({ propertyA: "A" });
    expect(product3).toEqual({ propertyC: "C" });
  });
});
