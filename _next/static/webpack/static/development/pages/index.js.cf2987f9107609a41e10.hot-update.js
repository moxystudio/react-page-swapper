webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/page-transition/PageTransition.js":
/*!******************************************************!*\
  !*** ./components/page-transition/PageTransition.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _PageTransition_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageTransition.module.css */ "./components/page-transition/PageTransition.module.css");
/* harmony import */ var _PageTransition_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_PageTransition_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "/Users/satazor/Work/moxy.org/react-page-swapper/demo/components/page-transition/PageTransition.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var animationsTimeout = {
  fade: 650,
  slideLeft: 650,
  slideRight: 650,
  slideUpScale: 650,
  slideDownScale: 650
};

var PageTransition = function PageTransition(_ref) {
  var _animationsTimeout$an;

  var node = _ref.node,
      animation = _ref.animation,
      style = _ref.style,
      inProp = _ref["in"],
      onEntered = _ref.onEntered,
      onExited = _ref.onExited;
  return __jsx("div", {
    className: _PageTransition_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["CSSTransition"], {
    "in": inProp,
    onEntered: onEntered,
    onExited: onExited,
    classNames: {
      enter: _PageTransition_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.enter,
      enterActive: _PageTransition_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.enterActive,
      enterDone: _PageTransition_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.enterDone,
      exit: _PageTransition_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.exit,
      exitActive: _PageTransition_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.exitActive,
      exitDone: _PageTransition_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.exitDone
    },
    timeout: (_animationsTimeout$an = animationsTimeout[animation]) !== null && _animationsTimeout$an !== void 0 ? _animationsTimeout$an : 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _PageTransition_module_css__WEBPACK_IMPORTED_MODULE_3___default.a[animation],
    style: style,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, node)));
};

PageTransition.propTypes = {
  node: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element.isRequired,
  animation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['none', 'slideLeft', 'slideRight', 'slideUpScale', 'slideDownScale', 'fade']),
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  "in": prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (PageTransition);

/***/ })

})
//# sourceMappingURL=index.js.cf2987f9107609a41e10.hot-update.js.map