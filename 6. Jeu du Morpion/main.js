var buttonsmorpion = document.querySelectorAll('.gamedesign button');
var switchplayer = 0;
var allfilled = true;
var X = 0;
var O = 0;

document.querySelector('.text').innerHTML = "Appuyer sur une des cases pour commencer";
document.querySelector('.game').style.display = "none"; 
document.querySelector(".scoreO").innerHTML = O;
document.querySelector(".scoreX").innerHTML = X;



function gamemode(mode){
    if (mode==1){
        document.querySelector('.choose-gamemode').style.display = "none";
        document.querySelector('.game').style.display = "flex";
    } else {
        alert("Le Mode 'Joueur contre Ordinateur' n'est pas encore disponible...");
    }
}


function choosethis(t) {

    if (switchplayer==0) {
        if (t.textContent=="") {
            document.querySelector('.text').innerHTML = "C'est au tour du Joueur O de jouer";
            switchplayer = 1;
            t.innerHTML = "X";
            t.style.color = "red";
        } else {
            alert("Vous ne pouvez pas placer ici car il est déja pris");
        }
    } else {
        if (t.textContent=="") {
            document.querySelector('.text').innerHTML = "C'est au tour du Joueur X de jouer";
            switchplayer = 0;
            t.innerHTML = "O";
            t.style.color = "blue";
        } else {
            alert("Vous ne pouvez pas placer ici car il est déja pris");
        }
    }

    filled();
    checkgame();
}

function filled(){
    allfilled = true;

    for (var k = 0; k < buttonsmorpion.length; k++) {
        if (buttonsmorpion[k].textContent =="") {
            allfilled = false;
            break
        }
    }
}

function winornot() {
    var wincombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ];

    for (var combo of wincombos) {
        var [a, b, c] = combo;
        if (buttonsmorpion[a].textContent == buttonsmorpion[b].textContent && buttonsmorpion[a].textContent == buttonsmorpion[c].textContent && buttonsmorpion[b].textContent == buttonsmorpion[c].textContent) {
            return buttonsmorpion[a].textContent;
        }
    }
    return false;
}

function checkgame() {
    var winner = winornot();
    if (winner) {
        document.querySelector('.redo').style.display = "flex";
        document.querySelector('.game').style.gap = "8vh";
        document.querySelector('.text').innerHTML = "Le Joueur " + winner + " a gagné ! 🎉";
        winner=="X" ? X+=1 : O+=1;
        document.querySelector(".scoreO").innerHTML = O;
    document.querySelector(".scoreX").innerHTML = X;
        document.querySelectorAll('.gamedesign button').forEach(buttons => buttons.disabled = true);
    } else if (allfilled==true) {
        document.querySelector('.redo').style.display = "flex";
        document.querySelector('.game').style.gap = "8vh";
        document.querySelector('.text').innerHTML = "Match nul ! 🤝";
        document.querySelectorAll('.gamedesign button').forEach(buttons => buttons.disabled = true);
    }
}

function redo(){
    for (var k =0; k < buttonsmorpion.length; k++) {
        buttonsmorpion[k].textContent = "";
        buttonsmorpion[k].disabled = false;
    }
    document.querySelector('.text-game').style.display = "flex";
    document.querySelector('.redo').style.display = "none";
    document.querySelector('.text').innerHTML = "Appuyer sur une des cases pour commencer"

}