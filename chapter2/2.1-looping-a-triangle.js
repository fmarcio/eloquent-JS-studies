// LOOPING A TRIANGLE

// using a for loop

let count = "";

for (i = 1; i <= 7; i++) {
  count += "#";
  console.log(count);
}

// using a while loop

let num = 0;
let count2 = "";

while (num < 7) {
  count2 += "#";
  console.log(count2);
  num++;
}

// using a do-while loop

let anotherNum = 0;
let count3 = "";

do {
  count3 += "#";
  console.log(count3);
  anotherNum++;
} while (anotherNum < 7);
