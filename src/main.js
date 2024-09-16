import './css/main.css';
import {handleScreenChange} from './js/matchMedia';
import {createHeaderElements} from './js/header';
import {createCalendarElements} from './js/calendar';
import {createGroupElements} from './js/taskGroups';
import {createNavElements} from './js/nav';

// INITIAL
function initialize() {
	createHeaderElements();
	createCalendarElements();
	createGroupElements();
	createNavElements();
}

//initialize();
document.addEventListener('DOMContentLoaded', initialize);
