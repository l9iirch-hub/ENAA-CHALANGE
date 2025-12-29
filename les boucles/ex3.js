const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let som  = 0;
let max = null;
rl.question("donner un nbr  ", (nbr) => {
    let n = Number(nbr);
     if (n === 0) {
        console.log(" la somme est :", som);
        if (max !== null) {
            console.log(" le max est :", max);
        } else {
            console.log("NBR INVALIDE.");
        }
        rl.close();
        return;
    }
    if (n > 0 && n < 100) {
        som += n;
        if (max === null || n > max) {
            max = n;
        }
    } else if (n >= 100) {
        console.log("le nbr plus de 100 invalide .");
    } else {
        console.log(" donner un nbr positive ");
    }
    rl.close();
});