/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/calendar.js":
/*!****************************!*\
  !*** ./src/js/calendar.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCalendarElements: () => (/* binding */ createCalendarElements)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/js/functions.js");


// get the main element from the web structure
var main = document.querySelector('main');

// set calendar variables needed for calendar
var currentDate = new Date();
var currentDay = currentDate.getDate();
var currentMonth = currentDate.getMonth();
var currentYear = currentDate.getFullYear();

// function responsible for create calendar structure
var createCalendarElements = function createCalendarElements() {
  // create section for calendar
  var calendarContainer = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('section', {
    className: 'calendar'
  });
  // create a containers for months and days using universal function createElement
  var monthsContainer = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {
    className: 'calendar-months'
  });
  var daysContainer = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {
    className: 'calendar-days'
  });

  // add calendarContainer into main structure
  main.appendChild(calendarContainer);
  // add months and days container into calendarContainer
  calendarContainer.append(monthsContainer, daysContainer);

  // invoke functions which creates months and days
  createCalendarDays(currentYear, currentMonth);
  createCalendarMonths(currentYear, currentMonth);
};

// function which creates a calendar months elements
var createCalendarMonths = function createCalendarMonths(year, currentMonth) {
  // get the month container
  var monthsContainer = document.querySelector('.calendar-months');
  // crearte an array with names of months
  var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // use a map to create a months
  var months = monthNames.map(function (month, index) {
    return {
      tag: 'button',
      className: "month".concat(index === currentMonth ? ' current-month' : ''),
      content: "".concat(month)
    };
  });

  // use function createElements to create all elements
  var monthElements = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElements)(months);
  // clear an existing months in the container
  monthsContainer.innerHTML = '';
  // add elements into a content
  (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addSeveral)(monthElements, monthsContainer);
  handleMonthClick();
};

// function which creates calendar elements
var createCalendarDays = function createCalendarDays(year, month) {
  // get the days container
  var daysContainer = document.querySelector('.calendar-days');
  // clean any existing days
  daysContainer.innerHTML = '';
  // number of days in the month
  var numDays = new Date(year, month + 1, 0).getDate();
  // set an empty array days
  var days = [];

  // fill an empty array days
  for (var day = 1; day <= numDays; day++) {
    var isCurrentDay = day === currentDay && year === currentYear && month === currentMonth;
    days.push({
      tag: 'div',
      className: "day".concat(isCurrentDay ? ' current-day' : ''),
      content: "<p class='day-number'>".concat(day, "</p>"),
      children: [{
        tag: 'div',
        className: 'day-content',
        content: ''
      }]
    });
  }
  var dayElements = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElements)(days);
  (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addSeveral)(dayElements, daysContainer);
  handleDayClick();
};

// add click on each month
var handleMonthClick = function handleMonthClick() {
  var monthsContainer = document.querySelector('.calendar-months');
  var monthBtns = monthsContainer.querySelectorAll('.month');
  monthBtns.forEach(function (button, index) {
    button.addEventListener('click', function () {
      currentMonth = index;
      // update the calendar days to reflect the new month
      createCalendarDays(currentYear, currentMonth);
      // re-render the month buttons to highlight the selected month
      createCalendarMonths(currentYear, currentMonth);
    });
  });
};
var handleDayClick = function handleDayClick() {
  var daysContainer = document.querySelector('.calendar-days');
  var dayBtns = daysContainer.querySelectorAll('.day');
  dayBtns.forEach(function (button, index) {
    button.addEventListener('click', function () {
      currentDay = index + 1;
      createCalendarDays(currentYear, currentMonth);
    });
  });
};


/***/ }),

/***/ "./src/js/functions.js":
/*!*****************************!*\
  !*** ./src/js/functions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addSeveral: () => (/* binding */ addSeveral),
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   createElements: () => (/* binding */ createElements),
/* harmony export */   toggleF: () => (/* binding */ toggleF)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// UNIVERSAL FUNCTIONS

