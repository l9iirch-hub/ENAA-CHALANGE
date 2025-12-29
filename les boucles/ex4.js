const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("entrez nbr ", (input) => {
    let n = Number(input);

    if (isNaN(n)) {
        console.log("not nbr ");
    } else {
        let reversed = n.toString().split('').reverse().join('');
        console.log(" le nbr :", reversed);
    }

    rl.close();
});
