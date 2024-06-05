import {createElement} from './functions';
import {resetButtons} from './headerControls';

const nav = document.querySelector('nav');
nav.classList.add('nav');

const navContainer = createElement('div', {class: 'nav-container'});

nav.appendChild(navContainer);

// function which add elements into navigation based on button which will chose user
const navContents = {
	'header-tasks': [
		{id: 'header-tasks-today', text: 'Today Tasks'},
		{id: 'header-tasks-all', text: 'All Tasks'},
		{id: 'header-tasks-important', text: 'Important Tasks'},
		{id: 'header-tasks-completed', text: 'Completed Tasks'},
	],
	'header-task-lists': [
		{id: 'list1', text: 'List 1'},
		{id: 'list2', text: 'List 2'},
		{id: 'list3', text: 'List 3'},
	],
	'header-task-calendar': [
		{id: 'calendar1', text: 'Calendar Event 1'},
		{id: 'calendar2', text: 'Calendar Event 2'},
		{id: 'calendar3', text: 'Calendar Event 3'},
	],
	'add-task': [],
};

// function which creates a navigation content by ul list with <a> tags
const createNavContent = (content, nav, headerBtns, headerBurgerItem) => {
	// clear previous content
	navContainer.innerHTML = '';

	// creating ul element
	const ul = document.createElement('ul');

	// creating li with a tag elements
	content.forEach((item) => {
		const li = createElement('li');
		const a = createElement('a', {href: '#', id: item.id}, item.text);

		// set listener on a tag to change the main content
		a.addEventListener('click', (event) => {
			event.preventDefault();
			showContent(item.text);
			nav.classList.remove('nav-active');
			resetButtons(headerBtns, headerBurgerItem);
		});

		setTimeout(() => {
			// add a tag and li element into a ul list
			li.appendChild(a);
			ul.appendChild(li);
		}, 100);
	});

	// add a ul list into main container
	navContainer.appendChild(ul);
};

// function responsible for showing main content depends of a tag choose
const showContent = (content) => {
	const mainContent = document.querySelector('main');
	mainContent.innerHTML = `<p>${content}</p>`;
};

export {nav, navContents, createNavContent, showContent};
