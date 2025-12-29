const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Entrez un nombre : ", (nbm1) => {
    nbm1 = Number(nbm1);
rl.question("Entrez un nombre : ", (nbm2) => {
    nbm2 = Number(nbm2);
rl.question("Entrez un nombre : ", (nbm3) => {
    nbm3 = Number(nbm3);

const some = (nbm1 + nbm2 + nbm3) / 3;

        if (some >= 16) {
                console.log("Excellent");
            } else if (some >= 12 && some < 16) {
                console.log("Bien");
        } else if (some >= 10 && some < 12) {
                console.log("Passable");
            } else if (some < 10) {
                console.log("Échec"); }

            rl.close();
 });
});
});
