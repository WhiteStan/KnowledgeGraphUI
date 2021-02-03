import create from './modules/canvas.js';

let canvas = create(480, 320);

let actor = document.querySelector("#actor");
let action = document.querySelector("#action");

function addNewElement(containerName, inputElement) {
    //TODO
}

actor.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addNewElement('actor-cont', actor)
    }
});
action.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addNewElement('action-cont', action)
    }
});
