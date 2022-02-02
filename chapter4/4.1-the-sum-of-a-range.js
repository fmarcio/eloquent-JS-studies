//THE SUM OF A RANGE

// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.
// As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array.
// If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9].
// Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

const range = (start, end) => {
  let array = [];
  for (let i = start; i <= end; i++) {
    array.push(i);
  }
  return array;
};

console.log(range(1, 10));

//updated range
const updatedRange = (start, end, step = 1) => {
  let arr = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      arr.push(i);
    }
  }

  return arr;
};

console.log(updatedRange(1, 10, 3));
console.log(updatedRange(10, 1, -1));

//Sum array nums using reduce
const sumWithReduce = (currentVal, previousVal) => currentVal + previousVal;

console.log(range(1, 10).reduce(sumWithReduce));

//Sum array nums using recursion
const sum = (arr) => {
  //visualizing array first item poping out
  console.log(arr);
  if (arr.length === 0) {
    return 0;
  } else {
    const [firstNum, ...rest] = arr;
    return firstNum + sum(rest);
  }
};

console.log(sum(range(1, 10)));
