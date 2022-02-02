// DEEP COMPARISON

//The == operator compares objects by identity. But sometimes you’d prefer to compare the values of their actual properties.

// Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties,
// where the values of the properties are equal when compared with a recursive call to deepEqual.

// To find out whether values should be compared directly (use the === operator for that) or have their properties compared,
// you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison.
// But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".

// The Object.keys function will be useful when you need to go over the properties of objects to compare them.

let obj = {
  here: { is: "an" },
  object: 2,
};

//hey guys, I wasn't able to figure out a solution using recursion as the question asked. So I did a simpler approach.
const deepEqual = (firstParam, secondParam) => {
  if (firstParam === secondParam) return true;
  if (typeof firstParam !== "object" || firstParam === null) return false;
  if (typeof secondParam !== "object" || secondParam === null) return false;

  if (JSON.stringify(firstParam) === JSON.stringify(secondParam)) {
    return true;
  } else {
    return false;
  }
};

console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, { here: { is: 1 }, object: 2 }));
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
