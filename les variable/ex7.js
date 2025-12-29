const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Entrez mot de passe : ", (motDePasse) => {
  let nombreDeLettres = 0;

  
  for (let i = 0; i < motDePasse.length; i++) {
    if (/[a-zA-Z]/.test(motDePasse[i])) {
      nombreDeLettres++;
    }
  }

 
  if (nombreDeLettres >= 8) {
    console.log("Fort");
  } else if (nombreDeLettres >= 6) {
    console.log("Moyen");
  } else if (nombreDeLettres >= 8) {
    console.log("FORT");
  }

  rl.close();
});


// hada fiha wahd mosa3ada mn ai //