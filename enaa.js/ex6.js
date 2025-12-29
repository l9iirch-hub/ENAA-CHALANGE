const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("entrez la vitesse " ,(vitesse) => {
 vitesse = Number(vitesse);
 rl.question("entrez la distance" ,(distance) => {
 distance = Number(distance);

 console.log("LA TEMPS DE TRAJET  = " + ( vitesse / distance));
 rl.close();
 });
});
