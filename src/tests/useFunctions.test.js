import { useFunctions } from "../Components/useFunctions";
import { freeDelivery } from "../utils/consts";

test("check if freeDelivery const returns a function", () => {
  expect(
    useFunctions({
      unit: "value",
      threshold: 100,
      clause: "<=",
    })
  ).toBe(true);
});
