const INPUT_TEXT = document.getElementById('input-text');
const CONTAINER_CARD = document.getElementById('container-cards');
const BUTTON_CARD = document.getElementById('button-generate-cards');
const EMPTY_ERROR_TEXT = 'Por favor, digite o conteúdo da carta.';

function clearCard() {
	while (CONTAINER_CARD.firstChild) {
		CONTAINER_CARD.removeChild(CONTAINER_CARD.firstChild);
	}
}

function checkInput() {
	if (INPUT_TEXT.value === '' || INPUT_TEXT.value === ' ') {
		CONTAINER_CARD.innerHTML = EMPTY_ERROR_TEXT;
		return false;
	} else if (CONTAINER_CARD.innerHTML === EMPTY_ERROR_TEXT) {
		clearCard();
	}

	return true;
}

function generateCard() {
	if (!checkInput()) return;

	const splitWords = INPUT_TEXT.value.split(' ');
	for (let index = 0; index < splitWords.length; index += 1) {
		const card = document.createElement('div');
		CONTAINER_CARD.appendChild(card);
		card.className = 'card';
		const cardText = document.createElement('p');
		card.appendChild(cardText);
		cardText.className = 'card-text';
		cardText.innerText = splitWords[index];
	}
}