// function creates element with optional attributes and content
var createElement = function createElement(el) {
  var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var contnet = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var element = document.createElement(el);

  // map className to class attribute
  if (attributes.className) {
    element.className = attributes.className;
    // remove className to avoid duplicate setting
    delete attributes.className;
  }
  // sort other attributes
  for (var key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
  element.innerHTML = contnet;
  return element;
};

// function to create several elements with optional atributes and content
var createElements = function createElements(elementsArray) {
  // function which takes a single argument and iterates over each item in the array
  return elementsArray.map(function (config) {
    var tag = config.tag,
      className = config.className,
      _config$attributes = config.attributes,
      attributes = _config$attributes === void 0 ? {} : _config$attributes,
      _config$content = config.content,
      content = _config$content === void 0 ? '' : _config$content,
      _config$children = config.children,
      children = _config$children === void 0 ? [] : _config$children;

    // creates a shallow copy of the attributes object to avoid mutating the  original attributes object
    var elementAttributes = _objectSpread({}, attributes);

    // it adds or updates the className property in the elementAttributes object
    if (className) {
      elementAttributes.className = className;
    }
    // calls the createElement function to create an HTML element
    var element = createElement(tag, elementAttributes, content);

    // recursively create and append child elements
    if (children.length > 0) {
      var childElements = createElements(children);
      addSeveral(childElements, element);
    }

    // created element is returned from the map function 
    return element;
  });
};
// add several items into parent
var addSeveral = function addSeveral(elements, parent) {
  elements.forEach(function (element) {
    parent.appendChild(element);
  });
};

// universal function responsible for toggle a class
var toggleF = function toggleF(itemName, className) {
  itemName.classList.toggle(className);
};


/***/ }),

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHeaderElements: () => (/* binding */ createHeaderElements)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/js/functions.js");
/* harmony import */ var _images_header_image_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/header-image.jpg */ "./src/images/header-image.jpg");



// get the header element from DOM
var header = document.querySelector('header');
header.classList.add('header');

// Define an array with all elements for header
var headerElements = [{
  tag: 'div',
  className: 'header-title',
  content: '<h1> Hello Andrew! </h1>',
  children: []
}, {
  tag: 'div',
  className: 'header-image',
  content: '',
  children: [{
    tag: 'img',
    className: 'header-user-img',
    content: '',
    attributes: {
      src: _images_header_image_jpg__WEBPACK_IMPORTED_MODULE_1__,
      alt: 'profile image'
    }
  }]
}];

// function which passes all invoke elements into main.js
var createHeaderElements = function createHeaderElements() {
  //
  var headerContainer = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {
    className: 'header-container'
  });
  var headerContent = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElements)(headerElements);
  (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addSeveral)(headerContent, headerContainer);
  header.appendChild(headerContainer);
};


/***/ }),

/***/ "./src/js/matchMedia.js":
/*!******************************!*\
  !*** ./src/js/matchMedia.js ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/nav.js":
/*!***********************!*\
  !*** ./src/js/nav.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNavElements: () => (/* binding */ createNavElements)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/js/functions.js");
/* harmony import */ var _taskModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskModal */ "./src/js/taskModal.js");


