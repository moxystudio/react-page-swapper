webpackHotUpdate("static/development/pages/page2.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/page-transition/PageTransition.module.css":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./components/page-transition/PageTransition.module.css ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "/**\n * Below you will find `@supports not (-webkit-touch-callout: none)` and `@supports (-webkit-touch-callout: none)` usages.\n * The first rule targets browsers other than iOS browsers, and the second is the opposite.\n * We are using it because using `transform` in combination with fixed elements causes flickering in iOS browsers.\n * To circumvent that, we use non `transform` styles, such as `left` ONLY for iOS browsers.\n */\n\n/* ==========================================================================\n   Fade\n   ========================================================================== */\n\n.PageTransition_fade__2ObpC {\n    transition: opacity 0.6s\n}\n\n.PageTransition_fade__2ObpC.PageTransition_enter__8z6yq {\n        opacity: 0;\n    }\n\n.PageTransition_fade__2ObpC.PageTransition_enterActive__3BzXp,\n    .PageTransition_fade__2ObpC.PageTransition_enterDone__SEshm {\n        opacity: 1;\n    }\n\n/* ==========================================================================\n   Slide left\n   ========================================================================== */\n\n@supports not (-webkit-touch-callout: none) {\n    .PageTransition_slideLeft__3LW9j {\n        transition: transform 0.6s;\n        -webkit-backface-visibility: hidden;\n                backface-visibility: hidden\n    }\n\n        .PageTransition_slideLeft__3LW9j.PageTransition_enter__8z6yq {\n            transform: translateX(100vw);\n        }\n\n        .PageTransition_slideLeft__3LW9j.PageTransition_enterActive__3BzXp,\n        .PageTransition_slideLeft__3LW9j.PageTransition_enterDone__SEshm {\n            transform: translateX(0);\n        }\n}\n\n@supports (-webkit-touch-callout: none) {\n    .PageTransition_slideLeft__3LW9j {\n        position: relative;\n        transition: left 0.6s\n    }\n\n        .PageTransition_slideLeft__3LW9j.PageTransition_enter__8z6yq {\n            left: 100vw;\n        }\n\n        .PageTransition_slideLeft__3LW9j.PageTransition_enterActive__3BzXp,\n        .PageTransition_slideLeft__3LW9j.PageTransition_enterDone__SEshm {\n            left: 0;\n        }\n}\n\n/* ==========================================================================\n   Slide right\n   ========================================================================== */\n\n@supports not (-webkit-touch-callout: none) {\n    .PageTransition_slideRight__23WvB {\n        transition: transform 0.6s\n    }\n\n        .PageTransition_slideRight__23WvB.PageTransition_enter__8z6yq {\n            transform: translateX(-100vw);\n        }\n\n        .PageTransition_slideRight__23WvB.PageTransition_enterActive__3BzXp,\n        .PageTransition_slideRight__23WvB.PageTransition_enterDone__SEshm {\n            transform: translateX(0);\n        }\n}\n\n@supports (-webkit-touch-callout: none) {\n    .PageTransition_slideRight__23WvB {\n        position: relative;\n        transition: left 0.6s\n    }\n\n        .PageTransition_slideRight__23WvB.PageTransition_enter__8z6yq {\n            left: -100vw;\n        }\n\n        .PageTransition_slideRight__23WvB.PageTransition_enterActive__3BzXp,\n        .PageTransition_slideRight__23WvB.PageTransition_enterDone__SEshm {\n            left: 0;\n        }\n}\n\n/* ==========================================================================\n   Glide left\n   ========================================================================== */\n\n@supports not (-webkit-touch-callout: none) {\n    .PageTransition_glideLeft__2G5ER {\n        transition: transform 0.6s;\n        -webkit-backface-visibility: hidden;\n                backface-visibility: hidden /* Necessary because of performance on Firefox */\n    }\n\n        .PageTransition_glideLeft__2G5ER.PageTransition_enter__8z6yq {\n            transform: translateX(100vw);\n        }\n\n        .PageTransition_glideLeft__2G5ER.PageTransition_enterActive__3BzXp,\n        .PageTransition_glideLeft__2G5ER.PageTransition_enterDone__SEshm,\n        .PageTransition_glideLeft__2G5ER.PageTransition_exit__269gm {\n            transform: translateX(0);\n        }\n\n        .PageTransition_glideLeft__2G5ER.PageTransition_exitActive__1nGYR,\n        .PageTransition_glideLeft__2G5ER.PageTransition_exitDone__GIlY9 {\n            transform: translateX(-25vw);\n        }\n}\n\n@supports (-webkit-touch-callout: none) {\n    .PageTransition_glideLeft__2G5ER {\n        position: relative;\n        transition: left 0.6s\n    }\n\n        .PageTransition_glideLeft__2G5ER.PageTransition_enter__8z6yq {\n            left: 100vw;\n        }\n\n        .PageTransition_glideLeft__2G5ER.PageTransition_enterActive__3BzXp,\n        .PageTransition_glideLeft__2G5ER.PageTransition_enterDone__SEshm,\n        .PageTransition_glideLeft__2G5ER.PageTransition_exit__269gm {\n            left: 0;\n        }\n\n        .PageTransition_glideLeft__2G5ER.PageTransition_exitActive__1nGYR,\n        .PageTransition_glideLeft__2G5ER.PageTransition_exitDone__GIlY9 {\n            left: -25vw;\n        }\n}\n\n/* ==========================================================================\n   Glide right\n   ========================================================================== */\n\n@supports not (-webkit-touch-callout: none) {\n    .PageTransition_glideRight__aVErR {\n        transition: transform 0.6s;\n        -webkit-backface-visibility: hidden;\n                backface-visibility: hidden /* Necessary because of performance on Firefox */\n    }\n\n        .PageTransition_glideRight__aVErR.PageTransition_enter__8z6yq {\n            transform: translateX(-100vw);\n        }\n\n        .PageTransition_glideRight__aVErR.PageTransition_enterActive__3BzXp,\n        .PageTransition_glideRight__aVErR.PageTransition_enterDone__SEshm,\n        .PageTransition_glideRight__aVErR.PageTransition_exit__269gm {\n            transform: translateX(0);\n        }\n\n        .PageTransition_glideRight__aVErR.PageTransition_exitActive__1nGYR,\n        .PageTransition_glideRight__aVErR.PageTransition_exitDone__GIlY9 {\n            transform: translateX(25vw);\n        }\n}\n\n@supports (-webkit-touch-callout: none) {\n    .PageTransition_glideRight__aVErR {\n        position: relative;\n        transition: left 0.6s\n    }\n\n        .PageTransition_glideRight__aVErR.PageTransition_enter__8z6yq {\n            left: -100vw;\n        }\n\n        .PageTransition_glideRight__aVErR.PageTransition_enterActive__3BzXp,\n        .PageTransition_glideRight__aVErR.PageTransition_enterDone__SEshm,\n        .PageTransition_glideRight__aVErR.PageTransition_exit__269gm {\n            left: 0;\n        }\n\n        .PageTransition_glideRight__aVErR.PageTransition_exitActive__1nGYR,\n        .PageTransition_glideRight__aVErR.PageTransition_exitDone__GIlY9 {\n            left: 25vw;\n        }\n}\n", "",{"version":3,"sources":["/Users/satazor/Work/moxy.org/react-page-swapper/demo/components/page-transition/PageTransition.module.css"],"names":[],"mappings":"AAAA;;;;;EAKE;;AAEF;;+EAE+E;;AAE/E;IACI;AAUJ;;AARI;QACI,UAAU;IACd;;AAEA;;QAEI,UAAU;IACd;;AAGJ;;+EAE+E;;AAE/E;IACI;QACI,0BAA0B;QAC1B,mCAA2B;gBAA3B;IAUJ;;QARI;YACI,4BAA4B;QAChC;;QAEA;;YAEI,wBAAwB;QAC5B;AAER;;AAEA;IACI;QACI,kBAAkB;QAClB;IAUJ;;QARI;YACI,WAAW;QACf;;QAEA;;YAEI,OAAO;QACX;AAER;;AAEA;;+EAE+E;;AAE/E;IACI;QACI;IAUJ;;QARI;YACI,6BAA6B;QACjC;;QAEA;;YAEI,wBAAwB;QAC5B;AAER;;AAEA;IACI;QACI,kBAAkB;QAClB;IAUJ;;QARI;YACI,YAAY;QAChB;;QAEA;;YAEI,OAAO;QACX;AAER;;AAEA;;+EAE+E;;AAE/E;IACI;QACI,0BAA0B;QAC1B,mCAA2B;gBAA3B,0BAA2B,EAAE,gDAAgD;IAgBjF;;QAdI;YACI,4BAA4B;QAChC;;QAEA;;;YAGI,wBAAwB;QAC5B;;QAEA;;YAEI,4BAA4B;QAChC;AAER;;AAEA;IACI;QACI,kBAAkB;QAClB;IAgBJ;;QAdI;YACI,WAAW;QACf;;QAEA;;;YAGI,OAAO;QACX;;QAEA;;YAEI,WAAW;QACf;AAER;;AAEA;;+EAE+E;;AAE/E;IACI;QACI,0BAA0B;QAC1B,mCAA2B;gBAA3B,0BAA2B,EAAE,gDAAgD;IAgBjF;;QAdI;YACI,6BAA6B;QACjC;;QAEA;;;YAGI,wBAAwB;QAC5B;;QAEA;;YAEI,2BAA2B;QAC/B;AAER;;AAEA;IACI;QACI,kBAAkB;QAClB;IAgBJ;;QAdI;YACI,YAAY;QAChB;;QAEA;;;YAGI,OAAO;QACX;;QAEA;;YAEI,UAAU;QACd;AAER","file":"PageTransition.module.css","sourcesContent":["/**\n * Below you will find `@supports not (-webkit-touch-callout: none)` and `@supports (-webkit-touch-callout: none)` usages.\n * The first rule targets browsers other than iOS browsers, and the second is the opposite.\n * We are using it because using `transform` in combination with fixed elements causes flickering in iOS browsers.\n * To circumvent that, we use non `transform` styles, such as `left` ONLY for iOS browsers.\n */\n\n/* ==========================================================================\n   Fade\n   ========================================================================== */\n\n.fade {\n    transition: opacity 0.6s;\n\n    &.enter {\n        opacity: 0;\n    }\n\n    &.enterActive,\n    &.enterDone {\n        opacity: 1;\n    }\n}\n\n/* ==========================================================================\n   Slide left\n   ========================================================================== */\n\n@supports not (-webkit-touch-callout: none) {\n    .slideLeft {\n        transition: transform 0.6s;\n        backface-visibility: hidden;\n\n        &.enter {\n            transform: translateX(100vw);\n        }\n\n        &.enterActive,\n        &.enterDone {\n            transform: translateX(0);\n        }\n    }\n}\n\n@supports (-webkit-touch-callout: none) {\n    .slideLeft {\n        position: relative;\n        transition: left 0.6s;\n\n        &.enter {\n            left: 100vw;\n        }\n\n        &.enterActive,\n        &.enterDone {\n            left: 0;\n        }\n    }\n}\n\n/* ==========================================================================\n   Slide right\n   ========================================================================== */\n\n@supports not (-webkit-touch-callout: none) {\n    .slideRight {\n        transition: transform 0.6s;\n\n        &.enter {\n            transform: translateX(-100vw);\n        }\n\n        &.enterActive,\n        &.enterDone {\n            transform: translateX(0);\n        }\n    }\n}\n\n@supports (-webkit-touch-callout: none) {\n    .slideRight {\n        position: relative;\n        transition: left 0.6s;\n\n        &.enter {\n            left: -100vw;\n        }\n\n        &.enterActive,\n        &.enterDone {\n            left: 0;\n        }\n    }\n}\n\n/* ==========================================================================\n   Glide left\n   ========================================================================== */\n\n@supports not (-webkit-touch-callout: none) {\n    .glideLeft {\n        transition: transform 0.6s;\n        backface-visibility: hidden; /* Necessary because of performance on Firefox */\n\n        &.enter {\n            transform: translateX(100vw);\n        }\n\n        &.enterActive,\n        &.enterDone,\n        &.exit {\n            transform: translateX(0);\n        }\n\n        &.exitActive,\n        &.exitDone {\n            transform: translateX(-25vw);\n        }\n    }\n}\n\n@supports (-webkit-touch-callout: none) {\n    .glideLeft {\n        position: relative;\n        transition: left 0.6s;\n\n        &.enter {\n            left: 100vw;\n        }\n\n        &.enterActive,\n        &.enterDone,\n        &.exit {\n            left: 0;\n        }\n\n        &.exitActive,\n        &.exitDone {\n            left: -25vw;\n        }\n    }\n}\n\n/* ==========================================================================\n   Glide right\n   ========================================================================== */\n\n@supports not (-webkit-touch-callout: none) {\n    .glideRight {\n        transition: transform 0.6s;\n        backface-visibility: hidden; /* Necessary because of performance on Firefox */\n\n        &.enter {\n            transform: translateX(-100vw);\n        }\n\n        &.enterActive,\n        &.enterDone,\n        &.exit {\n            transform: translateX(0);\n        }\n\n        &.exitActive,\n        &.exitDone {\n            transform: translateX(25vw);\n        }\n    }\n}\n\n@supports (-webkit-touch-callout: none) {\n    .glideRight {\n        position: relative;\n        transition: left 0.6s;\n\n        &.enter {\n            left: -100vw;\n        }\n\n        &.enterActive,\n        &.enterDone,\n        &.exit {\n            left: 0;\n        }\n\n        &.exitActive,\n        &.exitDone {\n            left: 25vw;\n        }\n    }\n}\n"]}]);
// Exports
exports.locals = {
	"fade": "PageTransition_fade__2ObpC",
	"enter": "PageTransition_enter__8z6yq",
	"enterActive": "PageTransition_enterActive__3BzXp",
	"enterDone": "PageTransition_enterDone__SEshm",
	"slideLeft": "PageTransition_slideLeft__3LW9j",
	"slideRight": "PageTransition_slideRight__23WvB",
	"glideLeft": "PageTransition_glideLeft__2G5ER",
	"exit": "PageTransition_exit__269gm",
	"exitActive": "PageTransition_exitActive__1nGYR",
	"exitDone": "PageTransition_exitDone__GIlY9",
	"glideRight": "PageTransition_glideRight__aVErR"
};

/***/ })

})
//# sourceMappingURL=page2.js.adc451b1598cdade1fcd.hot-update.js.map