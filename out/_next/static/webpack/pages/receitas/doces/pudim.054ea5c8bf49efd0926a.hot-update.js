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

 // Linha 9 --- para utilizar uma variavel em um titulo é necessario seguir o mesmo modelo
// Linha 25 -- para criar um conteudo customizavél dentro de uma pagina, basta usar a propriedade 'children'

function Recipe(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Header_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Receita de Receitas - ".concat(props.name)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("article", {
        className: "recipe-body",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "recipe-body-name",
          children: props.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: "recipe-body-picture",
          alt: "{props.name}",
          src: props.picture
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fas fa-stopwatch fa-fw"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 25
          }, this), "Preparo: ", props.time, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 89
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fas fa-utensils fa-fw"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 25
          }, this), "Rendimento: ", props.servings]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this), props.children]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWNpcGUvUmVjaXBlLmpzIl0sIm5hbWVzIjpbIlJlY2lwZSIsInByb3BzIiwibmFtZSIsInBpY3R1cmUiLCJ0aW1lIiwic2VydmluZ3MiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTtBQUNBOztBQUNlLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXNCO0FBQ2pDLHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMsc0RBQUQ7QUFBUSxXQUFLLGtDQUEyQkEsS0FBSyxDQUFDQyxJQUFqQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUdJO0FBQUEsNkJBQ0k7QUFBUyxpQkFBUyxFQUFDLGFBQW5CO0FBQUEsZ0NBRUk7QUFBSSxtQkFBUyxFQUFDLGtCQUFkO0FBQUEsb0JBQ0tELEtBQUssQ0FBQ0M7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBTUk7QUFBSyxtQkFBUyxFQUFDLHFCQUFmO0FBQXFDLGFBQUcsRUFBQyxjQUF6QztBQUF3RCxhQUFHLEVBQUVELEtBQUssQ0FBQ0U7QUFBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFOSixlQVFJO0FBQUEsa0NBQ0k7QUFBRyxxQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUN3REYsS0FBSyxDQUFDRyxJQUQ5RCxvQkFDb0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEcEUsZUFFSTtBQUFHLHFCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKLGtCQUUwREgsS0FBSyxDQUFDSSxRQUZoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkosRUFhS0osS0FBSyxDQUFDSyxRQWJYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixlQXNCSSxxRUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBMkJIO0tBNUJ1Qk4sTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWNlaXRhcy9kb2Nlcy9wdWRpbS4wNTRlYTVjOGJmNDllZmQwOTI2YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuLi9IZWFkZXIvSGVhZGVyJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL0Zvb3Rlci9Gb290ZXInXHJcblxyXG4vLyBMaW5oYSA5IC0tLSBwYXJhIHV0aWxpemFyIHVtYSB2YXJpYXZlbCBlbSB1bSB0aXR1bG8gw6kgbmVjZXNzYXJpbyBzZWd1aXIgbyBtZXNtbyBtb2RlbG9cclxuLy8gTGluaGEgMjUgLS0gcGFyYSBjcmlhciB1bSBjb250ZXVkbyBjdXN0b21pemF2w6lsIGRlbnRybyBkZSB1bWEgcGFnaW5hLCBiYXN0YSB1c2FyIGEgcHJvcHJpZWRhZGUgJ2NoaWxkcmVuJ1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNpcGUocHJvcHMpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgdGl0bGU9e2BSZWNlaXRhIGRlIFJlY2VpdGFzIC0gJHtwcm9wcy5uYW1lfWB9Lz4gXHJcblxyXG4gICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cInJlY2lwZS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInJlY2lwZS1ib2R5LW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJyZWNpcGUtYm9keS1waWN0dXJlXCIgYWx0PVwie3Byb3BzLm5hbWV9XCIgc3JjPXtwcm9wcy5waWN0dXJlfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc3RvcHdhdGNoIGZhLWZ3XCI+PC9pPlByZXBhcm86IHtwcm9wcy50aW1lfSA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXV0ZW5zaWxzIGZhLWZ3XCI+PC9pPlJlbmRpbWVudG86IHtwcm9wcy5zZXJ2aW5nc31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG5cclxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG5cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=