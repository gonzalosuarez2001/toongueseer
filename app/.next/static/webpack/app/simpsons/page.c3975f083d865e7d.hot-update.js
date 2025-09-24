/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/simpsons/page",{

/***/ "(app-pages-browser)/./src/shared/components/organisms/ToonCongrats.tsx":
/*!**********************************************************!*\
  !*** ./src/shared/components/organisms/ToonCongrats.tsx ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "(app-pages-browser)/./src/shared/components/templates/SimpsonsTemplate.tsx":
/*!**************************************************************!*\
  !*** ./src/shared/components/templates/SimpsonsTemplate.tsx ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SimpsonsTemplate)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shared_hooks_ToonProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/hooks/ToonProvider */ \"(app-pages-browser)/./src/shared/hooks/ToonProvider.tsx\");\n/* harmony import */ var _organisms_ToonHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../organisms/ToonHeader */ \"(app-pages-browser)/./src/shared/components/organisms/ToonHeader.tsx\");\n/* harmony import */ var _organisms_ToonImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../organisms/ToonImage */ \"(app-pages-browser)/./src/shared/components/organisms/ToonImage.tsx\");\n/* harmony import */ var _organisms_ToonFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../organisms/ToonFooter */ \"(app-pages-browser)/./src/shared/components/organisms/ToonFooter.tsx\");\n/* harmony import */ var _molecules_ToonSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../molecules/ToonSelector */ \"(app-pages-browser)/./src/shared/components/molecules/ToonSelector.tsx\");\n/* harmony import */ var _molecules_ToonTracker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../molecules/ToonTracker */ \"(app-pages-browser)/./src/shared/components/molecules/ToonTracker.tsx\");\n/* harmony import */ var _organisms_ToonCongrats__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../organisms/ToonCongrats */ \"(app-pages-browser)/./src/shared/components/organisms/ToonCongrats.tsx\");\n/* harmony import */ var _organisms_ToonCongrats__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_organisms_ToonCongrats__WEBPACK_IMPORTED_MODULE_8__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction SimpsonsTemplate(param) {\n    let { toons, dailyToon } = param;\n    _s();\n    const { setToons, setDailyToon, setCartoon, loadToonsTried } = (0,_shared_hooks_ToonProvider__WEBPACK_IMPORTED_MODULE_2__.useToon)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"SimpsonsTemplate.useEffect\": ()=>{\n            setToons(toons);\n            setDailyToon(dailyToon);\n            setCartoon(\"simpsons\");\n            loadToonsTried();\n        }\n    }[\"SimpsonsTemplate.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative min-h-screen w-screen flex justify-center bg-toon-simpsons font-medium text-xl text-gray-700\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_organisms_ToonHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/gonzalo/Documentos/personal/toonguesser/app/src/shared/components/templates/SimpsonsTemplate.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_organisms_ToonImage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/gonzalo/Documentos/personal/toonguesser/app/src/shared/components/templates/SimpsonsTemplate.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_molecules_ToonSelector__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/gonzalo/Documentos/personal/toonguesser/app/src/shared/components/templates/SimpsonsTemplate.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_molecules_ToonTracker__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/gonzalo/Documentos/personal/toonguesser/app/src/shared/components/templates/SimpsonsTemplate.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_organisms_ToonCongrats__WEBPACK_IMPORTED_MODULE_8___default()), {}, void 0, false, {\n                    fileName: \"/home/gonzalo/Documentos/personal/toonguesser/app/src/shared/components/templates/SimpsonsTemplate.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_organisms_ToonFooter__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/gonzalo/Documentos/personal/toonguesser/app/src/shared/components/templates/SimpsonsTemplate.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/gonzalo/Documentos/personal/toonguesser/app/src/shared/components/templates/SimpsonsTemplate.tsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/gonzalo/Documentos/personal/toonguesser/app/src/shared/components/templates/SimpsonsTemplate.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(SimpsonsTemplate, \"kldR4H1l/eQuPR9wD09SsgbqcCk=\", false, function() {\n    return [\n        _shared_hooks_ToonProvider__WEBPACK_IMPORTED_MODULE_2__.useToon\n    ];\n});\n_c = SimpsonsTemplate;\nvar _c;\n$RefreshReg$(_c, \"SimpsonsTemplate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy90ZW1wbGF0ZXMvU2ltcHNvbnNUZW1wbGF0ZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJa0M7QUFDb0I7QUFDTDtBQUNGO0FBQ0U7QUFDSTtBQUNGO0FBQ0U7QUFFdEMsU0FBU1EsaUJBQWlCLEtBTXhDO1FBTndDLEVBQ3ZDQyxLQUFLLEVBQ0xDLFNBQVMsRUFJVixHQU53Qzs7SUFPdkMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFlBQVksRUFBRUMsVUFBVSxFQUFFQyxjQUFjLEVBQUUsR0FBR2IsbUVBQU9BO0lBRXRFRCxnREFBU0E7c0NBQUM7WUFDUlcsU0FBU0Y7WUFDVEcsYUFBYUY7WUFDYkcsV0FBVztZQUNYQztRQUNGO3FDQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7OzhCQUNDLDhEQUFDYiw2REFBVUE7Ozs7OzhCQUNYLDhEQUFDQyw0REFBU0E7Ozs7OzhCQUNWLDhEQUFDRSwrREFBWUE7Ozs7OzhCQUNiLDhEQUFDQyw4REFBV0E7Ozs7OzhCQUNaLDhEQUFDQyxnRUFBWUE7Ozs7OzhCQUNiLDhEQUFDSCw2REFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbkI7R0E1QndCSTs7UUFPeUNQLCtEQUFPQTs7O0tBUGhETyIsInNvdXJjZXMiOlsiL2hvbWUvZ29uemFsby9Eb2N1bWVudG9zL3BlcnNvbmFsL3Rvb25ndWVzc2VyL2FwcC9zcmMvc2hhcmVkL2NvbXBvbmVudHMvdGVtcGxhdGVzL1NpbXBzb25zVGVtcGxhdGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFBpeGVsYWJsZUltYWdlIGZyb20gXCJAL3NoYXJlZC9jb21wb25lbnRzL29yZ2FuaXNtcy9QaXhlbGFibGVJbWFnZVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgdHlwZSB7IFRvb24gfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlVG9vbiB9IGZyb20gXCJAL3NoYXJlZC9ob29rcy9Ub29uUHJvdmlkZXJcIjtcbmltcG9ydCBUb29uSGVhZGVyIGZyb20gXCIuLi9vcmdhbmlzbXMvVG9vbkhlYWRlclwiO1xuaW1wb3J0IFRvb25JbWFnZSBmcm9tIFwiLi4vb3JnYW5pc21zL1Rvb25JbWFnZVwiO1xuaW1wb3J0IFRvb25Gb290ZXIgZnJvbSBcIi4uL29yZ2FuaXNtcy9Ub29uRm9vdGVyXCI7XG5pbXBvcnQgVG9vblNlbGVjdG9yIGZyb20gXCIuLi9tb2xlY3VsZXMvVG9vblNlbGVjdG9yXCI7XG5pbXBvcnQgVG9vblRyYWNrZXIgZnJvbSBcIi4uL21vbGVjdWxlcy9Ub29uVHJhY2tlclwiO1xuaW1wb3J0IFRvb25Db25ncmF0cyBmcm9tIFwiLi4vb3JnYW5pc21zL1Rvb25Db25ncmF0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW1wc29uc1RlbXBsYXRlKHtcbiAgdG9vbnMsXG4gIGRhaWx5VG9vbixcbn06IHtcbiAgdG9vbnM6IFRvb25bXTtcbiAgZGFpbHlUb29uOiBudW1iZXI7XG59KSB7XG4gIGNvbnN0IHsgc2V0VG9vbnMsIHNldERhaWx5VG9vbiwgc2V0Q2FydG9vbiwgbG9hZFRvb25zVHJpZWQgfSA9IHVzZVRvb24oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRvb25zKHRvb25zKTtcbiAgICBzZXREYWlseVRvb24oZGFpbHlUb29uKTtcbiAgICBzZXRDYXJ0b29uKFwic2ltcHNvbnNcIik7XG4gICAgbG9hZFRvb25zVHJpZWQoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtaW4taC1zY3JlZW4gdy1zY3JlZW4gZmxleCBqdXN0aWZ5LWNlbnRlciBiZy10b29uLXNpbXBzb25zIGZvbnQtbWVkaXVtIHRleHQteGwgdGV4dC1ncmF5LTcwMFwiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPFRvb25IZWFkZXIgLz5cbiAgICAgICAgPFRvb25JbWFnZSAvPlxuICAgICAgICA8VG9vblNlbGVjdG9yIC8+XG4gICAgICAgIDxUb29uVHJhY2tlciAvPlxuICAgICAgICA8VG9vbkNvbmdyYXRzIC8+XG4gICAgICAgIDxUb29uRm9vdGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VUb29uIiwiVG9vbkhlYWRlciIsIlRvb25JbWFnZSIsIlRvb25Gb290ZXIiLCJUb29uU2VsZWN0b3IiLCJUb29uVHJhY2tlciIsIlRvb25Db25ncmF0cyIsIlNpbXBzb25zVGVtcGxhdGUiLCJ0b29ucyIsImRhaWx5VG9vbiIsInNldFRvb25zIiwic2V0RGFpbHlUb29uIiwic2V0Q2FydG9vbiIsImxvYWRUb29uc1RyaWVkIiwiZGl2IiwiY2xhc3NOYW1lIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/shared/components/templates/SimpsonsTemplate.tsx\n"));

/***/ })

});