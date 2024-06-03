import {toggleF} from './functions';
import {nav} from './nav';

const header = document.querySelector('header');
// let headerBtns;

header.className = 'header';

const toggleIcons = (btn, showActive) => {
	console.log('button:', btn);
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

const headerControl = () => {
	const headerBtns = document.querySelectorAll('.header-btn');
	const headerBurgerItem = document.querySelector(
		'.header-btn-burger:nth-child(2)'
	);
	const bgToggleIcon = document.querySelector('.bg-toggle-icon');
	const headerBtnLast = document.querySelector('.header-btn:last-child');

	headerBtns.forEach((btn) => {
		btn.addEventListener('click', (event) => {
			const isActive = btn.classList.contains('header-btn-color');
			const btnId = event.target.id;

			// controls for bg mode toggle button
			if (btnId == 'bg-mode-toggle') {
				bgToggleIcon.classList.toggle('rotate');
				return;
			}

			// Reset all buttons and headerBurgerItem immediately
			resetButtons(headerBtns, headerBurgerItem);

			if (isActive) {
				nav.classList.remove('nav-active');
			} else {
				nav.classList.remove('nav-active');

				btn.classList.add('header-btn-color');

				toggleIcons(btn, true);

				handleSpecialCases(btnId, headerBurgerItem);

				setTimeout(() => {
					nav.classList.add('nav-active');
				}, 200);
			}
		});
	});
};

// function responsible for reset values
const resetButtons = (headerBtns, headerBurgerItem) => {
	headerBtns.forEach((btn) => {
		btn.classList.remove('header-btn-color');
		toggleIcons(btn, false);
	});
	headerBurgerItem.classList.remove('header-burger-active');
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

export {header, headerControl};
