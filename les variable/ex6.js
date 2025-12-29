
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("donnez moi la année    " , (num1) => {
 num1 = Number(num1);
 
 if ( num1 % 400 === 0 || num1 % 4 === 0 || num1 % 100 === 0  ) {
    console.log("   bissextile  "  );
 }
 else {
    console.log("  non bissextile  "  );
 }
 rl.close();
 });