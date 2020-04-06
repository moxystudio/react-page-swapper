webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/scroll-behavior/StateStorage.js":
/*!****************************************************!*\
  !*** ./components/scroll-behavior/StateStorage.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StateStorage; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _dom_state_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-state-storage */ "./components/scroll-behavior/dom-state-storage.js");



var STATE_KEY_PREFIX = '@@scroll|';

var StateStorage = /*#__PURE__*/function () {
  function StateStorage() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StateStorage);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(StateStorage, [{
    key: "read",
    value: function read(location, key) {
      console.log('get', location, key);
      return Object(_dom_state_storage__WEBPACK_IMPORTED_MODULE_2__["readState"])(this.getStateKey(location, key));
    }
  }, {
    key: "save",
    value: function save(location, key, value) {
      console.log('set', location, key, value);
      console.log('saving', this.getStateKey(location, key));
      Object(_dom_state_storage__WEBPACK_IMPORTED_MODULE_2__["saveState"])(this.getStateKey(location, key), value);
    }
  }, {
    key: "getStateKey",
    value: function getStateKey(location, key) {
      var locationKey = location.key;
      var stateKeyBase = "".concat(STATE_KEY_PREFIX).concat(locationKey);
      return key == null ? stateKeyBase : "".concat(stateKeyBase, "|").concat(key);
    }
  }]);

  return StateStorage;
}();



/***/ })

})
//# sourceMappingURL=_app.js.11d68af00c20758ce106.hot-update.js.map