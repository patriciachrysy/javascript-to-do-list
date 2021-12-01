/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const toDoTasks = [\n    {\n        description: \"Example task zero\",\n        completed: false,\n        index: 0\n    },\n    {\n        description: \"Example task five\",\n        completed: false,\n        index: 5\n    },\n    {\n        description: \"Example task one\",\n        completed: false,\n        index: 1\n    },\n    {\n        description: \"Example task eight\",\n        completed: false,\n        index: 8\n    }\n]\n\nconst listTasks = () => {\n    let sortedTasks = toDoTasks.sort((a, b) => {return a.index > b.index});\n    let htmlSortedTasks = [];\n\n    for(const task of sortedTasks) {\n        const div = document.createElement('div');\n        div.innerText = task.description;\n        htmlSortedTasks.push(div);\n    }\n\n    return htmlSortedTasks;\n}\n\nwindow.onload = () => {\n    const placeholder = document.querySelector('#to-do-list');\n    for(const element of listTasks()) {\n        placeholder.appendChild(element);\n    }\n};\n\n//# sourceURL=webpack://javascript-to-do-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;