import { passwordElement, passwordLengthElement } from './dom';

const allowedCharacters =
	'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789!@#$%^&*()_+{}[]<>';

let passwordLength = 16;

const generateRandomNumber = () => {
	return Math.floor(Math.random() * allowedCharacters.length);
};

const generatePassword = () => {
	let finalPassword = '';
	for (let i = 0; i < passwordLength; i++) {
		const randomNumber = generateRandomNumber();
		finalPassword += allowedCharacters.charAt(randomNumber);
	}
	return finalPassword;
};

const printFinalPassword = () => {
	passwordElement.value = generatePassword();
};

const changeLengthText = event => {
	passwordLength = event.target.value;
	passwordLengthElement.textContent = passwordLength;
};

export {printFinalPassword, changeLengthText}
