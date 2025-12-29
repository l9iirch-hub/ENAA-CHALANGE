let etudiant =  {

    nom : "ahmed" ,
    age : 19 ,

};
console.log(`Bonjour, je m’appelle ${etudiant.nom} et j’ai ${etudiant.age} ans.`);
const personne = {
    nom: "Bob",
    age: 20,
    ville: "tokyo"
};


for (let cle in personne) {
    console.log(`${cle} : ${personne[cle]}`);
}
let classe =  {

    etd : ["houssam ", "ahmed" , "monir"] ,
   
}

for (let key in classe) {
    console.log(`${key} : ${classe[key]}`);
}




prompt = require("prompt-sync")();
let livres = [
  { titre: "hamza wa lkilab", auteur: "hamza", annee: 2020 },
  { titre: "nordin lmsati", auteur: "nourdin", annee: 2020 },
];
function trouverLivre(livres) {
  let name = prompt("Donne un titre :");
  let trouve = livres.find((l) => l.titre === name); 
  if (trouve) {
    console.log(`Auteur : ${trouve.auteur} annee  : ${trouve.annee}`);
  } else {
    console.log("Ce livre n'est pas ici.");
  }
}

trouverLivre(livres)
    
