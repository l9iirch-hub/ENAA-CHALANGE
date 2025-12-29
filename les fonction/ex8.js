const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function Tableau(n, callback) {
    let tableau = [];
    let i = 0;

    function demander() {
        rl.question('Entrez un nombre : ', (rep) => {
            tableau.push(Number(rep));
            i++;

            if (i < n) {
                demander();
            } else {
                callback(tableau);
            }
        });
    }

    demander();
}

Tableau(5, (tableau) => {
    console.log("Tableau :", tableau);
   const multiplecation = tableau.map((num) => num * 2);
    console.log(multiplecation);
        rl.close();
    });

