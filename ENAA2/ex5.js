const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let fruits = []; 

rl.question("Fruit 1 : ", (fruit1) => {
  fruits.push(fruit1);
  rl.question("Fruit 2 : ", (fruit2) => {
    fruits.push(fruit2);

    rl.question("Fruit 3 : ", (fruit3) => {
      fruits.push(fruit3);
      fruits[1] = "Mangue";

      console.log("Fruits mis à jour : " + fruits.join(", "));

      rl.close();
    });
  });
});
