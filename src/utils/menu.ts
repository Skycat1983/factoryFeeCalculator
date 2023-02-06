import React from "react";

//* BOOLS *
export const isObjectEmpty = (obj: object) =>
  Object.values(obj).every((val) => val === null || val === "") ? true : false;

//! BASIC
export const sum = (...values: number[]) => {
  return values.reduce((a, b) => a + b, 0);
};
export const difference = (a: number, b: number) => {
  return a - b;
};
export const product = (a: number, b: number) => {
  return a * b;
};
export const quotient = (a: number, b: number) => {
  return a / b;
};

export const add = (a: number, b: number, c: number, d: number) => {
  return a + b + c + d;
};

export const objSum = (obj: object) => {
  let total = Object.values(obj).reduce((acc, val) => acc + val, 0);
  return toCurrency(total);
};

//! COMPOUND
export const surcharge = (
  quantity: number,
  threshold: number,
  rate: number
) => {
  return product(quotient(quantity, threshold), rate);
};

export const roundUp = (number: number) => {
  return Math.ceil(number);
};

export const toCurrency = (number: number) => {
  return parseFloat(number.toFixed(2));
};

export const accumulate = () => {};

export const compare = (a: number, b: number) => {
  return window.indexedDB.cmp(a, b);
};
export const Iit = (a: number, b: number): boolean => a >= b;
export const It = (a: number, b: number): boolean => a > b;
export const iIT = (a: number, b: number): boolean => a <= b;
export const iT = (a: number, b: number): boolean => a < b;

export const conditions: {
  [key: string]: (x: number, y: number) => boolean;
} = {
  Xy: (x: number, y: number) => x > y,
  xY: (x: number, y: number) => x < y,
  Xxy: (x: number, y: number) => x >= y,
  xXY: (x: number, y: number) => x <= y,
};

export function getTemporal(reqFormat: string) {
  const date = new Date();
  const now_utc = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  );
  if (reqFormat === "hours") {
    console.log("date.getUTCHours()", date.getUTCHours());
    return date.getUTCHours();
  } else if (reqFormat === "days") {
    console.log("first");
  } else {
    return now_utc;
  }
}
