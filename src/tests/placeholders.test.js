import { describe, expect, test } from "@jest/globals";
import {
  placeholderFreeDelivery,
  preconditionsArr,
  placeholderTimeCalc,
} from "../utils/placeholders";

test("check if cartValue is more than or equal to the threshold (100) to return true", () => {
  expect(
    placeholderFreeDelivery({
      cartValue: 102,
      deliveryDistance: 20,
      numberOfItems: 50,
    })
  ).toBe(true);
});

test("check if cartValue is less than the threshold (100) to return false", () => {
  expect(
    placeholderFreeDelivery({
      cartValue: 99,
      deliveryDistance: 20,
      numberOfItems: 50,
    })
  ).toBe(false);
});
