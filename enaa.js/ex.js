const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let nom, prenom, age, sexe, telephone;

rl.question("Entrez votre nom : ", (nom) => {
 nom = nom;

  rl.question("Entrez votre prénom : ", (prenom) => {
   prenom = prenom;

    rl.question("Entrez votre âge : ", (age) => {
     age = age;

      rl.question("Entrez votre sexe (H/F) : ", (sexe) => {
       sexe = sexe;

        rl.question("Entrez votre téléphone : ", (telephone) => {
          telephone = telephone;

          console.log("Nom : " + nom);
          console.log("Prénom : " + prenom);
          console.log("Âge : " + age + " ans");
          console.log("Sexe : " + sexe);
          console.log("Téléphone : " + telephone);

          rl.close();
        });
      });
    });
  });
});
