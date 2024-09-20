import {addSeveral, createElements} from './functions';
import {showTaskModal, removeModal} from './taskModal';
import {addTask, getCurrentYear, getCurrentMonth, getTasks} from './state';
import {addTaskDotToDay} from './utils';
import {createCalendarDays} from './calendar'; // impo
// create a task array which will take all created tasks
// let tasksList = [];

// get nav from website content
const nav = document.querySelector('nav');
// add class into nav
nav.classList.add('nav');

// array includes all nav elements (structure)
const navElements = [
	{
		tag: 'div',
		className: 'nav-container',
		content: '',
		children: [
			{
				tag: 'div',
				className: 'nav-btn nav-home',
				content: `<i class="fa-solid fa-house"></i>`,
			},
			{
				tag: 'div',
				className: 'nav-btn nav-add-task',
				content: `<i class="fa-regular fa-plus"></i>`,
			},
			{
				tag: 'div',
				className: 'nav-btn nav-stiky-notes',
				content: `<i class="fa-regular fa-note-sticky"></i>`,
			},
		],
	},
];

// control the task submit button
const handleTaskSubmit = () => {
	// get all task modal elements from website content
	const title = document.getElementById('task-title').value;
	const details = document.getElementById('task-details').value;
	const date = document.getElementById('task-date').value;
	const priority = document.querySelector(
		'input[name="priority"]:checked'
	)?.value;

	// check if title and details and priority isnt empty
	if (title && details && priority) {
		// create the task object
		const task = {title, details, date, priority};
		//add task to the list
		addTask(task);

		// invoke addTasktoCalendar
		// addTaskToCalendar(task);

		// addTaskDotToDay(task);

		// Re-render the calendar with updated tasks
		const currentYear = getCurrentYear();
		const currentMonth = getCurrentMonth();
		const tasks = getTasks();

		if (tasks.length > 0) {
			createCalendarDays(currentYear, currentMonth, tasks);
		}

		// close the modal after submission
		removeModal();
	} else {
		alert('Please fill all fields');
	}
};

// add task (dot) to calendar
// const addTaskToCalendar = (task) => {
// 	// handle the logic to add the task to the appropriate day
// 	const taskDay = new Date(date).getDate();
// 	// get all days from calendar
// 	const dayElements = document.querySelectorAll('.calendar-days .day');

// 	// for each day from dayElements
// 	dayElements.forEach((dayElement) => {
// 		// get the day number in integer (parseInt)
// 		const dayNumber = parseInt(dayElement.querySelector('p.day-number'));
// 		// check if taskDay is the same like dayNumber
// 		if (taskDay === dayNumber) {
// 			// if everything ok then get day-content
// 			const dayContent = dayElement.querySelector('.day-content');

// 			// if day content exists
// 			if (dayContent) {
// 				// create dot
// 				dayContent.innerHTML = '<div class="task-dot"></div>';
// 			}
// 		}
// 	});
// };

// handle click on buttons from navigation
const handleNavClick = () => {
	const navBtns = document.querySelectorAll('.nav-btn');

	navBtns.forEach((btn) => {
		btn.addEventListener('click', () => {
			if (btn.classList.contains('nav-home')) {
				// reload website
				location.reload();
			} else if (btn.classList.contains('nav-add-task')) {
				//show task modal, passing the current date from the calendar
				// current date in YYY-MM-DD
				const currentDate = new Date().toISOString().split('T')[0];
				// showTaskModal(currentDate, handleTaskSubmit);
				showTaskModal(currentDate, handleTaskSubmit);
				console.log(showTaskModal);
			} else if (btn.classList.contains('nav-sticky-notes')) {
			}
		});
	});
};

// creates a nav elements
const createNavElements = () => {
	const navContent = createElements(navElements);

	addSeveral(navContent, nav);

	// keep function handle nav click in main structure
	handleNavClick();
};

export {createNavElements};
