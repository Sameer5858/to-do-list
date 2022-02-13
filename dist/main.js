/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 * 
 * @example
 * // Are 4 September and 4 October in the same day?
 * var result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 * 
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 * 
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * var result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, dirtyOptions);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, dirtyOptions);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * var result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * var result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */
function isThisWeek(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * var result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

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
/* harmony import */ var date_fns_isThisWeek__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/isThisWeek */ "./node_modules/date-fns/esm/isThisWeek/index.js");
/* harmony import */ var date_fns_isToday__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/isToday */ "./node_modules/date-fns/esm/isToday/index.js");




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
    set tasks(value) {
      state.tasks = value;
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
    getThisWeekTasks() {
      return state.tasks.filter((task) => {
        const taskDate = new Date(task.getDateFormatted);
        return (0,date_fns_isThisWeek__WEBPACK_IMPORTED_MODULE_1__["default"])(taskDate, { weekStartsOn: 1 });
      });
    },
    getTodayTasks() {
      return state.tasks.filter((task) => {
        const taskDate = new Date(task.getDateFormatted);
        return (0,date_fns_isToday__WEBPACK_IMPORTED_MODULE_2__["default"])(taskDate);
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
  let state = {
    projectId,
    title,
    dueDate,
    description,
    priority,
    status,
    id,
  };

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
    toggleStatus() {
      if (state.status) {
        state.status = false;
      } else state.status = true;
    },
    get getDateFormatted() {
      const day = state.dueDate.split("-")[2];
      const month = state.dueDate.split("-")[1];
      const year = state.dueDate.split("-")[0];
      return `${month}/${day}/${year}`;
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toDoList": () => (/* binding */ toDoList)
/* harmony export */ });
/* harmony import */ var _to_do_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-do-list */ "./src/to-do-list.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/ui.js");


let toDoList = _to_do_list__WEBPACK_IMPORTED_MODULE_0__.ToDoList;
if (localStorage.getItem("toDoList")) {
  let stringify = localStorage.getItem("toDoList");
  let parse = JSON.parse(stringify);
  parse.projects.forEach((project) => {
    if (project.id === "inbox") {
      project.tasks.forEach((task) => {
        const projectInToDo = toDoList.getProject(task.projectId);
        projectInToDo.addTask(
          task.title,
          task.dueDate,
          task.description,
          task.priority,
          task.status
        );
      });
      return;
    }
    if (project.id === "today" || project.id === "week") {
      return;
    } else {
      toDoList.addProject(project.name, project.id);
    }
    project.tasks.forEach((task) => {
      const projectInToDo = toDoList.getProject(task.projectId);
      projectInToDo.addTask(
        task.title,
        task.dueDate,
        task.description,
        task.priority,
        task.status
      );
    });
  });
  toDoList.weekTask();
  toDoList.todayTask();
  (0,_ui__WEBPACK_IMPORTED_MODULE_1__.loadProjectsNav)();
  (0,_ui__WEBPACK_IMPORTED_MODULE_1__.loadTaskContent)("inbox");
}
const addTaskBtn = document.getElementById("addTask");
const addProjectButton = document.getElementById("addProject");
const newProject = document.getElementById("newProject");
const overlay = document.getElementById("overlay");
const modalSubmitAddTask = document.getElementById("taskSubmit");
const modalCancelTask = document.getElementById("cancelTask");
const editSubmitTask = document.getElementById("editSubmitTask");
const modalTitle = document.getElementById("title");
const modalDescription = document.getElementById("description");
const modalDueDate = document.getElementById("dueDate");
const modalPriority = document.getElementById("priority");
const fixedProjectButtons = document.querySelectorAll(".fixedBtns");
addProjectButton.addEventListener("click", () => {
  newProject.classList.add("active");
  const projectSubmitButton = document.getElementById("projectSubmit");
  const cancelProjectButton = document.getElementById("cancelProject");
  const newProjectInput = document.getElementById("projectTitle");
  cancelProjectButton.addEventListener("click", (e) => {
    e.preventDefault();
    newProject.classList.remove("active");
    newProjectInput.value = "";
  });
  projectSubmitButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (newProjectInput.value) {
      (0,_ui__WEBPACK_IMPORTED_MODULE_1__.addNewProject)(newProjectInput.value);
      newProject.classList.remove("active");
      newProjectInput.value = "";
    }
  });
});
modalCancelTask.addEventListener("click", () => {
  (0,_ui__WEBPACK_IMPORTED_MODULE_1__.modalClose)();
  modalSubmitAddTask.style.display = "block";
  editSubmitTask.style.display = "none";
});
fixedProjectButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const projectId = e.target.getAttribute("data-project-id");
    addTaskBtn.setAttribute("data-project-id", projectId);
    (0,_ui__WEBPACK_IMPORTED_MODULE_1__.loadTaskContent)(projectId);
    newProject.classList.remove("active");
  });
});
modalSubmitAddTask.addEventListener("click", (e) => {
  const projectId = addTaskBtn.getAttribute("data-project-id");

  if (modalTitle.value) {
    (0,_ui__WEBPACK_IMPORTED_MODULE_1__.addNewTask)(
      projectId,
      modalTitle.value,
      modalDueDate.value,
      modalDescription.value,
      modalPriority.value
    );

    (0,_ui__WEBPACK_IMPORTED_MODULE_1__.modalClose)();
  }
});
addTaskBtn.addEventListener("click", (e) => {
  (0,_ui__WEBPACK_IMPORTED_MODULE_1__.modalOpen)();
});
overlay.addEventListener("click", () => {
  (0,_ui__WEBPACK_IMPORTED_MODULE_1__.modalClose)();
  modalSubmitAddTask.style.display = "block";
  editSubmitTask.style.display = "none";
});


/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateStorage": () => (/* binding */ UpdateStorage)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    let x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}
function UpdateStorage() {
  if (storageAvailable("localStorage")) {
    let stringify = JSON.stringify(___WEBPACK_IMPORTED_MODULE_0__.toDoList);
    localStorage.setItem("toDoList", stringify);
  }
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
    set projects(value) {
      state.projects = value;
    },
    addProject(value, specialId) {
      state.projects.push((0,_create_projects__WEBPACK_IMPORTED_MODULE_0__.Project)(value, specialId));
    },
    getProject(value) {
      return state.projects.find((project) => project.id === value);
    },
    deleteProject(value) {
      const indexToDelete = state.projects.indexOf(this.getProject(value));
      state.projects.splice(indexToDelete, 1);
    },
    weekTask() {
      state.projects[2].tasks = [];
      state.projects.forEach((project) => {
        if (project.id === "today" || project.id === "week") {
          return;
        } else {
          const weekTasks = project.getThisWeekTasks();
          weekTasks.forEach((task) => {
            state.projects[2].tasks.push(task);
          });
        }
      });
    },
    todayTask() {
      state.projects[1].tasks = [];
      const todayTasks = state.projects[2].getTodayTasks();

      todayTasks.forEach((task) => {
        state.projects[1].tasks.push(task);
      });
    },
  };
})();


