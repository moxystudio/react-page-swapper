webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/scroll-behavior/history.js":
/*!***********************************************!*\
  !*** ./components/scroll-behavior/history.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


var createKey = function createKey() {
  return Math.random().toString(36).substr(2, 8);
};

var setupHistory = function setupHistory() {
  history.scrollRestoration = 'manual';
  location.key = createKey();
  history.pushState = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["wrap"])(history.pushState, function (pushState, state, title, url) {
    if (state) {
      var _history$state;

      if (((_history$state = history.state) === null || _history$state === void 0 ? void 0 : _history$state.as) !== url) {
        state.locationKey = createKey();
        location.key = state.locationKey;
      } else {
        state.locationKey = location.key;
      }
    }

    pushState.call(history, state, title, url);
  });
  history.replaceState = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["wrap"])(history.replaceState, function (replaceState, state, title, url) {
    if (state) {
      var _history$state2;

      if (((_history$state2 = history.state) === null || _history$state2 === void 0 ? void 0 : _history$state2.as) !== url) {
        state.locationKey = createKey();
        location.key = state.locationKey;
      } else {
        state.locationKey = location.key;
      }
    }

    replaceState.call(history, state, title, url);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (setupHistory);

/***/ })

})
//# sourceMappingURL=_app.js.2e66f848d78ff7da46bd.hot-update.js.map