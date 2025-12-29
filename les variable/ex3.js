
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("donnez ton age   " , (num) => {
 num = Number(num);
 if (num >= 18 ) {
    console.log(" Éligibl deux e au vote");
    
 
 } else {
    console.log("Non éligible");
 }
 rl.close();
 });