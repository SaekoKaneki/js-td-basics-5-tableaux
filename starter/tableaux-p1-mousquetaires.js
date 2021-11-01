/*
TABLEAUX - PRÉPA 1 : Les trois mousquetaires
Ecrivez un programme qui :
1. crée un tableau nommé mousquetaires contenant les noms des trois mousquetaires,
	Athos, Porthos et Aramis ;
2. affiche le nom de chaque mousquetaire à l'aide d'une boucle for
	(précédé du texte "Voici les Trois Mousquetaires :") ;
3. ajoute au tableau le mousquetaire d'Artagnan ;
4. affiche de nouveau le nom de chaque mousquetaire, cette fois à l'aide de la méthode forEach()
	(précédé du texte "Ils sont quatre à présent :") ;
5. supprime Aramis du tableau ;
6. affiche le nom de chaque mousquetaire avec une boucle for-of
	(précédé du texte "Le pauvre Aramis est mort…")
*/

//splice(start, deleteCount)

const aMousquetaires=["Athos","Porthos","Aramis"];
for (let i =0; i<aMousquetaires.length; i++){
    console.log(`Voici les Trois Mousquetaires : ${aMousquetaires[i]}`);
}
aMousquetaires.push('D\'artagnan');
aMousquetaires.forEach(element =>{
    console.log(`Ils sont quatre à présent :${element}`)
})

aMousquetaires.splice(2,1);
for (element of aMousquetaires){
    console.log(`Le pauvre Aramis est mort ${element}`);
}
