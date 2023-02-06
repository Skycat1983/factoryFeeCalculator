import { difference } from "./utils/menu";
import { ChargeState, FormState } from "./utils/types";

//! these functions would eventually be replaced by dynamically generated ones

export const placeholderFreeDelivery = (state: FormState) => {
  let unit = "cartValue";
  let threshold = 100;
  let clause = ">=";
  switch (unit) {
    case "cartValue":
      switch (clause) {
        case "<":
          return state.cartValue < threshold;
        case ">=":
          return state.cartValue >= threshold;
        default:
          return false;
      }
    case "deliveryDistance":
      switch (clause) {
        case "<":
          return state.deliveryDistance < threshold;
        case ">=":
          return state.deliveryDistance >= threshold;
        default:
          return false;
      }
    case "numberOfItems":
      switch (clause) {
        case "<":
          return state.numberOfItems < threshold;
        case ">=":
          return state.numberOfItems >= threshold;
        default:
          return false;
      }
  }
  return false;
};

export const preconditionsArr = [placeholderFreeDelivery];

export const addObjectPropertyValues = (
  state: FormState,
  charges: ChargeState,
  chargesTotal: number
) => {
  return Object.values(charges).reduce((acc, value) => acc + value, 0);
};

export const placeholderTimeCalc = (
  state: FormState,
  charges: ChargeState,
  chargesTotal: number
) => {
  const { orderTime } = state;
  if (!orderTime) {
    return chargesTotal;
  }
  let myDate = orderTime.getUTCHours();
  let threshold = [15, 19];
  let rate = 1.2;
  let thisFee = chargesTotal;

  if (myDate >= threshold[0] && myDate < threshold[1]) {
    let thisTotal = chargesTotal * rate;
    let thisRate = thisTotal - chargesTotal;
    return thisTotal;
  } else {
    return thisFee;
  }
};

export const placeholderFeeCeiling = (
  state: FormState,
  charges: ChargeState,
  chargesTotal: number
) => {
  let feeCeiling = 15;
  let savings = difference(chargesTotal, feeCeiling);
  let thisFee = 0;
  if (chargesTotal >= feeCeiling) {
    thisFee = feeCeiling;
  } else {
    thisFee = chargesTotal;
  }
  return thisFee;
};

export const accumulatorsArr = [
  addObjectPropertyValues,
  placeholderTimeCalc,
  placeholderFeeCeiling,
];
