function script() {
    var actor = document.querySelector("#actor");
    var action = document.querySelector("#action");

    function addNewElement(containerName, inputElement) {
        let newElement = document.createElement('div');
        newElement.className = 'term';
        newElement.innerHTML = inputElement.value;
        inputElement.value = '';
        let container = document.getElementById(containerName);
        container.appendChild(newElement);
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
}

