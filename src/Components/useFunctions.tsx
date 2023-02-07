import React, { useMemo, useState } from "react";
import { configFunction } from "../utils/configFunction";

interface Fee {
  unit: "value" | "distance" | "item" | "time" | "total";
  threshold: number;
  clause: ">" | "<" | ">=" | "<=";
  rate: number;
  interval: number | null;
}
const useFunctions = (fees: Fee[]) => {
  const functions = useMemo(() => {
    console.log("hello");
    const functionData = {
      valueFunctions: [],
      distanceFunctions: [],
      itemFunctions: [],
      timeFunctions: [],
      totalFunctions: [],
    } as {
      valueFunctions: Array<(input: number) => number>;
      distanceFunctions: Array<(input: number) => number>;
      itemFunctions: Array<(input: number) => number>;
      timeFunctions: Array<(input: number) => number>;
      totalFunctions: Array<(input: number) => number>;
    };

    fees.forEach((props: Fee) => {
      switch (props.unit) {
        case "value":
          functionData.valueFunctions.push(configFunction(props));
          break;
        case "distance":
          functionData.distanceFunctions.push(configFunction(props));
          break;
        case "item":
          functionData.itemFunctions.push(configFunction(props));
          break;
        case "time":
          functionData.timeFunctions.push(configFunction(props));
          break;
        case "total":
          functionData.totalFunctions.push(configFunction(props));
          break;
      }
    });
    return functionData;
  }, [fees]);

  return { functions };
};

export default useFunctions;