var nav = document.querySelector('nav');
nav.classList.add('nav');
var navElements = [{
  tag: 'div',
  className: 'nav-container',
  content: '',
  children: [{
    tag: 'div',
    className: 'nav-btn nav-home',
    content: "<i class=\"fa-solid fa-house\"></i>"
  }, {
    tag: 'div',
    className: 'nav-btn nav-add-task',
    content: "<i class=\"fa-regular fa-plus\"></i>"
  }, {
    tag: 'div',
    className: 'nav-btn nav-stiky-notes',
    content: "<i class=\"fa-regular fa-note-sticky\"></i>"
  }]
}];
var handleTaskSubmit = function handleTaskSubmit() {
  var _document$querySelect;
  var title = document.querySelector('.task-title').value;
  var details = document.querySelector('.task-text').value;
  var date = document.querySelector('.task-date').value;
  var priority = (_document$querySelect = document.querySelector('.input[name="priority"]:checked')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.value;
  if (title && details && priority) {
    // create the task object
    var task = {
      title: title,
      details: details,
      date: date,
      priority: priority
    };

    // handle the logic to add the task to the appropriate day
    var dayElement = document.querySelector(".calendar-days .day p.day-number:contains(".concat(new Date(date).getDate(), ")"));
    if (dayElement) {
      var dayContent = dayElement.parentNode.querySelector('.day-content');
      dayContent.innerHTML = '<div class="task-dot"></div>';
    }

    // close the modal after submission
    (0,_taskModal__WEBPACK_IMPORTED_MODULE_1__.removeModal)();
  } else {
    alert('Please fill all fields');
  }
};
var handleNavClick = function handleNavClick() {
  var navBtns = document.querySelectorAll('.nav-btn');
  navBtns.forEach(function (btn, index) {
    btn.addEventListener('click', function () {
      if (btn.classList.contains('nav-home')) {
        // reload website
        location.reload();
      } else if (btn.classList.contains('nav-add-task')) {
        //show task modal, passing the current date from the calendar
        // current date in YYY-MM-DD
        var currentDate = new Date().toISOString().split('T')[0];
        // showTaskModal(currentDate, handleTaskSubmit);
        (0,_taskModal__WEBPACK_IMPORTED_MODULE_1__.showTaskModal)(currentDate, handleTaskSubmit);
        console.log(_taskModal__WEBPACK_IMPORTED_MODULE_1__.showTaskModal);
      } else if (btn.classList.contains('nav-sticky-notes')) {}
    });
  });
};
var createNavElements = function createNavElements() {
  var navContent = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElements)(navElements);
  (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addSeveral)(navContent, nav);
  handleNavClick();
};


/***/ }),

/***/ "./src/js/taskGroups.js":
/*!******************************!*\
  !*** ./src/js/taskGroups.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createGroupElements: () => (/* binding */ createGroupElements)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/js/functions.js");

var main = document.querySelector('main');
var taskGroupElements = [{
  tag: 'button',
  className: 'groups-btn groups-add-btn',
  content: "<i class=\"fa-regular fa-plus\"></i>"
}, {
  tag: 'button',
  className: 'groups-btn groups-home',
  content: 'Home'
}, {
  tag: 'button',
  className: 'groups-btn groups-work',
  content: 'Work'
}, {
  tag: 'button',
  className: 'groups-btn groups-shipping',
  content: 'Shop'
}, {
  tag: 'button',
  className: 'groups-btn groups-shipping',
  content: 'Gym'
}];
var createGroupElements = function createGroupElements() {
  var groupContainer = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('section', {
    className: 'groups'
  });
  var groupsContent = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElements)(taskGroupElements);
  (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addSeveral)(groupsContent, groupContainer);
  main.appendChild(groupContainer);
};


/***/ }),

/***/ "./src/js/taskModal.js":
/*!*****************************!*\
  !*** ./src/js/taskModal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeModal: () => (/* binding */ removeModal),
/* harmony export */   showTaskModal: () => (/* binding */ showTaskModal)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/js/functions.js");

