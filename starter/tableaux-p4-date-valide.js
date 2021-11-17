/*
TABLEAUX - PRÉPA 4 :  Date valide - version 3
Ecrire un programme JS qui teste si une date entrée par l’utilisateur est une date valide ou pas
- Déclarez deux fonctions : 
	- isBissextile retourne true ou flase selon que l'année est bissextile ou pas
	- isValid retroune true ou flase selon que la date est valide ou pas :
		stockez cette fois le nombre maximum de jours autorisé par mois dans un tableau
		(utilisez isBissextile pour gérer le cas du mois de février)
- Utilisez isValid pour décider si votre date est valide
	avant d'afficher votre message dans la console
*/

/*
AIDE (en français) : 
Pour qu’une date soit valide, il faut que la date du jour ne dépasse pas
le nombre de jours maximum autorisé par mois, c.-à-d. 30 ou 31 selon le mois
et, pour le mois de février : 28 si l’année est normale, 29 si l’année est bissextile.
Par exemple,
	* le 31 janvier 2019 est une date valide
	* le 28 février 2019 est une date valide
	* le 29 février 2019 n'est PAS une date valide
	* le 29 février 2020 est une date valide
	* le 30 février 2020 n'est PAS une date valide
	* le 30 avril 2020 est une date valide
	* le 31 avril 2020 n'est PAS une date valide
*/

function isBissexile(année){
    let bissextile = true;
    if ((année % 400 === 0) || (année%4 === 0 && année%100 !== 0)){
        bissextile = true;
        console.log(bissextile)
    }else{
        bissextile = false
        console.log(bissextile)
    }
    return bissextile
}
isBissexile(2010);
function isValid(jour,mois){
    let aJourMax =[31,29,31,30,31,30,31,31,30,31,30,31];
    if (isBissexile()){
        aJourMax.splice(1,1);
    }else{
        aJourMax;
    }
    if (mois >= 12 && mois < 0){
        if (jour <= aJourMax) {
            console.log(`le ${jour} ${mois} est valide`);
        }else{
            console.log(`le ${jour} ${mois} n'est pas valide`);
        }
    }else{
        console.log(`le ${jour} ${mois} n'est pas valide`);
    }
        }

isValid(30,1);
