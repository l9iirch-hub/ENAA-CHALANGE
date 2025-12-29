const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sommeTableau(n, callback) {
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

sommeTableau(5, (t) => {
    console.log("Tableau :", t);

    let sum = 0;
    t.forEach(x => sum += x);

    console.log("Somme :", sum);

    rl.close();
});
