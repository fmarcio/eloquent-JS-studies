// 1 - LOOPING A TRIANGLE

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

// 2 - FIZZBUZZ

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0 && i % 5 !== 0) {
    console.log("Fizz");
  } else if (i % 5 === 0 && i % 3 !== 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// 3 - CHESSBOARD

let line = "";

// outer loop = build the lines using \n
for (i = 0; i < 8; i++) {
  // inner loop = build spaces or characters
  for (j = 0; j < 8; j++) {
    if ((i + j) % 2 == 0) {
      line += " ";
    } else {
      line += "#";
    }
  }
  line += "\n";
}

console.log(line);
