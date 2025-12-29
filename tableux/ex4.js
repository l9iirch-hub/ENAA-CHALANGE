const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let animal = [];
let count = 0;

console.log("Entrer les chaînes : ");

rl.on('line', (input) => {
    let n = input;
    animal.push(n);
    count++;

    if (count < 3) {
        console.log(`Entrez le nombre ${count + 1} :`);
    } else {
        
        rl.question("Quel est le chaine de référence pour filtrer ? ", (tr) => {
            let valeur = (tr);
            let res = animal.includes(n);
            res && console.log(`kayn index ${animal.indexOf(valeur)}`);
            
          
            rl.close();
        });
    }
});
