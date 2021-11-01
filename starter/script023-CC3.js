/*****************************
* 023 - TABLEAUX - CODING CHALLENGE 3
*/
/*
John et sa famille sont allés en vacances et sont allés dans trois restaurant différents.
Les factures étaient de  $124, $48 et $268.

Pour donner au serveur un pourboire correct, John a créé un calculateur de pourboire 
(en tant que fonction).
Il aime donner en guise de pourboire :
- 20% de la facture si celle-ci est inférieure à $50,
- 15% quand la facture est entre $50 et $200,
- et 10% si la facture est supérieure à $200.

À la fin, John aimerait avoir 2 tableaux :
1) un qui contient tous les pourboires (pour chacune des factures)
2) un qui contient les trois montants finaux payés (facture + pourboire).

(RAPPEL: Pour calculer 20% d'une valeur, il suffit de multiplier la valeur par 20/100 = 0.2)

BONNE CHANCE 😀
*/

// const aFacture = [124,48,268];
// console.table(aFacture);
let iFacture = [];
let iPourboire =[];
function Pourboire(prix){
    let pourboire = 0;
    if (prix < 50){
        pourboire = prix*0.2
        iPourboire.push(pourboire);
        iFacture.push(pourboire+prix);

    }else if (prix>=50 || prix < 200){
        pourboire = prix*0.15
        iPourboire.push(pourboire);
        iFacture.push(pourboire+prix);
    }else{
        pourboire = prix*0.1
        iPourboire.push(pourboire);
        iFacture.push(pourboire+prix);
    }
}
console.log(Pourboire(124));
console.log(Pourboire(48));
console.log(Pourboire(268));

console.table(iFacture);
console.table(iPourboire);

