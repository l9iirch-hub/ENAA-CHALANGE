const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function remplirTableau(length, tablefinale) {
    let tableau = [];
    let i = 0;

    function demander() {
        rl.question('Entrez un nombre  : ', (rep) => {
            tableau.push(Number(rep));
            i++;

            if (i < length) {
                demander();
            } else {
                tablefinale(tableau);
            }
        });
    }

    demander();
}

remplirTableau(5, (t) => {
    console.log("Tableau :", t);
    rl.close();
});