/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadProjectsNav": () => (/* binding */ loadProjectsNav),
/* harmony export */   "addNewProject": () => (/* binding */ addNewProject),
/* harmony export */   "addNewTask": () => (/* binding */ addNewTask),
/* harmony export */   "modalOpen": () => (/* binding */ modalOpen),
/* harmony export */   "modalClose": () => (/* binding */ modalClose),
/* harmony export */   "loadTaskContent": () => (/* binding */ loadTaskContent)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/index.js");


const projectNavContainer = document.getElementById("project-container");
const taskContentContainer = document.getElementById("task-container");
const projectHeader = document.querySelector(".project-header");
const addTaskBtn = document.getElementById("addTask");
const newProject = document.getElementById("newProject");
const modal = document.getElementById("task");
const overlay = document.getElementById("overlay");
const modalSubmitAddTask = document.getElementById("taskSubmit");
const editSubmitTask = document.getElementById("editSubmitTask");
const modalTitle = document.getElementById("title");
const modalDescription = document.getElementById("description");
const modalDueDate = document.getElementById("dueDate");
const modalPriority = document.getElementById("priority");

function modalOpen() {
  modal.classList.add("active");
  overlay.classList.add("active");
}
function modalClose() {
  modal.classList.remove("active");
  overlay.classList.remove("active");
  modalTitle.value = "";
  modalDueDate.value = "";
  modalDescription.value = "";
  modalPriority.value = "Low";
  modalSubmitAddTask.style.display = "block";
  editSubmitTask.style.display = "none";
  modalEditOn();
}
function modalEditOn() {
  modalTitle.disabled = false;
  modalDescription.disabled = false;
  modalDueDate.disabled = false;
  modalPriority.disabled = false;
  modalSubmitAddTask.disabled = false;
}
function modalEditOff() {
  modalTitle.disabled = true;
  modalDescription.disabled = true;
  modalDueDate.disabled = true;
  modalPriority.disabled = true;
  modalSubmitAddTask.disabled = true;
}

function deleteTask(projectId, taskId) {
  const project = ___WEBPACK_IMPORTED_MODULE_1__.toDoList.getProject(projectId);
  project.deleteTask(taskId);
  ___WEBPACK_IMPORTED_MODULE_1__.toDoList.weekTask();
  ___WEBPACK_IMPORTED_MODULE_1__.toDoList.todayTask();
  loadTaskContent(projectId);
  (0,_storage__WEBPACK_IMPORTED_MODULE_0__.UpdateStorage)();
}
function deleteProject(projectId) {
  ___WEBPACK_IMPORTED_MODULE_1__.toDoList.deleteProject(projectId);
  projectNavContainer.innerHTML = "";
  loadProjectsNav();
  (0,_storage__WEBPACK_IMPORTED_MODULE_0__.UpdateStorage)();
}
function addNewTask(projectId, ...details) {
  taskContentContainer.innerHTML = "";
  const project = ___WEBPACK_IMPORTED_MODULE_1__.toDoList.getProject(projectId);
  project.addTask(...details);
  ___WEBPACK_IMPORTED_MODULE_1__.toDoList.weekTask();
  ___WEBPACK_IMPORTED_MODULE_1__.toDoList.todayTask();
  loadTaskContent(projectId);
  (0,_storage__WEBPACK_IMPORTED_MODULE_0__.UpdateStorage)();
}
function loadTaskContent(projectId) {
  const project = ___WEBPACK_IMPORTED_MODULE_1__.toDoList.getProject(projectId);
  if (!project) {
    return;
  }
  projectHeader.textContent = `${project.name}`;
  const tasks = project.tasks;
  taskContentContainer.innerHTML = "";
  tasks.forEach((task) => {
    renderTaskContent(task);
  });
}
function openDetailTask() {
  const projectId = titleDiv.getAttribute("data-project-id");
  const taskId = titleDiv.getAttribute("data-task-id");
  const project = ___WEBPACK_IMPORTED_MODULE_1__.toDoList.getProject(projectId);
  const task = project.getTask(taskId);
  modalTitle.value = task.title;
  modalDescription.value = task.description;
  modalDueDate.value = task.dueDate;
  modalPriority.value = task.priority;
  modalEditOff();
  modalOpen();
}
function renderTaskContent(task) {
  const div = document.createElement("div");
  const taskButtonsDiv = document.createElement("div");
  taskButtonsDiv.classList.add("taskButtons");
  const detailsButton = document.createElement("button");
  const editButton = document.createElement("button");
  detailsButton.setAttribute("id", "taskDetails");
  editButton.setAttribute("id", "editDetails");
  detailsButton.textContent = "Details";
  editButton.textContent = "Edit";
  taskButtonsDiv.appendChild(editButton);
  taskButtonsDiv.appendChild(detailsButton);
  const titleDiv = document.createElement("div");
  div.classList.add(task.priority);
  detailsButton.addEventListener("click", () => {
    const projectId = titleDiv.getAttribute("data-project-id");
    const taskId = titleDiv.getAttribute("data-task-id");
    const project = ___WEBPACK_IMPORTED_MODULE_1__.toDoList.getProject(projectId);
    const task = project.getTask(taskId);
    modalTitle.value = task.title;
    modalDescription.value = task.description;
    modalDueDate.value = task.dueDate;
    modalPriority.value = task.priority;
    modalEditOff();
    modalOpen();
  });
  editButton.addEventListener("click", () => {
    const projectId = titleDiv.getAttribute("data-project-id");
    const taskId = titleDiv.getAttribute("data-task-id");
    const project = ___WEBPACK_IMPORTED_MODULE_1__.toDoList.getProject(projectId);
    const task = project.getTask(taskId);
    modalTitle.value = task.title;
    modalDescription.value = task.description;
    modalDueDate.value = task.dueDate;
    modalPriority.value = task.priority;
    modalEditOff();
    modalOpen();
    modalEditOn();
    modalSubmitAddTask.style.display = "none";
    editSubmitTask.style.display = "block";
    editSubmitTask.addEventListener("click", () => {
      if (modalTitle.value) {
        project.deleteTask(taskId);
        addNewTask(
          projectId,
          modalTitle.value,
          modalDueDate.value,
          modalDescription.value,
          modalPriority.value
        );

        modalClose();
      }
    });
  });
  const dateDiv = document.createElement("div");
  const close = document.createElement("img");
  close.addEventListener("click", (e) => {
    const projectId = e.target.getAttribute("data-project-id");
    const taskId = e.target.getAttribute("data-task-id");
    deleteTask(projectId, taskId);
  });
  const checkbox = document.createElement("input");
  if (task.status) {
    div.classList.add("done");
    checkbox.checked = true;
  }
  checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
      div.classList.add("done");
      task.toggleStatus();
      (0,_storage__WEBPACK_IMPORTED_MODULE_0__.UpdateStorage)();
    } else {
      div.classList.remove("done");
      task.toggleStatus();
      (0,_storage__WEBPACK_IMPORTED_MODULE_0__.UpdateStorage)();
    }
  });
  close.setAttribute("id", "close");
  div.setAttribute("data-task-id", `${task.id}`);
  titleDiv.setAttribute("data-task-id", `${task.id}`);
  dateDiv.setAttribute("data-task-id", `${task.id}`);
  close.setAttribute("data-task-id", `${task.id}`);
  checkbox.setAttribute("data-task-id", `${task.id}`);
  div.setAttribute("data-project-id", `${task.projectId}`);
  titleDiv.setAttribute("data-project-id", `${task.projectId}`);
  dateDiv.setAttribute("data-project-id", `${task.projectId}`);
  close.setAttribute("data-project-id", `${task.projectId}`);
  checkbox.setAttribute("date-project-id", `${task.projectId}`);
  div.classList.add("task");
  titleDiv.classList.add("task-title");
  titleDiv.textContent = `${task.title}`;
  if (task.status) {
    titleDiv.classList.add("done");
  }
  dateDiv.textContent = `${task.dueDate}`;
  dateDiv.classList.add("duedate");
  close.src = "./icons/close.svg";
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", "taskstatus");
  div.appendChild(checkbox);
  div.appendChild(titleDiv);
  div.appendChild(dateDiv);
  div.appendChild(taskButtonsDiv);
  div.appendChild(close);
  taskContentContainer.appendChild(div);
}

