const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Entrez le prix : ", (prix) => {
    prix = Number(prix);
  rl.question("Entrez le  catégorie   etudiant, senior, ou autre) ", (ctg) => {
    let some


    if (ctg === "etudiant" ) {
        some =prix - ( prix * 20 / 100 );
     
    } else if (ctg === "senior") {
        some = prix - ( prix * 30 / 100 );
      
    } else if (ctg === "autre") {
      some = prix ;
    }
     console.log(`Prix à payer : ${some.toFixed(2)} DH`);
        rl.close();
    rl.close();
  });
});