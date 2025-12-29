
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Quel est ton nbr? ", (nbr ) => {
 nbr = Number(nbr);

 for ( let i = 1; i < 11 ; i++) {
 console.log (nbr * i ) 
    
  }
rl.close();
});