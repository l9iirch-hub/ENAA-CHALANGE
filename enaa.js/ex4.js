const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


 
rl.question("entrez A " ,(A) => {
 A = Number(A);
 rl.question("entrez B ", (B) => {
 B = Number(B); 
    console.log("a + b = " + (A + B));
console.log("a - b = " + (A - B));
console.log("a * b = " + (A * B));
console.log("a / b = " + (A / B));
console.log("a % b = " + (A % B));
    rl.close();
 });
});