function addNewProject(name) {
  projectNavContainer.innerHTML = "";
  ___WEBPACK_IMPORTED_MODULE_1__.toDoList.addProject(name);
  loadProjectsNav();
  (0,_storage__WEBPACK_IMPORTED_MODULE_0__.UpdateStorage)();
}
function loadProjectsNav() {
  ___WEBPACK_IMPORTED_MODULE_1__.toDoList.projects.forEach((project) => {
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
    close.addEventListener("click", (e) => {
      const projectId = e.target.getAttribute("data-project-id");
      deleteProject(projectId);
      loadTaskContent("inbox");
      addTaskBtn.setAttribute("data-project-id", "inbox");
    });
    button.addEventListener("click", (e) => {
      const projectId = e.target.getAttribute("data-project-id");
      if (___WEBPACK_IMPORTED_MODULE_1__.toDoList.getProject(projectId)) {
        addTaskBtn.setAttribute("data-project-id", projectId);
        loadTaskContent(projectId);
        newProject.classList.remove("active");
      }
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVc7QUFDdEQsNENBQTRDLFdBQVc7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsV0FBVztBQUN6RDtBQUNBO0FBQ0E7QUFRRTs7Ozs7OztVQ2xRRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVGhpc1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NyZWF0ZS1wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NyZWF0ZS10YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG8tZG8tbGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3VpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICogXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgc3RhcnRPZldlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzU2FtZVdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheSxcbiAqIC8vIGFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSwge1xuICogICB3ZWVrU3RhcnRzT246IDFcbiAqIH0pXG4gKiAvLz0+IGZhbHNlXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMSBKYW51YXJ5IDIwMTQgYW5kIDEgSmFudWFyeSAyMDE1IGluIHRoZSBzYW1lIHdlZWs/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCAwLCAxKSwgbmV3IERhdGUoMjAxNSwgMCwgMSkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZVdlZWsoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVMZWZ0LCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVSaWdodCwgZGlydHlPcHRpb25zKTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZldlZWsuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mV2Vlay5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzU2FtZVdlZWsgZnJvbSBcIi4uL2lzU2FtZVdlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNUaGlzV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSB0aGUgb2JqZWN0IHdpdGggb3B0aW9uc1xuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIGluIHRoaXMgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0LCBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiB2YXIgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQgYW5kIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5XG4gKiAvLyBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiB2YXIgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVGhpc1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lV2VlayhkaXJ0eURhdGUsIERhdGUubm93KCksIG9wdGlvbnMpO1xufSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mV2VlayhkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZVdlZWtTdGFydHNPbiA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy53ZWVrU3RhcnRzT247XG4gIHZhciBkZWZhdWx0V2Vla1N0YXJ0c09uID0gbG9jYWxlV2Vla1N0YXJ0c09uID09IG51bGwgPyAwIDogdG9JbnRlZ2VyKGxvY2FsZVdlZWtTdGFydHNPbik7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSBvcHRpb25zLndlZWtTdGFydHNPbiA9PSBudWxsID8gZGVmYXVsdFdlZWtTdGFydHNPbiA6IHRvSW50ZWdlcihvcHRpb25zLndlZWtTdGFydHNPbik7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdC5pby9manVsZVwiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImltcG9ydCB7IHV1aWQsIFRhc2sgfSBmcm9tIFwiLi9jcmVhdGUtdGFza1wiO1xuaW1wb3J0IGlzVGhpc1dlZWsgZnJvbSBcImRhdGUtZm5zL2lzVGhpc1dlZWtcIjtcbmltcG9ydCBpc1RvZGF5IGZyb20gXCJkYXRlLWZucy9pc1RvZGF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBQcm9qZWN0KG5hbWUsIHNwZWNpYWxJZCkge1xuICBsZXQgaWQ7XG4gIGlmIChzcGVjaWFsSWQpIHtcbiAgICBpZCA9IHNwZWNpYWxJZDtcbiAgfSBlbHNlIHtcbiAgICBpZCA9IHV1aWQoKTtcbiAgfVxuXG4gIGxldCBzdGF0ZSA9IHtcbiAgICBuYW1lLFxuICAgIGlkLFxuICAgIHRhc2tzOiBbXSxcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldCBuYW1lKCkge1xuICAgICAgcmV0dXJuIHN0YXRlLm5hbWU7XG4gICAgfSxcbiAgICBzZXQgbmFtZSh2YWx1ZSkge1xuICAgICAgc3RhdGUubmFtZSA9IHZhbHVlO1xuICAgIH0sXG4gICAgZ2V0IGlkKCkge1xuICAgICAgcmV0dXJuIHN0YXRlLmlkO1xuICAgIH0sXG5cbiAgICBnZXQgdGFza3MoKSB7XG4gICAgICByZXR1cm4gc3RhdGUudGFza3M7XG4gICAgfSxcbiAgICBzZXQgdGFza3ModmFsdWUpIHtcbiAgICAgIHN0YXRlLnRhc2tzID0gdmFsdWU7XG4gICAgfSxcbiAgICBhZGRUYXNrKC4uLnZhbHVlKSB7XG4gICAgICBzdGF0ZS50YXNrcy5wdXNoKFRhc2soc3RhdGUuaWQsIC4uLnZhbHVlKSk7XG4gICAgfSxcbiAgICBnZXRUYXNrKHZhbHVlKSB7XG4gICAgICByZXR1cm4gc3RhdGUudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gdmFsdWUpO1xuICAgIH0sXG4gICAgZGVsZXRlVGFzayh2YWx1ZSkge1xuICAgICAgY29uc3QgaW5kZXhUb0RlbGV0ZSA9IHN0YXRlLnRhc2tzLmluZGV4T2YodGhpcy5nZXRUYXNrKHZhbHVlKSk7XG4gICAgICBzdGF0ZS50YXNrcy5zcGxpY2UoaW5kZXhUb0RlbGV0ZSwgMSk7XG4gICAgfSxcbiAgICBnZXRUaGlzV2Vla1Rhc2tzKCkge1xuICAgICAgcmV0dXJuIHN0YXRlLnRhc2tzLmZpbHRlcigodGFzaykgPT4ge1xuICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2suZ2V0RGF0ZUZvcm1hdHRlZCk7XG4gICAgICAgIHJldHVybiBpc1RoaXNXZWVrKHRhc2tEYXRlLCB7IHdlZWtTdGFydHNPbjogMSB9KTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0VG9kYXlUYXNrcygpIHtcbiAgICAgIHJldHVybiBzdGF0ZS50YXNrcy5maWx0ZXIoKHRhc2spID0+IHtcbiAgICAgICAgY29uc3QgdGFza0RhdGUgPSBuZXcgRGF0ZSh0YXNrLmdldERhdGVGb3JtYXR0ZWQpO1xuICAgICAgICByZXR1cm4gaXNUb2RheSh0YXNrRGF0ZSk7XG4gICAgICB9KTtcbiAgICB9LFxuICB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIFRhc2socHJvamVjdElkLCB0aXRsZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBzdGF0dXMpIHtcbiAgY29uc3QgaWQgPSB1dWlkKCk7XG4gIGxldCBzdGF0ZSA9IHtcbiAgICBwcm9qZWN0SWQsXG4gICAgdGl0bGUsXG4gICAgZHVlRGF0ZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBwcmlvcml0eSxcbiAgICBzdGF0dXMsXG4gICAgaWQsXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgcHJvamVjdElkKCkge1xuICAgICAgcmV0dXJuIHByb2plY3RJZDtcbiAgICB9LFxuICAgIGdldCB0aXRsZSgpIHtcbiAgICAgIHJldHVybiBzdGF0ZS50aXRsZTtcbiAgICB9LFxuICAgIHNldCB0aXRsZSh2YWx1ZSkge1xuICAgICAgc3RhdGUudGl0bGUgPSB2YWx1ZTtcbiAgICB9LFxuICAgIGdldCBpZCgpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5pZDtcbiAgICB9LFxuICAgIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5kZXNjcmlwdGlvbjtcbiAgICB9LFxuICAgIHNldCBkZXNjcmlwdGlvbih2YWx1ZSkge1xuICAgICAgc3RhdGUuZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgICB9LFxuICAgIGdldCBkdWVEYXRlKCkge1xuICAgICAgcmV0dXJuIHN0YXRlLmR1ZURhdGU7XG4gICAgfSxcbiAgICBzZXQgZHVlRGF0ZSh2YWx1ZSkge1xuICAgICAgc3RhdGUuZHVlRGF0ZSA9IHZhbHVlO1xuICAgIH0sXG4gICAgZ2V0IHByaW9yaXR5KCkge1xuICAgICAgcmV0dXJuIHN0YXRlLnByaW9yaXR5O1xuICAgIH0sXG4gICAgc2V0IHByaW9yaXR5KHZhbHVlKSB7XG4gICAgICBzdGF0ZS5wcmlvcml0eSA9IHZhbHVlO1xuICAgIH0sXG4gICAgZ2V0IHN0YXR1cygpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5zdGF0dXM7XG4gICAgfSxcbiAgICB0b2dnbGVTdGF0dXMoKSB7XG4gICAgICBpZiAoc3RhdGUuc3RhdHVzKSB7XG4gICAgICAgIHN0YXRlLnN0YXR1cyA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHN0YXRlLnN0YXR1cyA9IHRydWU7XG4gICAgfSxcbiAgICBnZXQgZ2V0RGF0ZUZvcm1hdHRlZCgpIHtcbiAgICAgIGNvbnN0IGRheSA9IHN0YXRlLmR1ZURhdGUuc3BsaXQoXCItXCIpWzJdO1xuICAgICAgY29uc3QgbW9udGggPSBzdGF0ZS5kdWVEYXRlLnNwbGl0KFwiLVwiKVsxXTtcbiAgICAgIGNvbnN0IHllYXIgPSBzdGF0ZS5kdWVEYXRlLnNwbGl0KFwiLVwiKVswXTtcbiAgICAgIHJldHVybiBgJHttb250aH0vJHtkYXl9LyR7eWVhcn1gO1xuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1dWlkKCkge1xuICByZXR1cm4gKFsxZTddICsgLTFlMyArIC00ZTMgKyAtOGUzICsgLTFlMTEpLnJlcGxhY2UoL1swMThdL2csIChjKSA9PlxuICAgIChcbiAgICAgIGMgXlxuICAgICAgKGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoMSkpWzBdICYgKDE1ID4+IChjIC8gNCkpKVxuICAgICkudG9TdHJpbmcoMTYpXG4gICk7XG59XG4iLCJpbXBvcnQgeyBUb0RvTGlzdCB9IGZyb20gXCIuL3RvLWRvLWxpc3RcIjtcbmltcG9ydCB7XG4gIGFkZE5ld1Byb2plY3QsXG4gIGFkZE5ld1Rhc2ssXG4gIG1vZGFsQ2xvc2UsXG4gIG1vZGFsT3BlbixcbiAgbG9hZFRhc2tDb250ZW50LFxuICBsb2FkUHJvamVjdHNOYXYsXG59IGZyb20gXCIuL3VpXCI7XG5leHBvcnQgbGV0IHRvRG9MaXN0ID0gVG9Eb0xpc3Q7XG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b0RvTGlzdFwiKSkge1xuICBsZXQgc3RyaW5naWZ5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b0RvTGlzdFwiKTtcbiAgbGV0IHBhcnNlID0gSlNPTi5wYXJzZShzdHJpbmdpZnkpO1xuICBwYXJzZS5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgaWYgKHByb2plY3QuaWQgPT09IFwiaW5ib3hcIikge1xuICAgICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RJblRvRG8gPSB0b0RvTGlzdC5nZXRQcm9qZWN0KHRhc2sucHJvamVjdElkKTtcbiAgICAgICAgcHJvamVjdEluVG9Eby5hZGRUYXNrKFxuICAgICAgICAgIHRhc2sudGl0bGUsXG4gICAgICAgICAgdGFzay5kdWVEYXRlLFxuICAgICAgICAgIHRhc2suZGVzY3JpcHRpb24sXG4gICAgICAgICAgdGFzay5wcmlvcml0eSxcbiAgICAgICAgICB0YXNrLnN0YXR1c1xuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChwcm9qZWN0LmlkID09PSBcInRvZGF5XCIgfHwgcHJvamVjdC5pZCA9PT0gXCJ3ZWVrXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9Eb0xpc3QuYWRkUHJvamVjdChwcm9qZWN0Lm5hbWUsIHByb2plY3QuaWQpO1xuICAgIH1cbiAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RJblRvRG8gPSB0b0RvTGlzdC5nZXRQcm9qZWN0KHRhc2sucHJvamVjdElkKTtcbiAgICAgIHByb2plY3RJblRvRG8uYWRkVGFzayhcbiAgICAgICAgdGFzay50aXRsZSxcbiAgICAgICAgdGFzay5kdWVEYXRlLFxuICAgICAgICB0YXNrLmRlc2NyaXB0aW9uLFxuICAgICAgICB0YXNrLnByaW9yaXR5LFxuICAgICAgICB0YXNrLnN0YXR1c1xuICAgICAgKTtcbiAgICB9KTtcbiAgfSk7XG4gIHRvRG9MaXN0LndlZWtUYXNrKCk7XG4gIHRvRG9MaXN0LnRvZGF5VGFzaygpO1xuICBsb2FkUHJvamVjdHNOYXYoKTtcbiAgbG9hZFRhc2tDb250ZW50KFwiaW5ib3hcIik7XG59XG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUYXNrXCIpO1xuY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUHJvamVjdFwiKTtcbmNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RcIik7XG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5XCIpO1xuY29uc3QgbW9kYWxTdWJtaXRBZGRUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrU3VibWl0XCIpO1xuY29uc3QgbW9kYWxDYW5jZWxUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5jZWxUYXNrXCIpO1xuY29uc3QgZWRpdFN1Ym1pdFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRTdWJtaXRUYXNrXCIpO1xuY29uc3QgbW9kYWxUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIik7XG5jb25zdCBtb2RhbERlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKTtcbmNvbnN0IG1vZGFsRHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZVwiKTtcbmNvbnN0IG1vZGFsUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5XCIpO1xuY29uc3QgZml4ZWRQcm9qZWN0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZml4ZWRCdG5zXCIpO1xuYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBuZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIGNvbnN0IHByb2plY3RTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RTdWJtaXRcIik7XG4gIGNvbnN0IGNhbmNlbFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbmNlbFByb2plY3RcIik7XG4gIGNvbnN0IG5ld1Byb2plY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdFRpdGxlXCIpO1xuICBjYW5jZWxQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBuZXdQcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgbmV3UHJvamVjdElucHV0LnZhbHVlID0gXCJcIjtcbiAgfSk7XG4gIHByb2plY3RTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChuZXdQcm9qZWN0SW5wdXQudmFsdWUpIHtcbiAgICAgIGFkZE5ld1Byb2plY3QobmV3UHJvamVjdElucHV0LnZhbHVlKTtcbiAgICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIG5ld1Byb2plY3RJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgfVxuICB9KTtcbn0pO1xubW9kYWxDYW5jZWxUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIG1vZGFsQ2xvc2UoKTtcbiAgbW9kYWxTdWJtaXRBZGRUYXNrLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIGVkaXRTdWJtaXRUYXNrLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pO1xuZml4ZWRQcm9qZWN0QnV0dG9ucy5mb3JFYWNoKChidG4pID0+IHtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RJZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiKTtcbiAgICBhZGRUYXNrQnRuLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiLCBwcm9qZWN0SWQpO1xuICAgIGxvYWRUYXNrQ29udGVudChwcm9qZWN0SWQpO1xuICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfSk7XG59KTtcbm1vZGFsU3VibWl0QWRkVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgY29uc3QgcHJvamVjdElkID0gYWRkVGFza0J0bi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIik7XG5cbiAgaWYgKG1vZGFsVGl0bGUudmFsdWUpIHtcbiAgICBhZGROZXdUYXNrKFxuICAgICAgcHJvamVjdElkLFxuICAgICAgbW9kYWxUaXRsZS52YWx1ZSxcbiAgICAgIG1vZGFsRHVlRGF0ZS52YWx1ZSxcbiAgICAgIG1vZGFsRGVzY3JpcHRpb24udmFsdWUsXG4gICAgICBtb2RhbFByaW9yaXR5LnZhbHVlXG4gICAgKTtcblxuICAgIG1vZGFsQ2xvc2UoKTtcbiAgfVxufSk7XG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBtb2RhbE9wZW4oKTtcbn0pO1xub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBtb2RhbENsb3NlKCk7XG4gIG1vZGFsU3VibWl0QWRkVGFzay5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICBlZGl0U3VibWl0VGFzay5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KTtcbiIsImltcG9ydCB7IHRvRG9MaXN0IH0gZnJvbSBcIi5cIjtcblxuZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gIGxldCBzdG9yYWdlO1xuICB0cnkge1xuICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgbGV0IHggPSBcIl9fc3RvcmFnZV90ZXN0X19cIjtcbiAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiZcbiAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgIChlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgIGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fFxuICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgIGUubmFtZSA9PT0gXCJOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRFwiKSAmJlxuICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgIHN0b3JhZ2UgJiZcbiAgICAgIHN0b3JhZ2UubGVuZ3RoICE9PSAwXG4gICAgKTtcbiAgfVxufVxuZnVuY3Rpb24gVXBkYXRlU3RvcmFnZSgpIHtcbiAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgICBsZXQgc3RyaW5naWZ5ID0gSlNPTi5zdHJpbmdpZnkodG9Eb0xpc3QpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9Eb0xpc3RcIiwgc3RyaW5naWZ5KTtcbiAgfVxufVxuZXhwb3J0IHsgVXBkYXRlU3RvcmFnZSB9O1xuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL2NyZWF0ZS1wcm9qZWN0c1wiO1xuXG5leHBvcnQgY29uc3QgVG9Eb0xpc3QgPSAoZnVuY3Rpb24gKCkge1xuICBsZXQgc3RhdGUgPSB7IHByb2plY3RzOiBbXSB9O1xuICBzdGF0ZS5wcm9qZWN0cy5wdXNoKFByb2plY3QoXCJJbmJveFwiLCBcImluYm94XCIpKTtcbiAgc3RhdGUucHJvamVjdHMucHVzaChQcm9qZWN0KFwiVG9kYXlcIiwgXCJ0b2RheVwiKSk7XG4gIHN0YXRlLnByb2plY3RzLnB1c2goUHJvamVjdChcIlRoaXMgV2Vla1wiLCBcIndlZWtcIikpO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IHByb2plY3RzKCkge1xuICAgICAgcmV0dXJuIFsuLi5zdGF0ZS5wcm9qZWN0c107XG4gICAgfSxcbiAgICBzZXQgcHJvamVjdHModmFsdWUpIHtcbiAgICAgIHN0YXRlLnByb2plY3RzID0gdmFsdWU7XG4gICAgfSxcbiAgICBhZGRQcm9qZWN0KHZhbHVlLCBzcGVjaWFsSWQpIHtcbiAgICAgIHN0YXRlLnByb2plY3RzLnB1c2goUHJvamVjdCh2YWx1ZSwgc3BlY2lhbElkKSk7XG4gICAgfSxcbiAgICBnZXRQcm9qZWN0KHZhbHVlKSB7XG4gICAgICByZXR1cm4gc3RhdGUucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gdmFsdWUpO1xuICAgIH0sXG4gICAgZGVsZXRlUHJvamVjdCh2YWx1ZSkge1xuICAgICAgY29uc3QgaW5kZXhUb0RlbGV0ZSA9IHN0YXRlLnByb2plY3RzLmluZGV4T2YodGhpcy5nZXRQcm9qZWN0KHZhbHVlKSk7XG4gICAgICBzdGF0ZS5wcm9qZWN0cy5zcGxpY2UoaW5kZXhUb0RlbGV0ZSwgMSk7XG4gICAgfSxcbiAgICB3ZWVrVGFzaygpIHtcbiAgICAgIHN0YXRlLnByb2plY3RzWzJdLnRhc2tzID0gW107XG4gICAgICBzdGF0ZS5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGlmIChwcm9qZWN0LmlkID09PSBcInRvZGF5XCIgfHwgcHJvamVjdC5pZCA9PT0gXCJ3ZWVrXCIpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3Qgd2Vla1Rhc2tzID0gcHJvamVjdC5nZXRUaGlzV2Vla1Rhc2tzKCk7XG4gICAgICAgICAgd2Vla1Rhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnByb2plY3RzWzJdLnRhc2tzLnB1c2godGFzayk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgdG9kYXlUYXNrKCkge1xuICAgICAgc3RhdGUucHJvamVjdHNbMV0udGFza3MgPSBbXTtcbiAgICAgIGNvbnN0IHRvZGF5VGFza3MgPSBzdGF0ZS5wcm9qZWN0c1syXS5nZXRUb2RheVRhc2tzKCk7XG5cbiAgICAgIHRvZGF5VGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICBzdGF0ZS5wcm9qZWN0c1sxXS50YXNrcy5wdXNoKHRhc2spO1xuICAgICAgfSk7XG4gICAgfSxcbiAgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBVcGRhdGVTdG9yYWdlIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuaW1wb3J0IHsgdG9Eb0xpc3QgfSBmcm9tIFwiLlwiO1xuY29uc3QgcHJvamVjdE5hdkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1jb250YWluZXJcIik7XG5jb25zdCB0YXNrQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1jb250YWluZXJcIik7XG5jb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWhlYWRlclwiKTtcbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRhc2tcIik7XG5jb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQcm9qZWN0XCIpO1xuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tcIik7XG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5XCIpO1xuY29uc3QgbW9kYWxTdWJtaXRBZGRUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrU3VibWl0XCIpO1xuY29uc3QgZWRpdFN1Ym1pdFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRTdWJtaXRUYXNrXCIpO1xuY29uc3QgbW9kYWxUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIik7XG5jb25zdCBtb2RhbERlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKTtcbmNvbnN0IG1vZGFsRHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZVwiKTtcbmNvbnN0IG1vZGFsUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5XCIpO1xuXG5mdW5jdGlvbiBtb2RhbE9wZW4oKSB7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cbmZ1bmN0aW9uIG1vZGFsQ2xvc2UoKSB7XG4gIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgbW9kYWxUaXRsZS52YWx1ZSA9IFwiXCI7XG4gIG1vZGFsRHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG4gIG1vZGFsRGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICBtb2RhbFByaW9yaXR5LnZhbHVlID0gXCJMb3dcIjtcbiAgbW9kYWxTdWJtaXRBZGRUYXNrLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIGVkaXRTdWJtaXRUYXNrLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgbW9kYWxFZGl0T24oKTtcbn1cbmZ1bmN0aW9uIG1vZGFsRWRpdE9uKCkge1xuICBtb2RhbFRpdGxlLmRpc2FibGVkID0gZmFsc2U7XG4gIG1vZGFsRGVzY3JpcHRpb24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgbW9kYWxEdWVEYXRlLmRpc2FibGVkID0gZmFsc2U7XG4gIG1vZGFsUHJpb3JpdHkuZGlzYWJsZWQgPSBmYWxzZTtcbiAgbW9kYWxTdWJtaXRBZGRUYXNrLmRpc2FibGVkID0gZmFsc2U7XG59XG5mdW5jdGlvbiBtb2RhbEVkaXRPZmYoKSB7XG4gIG1vZGFsVGl0bGUuZGlzYWJsZWQgPSB0cnVlO1xuICBtb2RhbERlc2NyaXB0aW9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgbW9kYWxEdWVEYXRlLmRpc2FibGVkID0gdHJ1ZTtcbiAgbW9kYWxQcmlvcml0eS5kaXNhYmxlZCA9IHRydWU7XG4gIG1vZGFsU3VibWl0QWRkVGFzay5kaXNhYmxlZCA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2socHJvamVjdElkLCB0YXNrSWQpIHtcbiAgY29uc3QgcHJvamVjdCA9IHRvRG9MaXN0LmdldFByb2plY3QocHJvamVjdElkKTtcbiAgcHJvamVjdC5kZWxldGVUYXNrKHRhc2tJZCk7XG4gIHRvRG9MaXN0LndlZWtUYXNrKCk7XG4gIHRvRG9MaXN0LnRvZGF5VGFzaygpO1xuICBsb2FkVGFza0NvbnRlbnQocHJvamVjdElkKTtcbiAgVXBkYXRlU3RvcmFnZSgpO1xufVxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0SWQpIHtcbiAgdG9Eb0xpc3QuZGVsZXRlUHJvamVjdChwcm9qZWN0SWQpO1xuICBwcm9qZWN0TmF2Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIGxvYWRQcm9qZWN0c05hdigpO1xuICBVcGRhdGVTdG9yYWdlKCk7XG59XG5mdW5jdGlvbiBhZGROZXdUYXNrKHByb2plY3RJZCwgLi4uZGV0YWlscykge1xuICB0YXNrQ29udGVudENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICBjb25zdCBwcm9qZWN0ID0gdG9Eb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0SWQpO1xuICBwcm9qZWN0LmFkZFRhc2soLi4uZGV0YWlscyk7XG4gIHRvRG9MaXN0LndlZWtUYXNrKCk7XG4gIHRvRG9MaXN0LnRvZGF5VGFzaygpO1xuICBsb2FkVGFza0NvbnRlbnQocHJvamVjdElkKTtcbiAgVXBkYXRlU3RvcmFnZSgpO1xufVxuZnVuY3Rpb24gbG9hZFRhc2tDb250ZW50KHByb2plY3RJZCkge1xuICBjb25zdCBwcm9qZWN0ID0gdG9Eb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0SWQpO1xuICBpZiAoIXByb2plY3QpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgcHJvamVjdEhlYWRlci50ZXh0Q29udGVudCA9IGAke3Byb2plY3QubmFtZX1gO1xuICBjb25zdCB0YXNrcyA9IHByb2plY3QudGFza3M7XG4gIHRhc2tDb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICByZW5kZXJUYXNrQ29udGVudCh0YXNrKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBvcGVuRGV0YWlsVGFzaygpIHtcbiAgY29uc3QgcHJvamVjdElkID0gdGl0bGVEaXYuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIpO1xuICBjb25zdCB0YXNrSWQgPSB0aXRsZURpdi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2staWRcIik7XG4gIGNvbnN0IHByb2plY3QgPSB0b0RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3RJZCk7XG4gIGNvbnN0IHRhc2sgPSBwcm9qZWN0LmdldFRhc2sodGFza0lkKTtcbiAgbW9kYWxUaXRsZS52YWx1ZSA9IHRhc2sudGl0bGU7XG4gIG1vZGFsRGVzY3JpcHRpb24udmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICBtb2RhbER1ZURhdGUudmFsdWUgPSB0YXNrLmR1ZURhdGU7XG4gIG1vZGFsUHJpb3JpdHkudmFsdWUgPSB0YXNrLnByaW9yaXR5O1xuICBtb2RhbEVkaXRPZmYoKTtcbiAgbW9kYWxPcGVuKCk7XG59XG5mdW5jdGlvbiByZW5kZXJUYXNrQ29udGVudCh0YXNrKSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRhc2tCdXR0b25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza0J1dHRvbnNEaXYuY2xhc3NMaXN0LmFkZChcInRhc2tCdXR0b25zXCIpO1xuICBjb25zdCBkZXRhaWxzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRldGFpbHNCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrRGV0YWlsc1wiKTtcbiAgZWRpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVkaXREZXRhaWxzXCIpO1xuICBkZXRhaWxzQnV0dG9uLnRleHRDb250ZW50ID0gXCJEZXRhaWxzXCI7XG4gIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgdGFza0J1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG4gIHRhc2tCdXR0b25zRGl2LmFwcGVuZENoaWxkKGRldGFpbHNCdXR0b24pO1xuICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKHRhc2sucHJpb3JpdHkpO1xuICBkZXRhaWxzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdElkID0gdGl0bGVEaXYuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIpO1xuICAgIGNvbnN0IHRhc2tJZCA9IHRpdGxlRGl2LmdldEF0dHJpYnV0ZShcImRhdGEtdGFzay1pZFwiKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gdG9Eb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0SWQpO1xuICAgIGNvbnN0IHRhc2sgPSBwcm9qZWN0LmdldFRhc2sodGFza0lkKTtcbiAgICBtb2RhbFRpdGxlLnZhbHVlID0gdGFzay50aXRsZTtcbiAgICBtb2RhbERlc2NyaXB0aW9uLnZhbHVlID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICBtb2RhbER1ZURhdGUudmFsdWUgPSB0YXNrLmR1ZURhdGU7XG4gICAgbW9kYWxQcmlvcml0eS52YWx1ZSA9IHRhc2sucHJpb3JpdHk7XG4gICAgbW9kYWxFZGl0T2ZmKCk7XG4gICAgbW9kYWxPcGVuKCk7XG4gIH0pO1xuICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdElkID0gdGl0bGVEaXYuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIpO1xuICAgIGNvbnN0IHRhc2tJZCA9IHRpdGxlRGl2LmdldEF0dHJpYnV0ZShcImRhdGEtdGFzay1pZFwiKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gdG9Eb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0SWQpO1xuICAgIGNvbnN0IHRhc2sgPSBwcm9qZWN0LmdldFRhc2sodGFza0lkKTtcbiAgICBtb2RhbFRpdGxlLnZhbHVlID0gdGFzay50aXRsZTtcbiAgICBtb2RhbERlc2NyaXB0aW9uLnZhbHVlID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICBtb2RhbER1ZURhdGUudmFsdWUgPSB0YXNrLmR1ZURhdGU7XG4gICAgbW9kYWxQcmlvcml0eS52YWx1ZSA9IHRhc2sucHJpb3JpdHk7XG4gICAgbW9kYWxFZGl0T2ZmKCk7XG4gICAgbW9kYWxPcGVuKCk7XG4gICAgbW9kYWxFZGl0T24oKTtcbiAgICBtb2RhbFN1Ym1pdEFkZFRhc2suc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGVkaXRTdWJtaXRUYXNrLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgZWRpdFN1Ym1pdFRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmIChtb2RhbFRpdGxlLnZhbHVlKSB7XG4gICAgICAgIHByb2plY3QuZGVsZXRlVGFzayh0YXNrSWQpO1xuICAgICAgICBhZGROZXdUYXNrKFxuICAgICAgICAgIHByb2plY3RJZCxcbiAgICAgICAgICBtb2RhbFRpdGxlLnZhbHVlLFxuICAgICAgICAgIG1vZGFsRHVlRGF0ZS52YWx1ZSxcbiAgICAgICAgICBtb2RhbERlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgICAgIG1vZGFsUHJpb3JpdHkudmFsdWVcbiAgICAgICAgKTtcblxuICAgICAgICBtb2RhbENsb3NlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICBjb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0SWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIik7XG4gICAgY29uc3QgdGFza0lkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS10YXNrLWlkXCIpO1xuICAgIGRlbGV0ZVRhc2socHJvamVjdElkLCB0YXNrSWQpO1xuICB9KTtcbiAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlmICh0YXNrLnN0YXR1cykge1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiZG9uZVwiKTtcbiAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgfVxuICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZChcImRvbmVcIik7XG4gICAgICB0YXNrLnRvZ2dsZVN0YXR1cygpO1xuICAgICAgVXBkYXRlU3RvcmFnZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZShcImRvbmVcIik7XG4gICAgICB0YXNrLnRvZ2dsZVN0YXR1cygpO1xuICAgICAgVXBkYXRlU3RvcmFnZSgpO1xuICAgIH1cbiAgfSk7XG4gIGNsb3NlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2xvc2VcIik7XG4gIGRpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2staWRcIiwgYCR7dGFzay5pZH1gKTtcbiAgdGl0bGVEaXYuc2V0QXR0cmlidXRlKFwiZGF0YS10YXNrLWlkXCIsIGAke3Rhc2suaWR9YCk7XG4gIGRhdGVEaXYuc2V0QXR0cmlidXRlKFwiZGF0YS10YXNrLWlkXCIsIGAke3Rhc2suaWR9YCk7XG4gIGNsb3NlLnNldEF0dHJpYnV0ZShcImRhdGEtdGFzay1pZFwiLCBgJHt0YXNrLmlkfWApO1xuICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2staWRcIiwgYCR7dGFzay5pZH1gKTtcbiAgZGl2LnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiLCBgJHt0YXNrLnByb2plY3RJZH1gKTtcbiAgdGl0bGVEaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIsIGAke3Rhc2sucHJvamVjdElkfWApO1xuICBkYXRlRGl2LnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiLCBgJHt0YXNrLnByb2plY3RJZH1gKTtcbiAgY2xvc2Uuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIsIGAke3Rhc2sucHJvamVjdElkfWApO1xuICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJkYXRlLXByb2plY3QtaWRcIiwgYCR7dGFzay5wcm9qZWN0SWR9YCk7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZChcInRhc2stdGl0bGVcIik7XG4gIHRpdGxlRGl2LnRleHRDb250ZW50ID0gYCR7dGFzay50aXRsZX1gO1xuICBpZiAodGFzay5zdGF0dXMpIHtcbiAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKFwiZG9uZVwiKTtcbiAgfVxuICBkYXRlRGl2LnRleHRDb250ZW50ID0gYCR7dGFzay5kdWVEYXRlfWA7XG4gIGRhdGVEaXYuY2xhc3NMaXN0LmFkZChcImR1ZWRhdGVcIik7XG4gIGNsb3NlLnNyYyA9IFwiLi9pY29ucy9jbG9zZS5zdmdcIjtcbiAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2tzdGF0dXNcIik7XG4gIGRpdi5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gIGRpdi5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG4gIGRpdi5hcHBlbmRDaGlsZChkYXRlRGl2KTtcbiAgZGl2LmFwcGVuZENoaWxkKHRhc2tCdXR0b25zRGl2KTtcbiAgZGl2LmFwcGVuZENoaWxkKGNsb3NlKTtcbiAgdGFza0NvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbn1cblxuZnVuY3Rpb24gYWRkTmV3UHJvamVjdChuYW1lKSB7XG4gIHByb2plY3ROYXZDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgdG9Eb0xpc3QuYWRkUHJvamVjdChuYW1lKTtcbiAgbG9hZFByb2plY3RzTmF2KCk7XG4gIFVwZGF0ZVN0b3JhZ2UoKTtcbn1cbmZ1bmN0aW9uIGxvYWRQcm9qZWN0c05hdigpIHtcbiAgdG9Eb0xpc3QucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIHJlbmRlclByb2plY3ROYXYocHJvamVjdCk7XG4gIH0pO1xufVxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdE5hdihwcm9qZWN0KSB7XG4gIGlmIChwcm9qZWN0LmlkID09PSBcImluYm94XCIgfHwgcHJvamVjdC5pZCA9PT0gXCJ0b2RheVwiIHx8IHByb2plY3QuaWQgPT09IFwid2Vla1wiKVxuICAgIHJldHVybjtcbiAgZWxzZSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RJZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiKTtcbiAgICAgIGRlbGV0ZVByb2plY3QocHJvamVjdElkKTtcbiAgICAgIGxvYWRUYXNrQ29udGVudChcImluYm94XCIpO1xuICAgICAgYWRkVGFza0J0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIiwgXCJpbmJveFwiKTtcbiAgICB9KTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0SWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIik7XG4gICAgICBpZiAodG9Eb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0SWQpKSB7XG4gICAgICAgIGFkZFRhc2tCdG4uc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIsIHByb2plY3RJZCk7XG4gICAgICAgIGxvYWRUYXNrQ29udGVudChwcm9qZWN0SWQpO1xuICAgICAgICBuZXdQcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gICAgaW1nLnNyYyA9IFwiLi9pY29ucy9jYWxlbmRhci1tdWx0aXBsZS1jaGVjay5zdmdcIjtcbiAgICBjbG9zZS5zcmMgPSBcIi4vaWNvbnMvY2xvc2Uuc3ZnXCI7XG4gICAgY2xvc2Uuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIsIGAke3Byb2plY3QuaWR9YCk7XG4gICAgaW1nLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiLCBgJHtwcm9qZWN0LmlkfWApO1xuICAgIHRleHQuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIsIGAke3Byb2plY3QuaWR9YCk7XG5cbiAgICBidXR0b24uYXBwZW5kKGltZyk7XG4gICAgdGV4dC50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0XCIpO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoY2xvc2UpO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIiwgYCR7cHJvamVjdC5pZH1gKTtcbiAgICBwcm9qZWN0TmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gIH1cbn1cbmV4cG9ydCB7XG4gIGxvYWRQcm9qZWN0c05hdixcbiAgYWRkTmV3UHJvamVjdCxcbiAgYWRkTmV3VGFzayxcbiAgbW9kYWxPcGVuLFxuICBtb2RhbENsb3NlLFxuICBsb2FkVGFza0NvbnRlbnQsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==