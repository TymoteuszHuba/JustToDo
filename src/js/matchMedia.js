import {headerStructure} from './headerStructure';
import {headerControl, header} from './headerControls';

// Define screen size queries
const breakpoints = {
	s: '(max-width: 639px)',
	m: '(min-width: 640px) and (max-width: 767px)',
	l: '(min-width: 768px) and (max-width: 1023px)',
	xl: '(min-width: 1024px)',
};

// Track the current breakpoint
let currentBreakpoint = '';

// Determine the current breakpoint
const getCurrentBreakpoint = () => {
	for (const [key, query] of Object.entries(breakpoints)) {
		if (window.matchMedia(query).matches) {
			return key;
		}
	}
	return 's'; // Default to 's' if no match
};

// Handle screen size changes
const handleScreenChange = () => {
	const newBreakpoint = getCurrentBreakpoint();

	// Only run actions when the breakpoint has changed
	if (newBreakpoint !== currentBreakpoint) {
		currentBreakpoint = newBreakpoint;

		if (header) {
			// Clear header content if needed
			header.innerHTML = '';

			// Adjust header visibility based on current breakpoint
			switch (newBreakpoint) {
				case 'xl':
					console.log('xlScreen is set');
					break;
				case 'l':
					console.log('lScreen is set');
					break;
				case 'm':
					console.log('mScreen is set');
					header.style.display = 'none'; // Hide the header
					break;
				case 's':
					console.log('sScreen is set');
					header.style.display = 'flex'; // Show the header
					headerStructure();
					headerControl();
					break;
			}
		}
	}
};

// Set up media query listeners
const setupListeners = () => {
	Object.values(breakpoints).forEach((query) => {
		const mediaQueryList = window.matchMedia(query);
		mediaQueryList.addEventListener('change', handleScreenChange);
	});

	// Initial check to set up the correct state
	handleScreenChange();
};

// Initialize
setupListeners();

export {handleScreenChange};
