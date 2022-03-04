//MINIMUM

//Write a function min that takes two arguments and returns their minimum.

//using regular if-else
const minVal = (a: number, b: number): number | string => {
  if (a < b) {
    return a;
  } else if (a === b) {
    return "numbers are equal";
  }
  return b;
};

console.log(minVal(0, 10));
console.log(minVal(0, -10));

//using ternary operator
const minValue = (a: number, b: number): number => {
  return a < b ? a : b;
};

console.log(minValue(0, 10));
console.log(minValue(0, -10));
