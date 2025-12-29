const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Entrez le pays (FRANCE ou AUTRE) : ", (pays) => {
  rl.question("Entrez le prix : ", (prix) => {
    prix = Number(prix);
    let some;

    if (prix >= 50) {
      some = prix;
    } else if (pays === "FRANCE") {
      some = prix + 5;
    } else if (pays === "AUTRE") {
      some = prix + 10;
    } else {
      console.log("Pays non reconnu !");
      rl.close();
      return;
    }

    console.log(`LE PRIX EST ${some.toFixed(2)} €`);
    rl.close();
  });
});
