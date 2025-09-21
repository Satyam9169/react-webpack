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

/***/ "./src/add-image.js":
/*!**************************!*\
  !*** ./src/add-image.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _javascript_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./javascript.jpg */ \"./src/javascript.jpg\");\n/* harmony import */ var _altText_txt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./altText.txt */ \"./src/altText.txt\");\n\n\nfunction addImage() {\n  var img = document.createElement(\"img\");\n  // img.alt = \"javascript\";\n  img.alt = _altText_txt__WEBPACK_IMPORTED_MODULE_1__;\n  img.width = 300;\n  img.src = _javascript_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  var body = document.querySelector(\"body\");\n  body.appendChild(img);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addImage);\n\n//# sourceURL=webpack://webpack5/./src/add-image.js?\n}");

/***/ }),

/***/ "./src/altText.txt":
/*!*************************!*\
  !*** ./src/altText.txt ***!
  \*************************/
/***/ ((module) => {

eval("{module.exports = \"javascript from image\";\n\n//# sourceURL=webpack://webpack5/./src/altText.txt?\n}");

/***/ }),

/***/ "./src/components/Hello-world-button/hello-world-button.js":
/*!*****************************************************************!*\
  !*** ./src/components/Hello-world-button/hello-world-button.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar HelloWorldButton = /*#__PURE__*/function () {\n  function HelloWorldButton() {\n    _classCallCheck(this, HelloWorldButton);\n  }\n  return _createClass(HelloWorldButton, [{\n    key: \"render\",\n    value: function render() {\n      var button = document.createElement(\"button\");\n      button.innerHTML = \"click Here\";\n      var body = document.querySelector(\"body\");\n      button.onclick = function () {\n        var p = document.createElement('p');\n        p.innerHTML = 'This is button paragraph';\n        // const body = document.querySelector('p');\n        body.appendChild(p);\n        console.log(p);\n      };\n      body.appendChild(button);\n    }\n  }]);\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HelloWorldButton);\n\n//# sourceURL=webpack://webpack5/./src/components/Hello-world-button/hello-world-button.js?\n}");

/***/ }),

/***/ "./src/fruits.js":
/*!***********************!*\
  !*** ./src/fruits.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fruits: () => (/* binding */ fruits)\n/* harmony export */ });\nvar fruits = [\"govaya\", \"apple\", \"mango\", \"banana\", \"graps\"];\n\n//# sourceURL=webpack://webpack5/./src/fruits.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Hello_world_button_hello_world_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Hello-world-button/hello-world-button.js */ \"./src/components/Hello-world-button/hello-world-button.js\");\n/* harmony import */ var _add_image_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-image.js */ \"./src/add-image.js\");\n/* harmony import */ var _fruits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fruits.js */ \"./src/fruits.js\");\n\n\n\n\n// helloWorld();\n// addImage();\nconsole.log(_fruits_js__WEBPACK_IMPORTED_MODULE_2__.fruits);\nvar newButton = new _components_Hello_world_button_hello_world_button_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nnewButton.render();\n\n//# sourceURL=webpack://webpack5/./src/index.js?\n}");

/***/ }),

/***/ "./src/javascript.jpg":
/*!****************************!*\
  !*** ./src/javascript.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"42a93aef1a03d3d8756c.jpg\";\n\n//# sourceURL=webpack://webpack5/./src/javascript.jpg?\n}");

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "dist/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;