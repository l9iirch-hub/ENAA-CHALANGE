const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = [];
let count = 0;

console.log("Veuillez entrer 10 nombres :");

rl.on('line', (input) => {
    let n = Number(input);
    
    numbers.push(n);
    count++;

    if (count < 10 ) {
        console.log(`Entrez le nombre ${count + 1} :`);
    } else {
            const sum = numbers.reduce((acc, curr) => acc + curr, 0);

        console.log(sum /10 );        
        rl.close();
    }
});
