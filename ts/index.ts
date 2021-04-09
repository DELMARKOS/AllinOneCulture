function changeName() {
    document.getElementById('aioc').innerHTML =
        (window.innerHeight < window.innerWidth) ? 'AllinOneCulture' : 'AiOC'
    ;
}

function changeBackground(pos: number) {
    document.body.style.backgroundImage = "url('../img/" + pos + ".png')";
}
function resetBackground() {
    document.body.style.backgroundImage = "url('../img/initial.png')";
}