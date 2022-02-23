// YOUR OWN LOOP

//Write a higher-order function loop that provides something like a for
//loop statement. It takes a value, a test function, an update function,
//and a body function. Each iteration, it first runs the test function on
//the current loop value and stops if that returns false.

//Then it calls the body function, giving it the current value.
//Finally, it calls the update function to create a new value and starts
//from the beginning.

const loop = (
  value: number,
  testFunc: Function,
  updateFunc: Function,
  bodyFunc: Function
): void => {
  while (testFunc(value)) {
    bodyFunc(value);
    value = updateFunc(value);
  }
};

loop(
  5,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);
