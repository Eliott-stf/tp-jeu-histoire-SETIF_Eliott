# Jeu d'histoire interactif — PREPA_DEV

Petit jeu narratif HTML/JS qui propose des choix et affiche des fins en fonction des décisions du joueur.

- Fichiers principaux :
  - [index.html](index.html) : structure de la page et inclusion des scripts.
  - [style.css](style.css) : styles et polices.
  - [data.js](data.js) : données du jeu — [`tableauQuestions`](data.js) et [`tableauFins`](data.js).
  - [script.js](script.js) : logique du jeu — variables et fonctions principales : [`getBtnDOM`](script.js), [`monId`](script.js), [`elBtnPlayAgain`](script.js).
  - [assets/](assets/) : images et polices.
  - [maquettes/](maquettes/) : ressources de maquette.

Description rapide
- Le contenu du jeu (questions, images, réponses et références de fin) est défini dans [data.js](data.js) via la variable [`tableauQuestions`](data.js) et les résultats dans [`tableauFins`](data.js).
- L'UI est générée dynamiquement par la fonction [`getBtnDOM`](script.js) qui lit [`monId`](script.js) pour afficher la question actuelle et crée les boutons de réponse.
- Lorsqu'un bouton mène à `nextId === 0`, la fin correspondante (via `moralId`) est récupérée depuis [`tableauFins`](data.js) et affichée dans la modale. Le bouton "Recommencer" utilise [`elBtnPlayAgain`](script.js) pour réinitialiser la partie.

Comment lancer
1. Ouvrir [index.html](index.html) dans un navigateur (double‑clic ou serveur web local).
2. Cliquer sur les choix pour avancer. À la fin, utiliser "Recommencer" pour rejouer.

Comment modifier le jeu
- Ajouter/modifier des étapes : éditer [`tableauQuestions`](data.js). Chaque entrée contient :
  - id, text, image, answers[] (chaque answer a text, nextId et optionnellement moralId).
- Ajouter/modifier les conclusions : éditer [`tableauFins`](data.js).
- La section affichée et les boutons sont contrôlés par [`getBtnDOM`](script.js). Pour changer le comportement d'affichage, modifier ce fichier.

Points d'attention (notes pour développement)
- Les images référencées doivent se trouver dans [assets/images/](assets/images/) et les polices dans [assets/fonts/](assets/fonts/).
- Les IDs DOM utilisés par le script se trouvent dans [index.html](index.html) : `para`, `back-btn`, `modal-win`, `fin-text`.
- Éviter les conflits d'ID dans [data.js](data.js) (les nextId doivent référencer des id existants ou 0 pour fin).

Auteur
- Projet réalisé dans le cadre de la PREPA_DEV.