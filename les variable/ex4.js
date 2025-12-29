
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("donnez nombre   " , (num1) => {
 num1 = Number(num1);
 rl.question("donne nombre   " , (num2) => {
 num2 = Number(num2);
 
 if (num1 > num2 ) {
    console.log("  le plus grand il  " +num1 );
    
 
 } else {
    console.log("  le plus grand il  " +num2 );
 }
 rl.close();
 });
 });