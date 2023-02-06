import { Fee } from "./types";

export const freeDelivery = {
  unit: "value",
  threshold: 100,
  clause: "<=",
};

export const valueFee = {
  unit: "value",
  threshold: 10,
  clause: "<",
  rate: 1,
  interval: 1,
} as Fee;

export const distanceFee = {
  unit: "distance",
  threshold: 0,
  clause: ">",
  rate: 2,
  interval: null,
} as Fee;

export const distanceFee2 = {
  unit: "distance",
  threshold: 1000,
  clause: ">",
  rate: 1,
  interval: 500,
} as Fee;

export const itemFee = {
  unit: "item",
  threshold: 4,
  clause: ">",
  rate: 0.5,
  interval: 1,
} as Fee;

export const itemFee2 = {
  unit: "item",
  threshold: 11,
  clause: ">",
  rate: 1.2,
  interval: null,
} as Fee;

export const feeArray: Fee[] = [
  valueFee,
  distanceFee,
  distanceFee2,
  itemFee,
  itemFee2,
];

export const timeMod = {
  unit: "time",
  threshold: [15, 17],
  clause: "><",
  consequence: "percent-multiplier",
  rate: 20,
};

export const feeCeiling = {
  unit: "total",
  threshold: 15,
  clause: ">",
  consequence: "fee-ceiling",
  rate: 0,
};

export const freeDeliveryMod = {
  unit: "value",
  threshold: [100],
  clause: ">",
  consequence: "percent-discount",
  rate: 20,
};

export const initialState = {
  cartValue: 0,
  deliveryDistance: 0,
  numberOfItems: 0,
  // orderTime: new Date(),
  orderTime: new Date(),
};

export const initialErrorState = {
  cartValueError: "",
  deliveryDistanceError: "",
  numberOfItemsError: "",
  orderTimeError: "",
};

export const initialChargeState = {
  cartFee: 0,
  distanceFee: 0,
  itemsFee: 0,
  timeFee: 0,
  totalFee: 0,
};