var createModal = function createModal(contentElements) {
  //remove any existin modals
  var existingModal = document.querySelector('.task-modal');
  if (existingModal) {
    existingModal.remove();
  }

  //create modal overlay
  var modalOverlay = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {
    className: 'task-modal-overlay'
  });

  // create modal conteiner
  var modalContainer = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElements)([{
    tag: 'div',
    className: 'task-modal',
    children: contentElements
  }]);

  // append modal and overlay to the document
  document.body.appendChild(modalOverlay[0]);
  document.body.appendChild(modalContainer[0]);

  // close modal when clicking outside of it
  modalOverlay[0].addEventListener('click', removeModal);
};
var removeModal = function removeModal() {
  var modal = document.querySelector('.task-modal');
  var overlay = document.querySelector('.task-modal-overlay');
  if (modal) modal.remove();
  if (overlay) overlay.remove();
};
var showTaskModal = function showTaskModal(currentDate, handleTaskSubmit) {
  var modalElements = [{
    tag: 'div',
    className: 'task-modal-content',
    children: [{
      tag: 'h2',
      content: 'Add new task'
    }, {
      tag: 'input',
      className: 'task-title',
      ttributes: {
        type: 'text',
        placeholder: 'task title',
        id: 'task-title'
      }
    }, {
      tag: 'textarea',
      className: 'task-text',
      attributes: {
        placeholder: 'Task Details',
        id: 'task-details'
      }
    }, {
      tag: 'input',
      className: 'task-date',
      attributes: {
        type: 'date',
        id: 'task-date',
        value: currentDate
      }
    }, {
      tag: 'div',
      className: 'task-priority',
      content: "<p> Priority: </p>",
      children: [{
        tag: 'label',
        content: "<input type=\"radio\" name=\"priority\" value=\"red\"> Red (very important)"
      }, {
        tag: 'label',
        content: "<input type=\"radio\" name=\"priority\" value=\"yellow\"> yellow (important)"
      }, {
        tag: 'label',
        content: "<input type=\"radio\" name=\"priority\" value=\"blue\"> blue (not improtant)"
      }]
    }]
  }, {
    tag: 'button',
    className: 'task-submit-btn',
    content: 'Add Task'
  }];
  createModal(modalElements);

  // attach the event listener to submit button for task submission
  document.querySelector('.task-submit-btn').addEventListener('click', handleTaskSubmit);
};


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/main.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/main.css ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --clr-light-gray: #eee;
  --clr-gray: #ddd;
  --clr-dark-gray: #bebebe;
  --clr-white: #fff;
  --clr-black: #000;
  --clr-shadow: rgba(0, 0, 0, 0.6);
  --clr-light-blue: #468d99;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
  font-family: "Poppins", sans-serif;
}

body {
  background-color: var(--clr-white);
}

.header-container {
  width: 100%;
  height: 12em;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: var(--clr-gray);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
}

.header-title {
  font-size: 1.5rem;
}

.header-title h1 {
  font-weight: 500;
}

.header-image {
  width: 7.81em;
  height: 7.81em;
  border-radius: 50%;
  object-position: center;
  overflow: hidden;
}

.header-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.calendar {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin: 1.25em 0;
  padding: 1em 2em;
  background-color: var(--clr-gray);
  border-radius: 20px;
}

.calendar-months {
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
  white-space: nowrap;
  background-color: transparent;
}

.calendar-days {
  display: flex;
  padding-bottom: 15px;
  overflow-x: auto;
  white-space: nowrap;
}

.month {
  padding: 15px;
  border: none;
  cursor: pointer;
  background-color: transparent;
}

.day {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 50px;
  margin: 0 10px;
  padding: 15px;
  background-color: var(--clr-dark-gray);
  color: var(--clr-white);
  border-radius: 15px;
  cursor: pointer;
}

.current-month {
  font-weight: bold;
  text-decoration: underline;
}

.current-day {
  background-color: var(--clr-light-blue);
}

@media (min-width: 769px) {
  .calendar {
    height: 200px;
  }
  .calendar-months {
    padding-bottom: 1em;
  }
  .calendar-days {
    flex-wrap: wrap; /* Wrap into two rows on larger screens */
    justify-content: center;
    padding-bottom: 0;
  }
  .day {
    margin: 1em;
  }
}
.groups {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  padding: 1em 2em;
  overflow-x: auto;
}

.groups-btn {
  width: auto;
  min-height: 50px;
  padding: 1em;
  margin: 0 0.63em;
  background-color: var(--clr-gray);
  border-radius: 15px;
  border: none;
  cursor: pointer;
}

