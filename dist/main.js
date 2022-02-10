/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/create-projects.js":
/*!********************************!*\
  !*** ./src/create-projects.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _create_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-task */ "./src/create-task.js");


function Project(name, specialId) {
  let id;
  if (specialId) {
    id = specialId;
  } else {
    id = (0,_create_task__WEBPACK_IMPORTED_MODULE_0__.uuid)();
  }
  const tasks = [];
  let state = {
    name,
    id,
    tasks,
  };

  return {
    get name() {
      return state.name;
    },
    set name(value) {
      state.name = value;
    },
    get id() {
      return state.id;
    },

    get tasks() {
      return state.tasks;
    },
    addTask(...value) {
      state.tasks.push((0,_create_task__WEBPACK_IMPORTED_MODULE_0__.Task)(state.id, ...value));
    },
    getTask(value) {
      return state.tasks.find((task) => task.id === value);
    },
    deleteTask(value) {
      state.tasks.forEach((task) => {
        if (value === task.id) {
          const taskIndex = state.tasks.indexOf(task);
          state.tasks.splice(taskIndex, 1);
        }
      });
    },
  };
}


/***/ }),

/***/ "./src/create-task.js":
/*!****************************!*\
  !*** ./src/create-task.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task),
/* harmony export */   "uuid": () => (/* binding */ uuid)
/* harmony export */ });
function Task(projectId, title, dueDate, description, priority, status) {
  const id = uuid();
  let state = { projectId, title, dueDate, description, priority, status, id };
  return {
    get projectId() {
      return projectId;
    },
    get title() {
      return state.title;
    },
    set title(value) {
      state.title = value;
    },
    get id() {
      return state.id;
    },
    get description() {
      return state.description;
    },
    set description(value) {
      state.description = value;
    },
    get dueDate() {
      return state.dueDate;
    },
    set dueDate(value) {
      state.dueDate = value;
    },
    get priority() {
      return state.priority;
    },
    set priority(value) {
      state.priority = value;
    },
    get status() {
      return state.status;
    },
    set status(value) {
      state.status = value;
    },
  };
}

function uuid() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}


/***/ }),

/***/ "./src/to-do-list.js":
/*!***************************!*\
  !*** ./src/to-do-list.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToDoList": () => (/* binding */ ToDoList)
/* harmony export */ });
/* harmony import */ var _create_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-projects */ "./src/create-projects.js");


const ToDoList = (function () {
  const projects = [];
  projects.push((0,_create_projects__WEBPACK_IMPORTED_MODULE_0__.Project)("Inbox", "inbox"));
  projects.push((0,_create_projects__WEBPACK_IMPORTED_MODULE_0__.Project)("Today", "today"));
  projects.push((0,_create_projects__WEBPACK_IMPORTED_MODULE_0__.Project)("This Week", "week"));
  let state = { projects };

  return {
    get projects() {
      return [...projects];
    },
    addProject(value) {
      state.projects.push((0,_create_projects__WEBPACK_IMPORTED_MODULE_0__.Project)(value));
    },
    getProject(value) {
      return state.projects.find((project) => project.id === value);
    },
    deleteProject(value) {
      const indexToDelete = state.projects.indexOf(this.getProject(value));
      state.projects.splice(indexToDelete, 1);
    },
  };
})();


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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _to_do_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-do-list */ "./src/to-do-list.js");


const newTodoList = _to_do_list__WEBPACK_IMPORTED_MODULE_0__.ToDoList;
const projectNavContainer = document.getElementById("project-container");
const taskContentContainer = document.getElementById("task-container");

function addNewTask(project, ...details) {
  taskContentContainer.innerHTML = "";
  project.addTask(...details);
  loadTaskContent(project.tasks);
}
function loadTaskContent(tasks) {
  tasks.forEach((task) => {
    renderTaskContent(task);
  });
}
function renderTaskContent(task) {
  const button = document.createElement("button");
  const titleDiv = document.createElement("div");
  const dateDiv = document.createElement("div");
  const img = document.createElement("img");
  const checkbox = document.createElement("input");
  button.setAttribute("date-task-id", `${task.id}`);
  titleDiv.setAttribute("date-task-id", `${task.id}`);
  dateDiv.setAttribute("date-task-id", `${task.id}`);
  img.setAttribute("date-task-id", `${task.id}`);
  checkbox.setAttribute("date-task-id", `${task.id}`);
  button.setAttribute("date-project-id", `${task.projectId}`);
  titleDiv.setAttribute("date-project-id", `${task.projectId}`);
  dateDiv.setAttribute("date-project-id", `${task.projectId}`);
  img.setAttribute("date-project-id", `${task.projectId}`);
  checkbox.setAttribute("date-project-id", `${task.projectId}`);
  button.classList.add("task");
  titleDiv.classList.add("task-title");
  titleDiv.textContent = `${task.title}`;
  dateDiv.textContent = `${task.dueDate}`;
  dateDiv.classList.add("duedate");
  img.src = "./icons/close.svg";
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", "taskstatus");
  button.appendChild(checkbox);
  button.appendChild(titleDiv);
  button.appendChild(dateDiv);
  button.appendChild(img);
  taskContentContainer.appendChild(button);
}

