const tableauQuestions = [
    {
        id: 1,  //function arrFind [] doc
        text: "La date limite du projet approche à grands pas. Les nuits blanches s’accumulent, et l’angoisse est bien présente. Es-tu prêt·e à t'aventurer dans l’inconnu ? Tu as des cernes profondes, le café est devenu ton meilleur ami, et la pression monte. C’est le moment de choisir une direction.",
        image: "./assets/images/prompt_1.webp",
        answers: [
            {
                text: "Opter pour un projet minimaliste, car 'moins, c’est plus', même si cela peut devenir 'moins d'heures de sommeil'.",
                nextId: 2  //boucle pr afficher les boutons en dyna
            },
            {
                text: "Un projet NFT avec des légumes dansants, parce que... sérieusement, qui a besoin de logique à ce stade ?",
                nextId: 3
            }
        ]
    },
    {
        id: 2,
        text: "Le minimalisme est ton choix. Mais te voilà aussi inspiré qu'une pomme de douche sans eau. Comment faire avancer ce projet ? Le minimalisme c’est génial... à condition de trouver quoi minimiser. L’écran blanc te nargue, et chaque seconde te semble interminable.",
        image: "./assets/images/prompt_2.webp",
        answers: [
            {
                text: "Boire encore plus de café et continuer, après tout, la caféine est le carburant de l'inspiration.",
                nextId: 4
            },
            {
                text: "Faire un test en ligne pour savoir quelle police de caractère te représente le mieux. Spoiler : c'est Comic Sans.",
                nextId: 5
            }
        ]
    },
    {
        id: 3,
        text: "Les légumes dansants, c’est absurde mais ça capte l’attention. Comment présenter ça au professeur sans finir dans la catégorie 'échec hilarant' ? Après tout, les NFT sont à la mode, non ? Il va falloir convaincre le jury que les brocolis et les carottes dansantes sont le futur de l'art digital.",
        image: "./assets/images/prompt_3.webp",
        answers: [
            {
                text: "Faire une présentation sérieuse, genre : 'L’art, c’est subjectif. Qui sommes-nous pour juger ?'",
                nextId: 6
            },
            {
                text: "Assumer l'absurdité totale avec un show de légumes lasers. Rien ne vaut des légumes avec des lunettes de soleil.",
                nextId: 7
            }
        ]
    },
    {
        id: 4,
        text: "La caféine fait enfin effet. Ton design ressemble à une explosion de peinture... disons que Jackson Pollock ne renierait pas l’inspiration. Mais est-ce de l’art ou simplement un accident glorieux ? Il faut décider vite.",
        image: "./assets/images/prompt_4.webp",
        answers: [
            {
                text: "Continuer, en espérant que les gens y voient de l’art 'contemporain', même si c’est un peu abstrait.",
                nextId: 8
            },
            {
                text: "Changer de style pour quelque chose de plus... visuellement identifiable, genre moins de chaos, plus de sens.",
                nextId: 9
            }
        ]
    },
    {
        id: 5,
        text: "Le test révèle que tu es une Comic Sans. La honte t'envahit, mais il est encore temps de réagir. Le destin te joue-t-il un mauvais tour, ou est-ce le moment d’assumer ton côté loufoque ?",
        image: "./assets/images/prompt_5.webp",
        answers: [
            {
                text: "Changer de police. Se la jouer sérieux avec un bon vieux Times New Roman.",
                nextId: 9
            },
            {
                text: "Assumer le Comic Sans, parce que YOLO, après tout.",
                nextId: 8
            }
        ]
    },
    {
        id: 6,
        text: "Le professeur est perplexe devant ton projet NFT. Un silence s’installe, pesant, et tu sens les regards curieux des autres étudiants. C’est le moment de défendre ton idée... ou de la tourner en dérision avant qu’un autre ne le fasse.",
        image: "./assets/images/prompt_6.webp",
        answers: [
            {
                text: "Tenter de convaincre que c’est l’art du futur. Après tout, qui peut dire le contraire ?",
                nextId: 10
            },
            {
                text: "Faire passer ça pour une blague. Le rire est la meilleure des défenses, non ?",
                nextId: 11
            }
        ]
    },
    {
        id: 7,
        text: "Ton show de légumes lasers a captivé tout le monde, mais c’était complètement hors sujet. Les rires fusent, mais est-ce pour toi ou contre toi ? Quoi qu’il en soit, tu dois réagir.",
        image: "./assets/images/prompt_7.webp",
        answers: [
            {
                text: "Justifier en disant 'L’art est subjectif, non ?', en espérant que cela suffise.",
                nextId: 12
            },
            {
                text: "Sourire gêné et prier pour que personne ne pose de questions trop pointues.",
                nextId: 13
            }
        ]
    },
    {
        id: 8,
        text: "Ton projet en Comic Sans provoque des rires et des expressions choquées. C’est une bataille entre regards perplexes et sourires amusés. Comic Sans est plus qu’une police, c’est un style de vie, mais est-ce vraiment celui que tu veux défendre maintenant ?",
        image: "./assets/images/prompt_8.webp",
        answers: [
            {
                text: "Défendre Comic Sans bec et ongles, comme si ta vie en dépendait.",
                nextId: 0, //si 0 aller chercher le moral id et finir 
                moralId: 1
            },
            {
                text: "Admettre que c’était peut-être une erreur, et espérer le pardon du public.",
                nextId: 0,
                moralId: 2
            }
        ]
    },
    {
        id: 9,
        text: "Tu as changé de style avec succès, mais tu manques de temps. La pression est intense, et tu te demandes quelle stratégie adopter pour finir ce projet à temps.",
        image: "./assets/images/prompt_9.webp",
        answers: [
            {
                text: "Travailler toute la nuit, en faisant des cernes ta nouvelle décoration faciale.",
                nextId: 14
            },
            {
                text: "Procrastiner et tout faire à la dernière minute. L’adrénaline, c’est ton moteur.",
                nextId: 15
            }
        ]
    },
    {
        id: 10,
        text: "Après un discours passionné, le professeur te regarde avec une expression indéchiffrable. Est-ce de l'admiration, de l'amusement, ou simplement de la confusion ? Il est temps de faire un dernier effort.",
        image: "./assets/images/prompt_10.webp",
        answers: [
            {
                text: "Rester confiant·e et attendre la note avec un sourire confiant.",
                nextId: 0,
                moralId: 3
            },
            {
                text: "Commencer à parler de la théorie postmoderne, histoire de donner un peu plus de substance.",
                nextId: 0,
                moralId: 4
            }
        ]
    },
    {
        id: 11,
        text: "En riant de ton propre projet, tu vois que d'autres rient aussi. Mais est-ce suffisant pour transformer cette blague en une bonne note ?",
        image: "./assets/images/prompt_11.webp",
        answers: [
            {
                text: "Faire un clin d'œil au professeur en espérant qu'il ait de l'humour.",
                nextId: 0,
                moralId: 5
            },
            {
                text: "Admettre que ce projet est une expérience sociale sur l'absurdité.",
                nextId: 0,
                moralId: 6
            }
        ]
    },
    // Ajout des dernières étapes
    {
        id: 12,
        text: "Ton argument sur la subjectivité de l'art a semblé convaincre quelques-uns, mais le professeur reste impassible. Il te fixe, attendant des précisions.",
        image: "./assets/images/prompt_12.webp",
        answers: [
            {
                text: "Parler de l'influence des cubistes sur ton choix de légumes.",
                nextId: 0,
                moralId: 7
            },
            {
                text: "Changer de sujet rapidement en espérant noyer le poisson.",
                nextId: 0,
                moralId: 8
            }
        ]
    },
    {
        id: 13,
        text: "Le sourire gêné ne semble pas suffire. Tout le monde attend quelque chose... Il est temps de prendre une décision audacieuse.",
        image: "./assets/images/prompt_13.webp",
        answers: [
            {
                text: "Improviser une performance artistique avec les légumes en direct.",
                nextId: 0,
                moralId: 9
            },
            {
                text: "Faire appel à l'émotion et parler de ton enfance et des légumes.",
                nextId: 0,
                moralId: 10
            }
        ]
    },
    {
        id: 14,
        text: "La nuit a été longue, et le projet est finalement terminé. Tu ne sais pas vraiment si c’est un chef-d'œuvre ou juste une preuve de ton endurance.",
        image: "./assets/images/prompt_14.webp",
        answers: [
            {
                text: "Espérer que l'effort soit reconnu au-delà du résultat.",
                nextId: 0,
                moralId: 11
            },
            {
                text: "Justifier chaque aspect comme une décision artistique consciente.",
                nextId: 0,
                moralId: 12
            }
        ]
    },
    {
        id: 15,
        text: "Le rush de dernière minute est intense, et tu sens que ton cerveau fonctionne à plein régime. Mais est-ce que ça suffira pour convaincre le jury ?",
        image: "./assets/images/prompt_15.webp",
        answers: [
            {
                text: "Improviser un discours passionné sur l'inspiration soudaine.",
                nextId: 0,
                moralId: 13
            },
            {
                text: "Rester honnête et dire que tu as fait de ton mieux malgré la procrastination.",
                nextId: 0,
                moralId: 14
            }
        ]
    }
];

