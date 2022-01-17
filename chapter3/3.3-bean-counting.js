//BEAN COUNTING

/* You can get the Nth character, or letter, from a string by writing "string"[N]. 
The returned value will be a string containing only one character (for example, "b"). 
The first character has position 0, which causes the last one to be found at position string.length - 1. 
In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, 
except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). 
Rewrite countBs to make use of this new function. */

const countBs = (string) => {
  const str = string.includes("B");
  if (str) {
    //counting the Bs
    return string.split("B").length - 1;
  } else {
    return `There's no Bs in the string passed`;
  }
};

console.log(countBs("BBC"));

const countChar = (string, char) => {
  const str = string.includes(char);
  if (str) {
    return string.split(char).length - 1;
  } else {
    return "This char doesn't exist in the string passed";
  }
};

console.log(countChar("kakkerlak", "k"));

const UpdatedCountBs = (string) => {
  return countChar(string, "B");
};

console.log(UpdatedCountBs("Bulbasaur"));
