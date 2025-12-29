const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Donne un nombre :  ", (nom) => {
nom = Number(nom);
if (nom % 5 === 0 || nom % 3 === 0  ) {
     console.log("  FizzBuzz "  );
 }
 else if (nom % 5 === 0 ) {
    console.log("  Buzz  "  );
 }
 else if ( nom % 3 === 0  ) {
    console.log("   Fizz  "  );
 } else {
     console.log( nom );
 }
 rl.close();
 });
 
     