//REVERSING AN ARRAY

// Arrays have a reverse method that changes the array by inverting the order in which its elements appear.
// For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces
// a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given
// as argument by reversing its elements. Neither may use the standard reverse method.

const reverseArray = (array: number[]): number[] => {
  let newArray = [];
  array.forEach((item) => newArray.unshift(item));
  return newArray;
};

console.log(reverseArray([1, 2, 3, 4, 5]));

const reverseArrayInPlace = (arr: number[] | string[]): number[] | string[] => {
  const arrLength = arr.length;
  const halfLength = Math.floor(arrLength / 2);

  for (let i = 0; i < halfLength; i++) {
    let item = arr[i];
    //swapping the items positions
    arr[i] = arr[arrLength - 1 - i];
    arr[arrLength - 1 - i] = arr[i];
    arr[arrLength - 1 - i] = item;
  }

  return arr;
};

console.log(reverseArrayInPlace(["c", "b", "a"]));
