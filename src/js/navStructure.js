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
		{id: 'list1', text: 'Home'},
		{id: 'list2', text: 'Work'},
		{id: 'list3', text: 'Study'},
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

	// if(btnId === 'add-task') {
	// 	createAddTask();
	// 	return;
	// }

	// creating ul element
	const ul = document.createElement('ul');

	// creating li with a tag elements
	content.forEach((item) => {
		const li = createElement('li');
		const a = createElement('a', {href: '#', id: item.id}, item.text);
		// setting class name
		a.classList.add('nav-item');

		// set listener on a tag to change the main content
		a.addEventListener('click', (event) => {
			event.preventDefault();
			showContent(item.text);
			nav.classList.remove('nav-active');
			resetButtons(headerBtns, headerBurgerItem);
		});

		// add a tag and li element into a ul list
		li.appendChild(a);
		ul.appendChild(li);
	});

	// add a ul list into main container
	navContainer.appendChild(ul);
};

// function which create content for add task incl. input boxes, choose options etc.
const createAddTask = () => {
	navContainer.innerHTML = '';

	const form = document.createElement('form', {class: 'add-task-form'});

	const titleLabel = createElement('label', {for: 'task-title'}, 'Task Title');
	const titleInput = createElement('input', {
		type: 'text',
		id: 'task-title',
		name: 'task-title',
		placeholder: 'Enter task title',
		required: true,
	});

	form.appendChild(titleLabel);
	form.appendChild(titleInput);
};

// function responsible for showing main content depends of a tag choose
const showContent = (content) => {
	const mainContent = document.querySelector('main');
	mainContent.innerHTML = `<p>${content}</p>`;
};

// function which is responsible which take arguments nav, content, headerBtns, headerBurgerItem and including onTransitionEnd function
const handleNavTransition = (nav, content, headerBtns, headerBurgerItem) => {
	// function which ivoke a function createNewContent, adding class for nav (nav-active) and remove listener when transition on nav will end
	const onTransitionEnd = () => {
		createNavContent(content, headerBtns, headerBurgerItem);
		nav.classList.add('nav-active');
		nav.removeEventListener('transitionend', onTransitionEnd);
	};

	nav.addEventListener('transitionend', onTransitionEnd);
};

export {nav, navContents, createNavContent, showContent, handleNavTransition};
