module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/speakers.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/speakers.js":
/*!***************************!*\
  !*** ./pages/speakers.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/Header/Header */ \"./src/components/Header/Header.js\");\n/* harmony import */ var _src_components_Menu_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Menu/Menu */ \"./src/components/Menu/Menu.js\");\n/* harmony import */ var _src_components_SpeakerSearchBar_SpeakerSearchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/SpeakerSearchBar/SpeakerSearchBar */ \"./src/components/SpeakerSearchBar/SpeakerSearchBar.js\");\n/* harmony import */ var _src_components_Speakers_Speakers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Speakers/Speakers */ \"./src/components/Speakers/Speakers.js\");\n/* harmony import */ var _src_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Footer/Footer */ \"./src/components/Footer/Footer.js\");\n\nvar _jsxFileName = \"/Users/jordonrheeder/Documents/project/React/pages/speakers.js\";\n\n\n\n\n\n\nfunction Page() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_Menu_Menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_SpeakerSearchBar_SpeakerSearchBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_Speakers_Speakers__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zcGVha2Vycy5qcz9lYjU5Il0sIm5hbWVzIjpbIlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsR0FBZ0I7QUFDWixzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQUdJLHFFQUFDLHlGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixlQUlJLHFFQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixlQUtJLHFFQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVNIOztBQUNjQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3NwZWFrZXJzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclwiO1xuaW1wb3J0IE1lbnUgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL01lbnUvTWVudVwiXG5pbXBvcnQgU2VhcmNoYmFyIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9TcGVha2VyU2VhcmNoQmFyL1NwZWFrZXJTZWFyY2hCYXJcIlxuaW1wb3J0IFNwZWFrZXJzIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9TcGVha2Vycy9TcGVha2Vyc1wiXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyXCJcblxuZnVuY3Rpb24gUGFnZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgPE1lbnUgLz5cbiAgICAgICAgICAgIDxTZWFyY2hiYXIgLz5cbiAgICAgICAgICAgIDxTcGVha2VycyAvPlxuICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuZXhwb3J0IGRlZmF1bHQgUGFnZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/speakers.js\n");

/***/ }),

/***/ "./src/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/jordonrheeder/Documents/project/React/pages/src/components/Footer/Footer.js\";\n\n\nconst Footer = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n  src: \"images/footer.png\"\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 3,\n  columnNumber: 22\n}, undefined);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzPzNhNDEiXSwibmFtZXMiOlsiRm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLG1CQUFNO0FBQUssS0FBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFyQjs7QUFFZUEscUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgRm9vdGVyID0gKCkgPT4gPGltZyBzcmM9J2ltYWdlcy9mb290ZXIucG5nJyAvPjtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Footer/Footer.js\n");

/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/jordonrheeder/Documents/project/React/pages/src/components/Header/Header.js\";\n\n\nconst Header = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n  src: \"images/header.png\"\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 3,\n  columnNumber: 22\n}, undefined);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzPzdhMmIiXSwibmFtZXMiOlsiSGVhZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLG1CQUFNO0FBQUssS0FBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFyQjs7QUFFZUEscUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSGVhZGVyID0gKCkgPT4gPGltZyBzcmM9J2ltYWdlcy9oZWFkZXIucG5nJyAvPjtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Header/Header.js\n");

/***/ }),

/***/ "./src/components/Menu/Menu.js":
/*!*************************************!*\
  !*** ./src/components/Menu/Menu.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/jordonrheeder/Documents/project/React/pages/src/components/Menu/Menu.js\";\n\n\nconst Menu = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n  src: \"images/menu.gif\"\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 3,\n  columnNumber: 20\n}, undefined);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zcmMvY29tcG9uZW50cy9NZW51L01lbnUuanM/YmYyMCJdLCJuYW1lcyI6WyJNZW51Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLG1CQUFNO0FBQUssS0FBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFuQjs7QUFFZUEsbUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NZW51L01lbnUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBNZW51ID0gKCkgPT4gPGltZyBzcmM9J2ltYWdlcy9tZW51LmdpZicgLz47XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Menu/Menu.js\n");

/***/ }),

/***/ "./src/components/SpeakerSearchBar/SpeakerSearchBar.js":
/*!*************************************************************!*\
  !*** ./src/components/SpeakerSearchBar/SpeakerSearchBar.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/jordonrheeder/Documents/project/React/pages/src/components/SpeakerSearchBar/SpeakerSearchBar.js\";\n\n\nconst SpeakerSearchBar = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n  src: \"images/searchbar.gif\"\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 3,\n  columnNumber: 32\n}, undefined);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakerSearchBar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zcmMvY29tcG9uZW50cy9TcGVha2VyU2VhcmNoQmFyL1NwZWFrZXJTZWFyY2hCYXIuanM/M2I0NiJdLCJuYW1lcyI6WyJTcGVha2VyU2VhcmNoQmFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsZ0JBQWdCLEdBQUcsbUJBQU07QUFBSyxLQUFHLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQS9COztBQUVlQSwrRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1NwZWFrZXJTZWFyY2hCYXIvU3BlYWtlclNlYXJjaEJhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFNwZWFrZXJTZWFyY2hCYXIgPSAoKSA9PiA8aW1nIHNyYz0naW1hZ2VzL3NlYXJjaGJhci5naWYnIC8+O1xuXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyU2VhcmNoQmFyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SpeakerSearchBar/SpeakerSearchBar.js\n");

/***/ }),

