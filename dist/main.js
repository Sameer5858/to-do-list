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


function Project(name) {
  let tasks = [];
  const id = (0,_create_task__WEBPACK_IMPORTED_MODULE_0__.uuid)();
  const addTask = (task) => {
    tasks.push(task);
  };
  const deleteTask = (id) => {
    tasks.forEach((task) => {
      if (id === task.id) {
        const taskIndex = tasks.indexOf(task);
        tasks.splice(taskIndex, 1);
      }
    });
  };
  return {
    name,
    id,
    tasks,
    addTask,
    deleteTask,
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
function Task(title, description, dueDate, priority, status) {
  const id = uuid();

  return {
    title,
    id,
    description,
    dueDate,
    priority,
    status,
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
/* harmony import */ var _create_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-task */ "./src/create-task.js");



function ToDoList() {
  const projects = [];
  projects.push(new _create_projects__WEBPACK_IMPORTED_MODULE_0__.Project("Inbox"));
  projects.push(new _create_projects__WEBPACK_IMPORTED_MODULE_0__.Project("Today"));
  projects.push(new _create_projects__WEBPACK_IMPORTED_MODULE_0__.Project("This Week"));
  const addProject = (name) => {
    projects.push(new _create_projects__WEBPACK_IMPORTED_MODULE_0__.Project(`${name}`));
  };
  const deleteProject = (id) => {
    projects.forEach((project) => {
      if (id === project.id) {
        const projectIndex = projects.indexOf(project);
        projects.splice(projectIndex, 1);
      }
    });
  };

  return { projects, addProject, deleteProject };
}



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
/* harmony import */ var _create_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-task */ "./src/create-task.js");
/* harmony import */ var _create_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-projects */ "./src/create-projects.js");
/* harmony import */ var _to_do_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./to-do-list */ "./src/to-do-list.js");



const hello = (0,_to_do_list__WEBPACK_IMPORTED_MODULE_2__.ToDoList)("hello");
console.table(hello.projects);
hello.addProject("pp");
console.table(hello.projects);
let id = hello.projects[0].id;
hello.deleteProject(id);
console.table(hello.projects);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7O0FBRTlCO0FBQ1A7QUFDQSxhQUFhLGtEQUFJO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQnNCO0FBQ1A7O0FBRXJDO0FBQ0E7QUFDQSxvQkFBb0IscURBQU87QUFDM0Isb0JBQW9CLHFEQUFPO0FBQzNCLG9CQUFvQixxREFBTztBQUMzQjtBQUNBLHNCQUFzQixxREFBTyxJQUFJLEtBQUs7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsV0FBVztBQUNYO0FBQ29COzs7Ozs7O1VDdEJwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOaUQ7QUFDTDtBQUNKO0FBQ3hDLGNBQWMscURBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jcmVhdGUtcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jcmVhdGUtdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvLWRvLWxpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXVpZCB9IGZyb20gXCIuL2NyZWF0ZS10YXNrXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBQcm9qZWN0KG5hbWUpIHtcbiAgbGV0IHRhc2tzID0gW107XG4gIGNvbnN0IGlkID0gdXVpZCgpO1xuICBjb25zdCBhZGRUYXNrID0gKHRhc2spID0+IHtcbiAgICB0YXNrcy5wdXNoKHRhc2spO1xuICB9O1xuICBjb25zdCBkZWxldGVUYXNrID0gKGlkKSA9PiB7XG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgaWYgKGlkID09PSB0YXNrLmlkKSB7XG4gICAgICAgIGNvbnN0IHRhc2tJbmRleCA9IHRhc2tzLmluZGV4T2YodGFzayk7XG4gICAgICAgIHRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICByZXR1cm4ge1xuICAgIG5hbWUsXG4gICAgaWQsXG4gICAgdGFza3MsXG4gICAgYWRkVGFzayxcbiAgICBkZWxldGVUYXNrLFxuICB9O1xufVxuIiwiZnVuY3Rpb24gVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMpIHtcbiAgY29uc3QgaWQgPSB1dWlkKCk7XG5cbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBpZCxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIHN0YXR1cyxcbiAgfTtcbn1cblxuZnVuY3Rpb24gdXVpZCgpIHtcbiAgcmV0dXJuIChbMWU3XSArIC0xZTMgKyAtNGUzICsgLThlMyArIC0xZTExKS5yZXBsYWNlKC9bMDE4XS9nLCAoYykgPT5cbiAgICAoXG4gICAgICBjIF5cbiAgICAgIChjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KDEpKVswXSAmICgxNSA+PiAoYyAvIDQpKSlcbiAgICApLnRvU3RyaW5nKDE2KVxuICApO1xufVxuZXhwb3J0IHsgVGFzaywgdXVpZCB9O1xuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL2NyZWF0ZS1wcm9qZWN0c1wiO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL2NyZWF0ZS10YXNrXCI7XG5cbmZ1bmN0aW9uIFRvRG9MaXN0KCkge1xuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xuICBwcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KFwiSW5ib3hcIikpO1xuICBwcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KFwiVG9kYXlcIikpO1xuICBwcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KFwiVGhpcyBXZWVrXCIpKTtcbiAgY29uc3QgYWRkUHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgcHJvamVjdHMucHVzaChuZXcgUHJvamVjdChgJHtuYW1lfWApKTtcbiAgfTtcbiAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChpZCkgPT4ge1xuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGlmIChpZCA9PT0gcHJvamVjdC5pZCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0cy5pbmRleE9mKHByb2plY3QpO1xuICAgICAgICBwcm9qZWN0cy5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4geyBwcm9qZWN0cywgYWRkUHJvamVjdCwgZGVsZXRlUHJvamVjdCB9O1xufVxuZXhwb3J0IHsgVG9Eb0xpc3QgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlVG9kbywgVGFzayB9IGZyb20gXCIuL2NyZWF0ZS10YXNrXCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vY3JlYXRlLXByb2plY3RzXCI7XG5pbXBvcnQgeyBUb0RvTGlzdCB9IGZyb20gXCIuL3RvLWRvLWxpc3RcIjtcbmNvbnN0IGhlbGxvID0gVG9Eb0xpc3QoXCJoZWxsb1wiKTtcbmNvbnNvbGUudGFibGUoaGVsbG8ucHJvamVjdHMpO1xuaGVsbG8uYWRkUHJvamVjdChcInBwXCIpO1xuY29uc29sZS50YWJsZShoZWxsby5wcm9qZWN0cyk7XG5sZXQgaWQgPSBoZWxsby5wcm9qZWN0c1swXS5pZDtcbmhlbGxvLmRlbGV0ZVByb2plY3QoaWQpO1xuY29uc29sZS50YWJsZShoZWxsby5wcm9qZWN0cyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=