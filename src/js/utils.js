const addTaskDotToDay = (task) => {
	const taskDate = new Date(task.date);
	const taskDay = taskDate.getDate();

	const dayElement = document.querySelector(
		`.calendar-days .day p.day-number[data-day="${taskDay}"]`
	);

	if (dayElement) {
		const dayContent = dayElement.parentNode.querySelector('.day-content');

		if (dayContent) {
			// Add a task dot if it's not already there
			if (!dayContent.querySelector('.task-dot')) {
				const dot = document.createElement('div');
				dot.classList.add('task-dot');
				dayContent.appendChild(dot);
			}
		}
	}
};

export {addTaskDotToDay};
