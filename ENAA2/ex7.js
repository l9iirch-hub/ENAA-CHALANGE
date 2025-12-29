const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Entrez nom d’utilisateur: ", (nom) => {
  rl.question("Entrez mot de passe: ", (mdp) => {



    if (nom === "admin" && mdp === "1234") {
      console.log("Bienvenue Admin");
    } else if (nom === "admin") {
      console.log("Mot de passe incorrect");
    } else if (mdp === "1234") {
      console.log("Utilisateur introuvable");
    } else {
      console.log("Utilisateur et mot de passe incorrects");
    }

    
    rl.close();
  });
});