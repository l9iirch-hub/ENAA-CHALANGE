
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("donnez moi le  score    " , (num1) => {
 num1 = Number(num1);
 
 if ( num1 >100 ) {
    console.log("   error  "  );
 }
else if ( num1 >=90 ) {
    console.log(" A " );
 }
 
  else if ( num1 >=80 ) {
    console.log(" B " );
 }
  else if ( num1 >=70 ) {
    console.log(" C " );
 }
  else if ( num1>=60 ) {
    console.log(" D " );
 }
  else {
    console.log(" F " );
 }
 rl.close();
 });
