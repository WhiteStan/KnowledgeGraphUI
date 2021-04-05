import create from './modules/canvas.js';
import drawRect from './modules/rectang.js';

let canvas = create(480, 320);

let lastSquareActor;
let lastSquareAction;
let actor = document.querySelector("#actor");
let action = document.querySelector("#action");

function addNewElement(lastSquare, y, inputElement) {   
    let x;
    if (typeof lastSquare !== 'undefined')
    {
        x = lastSquare.x + 150;
    }
    else
    {
        x = 10;
    }
    return drawRect(canvas, x, y, 'black', inputElement.value);
}

actor.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        lastSquareActor = addNewElement(lastSquareActor, 10, actor);
        actor.value = '';
    }
});
action.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        lastSquareAction = addNewElement(lastSquareAction, 150, action);
        action.value = '';
    }
});
