const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let produits = [];
let idCounterProduit = 1;
let panier = [] ;

const menu = `
1. Ajouter plusieurs produits
2. Afficher produits
3. Ajouter un produit au panier
4. Afficher panier
5. Supprimer un produit du panier
6. Resulta finall
6. Quitter
`;


function ajouterplusieurprouduit(callback) {
    rl.question("Combien de produits voulez-vous ajouter ? ", (n) => {
        let nombre = parseInt(n);
        let count = 0;

        function ajouterprouduit() {
            if (count >= nombre) {
                console.log("\nTous les produits ont été ajoutés !");
                return callback();
            }

            console.log(`\n--- Produit ${count + 1} / ${nombre} ---`);
            const generatedId = idCounterProduit++;

            rl.question("Nom du produit : ", (nom) => {
                rl.question("Prix : ", (prix) => {
                    rl.question("Stock : ", (stock) => {

                        let produit = {
                            id: generatedId,
                            nom: nom,
                            prix: parseInt(prix),
                            stock: parseInt(stock)
                        };

                        produits.push(produit);
                        count++;

                        ajouterprouduit(); 
                    });
                });
            });
        }

        ajouterprouduit();
    });
}


function afficherproduit(callback) {
    console.log("\n--- Liste des produits ---");
    if(produits.length === 0){
        console.log("Aucun produit n'est encore ajouté !");
    } else {
        console.table(produits);
    }
    if(callback) callback();
}


function ajouterAuPanier(callback) {

    if (produits.length === 0) {
        console.log("Aucun produit disponible !");
        return callback();
    }

    rl.question("Entrez l'ID du produit à ajouter au panier : ", (idSaisi) => {
        let id = parseInt(idSaisi);

        let produit = produits.find(p => p.id === id);

        if (!produit) {
            console.log(" Produit introuvable !");
            return callback();
        }

        rl.question(`Combien d'unités de "${produit.nom}" voulez-vous ajouter ? `, (qSaisi) => {
            0.
            let quantiteDemandee = parseInt(qSaisi);

            if (isNaN(quantiteDemandee) || quantiteDemandee <= 0) {
                console.log(" Quantité invalide !");
                return callback();
            }

            if (quantiteDemandee > produit.stock) {
                console.log(` Stock insuffisant ! Disponible: ${produit.stock}`);
                return callback();
            }

            let itemPanier = panier.find(p => p.id === id);

            if (itemPanier) {
                itemPanier.quantite += quantiteDemandee;
            } else {
                panier.push({
                    id: produit.id,
                    nom: produit.nom,
                    prix: produit.prix,
                    quantite: quantiteDemandee
                });
            }

            
            produit.stock -= quantiteDemandee;

            console.log(` ${quantiteDemandee} unité(s) de "${produit.nom}" ajouté(s) au panier !`);

            callback();
        });

    });
}


function afficherPanier(callback) {

    console.log("\n--- Votre panier ---");

    if (panier.length === 0) {
        console.log("Votre panier est vide.");
    } else {
        console.table(panier);

        let total = panier.reduce((s, p) => s + p.prix * p.quantite, 0);
        console.log("Total : " + total + " DH");
    }

    callback();
}
function supprimerDuPanier(callback) {
    if (panier.length === 0) {
        console.log("Votre panier est vide !");
        return callback();
    }

    console.log("\n--- Votre panier ---");
    console.table(panier);

    rl.question("Entrez l'ID du produit à supprimer du panier : ", (idSaisi) => {
        let id = parseInt(idSaisi);

        let index = panier.findIndex(p => p.id === id);

        if (index === -1) {
            console.log(" Produit non trouvé dans le panier !");
            return callback();
        }

        let produitPanier = panier[index];
        let produitOriginal = produits.find(p => p.id === id);
        if (produitOriginal) {
            produitOriginal.stock += produitPanier.quantite;
        }

        panier.splice(index, 1);

        console.log(` Produit "${produitPanier.nom}" supprimé du panier !`);

        callback();
    });
}
function resultafinall(callback) {
console.table(panier);

let totalHT = panier.reduce((s, p) => s + p.prix * p.quantite, 0);

let tva = totalHT * 0.20;

let totalTTC = totalHT + tva;

console.log("Total HT: " + totalHT + " DH");
console.log("TVA (20%): " + tva + " DH");
console.log("Total TTC: " + totalTTC + " DH"); 
console.log (' merci de votre achat  ! ')
console.log ('zorna nhar tnin rah kayn ljadid')

     callback(); 
}


function menuPrincipal() {
    console.log(menu);
    rl.question("Choisissez une option : ", (choice) => {
        switch(choice) {

            case "1":
                ajouterplusieurprouduit(menuPrincipal);
                break;

            case "2":
                afficherproduit(menuPrincipal);
                break;

            case "3":
                ajouterAuPanier(menuPrincipal);
                break;

            case "4":
                afficherPanier(menuPrincipal);
                break;

            case "5":
                supprimerDuPanier(menuPrincipal);
                break;

            case "6":
                resultafinall(menuPrincipal);
                break;

             case "7":
                console.log("Au revoir !");
                rl.close();
                break;

            default:
                console.log("Option invalide !");
                menuPrincipal();
        }
    });
}

menuPrincipal();