function addNewProject(name) {
  projectNavContainer.innerHTML = "";
  newTodoList.addProject(name);
  loadProjectsNav();
}
function loadProjectsNav() {
  newTodoList.projects.forEach((project) => {
    renderProjectNav(project);
  });
}
function renderProjectNav(project) {
  if (project.id === "inbox" || project.id === "today" || project.id === "week")
    return;
  else {
    const button = document.createElement("button");
    const img = document.createElement("img");
    button.classList.add("project");
    img.src = "./icons/calendar-multiple-check.svg";
    button.append(img);
    button.innerHTML += project.name;
    button.setAttribute("data-project-id", `${project.id}`);
    projectNavContainer.appendChild(button);
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7O0FBRXBDO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLFNBQVMsa0RBQUk7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsdUJBQXVCLGtEQUFJO0FBQzNCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdDTztBQUNQO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEQ0Qzs7QUFFckM7QUFDUDtBQUNBLGdCQUFnQix5REFBTztBQUN2QixnQkFBZ0IseURBQU87QUFDdkIsZ0JBQWdCLHlEQUFPO0FBQ3ZCLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCLHlEQUFPO0FBQ2pDLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7Ozs7Ozs7VUN4QkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ053Qzs7QUFFeEMsb0JBQW9CLGlEQUFRO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxRQUFRO0FBQ2pELDJDQUEyQyxRQUFRO0FBQ25ELDBDQUEwQyxRQUFRO0FBQ2xELHNDQUFzQyxRQUFRO0FBQzlDLDJDQUEyQyxRQUFRO0FBQ25ELDRDQUE0QyxlQUFlO0FBQzNELDhDQUE4QyxlQUFlO0FBQzdELDZDQUE2QyxlQUFlO0FBQzVELHlDQUF5QyxlQUFlO0FBQ3hELDhDQUE4QyxlQUFlO0FBQzdEO0FBQ0E7QUFDQSw0QkFBNEIsV0FBVztBQUN2QywyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsV0FBVztBQUN6RDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NyZWF0ZS1wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NyZWF0ZS10YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG8tZG8tbGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1dWlkLCBUYXNrIH0gZnJvbSBcIi4vY3JlYXRlLXRhc2tcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFByb2plY3QobmFtZSwgc3BlY2lhbElkKSB7XG4gIGxldCBpZDtcbiAgaWYgKHNwZWNpYWxJZCkge1xuICAgIGlkID0gc3BlY2lhbElkO1xuICB9IGVsc2Uge1xuICAgIGlkID0gdXVpZCgpO1xuICB9XG4gIGNvbnN0IHRhc2tzID0gW107XG4gIGxldCBzdGF0ZSA9IHtcbiAgICBuYW1lLFxuICAgIGlkLFxuICAgIHRhc2tzLFxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICByZXR1cm4gc3RhdGUubmFtZTtcbiAgICB9LFxuICAgIHNldCBuYW1lKHZhbHVlKSB7XG4gICAgICBzdGF0ZS5uYW1lID0gdmFsdWU7XG4gICAgfSxcbiAgICBnZXQgaWQoKSB7XG4gICAgICByZXR1cm4gc3RhdGUuaWQ7XG4gICAgfSxcblxuICAgIGdldCB0YXNrcygpIHtcbiAgICAgIHJldHVybiBzdGF0ZS50YXNrcztcbiAgICB9LFxuICAgIGFkZFRhc2soLi4udmFsdWUpIHtcbiAgICAgIHN0YXRlLnRhc2tzLnB1c2goVGFzayhzdGF0ZS5pZCwgLi4udmFsdWUpKTtcbiAgICB9LFxuICAgIGdldFRhc2sodmFsdWUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSB2YWx1ZSk7XG4gICAgfSxcbiAgICBkZWxldGVUYXNrKHZhbHVlKSB7XG4gICAgICBzdGF0ZS50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdGFzay5pZCkge1xuICAgICAgICAgIGNvbnN0IHRhc2tJbmRleCA9IHN0YXRlLnRhc2tzLmluZGV4T2YodGFzayk7XG4gICAgICAgICAgc3RhdGUudGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gVGFzayhwcm9qZWN0SWQsIHRpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIHN0YXR1cykge1xuICBjb25zdCBpZCA9IHV1aWQoKTtcbiAgbGV0IHN0YXRlID0geyBwcm9qZWN0SWQsIHRpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIHN0YXR1cywgaWQgfTtcbiAgcmV0dXJuIHtcbiAgICBnZXQgcHJvamVjdElkKCkge1xuICAgICAgcmV0dXJuIHByb2plY3RJZDtcbiAgICB9LFxuICAgIGdldCB0aXRsZSgpIHtcbiAgICAgIHJldHVybiBzdGF0ZS50aXRsZTtcbiAgICB9LFxuICAgIHNldCB0aXRsZSh2YWx1ZSkge1xuICAgICAgc3RhdGUudGl0bGUgPSB2YWx1ZTtcbiAgICB9LFxuICAgIGdldCBpZCgpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5pZDtcbiAgICB9LFxuICAgIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5kZXNjcmlwdGlvbjtcbiAgICB9LFxuICAgIHNldCBkZXNjcmlwdGlvbih2YWx1ZSkge1xuICAgICAgc3RhdGUuZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgICB9LFxuICAgIGdldCBkdWVEYXRlKCkge1xuICAgICAgcmV0dXJuIHN0YXRlLmR1ZURhdGU7XG4gICAgfSxcbiAgICBzZXQgZHVlRGF0ZSh2YWx1ZSkge1xuICAgICAgc3RhdGUuZHVlRGF0ZSA9IHZhbHVlO1xuICAgIH0sXG4gICAgZ2V0IHByaW9yaXR5KCkge1xuICAgICAgcmV0dXJuIHN0YXRlLnByaW9yaXR5O1xuICAgIH0sXG4gICAgc2V0IHByaW9yaXR5KHZhbHVlKSB7XG4gICAgICBzdGF0ZS5wcmlvcml0eSA9IHZhbHVlO1xuICAgIH0sXG4gICAgZ2V0IHN0YXR1cygpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5zdGF0dXM7XG4gICAgfSxcbiAgICBzZXQgc3RhdHVzKHZhbHVlKSB7XG4gICAgICBzdGF0ZS5zdGF0dXMgPSB2YWx1ZTtcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXVpZCgpIHtcbiAgcmV0dXJuIChbMWU3XSArIC0xZTMgKyAtNGUzICsgLThlMyArIC0xZTExKS5yZXBsYWNlKC9bMDE4XS9nLCAoYykgPT5cbiAgICAoXG4gICAgICBjIF5cbiAgICAgIChjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KDEpKVswXSAmICgxNSA+PiAoYyAvIDQpKSlcbiAgICApLnRvU3RyaW5nKDE2KVxuICApO1xufVxuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL2NyZWF0ZS1wcm9qZWN0c1wiO1xuXG5leHBvcnQgY29uc3QgVG9Eb0xpc3QgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xuICBwcm9qZWN0cy5wdXNoKFByb2plY3QoXCJJbmJveFwiLCBcImluYm94XCIpKTtcbiAgcHJvamVjdHMucHVzaChQcm9qZWN0KFwiVG9kYXlcIiwgXCJ0b2RheVwiKSk7XG4gIHByb2plY3RzLnB1c2goUHJvamVjdChcIlRoaXMgV2Vla1wiLCBcIndlZWtcIikpO1xuICBsZXQgc3RhdGUgPSB7IHByb2plY3RzIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgcHJvamVjdHMoKSB7XG4gICAgICByZXR1cm4gWy4uLnByb2plY3RzXTtcbiAgICB9LFxuICAgIGFkZFByb2plY3QodmFsdWUpIHtcbiAgICAgIHN0YXRlLnByb2plY3RzLnB1c2goUHJvamVjdCh2YWx1ZSkpO1xuICAgIH0sXG4gICAgZ2V0UHJvamVjdCh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHZhbHVlKTtcbiAgICB9LFxuICAgIGRlbGV0ZVByb2plY3QodmFsdWUpIHtcbiAgICAgIGNvbnN0IGluZGV4VG9EZWxldGUgPSBzdGF0ZS5wcm9qZWN0cy5pbmRleE9mKHRoaXMuZ2V0UHJvamVjdCh2YWx1ZSkpO1xuICAgICAgc3RhdGUucHJvamVjdHMuc3BsaWNlKGluZGV4VG9EZWxldGUsIDEpO1xuICAgIH0sXG4gIH07XG59KSgpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBUb0RvTGlzdCB9IGZyb20gXCIuL3RvLWRvLWxpc3RcIjtcblxuY29uc3QgbmV3VG9kb0xpc3QgPSBUb0RvTGlzdDtcbmNvbnN0IHByb2plY3ROYXZDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtY29udGFpbmVyXCIpO1xuY29uc3QgdGFza0NvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stY29udGFpbmVyXCIpO1xuXG5mdW5jdGlvbiBhZGROZXdUYXNrKHByb2plY3QsIC4uLmRldGFpbHMpIHtcbiAgdGFza0NvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgcHJvamVjdC5hZGRUYXNrKC4uLmRldGFpbHMpO1xuICBsb2FkVGFza0NvbnRlbnQocHJvamVjdC50YXNrcyk7XG59XG5mdW5jdGlvbiBsb2FkVGFza0NvbnRlbnQodGFza3MpIHtcbiAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIHJlbmRlclRhc2tDb250ZW50KHRhc2spO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHJlbmRlclRhc2tDb250ZW50KHRhc2spIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRlLXRhc2staWRcIiwgYCR7dGFzay5pZH1gKTtcbiAgdGl0bGVEaXYuc2V0QXR0cmlidXRlKFwiZGF0ZS10YXNrLWlkXCIsIGAke3Rhc2suaWR9YCk7XG4gIGRhdGVEaXYuc2V0QXR0cmlidXRlKFwiZGF0ZS10YXNrLWlkXCIsIGAke3Rhc2suaWR9YCk7XG4gIGltZy5zZXRBdHRyaWJ1dGUoXCJkYXRlLXRhc2staWRcIiwgYCR7dGFzay5pZH1gKTtcbiAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwiZGF0ZS10YXNrLWlkXCIsIGAke3Rhc2suaWR9YCk7XG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRlLXByb2plY3QtaWRcIiwgYCR7dGFzay5wcm9qZWN0SWR9YCk7XG4gIHRpdGxlRGl2LnNldEF0dHJpYnV0ZShcImRhdGUtcHJvamVjdC1pZFwiLCBgJHt0YXNrLnByb2plY3RJZH1gKTtcbiAgZGF0ZURpdi5zZXRBdHRyaWJ1dGUoXCJkYXRlLXByb2plY3QtaWRcIiwgYCR7dGFzay5wcm9qZWN0SWR9YCk7XG4gIGltZy5zZXRBdHRyaWJ1dGUoXCJkYXRlLXByb2plY3QtaWRcIiwgYCR7dGFzay5wcm9qZWN0SWR9YCk7XG4gIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcImRhdGUtcHJvamVjdC1pZFwiLCBgJHt0YXNrLnByb2plY3RJZH1gKTtcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKFwidGFzay10aXRsZVwiKTtcbiAgdGl0bGVEaXYudGV4dENvbnRlbnQgPSBgJHt0YXNrLnRpdGxlfWA7XG4gIGRhdGVEaXYudGV4dENvbnRlbnQgPSBgJHt0YXNrLmR1ZURhdGV9YDtcbiAgZGF0ZURpdi5jbGFzc0xpc3QuYWRkKFwiZHVlZGF0ZVwiKTtcbiAgaW1nLnNyYyA9IFwiLi9pY29ucy9jbG9zZS5zdmdcIjtcbiAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2tzdGF0dXNcIik7XG4gIGJ1dHRvbi5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gIGJ1dHRvbi5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG4gIGJ1dHRvbi5hcHBlbmRDaGlsZChkYXRlRGl2KTtcbiAgYnV0dG9uLmFwcGVuZENoaWxkKGltZyk7XG4gIHRhc2tDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG59XG5cbmZ1bmN0aW9uIGFkZE5ld1Byb2plY3QobmFtZSkge1xuICBwcm9qZWN0TmF2Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIG5ld1RvZG9MaXN0LmFkZFByb2plY3QobmFtZSk7XG4gIGxvYWRQcm9qZWN0c05hdigpO1xufVxuZnVuY3Rpb24gbG9hZFByb2plY3RzTmF2KCkge1xuICBuZXdUb2RvTGlzdC5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgcmVuZGVyUHJvamVjdE5hdihwcm9qZWN0KTtcbiAgfSk7XG59XG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0TmF2KHByb2plY3QpIHtcbiAgaWYgKHByb2plY3QuaWQgPT09IFwiaW5ib3hcIiB8fCBwcm9qZWN0LmlkID09PSBcInRvZGF5XCIgfHwgcHJvamVjdC5pZCA9PT0gXCJ3ZWVrXCIpXG4gICAgcmV0dXJuO1xuICBlbHNlIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICAgIGltZy5zcmMgPSBcIi4vaWNvbnMvY2FsZW5kYXItbXVsdGlwbGUtY2hlY2suc3ZnXCI7XG4gICAgYnV0dG9uLmFwcGVuZChpbWcpO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgKz0gcHJvamVjdC5uYW1lO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIiwgYCR7cHJvamVjdC5pZH1gKTtcbiAgICBwcm9qZWN0TmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==