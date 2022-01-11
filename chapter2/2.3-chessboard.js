// CHESSBOARD

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
