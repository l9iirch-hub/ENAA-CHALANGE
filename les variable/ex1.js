const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("donnez une number   " , (num) => {
 num = Number(num);
 if (num%2 == 0 ) {
    console.log(" pair")
    
 }else {
    console.log ("impair")
 }
 
 });