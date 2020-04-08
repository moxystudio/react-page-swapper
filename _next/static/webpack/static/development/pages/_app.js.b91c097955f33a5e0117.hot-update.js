webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_global.css */ "./pages/_global.css");
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_global_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _moxy_react_page_swapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @moxy/react-page-swapper */ "./node_modules/@moxy/react-page-swapper/es/index.js");
/* harmony import */ var _mapbox_scroll_restorer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mapbox/scroll-restorer */ "./node_modules/@mapbox/scroll-restorer/index.js");
/* harmony import */ var _mapbox_scroll_restorer__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mapbox_scroll_restorer__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_theme_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/theme-provider */ "./components/theme-provider/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components */ "./components/index.js");
/* harmony import */ var _app_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_app.module.css */ "./pages/_app.module.css");
/* harmony import */ var _app_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_app_module_css__WEBPACK_IMPORTED_MODULE_10__);


var _this = undefined,
    _jsxFileName = "/Users/satazor/Work/moxy.org/react-page-swapper/demo/pages/_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










console.log(_mapbox_scroll_restorer__WEBPACK_IMPORTED_MODULE_7___default.a);

var App = function App(_ref) {
  var _router$query$animati;

  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    _mapbox_scroll_restorer__WEBPACK_IMPORTED_MODULE_7___default.a.start();
  }, []);
  var handleSwapBegin = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    _mapbox_scroll_restorer__WEBPACK_IMPORTED_MODULE_7___default.a.stop();
  }, []);
  var handleSwapEnd = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    _mapbox_scroll_restorer__WEBPACK_IMPORTED_MODULE_7___default.a.start();
  }, []);
  var updateScroll = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    var scroll = _mapbox_scroll_restorer__WEBPACK_IMPORTED_MODULE_7___default.a.getSavedScroll();

    if (!scroll) {
      window.scrollTo(0, 0);
    } else {
      _mapbox_scroll_restorer__WEBPACK_IMPORTED_MODULE_7___default.a.restoreScroll();
    }
  }, []);
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, "@moxy/react-page-swapper demo")), __jsx(_components_theme_provider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx(_moxy_react_page_swapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: _app_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.pageSwapper,
    node: __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 28
      }
    })),
    animation: (_router$query$animati = router.query.animation) !== null && _router$query$animati !== void 0 ? _router$query$animati : 'none',
    updateScroll: updateScroll,
    onSwapBegin: handleSwapBegin,
    onSwapEnd: handleSwapEnd,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, function (props) {
    return __jsx(_components__WEBPACK_IMPORTED_MODULE_9__["PageTransition"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 34
      }
    }));
  })));
};

App.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType.isRequired,
  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=_app.js.b91c097955f33a5e0117.hot-update.js.map