console.log('Ça marche 🚀');


const elPara = document.getElementById('para');
const elBtnPlayAgain = document.getElementById('btn-play-again');
const elModal = document.getElementById("modal-win");
const elFinText = document.getElementById("fin-text");
const elBackBtn = document.getElementById("back-btn");



// ---------- VOTRE JS ICI ----------
let monId = 1;

//Ecouteur sur elBtnPlayAgain
elBtnPlayAgain.addEventListener('click', function() {
    //on cache la modale
    elModal.classList.add('hidden');

    //on réinitialise l'id 
    monId = 1;
    
    getBtnDOM();
})

//Fonction pour creer les boutons dynamiquement
function getBtnDOM() {

    //on vide le container 
    elBackBtn.innerHTML = "";

    //recherche dans mon tab l'id qui correspond
    const question = tableauQuestions.find(_ => _.id === monId);

    //on recupère le texte pour le mettre a l'endroit du HTML
    elPara.textContent = question.text;

    //on récupère l'image et on modifie le backgroundImage
    document.querySelector('.img').style.backgroundImage = `url('${question.image}')`;

    //Pour chaque element du array 'answers' en fonction de l'id souhaité 
     question.answers.forEach(answer => {

        //on creer notre bouton dynamique
        const elBtn = document.createElement("button");

        //on ajoute sa classe
        elBtn.classList.add('btn');

        //son contenu 
        elBtn.textContent = answer.text;

        //l'endroit de son parent
        elBackBtn.appendChild(elBtn);

        //Ecouteur sur les boutons
        elBtn.addEventListener('click', function () {
            monId = answer.nextId;
            //console.log(monId);

            //Verification qu'on atteint une fin car id =0
            if (monId === 0){
                //recherche dans mon tab de fin l'id correspondant au moralId
                const fin = tableauFins.find(_ => _.id === answer.moralId);

                //on affiche la modale
                elModal.classList.remove('hidden');
                
                //on récupere le text a cet id
                elFinText.textContent = fin.text;
            }
            getBtnDOM();
        })
    })
}

getBtnDOM();