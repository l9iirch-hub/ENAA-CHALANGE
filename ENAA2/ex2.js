const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("entre un nomber" , (a) => {
 a = Number(a);
rl.question("entre un nomber" , (b) => {
 b = Number(b);
console.log("la somme est  " + (a+b));
rl.close();
});
});