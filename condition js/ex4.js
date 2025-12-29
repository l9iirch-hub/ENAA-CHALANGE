const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Entrez le prix : ", (prix) => {
    prix = Number(prix);
  rl.question("Entrez  un statut    CDI, CDD , Stage) ", (ctg) => {
    let some


    if (ctg === "CDI" ) {
        some =prix - ( prix * 22 / 100 );
     
    } else if (ctg === "CDD") {
        some = prix - ( prix * 18 / 100 );
      
    } else if (ctg === "Stage") {
      ome = prix - ( prix * 10 / 100 );
    }
     console.log(`salaire est: ${some.toFixed(2)} DH`);
        rl.close();
    rl.close();
  });
});