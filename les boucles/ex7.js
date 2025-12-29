const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let sum = 0;
let count = 0;

console.log("donnez 10 nombres (les nombres négatifs seront ignorés) :");

rl.on('line', (input) => {
    let n = Number(input);

    if (isNaN(n)) {
        console.log("Ce n'est pas un nombre. Réessayez.");
        return;
    }

    if (n >= 0) {
        sum += n;
    } else {
        console.log("Nombre négatif ignoré.");
    }

    count++;

    if (count === 10) {
        console.log("La somme des nombres valides est:", sum);
        rl.close();
    }
});
