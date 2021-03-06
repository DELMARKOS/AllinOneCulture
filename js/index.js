function changeName() {
    document.getElementById('aioc').innerHTML =
        (document.body.scrollWidth < 900) ? 'AiOC' : 'AllinOneCulture';
}

function changeBackground(pos) {
    document.body.style.backgroundImage = "url('../img/" + pos + ".png')";
}
function resetBackground() {
    document.body.style.backgroundImage = "url('../img/initial.png')";
}