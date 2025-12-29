const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("donner un nbr  ", (nbr) => {
    let n = Number(nbr);

let somme = true;

 for (let i = 2; i < n; i++) {  
        if (n % i === 0) {
            somme = false;
            break;
        }
    }

if (somme) {
        console.log("  premier ");



}else {
        console.log("non premier ");
}
rl.close();

    });