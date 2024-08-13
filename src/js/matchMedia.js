import {headerStructure} from './headerStructure';
import {headerControl, header} from './headerControls';


// define screen size queries
const sScreen = '(min-width: 640px)';
const mScreen = '(min-width: 768px)';
const lScreen = '(min-width: 1024px)';
const xlScreen = '(min-width: 1280px)';

// track the current screen size
let currentBreakpoint = '';

const handleScreenChange = (e) => {
	let newBreakpoint;

	if (window.matchMedia(xlScreen).matches) {
		newBreakpoint = 'xl';
	} else if (window.matchMedia(lScreen).matches) {
		newBreakpoint = 'l';
	} else if (window.matchMedia(mScreen).matches) {
		newBreakpoint = 'm';
	} else {
		newBreakpoint = 's';
	}

	// only run actions when the breakpoint has changed
	if (newBreakpoint !== currentBreakpoint) {
		currentBreakpoint = newBreakpoint;

		// const headerElement = document.querySelector('.header');
		if (header) {
			header.innerHTML = '';
		}

		if (newBreakpoint === 's') {
			console.log('sScreen is set');
			header.style.display = 'flex';
			headerStructure();
			headerControl();
		} else if (newBreakpoint === 'm') {
			console.log('mScreen is set');
			header.style.display = 'none';
		} else if (newBreakpoint === 'l') {
			console.log('lScreen is set');
		} else if (newBreakpoint === 'xl') {
			console.log('xl screen is set');
		}
	}
};

// setup media query listeners
const setupListeners = () => {
	const mediaQueries = [
		window.matchMedia(sScreen),
		window.matchMedia(mScreen),
		window.matchMedia(lScreen),
		window.matchMedia(xlScreen),
	];

	mediaQueries.forEach((mq) =>
		mq.addEventListener('change', handleScreenChange)
	);

	handleScreenChange();
};

setupListeners();

export {handleScreenChange};
