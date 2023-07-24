const VendingMachine = require("../sections/2-oop-vending-machine.js");

describe("vending machine properties", () => {
  test("instance of vending machine will have a credit property", () => {
    const testVendingMachine = new VendingMachine();
    expect(testVendingMachine).toHaveProperty("credit");
  });
  test("instance of vending machine will have a stock property with three rows", () => {
    const testVendingMachine = new VendingMachine();
    expect(testVendingMachine).toHaveProperty("stock");
    expect(testVendingMachine.stock).toEqual({
      A: {},
      B: {},
      C: {},
    });
  });
  describe("vending machine methods", () => {
    test("addStock method will add an item at the correct location - will take a stock object and the row position as it's arguments", () => {
      const marsBars = { name: "marsBar", price: 50, quantity: 6 };
      const testMachine = new VendingMachine();
      testMachine.addStock(marsBars, "A");
      expect(testMachine.stock).toEqual({
        A: { name: "marsBar", price: 50, quantity: 6 },
        B: {},
        C: {},
      });
    });
    test("addCredit method will add to the credit property", () => {
      const testMachine = new VendingMachine();
      testMachine.addCredit(50);
      expect(testMachine.credit).toEqual(50);
      testMachine.addCredit(10);
      expect(testMachine.credit).toEqual(60);
    });
    test('purchaseItem returns msg if funds are insufficient', () => {
      const testMachine =  new VendingMachine();
      const marsBars = { name: "marsBar", price: 50, quantity: 6 }
      testMachine.addStock(marsBars, "A");
      testMachine.addCredit(30);
      const result = testMachine.purchaseItem('A')
      expect(result).toBe('Insufficient credit!')
  })
  test('purchaseItem reduces stock amount', () => {
      const testMachine =  new VendingMachine();
      const marsBars = { name: "marsBar", price: 50, quantity: 6 }
      testMachine.addStock(marsBars, "A");
      testMachine.addCredit(60);
      testMachine.purchaseItem('A')
      expect(testMachine.stock).toEqual({ A: { name: 'marsBar', price: 50, quantity: 5 },
      B: {},
      C: {}
    })
  })
  test('purchaseItem reduces credit amount', () => {
      const testMachine =  new VendingMachine();
      const marsBars = { name: "marsBar", price: 50, quantity: 6 }
      testMachine.addStock(marsBars, "A");
      testMachine.addCredit(60);
      testMachine.purchaseItem('A')
      expect(testMachine.credit).toBe(10)
  })
  
  });
});
