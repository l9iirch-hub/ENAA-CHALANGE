const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Quel est ton prénom ?" , (nom) => {
 nom = nom
console.log("Bonjour " + nom +"!");
rl.close();
});
