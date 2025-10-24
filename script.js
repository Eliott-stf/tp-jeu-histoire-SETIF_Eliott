console.log('Ça marche 🚀');

const container = document.getElementById("btn-container");
const elFinText = document.getElementById("finText");
const elModal = document.getElementById("modal-win");
const elBtnPlayAgain = document.getElementById('btn-play-again');


// ---------- VOTRE JS ICI ----------
let para = document.getElementById('para');
let monId = 1;

//Ecouteur sur elBtnPlayAgain
elBtnPlayAgain.addEventListener('click', function() {
    //on cache la modale
    elModal.classList.add('hidden');
    monId = 1;
    getBtnDOM();
})

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
                const fin = tableauFins.find(_ => _.id === answer.moralId);
                elModal.classList.remove('hidden');
                elFinText.textContent = fin.text;
            }
            getBtnDOM();
        })
    })
}

getBtnDOM();