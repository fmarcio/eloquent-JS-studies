// FLATTENING

//Use the reduce method in combination with the concat method to “flatten”
//an array of arrays into a single array that has all the elements of the original arrays.

let arrays: Array<any> = [[1, 2, 3], [4, 5], [6]];
//expected output: [1,2,3,4,5,6]

let arraysConcat = arrays.reduce(
  (acc: Array<any>, item: Array<any>): Array<any> => acc.concat(item)
);

console.log(arraysConcat);
