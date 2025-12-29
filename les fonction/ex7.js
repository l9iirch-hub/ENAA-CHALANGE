const { table } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function moyenneTableau(n, callback) {
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

moyenneTableau(5, (t) => {
    console.log("Tableau :", t);

    const somme = t.reduce((a, b) => a + b, 0);
    const moyenne = somme / t.length;
    console.log("la moyenne est   "+moyenne)
    rl.close();
});
