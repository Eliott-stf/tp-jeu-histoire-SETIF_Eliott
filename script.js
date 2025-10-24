console.log('Ça marche 🚀');
const container = document.getElementById("btn-container");
const elFinText = document.getElementById("finText");

// ---------- VOTRE JS ICI ----------
let para = document.getElementById('para');
let monId = 1;


//Fonction pour creer les boutons dynamiquement
function getBtnDOM() {

    //on vide le container 
    container.innerHTML = "";

    //recherche dans mon tab l'id qui correspond
    const question = tableauQuestions.find(_ => _.id === monId);

    //on recupère le texte pour le mettre a l'endroit du HTML
    para.textContent = question.text;

    //on récupère l'image et on modifie le backgroundImage
    document.querySelector('.story-img').style.backgroundImage = `url('${question.image}')`;

    //Pour chaque element du array 'answers' en fonction de l'id souhaité 
     question.answers.forEach(answer => {

        //on creer notre bouton dynamique
        const elBtn = document.createElement("button");

        //on ajoute sa classe
        elBtn.classList.add('btn');

        //son contenu 
        elBtn.textContent = answer.text;

        //l'endroit de son parent
        container.appendChild(elBtn);

        //Ecouteur sur les boutons
        elBtn.addEventListener('click', function () {
            monId = answer.nextId;
            console.log(monId);

            if (monId === 0){
                const fin = tableauFins.find(_ => _.id === answers.moralId);
                elFinText.textContent = fin.text;
            }
            handlerBtnClick();
        })
    })
}

//Focntion pour la gestion apres le click
function checkEnding() {
    //TODO: Si le id == 0 
    //add la classe hidden a la modale
    //clear le innerHTML
    //link le nouveau id
    getBtnDOM();
}


//TODO: Fonction pour initialiser 
function initStory() {


    getBtnDOM();
    

}





initStory()
