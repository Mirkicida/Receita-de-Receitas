webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Main/Main.js":
false,

/***/ "./components/RecipeCard/RecipeCard.js":
/*!*********************************************!*\
  !*** ./components/RecipeCard/RecipeCard.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RecipeCard; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "E:\\Area de trabalho 500 GB\\shell\\site-receitas\\components\\RecipeCard\\RecipeCard.js";

function RecipeCard(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("figure", {
      className: "recipe-card",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/receitas/doces/brigadeiro",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            classname: "recipe-picture",
            src: props.imge,
            width: "320"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "recipe-category",
        children: props.category
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("figcaption", {
        className: "recipe-name",
        children: props.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}
_c = RecipeCard;

var _c;

$RefreshReg$(_c, "RecipeCard");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer/Footer */ "./components/Footer/Footer.js");
/* harmony import */ var _components_RecipeCard_RecipeCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/RecipeCard/RecipeCard */ "./components/RecipeCard/RecipeCard.js");

var _jsxFileName = "E:\\Area de trabalho 500 GB\\shell\\site-receitas\\pages\\index.js";




function Index() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "Receita de Receitas"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_RecipeCard_RecipeCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      imge: "/img/brigadeirao-gourmet.jpeg",
      category: "Doces",
      name: "Brigadeiro"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_RecipeCard_RecipeCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      imge: "/img/brigadeirao-gourmet.jpeg",
      category: "Doces",
      name: "Brigadeiro"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_RecipeCard_RecipeCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      imge: "/img/brigadeirao-gourmet.jpeg",
      category: "Doces",
      name: "Brigadeiro"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this); // retorna todos os dados dentro de um html
} // quando não existe o que chamar dentrop do codigo é chamado a funcao colocada como default

_c = Index;

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWNpcGVDYXJkL1JlY2lwZUNhcmQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlY2lwZUNhcmQiLCJwcm9wcyIsImltZ2UiLCJjYXRlZ29yeSIsIm5hbWUiLCJJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUEwQjtBQUNyQyxzQkFDSTtBQUFBLDJCQUVJO0FBQVEsZUFBUyxFQUFDLGFBQWxCO0FBQUEsOEJBRUEscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsNEJBQVg7QUFBQSwrQkFDQTtBQUFBLGlDQUNJO0FBQUsscUJBQVMsRUFBQyxnQkFBZjtBQUFnQyxlQUFHLEVBQUVBLEtBQUssQ0FBQ0MsSUFBM0M7QUFBaUQsaUJBQUssRUFBQztBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGQSxlQVFBO0FBQUssaUJBQVMsRUFBQyxpQkFBZjtBQUFBLGtCQUNLRCxLQUFLLENBQUNFO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJBLGVBWUE7QUFBWSxpQkFBUyxFQUFDLGFBQXRCO0FBQUEsa0JBQ0tGLEtBQUssQ0FBQ0c7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBdUJIO0tBeEJ1QkosVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnhCO0FBRUE7QUFDQTtBQUNBO0FBRWUsU0FBU0ssS0FBVCxHQUFnQjtBQUM3QixzQkFFRTtBQUFBLDRCQUVFLHFFQUFDLGlFQUFEO0FBQVEsV0FBSyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBSUUscUVBQUMseUVBQUQ7QUFBWSxVQUFJLEVBQUMsK0JBQWpCO0FBQWlELGNBQVEsRUFBQyxPQUExRDtBQUFrRSxVQUFJLEVBQUM7QUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBS0UscUVBQUMseUVBQUQ7QUFBWSxVQUFJLEVBQUMsK0JBQWpCO0FBQWlELGNBQVEsRUFBQyxPQUExRDtBQUFrRSxVQUFJLEVBQUM7QUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBTUUscUVBQUMseUVBQUQ7QUFBWSxVQUFJLEVBQUMsK0JBQWpCO0FBQWlELGNBQVEsRUFBQyxPQUExRDtBQUFrRSxVQUFJLEVBQUM7QUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBUUUscUVBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZGLENBRDZCLENBZTNCO0FBQ0gsQyxDQUFDOztLQWhCc0JBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTZhNmJhYzg5NjJiNzY3NGE5YTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNpcGVDYXJkKHByb3BzKXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJyZWNpcGUtY2FyZFwiPiBcclxuXHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVjZWl0YXMvZG9jZXMvYnJpZ2FkZWlyb1wiPlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NuYW1lPVwicmVjaXBlLXBpY3R1cmVcIiBzcmM9e3Byb3BzLmltZ2V9IHdpZHRoPVwiMzIwXCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY2lwZS1jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmNhdGVnb3J5fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxmaWdjYXB0aW9uIGNsYXNzTmFtZT1cInJlY2lwZS1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMubmFtZX1cclxuICAgICAgICAgICAgPC9maWdjYXB0aW9uPlxyXG5cclxuICAgICAgICAgICAgPC9maWd1cmU+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXInXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlcidcbmltcG9ydCBSZWNpcGVDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvUmVjaXBlQ2FyZC9SZWNpcGVDYXJkJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpe1xuICByZXR1cm4oXG5cbiAgICA8ZGl2PlxuXG4gICAgICA8SGVhZGVyIHRpdGxlPVwiUmVjZWl0YSBkZSBSZWNlaXRhc1wiIC8+XG5cbiAgICAgIDxSZWNpcGVDYXJkIGltZ2U9XCIvaW1nL2JyaWdhZGVpcmFvLWdvdXJtZXQuanBlZ1wiIGNhdGVnb3J5PVwiRG9jZXNcIiBuYW1lPVwiQnJpZ2FkZWlyb1wiLz5cbiAgICAgIDxSZWNpcGVDYXJkIGltZ2U9XCIvaW1nL2JyaWdhZGVpcmFvLWdvdXJtZXQuanBlZ1wiIGNhdGVnb3J5PVwiRG9jZXNcIiBuYW1lPVwiQnJpZ2FkZWlyb1wiLz5cbiAgICAgIDxSZWNpcGVDYXJkIGltZ2U9XCIvaW1nL2JyaWdhZGVpcmFvLWdvdXJtZXQuanBlZ1wiIGNhdGVnb3J5PVwiRG9jZXNcIiBuYW1lPVwiQnJpZ2FkZWlyb1wiLz5cblxuICAgICAgPEZvb3RlciAvPlxuXG4gICAgPC9kaXY+XG5cbiAgKSAvLyByZXRvcm5hIHRvZG9zIG9zIGRhZG9zIGRlbnRybyBkZSB1bSBodG1sXG59IC8vIHF1YW5kbyBuw6NvIGV4aXN0ZSBvIHF1ZSBjaGFtYXIgZGVudHJvcCBkbyBjb2RpZ28gw6kgY2hhbWFkbyBhIGZ1bmNhbyBjb2xvY2FkYSBjb21vIGRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9