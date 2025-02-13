var result = document.getElementById('resultID');
var buttonchoice = document.getElementById('buttonchoiceID');
var text = document.getElementById('textID');
var pointscomputer = 0;
var pointsuser = 0;

document.getElementById("pointsuser").innerHTML=pointsuser;
document.getElementById("pointscomputer").innerHTML=pointscomputer;


function choice(userchoice){
    var random = Math.floor(Math.random()*3)+1;
    var computerchoice = (random==1) ? "&#128074" : ((random==2) ? "&#128400" : "&#9996");
    var userchoice = (userchoice==1) ? "&#128074" : ((userchoice==2) ? "&#128400" : "&#9996");
    if ((userchoice=="&#128074" && computerchoice=="&#9996") || (userchoice=="&#128400" && computerchoice=="&#128074") || (userchoice=="&#9996" && computerchoice=="&#128400")) {
        var message = "Bravo, vous avez gagné !";
        var color = "green";
        pointsuser+=1
    } else if (userchoice==computerchoice){
        var message = "Vous avez fait égalité !";
        var color = "grey";
    } else {
        var message = "Dommage, vous avez perdu !";
        var color = "red";
        pointscomputer+=1
    }
    result.innerHTML="";
    buttonchoice.style.display = "none";
    text.style.display = "none";
    result.style.display = "flex";

    result.innerHTML+= "<h2 id='textresult'>" + message + "</h2> <br>";
    result.innerHTML+= "<p>" + userchoice + " vs " + computerchoice + " </p> <br>";
    result.innerHTML+= "<button onclick='continuebutton()'>Continuez</button>";
    document.getElementById('textresult').style.color = color;

    document.getElementById("pointsuser").innerHTML=pointsuser;
    document.getElementById("pointscomputer").innerHTML=pointscomputer;

}

function continuebutton(){
    buttonchoice.style.display = "flex";
    text.style.display = "flex";
    text.style.flexDirection = "column";
    result.style.display = "none";
}

