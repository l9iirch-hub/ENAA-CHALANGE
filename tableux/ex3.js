const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = [];
let count = 0;

console.log("Veuillez entrer 8 nombres :");

rl.on('line', (input) => {
    let n = Number(input);
    numbers.push(n);
    count++;

    if (count < 8) {
        console.log(`Entrez le nombre ${count + 1} :`);
    } else {
        
        rl.question("Quel est le nombre de référence pour filtrer ? ", (rch) => {
            let valeur = Number(rch);
            let res = numbers.includes(n);
            res && console.log(`kayn index ${numbers.indexOf(valeur)}`);
            
            // console.log("Résultat du filtrage :", res);
            rl.close();
        });
    }
});
