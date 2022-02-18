//MINIMUM

//Write a function min that takes two arguments and returns their minimum.

//using regular if-else
const minVal = (a, b) => {
  if (a < b) {
    return a;
  } else if (a === b) {
    return "numbers are equal";
  } else {
    return b;
  }
};

console.log(minVal(0, 10));
console.log(minVal(0, -10));

//using ternary operator
const minValue = (a, b) => {
  return a < b ? a : b;
};

console.log(minValue(0, 10));
console.log(minValue(0, -10));
