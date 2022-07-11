const MODULE = require("./script");

describe("Calculator", () => {
  test("Should add two numbers", () => {
    expect(MODULE.add(1, 2)).toBe(3);
  });

  test("Should subtract two numbers", () => {
    expect(MODULE.sub(1, 2)).toBe(-1);
  });

  test("Should multiply two numbers", () => {
    expect(MODULE.mult(1, 2)).toBe(2);
  });

  test("Should divide two numbers", () => {
    expect(MODULE.div(1, 2)).toBe(0.5);
  });
});