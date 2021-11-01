/*
TABLEAUX - PRÉPA 2 : Somme des valeurs
1. Initialisez un tableau qui contient les nombres 11, 3, 7, 2, 9 et 10 ;
2. Affichez-le (précédé du texte : "Voici mon tableau de nombres :") ;
3. Calculez puis affichez la somme des valeurs du tableau nombres
	(précédé du texte : "La somme des nombres de mon tableau est …")
	1°) à l'aide de la méthode forEach()
	2°) en utilisant la boucle for/of

Version alternative (avec BONUS) : 
1. Initialisez
	- une variable message à une chaîne vide ;
	- une variable somme à 0 ;
2. Parcourez votre tableau de nombres à l'aide d'une boucle for pour
	construitre le message : "… + … + … = " ;
3. Parcourez votre tableau de nombres à l'aide d'une boucle for-of pour
	calculer la somme des valeurs du tableau
4. Affichez le message final : "… + … + … = …"
*/
let aTableaux =[11,3,7,2,9,10];



// Solution avec la méthode forEach()

console.log(`Voici mon tableau de nombres : ${aTableaux}`);
let iSomme=0;
aTableaux.forEach(element =>{
    iSomme+=element;
})
console.log(`La somme des nombres de mon tableau est ${iSomme}`)


// Solution avec la méthode for/of

let iSomme2=0
for (element of aTableaux){
    iSomme2+=element;
}
console.log(`La somme des nombres de mon tableau est ${iSomme2}`)

// *******************************
// Solution avec BONUS

let message ='';
let iSomme3=0;
for (i=0;i>aTableaux.length; i++){
    for (j=0; j>aTableaux.length; j++){

    }
}



