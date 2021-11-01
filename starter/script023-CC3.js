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
let iFacture;
let iPourboire;
function Pourboire(prix, pourboire){
    iFacture = prix;
    iPourboire = pourboire
    if (iFacture < 50){
        iPourboire = iFacture*0.2
        console.log(iPourboire);
    }else if (iFacture=>50 || iFacture < 200){
        iPourboire = iFacture*0.15
        console.log(iPourboire);
    }else{
        iPourboire = iFacture*0.1
        console.log(iPourboire);
    }
    return iFacture;
    return  iPourboire;
}
// console.log(Pourboire(124));
// console.log(Pourboire(48));
// console.log(Pourboire(268));

// const aPrix=[Pourboire(124), Pourboire(48), Pourboire(268)];
// console.table(aPrix);
const aPrixPourboire=[Pourboire(124, `${iPourboire}`), Pourboire(48,`${iPourboire}`), Pourboire(268,`${iPourboire}`)];
console.table(aPrixPourboire);