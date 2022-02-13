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
// localStorage.removeItem("toDoList");
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
} else {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSw2Q0FBNkMsV0FBVztBQUN4RCwyQ0FBMkMsV0FBVztBQUN0RCw0Q0FBNEMsV0FBVzs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxXQUFXO0FBQ3pEO0FBQ0E7QUFDQTtBQVFFOzs7Ozs7O1VDbFFGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZVdlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUaGlzV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY3JlYXRlLXByb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY3JlYXRlLXRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90by1kby1saXN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCBzdGFydE9mV2VlayBmcm9tIFwiLi4vc3RhcnRPZldlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNTYW1lV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcilcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5LFxuICogLy8gYXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMVxuICogfSlcbiAqIC8vPT4gZmFsc2VcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAxIEphbnVhcnkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDAsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lV2VlayhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZUxlZnQsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZVJpZ2h0LCBkaXJ0eU9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mV2Vlay5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZXZWVrLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lV2VlayBmcm9tIFwiLi4vaXNTYW1lV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1RoaXNXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhpcyB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQsIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIHZhciByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCBhbmQgd2VlayBzdGFydHMgd2l0aCBNb25kYXlcbiAqIC8vIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIHZhciByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUaGlzV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVXZWVrKGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSwgb3B0aW9ucyk7XG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIHZhciByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlV2Vla1N0YXJ0c09uID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLndlZWtTdGFydHNPbjtcbiAgdmFyIGRlZmF1bHRXZWVrU3RhcnRzT24gPSBsb2NhbGVXZWVrU3RhcnRzT24gPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIobG9jYWxlV2Vla1N0YXJ0c09uKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IG9wdGlvbnMud2Vla1N0YXJ0c09uID09IG51bGwgPyBkZWZhdWx0V2Vla1N0YXJ0c09uIDogdG9JbnRlZ2VyKG9wdGlvbnMud2Vla1N0YXJ0c09uKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2ZqdWxlXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiaW1wb3J0IHsgdXVpZCwgVGFzayB9IGZyb20gXCIuL2NyZWF0ZS10YXNrXCI7XG5pbXBvcnQgaXNUaGlzV2VlayBmcm9tIFwiZGF0ZS1mbnMvaXNUaGlzV2Vla1wiO1xuaW1wb3J0IGlzVG9kYXkgZnJvbSBcImRhdGUtZm5zL2lzVG9kYXlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFByb2plY3QobmFtZSwgc3BlY2lhbElkKSB7XG4gIGxldCBpZDtcbiAgaWYgKHNwZWNpYWxJZCkge1xuICAgIGlkID0gc3BlY2lhbElkO1xuICB9IGVsc2Uge1xuICAgIGlkID0gdXVpZCgpO1xuICB9XG5cbiAgbGV0IHN0YXRlID0ge1xuICAgIG5hbWUsXG4gICAgaWQsXG4gICAgdGFza3M6IFtdLFxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICByZXR1cm4gc3RhdGUubmFtZTtcbiAgICB9LFxuICAgIHNldCBuYW1lKHZhbHVlKSB7XG4gICAgICBzdGF0ZS5uYW1lID0gdmFsdWU7XG4gICAgfSxcbiAgICBnZXQgaWQoKSB7XG4gICAgICByZXR1cm4gc3RhdGUuaWQ7XG4gICAgfSxcblxuICAgIGdldCB0YXNrcygpIHtcbiAgICAgIHJldHVybiBzdGF0ZS50YXNrcztcbiAgICB9LFxuICAgIHNldCB0YXNrcyh2YWx1ZSkge1xuICAgICAgc3RhdGUudGFza3MgPSB2YWx1ZTtcbiAgICB9LFxuICAgIGFkZFRhc2soLi4udmFsdWUpIHtcbiAgICAgIHN0YXRlLnRhc2tzLnB1c2goVGFzayhzdGF0ZS5pZCwgLi4udmFsdWUpKTtcbiAgICB9LFxuICAgIGdldFRhc2sodmFsdWUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSB2YWx1ZSk7XG4gICAgfSxcbiAgICBkZWxldGVUYXNrKHZhbHVlKSB7XG4gICAgICBjb25zdCBpbmRleFRvRGVsZXRlID0gc3RhdGUudGFza3MuaW5kZXhPZih0aGlzLmdldFRhc2sodmFsdWUpKTtcbiAgICAgIHN0YXRlLnRhc2tzLnNwbGljZShpbmRleFRvRGVsZXRlLCAxKTtcbiAgICB9LFxuICAgIGdldFRoaXNXZWVrVGFza3MoKSB7XG4gICAgICByZXR1cm4gc3RhdGUudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tEYXRlID0gbmV3IERhdGUodGFzay5nZXREYXRlRm9ybWF0dGVkKTtcbiAgICAgICAgcmV0dXJuIGlzVGhpc1dlZWsodGFza0RhdGUsIHsgd2Vla1N0YXJ0c09uOiAxIH0pO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBnZXRUb2RheVRhc2tzKCkge1xuICAgICAgcmV0dXJuIHN0YXRlLnRhc2tzLmZpbHRlcigodGFzaykgPT4ge1xuICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2suZ2V0RGF0ZUZvcm1hdHRlZCk7XG4gICAgICAgIHJldHVybiBpc1RvZGF5KHRhc2tEYXRlKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gVGFzayhwcm9qZWN0SWQsIHRpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIHN0YXR1cykge1xuICBjb25zdCBpZCA9IHV1aWQoKTtcbiAgbGV0IHN0YXRlID0ge1xuICAgIHByb2plY3RJZCxcbiAgICB0aXRsZSxcbiAgICBkdWVEYXRlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIHByaW9yaXR5LFxuICAgIHN0YXR1cyxcbiAgICBpZCxcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldCBwcm9qZWN0SWQoKSB7XG4gICAgICByZXR1cm4gcHJvamVjdElkO1xuICAgIH0sXG4gICAgZ2V0IHRpdGxlKCkge1xuICAgICAgcmV0dXJuIHN0YXRlLnRpdGxlO1xuICAgIH0sXG4gICAgc2V0IHRpdGxlKHZhbHVlKSB7XG4gICAgICBzdGF0ZS50aXRsZSA9IHZhbHVlO1xuICAgIH0sXG4gICAgZ2V0IGlkKCkge1xuICAgICAgcmV0dXJuIHN0YXRlLmlkO1xuICAgIH0sXG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgICAgcmV0dXJuIHN0YXRlLmRlc2NyaXB0aW9uO1xuICAgIH0sXG4gICAgc2V0IGRlc2NyaXB0aW9uKHZhbHVlKSB7XG4gICAgICBzdGF0ZS5kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICAgIH0sXG4gICAgZ2V0IGR1ZURhdGUoKSB7XG4gICAgICByZXR1cm4gc3RhdGUuZHVlRGF0ZTtcbiAgICB9LFxuICAgIHNldCBkdWVEYXRlKHZhbHVlKSB7XG4gICAgICBzdGF0ZS5kdWVEYXRlID0gdmFsdWU7XG4gICAgfSxcbiAgICBnZXQgcHJpb3JpdHkoKSB7XG4gICAgICByZXR1cm4gc3RhdGUucHJpb3JpdHk7XG4gICAgfSxcbiAgICBzZXQgcHJpb3JpdHkodmFsdWUpIHtcbiAgICAgIHN0YXRlLnByaW9yaXR5ID0gdmFsdWU7XG4gICAgfSxcbiAgICBnZXQgc3RhdHVzKCkge1xuICAgICAgcmV0dXJuIHN0YXRlLnN0YXR1cztcbiAgICB9LFxuICAgIHRvZ2dsZVN0YXR1cygpIHtcbiAgICAgIGlmIChzdGF0ZS5zdGF0dXMpIHtcbiAgICAgICAgc3RhdGUuc3RhdHVzID0gZmFsc2U7XG4gICAgICB9IGVsc2Ugc3RhdGUuc3RhdHVzID0gdHJ1ZTtcbiAgICB9LFxuICAgIGdldCBnZXREYXRlRm9ybWF0dGVkKCkge1xuICAgICAgY29uc3QgZGF5ID0gc3RhdGUuZHVlRGF0ZS5zcGxpdChcIi1cIilbMl07XG4gICAgICBjb25zdCBtb250aCA9IHN0YXRlLmR1ZURhdGUuc3BsaXQoXCItXCIpWzFdO1xuICAgICAgY29uc3QgeWVhciA9IHN0YXRlLmR1ZURhdGUuc3BsaXQoXCItXCIpWzBdO1xuICAgICAgcmV0dXJuIGAke21vbnRofS8ke2RheX0vJHt5ZWFyfWA7XG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHV1aWQoKSB7XG4gIHJldHVybiAoWzFlN10gKyAtMWUzICsgLTRlMyArIC04ZTMgKyAtMWUxMSkucmVwbGFjZSgvWzAxOF0vZywgKGMpID0+XG4gICAgKFxuICAgICAgYyBeXG4gICAgICAoY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheSgxKSlbMF0gJiAoMTUgPj4gKGMgLyA0KSkpXG4gICAgKS50b1N0cmluZygxNilcbiAgKTtcbn1cbiIsImltcG9ydCB7IFRvRG9MaXN0IH0gZnJvbSBcIi4vdG8tZG8tbGlzdFwiO1xuaW1wb3J0IHtcbiAgYWRkTmV3UHJvamVjdCxcbiAgYWRkTmV3VGFzayxcbiAgbW9kYWxDbG9zZSxcbiAgbW9kYWxPcGVuLFxuICBsb2FkVGFza0NvbnRlbnQsXG4gIGxvYWRQcm9qZWN0c05hdixcbn0gZnJvbSBcIi4vdWlcIjtcbmV4cG9ydCBsZXQgdG9Eb0xpc3QgPSBUb0RvTGlzdDtcbi8vIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9Eb0xpc3RcIik7XG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b0RvTGlzdFwiKSkge1xuICBsZXQgc3RyaW5naWZ5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b0RvTGlzdFwiKTtcbiAgbGV0IHBhcnNlID0gSlNPTi5wYXJzZShzdHJpbmdpZnkpO1xuICBwYXJzZS5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgaWYgKHByb2plY3QuaWQgPT09IFwiaW5ib3hcIikge1xuICAgICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RJblRvRG8gPSB0b0RvTGlzdC5nZXRQcm9qZWN0KHRhc2sucHJvamVjdElkKTtcbiAgICAgICAgcHJvamVjdEluVG9Eby5hZGRUYXNrKFxuICAgICAgICAgIHRhc2sudGl0bGUsXG4gICAgICAgICAgdGFzay5kdWVEYXRlLFxuICAgICAgICAgIHRhc2suZGVzY3JpcHRpb24sXG4gICAgICAgICAgdGFzay5wcmlvcml0eSxcbiAgICAgICAgICB0YXNrLnN0YXR1c1xuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChwcm9qZWN0LmlkID09PSBcInRvZGF5XCIgfHwgcHJvamVjdC5pZCA9PT0gXCJ3ZWVrXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9Eb0xpc3QuYWRkUHJvamVjdChwcm9qZWN0Lm5hbWUsIHByb2plY3QuaWQpO1xuICAgIH1cbiAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RJblRvRG8gPSB0b0RvTGlzdC5nZXRQcm9qZWN0KHRhc2sucHJvamVjdElkKTtcbiAgICAgIHByb2plY3RJblRvRG8uYWRkVGFzayhcbiAgICAgICAgdGFzay50aXRsZSxcbiAgICAgICAgdGFzay5kdWVEYXRlLFxuICAgICAgICB0YXNrLmRlc2NyaXB0aW9uLFxuICAgICAgICB0YXNrLnByaW9yaXR5LFxuICAgICAgICB0YXNrLnN0YXR1c1xuICAgICAgKTtcbiAgICB9KTtcbiAgfSk7XG4gIHRvRG9MaXN0LndlZWtUYXNrKCk7XG4gIHRvRG9MaXN0LnRvZGF5VGFzaygpO1xuICBsb2FkUHJvamVjdHNOYXYoKTtcbiAgbG9hZFRhc2tDb250ZW50KFwiaW5ib3hcIik7XG59IGVsc2Uge1xuICBsb2FkVGFza0NvbnRlbnQoXCJpbmJveFwiKTtcbn1cbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRhc2tcIik7XG5jb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRQcm9qZWN0XCIpO1xuY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdFwiKTtcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlcIik7XG5jb25zdCBtb2RhbFN1Ym1pdEFkZFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tTdWJtaXRcIik7XG5jb25zdCBtb2RhbENhbmNlbFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbmNlbFRhc2tcIik7XG5jb25zdCBlZGl0U3VibWl0VGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdFN1Ym1pdFRhc2tcIik7XG5jb25zdCBtb2RhbFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKTtcbmNvbnN0IG1vZGFsRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpO1xuY29uc3QgbW9kYWxEdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlXCIpO1xuY29uc3QgbW9kYWxQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlcIik7XG5jb25zdCBmaXhlZFByb2plY3RCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5maXhlZEJ0bnNcIik7XG5hZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgY29uc3QgcHJvamVjdFN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdFN1Ym1pdFwiKTtcbiAgY29uc3QgY2FuY2VsUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsUHJvamVjdFwiKTtcbiAgY29uc3QgbmV3UHJvamVjdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0VGl0bGVcIik7XG4gIGNhbmNlbFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBuZXdQcm9qZWN0SW5wdXQudmFsdWUgPSBcIlwiO1xuICB9KTtcbiAgcHJvamVjdFN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKG5ld1Byb2plY3RJbnB1dC52YWx1ZSkge1xuICAgICAgYWRkTmV3UHJvamVjdChuZXdQcm9qZWN0SW5wdXQudmFsdWUpO1xuICAgICAgbmV3UHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgbmV3UHJvamVjdElucHV0LnZhbHVlID0gXCJcIjtcbiAgICB9XG4gIH0pO1xufSk7XG5tb2RhbENhbmNlbFRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbW9kYWxDbG9zZSgpO1xuICBtb2RhbFN1Ym1pdEFkZFRhc2suc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgZWRpdFN1Ym1pdFRhc2suc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufSk7XG5maXhlZFByb2plY3RCdXR0b25zLmZvckVhY2goKGJ0bikgPT4ge1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdElkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIpO1xuICAgIGFkZFRhc2tCdG4uc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIsIHByb2plY3RJZCk7XG4gICAgbG9hZFRhc2tDb250ZW50KHByb2plY3RJZCk7XG4gICAgbmV3UHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9KTtcbn0pO1xubW9kYWxTdWJtaXRBZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBjb25zdCBwcm9qZWN0SWQgPSBhZGRUYXNrQnRuLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiKTtcblxuICBpZiAobW9kYWxUaXRsZS52YWx1ZSkge1xuICAgIGFkZE5ld1Rhc2soXG4gICAgICBwcm9qZWN0SWQsXG4gICAgICBtb2RhbFRpdGxlLnZhbHVlLFxuICAgICAgbW9kYWxEdWVEYXRlLnZhbHVlLFxuICAgICAgbW9kYWxEZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgIG1vZGFsUHJpb3JpdHkudmFsdWVcbiAgICApO1xuXG4gICAgbW9kYWxDbG9zZSgpO1xuICB9XG59KTtcbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIG1vZGFsT3BlbigpO1xufSk7XG5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIG1vZGFsQ2xvc2UoKTtcbiAgbW9kYWxTdWJtaXRBZGRUYXNrLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIGVkaXRTdWJtaXRUYXNrLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pO1xuIiwiaW1wb3J0IHsgdG9Eb0xpc3QgfSBmcm9tIFwiLlwiO1xuXG5mdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcbiAgbGV0IHN0b3JhZ2U7XG4gIHRyeSB7XG4gICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICBsZXQgeCA9IFwiX19zdG9yYWdlX3Rlc3RfX1wiO1xuICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJlxuICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgKGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgZS5uYW1lID09PSBcIlF1b3RhRXhjZWVkZWRFcnJvclwiIHx8XG4gICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgZS5uYW1lID09PSBcIk5TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEXCIpICYmXG4gICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgc3RvcmFnZSAmJlxuICAgICAgc3RvcmFnZS5sZW5ndGggIT09IDBcbiAgICApO1xuICB9XG59XG5mdW5jdGlvbiBVcGRhdGVTdG9yYWdlKCkge1xuICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgIGxldCBzdHJpbmdpZnkgPSBKU09OLnN0cmluZ2lmeSh0b0RvTGlzdCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b0RvTGlzdFwiLCBzdHJpbmdpZnkpO1xuICB9XG59XG5leHBvcnQgeyBVcGRhdGVTdG9yYWdlIH07XG4iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vY3JlYXRlLXByb2plY3RzXCI7XG5cbmV4cG9ydCBjb25zdCBUb0RvTGlzdCA9IChmdW5jdGlvbiAoKSB7XG4gIGxldCBzdGF0ZSA9IHsgcHJvamVjdHM6IFtdIH07XG4gIHN0YXRlLnByb2plY3RzLnB1c2goUHJvamVjdChcIkluYm94XCIsIFwiaW5ib3hcIikpO1xuICBzdGF0ZS5wcm9qZWN0cy5wdXNoKFByb2plY3QoXCJUb2RheVwiLCBcInRvZGF5XCIpKTtcbiAgc3RhdGUucHJvamVjdHMucHVzaChQcm9qZWN0KFwiVGhpcyBXZWVrXCIsIFwid2Vla1wiKSk7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgcHJvamVjdHMoKSB7XG4gICAgICByZXR1cm4gWy4uLnN0YXRlLnByb2plY3RzXTtcbiAgICB9LFxuICAgIHNldCBwcm9qZWN0cyh2YWx1ZSkge1xuICAgICAgc3RhdGUucHJvamVjdHMgPSB2YWx1ZTtcbiAgICB9LFxuICAgIGFkZFByb2plY3QodmFsdWUsIHNwZWNpYWxJZCkge1xuICAgICAgc3RhdGUucHJvamVjdHMucHVzaChQcm9qZWN0KHZhbHVlLCBzcGVjaWFsSWQpKTtcbiAgICB9LFxuICAgIGdldFByb2plY3QodmFsdWUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSB2YWx1ZSk7XG4gICAgfSxcbiAgICBkZWxldGVQcm9qZWN0KHZhbHVlKSB7XG4gICAgICBjb25zdCBpbmRleFRvRGVsZXRlID0gc3RhdGUucHJvamVjdHMuaW5kZXhPZih0aGlzLmdldFByb2plY3QodmFsdWUpKTtcbiAgICAgIHN0YXRlLnByb2plY3RzLnNwbGljZShpbmRleFRvRGVsZXRlLCAxKTtcbiAgICB9LFxuICAgIHdlZWtUYXNrKCkge1xuICAgICAgc3RhdGUucHJvamVjdHNbMl0udGFza3MgPSBbXTtcbiAgICAgIHN0YXRlLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgaWYgKHByb2plY3QuaWQgPT09IFwidG9kYXlcIiB8fCBwcm9qZWN0LmlkID09PSBcIndlZWtcIikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCB3ZWVrVGFza3MgPSBwcm9qZWN0LmdldFRoaXNXZWVrVGFza3MoKTtcbiAgICAgICAgICB3ZWVrVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgc3RhdGUucHJvamVjdHNbMl0udGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICB0b2RheVRhc2soKSB7XG4gICAgICBzdGF0ZS5wcm9qZWN0c1sxXS50YXNrcyA9IFtdO1xuICAgICAgY29uc3QgdG9kYXlUYXNrcyA9IHN0YXRlLnByb2plY3RzWzJdLmdldFRvZGF5VGFza3MoKTtcblxuICAgICAgdG9kYXlUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIHN0YXRlLnByb2plY3RzWzFdLnRhc2tzLnB1c2godGFzayk7XG4gICAgICB9KTtcbiAgICB9LFxuICB9O1xufSkoKTtcbiIsImltcG9ydCB7IFVwZGF0ZVN0b3JhZ2UgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQgeyB0b0RvTGlzdCB9IGZyb20gXCIuXCI7XG5jb25zdCBwcm9qZWN0TmF2Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWNvbnRhaW5lclwiKTtcbmNvbnN0IHRhc2tDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWNvbnRhaW5lclwiKTtcbmNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaGVhZGVyXCIpO1xuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza1wiKTtcbmNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RcIik7XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza1wiKTtcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlcIik7XG5jb25zdCBtb2RhbFN1Ym1pdEFkZFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tTdWJtaXRcIik7XG5jb25zdCBlZGl0U3VibWl0VGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdFN1Ym1pdFRhc2tcIik7XG5jb25zdCBtb2RhbFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKTtcbmNvbnN0IG1vZGFsRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpO1xuY29uc3QgbW9kYWxEdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlXCIpO1xuY29uc3QgbW9kYWxQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlcIik7XG5cbmZ1bmN0aW9uIG1vZGFsT3BlbigpIHtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuZnVuY3Rpb24gbW9kYWxDbG9zZSgpIHtcbiAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICBtb2RhbFRpdGxlLnZhbHVlID0gXCJcIjtcbiAgbW9kYWxEdWVEYXRlLnZhbHVlID0gXCJcIjtcbiAgbW9kYWxEZXNjcmlwdGlvbi52YWx1ZSA9IFwiXCI7XG4gIG1vZGFsUHJpb3JpdHkudmFsdWUgPSBcIkxvd1wiO1xuICBtb2RhbFN1Ym1pdEFkZFRhc2suc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgZWRpdFN1Ym1pdFRhc2suc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBtb2RhbEVkaXRPbigpO1xufVxuZnVuY3Rpb24gbW9kYWxFZGl0T24oKSB7XG4gIG1vZGFsVGl0bGUuZGlzYWJsZWQgPSBmYWxzZTtcbiAgbW9kYWxEZXNjcmlwdGlvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICBtb2RhbER1ZURhdGUuZGlzYWJsZWQgPSBmYWxzZTtcbiAgbW9kYWxQcmlvcml0eS5kaXNhYmxlZCA9IGZhbHNlO1xuICBtb2RhbFN1Ym1pdEFkZFRhc2suZGlzYWJsZWQgPSBmYWxzZTtcbn1cbmZ1bmN0aW9uIG1vZGFsRWRpdE9mZigpIHtcbiAgbW9kYWxUaXRsZS5kaXNhYmxlZCA9IHRydWU7XG4gIG1vZGFsRGVzY3JpcHRpb24uZGlzYWJsZWQgPSB0cnVlO1xuICBtb2RhbER1ZURhdGUuZGlzYWJsZWQgPSB0cnVlO1xuICBtb2RhbFByaW9yaXR5LmRpc2FibGVkID0gdHJ1ZTtcbiAgbW9kYWxTdWJtaXRBZGRUYXNrLmRpc2FibGVkID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFzayhwcm9qZWN0SWQsIHRhc2tJZCkge1xuICBjb25zdCBwcm9qZWN0ID0gdG9Eb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0SWQpO1xuICBwcm9qZWN0LmRlbGV0ZVRhc2sodGFza0lkKTtcbiAgdG9Eb0xpc3Qud2Vla1Rhc2soKTtcbiAgdG9Eb0xpc3QudG9kYXlUYXNrKCk7XG4gIGxvYWRUYXNrQ29udGVudChwcm9qZWN0SWQpO1xuICBVcGRhdGVTdG9yYWdlKCk7XG59XG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3RJZCkge1xuICB0b0RvTGlzdC5kZWxldGVQcm9qZWN0KHByb2plY3RJZCk7XG4gIHByb2plY3ROYXZDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgbG9hZFByb2plY3RzTmF2KCk7XG4gIFVwZGF0ZVN0b3JhZ2UoKTtcbn1cbmZ1bmN0aW9uIGFkZE5ld1Rhc2socHJvamVjdElkLCAuLi5kZXRhaWxzKSB7XG4gIHRhc2tDb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbnN0IHByb2plY3QgPSB0b0RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3RJZCk7XG4gIHByb2plY3QuYWRkVGFzayguLi5kZXRhaWxzKTtcbiAgdG9Eb0xpc3Qud2Vla1Rhc2soKTtcbiAgdG9Eb0xpc3QudG9kYXlUYXNrKCk7XG4gIGxvYWRUYXNrQ29udGVudChwcm9qZWN0SWQpO1xuICBVcGRhdGVTdG9yYWdlKCk7XG59XG5mdW5jdGlvbiBsb2FkVGFza0NvbnRlbnQocHJvamVjdElkKSB7XG4gIGNvbnN0IHByb2plY3QgPSB0b0RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3RJZCk7XG4gIGlmICghcHJvamVjdCkge1xuICAgIHJldHVybjtcbiAgfVxuICBwcm9qZWN0SGVhZGVyLnRleHRDb250ZW50ID0gYCR7cHJvamVjdC5uYW1lfWA7XG4gIGNvbnN0IHRhc2tzID0gcHJvamVjdC50YXNrcztcbiAgdGFza0NvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIHJlbmRlclRhc2tDb250ZW50KHRhc2spO1xuICB9KTtcbn1cbmZ1bmN0aW9uIG9wZW5EZXRhaWxUYXNrKCkge1xuICBjb25zdCBwcm9qZWN0SWQgPSB0aXRsZURpdi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIik7XG4gIGNvbnN0IHRhc2tJZCA9IHRpdGxlRGl2LmdldEF0dHJpYnV0ZShcImRhdGEtdGFzay1pZFwiKTtcbiAgY29uc3QgcHJvamVjdCA9IHRvRG9MaXN0LmdldFByb2plY3QocHJvamVjdElkKTtcbiAgY29uc3QgdGFzayA9IHByb2plY3QuZ2V0VGFzayh0YXNrSWQpO1xuICBtb2RhbFRpdGxlLnZhbHVlID0gdGFzay50aXRsZTtcbiAgbW9kYWxEZXNjcmlwdGlvbi52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XG4gIG1vZGFsRHVlRGF0ZS52YWx1ZSA9IHRhc2suZHVlRGF0ZTtcbiAgbW9kYWxQcmlvcml0eS52YWx1ZSA9IHRhc2sucHJpb3JpdHk7XG4gIG1vZGFsRWRpdE9mZigpO1xuICBtb2RhbE9wZW4oKTtcbn1cbmZ1bmN0aW9uIHJlbmRlclRhc2tDb250ZW50KHRhc2spIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza0J1dHRvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrQnV0dG9uc0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFza0J1dHRvbnNcIik7XG4gIGNvbnN0IGRldGFpbHNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGV0YWlsc0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2tEZXRhaWxzXCIpO1xuICBlZGl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdERldGFpbHNcIik7XG4gIGRldGFpbHNCdXR0b24udGV4dENvbnRlbnQgPSBcIkRldGFpbHNcIjtcbiAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICB0YXNrQnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcbiAgdGFza0J1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoZGV0YWlsc0J1dHRvbik7XG4gIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQodGFzay5wcmlvcml0eSk7XG4gIGRldGFpbHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0SWQgPSB0aXRsZURpdi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIik7XG4gICAgY29uc3QgdGFza0lkID0gdGl0bGVEaXYuZ2V0QXR0cmlidXRlKFwiZGF0YS10YXNrLWlkXCIpO1xuICAgIGNvbnN0IHByb2plY3QgPSB0b0RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgY29uc3QgdGFzayA9IHByb2plY3QuZ2V0VGFzayh0YXNrSWQpO1xuICAgIG1vZGFsVGl0bGUudmFsdWUgPSB0YXNrLnRpdGxlO1xuICAgIG1vZGFsRGVzY3JpcHRpb24udmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgIG1vZGFsRHVlRGF0ZS52YWx1ZSA9IHRhc2suZHVlRGF0ZTtcbiAgICBtb2RhbFByaW9yaXR5LnZhbHVlID0gdGFzay5wcmlvcml0eTtcbiAgICBtb2RhbEVkaXRPZmYoKTtcbiAgICBtb2RhbE9wZW4oKTtcbiAgfSk7XG4gIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0SWQgPSB0aXRsZURpdi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIik7XG4gICAgY29uc3QgdGFza0lkID0gdGl0bGVEaXYuZ2V0QXR0cmlidXRlKFwiZGF0YS10YXNrLWlkXCIpO1xuICAgIGNvbnN0IHByb2plY3QgPSB0b0RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgY29uc3QgdGFzayA9IHByb2plY3QuZ2V0VGFzayh0YXNrSWQpO1xuICAgIG1vZGFsVGl0bGUudmFsdWUgPSB0YXNrLnRpdGxlO1xuICAgIG1vZGFsRGVzY3JpcHRpb24udmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgIG1vZGFsRHVlRGF0ZS52YWx1ZSA9IHRhc2suZHVlRGF0ZTtcbiAgICBtb2RhbFByaW9yaXR5LnZhbHVlID0gdGFzay5wcmlvcml0eTtcbiAgICBtb2RhbEVkaXRPZmYoKTtcbiAgICBtb2RhbE9wZW4oKTtcbiAgICBtb2RhbEVkaXRPbigpO1xuICAgIG1vZGFsU3VibWl0QWRkVGFzay5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZWRpdFN1Ym1pdFRhc2suc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBlZGl0U3VibWl0VGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKG1vZGFsVGl0bGUudmFsdWUpIHtcbiAgICAgICAgcHJvamVjdC5kZWxldGVUYXNrKHRhc2tJZCk7XG4gICAgICAgIGFkZE5ld1Rhc2soXG4gICAgICAgICAgcHJvamVjdElkLFxuICAgICAgICAgIG1vZGFsVGl0bGUudmFsdWUsXG4gICAgICAgICAgbW9kYWxEdWVEYXRlLnZhbHVlLFxuICAgICAgICAgIG1vZGFsRGVzY3JpcHRpb24udmFsdWUsXG4gICAgICAgICAgbW9kYWxQcmlvcml0eS52YWx1ZVxuICAgICAgICApO1xuXG4gICAgICAgIG1vZGFsQ2xvc2UoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIGNvbnN0IGRhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RJZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiKTtcbiAgICBjb25zdCB0YXNrSWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2staWRcIik7XG4gICAgZGVsZXRlVGFzayhwcm9qZWN0SWQsIHRhc2tJZCk7XG4gIH0pO1xuICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaWYgKHRhc2suc3RhdHVzKSB7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJkb25lXCIpO1xuICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICB9XG4gIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiZG9uZVwiKTtcbiAgICAgIHRhc2sudG9nZ2xlU3RhdHVzKCk7XG4gICAgICBVcGRhdGVTdG9yYWdlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwiZG9uZVwiKTtcbiAgICAgIHRhc2sudG9nZ2xlU3RhdHVzKCk7XG4gICAgICBVcGRhdGVTdG9yYWdlKCk7XG4gICAgfVxuICB9KTtcbiAgY2xvc2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjbG9zZVwiKTtcbiAgZGl2LnNldEF0dHJpYnV0ZShcImRhdGEtdGFzay1pZFwiLCBgJHt0YXNrLmlkfWApO1xuICB0aXRsZURpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2staWRcIiwgYCR7dGFzay5pZH1gKTtcbiAgZGF0ZURpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2staWRcIiwgYCR7dGFzay5pZH1gKTtcbiAgY2xvc2Uuc2V0QXR0cmlidXRlKFwiZGF0YS10YXNrLWlkXCIsIGAke3Rhc2suaWR9YCk7XG4gIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcImRhdGEtdGFzay1pZFwiLCBgJHt0YXNrLmlkfWApO1xuICBkaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIsIGAke3Rhc2sucHJvamVjdElkfWApO1xuICB0aXRsZURpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIiwgYCR7dGFzay5wcm9qZWN0SWR9YCk7XG4gIGRhdGVEaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIsIGAke3Rhc2sucHJvamVjdElkfWApO1xuICBjbG9zZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIiwgYCR7dGFzay5wcm9qZWN0SWR9YCk7XG4gIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcImRhdGUtcHJvamVjdC1pZFwiLCBgJHt0YXNrLnByb2plY3RJZH1gKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKFwidGFzay10aXRsZVwiKTtcbiAgdGl0bGVEaXYudGV4dENvbnRlbnQgPSBgJHt0YXNrLnRpdGxlfWA7XG4gIGlmICh0YXNrLnN0YXR1cykge1xuICAgIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJkb25lXCIpO1xuICB9XG4gIGRhdGVEaXYudGV4dENvbnRlbnQgPSBgJHt0YXNrLmR1ZURhdGV9YDtcbiAgZGF0ZURpdi5jbGFzc0xpc3QuYWRkKFwiZHVlZGF0ZVwiKTtcbiAgY2xvc2Uuc3JjID0gXCIuL2ljb25zL2Nsb3NlLnN2Z1wiO1xuICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFza3N0YXR1c1wiKTtcbiAgZGl2LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgZGl2LmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcbiAgZGl2LmFwcGVuZENoaWxkKGRhdGVEaXYpO1xuICBkaXYuYXBwZW5kQ2hpbGQodGFza0J1dHRvbnNEaXYpO1xuICBkaXYuYXBwZW5kQ2hpbGQoY2xvc2UpO1xuICB0YXNrQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xufVxuXG5mdW5jdGlvbiBhZGROZXdQcm9qZWN0KG5hbWUpIHtcbiAgcHJvamVjdE5hdkNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICB0b0RvTGlzdC5hZGRQcm9qZWN0KG5hbWUpO1xuICBsb2FkUHJvamVjdHNOYXYoKTtcbiAgVXBkYXRlU3RvcmFnZSgpO1xufVxuZnVuY3Rpb24gbG9hZFByb2plY3RzTmF2KCkge1xuICB0b0RvTGlzdC5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgcmVuZGVyUHJvamVjdE5hdihwcm9qZWN0KTtcbiAgfSk7XG59XG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0TmF2KHByb2plY3QpIHtcbiAgaWYgKHByb2plY3QuaWQgPT09IFwiaW5ib3hcIiB8fCBwcm9qZWN0LmlkID09PSBcInRvZGF5XCIgfHwgcHJvamVjdC5pZCA9PT0gXCJ3ZWVrXCIpXG4gICAgcmV0dXJuO1xuICBlbHNlIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdElkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIpO1xuICAgICAgZGVsZXRlUHJvamVjdChwcm9qZWN0SWQpO1xuICAgICAgbG9hZFRhc2tDb250ZW50KFwiaW5ib3hcIik7XG4gICAgICBhZGRUYXNrQnRuLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiLCBcImluYm94XCIpO1xuICAgIH0pO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RJZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiKTtcbiAgICAgIGlmICh0b0RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3RJZCkpIHtcbiAgICAgICAgYWRkVGFza0J0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIiwgcHJvamVjdElkKTtcbiAgICAgICAgbG9hZFRhc2tDb250ZW50KHByb2plY3RJZCk7XG4gICAgICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgICBpbWcuc3JjID0gXCIuL2ljb25zL2NhbGVuZGFyLW11bHRpcGxlLWNoZWNrLnN2Z1wiO1xuICAgIGNsb3NlLnNyYyA9IFwiLi9pY29ucy9jbG9zZS5zdmdcIjtcbiAgICBjbG9zZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIiwgYCR7cHJvamVjdC5pZH1gKTtcbiAgICBpbWcuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIsIGAke3Byb2plY3QuaWR9YCk7XG4gICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIiwgYCR7cHJvamVjdC5pZH1gKTtcblxuICAgIGJ1dHRvbi5hcHBlbmQoaW1nKTtcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgIHRleHQuY2xhc3NMaXN0LmFkZChcInRleHRcIik7XG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChjbG9zZSk7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiLCBgJHtwcm9qZWN0LmlkfWApO1xuICAgIHByb2plY3ROYXZDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgfVxufVxuZXhwb3J0IHtcbiAgbG9hZFByb2plY3RzTmF2LFxuICBhZGROZXdQcm9qZWN0LFxuICBhZGROZXdUYXNrLFxuICBtb2RhbE9wZW4sXG4gIG1vZGFsQ2xvc2UsXG4gIGxvYWRUYXNrQ29udGVudCxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9