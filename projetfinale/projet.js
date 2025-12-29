const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const menu = `
1. Ajouter plusieurs livres
2. Opérations sur les livres
    2.1 Afficher tous les livres 
    2.2 Trier les livres par titre (A = ascendant / B = descendant)
    2.3 Trier les livres par année de publication 
    2.4 Afficher uniquement les livres disponibles
    2.5 Rechercher un livre par ID_livre 
3. Gestion des abonnés
    3.1 Ajouter abonnés
    3.2 Afficher tous les abonnés
4. Gestion des emprunts
    4.1 Ajouter emprunts
    4.2 Retour de livre
    4.3  Afficher les livres empruntés par un abonné donné.
5. Quitter
`;

let livres = [];
let idCounterLivres = 1;
let abonnes = [];
let idCounterAbonnes = 1;
let emprunts = [];


function ajouterPlusieursLivres(callback) {
    rl.question("Combien de livres voulez-vous ajouter ? ", (n) => {
        let nombre = parseInt(n);
        let count = 0;

        function ajouterUnLivre() {
            if (count >= nombre) {
                console.log("\nTous les livres ont été ajoutés !");
                return callback(); 
            }

            console.log(`\n--- Livre ${count + 1} / ${nombre} ---`);
            const generatedId = idCounterLivres++;

            rl.question("Titre : ", (titre) => {
                rl.question("Auteur : ", (auteur) => {
                    rl.question("Année de publication : ", (annee) => {
                        rl.question("Disponible ? (oui/non) : ", (dispo) => {
                            let disponible = dispo.toLowerCase() === "oui";
                            let livre = {
                                id_livre: generatedId,
                                titre: titre,
                                auteur: auteur,
                                annee: parseInt(annee),
                                disponible: disponible
                            };
                            livres.push(livre);
                            count++;
                            ajouterUnLivre();    
                        });
                    });
                });
            });
        }

        ajouterUnLivre();   
    });
}

function afficherLivres(callback) {
    console.log("\n--- Tous les livres ---");
    if(livres.length === 0){
        console.log("Aucun livre n'est encore ajouté !");
    } else {
        console.table(livres);
    }
    if(callback) callback();
}

function trierParTitre(callback) {
    if(livres.length === 0){
        console.log("Aucun livre n'est encore ajouté !");
        if(callback) callback();
        return;
    }
    rl.question("Trier par titre: A = ascendant, B = descendant ? ", (order) => {
        let sorted = [...livres]; 
        if(order.toUpperCase() === "A") sorted.sort((a, b) => a.titre.localeCompare(b.titre));
        else if(order.toUpperCase() === "B") sorted.sort((a, b) => b.titre.localeCompare(a.titre));
        else sorted.sort((a, b) => a.titre.localeCompare(b.titre));

        console.log("\n--- Livres triés par titre ---");
        console.table(sorted);
        if(callback) callback();
    });
}

function trierParAnnee(callback) {
    if(livres.length === 0){
        console.log("Aucun livre n'est encore ajouté !");
    } else {
        let sorted = [...livres].sort((a, b) => b.annee - a.annee);
        console.log("\n--- Livres triés par année (du plus récent au plus ancien) ---");
        console.table(sorted);
    }
    if(callback) callback(); 
}

function afficherLivresDisponibles(callback) {
    if(livres.length === 0){
        console.log("Aucun livre n'est encore ajouté !");
    } else {
        let disponibles = livres.filter(livre => livre.disponible);
        if(disponibles.length === 0) console.log("Aucun livre n'est actuellement disponible !");
        else {
            console.log("\n--- Livres disponibles ---");
            console.table(disponibles);
        }
    }
    if(callback) callback(); 
}

function rechercherParID(callback) {
    if(livres.length === 0){
        console.log("Aucun livre n'est encore ajouté !");
        if(callback) callback();
    } else { 
        rl.question("Entrez l'ID du livre à rechercher : ", (idRecherche) => {
            let idNum = parseInt(idRecherche);
            let livreTrouve = livres.find(livre => livre.id_livre === idNum);
            if(livreTrouve){
                console.log("\n--- Livre trouvé ---");
                console.table([livreTrouve]); 
            } else console.log("Livre non trouvé !");
            if(callback) callback(); 
        });
    }     
}


