define("detail.page", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function styleToolbar() {
        document.querySelector('.toolbar .toolbar-background').setAttribute('style', 'background-color: #242424 !important; color: #ffffff !important;');
    }
    exports.styleToolbar = styleToolbar;
});
define("master.page", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function removeStupidMeatBackground() {
        var styleElement = document.createElement('style');
        styleElement.innerHTML = '.header-background-image { background-image: none !important; height: auto !important; }';
        document.querySelector('.header-background-image').appendChild(styleElement);
    }
    exports.removeStupidMeatBackground = removeStupidMeatBackground;
    function createHomeLink() {
        var homeLink = document.querySelector('.page-sidemenu ion-list > button').cloneNode(true);
        homeLink.addEventListener('click', function () { window.location.href = 'https://app.smartfirebbq.com/#/home'; }, false);
        homeLink.childNodes[0].childNodes[0].childNodes[1].childNodes[2].nodeValue = 'Home';
        var linkListElement = document.querySelector('.page-sidemenu ion-list');
        linkListElement.insertBefore(homeLink, linkListElement.childNodes[2]);
        document.querySelector('.page-sidemenu ion-list > button ion-icon').classList.remove('ion-md-flame');
        document.querySelector('.page-sidemenu ion-list > button ion-icon').classList.add('ion-md-home');
    }
    exports.createHomeLink = createHomeLink;
});
define("secret", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function createboobyModeLink() {
        var boobyLink = document.querySelector('.page-sidemenu ion-list > button').cloneNode(true);
        boobyLink.addEventListener('click', function () { createBoobs(); }, false);
        boobyLink.childNodes[0].childNodes[0].childNodes[1].childNodes[2].nodeValue = 'Enable booby mode';
        var linkListElement = document.querySelector('.page-sidemenu ion-list');
        linkListElement.appendChild(boobyLink);
        document.querySelector('.page-sidemenu ion-list > button:last-of-type ion-icon').classList.remove('ion-md-home');
        document.querySelector('.page-sidemenu ion-list > button:last-of-type ion-icon').classList.add('ion-md-happy');
    }
    exports.createboobyModeLink = createboobyModeLink;
    function createBoobs() {
        var styleElement = document.createElement('style');
        styleElement.innerHTML = '.page-home .videoparent { top: auto; left: auto; }';
        document.querySelector('.page-home .videoparent').innerHTML = '<img id="gif" class="" src="https://media.giphy.com/media/GP0hgNywFfqz6/200w.webp" srcset="https://media.giphy.com/media/GP0hgNywFfqz6/200w.webp 200w, https://media.giphy.com/media/GP0hgNywFfqz6/giphy.webp 480w" sizes="100vw" alt="">';
        document.querySelector('.page-home .videoparent').appendChild(styleElement);
    }
    exports.createBoobs = createBoobs;
});
define("smartfire", ["require", "exports", "master.page", "secret", "detail.page"], function (require, exports, master_page_1, secret_1, detail_page_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log('Invasion successful!');
    updateMasterPage();
    updateDetailsPage();
    function updateMasterPage() {
        master_page_1.removeStupidMeatBackground();
        master_page_1.createHomeLink();
        secret_1.createboobyModeLink();
    }
    function updateDetailsPage() {
        detail_page_1.styleToolbar();
    }
});
//# sourceMappingURL=smartfire.js.map