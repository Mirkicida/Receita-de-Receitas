webpackHotUpdate_N_E("pages/receitas/doces/pudim",{

/***/ "./components/Recipe/Recipe.js":
/*!*************************************!*\
  !*** ./components/Recipe/Recipe.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Recipe; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Footer/Footer */ "./components/Footer/Footer.js");

var _jsxFileName = "E:\\Area de trabalho 500 GB\\shell\\site-receitas\\components\\Recipe\\Recipe.js";

 // Linha 8 --- para utilizar uma variavel em um titulo é necessario seguir o mesmo modelo

function Recipe(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Header_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Receita de Receitas - ".concat(props.name)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("article", {
        className: "recipe-body",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "recipe-body-name",
          children: props.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: "recipe-body-picture",
          alt: "{props.name}",
          src: props.picture
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fas fa-stopwatch fa-fw"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 25
          }, this), "Preparo: ", props.time, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 89
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fas fa-utensils fa-fw"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 25
          }, this), "Rendimento: ", props.servings]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, this), props.children]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}
_c = Recipe;

var _c;

$RefreshReg$(_c, "Recipe");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWNpcGUvUmVjaXBlLmpzIl0sIm5hbWVzIjpbIlJlY2lwZSIsInByb3BzIiwibmFtZSIsInBpY3R1cmUiLCJ0aW1lIiwic2VydmluZ3MiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFDZSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUFzQjtBQUNqQyxzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLHNEQUFEO0FBQVEsV0FBSyxrQ0FBMkJBLEtBQUssQ0FBQ0MsSUFBakM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFHSTtBQUFBLDZCQUNJO0FBQVMsaUJBQVMsRUFBQyxhQUFuQjtBQUFBLGdDQUVJO0FBQUksbUJBQVMsRUFBQyxrQkFBZDtBQUFBLG9CQUNLRCxLQUFLLENBQUNDO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQU1JO0FBQUssbUJBQVMsRUFBQyxxQkFBZjtBQUFxQyxhQUFHLEVBQUMsY0FBekM7QUFBd0QsYUFBRyxFQUFFRCxLQUFLLENBQUNFO0FBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkosZUFRSTtBQUFBLGtDQUNJO0FBQUcscUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFDd0RGLEtBQUssQ0FBQ0csSUFEOUQsb0JBQ29FO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRHBFLGVBRUk7QUFBRyxxQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixrQkFFMERILEtBQUssQ0FBQ0ksUUFGaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJKLEVBYUtKLEtBQUssQ0FBQ0ssUUFiWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEosZUFzQkkscUVBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTJCSDtLQTVCdUJOLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVjZWl0YXMvZG9jZXMvcHVkaW0uZGRjMzE0NjRiMjk4ZjJjNmZiNGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSAnLi4vSGVhZGVyL0hlYWRlcidcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9Gb290ZXIvRm9vdGVyJ1xyXG5cclxuLy8gTGluaGEgOCAtLS0gcGFyYSB1dGlsaXphciB1bWEgdmFyaWF2ZWwgZW0gdW0gdGl0dWxvIMOpIG5lY2Vzc2FyaW8gc2VndWlyIG8gbWVzbW8gbW9kZWxvXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlY2lwZShwcm9wcyl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWRlciB0aXRsZT17YFJlY2VpdGEgZGUgUmVjZWl0YXMgLSAke3Byb3BzLm5hbWV9YH0vPiBcclxuXHJcbiAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwicmVjaXBlLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicmVjaXBlLWJvZHktbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInJlY2lwZS1ib2R5LXBpY3R1cmVcIiBhbHQ9XCJ7cHJvcHMubmFtZX1cIiBzcmM9e3Byb3BzLnBpY3R1cmV9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zdG9wd2F0Y2ggZmEtZndcIj48L2k+UHJlcGFybzoge3Byb3BzLnRpbWV9IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXRlbnNpbHMgZmEtZndcIj48L2k+UmVuZGltZW50bzoge3Byb3BzLnNlcnZpbmdzfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcblxyXG4gICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICA8L21haW4+XHJcblxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==