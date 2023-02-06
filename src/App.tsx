import React, { useEffect, useState } from "react";
import { validate } from "./validate";
import { ErrorState, ChargeState, FormState } from "./utils/types";
import {
  initialState,
  initialErrorState,
  initialChargeState,
  feeArray,
} from "./utils/consts";
import { isObjectEmpty, toCurrency, roundUp } from "./utils/menu";
import CalcForm from "./Form";
import {} from "./placeholders";
import useFunctions from "./useFunctions";
import { preconditionsArr, accumulatorsArr } from "./placeholders";

type TotalFee = number | "";

const initialTotal = "";

export default function App() {
  const { functions } = useFunctions(feeArray);
  const [state, setState] = useState<FormState>(initialState);
  const [charges, setCharges] = useState<ChargeState>(initialChargeState);
  const [errors, setErrors] = useState<ErrorState>(initialErrorState);
  const [totalDeliveryFee, setTotalDeliveryFee] =
    useState<TotalFee>(initialTotal);

  // free delivery/no delivery
  const checkPreconditons = (state: FormState, funcs: Function[]) => {
    return funcs.map((func) => (func(state) ? true : false));
  };

  // calc individual fees from inputs
  const applyFees = (value: number | Date, funcs: Function[]) => {
    return funcs.reduce((acc, func) => acc + func(value), 0);
  };

  // calc totals from returns
  const applyAccumulaters = (
    state: FormState,
    charges: ChargeState,
    funcs: Function[]
  ) => {
    let chargesTotal = Object.values(charges).reduce(
      (acc, value) => acc + value,
      0
    );
    return accumulatorsArr.reduce(
      (acc, func) => func(state, charges, acc),
      chargesTotal
    );
  };

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const { valueFunctions, distanceFunctions, itemFunctions, timeFunctions } =
      functions;
    const { cartValue, deliveryDistance, numberOfItems, orderTime } = state;
    let errorsValidation = validate(state);
    setErrors(errorsValidation);
    if (isObjectEmpty(errorsValidation) && orderTime) {
      const noPreconditionBlocks = checkPreconditons(
        state,
        preconditionsArr
      ).some((result) => result === false);
      if (noPreconditionBlocks === true) {
        const chargesCalc = {
          cartFee: toCurrency(applyFees(cartValue, valueFunctions)),
          distanceFee: roundUp(applyFees(deliveryDistance, distanceFunctions)),
          itemsFee: toCurrency(applyFees(numberOfItems, itemFunctions)),
          timeFee: toCurrency(applyFees(orderTime, timeFunctions)),
        };
        setCharges(chargesCalc);
        let getTotal = applyAccumulaters(state, chargesCalc, accumulatorsArr);
        setTotalDeliveryFee(getTotal);
      } else {
        setTotalDeliveryFee(0);
      }
    }
  };

  return (
    <div>
      <CalcForm
        state={state}
        setState={setState}
        setCharges={setCharges}
        errors={errors}
        setErrors={setErrors}
        totalDeliveryFee={totalDeliveryFee}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
