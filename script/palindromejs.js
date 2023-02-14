function palindromefunction(){
    let chaine= document.getElementById("mot").value;
    let palindrome = true;
    let debut = 0;
    let divMessage = document.createElement ("h2");

    if (chaine == "" || chaine != NaN)
    {
        divMessage.innerText="Introduir un mot, svp.";
        document.getElementById("contenu").appendChild(divMessage);
    }

    let chaineSansEspace = eleve_espace(chaine);
    let chaineSansMajuscule = LowerCase(chaineSansEspace);
    let longueur = chaineSansMajuscule.length;
    let fin = longueur - 1;
  
   for (let indice=0; indice < longueur/ 2 ; indice ++){
        if (chaineSansMajuscule[debut] == chaineSansMajuscule[fin]){
            debut++
            fin--
        } else {
            palindrome = false;
            divMessage.innerText="Le mot n'est pas un palindrome";
            document.getElementById("contenu").appendChild(divMessage);
            return;
        }
        divMessage.innerText="Le mot est un palindrome";
        document.getElementById("contenu").appendChild(divMessage);
        return;
    } 
}

function eleve_espace(chaine) {
    let chaineSansEspace = [];
    let indice = 0;
    while (chaine[indice] != undefined){
        if (chaine[indice] != " "){
            chaineSansEspace = chaineSansEspace + chaine [indice];
        }
    indice++
        }
    return chaineSansEspace;
}

function LowerCase(chaineSansEspace){

 let alphabetmajuscule = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
 let  alphabet =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
 let chaineSansMajuscule = [];
 let indice = 0;
 let position = 0;

 while (chaineSansEspace[indice] != undefined){
    if (chaineSansEspace[indice] == alphabetmajuscule [position]){
        chaineSansMajuscule = chaineSansMajuscule + alphabet [position];
        indice ++;
        position = 0;
    } if (chaineSansEspace[indice] == alphabet [position]){
        chaineSansMajuscule = chaineSansMajuscule + alphabet [position];
        indice ++
        position = 0;
    } else {
        position++;
    } 
 }    
 return chaineSansMajuscule;
}

