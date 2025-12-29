const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Entrez la note : ", (nt) => {
    nt = Number(nt);

    if (isNaN(nt)) {
        console.log("Veuillez entrer un nombre !");
    } else if (nt < 0 || nt > 20) {
        console.log("Note invalide");
    } else if (nt === 20) {
        console.log("Parfait");
    } else if (nt >= 16) {
              console.log("Très bien");
    } else if (nt >= 12) {
        console.log("Assez bien");
          } else if (nt >= 10) {
        console.log("Passable");
    } 

    rl.close();
});
