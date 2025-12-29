const { log } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = [];
let count = 0;

console.log("Veuillez entrer 7 nombres :");

rl.on('line', (input) => {
    let n = Number(input);
    numbers.push(n);
    count++;

    if (count < 1) {
        console.log(`Entrez le nombre ${count + 1} :`);
    } else {
         let squares = numbers.map(x => x * x);
          console.log("Nombres saisis :", numbers);
        console.log("Carrés :", squares);
       
    }
     rl.close();
});
