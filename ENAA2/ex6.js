const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let fruits = []; 

rl.question("Quel est ton nom ?", (nom) => {
    nom = nom ;
rl.question("Quel est ton âge ?" , (age) => {
  var  age = Number(age) ;
rl.question("Quel est ton nouvelle âge ?" , (age) => {
  var  age = Number(age) ;

let personne = {
    nom : nom ,
    age : Number (age)
};
 console.log("Personne créée :", personne);
 rl.close();
    });
  });
});