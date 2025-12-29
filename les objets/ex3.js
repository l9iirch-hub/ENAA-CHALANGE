// let entreprise =  {

//     rue : "alhnsali" ,
//     ville : "souk sebt" ,
//     codePostal : 203002

// };
// let tab =[] ;
// console.log(" la  ville est "  + entreprise.ville);
// let produits = [
//   { prix: 220 , nom: "creatine", quantite: 6 },
//   { prix: 550 , nom: "adidas", quantite: 4 },
// ]
// for (let p in produits) {
//     var priqun = produits[p].prix * produits[p].quantite
//     console.log (`le priqun ${priqun}`)
// }
// class animale {
//   constructor(name, taype) {
//     this.name = name;
//     this.taype = taype;
//   }

//  parler() {
//     console.log(`I have a  chien ${this.name} mn no3 ${this.taype}.`);
//   }
// }


// const chien1 = new animale("pablo", "9ano3");

// chien1.parler();

let employes = [
  { nom: "hmed",  salaire: 30397 },
  { nom: "s3id",  salaire: 2000 },
  { nom: "ayoub", salaire: 30000 }
];

let salariesktar3000 = employes.filter(e => e.salaire > 3000);

console.log(salariesktar3000);

function cloner(obj) {
  return structuredClone(obj);
}


let original = { nom: "ayoub", age: 20, infos: { ville: "Casa" } };

let copie = cloner(original);

console.log(copie);

