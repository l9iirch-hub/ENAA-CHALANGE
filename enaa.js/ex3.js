const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let A = 1;
let B = 2;
let C = 3;

console.log("Avant échange : A =", A, "B =", B, "C =", C);
let temp = A;
A = C;        
C = B;        
B = temp;   

console.log("Après échange : A =", A, "B =", B, "C =", C);