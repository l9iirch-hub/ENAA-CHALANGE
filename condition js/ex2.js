const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 let cote = 15 ;
rl.question("Entrez le nombre: ", (nbr) => {
    nbr = Number(nbr);
  


    if (nbr<10  ) {
        console.log("Trop bas");
     
    } 
    else if (nbr== 15) {
      console.log("Exact !");
    }else if (nbr>20) {
        console.log("Trop haut");
      
    } else if (10<nbr<15) {
      console.log("Tres proche");
    } else if (15<nbr<20) {
      console.log("Tres proche");
    }else if (nbr== 15) {
      console.log("Exact !");
    }
        rl.close();
    rl.close();
  });
