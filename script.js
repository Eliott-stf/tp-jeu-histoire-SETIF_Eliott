console.log('Ça marche 🚀');
const container = document.getElementById("btn-container");

// ---------- VOTRE JS ICI ----------
let para = document.getElementById('para');
let monId = 1;


//Fonction pour creer les boutons dynamiquement
function getBtnDOM() {
    //on vide le container 
    container.innerHTML = "";

    const question = tableauQuestions.find(_ => _.id === monId);
    para.textContent = question.text;
    //Pour chaque index du array 'answers'
    tableauQuestions[monId -1 ].answers.forEach(answer => {
        //on creer notre bouton dynamique
        const elBtn = document.createElement("button");
        //on ajoute sa classe
        elBtn.classList.add('btn');
        //son contenu 
        elBtn.textContent = answer.text;
        //l'endroit de son parent
        container.appendChild(elBtn);

        elBtn.addEventListener('click', function () {
            monId = answer.nextId;
            console.log(monId);
            
        

            handlerBtnClick();
        })
    })
}

//Focntion pour la gestion apres le click
function handlerBtnClick() {
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
