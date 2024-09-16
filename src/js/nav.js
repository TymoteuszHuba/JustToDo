import {addSeveral, createElements, createElement} from './functions';

const nav = document.querySelector('nav');
nav.classList.add('nav');

const navElements = [
	{
		tag: 'div',
		className: 'nav-container',
		content: '',
		children: [
			{
				tag: 'div',
				className: 'nav-btn nav-home',
				content: `<i class="fa-solid fa-house"></i>`,
			},
			{
				tag: 'div',
				className: 'nav-btn nav-add-task',
				content: `<i class="fa-regular fa-plus"></i>`,
			},
			{
				tag: 'div',
				className: 'nav-btn nav-stiky-notes',
				content: `<i class="fa-regular fa-note-sticky"></i>`,
			},
		],
	},
];

const createNavElements = () => {
	const navContent = createElements(navElements);

	addSeveral(navContent, nav);
};

export {createNavElements};
