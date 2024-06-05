// import all necessary modules
// import {header} from './header';
import {createElement, createElements, addSeveral} from './functions';
import {first} from 'lodash';

// main function which keep all content to create structure
const headerStructure = () => {
	// cereate an array including header elements
	const headerElements = [
		{
			tag: 'button',
			attributes: {class: 'header-btn', id: 'header-tasks'},
		},
		{
			tag: 'button',
			attributes: {class: 'header-btn', id: 'header-task-lists'},
			content:
				'<i class="fa-solid fa-list-ul original-icon"></i> <i class="fa-solid fa-list-check active-icon hidden"></i>',
		},
		{
			tag: 'button',
			attributes: {class: 'header-btn', id: 'header-task-calendar'},
			content:
				'<i class="fa-regular fa-calendar original-icon"></i> <i class="fa-regular fa-calendar-days active-icon hidden"></i>',
		},
		{
			tag: 'button',
			attributes: {class: 'header-btn', id: 'bg-mode-toggle'},
			content: '<i class="fa-solid fa-circle-half-stroke bg-toggle-icon"></i>',
		},
		{
			tag: 'button',
			attributes: {class: 'header-btn', id: 'add-task'},
			content: '<i class="fa-solid fa-plus"></i>',
		},
	];

	// create container for first button in header
	const headerBtnContainer = createElement('div', {
		class: 'header-btn-container',
	});

	// create elements for the first button from header
	const headerBurgerElements = [
		{
			tag: 'div',
			attributes: {class: 'header-btn-burger'},
		},
		{
			tag: 'div',
			attributes: {class: 'header-btn-burger'},
		},
		{
			tag: 'div',
			attributes: {class: 'header-btn-burger'},
		},
	];
	// function which add several elements (foreach) into header
	addSeveral(createElements(headerElements), document.querySelector('header'));
	// select first element of header
	const firstElHeader = document.querySelector('.header-btn:first-child');

	firstElHeader.appendChild(headerBtnContainer);
	// functions which add a several elements into first element of header button
	addSeveral(createElements(headerBurgerElements), headerBtnContainer);
};


export {headerStructure};
