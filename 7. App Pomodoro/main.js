// Initialisation des variables globales
var time;
var breaktimer;
var timerInterval = null;
var audio = new Audio('FinishSound.mp3');

// Option par défaut
document.querySelector('.pomodoroButton').style.backgroundColor = "#8f1d85c0";
Timertime(1500);
var breaktimer = 1;

// Choisie l'option et le temps
function choosebutton(timer){
    if (timer=="pomodoro"){
        document.querySelector('.pomodoroButton').style.backgroundColor = "#8f1d85c0";
        document.querySelector('.shortBreakButton').style.backgroundColor = "transparent";
        document.querySelector('.longBreakButton').style.backgroundColor = "transparent";
        Timertime(1500);
        breaktimer = 1;
    } else if (timer=="shortBreak"){
        document.querySelector('.shortBreakButton').style.backgroundColor = "#8f1d85c0";
        document.querySelector('.pomodoroButton').style.backgroundColor = "transparent";
        document.querySelector('.longBreakButton').style.backgroundColor = "transparent";
        Timertime(300);
        breaktimer = 2;
    } else {
        document.querySelector('.longBreakButton').style.backgroundColor = "#8f1d85c0";
        document.querySelector('.shortBreakButton').style.backgroundColor = "transparent";
        document.querySelector('.pomodoroButton').style.backgroundColor = "transparent";
        Timertime(900);
        breaktimer = 3;
    }
}

// Affiche le temps restant sur la page
function Timertime(s){
    minutes = Math.floor(s / 60);
    seconds = s % 60;
    document.querySelector('.timer').textContent = minutes + ":" + String(seconds).padStart(2, "0");
    time = s;
}

// Affiche le temps restant sur la page et gère le décompte du temps
function showTime() {
    if (time <= 0) {
        breakInterval();
        audio.play();
        document.querySelector('.startButton').style.display = "flex";
        document.querySelector('.endAndBreakButtons').style.display = "none";
        if (breaktimer==1) {
            breakInterval();
            choosebutton("shortBreak");
        } else if (breaktimer==2){
            breakInterval();
            choosebutton("pomodoro");
        } else {
            breakInterval();
            choosebutton("pomodoro");
        }
        return;
    }
    time--;
    minutes = Math.floor(time / 60);
    seconds = time % 60;
    document.querySelector('.timer').textContent = minutes + ":" + String(seconds).padStart(2, "0");
}

// Démarre le timer
function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(showTime, 1000);
    }
}

// Arrête le timer
function breakInterval(){
    clearInterval(timerInterval);
    timerInterval = null;
}

// Réinitialise le timer
function endInterval(){
    breakInterval();
    if (breaktimer==1){
        Timertime(1500);
    } else if (breaktimer==2){
        Timertime(300);
    } else {
        Timertime(900);
    }
}

// Affiche les boutons de commencer
document.querySelector('.start').addEventListener("click", (event) => {
    document.querySelector('.startButton').style.display = "none";
    document.querySelector('.endAndBreakButtons').style.display = "flex";
});

// Affiche les boutons de départ et de pause
document.querySelector('.break').addEventListener("click", (event) => {
    document.querySelector('.startButton').style.display = "flex";
    document.querySelector('.endAndBreakButtons').style.display = "none";
});

// Affiche les boutons de départ et de pause
document.querySelector('.end').addEventListener("click", (event) => {
    document.querySelector('.startButton').style.display = "flex";
    document.querySelector('.endAndBreakButtons').style.display = "none";
});
