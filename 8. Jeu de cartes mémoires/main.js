// initialisation des variables
var order = [1, 2, 3, 4, 5, 6];
var numberReturn = 0;
var lastReturn;
var timer = 30;
var timerInterval;
var gameStarted = false;

// boucle qui affiche les cartes
for (var k=0; k<2; k++){
    var randomorder = shuffle(order);
    for (var i=0; i<6; i++){
        document.querySelector('.card img:nth-child(' + (k*6 + i + 1) + ')').alt = 'images/' + randomorder[i] + '.svg';
    }
}

// fonction qui mélange les cartes
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
}

// fonction qui retourne les cartes
function returnCard(t) {
    if (!gameStarted) {
        startTimer();
    }
    
    if (t === lastReturn) {
        return;
    }

    if (t.style.pointerEvents === 'none'){
        return;
    }

    t.src = t.alt;
    
    if (numberReturn === 0) {
        lastReturn = t;
        numberReturn++;
    } else {
        var allCards = document.querySelectorAll('.card img');
        allCards.forEach(card => card.style.pointerEvents = 'none');
        
        if (lastReturn.src === t.src) {
            numberReturn = 0;
            allCards.forEach(card => card.style.pointerEvents = 'auto');
        } else {
            numberReturn = 0;
            setTimeout(() => {
                lastReturn.src = 'images/0.svg';
                t.src = 'images/0.svg';
                allCards.forEach(card => card.style.pointerEvents = 'auto');
            }, 1000);
        }
    }
}

//
function updateTimer() {
    document.querySelector('.timer').textContent = "Temps restant : " + timer + "s";
    
    if (timer <= 0) {
        clearInterval(timerInterval);
        alert('Temps écoulé ! Game Over');
        document.querySelector('.resetGame').style.display = 'flex';
        return;
    }
    if (verifyCards()){
        clearInterval(timerInterval);
        alert('Bravo, toutes les cartes sont retournées !');
        document.querySelector('.resetGame').style.display = 'flex';
        document.querySelector('.timeTaken').style.display = 'flex';
        document.querySelector('.timeTaken').textContent = 'Vous avez mis : ' + (30-timer) + 's';
        return;
    }
    timer--;
}

// fonction qui démarre le minuteur
function startTimer() {
    if (!gameStarted) {
        gameStarted = true;
        timerInterval = setInterval(updateTimer, 1000);
    }
}

// fonction qui vérifie si toutes les cartes sont retournées
function verifyCards() {
    var allCards = document.querySelectorAll('.card img');
    var cardsArray = Array.from(allCards);
    var allCardsAreCorrect = true;
    
    for (var i = 0; i < cardsArray.length; i++) {
        var card = cardsArray[i];
        var expectedImage = card.alt;
        
        if (!card.src.includes(expectedImage)) {
            allCardsAreCorrect = false;
            break;
        }
    }
    
    return allCardsAreCorrect;
}

// fonction qui réinitialise le jeu
function resetGame() {
    timer = 30;
    gameStarted = false;
    clearInterval(timerInterval);
    document.querySelector('.timer').textContent = "Temps restant : 30s";
    document.querySelector('.resetGame').style.display = 'none';
    document.querySelector('.timeTaken').style.display = 'none';
    
    var allCards = document.querySelectorAll('.card img');
    allCards.forEach(card => {
        card.src = 'images/0.svg';
        card.style.pointerEvents = 'auto';
    });
    
    numberReturn = 0;
    lastReturn = null;
    
    for (var k = 0; k < 2; k++) {
        var randomorder = shuffle(order);
        for (var i = 0; i < 6; i++) {
            document.querySelector('.card img:nth-child(' + (k*6 + i + 1) + ')').alt = 'images/' + randomorder[i] + '.svg';
        }
    }
}


