import './css/main.css';
import {handleScreenChange} from './js/matchMedia';
import {createHeaderElements} from './js/header';
import {createCalendarElements} from './js/calendar';

// INITIAL
function initialize() {
	createHeaderElements();
	createCalendarElements();
}

//initialize();
document.addEventListener('DOMContentLoaded', initialize);
