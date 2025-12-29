const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function Tableau(n, callback) {
    let tableau = [];
    let i = 0;

    function demander() {
        rl.question('Entrez un nombre de table 1  : ', (rep) => {
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
function Tablea(b, cal) {
    let tablea = [];
    let i = 0;

    function demande() {
        rl.question('Entrez un  nombre de table 2 : ', (re) => {
            tablea.push(Number(re));
            i++;

            if (i < b) {
                demande();
            } else {
                cal(tablea);
            }
        });
    }

    demande();
}
Tableau(5, (tableau) => {
    console.log("Tableau  1 :", tableau);
 Tablea(5, (tablea) => {
    console.log("Tableau 2  :", tablea);  
    const thebig = tableau.concat(tablea, tableau)
    console.log("les deux tableux une seul table   : " +thebig);
    

     rl.close();
    });
   });
