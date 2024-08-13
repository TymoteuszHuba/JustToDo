import _, {get} from 'lodash';
import './sass/main.scss';
// import {header, nav, main, footer} from './js/structure';
// import {createElement} from './js/functions';
import {headerStructure} from './js/headerStructure';
import {headerControl} from './js/headerControls';
import {handleScreenChange} from './js/matchMedia';

// INITIAL
function initialize() {
	window.addEventListener('resize', handleScreenChange);
	// window.addEventListener('resize', handleScreenChagne);
	
}

//initialize();
document.addEventListener('DOMContentLoaded', initialize);

// function component() {
// 	const element = document.createElement('div');

// 	// Lodash, currently included via a script, is required for this line to work
// 	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

// 	return element;
// }

// document.body.appendChild(component());
