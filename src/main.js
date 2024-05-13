import _ from 'lodash';
import './sass/main.scss';
import { getElement } from './js/querySelectors';

function component() {
	const element = document.createElement('div');

	// Lodash, currently included via a script, is required for this line to work
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

	return element;
}



document.body.appendChild(component());
