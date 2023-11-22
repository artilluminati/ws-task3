var x = null;
var y = null;

document.addEventListener('mousemove', onMouseUpdate, false)
document.addEventListener('mouseenter', onMouseUpdate, false)

square = document.getElementById('square');

function onMouseUpdate(e) {
    x = e.pageX;
    y = e.pageY;
    square.style.top = y-50+'px';
    square.style.left = x-50+'px';

    console.log(x, y);
}

function getMouseX(){
    return x;
}

function getMouseY(){
    return y;
}