// UNIVERSAL FUNCTIONS

// function creates element with optional attributes and content
const createElement = (el, attributes = {}, contnet = '') => {
	const element = document.createElement(el);
	for (const key in attributes) {
		element.setAttribute(key, attributes[key]);
	}
	element.innerHTML = contnet;
	return element;
};

// function to create several elements with optional atributes and content
const createElements = (elementsArray) => {
	return elementsArray.map((config) => {
		const {tag, attributes, content} = config;
		return createElement(tag, attributes, content);
	});
};

// add several items into parent
const addSeveral = (elements, parent) => {
	elements.forEach((element) => {
		parent.appendChild(element);
	});
};

// universal function responsible for toggle a class
const toggleF = (itemName, className) => {
	itemName.classList.toggle(className);
};

export {createElement, createElements, addSeveral, toggleF};
