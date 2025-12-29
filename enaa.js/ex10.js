/*
Créer un programme qui convertit des euros en dirhams (taux donné).
euro = MAD * 10.61
*/
const prompt = require("prompt-sync")();
const monnaieEnEuro = parseFloat(prompt("entrer la monnaie en euro : "));
const monnaieEnMad=monnaieEnEuro*10.61 ;
console.log("la monnaie ",monnaieEnMad);