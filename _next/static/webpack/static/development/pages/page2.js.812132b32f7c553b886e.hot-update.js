webpackHotUpdate("static/development/pages/page2.js",{

/***/ "./components/animation-picker/AnimationPicker.js":
/*!********************************************************!*\
  !*** ./components/animation-picker/AnimationPicker.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _AnimationPicker_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AnimationPicker.module.css */ "./components/animation-picker/AnimationPicker.module.css");
/* harmony import */ var _AnimationPicker_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_AnimationPicker_module_css__WEBPACK_IMPORTED_MODULE_6__);


var _this = undefined,
    _jsxFileName = "/Users/satazor/Work/moxy.org/react-page-swapper/demo/components/animation-picker/AnimationPicker.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var AnimationPicker = function AnimationPicker(_ref) {
  var nextHref = _ref.nextHref,
      followScroll = _ref.followScroll;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      animate = _useState[0],
      setAnimate = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      scrollTop = _useState2[0],
      setScrollTop = _useState2[1];

  var scrollTimeoutIdRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!followScroll) {
      return;
    }

    var handleScroll = function handleScroll() {
      clearTimeout(scrollTimeoutIdRef.current);
      scrollTimeoutIdRef.current = setTimeout(function () {
        setScrollTop(document.scrollingElement.scrollTop - (window.outerHeight - window.innerHeight) / 2);
      }, 200);
    };

    setScrollTop(document.scrollingElement.scrollTop - (window.outerHeight - window.innerHeight) / 2);
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return function () {
      clearTimeout(scrollTimeoutIdRef.current);
      window.removeEventListener('scroll', handleScroll, {
        passive: true
      });
    };
  }, [followScroll]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var setAnimateTimeoutId = setTimeout(function () {
      return setAnimate(true);
    }, 50);
    return function () {
      clearTimeout(setAnimateTimeoutId);
    };
  }, []);
  var style = {
    transform: "translate(-50%, calc(-50% + ".concat(scrollTop, "px))")
  };
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    elevation: 3,
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_AnimationPicker_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.animationPicker, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _AnimationPicker_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.animate, animate)),
    style: style,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "".concat(nextHref, "?animation=slideLeft"),
    passHref: true,
    scroll: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    variant: "contained",
    disableRipple: true,
    className: _AnimationPicker_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, "Slide left")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "".concat(nextHref, "?animation=slideRight"),
    passHref: true,
    scroll: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    variant: "contained",
    disableRipple: true,
    className: _AnimationPicker_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, "Slide right")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "".concat(nextHref, "?animation=glideLeft"),
    passHref: true,
    scroll: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    variant: "contained",
    disableRipple: true,
    className: _AnimationPicker_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, "Glide left")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "".concat(nextHref, "?animation=glideRight"),
    passHref: true,
    scroll: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    variant: "contained",
    disableRipple: true,
    className: _AnimationPicker_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, "Glide right")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "".concat(nextHref, "?animation=fade"),
    passHref: true,
    scroll: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    variant: "contained",
    disableRipple: true,
    className: _AnimationPicker_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, "Fade")));
};

AnimationPicker.propTypes = {
  nextHref: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  followScroll: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (AnimationPicker);

/***/ })

})
//# sourceMappingURL=page2.js.812132b32f7c553b886e.hot-update.js.map