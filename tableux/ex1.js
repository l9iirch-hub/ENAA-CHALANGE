const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = [];
let count = 0;

console.log("Veuillez entrer 4 nombres :");

rl.on('line', (input) => {
    let n = Number(input);
    
    numbers.push(n);
    count++;

    if (count < 4) {
        console.log(`Entrez le nombre ${count + 1} :`);
    } else {
        console.log("Les nombres dans l'ordre inverse :");
        console.log(numbers.reverse());
        rl.close();
    }
});
