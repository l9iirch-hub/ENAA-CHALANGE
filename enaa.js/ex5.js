const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("entrez UNE Numbre " ,(A) => {
 A = Number(A);
 rl.question("entrez UNE Numbre " ,(B) => {
 B = Number(B);
 rl.question("entrez UNE Numbre " ,(C) => {
 C = Number(C);
 rl.question("entrez UNE Numbre " ,(D) => {
 D = Number(D);
 console.log("LA SOMME EST  = " + (A + B + C + D));
 console.log("LA MOYENNE EST  = " + ((A + B + C + D)/2));
 rl.close();
 });
});
});
});