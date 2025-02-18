// Récupérer les valeurs sauvegardées
var cookieCount = localStorage.getItem('cookieCount') ? parseFloat(localStorage.getItem('cookieCount')) : 0;    
var cookiePerClick = localStorage.getItem('cookiePerClick') ? parseFloat(localStorage.getItem('cookiePerClick')) : 1;

// Initialiser l'affichage avec les valeurs sauvegardées
document.querySelector('#cookieCount').textContent = parseInt(cookieCount);
if (cookiePerClick.toString().split('.')[1] == '0') { 
    document.querySelector('#cookiePerClick').textContent = cookiePerClick.toString().split('.')[1];
} else {
    document.querySelector('#cookiePerClick').textContent = cookiePerClick.toFixed(0);
}

// Afficher le message d'erreur et le nombre de cookies manquants
function errorMessage(cookies){
    document.querySelector('.errorMessage').style.display = "block";
    setTimeout(() => {
        document.querySelector('.errorMessage').style.display = "none";
    }, 2500);

    document.querySelector('#MissingCookies').textContent = parseInt(cookies -cookieCount);
}

// Quand on clique sur le bouton cookieClicker, on augmente le nombre de cookies et on met à jour le compteur de cookies
document.querySelector('.cookieClicker button').addEventListener("click", (event) => {
    var button = document.querySelector('.cookieClicker button');
    button.style.transform = "scale(1.1)";
    button.style.transition = "all 0.3s ease";
    
    setTimeout(() => {
        button.style.transform = "scale(1.0)";
    }, 50);

    cookieCount+=cookiePerClick;
    document.querySelector('#cookieCount').textContent = parseInt(cookieCount);
    localStorage.setItem('cookieCount', cookieCount);
}); 

// Quand on clique sur la div CookieEnhancement-item1, on augmente le nombre de cookies par click et on met à jour le compteur de cookies
document.querySelector('.CookieEnhancement-item1').addEventListener("click", (event) => {
    if (cookieCount >= 50) {
        cookiePerClick+=1;
        cookieCount-=50;

        document.querySelector('.CookieEnhancement-item1').style.backgroundColor = "green";
        setTimeout(() => {
            document.querySelector('.CookieEnhancement-item1').style.backgroundColor = "rgba(128, 128, 128, 0.267)";
        }, 200);

        document.querySelector('#cookieCount').textContent = cookieCount;
        document.querySelector('#cookiePerClick').textContent = cookiePerClick;

        localStorage.setItem('cookieCount', cookieCount);
        localStorage.setItem('cookiePerClick', cookiePerClick);
    } else {
        errorMessage(50);
    } 
});

// Quand on clique sur la div CookieEnhancement-item2, on augmente le nombre de cookies par click et on met à jour le compteur de cookies
document.querySelector('.CookieEnhancement-item2').addEventListener("click", (event) => {
    if (cookieCount >= 500) {
        cookiePerClick+=5;
        cookieCount-=500;

        document.querySelector('.CookieEnhancement-item2').style.backgroundColor = "green";
        setTimeout(() => {
            document.querySelector('.CookieEnhancement-item2').style.backgroundColor = "rgba(128, 128, 128, 0.267)";
        }, 200);

        document.querySelector('#cookieCount').textContent = cookieCount;
        document.querySelector('#cookiePerClick').textContent = cookiePerClick;

        localStorage.setItem('cookieCount', cookieCount);
        localStorage.setItem('cookiePerClick', cookiePerClick);
    } else {
        errorMessage(500);
    } 
});

// Quand on clique sur la div CookieEnhancement-item3, on augmente le nombre de cookies par click et on met à jour le compteur de cookies
document.querySelector('.CookieEnhancement-item3').addEventListener("click", (event) => {
    if (cookieCount >= 2000) {
        cookiePerClick+=10;
        cookieCount-=2000;

        document.querySelector('.CookieEnhancement-item3').style.backgroundColor = "green";
        setTimeout(() => {
            document.querySelector('.CookieEnhancement-item3').style.backgroundColor = "rgba(128, 128, 128, 0.267)";
        }, 200);

        document.querySelector('#cookieCount').textContent = cookieCount;
        document.querySelector('#cookiePerClick').textContent = cookiePerClick;

        localStorage.setItem('cookieCount', cookieCount);
        localStorage.setItem('cookiePerClick', cookiePerClick);
    } else {
        errorMessage(2000);
    } 
});

// Quand on clique sur la div CookieEnhancement-item4, on augmente le nombre de cookies par click et on met à jour le compteur de cookies
document.querySelector('.CookieEnhancement-item4').addEventListener("click", (event) => {
    if (cookieCount >= 10000) {
        cookiePerClick+=50;
        cookieCount-=10000;

        document.querySelector('.CookieEnhancement-item4').style.backgroundColor = "green";
        setTimeout(() => {
            document.querySelector('.CookieEnhancement-item4').style.backgroundColor = "rgba(128, 128, 128, 0.267)";
        }, 200);

        document.querySelector('#cookieCount').textContent = cookieCount;
        document.querySelector('#cookiePerClick').textContent = cookiePerClick;

        localStorage.setItem('cookieCount', cookieCount);
        localStorage.setItem('cookiePerClick', cookiePerClick);
    } else {
        errorMessage(10000);
    } 
});

// Quand on clique sur la div CookieEnhancement-item5, on augmente le nombre de cookies par click et on met à jour le compteur de cookies
document.querySelector('.CookieEnhancement-item5').addEventListener("click", (event) => {
    if (cookieCount >= 50000) {
        cookiePerClick+=100;
        cookieCount-=50000;

        document.querySelector('.CookieEnhancement-item5').style.backgroundColor = "green";
        setTimeout(() => {
            document.querySelector('.CookieEnhancement-item5').style.backgroundColor = "rgba(128, 128, 128, 0.267)";
        }, 200);

        document.querySelector('#cookieCount').textContent = cookieCount;
        document.querySelector('#cookiePerClick').textContent = cookiePerClick;

        localStorage.setItem('cookieCount', cookieCount);
        localStorage.setItem('cookiePerClick', cookiePerClick);
    } else {
        errorMessage(50000);
    } 
});


// Quand on clique sur le bouton resetCookies-button, on réinitialise le compteur de cookies et le nombre de cookies par click
document.querySelector('.resetCookies-button').addEventListener('click', (event) => {
    localStorage.clear();
    cookieCount = 0;
    cookiePerClick = 1;

    document.querySelector('#cookieCount').textContent = parseInt(cookieCount);
    document.querySelector('#cookiePerClick').textContent = parseInt(cookiePerClick);
});





