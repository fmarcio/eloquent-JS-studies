//BEAN COUNTING

/* You can get the Nth character, or letter, from a string by writing "string"[N]. 
The returned value will be a string containing only one character (for example, "b"). 
The first character has position 0, which causes the last one to be found at position string.length - 1. 
In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, 
except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). 
Rewrite countBs to make use of this new function. */

const countBs = (str: string): number | string => {
  const hasB = str.includes("B");
  if (hasB) {
    //counting the Bs
    return str.split("B").length - 1;
  } else {
    return `There's no Bs in the string passed`;
  }
};

console.log(countBs("BBC"));

const countChar = (str: string, char: string): number | string => {
  const hasChar = str.includes(char);
  if (hasChar) {
    return str.split(char).length - 1;
  } else {
    return "This char doesn't exist in the string passed";
  }
};

console.log(countChar("kakkerlak", "k"));

const UpdatedCountBs = (str: string): number | string => {
  return countChar(str, "B");
};

console.log(UpdatedCountBs("Bulbasaur"));

//count Bs using matchAll()
const regex: RegExp = /b/gi;

const countBsMatchAll = (str: string): number => {
  let count = 0;
  const hasB = str.matchAll(regex);

  for (let b of hasB) {
    count++;
  }

  return count;
};

console.log(countBsMatchAll("Bubbaloo"));

//count char through iteration
const countOverIterations = (str: string, char: string): number => {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) count++;
  }

  return count;
};

console.log(countOverIterations("baloon", "o"));
