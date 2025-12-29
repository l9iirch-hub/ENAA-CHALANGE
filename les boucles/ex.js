
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Quel est ton nom ? ", (nom) => {

  rl.question("Quel age as-tu ? ", (age) => {
    age = Number(age);

  
    if (age >= 18) {
      console.log("Tu es majeur ");
    } else {
      console.log("Tu es mineur ");
    }

 
    rl.question("\nEntrez le premier nombre : ", (n1) => {
      rl.question("Entrez le deuxième nombre : ", (n2) => {
        n1 = Number(n1);
        n2 = Number(n2);

     
        let somme = n1 + n2;

        console.log(`\nLa somme de ${n1} et ${n2} est : ${somme}`);

     
        console.log("\nBoucle while : compte à rebours de 3 à 1");
        let compteur = 3;
        while (compteur > 0) {
          console.log(compteur);
          compteur--;
        }

       
        console.log("\nMerci d'avoir utilisé ce programme, " + nom + " !");
        rl.close();
      });
    });
  });
});
