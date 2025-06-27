const {
  calculateDiscount,
  filterProducts,
  sortInventory
} = require('./function');

// --------------------
// Tests for calculateDiscount
// --------------------
describe("calculateDiscount", () => {
  test("should apply a valid discount", () => {
    expect(calculateDiscount(100, 0.1)).toBe(90);
  });

  test("should return null if price is not a number", () => {
    expect(calculateDiscount("100", 0.2)).toBe(null);
  });

  test("should return null if discountRate is invalid", () => {
    expect(calculateDiscount(100, -0.2)).toBe(null);
    expect(calculateDiscount(100, 2)).toBe(null);
  });

  test("should return 0 if price is 0", () => {
    expect(calculateDiscount(0, 0.2)).toBe(0);
  });
});

// --------------------
//  Tests for filterProducts
// --------------------
describe("filterProducts", () => {
  const products = [
    { name: "Laptop", price: 1000 },
    { name: "Pen", price: 5 },
    { name: "i-pad", price: 800 },
  ];

  test("should return products with price > 100", () => {
    const result = filterProducts(products, p => p.price > 100);
    expect(result).toEqual([
      { name: "Laptop", price: 1000 },
      { name: "i-pad", price: 800 }
    ]);
  });

  test("should return products with name starting with P", () => {
    const result = filterProducts(products, p => p.name.startsWith("P"));
    expect(result).toEqual([
      { name: "Pen", price: 5 },
     
    ]);
  });
});

// --------------------
// Tests for sortInventory
// --------------------
describe("sortInventory", () => {
  const inventory = [
    { name: "notebook", price:15 },
    { name: "crayons", price: 5 },
    { name: "pen", price: 10 },
    { name: "printer", price:1500 }
  ];

  test("should sort inventory by name A–Z", () => {
    const result = sortInventory(inventory, "name");
    //map is used to extract just the 'name' property from each item in the result array
    expect(result.map(item => item.name)).toEqual([
      "notebook", "crayons", "pen", "printer"
    ]);
  });

  test("should sort inventory by price low–high", () => {
    const result = sortInventory(inventory, "price");//map is used to extract just the 'price' property from each item in the result array
    expect(result.map(item => item.price)).toEqual([
      15,5, 10, 1500
    ]);
  });
})