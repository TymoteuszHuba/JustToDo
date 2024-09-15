// UNIVERSAL FUNCTIONS

// function creates element with optional attributes and content
const createElement = (el, attributes = {}, contnet = '') => {
	const element = document.createElement(el);

	// map className to class attribute
	if (attributes.className) {
		element.className = attributes.className;
		// remove className to avoid duplicate setting
		delete attributes.className;
	}
	// sort other attributes
	for (const key in attributes) {
		element.setAttribute(key, attributes[key]);
	}
	element.innerHTML = contnet;
	return element;
};

// function to create several elements with optional atributes and content
const createElements = (elementsArray) => {
	// function which takes a single argument and iterates over each item in the array
	return elementsArray.map((config) => {
		const {
			tag,
			className,
			attributes = {},
			content = '',
			children = [],
		} = config;

		// creates a shallow copy of the attributes object to avoid mutating the  original attributes object
		const elementAttributes = {...attributes};

		// it adds or updates the className property in the elementAttributes object
		if (className) {
			elementAttributes.className = className;
		}
		// calls the createElement function to create an HTML element
		const element = createElement(tag, elementAttributes, content);

		// recursively create and append child elements
		if (children.length > 0) {
			const childElements = createElements(children);
			addSeveral(childElements, element);
		}

		// created element is returned from the map function 
		return element;
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

export {createElement, addSeveral, toggleF, createElements};
