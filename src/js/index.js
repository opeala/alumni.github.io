// Import main stylesheets:
import "../css/styles.css";
import "../scss/styles.scss";

// Import JS modules:
// Functions for whole site:
import { helloWorld } from './functions/hello-world';
import { newsPropagation } from './functions/news';
import { anchorLinks } from './functions/anchor-links';
import { tabIndex } from './functions/tab-index';
// Components for individual parts:

// Import Node Modules: 
// import confetti from 'canvas-confetti';
import '@fortawesome/fontawesome-pro/js/all.js';

// run any imported or very simple scripts here:
helloWorld();
newsPropagation();
anchorLinks();
tabIndex();
// confetti.create(document.getElementById('canvas'), {
//     resize: true,
//     useWorker: true,
// })({ particleCount: 200, spread: 200 });


// fade on load, this needs to be the last thing that runs:
window.onload = function() { 
    document.body.className = "loadVisible";
};