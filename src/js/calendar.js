import {addSeveral, createElements, createElement} from './functions';
import {tasksList} from './nav';
import {
	getCurrentYear,
	getCurrentMonth,
	getCurrentDay,
	getTasks,
	setCurrentMonth,
	setCurrentDay,
	setCurrentYear,
} from './state';
import {addTaskDotToDay} from './utils';

// get the main element from the web structure
const main = document.querySelector('main');

// set calendar variables needed for calendar
const currentDate = new Date();
let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

// function responsible for create calendar structure
const createCalendarElements = () => {
	// create section for calendar
	const calendarContainer = createElement('section', {
		className: 'calendar',
	});
	// create a containers for months and days using universal function createElement
	const monthsContainer = createElement('div', {className: 'calendar-months'});
	const daysContainer = createElement('div', {className: 'calendar-days'});

	// add calendarContainer into main structure
	main.appendChild(calendarContainer);
	// add months and days container into calendarContainer
	calendarContainer.append(monthsContainer, daysContainer);

	// invoke functions which creates months and days
	// createCalendarDays(currentYear, currentMonth);
	// createCalendarMonths(currentYear, currentMonth);

	createCalendarMonths(getCurrentYear(), getCurrentMonth());
	createCalendarDays(getCurrentYear(), getCurrentMonth(), getTasks());
};

// function which creates a calendar months elements
const createCalendarMonths = (year, currentMonth) => {
	// get the month container
	const monthsContainer = document.querySelector('.calendar-months');
	// crearte an array with names of months
	const monthNames = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];

	// use a map to create a months
	const months = monthNames.map((month, index) => ({
		tag: 'button',
		className: `month${index === currentMonth ? ' current-month' : ''}`,
		content: `${month}`,
	}));

	// use function createElements to create all elements
	const monthElements = createElements(months);
	// clear an existing months in the container
	monthsContainer.innerHTML = '';
	// add elements into a content
	addSeveral(monthElements, monthsContainer);

	handleMonthClick();
};

// function which creates calendar elements
const createCalendarDays = (year, month, tasks = []) => {
	// get the days container
	const daysContainer = document.querySelector('.calendar-days');
	// clean any existing days
	daysContainer.innerHTML = '';
	// number of days in the month
	const numDays = new Date(year, month + 1, 0).getDate();
	// set an empty array days
	const days = [];

	// fill an empty array days
	for (let day = 1; day <= numDays; day++) {
		const isCurrentDay =
			day === currentDay && year === currentYear && month === currentMonth;

		days.push({
			tag: 'div',
			className: `day${isCurrentDay ? ' current-day' : ''}`,
			content: `<p class='day-number'>${day}</p>`,
			children: [
				{
					tag: 'div',
					className: 'day-content',
					content: '',
				},
			],
		});
	}

	const dayElements = createElements(days);
	addSeveral(dayElements, daysContainer);

	// use the universal function to add dots for each task
	if (tasks.length > 0) {
		tasks.forEach(addTaskDotToDay);
	}

	handleDayClick();
};

// add click on each month
const handleMonthClick = () => {
	const monthsContainer = document.querySelector('.calendar-months');
	const monthBtns = monthsContainer.querySelectorAll('.month');

	monthBtns.forEach((button, index) => {
		button.addEventListener('click', () => {
			currentMonth = index;
			// update the calendar days to reflect the new month
			createCalendarDays(getCurrentYear(), currentMonth, getTasks());
			// re-render the month buttons to highlight the selected month
			createCalendarMonths(getCurrentYear(), currentMonth);
		});
	});
};

const handleDayClick = () => {
	const daysContainer = document.querySelector('.calendar-days');
	const dayBtns = daysContainer.querySelectorAll('.day');

	dayBtns.forEach((button, index) => {
		button.addEventListener('click', () => {
			currentDay = index + 1;

			createCalendarDays(getCurrentYear(), currentMonth, getTasks());
		});
	});
};

export {createCalendarElements, createCalendarDays};
