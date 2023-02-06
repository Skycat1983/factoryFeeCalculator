import { FormState, ErrorState } from "./utils/types";

export function validate(state: FormState): ErrorState {
  const errors: ErrorState = {
    cartValueError: null,
    deliveryDistanceError: null,
    numberOfItemsError: null,
    orderTimeError: null,
  };
  type ErrorsKey = keyof ErrorState;
  console.log("state :>> ", state);
  const { cartValue, deliveryDistance, numberOfItems } = state;
  const fields = { cartValue, deliveryDistance, numberOfItems };

  const validateNums = (state: FormState) => {
    for (const [key, value] of Object.entries(fields)) {
      if (!value && value === 0) {
        console.log("checking no empy fields");
        errors[`${key}Error` as ErrorsKey] = "This field is required";
      }
      if (value !== null && value !== undefined && value < 0) {
        console.log("checking for negative numbers");
        errors[`${key}Error` as ErrorsKey] =
          "negative numbers don't exist here";
      }
      if (isNaN(Number(value))) {
        errors[`${key}Error` as ErrorsKey] = "This field must be a number";
      }
    }
  };
  const validateFormats = (state: FormState) => {
    if (errors.deliveryDistanceError === null && deliveryDistance % 1 !== 0) {
      errors.deliveryDistanceError = "delivery distance must be an integer";
    }
    if (errors.numberOfItemsError === null && numberOfItems % 1 !== 0) {
      errors.numberOfItemsError = "item count must be an integer";
    }
    if (
      errors.cartValueError === null &&
      cartValue > 0 &&
      (cartValue * 100) % 1 !== 0
    ) {
      errors.cartValueError = "cartValue must be to two decimal places";
    }
  };

  validateNums(state);
  validateFormats(state);

  return errors as ErrorState;
}
