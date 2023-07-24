const {
  deepEntries,
  deeplyEquals,
  flat,
} = require("../sections/4-recursion.js");

describe("deepEntries", () => {
  test('function returns an array', () =>{
        const input = { name: "Sam", favBook: "Blood Meridian" }
        const result = deepEntries(input)
        expect(Array.isArray(result)).toBe(true)
    })
  test("will return a nested array with an object's key and value paired when passed a single object", () => {
    const input = { name: "Sam" };
    const output = [["name", "Sam"]];
    const act = deepEntries(input);
    expect(act).toEqual(output)
  });
  test("will return a nested array with an object's key and value paired when passed two object key, and value", () => {
    const input = { name: "Sam", favBook: "Blood Meridian" }
    const output = [ ["name", "Sam"], ["favBook", "Blood Meridian"] ];
    const act = deepEntries(input);
    expect(act).toEqual(output)
  });
  test("will return an object containing a nest object as a value will return the correctly nested array", () => {
    const input = { pets: { name: "fido" } }
    const output = [["pets",[["name", "fido"]]]];
    const act = deepEntries(input);
    expect(act).toEqual(output)
  });
  test("will return an object containing a nest object as a value will return the correctly nested array", () => {
    const input = { pets: { name: "fido" } }
    const output = [["pets",[["name", "fido"]]]];
    const act = deepEntries(input);
    expect(act).toEqual(output)
  });
  test("will return an object containing a nest object as a value will return the correctly nested array", () => {
    const input ={ name: "Sam", pets: { name: "fido" } }
    const output = [
      ["name", "Sam"],
      ["pets",[["name", "fido"]]]
    ];
    const act = deepEntries(input);
    expect(act).toEqual(output)
  });
  test("will return an object containing a nested object as a value, and a normal key-value pair, and will return the correctly nested array", () => {
    const input ={ name: "Sam", pets: { name: "fido" } }
    const output = [
      ["name", "Sam"],
      ["pets",[["name", "fido"]]]
    ];
    const act = deepEntries(input);
    expect(act).toEqual(output)
  });
  test("will return an object containing a several deeply nested objects as the correctly nested array", () => {
    const input ={
      name: "Sam",
      favBook: { title: "Blood Meridian", author: { name: "Cormac McCarthy" } },
    }
    const output = [
      ["name","Sam"],
      ["favBook",[["title","Blood Meridian"],["author", [["name","Cormac McCarthy"]]]
    ]]]
    const act = deepEntries(input);
    expect(act).toEqual(output)
  });
});
describe('deeplyEquals', () => {
  test('will result a boolean', () => {
    expect(typeof(deeplyEquals())).toBe('boolean')
  })
  test('will return true for two primitive data types that are the same', () => {
    const input1 = 2
    const input2 = 2
    expect(deeplyEquals(input1, input2)).toBe(true)
  })
  test('will return true for two primitive data types that are the same', () => {
    const input1 = 'a'
    const input2 = 'a'
    expect(deeplyEquals(input1, input2)).toBe(true)
  })
  test('will return true for two non-primitive data types that are the same', () => {
    const input1 = [1, 2, 3, 4]
    const input2 = [1, 2, 3, 4]
    expect(deeplyEquals(input1, input2)).toBe(true)
  })
  test('will return true for two non-primitive data types that are the same', () => {
    const input1 = { a: "hello" }
    const input2 = { a: "hello" }
    expect(deeplyEquals(input1, input2)).toBe(true)
  })
  test('will return true for non-primitive data types inside a mixed array that are the same', () => {
    const input1 = [{ a: "hello" }]
    const input2 = [{ a: "bye" }]
    expect(deeplyEquals(input1, input2)).toBe(false)
  })
  test('will return false for non-primitive data types inside a mixed array that are different', () => {
    const input1 = [1, 2, { a: "hello" }]
    const input2 = [1, 2, { a: "bye" }]
    expect(deeplyEquals(input1, input2)).toBe(false)
  })
  test('will return true for non-primitive data types inside a mixed array that are different', () => {
    const input1 = [1, 2, { a: "hello" }]
    const input2 = [1, 2, { a: "hello" }]
    expect(deeplyEquals(input1, input2)).toBe(true)
  })

})
