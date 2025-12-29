const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("choisir  rouge, jaune ou vert     ", (colour) => {
colour = colour;
switch (colour) {
  case "rouge":
    console.log("Arrêt");
    break;
  case "jaune":
    console.log("Préparez-vous");
    break;
  case "vert":
    console.log("Allez");
    break;
  
}
  rl.close();
});
