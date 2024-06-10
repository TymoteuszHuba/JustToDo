import {toggleF} from './functions';
import {nav} from './navStructure';
import {
	navContents,
	createNavContent,
	handleNavTransition,
} from './navStructure';

// setting variable header which take header parameter from web content
const header = document.querySelector('header');

// setting a class header into header variable
header.className = 'header';

// function responsible for toggle icons on click
const toggleIcons = (btn, showActive) => {
	const originalIcon = btn.querySelector('.original-icon');
	const activeIcon = btn.querySelector('.active-icon');

	if (originalIcon && activeIcon) {
		if (showActive) {
			originalIcon.classList.add('hidden');
			activeIcon.classList.remove('hidden');
		} else {
			originalIcon.classList.remove('hidden');
			activeIcon.classList.add('hidden');
		}
	}
};

// function responsible for reset values
const resetButtons = (headerBtns, headerBurgerItem) => {
	headerBtns.forEach((btn) => {
		btn.classList.remove('header-btn-color');
		toggleIcons(btn, false);
	});
	headerBurgerItem.classList.remove('header-burger-active');
};

// main function responsible for header control
const headerControl = () => {
	const headerBtns = document.querySelectorAll('.header-btn');
	const headerBurgerItem = document.querySelector(
		'.header-btn-burger:nth-child(2)'
	);
	const bgToggleIcon = document.querySelector('.bg-toggle-icon');
	// const headerBtnLast = document.querySelector('.header-btn:last-child');

	// foreach loop to control the each button
	headerBtns.forEach((btn) => {
		// add listener on each button
		btn.addEventListener('click', (event) => {
			// variable isActive working like a flag which checking if the button class contains a header-btn-color
			const isActive = btn.classList.contains('header-btn-color');
			// variable which take a clicked button id
			const btnId = event.target.id;

			// controls for bg mode toggle button
			if (btnId == 'bg-mode-toggle') {
				bgToggleIcon.classList.toggle('rotate');
				return;
			}

			// variable which check that nav class contains a nav-active
			const wasNavActive = nav.classList.contains('nav-active');

			// Reset all buttons and headerBurgerItem immediately
			resetButtons(headerBtns, headerBurgerItem);

			// checking if isActive include header-btn-color if TRUE, remove nav-active from nav
			if (isActive) {
				nav.classList.remove('nav-active');
			} else {
				// if FALSE add to btn class header-btn-clolor
				btn.classList.add('header-btn-color');
				// invoke toggleIcons which show different type of icons
				toggleIcons(btn, true);
				// incoke a function for special cases depends of btnId
				handleSpecialCases(btnId, headerBurgerItem);

				// variable which takes an value under a btnId which is a key of object nevContents[key]
				const content = navContents[btnId];

				// if content is TRUE run the code
				if (content) {
					// checking if wasNavActive is TRUE (contains a nav-active)
					if (wasNavActive) {
						// remove nav-active to hide nav
						nav.classList.remove('nav-active');
						// invoke function handleNavTransition which setup an event listener for the end of the css transition (transitioned)
						handleNavTransition(nav, content, headerBtns, headerBurgerItem);
					} else {
						// if wasActiveNav is FALSE then creates nav content correct to clicked button
						createNavContent(content, headerBtns, headerBurgerItem);
						// add class nav-active into nav
						nav.classList.add('nav-active');
					}
				}
			}
		});
	});
};

// function to control special cases depends of button id
const handleSpecialCases = (btnId, headerBurgerItem) => {
	if (btnId == 'header-tasks') {
		headerBurgerItem.classList.add('header-burger-active');
	} else if (btnId == 'header-task-lists') {
		console.log(btnId);
	} else if (btnId == 'add-task') {
		console.log(btnId);
	}
};

export {header, headerControl, resetButtons};