function ajouterAbonne(callback) {
    const generatedId = idCounterAbonnes++; 
    rl.question("Nom : ", (nom) => {
        rl.question("Prénom : ", (prenom) => {
            rl.question("Email : ", (email) => {
                let abonne = { id_abonne: generatedId, nom, prenom, email };
                abonnes.push(abonne);
                console.log("\nAbonné ajouté avec succès !");
                console.table(abonnes);
                if(callback) callback(); 
            });
        });
    });
}

function afficherAbonnes(callback) {
    console.log("\n--- Tous les abonnés ---");
    if(abonnes.length === 0) console.log("Aucun abonné n'est encore ajouté !");
    else console.table(abonnes);
    if(callback) callback(); 
}


function enregistrerEmprunt(callback) {
    rl.question("ID abonné : ", aId => {
        // const ab = abonnes.for(x => x.id_abonne == aId);
        for (let ab = x.id_abonne; ab < abonnes.length;) {
            const element = array[ab];
            
        }
        if(!ab){ console.log("Abonné non trouvé !"); return callback(); }

        rl.question("ID livre : ", lId => {
            const lv = livres.find(x => x.id_livre == lId);
            if(!lv){ console.log("Livre non trouvé !"); return callback(); }
            if(!lv.disponible){ console.log("Livre non disponible !"); return callback(); }

            lv.disponible = false;
            emprunts.push({ abonneId: ab.id_abonne, id_livre: lv.id_livre, dateEmprunt: new Date().toISOString().split("T")[0] });
            console.log(`Emprunt enregistré : ${ab.nom} → "${lv.titre}"`);
            if(callback) callback();
        });
    });
}

function retourLivre(callback) {
    rl.question("ID du livre à retourner : ", lId => {
        const lv = livres.find(x => x.id_livre == lId);
        if(!lv){ console.log("Livre non trouvé !"); return callback(); }

        const empruntIndex = emprunts.findIndex(e => e.id_livre == lv.id_livre);
        if(empruntIndex === -1){ console.log("Ce livre n'a pas été emprunté !"); return callback(); }

        lv.disponible = true;
        emprunts.splice(empruntIndex, 1);
        console.log(`Le livre "${lv.titre}" a été retourné et est maintenant disponible.`);
        callback();
    });
}

function retourLivre(callback) {
    rl.question("ID du livre à retourner : ", lId => {
        const lv = livres.find(x => x.id_livre == lId);
        if(!lv){
            console.log("Livre non trouvé !");
            return callback();
        }

        const empruntIndex = emprunts.findIndex(e => e.id_livre == lv.id_livre);

        if(empruntIndex === -1){
            console.log("Ce livre n'a pas été emprunté !");
            return callback();
        }

        
        lv.disponible = true;

        
        emprunts.splice(empruntIndex, 1);

        console.log(`Le livre "${lv.titre}" a été retourné et est maintenant disponible.`);
        callback();
    });
}


function menuPrincipal() {
    console.log(menu);
    rl.question("Choisissez une option : ", (choice) => {
        switch(choice) {
            case "1":
                 ajouterPlusieursLivres(menuPrincipal); 
                 break;
            case "2.1": 
                afficherLivres(menuPrincipal); 
                break;
            case "2.2": 
                trierParTitre(menuPrincipal); 
                break;
            case "2.3": 
                trierParAnnee(menuPrincipal); 
                break;
            case "2.4":
                     afficherLivresDisponibles(menuPrincipal); 
                break;
            case "2.5": 
                rechercherParID(menuPrincipal);
                 break;
            case "3.1": 
                ajouterAbonne(menuPrincipal);
                 break;
            case "3.2": 
                afficherAbonnes(menuPrincipal);
                 break;
            case "4.1": 
                enregistrerEmprunt(menuPrincipal);
                 break;
            case "4.2": 
                retourLivre(menuPrincipal);
                 break;
            case "4.3":
                afficherLivresEmpruntesParAbonne(menuPrincipal);
                break;
            case "5":
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
