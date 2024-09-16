import {addSeveral, createElements, createElement} from './functions';
import headerImage from '../images/header-image.jpg';

// get the header element from DOM
const header = document.querySelector('header');
header.classList.add('header');

// Define an array with all elements for header
const headerElements = [
	{
		tag: 'div',
		className: 'header-title',
		content: '<h1> Hello Andrew! </h1>',
		children: [],
	},
	{
		tag: 'div',
		className: 'header-image',
		content: '',
		children: [
			{
				tag: 'img',
				className: 'header-user-img',
				content: '',
				attributes: {
					src: headerImage,
					alt: 'profile image',
				},
			},
		],
	},
];

// function which passes all invoke elements into main.js
const createHeaderElements = () => {
	//
	const headerContainer = createElement('div', {className: 'header-container'});

	const headerContent = createElements(headerElements);

	addSeveral(headerContent, headerContainer);

	header.appendChild(headerContainer);
};

export {createHeaderElements};