/***/ "./src/components/Speakers/Speakers.js":
/*!*********************************************!*\
  !*** ./src/components/Speakers/Speakers.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SpeakersRenderProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpeakersRenderProps */ \"./src/components/Speakers/SpeakersRenderProps.js\");\n\nvar _jsxFileName = \"/Users/jordonrheeder/Documents/project/React/src/components/Speakers/Speakers.js\";\n\n\n\nconst Speakers = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SpeakersRenderProps__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    children: ({\n      speakers\n    }) => {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: speakers.map(({\n          imageSrc,\n          name\n        }) => {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: `images/${imageSrc}.png`,\n            alt: name\n          }, imageSrc, false, {\n            fileName: _jsxFileName,\n            lineNumber: 12,\n            columnNumber: 36\n          }, undefined);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 21\n      }, undefined);\n    }\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speakers);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TcGVha2Vycy9TcGVha2Vycy5qcz8wYmVjIl0sIm5hbWVzIjpbIlNwZWFrZXJzIiwic3BlYWtlcnMiLCJtYXAiLCJpbWFnZVNyYyIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsTUFBTTtBQUVuQixzQkFDSSxxRUFBQyw0REFBRDtBQUFBLGNBQ0ssQ0FBQztBQUFDQztBQUFELEtBQUQsS0FBZ0I7QUFDYiwwQkFDSTtBQUFBLGtCQUNLQSxRQUFRLENBQUNDLEdBQVQsQ0FBYSxDQUFDO0FBQUNDLGtCQUFEO0FBQVlDO0FBQVosU0FBRCxLQUF1QjtBQUNqQyw4QkFBTztBQUFLLGVBQUcsRUFBRyxVQUFTRCxRQUFTLE1BQTdCO0FBQ0gsZUFBRyxFQUFFQztBQURGLGFBQ2FELFFBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBUDtBQUVILFNBSEE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKO0FBUUg7QUFWTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFjSCxDQWhCRDs7QUFrQmVILHVFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvU3BlYWtlcnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNwZWFrZXJzUmVuZGVyUHJvcHMgZnJvbSAnLi9TcGVha2Vyc1JlbmRlclByb3BzJztcblxuY29uc3QgU3BlYWtlcnMgPSAoKSA9PiB7XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFNwZWFrZXJzUmVuZGVyUHJvcHM+XG4gICAgICAgICAgICB7KHtzcGVha2Vyc30pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge3NwZWFrZXJzLm1hcCgoe2ltYWdlU3JjLCAgbmFtZX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGltZyBzcmM9e2BpbWFnZXMvJHtpbWFnZVNyY30ucG5nYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtuYW1lfSBrZXk9e2ltYWdlU3JjfT48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgPC9TcGVha2Vyc1JlbmRlclByb3BzPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyczsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Speakers/Speakers.js\n");

/***/ }),

/***/ "./src/components/Speakers/SpeakersRenderProps.js":
/*!********************************************************!*\
  !*** ./src/components/Speakers/SpeakersRenderProps.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction SpeakersRenderProps(props) {\n  const speakers = [{\n    imageSrc: 'speaker-component-1124',\n    name: 'Douglas Crockford'\n  }, {\n    imageSrc: 'speaker-component-1530',\n    name: 'Tamara Baker'\n  }, {\n    imageSrc: 'speaker-component-10803',\n    name: 'Eugene Chuvyrov'\n  }];\n  return props.children({\n    speakers: speakers\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersRenderProps);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TcGVha2Vycy9TcGVha2Vyc1JlbmRlclByb3BzLmpzP2MyMDIiXSwibmFtZXMiOlsiU3BlYWtlcnNSZW5kZXJQcm9wcyIsInByb3BzIiwic3BlYWtlcnMiLCJpbWFnZVNyYyIsIm5hbWUiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxTQUFTQSxtQkFBVCxDQUE2QkMsS0FBN0IsRUFBb0M7QUFDaEMsUUFBTUMsUUFBUSxHQUFHLENBQ2I7QUFDSUMsWUFBUSxFQUFFLHdCQURkO0FBRUlDLFFBQUksRUFBRTtBQUZWLEdBRGEsRUFLYjtBQUNJRCxZQUFRLEVBQUUsd0JBRGQ7QUFFSUMsUUFBSSxFQUFFO0FBRlYsR0FMYSxFQVNiO0FBQ0lELFlBQVEsRUFBRSx5QkFEZDtBQUVJQyxRQUFJLEVBQUU7QUFGVixHQVRhLENBQWpCO0FBY0EsU0FBT0gsS0FBSyxDQUFDSSxRQUFOLENBQWU7QUFDbEJILFlBQVEsRUFBRUE7QUFEUSxHQUFmLENBQVA7QUFHSDs7QUFFY0Ysa0ZBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vycy9TcGVha2Vyc1JlbmRlclByb3BzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gU3BlYWtlcnNSZW5kZXJQcm9wcyhwcm9wcykge1xuICAgIGNvbnN0IHNwZWFrZXJzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBpbWFnZVNyYzogJ3NwZWFrZXItY29tcG9uZW50LTExMjQnLFxuICAgICAgICAgICAgbmFtZTogJ0RvdWdsYXMgQ3JvY2tmb3JkJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpbWFnZVNyYzogJ3NwZWFrZXItY29tcG9uZW50LTE1MzAnLFxuICAgICAgICAgICAgbmFtZTogJ1RhbWFyYSBCYWtlcidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaW1hZ2VTcmM6ICdzcGVha2VyLWNvbXBvbmVudC0xMDgwMycsXG4gICAgICAgICAgICBuYW1lOiAnRXVnZW5lIENodXZ5cm92J1xuICAgICAgICB9XG4gICAgXTtcbiAgICByZXR1cm4gcHJvcHMuY2hpbGRyZW4oe1xuICAgICAgICBzcGVha2Vyczogc3BlYWtlcnNcbiAgICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnNSZW5kZXJQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Speakers/SpeakersRenderProps.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });