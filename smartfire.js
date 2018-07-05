"use strict";
exports.__esModule = true;
var master_page_1 = require("./master.page");
var secret_1 = require("./secret");
var detail_page_1 = require("./detail.page");
// Monkey injection
console.log('Invasion successful!');
// Start
updateMasterPage();
updateDetailsPage();
function updateMasterPage() {
    // console.log('execute - updatePageSidemenu');
    master_page_1.removeStupidMeatBackground();
    master_page_1.createHomeLink();
    secret_1.createboobyModeLink();
}
function updateDetailsPage() {
    detail_page_1.styleToolbar();
}
