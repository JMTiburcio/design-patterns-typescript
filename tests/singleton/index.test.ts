import { Singleton } from "../creational/singleton";

describe("Singleton", () => {
  it("should have only one instance", () => {
    const singleton1 = Singleton.getInstance();
    const singleton2 = Singleton.getInstance();

    expect(singleton1 === singleton2).toBeTruthy();
  });
});
