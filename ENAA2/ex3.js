const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("entre un nomber" , (a) => {
 a = Number(a);

  let somme = a + 5 ;

console.log("la somme est  " + somme);
rl.close();
});
