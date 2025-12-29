
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("donnez une number   " , (num) => {
 num = Number(num);
 if (num > 0 ) {
    console.log(" Positive");
    
 }else if (num < 0)  {
    console.log ("Negative");
 }
  else {
    console.log("zero");
 }
 rl.close();
 });