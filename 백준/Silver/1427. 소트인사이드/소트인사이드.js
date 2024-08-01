const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num;

rl.on("line", (input) => {
  num = input;
  rl.close();
});

rl.on("close", () => {
  let array = num
    .split("")
    .map((x) => Number(x))
    .sort((a, b) => b - a);
  console.log(array.join(""));
  process.exit();
});
