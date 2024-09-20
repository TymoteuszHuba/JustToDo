import {createElements, addSeveral, createElement} from './functions';

const createModal = (contentElements) => {
	//remove any existin modals
	const existingModal = document.querySelector('.task-modal');
	if (existingModal) {
		existingModal.remove();
	}

	//create modal overlay
	const modalOverlay = createElement('div', {className: 'task-modal-overlay'});

	// create modal conteiner
	const modalContainer = createElements([
		{
			tag: 'div',
			className: 'task-modal',
			children: contentElements,
		},
	]);

	// append modal and overlay to the document
	document.body.appendChild(modalOverlay);
	// Check if modalContainer is an array or a single element
	if (Array.isArray(modalContainer)) {
		// If it's an array, append each element
		modalContainer.forEach((el) => document.body.appendChild(el));
	} else {
		// If it's a single element, append it directly
		document.body.appendChild(modalContainer);
	}

	// Close modal when clicking outside of it
	modalOverlay.addEventListener('click', removeModal);
};

const removeModal = () => {
	const modal = document.querySelector('.task-modal');
	const overlay = document.querySelector('.task-modal-overlay');

	if (modal) modal.remove();
	if (overlay) overlay.remove();
};

const showTaskModal = (currentDate, handleTaskSubmit) => {
	const modalElements = [
		{
			tag: 'div',
			className: 'task-modal-content',
			children: [
				{
					tag: 'h2',
					content: 'Add new task',
				},
				{
					tag: 'input',
					className: 'task-title',
					attributes: {
						type: 'text',
						placeholder: 'task title',
						id: 'task-title',
					},
				},
				{
					tag: 'textarea',
					className: 'task-text',
					attributes: {
						placeholder: 'Task Details',
						id: 'task-details',
					},
				},
				{
					tag: 'input',
					className: 'task-date',
					attributes: {
						type: 'date',
						id: 'task-date',
						value: currentDate,
					},
				},
				{
					tag: 'div',
					className: 'task-priority',
					content: `<p> Priority: </p>`,
					children: [
						{
							tag: 'label',
							content: `<input type="radio" name="priority" value="red"> Red (very important)`,
						},
						{
							tag: 'label',
							content: `<input type="radio" name="priority" value="yellow"> yellow (important)`,
						},
						{
							tag: 'label',
							content: `<input type="radio" name="priority" value="blue"> blue (not improtant)`,
						},
					],
				},
			],
		},
		{
			tag: 'button',
			className: 'task-submit-btn',
			content: 'Add Task',
		},
	];

	createModal(modalElements);

	// attach the event listener to submit button for task submission
	document
		.querySelector('.task-submit-btn')
		.addEventListener('click', handleTaskSubmit);
};

export {removeModal, showTaskModal};
