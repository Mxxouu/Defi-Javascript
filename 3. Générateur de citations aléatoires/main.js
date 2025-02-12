var categories = {
    motivation: [
        "Le plus grand risque est de ne prendre aucun risque. - Mark Zuckerberg",
        "L'échec est simplement l'opportunité de recommencer, cette fois-ci plus intelligemment. - Henry Ford",
        "Le succès, c'est tomber sept fois, se relever huit. - Proverbe japonais",
        "Celui qui veut réussir trouve un moyen. Celui qui ne veut rien faire trouve une excuse. - Proverbe arabe",
        "Tout est possible à qui rêve, ose, travaille et n'abandonne jamais. - Xavier Dolan",
        "Un gagnant est un rêveur qui n'abandonne jamais. - Nelson Mandela",
        "Ne comptez pas les jours, faites que les jours comptent. - Muhammad Ali",
        "L'échec n'est qu'un tremplin vers le succès. - Oprah Winfrey",
        "Chaque jour est une nouvelle opportunité. - Bob Feller",
        "Le succès, c'est la somme de petits efforts répétés jour après jour. - Robert Collier",
        "N'abandonnez jamais, car c'est souvent la dernière clé du trousseau qui ouvre la porte. - Paulo Coelho",
        "La motivation nous fait commencer, mais c'est l'habitude qui nous fait continuer. - Jim Ryun",
        "L'action est la clé fondamentale de tout succès. - Pablo Picasso"
    ],
    philosophy: [
        "La vie est un mystère qu'il faut vivre, et non un problème à résoudre. - Gandhi",
        "La vraie sagesse est de savoir que l'on ne sait rien. - Socrate",
        "Nous ne voyons pas les choses comme elles sont, nous les voyons comme nous sommes. - Anaïs Nin",
        "L’important n’est pas de convaincre, mais de donner à réfléchir. - Bernard Werber",
        "La plus grande gloire n’est pas de ne jamais tomber, mais de se relever à chaque chute. - Confucius",
        "Penser, c'est dire non. - Alain",
        "Rien n'est permanent, sauf le changement. - Héraclite",
        "Le bonheur dépend de nous. - Aristote",
        "La seule chose que je sais, c'est que je ne sais rien. - Socrate",
        "L'homme est condamné à être libre. - Jean-Paul Sartre",
        "Il faut cultiver notre jardin. - Voltaire",
        "La liberté, c'est l'obéissance à la loi qu'on s'est prescrite. - Rousseau",
        "La vie sans musique est tout simplement une erreur. - Friedrich Nietzsche"
    ],
    humor: [
        "Ils ne savaient pas que c'était impossible, alors ils l'ont fait. - Mark Twain",
        "Il faut toujours viser la lune, car même en cas d’échec, on atterrit dans les étoiles. - Oscar Wilde",
        "Les portes de l’avenir sont ouvertes à ceux qui savent les pousser. - Coluche",
        "Le travail d'équipe est essentiel. En cas d'erreur, ça permet d'accuser quelqu'un d'autre. - Anonyme",
        "Mieux vaut tard que jamais, mais jamais tard, c'est mieux. - Anonyme",
        "Pourquoi les plongeurs plongent-ils en arrière et non en avant ? Parce que sinon, ils tombent dans le bateau. - Anonyme",
        "Je suis tellement intelligent que parfois je ne comprends pas un mot de ce que je dis. - Oscar Wilde",
        "Le problème avec le bon sens, c'est qu'il est rarement au rendez-vous. - Anonyme",
        "Si l’on juge un poisson sur sa capacité à grimper à un arbre, il passera sa vie à croire qu’il est stupide. - Albert Einstein",
        "J’ai décidé d’être heureux parce que c’est bon pour la santé. - Voltaire",
        "Un jour, j’irai vivre en Théorie, car en Théorie tout se passe bien. - Anonyme",
        "La meilleure façon de réaliser ses rêves, c’est de se réveiller. - Paul Valéry",
        "L'expérience est une lanterne que l'on porte sur le dos et qui n'éclaire jamais que le chemin parcouru. - Confucius"
    ],
    love: [
        "On ne voit bien qu'avec le cœur. L'essentiel est invisible pour les yeux. - Antoine de Saint-Exupéry",
        "Le bonheur est parfois caché dans l'inconnu. - Victor Hugo",
        "Aimer, ce n'est pas se regarder l'un l'autre, c'est regarder ensemble dans la même direction. - Antoine de Saint-Exupéry",
        "L'amour, c'est la poésie des sens. - Honoré de Balzac",
        "Il n'y a qu'un bonheur dans la vie, c'est d'aimer et d'être aimé. - George Sand",
        "L'amour est la seule chose qui double à chaque fois qu'on le partage. - Albert Schweitzer",
        "On peut donner sans aimer, mais on ne peut pas aimer sans donner. - Amy Carmichael",
        "Les grandes histoires d’amour ne meurent jamais. - Nicholas Sparks",
        "L’amour est une aventure sans carte et sans boussole. - Jean Cocteau",
        "L'amour est une force plus formidable que toute autre. - Barbara de Angelis",
        "Le cœur a ses raisons que la raison ne connaît point. - Blaise Pascal",
        "On n’aime pas quelqu’un pour son apparence, mais parce qu’il chante une chanson que nous seuls pouvons entendre. - Oscar Wilde",
        "L'amour véritable commence là où finit l'amour propre. - Anonyme"
    ],
    creativity: [
        "La logique vous mènera d’un point A à un point B. L’imagination vous mènera partout. - Albert Einstein",
        "Faites que le rêve dévore votre vie afin que la vie ne dévore pas votre rêve. - Antoine de Saint-Exupéry",
        "La créativité, c'est l'intelligence qui s'amuse. - Albert Einstein",
        "Tout ce que vous pouvez imaginer est réel. - Pablo Picasso",
        "Il faut toujours viser plus haut que la cible. - Ralph Waldo Emerson",
        "L'art lave notre âme de la poussière du quotidien. - Pablo Picasso",
        "Créer, c’est vivre deux fois. - Albert Camus",
        "L’imagination est plus importante que le savoir. - Albert Einstein",
        "Sans inspiration, on est comme un oiseau sans ailes. - Salvador Dalí",
        "L’originalité, c’est un retour aux origines. - Antoni Gaudí",
        "Créer, c’est oser. - Henri Matisse",
        "L’art n’est pas ce que vous voyez, mais ce que vous faites voir aux autres. - Edgar Degas",
        "L’innovation distingue un leader d’un suiveur. - Steve Jobs"
    ]
};


function generatequote() {
    var quotes = document.getElementById('quotes');
    quotes.innerHTML = "";
    var quotelength = document.getElementById('quotenumbers').value;
    var categoryname = document.getElementById('quotecategory').value;
    var category = categories[categoryname];

    for (var k = 0; k != quotelength; k++) {
        var random = Math.floor(Math.random() * category.length);
        quotes.innerHTML += "<p>" + category[random] + "</p> <br>";
    }
    quotes.style.border = "2px solid grey";
    quotes.style.borderRadius = "10px";
    quotes.style.padding = "20px";
}
