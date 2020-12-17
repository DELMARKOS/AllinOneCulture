const nameCng = document.getElementById('aioc');

nameCng.addEventListener('onSmallSize', function (e) {
    nameCng.textContent = e.detail.textContent;//'AiOC';
}, false);

function updateText(name) {
    if (window.innerWidth < 600) {
        let event = new CustomEvent('onSmallSize', {
            detail:{
                textContent: "AiOC"
            }
        });
        nameCng.dispatchEvent(event);
    } else {
        let event = new CustomEvent('onSmallSize', {
            detail:{
                textContent: "AllinOneCulture"
            }
        });
        nameCng.dispatchEvent(event);
    }
}

function changeBackground(pos) {
    document.body.style.backgroundImage = "url('../img/"+pos+".png')";
}
function resetBackground() {
    document.body.style.backgroundImage = "url('../img/initial.png')";
}