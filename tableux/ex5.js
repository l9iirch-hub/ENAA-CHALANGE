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

    if (count < 7) {
        console.log(`Entrez le nombre ${count + 1} :`);
    } else {
        let max = Math.max (...numbers);
        
        console.log("les number plus grand : ", max );
        
         let min = Math.min (...numbers);
        
        console.log("les number   plus petit   : ", min );    
            
            rl.close();
       
    }
});
