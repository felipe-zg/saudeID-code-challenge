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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./infra/http/axiosHttpClient.ts":
/*!***************************************!*\
  !*** ./infra/http/axiosHttpClient.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AxiosHttpClient\": () => (/* binding */ AxiosHttpClient)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nclass AxiosHttpClient {\n    static getInstance() {\n        if (!this.instance) {\n            this.instance = new AxiosHttpClient();\n        }\n        return this.instance;\n    }\n    async get(params) {\n        let axiosResponse;\n        try {\n            axiosResponse = await this.httpClient.get(params.url);\n        } catch (error) {\n            axiosResponse = error.response;\n        }\n        return this.adapt(axiosResponse);\n    }\n    async post(params1) {\n        let axiosResponse;\n        try {\n            axiosResponse = await this.httpClient.post(params1.url, params1.body);\n        } catch (error) {\n            axiosResponse = error.response;\n        }\n        return this.adapt(axiosResponse);\n    }\n    async delete(params2) {\n        let axiosResponse;\n        try {\n            axiosResponse = await this.httpClient.delete(params2.url, params2.body);\n        } catch (error) {\n            axiosResponse = error.response;\n        }\n        return this.adapt(axiosResponse);\n    }\n    adapt(axiosResponse) {\n        return {\n            statusCode: axiosResponse.status,\n            body: axiosResponse.data\n        };\n    }\n    constructor(){\n        this.httpClient = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n            baseURL: 'https://gorest.co.in/public/v1',\n            timeout: 30000,\n            headers: {\n                'Access-Control-Allow-Origin': '*'\n            }\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmZyYS9odHRwL2F4aW9zSHR0cENsaWVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkQ7QUFLcEQsTUFBTUMsZUFBZTtXQUdqQkMsV0FBVyxHQUFHLENBQUM7UUFDbEIsRUFBRSxHQUFFLElBQUksQ0FBQ0MsUUFBUSxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDQSxRQUFRLEdBQUcsR0FBRyxDQUFDRixlQUFlO1FBQ3ZDLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDRSxRQUFRO0lBQ3hCLENBQUM7VUFRS0MsR0FBRyxDQUFDQyxNQUEyQixFQUE0QixDQUFDO1FBQzlELEdBQUcsQ0FBQ0MsYUFBYTtRQUNqQixHQUFHLENBQUMsQ0FBQztZQUNEQSxhQUFhLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQ0MsVUFBVSxDQUFDSCxHQUFHLENBQUNDLE1BQU0sQ0FBQ0csR0FBRztRQUN4RCxDQUFDLENBQUMsS0FBSyxFQUFFQyxLQUFLLEVBQUUsQ0FBQztZQUNiSCxhQUFhLEdBQUdHLEtBQUssQ0FBQ0MsUUFBUTtRQUNsQyxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQ0MsS0FBSyxDQUFDTCxhQUFhO0lBQ25DLENBQUM7VUFFS00sSUFBSSxDQUFDUCxPQUE0QixFQUE4QixDQUFDO1FBQ2xFLEdBQUcsQ0FBQ0MsYUFBYTtRQUNqQixHQUFHLENBQUMsQ0FBQztZQUNEQSxhQUFhLEdBQUcsS0FBSyxDQUFFLElBQUksQ0FBQ0MsVUFBVSxDQUFDSyxJQUFJLENBQUNQLE9BQU0sQ0FBQ0csR0FBRyxFQUFFSCxPQUFNLENBQUNRLElBQUk7UUFDdkUsQ0FBQyxDQUFDLEtBQUssRUFBRUosS0FBSyxFQUFFLENBQUM7WUFDYkgsYUFBYSxHQUFHRyxLQUFLLENBQUNDLFFBQVE7UUFDbEMsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0wsYUFBYTtJQUNuQyxDQUFDO1VBRUtRLE1BQU0sQ0FBQ1QsT0FBNEIsRUFBOEIsQ0FBQztRQUNwRSxHQUFHLENBQUNDLGFBQWE7UUFDakIsR0FBRyxDQUFDLENBQUM7WUFDREEsYUFBYSxHQUFHLEtBQUssQ0FBRSxJQUFJLENBQUNDLFVBQVUsQ0FBQ08sTUFBTSxDQUFDVCxPQUFNLENBQUNHLEdBQUcsRUFBRUgsT0FBTSxDQUFDUSxJQUFJO1FBQ3pFLENBQUMsQ0FBQyxLQUFLLEVBQUVKLEtBQUssRUFBRSxDQUFDO1lBQ2JILGFBQWEsR0FBR0csS0FBSyxDQUFDQyxRQUFRO1FBQ2xDLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDQyxLQUFLLENBQUNMLGFBQWE7SUFDbkMsQ0FBQztJQUVPSyxLQUFLLENBQUNMLGFBQTRCLEVBQW1CLENBQUM7UUFDMUQsTUFBTSxDQUFDLENBQUM7WUFDSlMsVUFBVSxFQUFFVCxhQUFhLENBQUNVLE1BQU07WUFDaENILElBQUksRUFBRVAsYUFBYSxDQUFDVyxJQUFJO1FBQzVCLENBQUM7SUFDTCxDQUFDOztRQW5ERSxJQW9ETixDQTFDV1YsVUFBVSxHQUFrQlAsbURBQVksQ0FBQyxDQUFDO1lBQzlDbUIsT0FBTyxFQUFFLENBQWdDO1lBQ3pDQyxPQUFPLEVBQUUsS0FBSztZQUNkQyxPQUFPLEVBQUUsQ0FBQztnQkFBQyxDQUE2Qiw4QkFBRSxDQUFHO1lBQUMsQ0FBQztRQUNuRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vaW5mcmEvaHR0cC9heGlvc0h0dHBDbGllbnQudHM/Y2RhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MsIHsgQXhpb3NJbnN0YW5jZSwgQXhpb3NSZXNwb25zZSB9IGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEh0dHBHZXRDbGllbnQsIEh0dHBHZXRDbGllbnRQYXJhbXMgfSBmcm9tICcuLi8uLi9kYXRhL3Byb3RvY29scy9odHRwL2h0dHBHZXRDbGllbnQnO1xuaW1wb3J0IHsgSHR0cFBvc3RDbGllbnRQYXJhbXMgfSBmcm9tICcuLi8uLi9kYXRhL3Byb3RvY29scy9odHRwL2h0dHBQb3N0Q2xpZW50JztcbmltcG9ydCB7IEh0dHBSZXNwb25zZSB9IGZyb20gJy4uLy4uL2RhdGEvcHJvdG9jb2xzL2h0dHAvaHR0cFJlc3BvbnNlJztcblxuZXhwb3J0IGNsYXNzIEF4aW9zSHR0cENsaWVudDxSID0gdW5rbm93bj4gaW1wbGVtZW50cyBIdHRwR2V0Q2xpZW50PFI+IHtcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogQXhpb3NIdHRwQ2xpZW50O1xuXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZighdGhpcy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBBeGlvc0h0dHBDbGllbnQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGh0dHBDbGllbnQ6IEF4aW9zSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xuICAgICAgICBiYXNlVVJMOiAnaHR0cHM6Ly9nb3Jlc3QuY28uaW4vcHVibGljL3YxJyxcbiAgICAgICAgdGltZW91dDogMzAwMDAsXG4gICAgICAgIGhlYWRlcnM6IHsgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyB9LFxuICAgIH0pO1xuXG4gICAgYXN5bmMgZ2V0KHBhcmFtczogSHR0cEdldENsaWVudFBhcmFtcyk6IFByb21pc2U8SHR0cFJlc3BvbnNlPFI+PiB7XG4gICAgICAgIGxldCBheGlvc1Jlc3BvbnNlOiBBeGlvc1Jlc3BvbnNlPFI+O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXhpb3NSZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cENsaWVudC5nZXQocGFyYW1zLnVybCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBheGlvc1Jlc3BvbnNlID0gZXJyb3IucmVzcG9uc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHQoYXhpb3NSZXNwb25zZSk7XG4gICAgfVxuXG4gICAgYXN5bmMgcG9zdChwYXJhbXM6IEh0dHBQb3N0Q2xpZW50UGFyYW1zKTogUHJvbWlzZTxIdHRwUmVzcG9uc2U8YW55Pj4ge1xuICAgICAgICBsZXQgYXhpb3NSZXNwb25zZTogQXhpb3NSZXNwb25zZTxhbnk+O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXhpb3NSZXNwb25zZSA9IGF3YWl0ICB0aGlzLmh0dHBDbGllbnQucG9zdChwYXJhbXMudXJsLCBwYXJhbXMuYm9keSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBheGlvc1Jlc3BvbnNlID0gZXJyb3IucmVzcG9uc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHQoYXhpb3NSZXNwb25zZSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZGVsZXRlKHBhcmFtczogSHR0cFBvc3RDbGllbnRQYXJhbXMpOiBQcm9taXNlPEh0dHBSZXNwb25zZTxhbnk+PiB7XG4gICAgICAgIGxldCBheGlvc1Jlc3BvbnNlOiBBeGlvc1Jlc3BvbnNlPGFueT47XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBheGlvc1Jlc3BvbnNlID0gYXdhaXQgIHRoaXMuaHR0cENsaWVudC5kZWxldGUocGFyYW1zLnVybCwgcGFyYW1zLmJvZHkpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgYXhpb3NSZXNwb25zZSA9IGVycm9yLnJlc3BvbnNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmFkYXB0KGF4aW9zUmVzcG9uc2UpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRhcHQoYXhpb3NSZXNwb25zZTogQXhpb3NSZXNwb25zZSk6IEh0dHBSZXNwb25zZTxSPiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGF0dXNDb2RlOiBheGlvc1Jlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgICAgIGJvZHk6IGF4aW9zUmVzcG9uc2UuZGF0YSxcbiAgICAgICAgfTtcbiAgICB9XG59Il0sIm5hbWVzIjpbImF4aW9zIiwiQXhpb3NIdHRwQ2xpZW50IiwiZ2V0SW5zdGFuY2UiLCJpbnN0YW5jZSIsImdldCIsInBhcmFtcyIsImF4aW9zUmVzcG9uc2UiLCJodHRwQ2xpZW50IiwidXJsIiwiZXJyb3IiLCJyZXNwb25zZSIsImFkYXB0IiwicG9zdCIsImJvZHkiLCJkZWxldGUiLCJzdGF0dXNDb2RlIiwic3RhdHVzIiwiZGF0YSIsImNyZWF0ZSIsImJhc2VVUkwiLCJ0aW1lb3V0IiwiaGVhZGVycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./infra/http/axiosHttpClient.ts\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ \"./store/index.ts\");\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n        store: _store__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        __source: {\n            fileName: \"/Users/felipezeba/Desktop/development/SaudeID/saudeid-code-challenge/src/pages/_app.js\",\n            lineNumber: 7,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n            ...pageProps,\n            __source: {\n                fileName: \"/Users/felipezeba/Desktop/development/SaudeID/saudeid-code-challenge/src/pages/_app.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            },\n            __self: this\n        })\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNNO0FBQ1I7U0FFbkJFLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hDLE1BQU0sc0VBQ0hKLGlEQUFRO1FBQUNDLEtBQUssRUFBRUEsOENBQUs7Ozs7Ozs7dUZBQ25CRSxTQUFTO2VBQUtDLFNBQVM7Ozs7Ozs7OztBQUc5QixDQUFDO0FBRUQsaUVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUnO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1Byb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiUHJvdmlkZXIiLCJzdG9yZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./store/ducks/index.ts":
/*!******************************!*\
  !*** ./store/ducks/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _todos_duck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos.duck */ \"./store/ducks/todos.duck.ts\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n    todos: _todos_duck__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9kdWNrcy9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXFDO0FBQ0w7QUFFaEMsaUVBQWVBLHNEQUFlLENBQUMsQ0FBQztJQUM1QkMsS0FBSztBQUNULENBQUMsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3RvcmUvZHVja3MvaW5kZXgudHM/YjliMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHRvZG9zIGZyb20gJy4vdG9kb3MuZHVjaydcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgICB0b2Rvc1xufSk7Il0sIm5hbWVzIjpbImNvbWJpbmVSZWR1Y2VycyIsInRvZG9zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/ducks/index.ts\n");

/***/ }),