const tableauFins = [
    { id: 1, text: "Tu as défendu Comic Sans, mais le professeur ne semble pas l'apprécier... Résultat : une note moyenne, mais beaucoup de rires." },
    { id: 2, text: "En admettant l'erreur, tu as montré de la maturité. Ta note est juste, mais tu gagnes en respect." },
    { id: 3, text: "Le professeur est intrigué par ton audace. Résultat : une note correcte, avec un commentaire sur l'originalité." },
    { id: 4, text: "Ta tentative de théorie postmoderne a eu un certain effet. Résultat : note moyenne, mais le professeur est resté perplexe." },
    { id: 5, text: "Le clin d'œil a bien fonctionné, mais pas assez pour atteindre la meilleure note. Tu t'en sors avec un résultat passable." },
    { id: 6, text: "Ton excuse d'expérience sociale a fait sourire le jury, mais ça ne te sauve pas complètement. Résultat : note moyenne." },
    { id: 7, text: "L'influence des cubistes ? Pourquoi pas. Résultat : un 'peut mieux faire', mais avec un sourire." },
    { id: 8, text: "Changer de sujet n'a pas totalement convaincu le jury. Ta note en pâtit." },
    { id: 9, text: "L'improvisation a bien plu, et même si ce n’était pas parfait, tu gagnes des points pour le culot." },
    { id: 10, text: "Le discours émotionnel sur les légumes a touché certains membres du jury. Résultat : note moyenne avec encouragements." },
    { id: 11, text: "Ton effort acharné a été remarqué. Résultat : une note respectable malgré les imperfections." },
    { id: 12, text: "Justifier chaque aspect comme un choix artistique a fonctionné mieux que prévu. Résultat : note correcte, mais quelques doutes." },
    { id: 13, text: "Ton improvisation passionnée a laissé une bonne impression, même si cela reste imparfait. Résultat : note encourageante." },
    { id: 14, text: "L'honnêteté a payé, et même si la note n’est pas la meilleure, tu as gagné en crédibilité auprès du jury." }
];
