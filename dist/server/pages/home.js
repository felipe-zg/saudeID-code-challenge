"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/home";
exports.ids = ["pages/home"];
exports.modules = {

/***/ "./pages/home/index.tsx":
/*!******************************!*\
  !*** ./pages/home/index.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_ducks_todos_duck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/ducks/todos.duck */ \"./store/ducks/todos.duck.ts\");\n\n\n\n\nconst Home = ()=>{\n    const { todos  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_store_ducks_todos_duck__WEBPACK_IMPORTED_MODULE_3__.selectTodosState);\n    console.log(todos);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n        __source: {\n            fileName: \"/Users/felipezeba/Desktop/development/SaudeID/saudeid-code-challenge/src/pages/home/index.tsx\",\n            lineNumber: 9,\n            columnNumber: 9\n        },\n        __self: undefined,\n        children: \"Home page\"\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUI7QUFDZ0I7QUFDc0I7QUFFL0QsS0FBSyxDQUFDRyxJQUFJLE9BQW1CLENBQUM7SUFDMUIsS0FBSyxDQUFDLENBQUNDLENBQUFBLEtBQUssR0FBQyxHQUFHSCx3REFBVyxDQUFDQyxxRUFBZ0I7SUFDNUNHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLO0lBQ2pCLE1BQU0sc0VBQ0RHLENBQUU7Ozs7Ozs7a0JBQUMsQ0FBUzs7QUFFckIsQ0FBQztBQUVELGlFQUFlSixJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ob21lL2luZGV4LnRzeD83YzNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBzZWxlY3RUb2Rvc1N0YXRlIH0gZnJvbSAnLi4vLi4vc3RvcmUvZHVja3MvdG9kb3MuZHVjaydcblxuY29uc3QgSG9tZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gICAgY29uc3Qge3RvZG9zfSA9IHVzZVNlbGVjdG9yKHNlbGVjdFRvZG9zU3RhdGUpO1xuICAgIGNvbnNvbGUubG9nKHRvZG9zKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxoMj5Ib21lIHBhZ2U8L2gyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTZWxlY3RvciIsInNlbGVjdFRvZG9zU3RhdGUiLCJIb21lIiwidG9kb3MiLCJjb25zb2xlIiwibG9nIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/home/index.tsx\n");

/***/ }),

