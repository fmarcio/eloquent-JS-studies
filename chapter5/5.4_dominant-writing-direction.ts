//DOMINANT WRITING FUNCTION

//Write a function that computes the dominant writing direction in a string of text. Remember that each script object has a direction property that can be
//"ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).

//The dominant direction is the direction of a majority of the characters that have a script associated with them.
//The characterScript and countBy functions defined earlier in the chapter are probably useful here.

//SCRIPTS values are on scripts.js
var SCRIPTS;

//the two functions below were provided by the book, so I'll not format them to TS

//Finding the corresponding script when given a character code
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        //"test" passed on the some method
        return code >= from && code < to;
      })
    ) {
      //return the script that has passed on the some method test
      return script;
    }
  }
  return null;
}

//Count the characters that belong to each script
function countBy(items, groupName) {
  let counts = [];

  for (let item of items) {
    let name = groupName(item);
    //find the first value that returns true to the given function on findIndex
    let known = counts.findIndex((c) => c.name == name);

    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

// Defining the requested function

const dominantDirection = (text: string): string => {
  let count = countBy(text, (char) => {
    //count chars based on characterScript
    let script = characterScript(char.codePointAt(0));

    return script ? script.direction : "none";
    //desconsidering nameless scripts
  }).filter(({ name }) => name != "none");

  if (count.length == 0) return "ltr";

  return count.reduce((acc, item) => (acc.count > item.count ? acc : item))
    .name;
};
