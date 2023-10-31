/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/addClass.js":
/*!****************************!*\
  !*** ./src/js/addClass.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction addClass(element,nameClass) {\n  if(!element.style.display) {\n    element.classList.toggle(nameClass);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addClass);\n\n//# sourceURL=webpack://salonstylebrazil/./src/js/addClass.js?");

/***/ }),

/***/ "./src/js/classList.js":
/*!*****************************!*\
  !*** ./src/js/classList.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addClass */ \"./src/js/addClass.js\");\n/* harmony import */ var _removeClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeClass */ \"./src/js/removeClass.js\");\n\n\n\nconst buttons = document.querySelectorAll('.services__buttonRead');\nconst services = document.querySelectorAll('.services__readMore');\nconst overlay = document.querySelector('.overlay');\nconst body = document.querySelector('body');\nconst newImage = document.createElement('img');\n\nfunction classList() {\n  buttons.forEach((button,index) => {\n    button.addEventListener('click',() => {\n      (0,_addClass__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(services[index],'block');\n      body.classList.add('scrollNone');\n      overlay.classList.add('block');\n    })\n  })\n  \n  document.querySelectorAll('.content__image').forEach((image) => {\n    image.addEventListener('click',(event) => {\n      newImage.classList.add('activeImage');\n      newImage.classList.add('activeImageEffect');\n      newImage.src = event.target.src;\n      body.appendChild(newImage);\n      body.classList.add('scrollNone');\n      overlay.classList.add('block');\n    })\n  })\n\n  overlay.addEventListener('click', () => {\n    services.forEach((service) => {\n      ;(0,_removeClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(service,overlay,body);\n    })\n    newImage.remove();\n  })  \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (classList);\n\n//# sourceURL=webpack://salonstylebrazil/./src/js/classList.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classList */ \"./src/js/classList.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/js/menu.js\");\n\n\n\n(0,_classList__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://salonstylebrazil/./src/js/index.js?");

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menuMobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuMobile */ \"./src/js/menuMobile.js\");\n\n\n(0,_menuMobile__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://salonstylebrazil/./src/js/menu.js?");

/***/ }),

/***/ "./src/js/menuMobile.js":
/*!******************************!*\
  !*** ./src/js/menuMobile.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addClass */ \"./src/js/addClass.js\");\n/* harmony import */ var _removeClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeClass */ \"./src/js/removeClass.js\");\n\n\n\nlet navigation = document.querySelector('.navigation');\nlet body = document.querySelector('body');\nlet menuBack = document.querySelector('.menuBack');\n\nfunction menuMobile() {\n  document.querySelector('.header__buttonMenu').addEventListener('click',() => {\n    (0,_addClass__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(navigation,'flex');\n    (0,_addClass__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(body,'scrollNone');\n    (0,_addClass__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuBack,'block');\n  })\n  \n  menuBack.addEventListener('click',() => {\n    ;(0,_removeClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(menuBack);\n    (0,_removeClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(navigation);\n    (0,_removeClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(body);\n  })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuMobile);\n\n//# sourceURL=webpack://salonstylebrazil/./src/js/menuMobile.js?");

/***/ }),

/***/ "./src/js/removeClass.js":
/*!*******************************!*\
  !*** ./src/js/removeClass.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ removeClass)\n/* harmony export */ });\nfunction removeClass(...elements) {\n  elements.forEach((element) => {\n    element.classList.remove('block');\n    element.classList.remove('scrollNone');\n    element.classList.remove('activeImage');\n    element.classList.remove('flex');\n  })\n}\n\n//# sourceURL=webpack://salonstylebrazil/./src/js/removeClass.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;