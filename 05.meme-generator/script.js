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

function selectMeme1() {
  const buttonMeme1 = document.getElementById('meme-1');
  IMAGE_SHOW_INPUT.src = buttonMeme1.src;
}

function selectMeme2() {
  const buttonMeme2 = document.getElementById('meme-2');
  IMAGE_SHOW_INPUT.src = buttonMeme2.src;
}

function selectMeme3() {
  const buttonMeme3 = document.getElementById('meme-3');
  IMAGE_SHOW_INPUT.src = buttonMeme3.src;
}

function selectMeme4() {
  const buttonMeme4 = document.getElementById('meme-4');
  IMAGE_SHOW_INPUT.src = buttonMeme4.src;
}
