const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Entrez un nombre à 3 chiffres : ", (nombre) => {
  let inverse = nombre[2] + nombre[1] + nombre[0];
  console.log("Le nombre inversé est : " + inverse);
  rl.close();
});