/***/ "./store/ducks/todos.duck.ts":
/*!***********************************!*\
  !*** ./store/ducks/todos.duck.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setLoading\": () => (/* binding */ setLoading),\n/* harmony export */   \"setTodos\": () => (/* binding */ setTodos),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"selectTodosState\": () => (/* binding */ selectTodosState)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst INITIAL_STATE = {\n    todos: [\n        {\n            id: 1,\n            user_id: 2,\n            title: 'Title todo',\n            due_date: '22/10/2022'\n        }\n    ],\n    loading: false\n};\nconst TodosSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: 'Todos',\n    initialState: INITIAL_STATE,\n    reducers: {\n        setLoading (state, { payload  }) {\n            return {\n                ...state,\n                loading: payload\n            };\n        },\n        setTodos (state, { payload  }) {\n            return {\n                ...state,\n                todos: payload\n            };\n        }\n    }\n});\nconst { setLoading , setTodos  } = TodosSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodosSlice.reducer);\nconst selectTodosState = (state)=>state.todos\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9kdWNrcy90b2Rvcy5kdWNrLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyRDtBQWUzRCxLQUFLLENBQUNDLGFBQWEsR0FBZSxDQUFDO0lBQy9CQyxLQUFLLEVBQUUsQ0FBQztRQUNKLENBQUM7WUFDR0MsRUFBRSxFQUFFLENBQUM7WUFDTEMsT0FBTyxFQUFFLENBQUM7WUFDVkMsS0FBSyxFQUFFLENBQVk7WUFDbkJDLFFBQVEsRUFBRSxDQUFZO1FBQzFCLENBQUM7SUFDTCxDQUFDO0lBQ0pDLE9BQU8sRUFBRSxLQUFLO0FBQ2YsQ0FBQztBQUVELEtBQUssQ0FBQ0MsVUFBVSxHQUFHUiw2REFBVyxDQUFDLENBQUM7SUFDL0JTLElBQUksRUFBRSxDQUFPO0lBQ2JDLFlBQVksRUFBRVQsYUFBYTtJQUMzQlUsUUFBUSxFQUFFLENBQUM7UUFDVkMsVUFBVSxFQUFDQyxLQUFLLEVBQUUsQ0FBQ0MsQ0FBQUEsT0FBTyxFQUF3QixDQUFDLEVBQUUsQ0FBQztZQUNyRCxNQUFNLENBQUMsQ0FBQzttQkFDSkQsS0FBSztnQkFDUk4sT0FBTyxFQUFFTyxPQUFPO1lBQ2pCLENBQUM7UUFDRixDQUFDO1FBQ0RDLFFBQVEsRUFBQ0YsS0FBSyxFQUFFLENBQUNDLENBQUFBLE9BQU8sRUFBd0IsQ0FBQyxFQUFFLENBQUM7WUFDbkQsTUFBTSxDQUFDLENBQUM7bUJBQ0pELEtBQUs7Z0JBQ1JYLEtBQUssRUFBRVksT0FBTztZQUNmLENBQUM7UUFDRixDQUFDO0lBQ0YsQ0FBQztBQUNGLENBQUM7QUFHTSxLQUFLLENBQUMsQ0FBQ0YsQ0FBQUEsVUFBVSxHQUFFRyxRQUFRLEdBQUMsR0FBR1AsVUFBVSxDQUFDUSxPQUFPO0FBRXhELGlFQUFlUixVQUFVLENBQUNTLE9BQU8sRUFBQztBQUUzQixLQUFLLENBQUNDLGdCQUFnQixJQUFJTCxLQUFnQixHQUFLQSxLQUFLLENBQUNYLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9kdWNrcy90b2Rvcy5kdWNrLnRzPzYxZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbn0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQge1Jvb3RTdGF0ZX0gZnJvbSAnLi4nO1xuXG50eXBlIFRvZG9zU3RhdGUgPSB7XG5cdHRvZG9zOiBBcnJheTxJVG9kbz47XG5cdGxvYWRpbmc6IGJvb2xlYW47XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIElUb2RvIHtcblx0aWQ6IG51bWJlcjtcbiAgICB1c2VyX2lkOiBudW1iZXI7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBkdWVfZGF0ZTogc3RyaW5nO1xufVxuXG5jb25zdCBJTklUSUFMX1NUQVRFOiBUb2Rvc1N0YXRlID0ge1xuICAgIHRvZG9zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgdXNlcl9pZDogMixcbiAgICAgICAgICAgIHRpdGxlOiAnVGl0bGUgdG9kbycsXG4gICAgICAgICAgICBkdWVfZGF0ZTogJzIyLzEwLzIwMjInLFxuICAgICAgICB9XG4gICAgXSxcblx0bG9hZGluZzogZmFsc2UsXG59O1xuXG5jb25zdCBUb2Rvc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xuXHRuYW1lOiAnVG9kb3MnLFxuXHRpbml0aWFsU3RhdGU6IElOSVRJQUxfU1RBVEUsXG5cdHJlZHVjZXJzOiB7XG5cdFx0c2V0TG9hZGluZyhzdGF0ZSwge3BheWxvYWR9OiBQYXlsb2FkQWN0aW9uPGJvb2xlYW4+KSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0bG9hZGluZzogcGF5bG9hZCxcblx0XHRcdH07XG5cdFx0fSxcblx0XHRzZXRUb2RvcyhzdGF0ZSwge3BheWxvYWR9OiBQYXlsb2FkQWN0aW9uPElUb2RvW10+KSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0dG9kb3M6IHBheWxvYWQsXG5cdFx0XHR9O1xuXHRcdH0sXG5cdH0sXG59KTtcblxuXG5leHBvcnQgY29uc3Qge3NldExvYWRpbmcsIHNldFRvZG9zfSA9IFRvZG9zU2xpY2UuYWN0aW9ucztcblxuZXhwb3J0IGRlZmF1bHQgVG9kb3NTbGljZS5yZWR1Y2VyO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0VG9kb3NTdGF0ZSA9IChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS50b2RvczsiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJJTklUSUFMX1NUQVRFIiwidG9kb3MiLCJpZCIsInVzZXJfaWQiLCJ0aXRsZSIsImR1ZV9kYXRlIiwibG9hZGluZyIsIlRvZG9zU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwicmVkdWNlcnMiLCJzZXRMb2FkaW5nIiwic3RhdGUiLCJwYXlsb2FkIiwic2V0VG9kb3MiLCJhY3Rpb25zIiwicmVkdWNlciIsInNlbGVjdFRvZG9zU3RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/ducks/todos.duck.ts\n");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/home/index.tsx"));
module.exports = __webpack_exports__;

})();