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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AxiosHttpClient\": () => (/* binding */ AxiosHttpClient)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nclass AxiosHttpClient {\n    static getInstance() {\n        if (!this.instance) {\n            this.instance = new AxiosHttpClient();\n        }\n        return this.instance;\n    }\n    async get(params) {\n        let axiosResponse;\n        try {\n            axiosResponse = await this.httpClient.get(params.url);\n        } catch (error) {\n            axiosResponse = error.response;\n        }\n        return this.adapt(axiosResponse);\n    }\n    async post(params1) {\n        let axiosResponse;\n        try {\n            axiosResponse = await this.httpClient.post(params1.url, params1.body);\n        } catch (error) {\n            axiosResponse = error.response;\n        }\n        return this.adapt(axiosResponse);\n    }\n    async delete(params2) {\n        let axiosResponse;\n        try {\n            axiosResponse = await this.httpClient.delete(params2.url, params2.body);\n        } catch (error) {\n            axiosResponse = error.response;\n        }\n        return this.adapt(axiosResponse);\n    }\n    adapt(axiosResponse) {\n        return {\n            statusCode: axiosResponse.status,\n            body: axiosResponse.data\n        };\n    }\n    constructor(){\n        this.httpClient = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n            baseURL: process.env.REACT_APP_API_GATEWAY_URL,\n            timeout: 30000,\n            headers: {\n                'Access-Control-Allow-Origin': '*'\n            }\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmZyYS9odHRwL2F4aW9zSHR0cENsaWVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkQ7QUFLcEQsTUFBTUMsZUFBZTtXQUdqQkMsV0FBVyxHQUFHLENBQUM7UUFDbEIsRUFBRSxHQUFFLElBQUksQ0FBQ0MsUUFBUSxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDQSxRQUFRLEdBQUcsR0FBRyxDQUFDRixlQUFlO1FBQ3ZDLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDRSxRQUFRO0lBQ3hCLENBQUM7VUFRS0MsR0FBRyxDQUFDQyxNQUEyQixFQUE0QixDQUFDO1FBQzlELEdBQUcsQ0FBQ0MsYUFBYTtRQUNqQixHQUFHLENBQUMsQ0FBQztZQUNEQSxhQUFhLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQ0MsVUFBVSxDQUFDSCxHQUFHLENBQUNDLE1BQU0sQ0FBQ0csR0FBRztRQUN4RCxDQUFDLENBQUMsS0FBSyxFQUFFQyxLQUFLLEVBQUUsQ0FBQztZQUNiSCxhQUFhLEdBQUdHLEtBQUssQ0FBQ0MsUUFBUTtRQUNsQyxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQ0MsS0FBSyxDQUFDTCxhQUFhO0lBQ25DLENBQUM7VUFFS00sSUFBSSxDQUFDUCxPQUE0QixFQUE4QixDQUFDO1FBQ2xFLEdBQUcsQ0FBQ0MsYUFBYTtRQUNqQixHQUFHLENBQUMsQ0FBQztZQUNEQSxhQUFhLEdBQUcsS0FBSyxDQUFFLElBQUksQ0FBQ0MsVUFBVSxDQUFDSyxJQUFJLENBQUNQLE9BQU0sQ0FBQ0csR0FBRyxFQUFFSCxPQUFNLENBQUNRLElBQUk7UUFDdkUsQ0FBQyxDQUFDLEtBQUssRUFBRUosS0FBSyxFQUFFLENBQUM7WUFDYkgsYUFBYSxHQUFHRyxLQUFLLENBQUNDLFFBQVE7UUFDbEMsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0wsYUFBYTtJQUNuQyxDQUFDO1VBRUtRLE1BQU0sQ0FBQ1QsT0FBNEIsRUFBOEIsQ0FBQztRQUNwRSxHQUFHLENBQUNDLGFBQWE7UUFDakIsR0FBRyxDQUFDLENBQUM7WUFDREEsYUFBYSxHQUFHLEtBQUssQ0FBRSxJQUFJLENBQUNDLFVBQVUsQ0FBQ08sTUFBTSxDQUFDVCxPQUFNLENBQUNHLEdBQUcsRUFBRUgsT0FBTSxDQUFDUSxJQUFJO1FBQ3pFLENBQUMsQ0FBQyxLQUFLLEVBQUVKLEtBQUssRUFBRSxDQUFDO1lBQ2JILGFBQWEsR0FBR0csS0FBSyxDQUFDQyxRQUFRO1FBQ2xDLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDQyxLQUFLLENBQUNMLGFBQWE7SUFDbkMsQ0FBQztJQUVPSyxLQUFLLENBQUNMLGFBQTRCLEVBQW1CLENBQUM7UUFDMUQsTUFBTSxDQUFDLENBQUM7WUFDSlMsVUFBVSxFQUFFVCxhQUFhLENBQUNVLE1BQU07WUFDaENILElBQUksRUFBRVAsYUFBYSxDQUFDVyxJQUFJO1FBQzVCLENBQUM7SUFDTCxDQUFDOztRQW5ERSxJQW9ETixDQTFDV1YsVUFBVSxHQUFrQlAsbURBQVksQ0FBQyxDQUFDO1lBQzlDbUIsT0FBTyxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MseUJBQXlCO1lBQzlDQyxPQUFPLEVBQUUsS0FBSztZQUNkQyxPQUFPLEVBQUUsQ0FBQztnQkFBQyxDQUE2Qiw4QkFBRSxDQUFHO1lBQUMsQ0FBQztRQUNuRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vaW5mcmEvaHR0cC9heGlvc0h0dHBDbGllbnQudHM/Y2RhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MsIHsgQXhpb3NJbnN0YW5jZSwgQXhpb3NSZXNwb25zZSB9IGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEh0dHBHZXRDbGllbnQsIEh0dHBHZXRDbGllbnRQYXJhbXMgfSBmcm9tICcuLi8uLi9kYXRhL3Byb3RvY29scy9odHRwL2h0dHBHZXRDbGllbnQnO1xuaW1wb3J0IHsgSHR0cFBvc3RDbGllbnRQYXJhbXMgfSBmcm9tICcuLi8uLi9kYXRhL3Byb3RvY29scy9odHRwL2h0dHBQb3N0Q2xpZW50JztcbmltcG9ydCB7IEh0dHBSZXNwb25zZSB9IGZyb20gJy4uLy4uL2RhdGEvcHJvdG9jb2xzL2h0dHAvaHR0cFJlc3BvbnNlJztcblxuZXhwb3J0IGNsYXNzIEF4aW9zSHR0cENsaWVudDxSID0gdW5rbm93bj4gaW1wbGVtZW50cyBIdHRwR2V0Q2xpZW50PFI+IHtcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogQXhpb3NIdHRwQ2xpZW50O1xuXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZighdGhpcy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBBeGlvc0h0dHBDbGllbnQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGh0dHBDbGllbnQ6IEF4aW9zSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xuICAgICAgICBiYXNlVVJMOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfQVBJX0dBVEVXQVlfVVJMLFxuICAgICAgICB0aW1lb3V0OiAzMDAwMCxcbiAgICAgICAgaGVhZGVyczogeyAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonIH0sXG4gICAgfSk7XG5cbiAgICBhc3luYyBnZXQocGFyYW1zOiBIdHRwR2V0Q2xpZW50UGFyYW1zKTogUHJvbWlzZTxIdHRwUmVzcG9uc2U8Uj4+IHtcbiAgICAgICAgbGV0IGF4aW9zUmVzcG9uc2U6IEF4aW9zUmVzcG9uc2U8Uj47XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBheGlvc1Jlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwQ2xpZW50LmdldChwYXJhbXMudXJsKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGF4aW9zUmVzcG9uc2UgPSBlcnJvci5yZXNwb25zZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5hZGFwdChheGlvc1Jlc3BvbnNlKTtcbiAgICB9XG5cbiAgICBhc3luYyBwb3N0KHBhcmFtczogSHR0cFBvc3RDbGllbnRQYXJhbXMpOiBQcm9taXNlPEh0dHBSZXNwb25zZTxhbnk+PiB7XG4gICAgICAgIGxldCBheGlvc1Jlc3BvbnNlOiBBeGlvc1Jlc3BvbnNlPGFueT47XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBheGlvc1Jlc3BvbnNlID0gYXdhaXQgIHRoaXMuaHR0cENsaWVudC5wb3N0KHBhcmFtcy51cmwsIHBhcmFtcy5ib2R5KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGF4aW9zUmVzcG9uc2UgPSBlcnJvci5yZXNwb25zZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5hZGFwdChheGlvc1Jlc3BvbnNlKTtcbiAgICB9XG5cbiAgICBhc3luYyBkZWxldGUocGFyYW1zOiBIdHRwUG9zdENsaWVudFBhcmFtcyk6IFByb21pc2U8SHR0cFJlc3BvbnNlPGFueT4+IHtcbiAgICAgICAgbGV0IGF4aW9zUmVzcG9uc2U6IEF4aW9zUmVzcG9uc2U8YW55PjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF4aW9zUmVzcG9uc2UgPSBhd2FpdCAgdGhpcy5odHRwQ2xpZW50LmRlbGV0ZShwYXJhbXMudXJsLCBwYXJhbXMuYm9keSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBheGlvc1Jlc3BvbnNlID0gZXJyb3IucmVzcG9uc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHQoYXhpb3NSZXNwb25zZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGFwdChheGlvc1Jlc3BvbnNlOiBBeGlvc1Jlc3BvbnNlKTogSHR0cFJlc3BvbnNlPFI+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXR1c0NvZGU6IGF4aW9zUmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICAgICAgYm9keTogYXhpb3NSZXNwb25zZS5kYXRhLFxuICAgICAgICB9O1xuICAgIH1cbn0iXSwibmFtZXMiOlsiYXhpb3MiLCJBeGlvc0h0dHBDbGllbnQiLCJnZXRJbnN0YW5jZSIsImluc3RhbmNlIiwiZ2V0IiwicGFyYW1zIiwiYXhpb3NSZXNwb25zZSIsImh0dHBDbGllbnQiLCJ1cmwiLCJlcnJvciIsInJlc3BvbnNlIiwiYWRhcHQiLCJwb3N0IiwiYm9keSIsImRlbGV0ZSIsInN0YXR1c0NvZGUiLCJzdGF0dXMiLCJkYXRhIiwiY3JlYXRlIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9BUFBfQVBJX0dBVEVXQVlfVVJMIiwidGltZW91dCIsImhlYWRlcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./infra/http/axiosHttpClient.ts\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setLoading\": () => (/* binding */ setLoading),\n/* harmony export */   \"setError\": () => (/* binding */ setError),\n/* harmony export */   \"setTodos\": () => (/* binding */ setTodos),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getTodosByUser\": () => (/* binding */ getTodosByUser),\n/* harmony export */   \"selectTodosState\": () => (/* binding */ selectTodosState)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _infra_http_axiosHttpClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../infra/http/axiosHttpClient */ \"./infra/http/axiosHttpClient.ts\");\n\n\nconst INITIAL_STATE = {\n    todos: [],\n    loading: false\n};\nconst TodosSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: 'Todos',\n    initialState: INITIAL_STATE,\n    reducers: {\n        setLoading (state, { payload  }) {\n            return {\n                ...state,\n                loading: payload\n            };\n        },\n        setError (state, { payload  }) {\n            return {\n                ...state,\n                error: payload\n            };\n        },\n        setTodos (state, { payload  }) {\n            return {\n                ...state,\n                todos: payload\n            };\n        }\n    }\n});\nconst { setLoading , setError , setTodos  } = TodosSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodosSlice.reducer);\nconst getTodosByUser = (id, onSuccess, onError)=>async (dispatch)=>{\n        try {\n            dispatch(setLoading(true));\n            const { body  } = await _infra_http_axiosHttpClient__WEBPACK_IMPORTED_MODULE_1__.AxiosHttpClient.getInstance().get({\n                url: `https://gorest.co.in/public/v1/users/${id}/todos`\n            });\n            dispatch(setTodos(body.data));\n            onSuccess && onSuccess();\n        } catch (e) {\n            dispatch(setError('Falha ao buscar lista de ToDos'));\n            onError && onError();\n        } finally{\n            dispatch(setLoading(false));\n        }\n    }\n;\nconst selectTodosState = (state)=>state.todos\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9kdWNrcy90b2Rvcy5kdWNrLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEyRDtBQUVPO0FBZ0JsRSxLQUFLLENBQUNFLGFBQWEsR0FBZSxDQUFDO0lBQy9CQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ1pDLE9BQU8sRUFBRSxLQUFLO0FBQ2YsQ0FBQztBQUVELEtBQUssQ0FBQ0MsVUFBVSxHQUFHTCw2REFBVyxDQUFDLENBQUM7SUFDL0JNLElBQUksRUFBRSxDQUFPO0lBQ2JDLFlBQVksRUFBRUwsYUFBYTtJQUMzQk0sUUFBUSxFQUFFLENBQUM7UUFDVkMsVUFBVSxFQUFDQyxLQUFLLEVBQUUsQ0FBQ0MsQ0FBQUEsT0FBTyxFQUF3QixDQUFDLEVBQUUsQ0FBQztZQUNyRCxNQUFNLENBQUMsQ0FBQzttQkFDSkQsS0FBSztnQkFDUk4sT0FBTyxFQUFFTyxPQUFPO1lBQ2pCLENBQUM7UUFDRixDQUFDO1FBQ0RDLFFBQVEsRUFBQ0YsS0FBSyxFQUFFLENBQUNDLENBQUFBLE9BQU8sRUFBdUIsQ0FBQyxFQUFFLENBQUM7WUFDbEQsTUFBTSxDQUFDLENBQUM7bUJBQ0pELEtBQUs7Z0JBQ1JHLEtBQUssRUFBRUYsT0FBTztZQUNmLENBQUM7UUFDRixDQUFDO1FBQ0RHLFFBQVEsRUFBQ0osS0FBSyxFQUFFLENBQUNDLENBQUFBLE9BQU8sRUFBd0IsQ0FBQyxFQUFFLENBQUM7WUFDbkQsTUFBTSxDQUFDLENBQUM7bUJBQ0pELEtBQUs7Z0JBQ1JQLEtBQUssRUFBRVEsT0FBTztZQUNmLENBQUM7UUFDRixDQUFDO0lBQ0YsQ0FBQztBQUNGLENBQUM7QUFHTSxLQUFLLENBQUMsQ0FBQ0YsQ0FBQUEsVUFBVSxHQUFFRyxRQUFRLEdBQUVFLFFBQVEsR0FBQyxHQUFHVCxVQUFVLENBQUNVLE9BQU87QUFFbEUsaUVBQWVWLFVBQVUsQ0FBQ1csT0FBTyxFQUFDO0FBRTNCLEtBQUssQ0FBQ0MsY0FBYyxJQUMxQkMsRUFBVSxFQUNWQyxTQUFzQixFQUN0QkMsT0FBb0IsVUFDVEMsUUFBUSxHQUFLLENBQUM7UUFDekIsR0FBRyxDQUFDLENBQUM7WUFDSkEsUUFBUSxDQUFDWixVQUFVLENBQUMsSUFBSTtZQUN4QixLQUFLLENBQUMsQ0FBQ2EsQ0FBQUEsSUFBSSxHQUFDLEdBQUcsS0FBSyxDQUFDckIsb0ZBQTJCLEdBQUd1QixHQUFHLENBQUMsQ0FBQ0M7Z0JBQUFBLEdBQUcsR0FBRyxxQ0FBcUMsRUFBRVAsRUFBRSxDQUFDLE1BQU07WUFBQyxDQUFDO1lBQ2hIRyxRQUFRLENBQUNQLFFBQVEsQ0FBQ1EsSUFBSSxDQUFDSSxJQUFJO1lBQzNCUCxTQUFTLElBQUlBLFNBQVM7UUFDdkIsQ0FBQyxDQUFDLEtBQUssRUFBRVEsQ0FBQyxFQUFFLENBQUM7WUFDWk4sUUFBUSxDQUFDVCxRQUFRLENBQUMsQ0FBZ0M7WUFDbERRLE9BQU8sSUFBSUEsT0FBTztRQUNuQixDQUFDLFFBQVMsQ0FBQztZQUNWQyxRQUFRLENBQUNaLFVBQVUsQ0FBQyxLQUFLO1FBQzFCLENBQUM7SUFDRixDQUFDOztBQUVNLEtBQUssQ0FBQ21CLGdCQUFnQixJQUFJbEIsS0FBZ0IsR0FBS0EsS0FBSyxDQUFDUCxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3RvcmUvZHVja3MvdG9kb3MuZHVjay50cz82MWY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb259IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHtSb290U3RhdGV9IGZyb20gJy4uJztcbmltcG9ydCB7IEF4aW9zSHR0cENsaWVudCB9IGZyb20gJy4uLy4uL2luZnJhL2h0dHAvYXhpb3NIdHRwQ2xpZW50JztcblxudHlwZSBUb2Rvc1N0YXRlID0ge1xuXHR0b2RvczogSVRvZG9bXTtcblx0bG9hZGluZzogYm9vbGVhbjtcblx0ZXJyb3I/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIElUb2RvIHtcblx0aWQ6IG51bWJlcjtcbiAgICB1c2VyX2lkOiBudW1iZXI7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBkdWVfb246IHN0cmluZztcbiAgICBzdGF0dXM6ICdwZW5kaW5nJyB8ICdjb21wbGV0ZWQnO1xufVxuXG5jb25zdCBJTklUSUFMX1NUQVRFOiBUb2Rvc1N0YXRlID0ge1xuICAgIHRvZG9zOiBbXSxcblx0bG9hZGluZzogZmFsc2UsXG59O1xuXG5jb25zdCBUb2Rvc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xuXHRuYW1lOiAnVG9kb3MnLFxuXHRpbml0aWFsU3RhdGU6IElOSVRJQUxfU1RBVEUsXG5cdHJlZHVjZXJzOiB7XG5cdFx0c2V0TG9hZGluZyhzdGF0ZSwge3BheWxvYWR9OiBQYXlsb2FkQWN0aW9uPGJvb2xlYW4+KSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0bG9hZGluZzogcGF5bG9hZCxcblx0XHRcdH07XG5cdFx0fSxcblx0XHRzZXRFcnJvcihzdGF0ZSwge3BheWxvYWR9OiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRlcnJvcjogcGF5bG9hZCxcblx0XHRcdH07XG5cdFx0fSxcblx0XHRzZXRUb2RvcyhzdGF0ZSwge3BheWxvYWR9OiBQYXlsb2FkQWN0aW9uPElUb2RvW10+KSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0dG9kb3M6IHBheWxvYWQsXG5cdFx0XHR9O1xuXHRcdH0sXG5cdH0sXG59KTtcblxuXG5leHBvcnQgY29uc3Qge3NldExvYWRpbmcsIHNldEVycm9yLCBzZXRUb2Rvc30gPSBUb2Rvc1NsaWNlLmFjdGlvbnM7XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9zU2xpY2UucmVkdWNlcjtcblxuZXhwb3J0IGNvbnN0IGdldFRvZG9zQnlVc2VyID0gKFxuXHRpZDogbnVtYmVyLFxuXHRvblN1Y2Nlc3M/OiAoKSA9PiB2b2lkLFxuXHRvbkVycm9yPzogKCkgPT4gdm9pZFxuKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcblx0dHJ5IHtcblx0XHRkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUpKTtcblx0XHRjb25zdCB7Ym9keX0gPSBhd2FpdCBBeGlvc0h0dHBDbGllbnQuZ2V0SW5zdGFuY2UoKS5nZXQoe3VybDogYGh0dHBzOi8vZ29yZXN0LmNvLmluL3B1YmxpYy92MS91c2Vycy8ke2lkfS90b2Rvc2B9KTtcblx0XHRkaXNwYXRjaChzZXRUb2Rvcyhib2R5LmRhdGEgYXMgSVRvZG9bXSkpO1xuXHRcdG9uU3VjY2VzcyAmJiBvblN1Y2Nlc3MoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGRpc3BhdGNoKHNldEVycm9yKCdGYWxoYSBhbyBidXNjYXIgbGlzdGEgZGUgVG9Eb3MnKSk7XG5cdFx0b25FcnJvciAmJiBvbkVycm9yKCk7XG5cdH0gZmluYWxseSB7XG5cdFx0ZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xuXHR9XG59O1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0VG9kb3NTdGF0ZSA9IChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS50b2RvczsiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJBeGlvc0h0dHBDbGllbnQiLCJJTklUSUFMX1NUQVRFIiwidG9kb3MiLCJsb2FkaW5nIiwiVG9kb3NTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJyZWR1Y2VycyIsInNldExvYWRpbmciLCJzdGF0ZSIsInBheWxvYWQiLCJzZXRFcnJvciIsImVycm9yIiwic2V0VG9kb3MiLCJhY3Rpb25zIiwicmVkdWNlciIsImdldFRvZG9zQnlVc2VyIiwiaWQiLCJvblN1Y2Nlc3MiLCJvbkVycm9yIiwiZGlzcGF0Y2giLCJib2R5IiwiZ2V0SW5zdGFuY2UiLCJnZXQiLCJ1cmwiLCJkYXRhIiwiZSIsInNlbGVjdFRvZG9zU3RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/ducks/todos.duck.ts\n");

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