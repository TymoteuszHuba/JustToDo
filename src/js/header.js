import {toggleF} from './functions';
import {nav} from './nav';

const header = document.querySelector('header');
// let headerBtns;

header.className = 'header';

const headerControl = () => {
	const headerBtns = document.querySelectorAll('.header-btn');
	const headerBurgerItem = document.querySelector(
		'.header-btn-burger:nth-child(2)'
	);
	const headerBtnLast = document.querySelector('.header-btn:last-child');

	const toggleIcons = (btn, showActive) => {
		console.log('button:', btn);
		const originalIcon = btn.querySelector('.original-icon');
		const activeIcon = btn.querySelector('.active-icon');
		console.log(originalIcon, activeIcon);

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

	headerBtns.forEach((btn) => {
		btn.addEventListener('click', (event) => {
			const isActive = btn.classList.contains('header-btn-color');
			const btnId = event.target.id;

			

			// different controls for bg mode toggle button
			if (btnId == 'bg-mode-toggle') {
				console.log(btnId);
				return;
			}

			// Reset all buttons and headerBurgerItem immediately
			headerBtns.forEach((btn) => {
				btn.classList.remove('header-btn-color');
				
				
				toggleIcons(btn, false);
			});

			headerBurgerItem.classList.remove('header-burger-active');

			if (isActive) {
				nav.classList.remove('nav-active');
			} else {
				nav.classList.remove('nav-active');

				btn.classList.add('header-btn-color');

				toggleIcons(btn, true);
				

				if (btnId === 'header-tasks') {
					headerBurgerItem.classList.add('header-burger-active');
					console.log(btnId);
				} else if (btnId == 'header-task-lists') {
					console.log(btnId);
				} else if (btnId == 'add-task') {
				}

				setTimeout(() => {
					nav.classList.add('nav-active');
				}, 200);
			}
		});
	});
};

export {header, headerControl};
