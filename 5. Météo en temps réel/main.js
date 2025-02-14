// Si vous souhaitez que le script de la météo fonctionne, allez sur "home.openweathermap.org", connectez-vous et cherchez votre API, puis mettez-la dans la variable "API_KEY".
var API_KEY = '';

function searchweather(){
    var CITY = document.querySelector('.city-search').value;
    if (CITY==""){
        alert("Il faut entrer une ville dans la barre de recherche !");
        document.querySelector('.box-weather').style.display = "none";
    } else {
        var API = "https://api.openweathermap.org/data/2.5/weather?q="+ CITY + "&appid="+ API_KEY + "&units=metric&lang=fr";
        fetch(API).then((response) =>
            response.json().then((data) => {
                if (data.cod =='404') {
                    alert("La ville que vous cherchez n'existe pas.");
                } else {
                    if (!response.ok) {
                        alert("L'API a un problème. Vous devez en ajouter une si ce n'est pas déjà fait.");
                    } else {
                        console.log(data);
                        document.querySelector('.box-weather').style.display = "flex";
                        var code = data.weather[0].icon;
                        var url = 'https://openweathermap.org/img/wn/' + code + "@4x.png";
                        document.querySelector('.icon-temp').innerHTML = "<img src=" + url + ">";
                        document.querySelector('.temp').innerHTML = Math.floor(data.main.temp) + "°C" ;
                        document.querySelector('.city').innerHTML = data.name + "<img src=https://flagsapi.com/" + data.sys.country +  "/flat/16.png>";
                        document.querySelector('.humidity').innerHTML = "&#x1F4A7;" + data.main.humidity + "%";
                        document.querySelector('.wind-speed').innerHTML = "&#127811;" + data.wind.speed + " km/h";
                    }
                }                    
            })
        );
        document.querySelector('.city-search').value = "";
    }
}
