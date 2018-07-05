"use strict";
exports.__esModule = true;
function removeStupidMeatBackground() {
    // console.log('execute - removeStupidMeatBackground');
    var styleElement = document.createElement('style');
    styleElement.innerHTML = '.header-background-image { background-image: none !important; height: auto !important; }';
    document.querySelector('.header-background-image').appendChild(styleElement);
}
exports.removeStupidMeatBackground = removeStupidMeatBackground;
function createHomeLink() {
    // console.log('execute - createHomeLink');
    var homeLink = document.querySelector('.page-sidemenu ion-list > button').cloneNode(true);
    homeLink.addEventListener('click', function () { window.location.href = 'https://app.smartfirebbq.com/#/home'; }, false);
    homeLink.childNodes[0].childNodes[0].childNodes[1].childNodes[2].nodeValue = 'Home';
    var linkListElement = document.querySelector('.page-sidemenu ion-list');
    linkListElement.insertBefore(homeLink, linkListElement.childNodes[2]);
    document.querySelector('.page-sidemenu ion-list > button ion-icon').classList.remove('ion-md-flame');
    document.querySelector('.page-sidemenu ion-list > button ion-icon').classList.add('ion-md-home');
}
exports.createHomeLink = createHomeLink;