.groups-btn:first-child {
  min-width: 5em;
}

.fa-plus {
  font-size: 1.8em;
}

.nav {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

.nav-container {
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 1em;
  background-color: var(--clr-black);
}

.nav-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  padding: 1em;
  border-radius: 10px;
  background-color: var(--clr-light-gray);
  font-size: 1.3rem;
  cursor: pointer;
}

.nav-btn:nth-child(2) {
  width: 45px;
  height: 45px;
  border-radius: 50%;
} `, "",{"version":3,"sources":["webpack://./src/css/main.css"],"names":[],"mappings":"AAAA;EACE,sBAAA;EACA,gBAAA;EACA,wBAAA;EACA,iBAAA;EACA,iBAAA;EACA,gCAAA;EACA,yBAAA;AACF;;AAEA;EACE,sBAAA;EACA,SAAA;EACA,UAAA;AACF;;AAEA;EACE,gBAAA;EACA,kCAAA;AACF;;AAEA;EACE,kCAAA;AACF;;AAEA;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,6BAAA;EACA,mBAAA;EACA,iCAAA;EACA,+BAAA;EACA,gCAAA;AACF;;AACA;EACE,iBAAA;AAEF;;AAAA;EACE,gBAAA;AAGF;;AADA;EACE,aAAA;EACA,cAAA;EACA,kBAAA;EACA,uBAAA;EACA,gBAAA;AAIF;;AAFA;EACE,WAAA;EACA,YAAA;EACA,iBAAA;AAKF;;AAFA;EACE,aAAA;EACA,sBAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,gBAAA;EACA,iCAAA;EACA,mBAAA;AAKF;;AAHA;EACE,aAAA;EACA,8BAAA;EACA,gBAAA;EACA,mBAAA;EACA,6BAAA;AAMF;;AAJA;EACE,aAAA;EACA,oBAAA;EACA,gBAAA;EACA,mBAAA;AAOF;;AAJA;EACE,aAAA;EACA,YAAA;EACA,eAAA;EACA,6BAAA;AAOF;;AAJA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,cAAA;EACA,cAAA;EACA,aAAA;EACA,sCAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;AAOF;;AAJA;EACE,iBAAA;EACA,0BAAA;AAOF;;AAJA;EACE,uCAAA;AAOF;;AAJA;EACE;IACE,aAAA;EAOF;EALA;IACE,mBAAA;EAOF;EALA;IACE,eAAA,EAAA,yCAAA;IACA,uBAAA;IACA,iBAAA;EAOF;EALA;IACE,WAAA;EAOF;AACF;AALA;EACE,aAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,gBAAA;AAOF;;AALA;EACE,WAAA;EACA,gBAAA;EACA,YAAA;EACA,gBAAA;EACA,iCAAA;EACA,mBAAA;EACA,YAAA;EACA,eAAA;AAQF;;AANA;EACE,cAAA;AASF;;AANA;EACE,gBAAA;AASF;;AANA;EACE,kBAAA;EACA,SAAA;EACA,OAAA;EACA,WAAA;AASF;;AAPA;EACE,WAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,6BAAA;EACA,YAAA;EACA,kCAAA;AAUF;;AARA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,mBAAA;EACA,uCAAA;EACA,iBAAA;EACA,eAAA;AAWF;;AATA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;AAYF","sourcesContent":[":root {\n  --clr-light-gray: #eee;\n  --clr-gray: #ddd;\n  --clr-dark-gray: #bebebe;\n  --clr-white: #fff;\n  --clr-black: #000;\n  --clr-shadow: rgba(0, 0, 0, 0.6);\n  --clr-light-blue: #468d99;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: 62.5%;\n  font-family: \"Poppins\", sans-serif;\n}\n\nbody {\n  background-color: var(--clr-white);\n}\n\n.header-container {\n  width: 100%;\n  height: 12em;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  background-color: var(--clr-gray);\n  border-bottom-left-radius: 30px;\n  border-bottom-right-radius: 30px;\n}\n.header-title {\n  font-size: 1.5rem;\n}\n.header-title h1 {\n  font-weight: 500;\n}\n.header-image {\n  width: 7.81em;\n  height: 7.81em;\n  border-radius: 50%;\n  object-position: center;\n  overflow: hidden;\n}\n.header-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.calendar {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: auto;\n  margin: 1.25em 0;\n  padding: 1em 2em;\n  background-color: var(--clr-gray);\n  border-radius: 20px;\n}\n.calendar-months {\n  display: flex;\n  justify-content: space-between;\n  overflow-x: auto;\n  white-space: nowrap;\n  background-color: transparent;\n}\n.calendar-days {\n  display: flex;\n  padding-bottom: 15px;\n  overflow-x: auto;\n  white-space: nowrap;\n}\n\n.month {\n  padding: 15px;\n  border: none;\n  cursor: pointer;\n  background-color: transparent;\n}\n\n.day {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 0 0 50px;\n  margin: 0 10px;\n  padding: 15px;\n  background-color: var(--clr-dark-gray);\n  color: var(--clr-white);\n  border-radius: 15px;\n  cursor: pointer;\n}\n\n.current-month {\n  font-weight: bold;\n  text-decoration: underline;\n}\n\n.current-day {\n  background-color: var(--clr-light-blue);\n}\n\n@media (min-width: 769px) {\n  .calendar {\n    height: 200px;\n  }\n  .calendar-months {\n    padding-bottom: 1em;\n  }\n  .calendar-days {\n    flex-wrap: wrap; /* Wrap into two rows on larger screens */\n    justify-content: center;\n    padding-bottom: 0;\n  }\n  .day {\n    margin: 1em;\n  }\n}\n.groups {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: auto;\n  padding: 1em 2em;\n  overflow-x: auto;\n}\n.groups-btn {\n  width: auto;\n  min-height: 50px;\n  padding: 1em;\n  margin: 0 0.63em;\n  background-color: var(--clr-gray);\n  border-radius: 15px;\n  border: none;\n  cursor: pointer;\n}\n.groups-btn:first-child {\n  min-width: 5em;\n}\n\n.fa-plus {\n  font-size: 1.8em;\n}\n\n.nav {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n.nav-container {\n  width: auto;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n  padding: 1em;\n  background-color: var(--clr-black);\n}\n.nav-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 35px;\n  height: 35px;\n  padding: 1em;\n  border-radius: 10px;\n  background-color: var(--clr-light-gray);\n  font-size: 1.3rem;\n  cursor: pointer;\n}\n.nav-btn:nth-child(2) {\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n}/*# sourceMappingURL=main.css.map */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images/header-image.jpg":
/*!*************************************!*\
  !*** ./src/images/header-image.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "header-image.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/main.css */ "./src/css/main.css");
/* harmony import */ var _js_matchMedia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/matchMedia */ "./src/js/matchMedia.js");
/* harmony import */ var _js_matchMedia__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_matchMedia__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/header */ "./src/js/header.js");
/* harmony import */ var _js_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/calendar */ "./src/js/calendar.js");
/* harmony import */ var _js_taskGroups__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/taskGroups */ "./src/js/taskGroups.js");
/* harmony import */ var _js_nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/nav */ "./src/js/nav.js");







// INITIAL
function initialize() {
  (0,_js_header__WEBPACK_IMPORTED_MODULE_2__.createHeaderElements)();
  (0,_js_calendar__WEBPACK_IMPORTED_MODULE_3__.createCalendarElements)();
  (0,_js_taskGroups__WEBPACK_IMPORTED_MODULE_4__.createGroupElements)();
  (0,_js_nav__WEBPACK_IMPORTED_MODULE_5__.createNavElements)();
}

//initialize();
document.addEventListener('DOMContentLoaded', initialize);
})();

/******/ })()
;
//# sourceMappingURL=main.js.map