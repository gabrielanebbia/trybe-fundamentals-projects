const COLOR = document.querySelectorAll('.color');
const SHOW_RGB = document.getElementById('rgb-color');

function generateRandomRGB() {
    for (let index = 0; index < COLOR.length; index += 1) {
        let red = Math.floor(Math.random() * 255 + 1);
        let green = Math.floor(Math.random() * 255 + 1);
        let blue = Math.floor(Math.random() * 255 + 1);

        COLOR[index].style.background = `rgb(${red}, ${green}, ${blue})`;
    }
}

function setEventClick() {
    for (let index = 0; index < COLOR.length; index += 1) {
        COLOR[index].addEventListener('click', (event) => {
            const selectedBall = event.target;
            if (selectedBall.style.background === SHOW_RGB.innerText) {
                alert('Acertou!');
            } else {
                alert('Errou!');
            }
        });
    }
}

function selectCorrectColor() {
    const randomIndex = Math.floor(Math.random() * COLOR.length);
    SHOW_RGB.innerText = COLOR[randomIndex].style.background;
}

function resetGame() {
    generateRandomRGB();
    selectCorrectColor();
}

window.addEventListener('load', (event) => {
    generateRandomRGB();
    setEventClick();
    selectCorrectColor();
});
