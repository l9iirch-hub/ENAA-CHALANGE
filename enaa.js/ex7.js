const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Entrez le rayon du cercle : ", (reponse) => {
  let r = Number(reponse);         
  let C = 2 * Math.PI * r;         
  console.log("La circonférence du cercle est : " + C); 
  rl.close();
});
