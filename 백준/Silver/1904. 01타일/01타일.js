const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let array = [1, 2];
let num; 

rl.on("line", (input) => {
  num = parseInt(input); 
  rl.close();
});

rl.on("close", () => {
  if (num > 1) {
    for (let i = 2; i < num; i++) {
      array[i] = (array[i - 1] + array[i - 2]) % 15746; 
    }
  }
  console.log(array[num - 1] % 15746);  
  process.exit();
});
