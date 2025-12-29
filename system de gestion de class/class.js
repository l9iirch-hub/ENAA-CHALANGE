const prompt=require("prompt-sync")();
const fs=require("fs");

const menu=`   
1. Ajouter un élève 
2. Marquer une présence 
3. Ajouter une compétence  
4. Afficher une fiche élève 
5. Voir les élèves validants 
6. Sauvegarder 
7. Charger  
8. Quitter
`;
let eleves=[];
let idCounter=1;
function ajouterPlusieurseleves(){
    let nom=prompt("Nom de l'élève: ");
    let eleve={
        id_eleve:idCounter++,
        nom:nom,
        present:false,
        competences:{HTML:"",CSS:"",JS:""}
    };
    eleves.push(eleve);
    console.table(eleves);
}
function sauvegarderClasse(){
    fs.writeFileSync("./classe.json",JSON.stringify(eleves,null,2));
    console.log("Classe sauvegardée avec succès !");
    }
function MarquerPresence(){
    let id =parseInt(prompt("ID de l'élève à marquer présent: "));
    let eleve=eleves.find(e=>e.id_eleve===id);
    if(eleve){
        eleve.present=true;
        console.log(`L'élève ${eleve.nom} est maintenant marqué comme présent.`);
    }else{
        console.log("Élève non trouvé.");
    } 
}
function AjouterCompetence(){
    let id =parseInt(prompt("ID de l'élève pour ajouter une compétence: "));
    let eleve=eleves.find(e=>e.id_eleve===id);
    if(eleve){
          let html =prompt("Compétence de HTML: ");
          let css =prompt("Compétence de CSS: ");
          let js =prompt("Compétence de JS: ");
          eleve.competences.HTML=html;
          eleve.competences.CSS=css;
          eleve.competences.JS=js;
            console.log(`Compétences mises à jour pour l'élève ${eleve.nom}.`);
    }else{
        console.log("Élève non trouvé.");
    }
    
}
function AfficherFicheEleve() {
    let id = parseInt(prompt("ID de l'élève à afficher: "));

   
    let raw = fs.readFileSync("./classe.json", "utf-8");

  
    let classe = JSON.parse(raw);

  
    let eleve = classe.find(e => e.id_eleve === id);

    if (eleve) {
        console.log(`Fiche de l'élève ${eleve.nom}:`);
        console.log(`Présent: ${eleve.present ? "Oui" : "Non"}`);
        console.log("Compétences:");
        console.log(`  HTML: ${eleve.competences.HTML}`);
        console.log(`  CSS: ${eleve.competences.CSS}`);
        console.log(`  JS: ${eleve.competences.JS}`);
    } else {
        console.log("Élève non trouvé.");
    }
}
function afficherElevesValidants(){
    let validants = eleves.filter(e => {
    return (
        (e.competences.HTML === "Bon" || e.competences.HTML === "Excellent") &&
        (e.competences.CSS === "Bon" || e.competences.CSS === "Excellent") &&
        (e.competences.JS === "Bon" || e.competences.JS === "Excellent")
    );
});

    console.table(validants);
}

function menuPrincipal(){
    console.log(menu);
    let option=prompt("Choisissez une option: ");
    switch(option){
        case"1":
        ajouterPlusieurseleves();
        menuPrincipal();
        break;
        case"2":
        MarquerPresence();
        menuPrincipal();
        break;
        case"3":
        AjouterCompetence();
        menuPrincipal();
        break;
        case"4":
        AfficherFicheEleve();
        menuPrincipal();
        break;
        case"5":
        afficherElevesValidants();
        menuPrincipal();
        break;
        case"6":
        sauvegarderClasse();
        menuPrincipal();
        break;  
        case"8":
        console.log("Au revoir !");
        break;
        default:
        console.log("Option non reconnue");
        menuPrincipal();
    }
}
menuPrincipal();
