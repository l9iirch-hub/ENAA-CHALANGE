const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function maxTableau(n, callback) {
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

maxTableau(5, (t) => {
    console.log("Tableau :", t);
   console.log("max  " + Math.max(...t));

    rl.close();
});
