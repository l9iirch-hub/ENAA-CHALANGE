const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Entrez  pays , USA , FRANCE    ", (pays) => {
  rl.question("Entrez age : ", (age) => {
    age=Number(age);



    if (pays === "USA" && age >= 21) {
      console.log("Tu es majeur");
    } else if (pays === "USA" && age < 21) {
      console.log("Tu es mineur");
    } else if (pays === "FRANCE" && age >= 18) {
      console.log("Tu es majeur");
   } else if (pays === "FRANCE" && age < 18) {
      console.log("Tu es mineur");
   }
    
    rl.close();
  });
});
