var numberofcharacters = document.getElementById('numberofcharacters');
var capitalletters = document.getElementById('capitalletters');
var lowercaseletters = document.getElementById('lowercaseletters');
var numbers = document.getElementById('numbers');
var specialcharacters = document.getElementById('specialcharacters');
var result = document.getElementById('result');
var listerandom = "";
var resultat="";
var lengthpass;


function generatepass(){

    lengthpass = numberofcharacters.value;
    listerandom="";
    resultat="";

    if (capitalletters.checked){
        listerandom+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } 
    if (lowercaseletters.checked){
        listerandom+="abcdefghijklmnopqrstuvwxyz";
    }
    if (numbers.checked){
        listerandom+="1234567890";
    }
    if (specialcharacters.checked){
        listerandom += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~¤£€µ§°";
    }
    if (listerandom==""){
        alert("Vous devez cocher au moins 1 case ! ");
    }

    for (var $k=0; $k!=lengthpass; $k++){
        resultat += listerandom.charAt(Math.floor(Math.random() * listerandom.length));
    }

    result.value = resultat;
    
}