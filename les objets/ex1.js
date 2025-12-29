let voiture = {
    marque: "dacia",
    modele: "logan",
    annee: 2018
};
console.log("Marque : " + voiture.marque);
console.log("Année : " + voiture.annee);
voiture.annee = 2020;
console.log("Année : " + voiture.annee);
voiture.coloure =  "red" ;
console.log("coloure : " + voiture.coloure);
delete voiture.modele ;