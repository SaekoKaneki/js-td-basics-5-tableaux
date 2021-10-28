/*****************************
* 022 - Les tableaux indicés (Arrays)
*/


// 8. Tableau à deux dimensions

/* 
Chaque élément d'un tableau peut lui-même être un tableau.
On parle alors de tableau à deux dimensions.
Voici un exemple de tableau à deux dimensions (un tableau de tableaux),
qui pourrait être utilisé comme tableau de positionnement des mines d'un jeu du démineur.
*/
var mines = [
    [0, 1, 0, 1],
    [1, 0, 0, 0],
    [1, 0, 1, 0],
    [0, 0, 0, 0]
];
/* 
EXERCICE :
- évaluez chacune des expressions qui suivent
- vérifiez votre réponse en affichant la valeur de l'expression dans la console
*/
mines		// …………………………………………………………………
mines[1]	// ……La deuxieme ligne……………………………………………………………
mines[0][3] // ……Vaut le 1er tableaux et dans ce tableau cela vaut le dernier 1……………………………………………………………




/*
EXERCICE 7 : 
- Etape 1 : 
	- récupérez la valeur qui se trouve à la deuxième ligne troisième colonne du tableau
	- si cette valeur est 1, affichez "Pas de chance, vous avez explosé !",
	sinon affichez "Vous avez de la chance, cet emplacement ne contient pas de mine"
	- testez de la même façon l'emplacement situé en première ligne quatrième colonne
- Etape 2 : 
	- indiquez combien de mines contient
		- la première ligne de ce tableau
		- le tableau en entier
*/
/* IMPORTANT */
const tmp = mines[1][2];
if (tmp === 1){
    console.log(`Pas de chance, vous avez explosé !`)
}else {
    console.log(`Vous avez de la chance, cet emplacement ne contient pas de mine`)
}
//mines [0][3];
console.log(mines[0].length);
// let count = 0;
// /*****TUYAU INTERRO*****/
// for (let i=0; i<mines.length; i++){ /*i = indice*/
//     for (let k=0; k<mines[i].length; k++){
//         console.log(mines[i][k]);
//         if (mines[i][k] === 1){
//             count++;
//         }
//     }
//     console.log(mines[i]); /*Faire attention à ce que ca ne represente pas un carré*/
// }
// console.log(count);

function fCountOne(arrays){
    let count = 0;
    for (let i=0; i<arrays.length; i++){ /*i = indice*/
        for (let k=0; k<arrays[i].length; k++){
            console.log(arrays[i][k]);
            if (arrays[i][k] === 1){
                count++;
            }
        }
    }
    return count; /*Arrete l'execussion */
}

const tabl = [fCountOne((mines))];
console.log(fCountOne(mines)); /*Vaut 5*/
/*A la rentrée INTERRO !!!*/
/*RACCOURCI ALT+J*/