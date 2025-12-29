/*
Écris un programme qui demande une distance en kilomètres et la convertit en miles.
Formule :
Mile = Km / 1.609
*/

const prompt = require("prompt-sync")();
const distanceKm =parseFloat(prompt("entrer la distance en km "));
const distanceM = distanceKm/1.609;
console.log("la distance en Miles est : ", distanceM);