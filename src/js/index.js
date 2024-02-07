import { buttonElement, rangeElement } from './dom';
import { changeLengthText, printFinalPassword } from './functions';

rangeElement.addEventListener('input', changeLengthText);
buttonElement.addEventListener('click', printFinalPassword);
