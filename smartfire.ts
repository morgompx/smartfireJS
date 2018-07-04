// Monkey injection
console.log('Invasion successful!');

// Start
updatePageSidemenu();

function updatePageSidemenu() {
    // console.log('execute - updatePageSidemenu');
    removeStupidMeatBackground();
    createHomeLink();
    createboobyModeLink();
}

function removeStupidMeatBackground() {
    // console.log('execute - removeStupidMeatBackground');
    var styleElement = document.createElement('style');
    styleElement.innerHTML = '.header-background-image { background-image: none !important; height: auto !important; }';
    document.querySelector('.header-background-image').appendChild(styleElement);
}

function createHomeLink() {
    // console.log('execute - createHomeLink');

    var homeLink = document.querySelector('.page-sidemenu ion-list > button').cloneNode(true);
    homeLink.addEventListener('click', function() { window.location.href = 'https://app.smartfirebbq.com/#/home';}, false);
    homeLink.childNodes[0].childNodes[0].childNodes[1].childNodes[2].nodeValue = 'Home';
    var linkListElement = document.querySelector('.page-sidemenu ion-list');
    linkListElement.insertBefore(homeLink, linkListElement.childNodes[2]);
    document.querySelector('.page-sidemenu ion-list > button ion-icon').classList.remove('ion-md-flame');
    document.querySelector('.page-sidemenu ion-list > button ion-icon').classList.add('ion-md-home');
}

function createboobyModeLink() {
    // console.log('execute - createboobyModeLink');

    var boobyLink = document.querySelector('.page-sidemenu ion-list > button').cloneNode(true);
    boobyLink.addEventListener('click', function() { createBoobs(); } , false);
    boobyLink.childNodes[0].childNodes[0].childNodes[1].childNodes[2].nodeValue = 'Enable booby mode';
    var linkListElement = document.querySelector('.page-sidemenu ion-list');
    linkListElement.appendChild(boobyLink);
    document.querySelector('.page-sidemenu ion-list > button:last-of-type ion-icon').classList.remove('ion-md-home');
    document.querySelector('.page-sidemenu ion-list > button:last-of-type ion-icon').classList.add('ion-md-happy');
}

function createBoobs() {
    // console.log('execute - createBoobs');
    var styleElement = document.createElement('style');
    styleElement.innerHTML = '.page-home .videoparent { top: auto; left: auto; }';
    document.querySelector('.page-home .videoparent').innerHTML = '<img id="gif" class="" src="https://media.giphy.com/media/GP0hgNywFfqz6/200w.webp" srcset="https://media.giphy.com/media/GP0hgNywFfqz6/200w.webp 200w, https://media.giphy.com/media/GP0hgNywFfqz6/giphy.webp 480w" sizes="100vw" alt="">';
    document.querySelector('.page-home .videoparent').appendChild(styleElement);
}