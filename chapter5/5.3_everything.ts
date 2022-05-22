// EVERYTHING

//Analogous to the some method, arrays also have an every method.
//This one returns true when the given function returns true for every element
//in the array. In a way, some is a version of the || operator that acts on arrays,
//and every is like the && operator.

//Implement every as a function that takes an array and a predicate function as
//parameters. Write two versions, one using a loop and one using the some method.

const every = (array: Array<number>, testFunc: Function): boolean => {
  for (let item of array) {
    if (!testFunc(item)) {
      return false;
    }
  }
  return true;
};

console.log(every([1, 2, 3], (n) => n < 10));
console.log(every([1, 2, 16], (n) => n < 10));
console.log(every([], (n) => n < 10));

const everyUsingSome = (array: Array<number>, testFunc: Function): boolean => {
  return !array.some((item) => !testFunc(item));
};

console.log(everyUsingSome([1, 2, 3], (n) => n < 10));
console.log(everyUsingSome([1, 2, 16], (n) => n < 10));
console.log(everyUsingSome([], (n) => n < 10));
