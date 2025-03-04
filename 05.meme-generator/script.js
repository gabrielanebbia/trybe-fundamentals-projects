const TEXT_INPUT = document.getElementById('text-input');
const IMAGE_SHOW_INPUT = document.getElementById('meme-image');
const MEME_CONTAINER = document.getElementById('meme-image-container');
const BUTTON_RED = document.getElementById('fire');
const BUTTON_BLUE = document.getElementById('water');
const BUTTON_GREEN = document.getElementById('earth');

function textShow() {
  document.getElementById('meme-text').innerHTML = TEXT_INPUT.value;
}

TEXT_INPUT.addEventListener('keyup', textShow);

function memeImage() {
  IMAGE_SHOW_INPUT.src = URL.createObjectURL(event.target.files[0]);
}

function borderRed() {
  MEME_CONTAINER.style.border = '3px dashed red';
}

BUTTON_RED.addEventListener('click', borderRed);

function borderBlue() {
  MEME_CONTAINER.style.border = '5px double blue';
}

BUTTON_BLUE.addEventListener('click', borderBlue);

function borderGreen() {
  MEME_CONTAINER.style.border = '6px groove green';
}

BUTTON_GREEN.addEventListener('click', borderGreen);

function selectMeme(id) {
  const buttonMeme = document.getElementById(id);
  IMAGE_SHOW_INPUT.src = buttonMeme.src;
}
