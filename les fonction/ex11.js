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

remplirTableau(1, (t) => {

    console.log("Tableau :", t);
    i=0
    for (let i = 0; i < 11; i++) {
        console.log(t * i)
        
    }

    rl.close();
});
