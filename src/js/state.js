let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();
let currentDay = new Date().getDate();
// create a task array which will take all created tasks
let tasksList = [];

// getters
const getCurrentYear = () => currentYear;
const getCurrentMonth = () => currentMonth;
const getCurrentDay = () => currentDay;
const getTasks = () => tasks;

// setters
const setCurrentYear = (year) => {
	currentYear = year;
};
const setCurrentMonth = (month) => {
	currentMonth = month;
};

const setCurrentDay = (day) => {
	currentDay = day;
};
const addTask = (task) => {
	tasksList.push(task);
};
const setTasks = (newTasks) => {
	tasks = newTasks;
};

export {
	getCurrentYear,
	getCurrentMonth,
	getCurrentDay,
	getTasks,
	setCurrentYear,
	setCurrentMonth,
	setCurrentDay,
	addTask,
	setTasks,
};
