import {createElement, createElements, addSeveral} from './functions';

const main = document.querySelector('main');

let taskGroupElements = [
	{
		tag: 'button',
		className: 'groups-btn groups-add-btn',
		content: `<i class="fa-regular fa-plus"></i>`,
	},
	{
		tag: 'button',
		className: 'groups-btn groups-home',
		content: 'Home',
	},
	{
		tag: 'button',
		className: 'groups-btn groups-work',
		content: 'Work',
	},
	{
		tag: 'button',
		className: 'groups-btn groups-shipping',
		content: 'Shop',
	},
	{
		tag: 'button',
		className: 'groups-btn groups-shipping',
		content: 'Gym',
	},
];

const createGroupElements = () => {
	const groupContainer = createElement('section', {className: 'groups'});

	const groupsContent = createElements(taskGroupElements);

	addSeveral(groupsContent, groupContainer);
	main.appendChild(groupContainer);
};

export {createGroupElements};
