import { roundUp, toCurrency } from "./utils/menu";
import { Fee, Modifier } from "./utils/types";

export function configFunction(props: Fee) {
  let { threshold, clause, rate, interval } = props;
  let calc = (input: number) => {
    if (clause === "<" || clause === "<=") {
      rate = rate * -1;
    }
    let diff = input - threshold;
    if (!interval) {
      let thisFee = rate;
      return thisFee;
    } else {
      let thisFee = (diff / interval) * rate;

      return Math.abs(thisFee);
    }
  };

  switch (clause) {
    case ">":
      return (input: number) => (input > threshold ? calc(input) : 0);
    case "<":
      return (input: number) => (input < threshold ? calc(input) : 0);
    case ">=":
      return (input: number) => (input >= threshold ? calc(input) : 0);
    case "<=":
      return (input: number) => (input <= threshold ? calc(input) : 0);
    default:
      return (input: number) => 0;
  }
}

export function configTotal(props: Modifier) {
  let { unit, threshold, clause, consequence, rate } = props;
}