/***/ "./store/ducks/todos.duck.ts":
/*!***********************************!*\
  !*** ./store/ducks/todos.duck.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setLoading\": () => (/* binding */ setLoading),\n/* harmony export */   \"setError\": () => (/* binding */ setError),\n/* harmony export */   \"setTodos\": () => (/* binding */ setTodos),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getTodosByUser\": () => (/* binding */ getTodosByUser),\n/* harmony export */   \"selectTodosState\": () => (/* binding */ selectTodosState)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _infra_http_axiosHttpClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../infra/http/axiosHttpClient */ \"./infra/http/axiosHttpClient.ts\");\n\n\nconst INITIAL_STATE = {\n    todos: [],\n    loading: false\n};\nconst TodosSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: 'Todos',\n    initialState: INITIAL_STATE,\n    reducers: {\n        setLoading (state, { payload  }) {\n            return {\n                ...state,\n                loading: payload\n            };\n        },\n        setError (state, { payload  }) {\n            return {\n                ...state,\n                error: payload\n            };\n        },\n        setTodos (state, { payload  }) {\n            return {\n                ...state,\n                todos: payload\n            };\n        }\n    }\n});\nconst { setLoading , setError , setTodos  } = TodosSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodosSlice.reducer);\nconst getTodosByUser = (id, onSuccess, onError)=>async (dispatch)=>{\n        try {\n            dispatch(setLoading(true));\n            const { body  } = await _infra_http_axiosHttpClient__WEBPACK_IMPORTED_MODULE_1__.AxiosHttpClient.getInstance().get({\n                url: `/users/${id}/todos`\n            });\n            dispatch(setTodos(body.data));\n            onSuccess && onSuccess();\n        } catch (e) {\n            dispatch(setError('Falha ao buscar lista de ToDos'));\n            onError && onError();\n        } finally{\n            dispatch(setLoading(false));\n        }\n    }\n;\nconst selectTodosState = (state)=>state.todos\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9kdWNrcy90b2Rvcy5kdWNrLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEyRDtBQUVPO0FBZ0JsRSxLQUFLLENBQUNFLGFBQWEsR0FBZSxDQUFDO0lBQy9CQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ1pDLE9BQU8sRUFBRSxLQUFLO0FBQ2YsQ0FBQztBQUVELEtBQUssQ0FBQ0MsVUFBVSxHQUFHTCw2REFBVyxDQUFDLENBQUM7SUFDL0JNLElBQUksRUFBRSxDQUFPO0lBQ2JDLFlBQVksRUFBRUwsYUFBYTtJQUMzQk0sUUFBUSxFQUFFLENBQUM7UUFDVkMsVUFBVSxFQUFDQyxLQUFLLEVBQUUsQ0FBQ0MsQ0FBQUEsT0FBTyxFQUF3QixDQUFDLEVBQUUsQ0FBQztZQUNyRCxNQUFNLENBQUMsQ0FBQzttQkFDSkQsS0FBSztnQkFDUk4sT0FBTyxFQUFFTyxPQUFPO1lBQ2pCLENBQUM7UUFDRixDQUFDO1FBQ0RDLFFBQVEsRUFBQ0YsS0FBSyxFQUFFLENBQUNDLENBQUFBLE9BQU8sRUFBdUIsQ0FBQyxFQUFFLENBQUM7WUFDbEQsTUFBTSxDQUFDLENBQUM7bUJBQ0pELEtBQUs7Z0JBQ1JHLEtBQUssRUFBRUYsT0FBTztZQUNmLENBQUM7UUFDRixDQUFDO1FBQ0RHLFFBQVEsRUFBQ0osS0FBSyxFQUFFLENBQUNDLENBQUFBLE9BQU8sRUFBd0IsQ0FBQyxFQUFFLENBQUM7WUFDbkQsTUFBTSxDQUFDLENBQUM7bUJBQ0pELEtBQUs7Z0JBQ1JQLEtBQUssRUFBRVEsT0FBTztZQUNmLENBQUM7UUFDRixDQUFDO0lBQ0YsQ0FBQztBQUNGLENBQUM7QUFHTSxLQUFLLENBQUMsQ0FBQ0YsQ0FBQUEsVUFBVSxHQUFFRyxRQUFRLEdBQUVFLFFBQVEsR0FBQyxHQUFHVCxVQUFVLENBQUNVLE9BQU87QUFFbEUsaUVBQWVWLFVBQVUsQ0FBQ1csT0FBTyxFQUFDO0FBRTNCLEtBQUssQ0FBQ0MsY0FBYyxJQUMxQkMsRUFBVSxFQUNWQyxTQUFzQixFQUN0QkMsT0FBb0IsVUFDVEMsUUFBUSxHQUFLLENBQUM7UUFDekIsR0FBRyxDQUFDLENBQUM7WUFDSkEsUUFBUSxDQUFDWixVQUFVLENBQUMsSUFBSTtZQUN4QixLQUFLLENBQUMsQ0FBQ2EsQ0FBQUEsSUFBSSxHQUFDLEdBQUcsS0FBSyxDQUFDckIsb0ZBQTJCLEdBQUd1QixHQUFHLENBQUMsQ0FBQ0M7Z0JBQUFBLEdBQUcsR0FBRyxPQUFPLEVBQUVQLEVBQUUsQ0FBQyxNQUFNO1lBQUMsQ0FBQztZQUNsRkcsUUFBUSxDQUFDUCxRQUFRLENBQUNRLElBQUksQ0FBQ0ksSUFBSTtZQUMzQlAsU0FBUyxJQUFJQSxTQUFTO1FBQ3ZCLENBQUMsQ0FBQyxLQUFLLEVBQUVRLENBQUMsRUFBRSxDQUFDO1lBQ1pOLFFBQVEsQ0FBQ1QsUUFBUSxDQUFDLENBQWdDO1lBQ2xEUSxPQUFPLElBQUlBLE9BQU87UUFDbkIsQ0FBQyxRQUFTLENBQUM7WUFDVkMsUUFBUSxDQUFDWixVQUFVLENBQUMsS0FBSztRQUMxQixDQUFDO0lBQ0YsQ0FBQzs7QUFFTSxLQUFLLENBQUNtQixnQkFBZ0IsSUFBSWxCLEtBQWdCLEdBQUtBLEtBQUssQ0FBQ1AsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3N0b3JlL2R1Y2tzL3RvZG9zLmR1Y2sudHM/NjFmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9ufSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCB7Um9vdFN0YXRlfSBmcm9tICcuLic7XG5pbXBvcnQgeyBBeGlvc0h0dHBDbGllbnQgfSBmcm9tICcuLi8uLi9pbmZyYS9odHRwL2F4aW9zSHR0cENsaWVudCc7XG5cbnR5cGUgVG9kb3NTdGF0ZSA9IHtcblx0dG9kb3M6IElUb2RvW107XG5cdGxvYWRpbmc6IGJvb2xlYW47XG5cdGVycm9yPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBJVG9kbyB7XG5cdGlkOiBudW1iZXI7XG4gICAgdXNlcl9pZDogbnVtYmVyO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgZHVlX29uOiBzdHJpbmc7XG4gICAgc3RhdHVzOiAncGVuZGluZycgfCAnY29tcGxldGVkJztcbn1cblxuY29uc3QgSU5JVElBTF9TVEFURTogVG9kb3NTdGF0ZSA9IHtcbiAgICB0b2RvczogW10sXG5cdGxvYWRpbmc6IGZhbHNlLFxufTtcblxuY29uc3QgVG9kb3NTbGljZSA9IGNyZWF0ZVNsaWNlKHtcblx0bmFtZTogJ1RvZG9zJyxcblx0aW5pdGlhbFN0YXRlOiBJTklUSUFMX1NUQVRFLFxuXHRyZWR1Y2Vyczoge1xuXHRcdHNldExvYWRpbmcoc3RhdGUsIHtwYXlsb2FkfTogUGF5bG9hZEFjdGlvbjxib29sZWFuPikge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdGxvYWRpbmc6IHBheWxvYWQsXG5cdFx0XHR9O1xuXHRcdH0sXG5cdFx0c2V0RXJyb3Ioc3RhdGUsIHtwYXlsb2FkfTogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0ZXJyb3I6IHBheWxvYWQsXG5cdFx0XHR9O1xuXHRcdH0sXG5cdFx0c2V0VG9kb3Moc3RhdGUsIHtwYXlsb2FkfTogUGF5bG9hZEFjdGlvbjxJVG9kb1tdPikge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHRvZG9zOiBwYXlsb2FkLFxuXHRcdFx0fTtcblx0XHR9LFxuXHR9LFxufSk7XG5cblxuZXhwb3J0IGNvbnN0IHtzZXRMb2FkaW5nLCBzZXRFcnJvciwgc2V0VG9kb3N9ID0gVG9kb3NTbGljZS5hY3Rpb25zO1xuXG5leHBvcnQgZGVmYXVsdCBUb2Rvc1NsaWNlLnJlZHVjZXI7XG5cbmV4cG9ydCBjb25zdCBnZXRUb2Rvc0J5VXNlciA9IChcblx0aWQ6IG51bWJlcixcblx0b25TdWNjZXNzPzogKCkgPT4gdm9pZCxcblx0b25FcnJvcj86ICgpID0+IHZvaWRcbikgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG5cdHRyeSB7XG5cdFx0ZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlKSk7XG5cdFx0Y29uc3Qge2JvZHl9ID0gYXdhaXQgQXhpb3NIdHRwQ2xpZW50LmdldEluc3RhbmNlKCkuZ2V0KHt1cmw6IGAvdXNlcnMvJHtpZH0vdG9kb3NgfSk7XG5cdFx0ZGlzcGF0Y2goc2V0VG9kb3MoYm9keS5kYXRhIGFzIElUb2RvW10pKTtcblx0XHRvblN1Y2Nlc3MgJiYgb25TdWNjZXNzKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRkaXNwYXRjaChzZXRFcnJvcignRmFsaGEgYW8gYnVzY2FyIGxpc3RhIGRlIFRvRG9zJykpO1xuXHRcdG9uRXJyb3IgJiYgb25FcnJvcigpO1xuXHR9IGZpbmFsbHkge1xuXHRcdGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcblx0fVxufTtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdFRvZG9zU3RhdGUgPSAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudG9kb3M7Il0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiQXhpb3NIdHRwQ2xpZW50IiwiSU5JVElBTF9TVEFURSIsInRvZG9zIiwibG9hZGluZyIsIlRvZG9zU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwicmVkdWNlcnMiLCJzZXRMb2FkaW5nIiwic3RhdGUiLCJwYXlsb2FkIiwic2V0RXJyb3IiLCJlcnJvciIsInNldFRvZG9zIiwiYWN0aW9ucyIsInJlZHVjZXIiLCJnZXRUb2Rvc0J5VXNlciIsImlkIiwib25TdWNjZXNzIiwib25FcnJvciIsImRpc3BhdGNoIiwiYm9keSIsImdldEluc3RhbmNlIiwiZ2V0IiwidXJsIiwiZGF0YSIsImUiLCJzZWxlY3RUb2Rvc1N0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/ducks/todos.duck.ts\n");

/***/ }),

/***/ "./store/index.ts":
/*!************************!*\
  !*** ./store/index.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ducks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ducks */ \"./store/ducks/index.ts\");\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: _ducks__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQStDO0FBRWpCO0FBSTlCLEtBQUssQ0FBQ0UsS0FBSyxHQUFHRixnRUFBYyxDQUFDLENBQUM7SUFDN0JHLE9BQU8sRUFBRUYsOENBQVE7QUFDbEIsQ0FBQztBQUVELGlFQUFlQyxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9pbmRleC50cz9iNWIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29uZmlndXJlU3RvcmV9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuXG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi9kdWNrcyc7XG5cbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHJlZHVjZXJzPjtcblxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XG5cdHJlZHVjZXI6IHJlZHVjZXJzLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlOyJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsInJlZHVjZXJzIiwic3RvcmUiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/index.ts\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();