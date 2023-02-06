import {
  sum,
  difference,
  product,
  quotient,
  surcharge,
  objSum,
  roundUp,
  toCurrency,
} from "../utils/menu";

test("divide 12 by 6 to equal 2, then multiply by 4 to equal 8", () => {
  expect(surcharge(12, 6, 4)).toBe(8);
});

test("round 1.0099 to 2 decimal places", () => {
  expect(toCurrency(1.0099)).toBe(1.01);
});

test("round up 1.00001 to 2", () => {
  expect(roundUp(1.00001)).toBe(2);
});

test("add 1 plus 2 plus 3 plus 4 to equal 10", () =>
  expect(objSum({ a: 1, b: 2, c: 3, d: 4 })).toBe(10));

test("add 1 to 2 to 3 to 4 to 5", () => {
  expect(sum(1, 2, 3, 4, 5)).toBe(15);
});

test("divide 6 x 3 to equal 2", () => {
  expect(quotient(6, 3)).toBe(2);
});

test("multiply 2 x 3 to equal 6", () => {
  expect(product(2, 3)).toBe(6);
});

test("subtract 4 - 1 to equal 3", () => {
  expect(difference(4, 1)).toBe(3);
});

test("add 2 + 5 to equal 7", () => {
  expect(sum(2, 5)).toBe(7);
});
