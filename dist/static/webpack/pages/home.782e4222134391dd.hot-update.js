"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./components/org-spinner/org-spinner.styles.ts":
/*!******************************************************!*\
  !*** ./components/org-spinner/org-spinner.styles.ts ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Spinner\": function() { return /* binding */ Spinner; },\n/* harmony export */   \"SpinnerWrapper\": function() { return /* binding */ SpinnerWrapper; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"../node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    0% {\\n        top: 36px;\\n        left: 36px;\\n        width: 0;\\n        height: 0;\\n        opacity: 1;\\n    }\\n    100% {\\n        top: 0px;\\n        left: 0px;\\n        width: 72px;\\n        height: 72px;\\n        opacity: 0;\\n    }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    display: inline-block;\\n    position: relative;\\n    width: 80px;\\n    height: 80px;\\n    animation: \",\n        \" 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\\n    color: #fff;\\n\\n    div {\\n        position: absolute;\\n        border: 4px solid #fff;\\n        opacity: 1;\\n        border-radius: 50%;\\n    }\\n\\n    div:nth-child(2) {\\n        animation-delay: -0.5s;\\n    }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    display: flex;\\n    width: 100%;\\n    justify-content: center;\\n    margin-top: 300px;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nvar animate = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(_templateObject());\nvar Spinner = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject1(), animate);\nvar SpinnerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject2());\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL29yZy1zcGlubmVyL29yZy1zcGlubmVyLnN0eWxlcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW1EOzs7Ozs7Ozs7Ozs7O1FBRXpCLENBZTFCOzs7Ozs7Ozs7UUFFa0MsQ0FLbkI7UUFBVSxDQWF6Qjs7Ozs7Ozs7O1FBRXlDLENBS3pDOzs7Ozs7O0FBMUNBLEdBQUssQ0FBQ0UsT0FBTyxHQUFHRCw0REFBUztBQWlCbEIsR0FBSyxDQUFDRSxPQUFPLEdBQUdILDZEQUFVLHFCQUtoQkUsT0FBTztBQWVqQixHQUFLLENBQUNHLGNBQWMsR0FBR0wsNkRBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmctc3Bpbm5lci9vcmctc3Bpbm5lci5zdHlsZXMudHM/ZDI0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7a2V5ZnJhbWVzfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IGFuaW1hdGUgPSBrZXlmcmFtZXNgXG4gICAgMCUge1xuICAgICAgICB0b3A6IDM2cHg7XG4gICAgICAgIGxlZnQ6IDM2cHg7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICB3aWR0aDogNzJweDtcbiAgICAgICAgaGVpZ2h0OiA3MnB4O1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTcGlubmVyID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBhbmltYXRpb246ICR7YW5pbWF0ZX0gMXMgY3ViaWMtYmV6aWVyKDAsIDAuMiwgMC44LCAxKSBpbmZpbml0ZTtcbiAgICBjb2xvcjogI2ZmZjtcblxuICAgIGRpdiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cblxuICAgIGRpdjpudGgtY2hpbGQoMikge1xuICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xuICAgIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTcGlubmVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAzMDBweDtcbmA7XG4iXSwibmFtZXMiOlsic3R5bGVkIiwia2V5ZnJhbWVzIiwiYW5pbWF0ZSIsIlNwaW5uZXIiLCJkaXYiLCJTcGlubmVyV3JhcHBlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/org-spinner/org-spinner.styles.ts\n");

/***/ })

});