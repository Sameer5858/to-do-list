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

  let state = {
    name,
    id,
    tasks: [],
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
      const indexToDelete = state.tasks.indexOf(this.getTask(value));
      state.tasks.splice(indexToDelete, 1);
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
  let state = { projects: [] };
  state.projects.push((0,_create_projects__WEBPACK_IMPORTED_MODULE_0__.Project)("Inbox", "inbox"));
  state.projects.push((0,_create_projects__WEBPACK_IMPORTED_MODULE_0__.Project)("Today", "today"));
  state.projects.push((0,_create_projects__WEBPACK_IMPORTED_MODULE_0__.Project)("This Week", "week"));

  return {
    get projects() {
      return [...state.projects];
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
/* harmony import */ var _create_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-projects */ "./src/create-projects.js");
/* harmony import */ var _create_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-task */ "./src/create-task.js");




const projectNavContainer = document.getElementById("project-container");
const taskContentContainer = document.getElementById("task-container");
const newTodoList = _to_do_list__WEBPACK_IMPORTED_MODULE_0__.ToDoList;

addNewProject("pewew232323232fkjeuhfhefugeyf");
addNewProject("pefkje3232311111uhfhefugefefgygegyfgegyf");
addNewProject("pefkjeuhfh121ygegyfgegyf");
addNewProject("pewew232323232fkjeuhfhefugeyf");
addNewProject("pefkje3232311111uhfhefugefefgygegyfgegyf");
addNewProject("pefkjeuhfh121ygegyfgegyf");
let id = newTodoList.projects[3].id;
addNewTask(id, "pppp", "dhdhd");
addNewTask(id, "pppp", "dhdhd");
addNewTask(id, "pppp", "dhdhd");
let id2 = newTodoList.projects[4].id;
addNewTask(id2, "ppdsdpp", "dhdhd");
addNewTask(id2, "psdsppp", "dhdhd");
addNewTask(id2, "pdsdddppp", "dhdhd");

function deleteProject(projectId) {
  newTodoList.deleteProject(projectId);
  projectNavContainer.innerHTML = "";
  loadProjectsNav();
}
function addNewTask(projectId, ...details) {
  taskContentContainer.innerHTML = "";
  const project = newTodoList.getProject(projectId);
  project.addTask(...details);
  loadTaskContent(projectId);
}
function loadTaskContent(projectId) {
  const project = newTodoList.getProject(projectId);
  if (!project) {
    return;
  }
  const tasks = project.tasks;
  taskContentContainer.innerHTML = "";
  tasks.forEach((task) => {
    renderTaskContent(task);
  });
}
function renderTaskContent(task) {
  const button = document.createElement("button");
  const titleDiv = document.createElement("div");
  const dateDiv = document.createElement("div");
  const close = document.createElement("img");
  const checkbox = document.createElement("input");
  close.setAttribute("id", "close");
  close.addEventListener("click", () => console.log("hello"));
  button.setAttribute("date-task-id", `${task.id}`);
  titleDiv.setAttribute("date-task-id", `${task.id}`);
  dateDiv.setAttribute("date-task-id", `${task.id}`);
  close.setAttribute("date-task-id", `${task.id}`);
  checkbox.setAttribute("date-task-id", `${task.id}`);
  button.setAttribute("date-project-id", `${task.projectId}`);
  titleDiv.setAttribute("date-project-id", `${task.projectId}`);
  dateDiv.setAttribute("date-project-id", `${task.projectId}`);
  close.setAttribute("date-project-id", `${task.projectId}`);
  checkbox.setAttribute("date-project-id", `${task.projectId}`);
  button.classList.add("task");
  titleDiv.classList.add("task-title");
  titleDiv.textContent = `${task.title}`;
  dateDiv.textContent = `${task.dueDate}`;
  dateDiv.classList.add("duedate");
  close.src = "./icons/close.svg";
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", "taskstatus");
  button.appendChild(checkbox);
  button.appendChild(titleDiv);
  button.appendChild(dateDiv);
  button.appendChild(close);
  taskContentContainer.appendChild(button);
}

function addNewProject(name) {
  projectNavContainer.innerHTML = "";
  newTodoList.addProject(name);
  loadProjectsNav();
  loadTaskContent("inbox");
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
    const text = document.createElement("div");
    const img = document.createElement("img");
    const close = document.createElement("img");
    button.addEventListener("click", (e) => {
      const projectId = e.target.getAttribute("data-project-id");
      loadTaskContent(projectId);
    });
    close.addEventListener("click", (e) => {
      const projectId = e.target.getAttribute("data-project-id");
      deleteProject(projectId);
    });
    button.classList.add("project");
    img.src = "./icons/calendar-multiple-check.svg";
    close.src = "./icons/close.svg";
    close.setAttribute("data-project-id", `${project.id}`);
    img.setAttribute("data-project-id", `${project.id}`);
    text.setAttribute("data-project-id", `${project.id}`);

    button.append(img);
    text.textContent = project.name;
    text.classList.add("text");
    button.appendChild(text);
    button.appendChild(close);
    button.setAttribute("data-project-id", `${project.id}`);
    projectNavContainer.appendChild(button);
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxXQUFXO0FBQ3hELDJDQUEyQyxXQUFXO0FBQ3RELDRDQUE0QyxXQUFXOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLFdBQVc7QUFDekQ7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jcmVhdGUtcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jcmVhdGUtdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvLWRvLWxpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXVpZCwgVGFzayB9IGZyb20gXCIuL2NyZWF0ZS10YXNrXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBQcm9qZWN0KG5hbWUsIHNwZWNpYWxJZCkge1xuICBsZXQgaWQ7XG4gIGlmIChzcGVjaWFsSWQpIHtcbiAgICBpZCA9IHNwZWNpYWxJZDtcbiAgfSBlbHNlIHtcbiAgICBpZCA9IHV1aWQoKTtcbiAgfVxuXG4gIGxldCBzdGF0ZSA9IHtcbiAgICBuYW1lLFxuICAgIGlkLFxuICAgIHRhc2tzOiBbXSxcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldCBuYW1lKCkge1xuICAgICAgcmV0dXJuIHN0YXRlLm5hbWU7XG4gICAgfSxcbiAgICBzZXQgbmFtZSh2YWx1ZSkge1xuICAgICAgc3RhdGUubmFtZSA9IHZhbHVlO1xuICAgIH0sXG4gICAgZ2V0IGlkKCkge1xuICAgICAgcmV0dXJuIHN0YXRlLmlkO1xuICAgIH0sXG5cbiAgICBnZXQgdGFza3MoKSB7XG4gICAgICByZXR1cm4gc3RhdGUudGFza3M7XG4gICAgfSxcbiAgICBhZGRUYXNrKC4uLnZhbHVlKSB7XG4gICAgICBzdGF0ZS50YXNrcy5wdXNoKFRhc2soc3RhdGUuaWQsIC4uLnZhbHVlKSk7XG4gICAgfSxcbiAgICBnZXRUYXNrKHZhbHVlKSB7XG4gICAgICByZXR1cm4gc3RhdGUudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gdmFsdWUpO1xuICAgIH0sXG4gICAgZGVsZXRlVGFzayh2YWx1ZSkge1xuICAgICAgY29uc3QgaW5kZXhUb0RlbGV0ZSA9IHN0YXRlLnRhc2tzLmluZGV4T2YodGhpcy5nZXRUYXNrKHZhbHVlKSk7XG4gICAgICBzdGF0ZS50YXNrcy5zcGxpY2UoaW5kZXhUb0RlbGV0ZSwgMSk7XG4gICAgfSxcbiAgfTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBUYXNrKHByb2plY3RJZCwgdGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgc3RhdHVzKSB7XG4gIGNvbnN0IGlkID0gdXVpZCgpO1xuICBsZXQgc3RhdGUgPSB7IHByb2plY3RJZCwgdGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgc3RhdHVzLCBpZCB9O1xuICByZXR1cm4ge1xuICAgIGdldCBwcm9qZWN0SWQoKSB7XG4gICAgICByZXR1cm4gcHJvamVjdElkO1xuICAgIH0sXG4gICAgZ2V0IHRpdGxlKCkge1xuICAgICAgcmV0dXJuIHN0YXRlLnRpdGxlO1xuICAgIH0sXG4gICAgc2V0IHRpdGxlKHZhbHVlKSB7XG4gICAgICBzdGF0ZS50aXRsZSA9IHZhbHVlO1xuICAgIH0sXG4gICAgZ2V0IGlkKCkge1xuICAgICAgcmV0dXJuIHN0YXRlLmlkO1xuICAgIH0sXG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgICAgcmV0dXJuIHN0YXRlLmRlc2NyaXB0aW9uO1xuICAgIH0sXG4gICAgc2V0IGRlc2NyaXB0aW9uKHZhbHVlKSB7XG4gICAgICBzdGF0ZS5kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICAgIH0sXG4gICAgZ2V0IGR1ZURhdGUoKSB7XG4gICAgICByZXR1cm4gc3RhdGUuZHVlRGF0ZTtcbiAgICB9LFxuICAgIHNldCBkdWVEYXRlKHZhbHVlKSB7XG4gICAgICBzdGF0ZS5kdWVEYXRlID0gdmFsdWU7XG4gICAgfSxcbiAgICBnZXQgcHJpb3JpdHkoKSB7XG4gICAgICByZXR1cm4gc3RhdGUucHJpb3JpdHk7XG4gICAgfSxcbiAgICBzZXQgcHJpb3JpdHkodmFsdWUpIHtcbiAgICAgIHN0YXRlLnByaW9yaXR5ID0gdmFsdWU7XG4gICAgfSxcbiAgICBnZXQgc3RhdHVzKCkge1xuICAgICAgcmV0dXJuIHN0YXRlLnN0YXR1cztcbiAgICB9LFxuICAgIHNldCBzdGF0dXModmFsdWUpIHtcbiAgICAgIHN0YXRlLnN0YXR1cyA9IHZhbHVlO1xuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1dWlkKCkge1xuICByZXR1cm4gKFsxZTddICsgLTFlMyArIC00ZTMgKyAtOGUzICsgLTFlMTEpLnJlcGxhY2UoL1swMThdL2csIChjKSA9PlxuICAgIChcbiAgICAgIGMgXlxuICAgICAgKGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoMSkpWzBdICYgKDE1ID4+IChjIC8gNCkpKVxuICAgICkudG9TdHJpbmcoMTYpXG4gICk7XG59XG4iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vY3JlYXRlLXByb2plY3RzXCI7XG5cbmV4cG9ydCBjb25zdCBUb0RvTGlzdCA9IChmdW5jdGlvbiAoKSB7XG4gIGxldCBzdGF0ZSA9IHsgcHJvamVjdHM6IFtdIH07XG4gIHN0YXRlLnByb2plY3RzLnB1c2goUHJvamVjdChcIkluYm94XCIsIFwiaW5ib3hcIikpO1xuICBzdGF0ZS5wcm9qZWN0cy5wdXNoKFByb2plY3QoXCJUb2RheVwiLCBcInRvZGF5XCIpKTtcbiAgc3RhdGUucHJvamVjdHMucHVzaChQcm9qZWN0KFwiVGhpcyBXZWVrXCIsIFwid2Vla1wiKSk7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgcHJvamVjdHMoKSB7XG4gICAgICByZXR1cm4gWy4uLnN0YXRlLnByb2plY3RzXTtcbiAgICB9LFxuICAgIGFkZFByb2plY3QodmFsdWUpIHtcbiAgICAgIHN0YXRlLnByb2plY3RzLnB1c2goUHJvamVjdCh2YWx1ZSkpO1xuICAgIH0sXG4gICAgZ2V0UHJvamVjdCh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHZhbHVlKTtcbiAgICB9LFxuICAgIGRlbGV0ZVByb2plY3QodmFsdWUpIHtcbiAgICAgIGNvbnN0IGluZGV4VG9EZWxldGUgPSBzdGF0ZS5wcm9qZWN0cy5pbmRleE9mKHRoaXMuZ2V0UHJvamVjdCh2YWx1ZSkpO1xuICAgICAgc3RhdGUucHJvamVjdHMuc3BsaWNlKGluZGV4VG9EZWxldGUsIDEpO1xuICAgIH0sXG4gIH07XG59KSgpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBUb0RvTGlzdCB9IGZyb20gXCIuL3RvLWRvLWxpc3RcIjtcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9jcmVhdGUtcHJvamVjdHNcIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi9jcmVhdGUtdGFza1wiO1xuXG5jb25zdCBwcm9qZWN0TmF2Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWNvbnRhaW5lclwiKTtcbmNvbnN0IHRhc2tDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWNvbnRhaW5lclwiKTtcbmNvbnN0IG5ld1RvZG9MaXN0ID0gVG9Eb0xpc3Q7XG5cbmFkZE5ld1Byb2plY3QoXCJwZXdldzIzMjMyMzIzMmZramV1aGZoZWZ1Z2V5ZlwiKTtcbmFkZE5ld1Byb2plY3QoXCJwZWZramUzMjMyMzExMTExdWhmaGVmdWdlZmVmZ3lnZWd5ZmdlZ3lmXCIpO1xuYWRkTmV3UHJvamVjdChcInBlZmtqZXVoZmgxMjF5Z2VneWZnZWd5ZlwiKTtcbmFkZE5ld1Byb2plY3QoXCJwZXdldzIzMjMyMzIzMmZramV1aGZoZWZ1Z2V5ZlwiKTtcbmFkZE5ld1Byb2plY3QoXCJwZWZramUzMjMyMzExMTExdWhmaGVmdWdlZmVmZ3lnZWd5ZmdlZ3lmXCIpO1xuYWRkTmV3UHJvamVjdChcInBlZmtqZXVoZmgxMjF5Z2VneWZnZWd5ZlwiKTtcbmxldCBpZCA9IG5ld1RvZG9MaXN0LnByb2plY3RzWzNdLmlkO1xuYWRkTmV3VGFzayhpZCwgXCJwcHBwXCIsIFwiZGhkaGRcIik7XG5hZGROZXdUYXNrKGlkLCBcInBwcHBcIiwgXCJkaGRoZFwiKTtcbmFkZE5ld1Rhc2soaWQsIFwicHBwcFwiLCBcImRoZGhkXCIpO1xubGV0IGlkMiA9IG5ld1RvZG9MaXN0LnByb2plY3RzWzRdLmlkO1xuYWRkTmV3VGFzayhpZDIsIFwicHBkc2RwcFwiLCBcImRoZGhkXCIpO1xuYWRkTmV3VGFzayhpZDIsIFwicHNkc3BwcFwiLCBcImRoZGhkXCIpO1xuYWRkTmV3VGFzayhpZDIsIFwicGRzZGRkcHBwXCIsIFwiZGhkaGRcIik7XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdElkKSB7XG4gIG5ld1RvZG9MaXN0LmRlbGV0ZVByb2plY3QocHJvamVjdElkKTtcbiAgcHJvamVjdE5hdkNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICBsb2FkUHJvamVjdHNOYXYoKTtcbn1cbmZ1bmN0aW9uIGFkZE5ld1Rhc2socHJvamVjdElkLCAuLi5kZXRhaWxzKSB7XG4gIHRhc2tDb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbnN0IHByb2plY3QgPSBuZXdUb2RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3RJZCk7XG4gIHByb2plY3QuYWRkVGFzayguLi5kZXRhaWxzKTtcbiAgbG9hZFRhc2tDb250ZW50KHByb2plY3RJZCk7XG59XG5mdW5jdGlvbiBsb2FkVGFza0NvbnRlbnQocHJvamVjdElkKSB7XG4gIGNvbnN0IHByb2plY3QgPSBuZXdUb2RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3RJZCk7XG4gIGlmICghcHJvamVjdCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB0YXNrcyA9IHByb2plY3QudGFza3M7XG4gIHRhc2tDb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICByZW5kZXJUYXNrQ29udGVudCh0YXNrKTtcbiAgfSk7XG59XG5mdW5jdGlvbiByZW5kZXJUYXNrQ29udGVudCh0YXNrKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNsb3NlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2xvc2VcIik7XG4gIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjb25zb2xlLmxvZyhcImhlbGxvXCIpKTtcbiAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGUtdGFzay1pZFwiLCBgJHt0YXNrLmlkfWApO1xuICB0aXRsZURpdi5zZXRBdHRyaWJ1dGUoXCJkYXRlLXRhc2staWRcIiwgYCR7dGFzay5pZH1gKTtcbiAgZGF0ZURpdi5zZXRBdHRyaWJ1dGUoXCJkYXRlLXRhc2staWRcIiwgYCR7dGFzay5pZH1gKTtcbiAgY2xvc2Uuc2V0QXR0cmlidXRlKFwiZGF0ZS10YXNrLWlkXCIsIGAke3Rhc2suaWR9YCk7XG4gIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcImRhdGUtdGFzay1pZFwiLCBgJHt0YXNrLmlkfWApO1xuICBidXR0b24uc2V0QXR0cmlidXRlKFwiZGF0ZS1wcm9qZWN0LWlkXCIsIGAke3Rhc2sucHJvamVjdElkfWApO1xuICB0aXRsZURpdi5zZXRBdHRyaWJ1dGUoXCJkYXRlLXByb2plY3QtaWRcIiwgYCR7dGFzay5wcm9qZWN0SWR9YCk7XG4gIGRhdGVEaXYuc2V0QXR0cmlidXRlKFwiZGF0ZS1wcm9qZWN0LWlkXCIsIGAke3Rhc2sucHJvamVjdElkfWApO1xuICBjbG9zZS5zZXRBdHRyaWJ1dGUoXCJkYXRlLXByb2plY3QtaWRcIiwgYCR7dGFzay5wcm9qZWN0SWR9YCk7XG4gIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcImRhdGUtcHJvamVjdC1pZFwiLCBgJHt0YXNrLnByb2plY3RJZH1gKTtcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKFwidGFzay10aXRsZVwiKTtcbiAgdGl0bGVEaXYudGV4dENvbnRlbnQgPSBgJHt0YXNrLnRpdGxlfWA7XG4gIGRhdGVEaXYudGV4dENvbnRlbnQgPSBgJHt0YXNrLmR1ZURhdGV9YDtcbiAgZGF0ZURpdi5jbGFzc0xpc3QuYWRkKFwiZHVlZGF0ZVwiKTtcbiAgY2xvc2Uuc3JjID0gXCIuL2ljb25zL2Nsb3NlLnN2Z1wiO1xuICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFza3N0YXR1c1wiKTtcbiAgYnV0dG9uLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgYnV0dG9uLmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcbiAgYnV0dG9uLmFwcGVuZENoaWxkKGRhdGVEaXYpO1xuICBidXR0b24uYXBwZW5kQ2hpbGQoY2xvc2UpO1xuICB0YXNrQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xufVxuXG5mdW5jdGlvbiBhZGROZXdQcm9qZWN0KG5hbWUpIHtcbiAgcHJvamVjdE5hdkNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICBuZXdUb2RvTGlzdC5hZGRQcm9qZWN0KG5hbWUpO1xuICBsb2FkUHJvamVjdHNOYXYoKTtcbiAgbG9hZFRhc2tDb250ZW50KFwiaW5ib3hcIik7XG59XG5mdW5jdGlvbiBsb2FkUHJvamVjdHNOYXYoKSB7XG4gIG5ld1RvZG9MaXN0LnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICByZW5kZXJQcm9qZWN0TmF2KHByb2plY3QpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHJlbmRlclByb2plY3ROYXYocHJvamVjdCkge1xuICBpZiAocHJvamVjdC5pZCA9PT0gXCJpbmJveFwiIHx8IHByb2plY3QuaWQgPT09IFwidG9kYXlcIiB8fCBwcm9qZWN0LmlkID09PSBcIndlZWtcIilcbiAgICByZXR1cm47XG4gIGVsc2Uge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdElkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIpO1xuICAgICAgbG9hZFRhc2tDb250ZW50KHByb2plY3RJZCk7XG4gICAgfSk7XG4gICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0SWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIik7XG4gICAgICBkZWxldGVQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgfSk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICAgIGltZy5zcmMgPSBcIi4vaWNvbnMvY2FsZW5kYXItbXVsdGlwbGUtY2hlY2suc3ZnXCI7XG4gICAgY2xvc2Uuc3JjID0gXCIuL2ljb25zL2Nsb3NlLnN2Z1wiO1xuICAgIGNsb3NlLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiLCBgJHtwcm9qZWN0LmlkfWApO1xuICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIiwgYCR7cHJvamVjdC5pZH1gKTtcbiAgICB0ZXh0LnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiLCBgJHtwcm9qZWN0LmlkfWApO1xuXG4gICAgYnV0dG9uLmFwcGVuZChpbWcpO1xuICAgIHRleHQudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgdGV4dC5jbGFzc0xpc3QuYWRkKFwidGV4dFwiKTtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKGNsb3NlKTtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIsIGAke3Byb2plY3QuaWR9YCk7XG4gICAgcHJvamVjdE5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=