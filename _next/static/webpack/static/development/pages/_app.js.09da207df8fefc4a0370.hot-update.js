webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/scroll-behavior/scroll-behavior.js":
/*!*******************************************************!*\
  !*** ./components/scroll-behavior/scroll-behavior.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var scroll_behavior__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! scroll-behavior */ "./node_modules/scroll-behavior/es/index.js");
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./history */ "./components/scroll-behavior/history.js");
/* harmony import */ var _StateStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StateStorage */ "./components/scroll-behavior/StateStorage.js");




Object(_history__WEBPACK_IMPORTED_MODULE_2__["default"])();
var stateStorage = new _StateStorage__WEBPACK_IMPORTED_MODULE_3__["default"]();
var scrollBehaviorSymbol = Symbol('scrollBehavior');

var createScrollBehavior = function createScrollBehavior(router) {
  if (router[scrollBehaviorSymbol]) {
    return router[scrollBehaviorSymbol];
  }

  router.beforePopState = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["wrap"])(router.beforePopState, function (beforePopState, fn) {
    fn = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["wrap"])(fn, function (fn, state) {
      // Restore location key from history
      location.key = state.locationKey;
      return fn(state);
    });
    return beforePopState.call(router, fn);
  });
  router.beforePopState(function () {
    return true;
  });
  var scrollBehavior = new scroll_behavior__WEBPACK_IMPORTED_MODULE_1__["default"]({
    addNavigationListener: function addNavigationListener(callback) {
      router.events.on('routeChangeComplete', callback);
      return function () {
        router.events.off('routeChangeComplete', callback);
      };
    },
    getCurrentLocation: function getCurrentLocation() {
      return location;
    },
    stateStorage: stateStorage
  });
  router[scrollBehaviorSymbol] = scrollBehavior;
  return scrollBehavior;
};

/* harmony default export */ __webpack_exports__["default"] = (createScrollBehavior);

/***/ })

})
//# sourceMappingURL=_app.js.09da207df8fefc4a0370.hot-update.js.map