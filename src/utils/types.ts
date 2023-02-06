import React from "react";

export interface FunctionState {
  valueFunctions: Array<(input: number) => number>;
  distanceFunctions: Array<(input: number) => number>;
  itemFunctions: Array<(input: number) => number>;
  timeFunctions: Array<(input: number) => number>;
  totalFunctions: Array<(input: number) => number>;
}

export interface Modifier {
  unit: string;
  threshold: [number] | [number, number];
  clause: ">" | "<" | ">=" | "<=" | "><";
  consequence:
    | "percent-multiplier"
    | "percent-discount"
    | "fee-ceiling" //! maybe interchangable with calc excess, subtract excess
    | "fee-floor";
  rate: number;
}
export interface Props {
  state: FormState;
  setState: React.Dispatch<React.SetStateAction<FormState>>;
  setCharges: React.Dispatch<React.SetStateAction<ChargeState>>;
  errors: ErrorState;
  setErrors: React.Dispatch<React.SetStateAction<ErrorState>>;
  totalDeliveryFee: number | "";
  handleSubmit: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

export interface Fee {
  unit: "value" | "distance" | "item" | "time" | "total";
  threshold: number;
  clause: ">" | "<" | ">=" | "<=";
  rate: number;
  interval: number | null;
}

export interface ErrorState {
  cartValueError: string | null;
  deliveryDistanceError: string | null;
  numberOfItemsError: string | null;
  orderTimeError: string | null;
}

export interface ChargeState {
  cartFee: number;
  distanceFee: number;
  itemsFee: number;
  timeFee: number;
  // total: number;
}

export interface Quantity {
  value: number;
  type: "float" | "int";
}

export interface FormState {
  cartValue: number;
  deliveryDistance: number;
  numberOfItems: number;
  orderTime: Date | null;
}

export interface DataState {
  cartValue: Quantity;
  deliveryDistance: Quantity;
  numberOfItems: Quantity;
  orderTime: Date | null;
}
