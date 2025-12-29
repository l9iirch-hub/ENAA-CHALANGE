const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Entrez  votre nom    ", (nom) => {
  rl.question("Entrez age : ", (age) => {
    age=Number(age);
  rl.question("Entrez  votre email    ", (email) => {  



    if (nom.length  >= 1 && age >= 13 && email.includes("@")) {
      console.log("Formulaire valide");
    }else {
    console.log("Erreur dans le formulaire")
    }
    rl.close();
  });
});
});