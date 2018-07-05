import { removeStupidMeatBackground, createHomeLink } from "./master.page";
import { createboobyModeLink } from "./secret";
import { styleToolbar } from "./detail.page";

// Monkey injection
console.log('Invasion successful!');

// Start
updateMasterPage();
updateDetailsPage();

function updateMasterPage() {
    // console.log('execute - updatePageSidemenu');
    removeStupidMeatBackground();
    createHomeLink();
    createboobyModeLink();
}

function updateDetailsPage() {
    styleToolbar();
}