const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Es-tu connecté ? (oui/non)" , (x) => {
    x = x.toLowerCase();

   if (x === "oui") {
    console.log ("Bienvenue");
   } else if (x === "non" ) {
     console.log ("Veuillez vous connecter");
   } else {
    console.log ("error");
   }

rl.close();
});