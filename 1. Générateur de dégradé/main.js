// Definir les variables
var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var res1 = document.getElementById('res1');
var res2 = document.getElementById('res2');
var angle;

// Si angle n'est pas définit alors il est a 90 degrés
if (angle==undefined){
    angle = "90";
}

// Fonction qui permet de changer la couleur
function changercouleur(couleur){
    document.body.style.background = "linear-gradient(" + angle + "deg, "+ color1.value + ", " + color2.value + ")"; 
    document.getElementById('codecssgradient').value = "background: linear-gradient(" + angle + "deg, "+ color1.value + ", " + color2.value + ")";
    if (couleur=="1") {
        res1.value = color1.value;
    } else {
        res2.value = color2.value;
    }

}
 
// Fonction qui permet de changer le degrés de courbure du dégradé
function changeangle(){
    angle = document.getElementById('selectangle').value;
    document.body.style.background = "linear-gradient(" + angle + "deg, "+ color1.value + ", " + color2.value + ")"; 
    document.getElementById('codecssgradient').value = "background: linear-gradient(" + angle + "deg, "+ color1.value + ", " + color2.value + ")";
}