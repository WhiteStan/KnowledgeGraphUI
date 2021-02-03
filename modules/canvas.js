function create(width, height) {
    let wrapper = document.querySelector("#canvas");
    let canvas = document.createElement('canvas');
    wrapper.appendChild(canvas);

    canvas.width = width;
    canvas.height = height;
    let ctx = canvas.getContext('2d');

    return ctx;
}

export {create};