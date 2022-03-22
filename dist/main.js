/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody, html {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\nh2 {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: blueviolet;\r\n    height: 100vh;\r\n}\r\n\r\n.content {\r\n    display: grid;\r\n    grid-template-columns: 20rem 1fr;\r\n    grid-template-rows: 5rem 30rem;\r\n    background-color: red;\r\n    width: 82rem;\r\n    height: 35rem;\r\n}\r\n\r\n.is-blurred {\r\n    filter: blur(2px);\r\n    -webkit-filter: blur(2px);\r\n}\r\n\r\n/** header **/\r\nheader {\r\n    grid-column: 1 / 3;\r\n    background-color: yellowgreen;\r\n}\r\n\r\n/** side-bar **/\r\n\r\n.side-container {\r\n    grid-row: 2 / 3;\r\n    grid-column: 1 / 2;\r\n    background-color: yellow;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.nav-footer {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: flex-end;\r\n    height: 15rem;\r\n    padding: 3rem;\r\n}\r\n\r\n.side-bar {\r\n    padding: 2rem 3rem 2rem 3rem;\r\n}\r\n\r\n.side-bar ul {\r\n    list-style-type: none;\r\n}\r\n\r\n.nav li {\r\n    padding: 1rem;\r\n}\r\n\r\n.nav {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n}\r\n\r\n.nav > .selected {\r\n    background-color: palevioletred;\r\n}\r\n\r\n.nav-footer {\r\n}\r\n\r\n.add-task {\r\n    display: flex;\r\n    background-color: yellowgreen;\r\n    height: 35px;\r\n    width: 35px;\r\n    border-radius: 50%;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n/** main-container **/\r\n.main-container {\r\n    grid-row: 2 / 3;\r\n    grid-column: 2 / 3;\r\n    padding: 0 3rem;\r\n    margin: 3rem 0;\r\n    overflow-y: auto;\r\n    scrollbar-color: #D4AA70 #e4e4e4;\r\n    scroll-padding: 100px 0 0 100px;\r\n}\r\n\r\n.main-container::-webkit-scrollbar {\r\n    width: 14px;\r\n}\r\n\r\n.main-container::-webkit-scrollbar-track {\r\n    background-color: #e4e4e4;\r\n    border-radius: 6px;\r\n}\r\n\r\n.main-container::-webkit-scrollbar-thumb {\r\n    background-color: #d4aa70;\r\n    border-radius: 6px;\r\n}\r\n\r\n.todo-lists {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n.todo-item {\r\n    display: flex;\r\n    gap: 3rem;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 2rem;\r\n    padding: 16px;\r\n    background-color: beige;\r\n}\r\n\r\n.todo-item .todo-title {\r\n    flex-grow: 3;\r\n}\r\n\r\n.blocker {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    background: rgba(0,0,0,.5);\r\n}\r\n\r\n#form-popup {\r\n    display: none;\r\n}\r\n\r\n#form-popup.open {\r\n    display: block;\r\n}\r\n\r\n.form-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    width: 500px;\r\n    height: 500px;\r\n    padding: 1rem;\r\n    position: fixed; \r\n    left: 0; \r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0; \r\n    margin: auto; \r\n    background-color: #ffffff;\r\n}\r\n\r\n.form-footer {\r\n    text-align: right;\r\n}\r\n\r\n.form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 8px;\r\n}\r\n\r\n.form label {\r\n    margin-top: 1rem;\r\n}", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,SAAS;IACT,UAAU;IACV,iCAAiC;AACrC;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,4BAA4B;IAC5B,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,8BAA8B;IAC9B,qBAAqB;IACrB,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,yBAAyB;AAC7B;;AAEA,aAAa;AACb;IACI,kBAAkB;IAClB,6BAA6B;AACjC;;AAEA,eAAe;;AAEf;IACI,eAAe;IACf,kBAAkB;IAClB,wBAAwB;IACxB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,qBAAqB;IACrB,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,+BAA+B;AACnC;;AAEA;AACA;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA,qBAAqB;AACrB;IACI,eAAe;IACf,kBAAkB;IAClB,eAAe;IACf,cAAc;IACd,gBAAgB;IAChB,gCAAgC;IAChC,+BAA+B;AACnC;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,SAAS;IACT,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,SAAS;IACT,QAAQ;IACR,0BAA0B;AAC9B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,YAAY;IACZ,aAAa;IACb,aAAa;IACb,eAAe;IACf,OAAO;IACP,QAAQ;IACR,MAAM;IACN,SAAS;IACT,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,gBAAgB;AACpB","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody, html {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\nh2 {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: blueviolet;\r\n    height: 100vh;\r\n}\r\n\r\n.content {\r\n    display: grid;\r\n    grid-template-columns: 20rem 1fr;\r\n    grid-template-rows: 5rem 30rem;\r\n    background-color: red;\r\n    width: 82rem;\r\n    height: 35rem;\r\n}\r\n\r\n.is-blurred {\r\n    filter: blur(2px);\r\n    -webkit-filter: blur(2px);\r\n}\r\n\r\n/** header **/\r\nheader {\r\n    grid-column: 1 / 3;\r\n    background-color: yellowgreen;\r\n}\r\n\r\n/** side-bar **/\r\n\r\n.side-container {\r\n    grid-row: 2 / 3;\r\n    grid-column: 1 / 2;\r\n    background-color: yellow;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.nav-footer {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: flex-end;\r\n    height: 15rem;\r\n    padding: 3rem;\r\n}\r\n\r\n.side-bar {\r\n    padding: 2rem 3rem 2rem 3rem;\r\n}\r\n\r\n.side-bar ul {\r\n    list-style-type: none;\r\n}\r\n\r\n.nav li {\r\n    padding: 1rem;\r\n}\r\n\r\n.nav {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n}\r\n\r\n.nav > .selected {\r\n    background-color: palevioletred;\r\n}\r\n\r\n.nav-footer {\r\n}\r\n\r\n.add-task {\r\n    display: flex;\r\n    background-color: yellowgreen;\r\n    height: 35px;\r\n    width: 35px;\r\n    border-radius: 50%;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n/** main-container **/\r\n.main-container {\r\n    grid-row: 2 / 3;\r\n    grid-column: 2 / 3;\r\n    padding: 0 3rem;\r\n    margin: 3rem 0;\r\n    overflow-y: auto;\r\n    scrollbar-color: #D4AA70 #e4e4e4;\r\n    scroll-padding: 100px 0 0 100px;\r\n}\r\n\r\n.main-container::-webkit-scrollbar {\r\n    width: 14px;\r\n}\r\n\r\n.main-container::-webkit-scrollbar-track {\r\n    background-color: #e4e4e4;\r\n    border-radius: 6px;\r\n}\r\n\r\n.main-container::-webkit-scrollbar-thumb {\r\n    background-color: #d4aa70;\r\n    border-radius: 6px;\r\n}\r\n\r\n.todo-lists {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n.todo-item {\r\n    display: flex;\r\n    gap: 3rem;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 2rem;\r\n    padding: 16px;\r\n    background-color: beige;\r\n}\r\n\r\n.todo-item .todo-title {\r\n    flex-grow: 3;\r\n}\r\n\r\n.blocker {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    background: rgba(0,0,0,.5);\r\n}\r\n\r\n#form-popup {\r\n    display: none;\r\n}\r\n\r\n#form-popup.open {\r\n    display: block;\r\n}\r\n\r\n.form-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    width: 500px;\r\n    height: 500px;\r\n    padding: 1rem;\r\n    position: fixed; \r\n    left: 0; \r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0; \r\n    margin: auto; \r\n    background-color: #ffffff;\r\n}\r\n\r\n.form-footer {\r\n    text-align: right;\r\n}\r\n\r\n.form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 8px;\r\n}\r\n\r\n.form label {\r\n    margin-top: 1rem;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/DisplayController.js":
/*!*************************************!*\
  !*** ./src/js/DisplayController.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addDeleteEventListener": () => (/* binding */ addDeleteEventListener),
/* harmony export */   "addEditEventListener": () => (/* binding */ addEditEventListener)
/* harmony export */ });
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/js/Task.js");
/* harmony import */ var _ToDoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToDoList */ "./src/js/ToDoList.js");



const content = document.querySelector(".content")
const popUpForm = document.getElementById("form-popup")
const addToDoListButton = document.querySelector(".add-task")
const blocker = document.querySelector(".blocker")
const form = document.querySelector(".form-container")
const form2 = document.querySelector(".form-container")

addToDoListButton.addEventListener("click", () => {
    openTaskFormPopUp(false)
    sumbitEventHandlerForNewTask()
    blockerDivClickListener(handleTaskFromAddButtonEvent)
})

const sumbitEventHandlerForNewTask = () => {
    form.addEventListener("submit", handleTaskFromAddButtonEvent, 
    {
        once: true
    })
}

const blockerDivClickListener = (callback) => {
    blocker.addEventListener("click", () => {
        form.removeEventListener("submit", callback)
        togglePopUpHandler()
    }, {
        once: true
    })
}

// handle after clicking the 'add task' button in the pop-up
const handleTaskFromAddButtonEvent = (e) => {
    e.preventDefault()
    const {title, date, description, priority, project} = getNewTaskForm()
    const newTask = new _Task__WEBPACK_IMPORTED_MODULE_0__["default"](title, date, description, priority, project)
    _ToDoList__WEBPACK_IMPORTED_MODULE_1__["default"].saveNewTask(newTask)
    form.removeEventListener("sumbit", handleTaskFromAddButtonEvent)
    togglePopUpHandler()
}

// handle after clicking the 'edit task' button in the pop-up
const handleTaskFromEditButtonEvent = (e, item) => {
    e.preventDefault()
    const {title, date, description, priority, project} = getNewTaskForm()
    item._name = title
    item._date = date
    _ToDoList__WEBPACK_IMPORTED_MODULE_1__["default"].editTask(item)
    togglePopUpHandler()
}

const addDeleteEventListener = (itemID) => {
    const deleteButton = document.querySelector(`.todo-item[task-id="${itemID}"]>.delete`)
    deleteButton.addEventListener("click", () => {
        const removedItem = document.querySelector(`.todo-item[task-id="${itemID}"]`);
        removedItem.parentElement.removeChild(removedItem)
        localStorage.removeItem(itemID)
    })
    blockerDivClickListener()
}

const addEditEventListener = (itemID) => {
    const editButton = document.querySelector(`.todo-item[task-id="${itemID._id}"]>.edit`)
    editButton.addEventListener("click", () => {
        form.removeEventListener("sumbit", handleTaskFromAddButtonEvent)
        document.getElementById("title").value = itemID._name
        document.getElementById("date").value = itemID._date
        document.getElementById("description").value = itemID._description
        document.getElementById("priority").value = itemID.priority
        openTaskFormPopUp(true)
        const handler = (e) => handleTaskFromEditButtonEvent(e, itemID)
        submitEventHandlerForEditTask(handler)
        blockerDivClickListener(handler)
    })
}

const submitEventHandlerForEditTask = (callback) => {
    form.addEventListener("submit", callback,
    {
        once: true
    })
}

// open or close the form-popup
function toggleFormWindow() {
    popUpForm.classList.toggle("open")
}

// set or remove the background blur
function toggleBlurBackground() {
    content.classList.toggle("is-blurred")
}

function togglePopUpHandler() {
    console.log("togglePopUpHandler")
    toggleFormWindow()
    toggleBlurBackground()
}

function openTaskFormPopUp(editBool = false) {
    if (!editBool) form.reset() //clear form for add new task
    addSubmitButtonForFrom(editBool)
    togglePopUpHandler()
}

// returns form values
function getNewTaskForm() {
    const title = document.getElementById("title").value
    const date = document.getElementById("date").value
    const description = document.getElementById("description").value
    const priority = document.getElementById("priority").value
    return {title, date, description, priority}
}

// create the corresponding form pop-up content
function addSubmitButtonForFrom(editBool = false) {
    const formFooterDiv = document.querySelector(".form-footer")

    let childNode = formFooterDiv.lastElementChild
    while (childNode) {
        formFooterDiv.removeChild(childNode)
        childNode = formFooterDiv.lastElementChild
    }
   
    if (editBool) {
        const editButton = document.createElement("input")
        editButton.setAttribute("type", "submit")
        editButton.id = "editTask"
        editButton.setAttribute("value", "edit task")
        formFooterDiv.appendChild(editButton)
    } else {
        const sumbitButton = document.createElement("input")
        form.reset()
        sumbitButton.setAttribute("type", "submit")
        sumbitButton.id = "addTask"
        sumbitButton.setAttribute("value", "add task")
        formFooterDiv.appendChild(sumbitButton)
    }
}



/***/ }),

/***/ "./src/js/Task.js":
/*!************************!*\
  !*** ./src/js/Task.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
    constructor(name, date, description, priority, project) {
        this._id = Task.idCounter
        this.name = name
        this.date = date
        this.description = description
        this.priority = priority
        this.project = project
    }

    set name(newName) {
        this._name = newName
    }

    get name() {
        return this._name
    }

    set date(newDate) {
        this._date = newDate
    }

    get date() {
        return this._date
    }

    get id() {
        return this._id
    }

    set description(newDescription) {
        this._description = newDescription
    }

    get description() {
        return this._description
    }

    static get idCounter() {
        if (Task._idCounter == undefined) Task._idCounter = 0
        while(localStorage.getItem(Task._idCounter)) {
            Task._idCounter += 1
        }
        return Task._idCounter
    }
}

/***/ }),

/***/ "./src/js/ToDoList.js":
/*!****************************!*\
  !*** ./src/js/ToDoList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/js/Task.js");
/* harmony import */ var _DisplayController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DisplayController */ "./src/js/DisplayController.js");




const todoListsClass = document.querySelector(".todo-lists")
const taskID = document.querySelector(".task-id")
const mainContainer = document.querySelector(".main-container")

const todolist = (() => {

    const displayTasks = () => {
        Object.keys(localStorage).forEach(key => {
            let item = localStorage.getItem(key)
            item = JSON.parse(item)
            displayTask(item)
            
            ;(0,_DisplayController__WEBPACK_IMPORTED_MODULE_1__.addDeleteEventListener)(item._id)
            ;(0,_DisplayController__WEBPACK_IMPORTED_MODULE_1__.addEditEventListener)(item)
        })
    }

    const saveNewTask = (item) => {
        localStorage.setItem(item.id, JSON.stringify(item))
        displayTask(item)
        ;(0,_DisplayController__WEBPACK_IMPORTED_MODULE_1__.addDeleteEventListener)(item._id)
        ;(0,_DisplayController__WEBPACK_IMPORTED_MODULE_1__.addEditEventListener)(item)
    }

    const editTask = (item) => {
        const editedId = item._id
        const editedTitle = item._name
        const editedDate = item._date
        const editedDespriction = item._decription
        const editedPriority = item.priority
        editHTMLSelektion(editedId, editedTitle, editedDate, editedDespriction, editedPriority)
        ;(0,_DisplayController__WEBPACK_IMPORTED_MODULE_1__.addDeleteEventListener)(item._id)
        ;(0,_DisplayController__WEBPACK_IMPORTED_MODULE_1__.addEditEventListener)(item)
        editTaskInStorage(item)
    }

    const editTaskInStorage = (item) => {
        localStorage.setItem(item._id, JSON.stringify(item))
        
    }

    const displayTask = (item) => {
        getHTMLSkeletonForNewTask(item._id, item._name, item._date)
    }

    const editHTMLSelektion = (id, name, date, description, priority) => {
        const toDoItemDiv = document.querySelector(`.todo-item[task-id="${id}"]`)
        let childNode = toDoItemDiv.lastElementChild
        while(childNode) {
            toDoItemDiv.removeChild(childNode)
            childNode = toDoItemDiv.lastElementChild
        }

        const checkBoxLabel = document.createElement("label")
        checkBoxLabel.classList.add("checkbox")
        toDoItemDiv.appendChild(checkBoxLabel)
        
        const checkBoxInput = document.createElement("input")
        checkBoxInput.type = "checkbox"
        checkBoxLabel.appendChild(checkBoxInput)

        const todoTitleSpan = document.createElement("span")
        todoTitleSpan.classList.add("todo-title")
        todoTitleSpan.appendChild(document.createTextNode(name))
        toDoItemDiv.appendChild(todoTitleSpan)

        const detailButton = document.createElement("button")
        detailButton.classList.add("details")
        detailButton.appendChild(document.createTextNode("DETAILS"))
        toDoItemDiv.appendChild(detailButton)

        const dateSpan = document.createElement("span")
        dateSpan.classList.add("created-date")
        dateSpan.appendChild(document.createTextNode(date))
        toDoItemDiv.appendChild(dateSpan)

        const editSpan = document.createElement("button")
        editSpan.classList.add("edit")
        editSpan.appendChild(document.createTextNode("edit"))
        toDoItemDiv.appendChild(editSpan)

        const deleteSpan = document.createElement("button")
        deleteSpan.classList.add("delete")
        deleteSpan.appendChild(document.createTextNode("delete"))
        toDoItemDiv.appendChild(deleteSpan)

        
    }

    const getHTMLSkeletonForNewTask = (id, name, date) => {
        const toDoItemDiv = document.createElement("div")
        toDoItemDiv.classList.add("todo-item")
        toDoItemDiv.setAttribute("task-id", id)

        const checkBoxLabel = document.createElement("label")
        checkBoxLabel.classList.add("checkbox")
        toDoItemDiv.appendChild(checkBoxLabel)
        
        const checkBoxInput = document.createElement("input")
        checkBoxInput.type = "checkbox"
        checkBoxLabel.appendChild(checkBoxInput)

        const todoTitleSpan = document.createElement("span")
        todoTitleSpan.classList.add("todo-title")
        todoTitleSpan.appendChild(document.createTextNode(name))
        toDoItemDiv.appendChild(todoTitleSpan)

        const detailButton = document.createElement("button")
        detailButton.classList.add("details")
        detailButton.appendChild(document.createTextNode("DETAILS"))
        toDoItemDiv.appendChild(detailButton)

        const dateSpan = document.createElement("span")
        dateSpan.classList.add("created-date")
        dateSpan.appendChild(document.createTextNode(date))
        toDoItemDiv.appendChild(dateSpan)

        const editSpan = document.createElement("button")
        editSpan.classList.add("edit")
        editSpan.appendChild(document.createTextNode("edit"))
        toDoItemDiv.appendChild(editSpan)

        const deleteSpan = document.createElement("button")
        deleteSpan.classList.add("delete")
        deleteSpan.appendChild(document.createTextNode("delete"))
        toDoItemDiv.appendChild(deleteSpan)

        todoListsClass.appendChild(toDoItemDiv)
    }

    return {displayTasks, saveNewTask, editTask}
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todolist);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _js_DisplayController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/DisplayController.js */ "./src/js/DisplayController.js");
/* harmony import */ var _js_ToDoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/ToDoList */ "./src/js/ToDoList.js");
/* harmony import */ var _js_Task_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/Task.js */ "./src/js/Task.js");






_js_ToDoList__WEBPACK_IMPORTED_MODULE_2__["default"].displayTasks()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdDNkI7QUFDSDtBQUNzRDtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMkVBQXNCO0FBQ2xDLFlBQVkseUVBQW9CO0FBQ2hDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyRUFBc0I7QUFDOUIsUUFBUSx5RUFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyRUFBc0I7QUFDOUIsUUFBUSx5RUFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEUsR0FBRztBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBLGlFQUFlLFFBQVE7QUFDdkI7Ozs7Ozs7VUMxSUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ055QjtBQUNTO0FBQ0U7QUFDTDtBQUMvQjtBQUNBO0FBQ0EsaUVBQXFCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvRGlzcGxheUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL1RvRG9MaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LCBodG1sIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHJlbSAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNXJlbSAzMHJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICB3aWR0aDogODJyZW07XFxyXFxuICAgIGhlaWdodDogMzVyZW07XFxyXFxufVxcclxcblxcclxcbi5pcy1ibHVycmVkIHtcXHJcXG4gICAgZmlsdGVyOiBibHVyKDJweCk7XFxyXFxuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDJweCk7XFxyXFxufVxcclxcblxcclxcbi8qKiBoZWFkZXIgKiovXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3dncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLyoqIHNpZGUtYmFyICoqL1xcclxcblxcclxcbi5zaWRlLWNvbnRhaW5lciB7XFxyXFxuICAgIGdyaWQtcm93OiAyIC8gMztcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5uYXYtZm9vdGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbiAgICBoZWlnaHQ6IDE1cmVtO1xcclxcbiAgICBwYWRkaW5nOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1iYXIge1xcclxcbiAgICBwYWRkaW5nOiAycmVtIDNyZW0gMnJlbSAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1iYXIgdWwge1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXYgbGkge1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2ID4gLnNlbGVjdGVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGFsZXZpb2xldHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1mb290ZXIge1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2sge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3dncmVlbjtcXHJcXG4gICAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgICB3aWR0aDogMzVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyoqIG1haW4tY29udGFpbmVyICoqL1xcclxcbi5tYWluLWNvbnRhaW5lciB7XFxyXFxuICAgIGdyaWQtcm93OiAyIC8gMztcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcclxcbiAgICBwYWRkaW5nOiAwIDNyZW07XFxyXFxuICAgIG1hcmdpbjogM3JlbSAwO1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgICBzY3JvbGxiYXItY29sb3I6ICNENEFBNzAgI2U0ZTRlNDtcXHJcXG4gICAgc2Nyb2xsLXBhZGRpbmc6IDEwMHB4IDAgMCAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIHdpZHRoOiAxNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0YWE3MDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0cyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogM3JlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMTZweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWl0ZW0gLnRvZG8tdGl0bGUge1xcclxcbiAgICBmbGV4LWdyb3c6IDM7XFxyXFxufVxcclxcblxcclxcbi5ibG9ja2VyIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjUpO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9ybS1wb3B1cCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNmb3JtLXBvcHVwLm9wZW4ge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB3aWR0aDogNTAwcHg7XFxyXFxuICAgIGhlaWdodDogNTAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgXFxyXFxuICAgIGxlZnQ6IDA7IFxcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBib3R0b206IDA7IFxcclxcbiAgICBtYXJnaW46IGF1dG87IFxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1mb290ZXIge1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0gbGFiZWwge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLDhCQUE4QjtJQUM5QixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBLGFBQWE7QUFDYjtJQUNJLGtCQUFrQjtJQUNsQiw2QkFBNkI7QUFDakM7O0FBRUEsZUFBZTs7QUFFZjtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtBQUNBOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBLHFCQUFxQjtBQUNyQjtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0NBQWdDO0lBQ2hDLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsU0FBUztJQUNULFFBQVE7SUFDUiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLGVBQWU7SUFDZixPQUFPO0lBQ1AsUUFBUTtJQUNSLE1BQU07SUFDTixTQUFTO0lBQ1QsWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHksIGh0bWwge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcmVtIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1cmVtIDMwcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICAgIHdpZHRoOiA4MnJlbTtcXHJcXG4gICAgaGVpZ2h0OiAzNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmlzLWJsdXJyZWQge1xcclxcbiAgICBmaWx0ZXI6IGJsdXIoMnB4KTtcXHJcXG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMnB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqIGhlYWRlciAqKi9cXHJcXG5oZWFkZXIge1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvd2dyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4vKiogc2lkZS1iYXIgKiovXFxyXFxuXFxyXFxuLnNpZGUtY29udGFpbmVyIHtcXHJcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1mb290ZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxuICAgIGhlaWdodDogMTVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5zaWRlLWJhciB7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW0gM3JlbSAycmVtIDNyZW07XFxyXFxufVxcclxcblxcclxcbi5zaWRlLWJhciB1bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiBsaSB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYgPiAuc2VsZWN0ZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwYWxldmlvbGV0cmVkO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWZvb3RlciB7XFxyXFxufVxcclxcblxcclxcbi5hZGQtdGFzayB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvd2dyZWVuO1xcclxcbiAgICBoZWlnaHQ6IDM1cHg7XFxyXFxuICAgIHdpZHRoOiAzNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiogbWFpbi1jb250YWluZXIgKiovXFxyXFxuLm1haW4tY29udGFpbmVyIHtcXHJcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcclxcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxyXFxuICAgIHBhZGRpbmc6IDAgM3JlbTtcXHJcXG4gICAgbWFyZ2luOiAzcmVtIDA7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIHNjcm9sbGJhci1jb2xvcjogI0Q0QUE3MCAjZTRlNGU0O1xcclxcbiAgICBzY3JvbGwtcGFkZGluZzogMTAwcHggMCAwIDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgd2lkdGg6IDE0cHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRhYTcwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3RzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAzcmVtO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbSAudG9kby10aXRsZSB7XFxyXFxuICAgIGZsZXgtZ3JvdzogMztcXHJcXG59XFxyXFxuXFxyXFxuLmJsb2NrZXIge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuNSk7XFxyXFxufVxcclxcblxcclxcbiNmb3JtLXBvcHVwIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvcm0tcG9wdXAub3BlbiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkOyBcXHJcXG4gICAgbGVmdDogMDsgXFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGJvdHRvbTogMDsgXFxyXFxuICAgIG1hcmdpbjogYXV0bzsgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWZvb3RlciB7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSBsYWJlbCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vVGFza1wiXHJcbmltcG9ydCBUb0RvTGlzdCBmcm9tIFwiLi9Ub0RvTGlzdFwiXHJcblxyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpXHJcbmNvbnN0IHBvcFVwRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS1wb3B1cFwiKVxyXG5jb25zdCBhZGRUb0RvTGlzdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2tcIilcclxuY29uc3QgYmxvY2tlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmxvY2tlclwiKVxyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWNvbnRhaW5lclwiKVxyXG5jb25zdCBmb3JtMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1jb250YWluZXJcIilcclxuXHJcbmFkZFRvRG9MaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBvcGVuVGFza0Zvcm1Qb3BVcChmYWxzZSlcclxuICAgIHN1bWJpdEV2ZW50SGFuZGxlckZvck5ld1Rhc2soKVxyXG4gICAgYmxvY2tlckRpdkNsaWNrTGlzdGVuZXIoaGFuZGxlVGFza0Zyb21BZGRCdXR0b25FdmVudClcclxufSlcclxuXHJcbmNvbnN0IHN1bWJpdEV2ZW50SGFuZGxlckZvck5ld1Rhc2sgPSAoKSA9PiB7XHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlVGFza0Zyb21BZGRCdXR0b25FdmVudCwgXHJcbiAgICB7XHJcbiAgICAgICAgb25jZTogdHJ1ZVxyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgYmxvY2tlckRpdkNsaWNrTGlzdGVuZXIgPSAoY2FsbGJhY2spID0+IHtcclxuICAgIGJsb2NrZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBmb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgY2FsbGJhY2spXHJcbiAgICAgICAgdG9nZ2xlUG9wVXBIYW5kbGVyKClcclxuICAgIH0sIHtcclxuICAgICAgICBvbmNlOiB0cnVlXHJcbiAgICB9KVxyXG59XHJcblxyXG4vLyBoYW5kbGUgYWZ0ZXIgY2xpY2tpbmcgdGhlICdhZGQgdGFzaycgYnV0dG9uIGluIHRoZSBwb3AtdXBcclxuY29uc3QgaGFuZGxlVGFza0Zyb21BZGRCdXR0b25FdmVudCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnN0IHt0aXRsZSwgZGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBwcm9qZWN0fSA9IGdldE5ld1Rhc2tGb3JtKClcclxuICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayh0aXRsZSwgZGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBwcm9qZWN0KVxyXG4gICAgVG9Eb0xpc3Quc2F2ZU5ld1Rhc2sobmV3VGFzaylcclxuICAgIGZvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN1bWJpdFwiLCBoYW5kbGVUYXNrRnJvbUFkZEJ1dHRvbkV2ZW50KVxyXG4gICAgdG9nZ2xlUG9wVXBIYW5kbGVyKClcclxufVxyXG5cclxuLy8gaGFuZGxlIGFmdGVyIGNsaWNraW5nIHRoZSAnZWRpdCB0YXNrJyBidXR0b24gaW4gdGhlIHBvcC11cFxyXG5jb25zdCBoYW5kbGVUYXNrRnJvbUVkaXRCdXR0b25FdmVudCA9IChlLCBpdGVtKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnN0IHt0aXRsZSwgZGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBwcm9qZWN0fSA9IGdldE5ld1Rhc2tGb3JtKClcclxuICAgIGl0ZW0uX25hbWUgPSB0aXRsZVxyXG4gICAgaXRlbS5fZGF0ZSA9IGRhdGVcclxuICAgIFRvRG9MaXN0LmVkaXRUYXNrKGl0ZW0pXHJcbiAgICB0b2dnbGVQb3BVcEhhbmRsZXIoKVxyXG59XHJcblxyXG5jb25zdCBhZGREZWxldGVFdmVudExpc3RlbmVyID0gKGl0ZW1JRCkgPT4ge1xyXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRvZG8taXRlbVt0YXNrLWlkPVwiJHtpdGVtSUR9XCJdPi5kZWxldGVgKVxyXG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVtb3ZlZEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudG9kby1pdGVtW3Rhc2staWQ9XCIke2l0ZW1JRH1cIl1gKTtcclxuICAgICAgICByZW1vdmVkSXRlbS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHJlbW92ZWRJdGVtKVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGl0ZW1JRClcclxuICAgIH0pXHJcbiAgICBibG9ja2VyRGl2Q2xpY2tMaXN0ZW5lcigpXHJcbn1cclxuXHJcbmNvbnN0IGFkZEVkaXRFdmVudExpc3RlbmVyID0gKGl0ZW1JRCkgPT4ge1xyXG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50b2RvLWl0ZW1bdGFzay1pZD1cIiR7aXRlbUlELl9pZH1cIl0+LmVkaXRgKVxyXG4gICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGZvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN1bWJpdFwiLCBoYW5kbGVUYXNrRnJvbUFkZEJ1dHRvbkV2ZW50KVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikudmFsdWUgPSBpdGVtSUQuX25hbWVcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWUgPSBpdGVtSUQuX2RhdGVcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlID0gaXRlbUlELl9kZXNjcmlwdGlvblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlcIikudmFsdWUgPSBpdGVtSUQucHJpb3JpdHlcclxuICAgICAgICBvcGVuVGFza0Zvcm1Qb3BVcCh0cnVlKVxyXG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSAoZSkgPT4gaGFuZGxlVGFza0Zyb21FZGl0QnV0dG9uRXZlbnQoZSwgaXRlbUlEKVxyXG4gICAgICAgIHN1Ym1pdEV2ZW50SGFuZGxlckZvckVkaXRUYXNrKGhhbmRsZXIpXHJcbiAgICAgICAgYmxvY2tlckRpdkNsaWNrTGlzdGVuZXIoaGFuZGxlcilcclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IHN1Ym1pdEV2ZW50SGFuZGxlckZvckVkaXRUYXNrID0gKGNhbGxiYWNrKSA9PiB7XHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgY2FsbGJhY2ssXHJcbiAgICB7XHJcbiAgICAgICAgb25jZTogdHJ1ZVxyXG4gICAgfSlcclxufVxyXG5cclxuLy8gb3BlbiBvciBjbG9zZSB0aGUgZm9ybS1wb3B1cFxyXG5mdW5jdGlvbiB0b2dnbGVGb3JtV2luZG93KCkge1xyXG4gICAgcG9wVXBGb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpXHJcbn1cclxuXHJcbi8vIHNldCBvciByZW1vdmUgdGhlIGJhY2tncm91bmQgYmx1clxyXG5mdW5jdGlvbiB0b2dnbGVCbHVyQmFja2dyb3VuZCgpIHtcclxuICAgIGNvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZShcImlzLWJsdXJyZWRcIilcclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlUG9wVXBIYW5kbGVyKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJ0b2dnbGVQb3BVcEhhbmRsZXJcIilcclxuICAgIHRvZ2dsZUZvcm1XaW5kb3coKVxyXG4gICAgdG9nZ2xlQmx1ckJhY2tncm91bmQoKVxyXG59XHJcblxyXG5mdW5jdGlvbiBvcGVuVGFza0Zvcm1Qb3BVcChlZGl0Qm9vbCA9IGZhbHNlKSB7XHJcbiAgICBpZiAoIWVkaXRCb29sKSBmb3JtLnJlc2V0KCkgLy9jbGVhciBmb3JtIGZvciBhZGQgbmV3IHRhc2tcclxuICAgIGFkZFN1Ym1pdEJ1dHRvbkZvckZyb20oZWRpdEJvb2wpXHJcbiAgICB0b2dnbGVQb3BVcEhhbmRsZXIoKVxyXG59XHJcblxyXG4vLyByZXR1cm5zIGZvcm0gdmFsdWVzXHJcbmZ1bmN0aW9uIGdldE5ld1Rhc2tGb3JtKCkge1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLnZhbHVlXHJcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLnZhbHVlXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWVcclxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eVwiKS52YWx1ZVxyXG4gICAgcmV0dXJuIHt0aXRsZSwgZGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5fVxyXG59XHJcblxyXG4vLyBjcmVhdGUgdGhlIGNvcnJlc3BvbmRpbmcgZm9ybSBwb3AtdXAgY29udGVudFxyXG5mdW5jdGlvbiBhZGRTdWJtaXRCdXR0b25Gb3JGcm9tKGVkaXRCb29sID0gZmFsc2UpIHtcclxuICAgIGNvbnN0IGZvcm1Gb290ZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tZm9vdGVyXCIpXHJcblxyXG4gICAgbGV0IGNoaWxkTm9kZSA9IGZvcm1Gb290ZXJEaXYubGFzdEVsZW1lbnRDaGlsZFxyXG4gICAgd2hpbGUgKGNoaWxkTm9kZSkge1xyXG4gICAgICAgIGZvcm1Gb290ZXJEaXYucmVtb3ZlQ2hpbGQoY2hpbGROb2RlKVxyXG4gICAgICAgIGNoaWxkTm9kZSA9IGZvcm1Gb290ZXJEaXYubGFzdEVsZW1lbnRDaGlsZFxyXG4gICAgfVxyXG4gICBcclxuICAgIGlmIChlZGl0Qm9vbCkge1xyXG4gICAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgICAgICBlZGl0QnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIilcclxuICAgICAgICBlZGl0QnV0dG9uLmlkID0gXCJlZGl0VGFza1wiXHJcbiAgICAgICAgZWRpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImVkaXQgdGFza1wiKVxyXG4gICAgICAgIGZvcm1Gb290ZXJEaXYuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3Qgc3VtYml0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICAgICAgZm9ybS5yZXNldCgpXHJcbiAgICAgICAgc3VtYml0QnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIilcclxuICAgICAgICBzdW1iaXRCdXR0b24uaWQgPSBcImFkZFRhc2tcIlxyXG4gICAgICAgIHN1bWJpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImFkZCB0YXNrXCIpXHJcbiAgICAgICAgZm9ybUZvb3RlckRpdi5hcHBlbmRDaGlsZChzdW1iaXRCdXR0b24pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7YWRkRGVsZXRlRXZlbnRMaXN0ZW5lciwgYWRkRWRpdEV2ZW50TGlzdGVuZXJ9IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIHByb2plY3QpIHtcclxuICAgICAgICB0aGlzLl9pZCA9IFRhc2suaWRDb3VudGVyXHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxyXG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGVcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcclxuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IG5hbWUobmV3TmFtZSkge1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSBuZXdOYW1lXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWVcclxuICAgIH1cclxuXHJcbiAgICBzZXQgZGF0ZShuZXdEYXRlKSB7XHJcbiAgICAgICAgdGhpcy5fZGF0ZSA9IG5ld0RhdGVcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBpZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faWRcclxuICAgIH1cclxuXHJcbiAgICBzZXQgZGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pIHtcclxuICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgaWRDb3VudGVyKCkge1xyXG4gICAgICAgIGlmIChUYXNrLl9pZENvdW50ZXIgPT0gdW5kZWZpbmVkKSBUYXNrLl9pZENvdW50ZXIgPSAwXHJcbiAgICAgICAgd2hpbGUobG9jYWxTdG9yYWdlLmdldEl0ZW0oVGFzay5faWRDb3VudGVyKSkge1xyXG4gICAgICAgICAgICBUYXNrLl9pZENvdW50ZXIgKz0gMVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gVGFzay5faWRDb3VudGVyXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgZm9ybWF0IGZyb20gJ2RhdGUtZm5zJ1xyXG5pbXBvcnQgVGFzayBmcm9tIFwiLi9UYXNrXCI7XHJcbmltcG9ydCB7YWRkRGVsZXRlRXZlbnRMaXN0ZW5lciwgYWRkRWRpdEV2ZW50TGlzdGVuZXJ9IGZyb20gXCIuL0Rpc3BsYXlDb250cm9sbGVyXCJcclxuXHJcbmNvbnN0IHRvZG9MaXN0c0NsYXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWxpc3RzXCIpXHJcbmNvbnN0IHRhc2tJRCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1pZFwiKVxyXG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRhaW5lclwiKVxyXG5cclxuY29uc3QgdG9kb2xpc3QgPSAoKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGRpc3BsYXlUYXNrcyA9ICgpID0+IHtcclxuICAgICAgICBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpXHJcbiAgICAgICAgICAgIGl0ZW0gPSBKU09OLnBhcnNlKGl0ZW0pXHJcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrKGl0ZW0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBhZGREZWxldGVFdmVudExpc3RlbmVyKGl0ZW0uX2lkKVxyXG4gICAgICAgICAgICBhZGRFZGl0RXZlbnRMaXN0ZW5lcihpdGVtKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2F2ZU5ld1Rhc2sgPSAoaXRlbSkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGl0ZW0uaWQsIEpTT04uc3RyaW5naWZ5KGl0ZW0pKVxyXG4gICAgICAgIGRpc3BsYXlUYXNrKGl0ZW0pXHJcbiAgICAgICAgYWRkRGVsZXRlRXZlbnRMaXN0ZW5lcihpdGVtLl9pZClcclxuICAgICAgICBhZGRFZGl0RXZlbnRMaXN0ZW5lcihpdGVtKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVkaXRUYXNrID0gKGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCBlZGl0ZWRJZCA9IGl0ZW0uX2lkXHJcbiAgICAgICAgY29uc3QgZWRpdGVkVGl0bGUgPSBpdGVtLl9uYW1lXHJcbiAgICAgICAgY29uc3QgZWRpdGVkRGF0ZSA9IGl0ZW0uX2RhdGVcclxuICAgICAgICBjb25zdCBlZGl0ZWREZXNwcmljdGlvbiA9IGl0ZW0uX2RlY3JpcHRpb25cclxuICAgICAgICBjb25zdCBlZGl0ZWRQcmlvcml0eSA9IGl0ZW0ucHJpb3JpdHlcclxuICAgICAgICBlZGl0SFRNTFNlbGVrdGlvbihlZGl0ZWRJZCwgZWRpdGVkVGl0bGUsIGVkaXRlZERhdGUsIGVkaXRlZERlc3ByaWN0aW9uLCBlZGl0ZWRQcmlvcml0eSlcclxuICAgICAgICBhZGREZWxldGVFdmVudExpc3RlbmVyKGl0ZW0uX2lkKVxyXG4gICAgICAgIGFkZEVkaXRFdmVudExpc3RlbmVyKGl0ZW0pXHJcbiAgICAgICAgZWRpdFRhc2tJblN0b3JhZ2UoaXRlbSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBlZGl0VGFza0luU3RvcmFnZSA9IChpdGVtKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oaXRlbS5faWQsIEpTT04uc3RyaW5naWZ5KGl0ZW0pKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRpc3BsYXlUYXNrID0gKGl0ZW0pID0+IHtcclxuICAgICAgICBnZXRIVE1MU2tlbGV0b25Gb3JOZXdUYXNrKGl0ZW0uX2lkLCBpdGVtLl9uYW1lLCBpdGVtLl9kYXRlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVkaXRIVE1MU2VsZWt0aW9uID0gKGlkLCBuYW1lLCBkYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHkpID0+IHtcclxuICAgICAgICBjb25zdCB0b0RvSXRlbURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50b2RvLWl0ZW1bdGFzay1pZD1cIiR7aWR9XCJdYClcclxuICAgICAgICBsZXQgY2hpbGROb2RlID0gdG9Eb0l0ZW1EaXYubGFzdEVsZW1lbnRDaGlsZFxyXG4gICAgICAgIHdoaWxlKGNoaWxkTm9kZSkge1xyXG4gICAgICAgICAgICB0b0RvSXRlbURpdi5yZW1vdmVDaGlsZChjaGlsZE5vZGUpXHJcbiAgICAgICAgICAgIGNoaWxkTm9kZSA9IHRvRG9JdGVtRGl2Lmxhc3RFbGVtZW50Q2hpbGRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNoZWNrQm94TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICAgICAgICBjaGVja0JveExhYmVsLmNsYXNzTGlzdC5hZGQoXCJjaGVja2JveFwiKVxyXG4gICAgICAgIHRvRG9JdGVtRGl2LmFwcGVuZENoaWxkKGNoZWNrQm94TGFiZWwpXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY2hlY2tCb3hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gICAgICAgIGNoZWNrQm94SW5wdXQudHlwZSA9IFwiY2hlY2tib3hcIlxyXG4gICAgICAgIGNoZWNrQm94TGFiZWwuYXBwZW5kQ2hpbGQoY2hlY2tCb3hJbnB1dClcclxuXHJcbiAgICAgICAgY29uc3QgdG9kb1RpdGxlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXHJcbiAgICAgICAgdG9kb1RpdGxlU3Bhbi5jbGFzc0xpc3QuYWRkKFwidG9kby10aXRsZVwiKVxyXG4gICAgICAgIHRvZG9UaXRsZVNwYW4uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobmFtZSkpXHJcbiAgICAgICAgdG9Eb0l0ZW1EaXYuYXBwZW5kQ2hpbGQodG9kb1RpdGxlU3BhbilcclxuXHJcbiAgICAgICAgY29uc3QgZGV0YWlsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gICAgICAgIGRldGFpbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGV0YWlsc1wiKVxyXG4gICAgICAgIGRldGFpbEJ1dHRvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkRFVEFJTFNcIikpXHJcbiAgICAgICAgdG9Eb0l0ZW1EaXYuYXBwZW5kQ2hpbGQoZGV0YWlsQnV0dG9uKVxyXG5cclxuICAgICAgICBjb25zdCBkYXRlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXHJcbiAgICAgICAgZGF0ZVNwYW4uY2xhc3NMaXN0LmFkZChcImNyZWF0ZWQtZGF0ZVwiKVxyXG4gICAgICAgIGRhdGVTcGFuLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRhdGUpKVxyXG4gICAgICAgIHRvRG9JdGVtRGl2LmFwcGVuZENoaWxkKGRhdGVTcGFuKVxyXG5cclxuICAgICAgICBjb25zdCBlZGl0U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgICAgICBlZGl0U3Bhbi5jbGFzc0xpc3QuYWRkKFwiZWRpdFwiKVxyXG4gICAgICAgIGVkaXRTcGFuLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiZWRpdFwiKSlcclxuICAgICAgICB0b0RvSXRlbURpdi5hcHBlbmRDaGlsZChlZGl0U3BhbilcclxuXHJcbiAgICAgICAgY29uc3QgZGVsZXRlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgICAgICBkZWxldGVTcGFuLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVcIilcclxuICAgICAgICBkZWxldGVTcGFuLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiZGVsZXRlXCIpKVxyXG4gICAgICAgIHRvRG9JdGVtRGl2LmFwcGVuZENoaWxkKGRlbGV0ZVNwYW4pXHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldEhUTUxTa2VsZXRvbkZvck5ld1Rhc2sgPSAoaWQsIG5hbWUsIGRhdGUpID0+IHtcclxuICAgICAgICBjb25zdCB0b0RvSXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICB0b0RvSXRlbURpdi5jbGFzc0xpc3QuYWRkKFwidG9kby1pdGVtXCIpXHJcbiAgICAgICAgdG9Eb0l0ZW1EaXYuc2V0QXR0cmlidXRlKFwidGFzay1pZFwiLCBpZClcclxuXHJcbiAgICAgICAgY29uc3QgY2hlY2tCb3hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4gICAgICAgIGNoZWNrQm94TGFiZWwuY2xhc3NMaXN0LmFkZChcImNoZWNrYm94XCIpXHJcbiAgICAgICAgdG9Eb0l0ZW1EaXYuYXBwZW5kQ2hpbGQoY2hlY2tCb3hMYWJlbClcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBjaGVja0JveElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICAgICAgY2hlY2tCb3hJbnB1dC50eXBlID0gXCJjaGVja2JveFwiXHJcbiAgICAgICAgY2hlY2tCb3hMYWJlbC5hcHBlbmRDaGlsZChjaGVja0JveElucHV0KVxyXG5cclxuICAgICAgICBjb25zdCB0b2RvVGl0bGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcclxuICAgICAgICB0b2RvVGl0bGVTcGFuLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXRpdGxlXCIpXHJcbiAgICAgICAgdG9kb1RpdGxlU3Bhbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuYW1lKSlcclxuICAgICAgICB0b0RvSXRlbURpdi5hcHBlbmRDaGlsZCh0b2RvVGl0bGVTcGFuKVxyXG5cclxuICAgICAgICBjb25zdCBkZXRhaWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgICAgICAgZGV0YWlsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzXCIpXHJcbiAgICAgICAgZGV0YWlsQnV0dG9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiREVUQUlMU1wiKSlcclxuICAgICAgICB0b0RvSXRlbURpdi5hcHBlbmRDaGlsZChkZXRhaWxCdXR0b24pXHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcclxuICAgICAgICBkYXRlU3Bhbi5jbGFzc0xpc3QuYWRkKFwiY3JlYXRlZC1kYXRlXCIpXHJcbiAgICAgICAgZGF0ZVNwYW4uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGF0ZSkpXHJcbiAgICAgICAgdG9Eb0l0ZW1EaXYuYXBwZW5kQ2hpbGQoZGF0ZVNwYW4pXHJcblxyXG4gICAgICAgIGNvbnN0IGVkaXRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gICAgICAgIGVkaXRTcGFuLmNsYXNzTGlzdC5hZGQoXCJlZGl0XCIpXHJcbiAgICAgICAgZWRpdFNwYW4uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJlZGl0XCIpKVxyXG4gICAgICAgIHRvRG9JdGVtRGl2LmFwcGVuZENoaWxkKGVkaXRTcGFuKVxyXG5cclxuICAgICAgICBjb25zdCBkZWxldGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gICAgICAgIGRlbGV0ZVNwYW4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZVwiKVxyXG4gICAgICAgIGRlbGV0ZVNwYW4uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJkZWxldGVcIikpXHJcbiAgICAgICAgdG9Eb0l0ZW1EaXYuYXBwZW5kQ2hpbGQoZGVsZXRlU3BhbilcclxuXHJcbiAgICAgICAgdG9kb0xpc3RzQ2xhc3MuYXBwZW5kQ2hpbGQodG9Eb0l0ZW1EaXYpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtkaXNwbGF5VGFza3MsIHNhdmVOZXdUYXNrLCBlZGl0VGFza31cclxufSkoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9kb2xpc3RcclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vY3NzL3N0eWxlLmNzcyc7XHJcbmltcG9ydCAnLi9qcy9EaXNwbGF5Q29udHJvbGxlci5qcydcclxuaW1wb3J0IFRvRG9MaXN0IGZyb20gXCIuL2pzL1RvRG9MaXN0XCJcclxuaW1wb3J0IFRhc2sgZnJvbSAnLi9qcy9UYXNrLmpzJ1xyXG5cclxuXHJcblRvRG9MaXN0LmRpc3BsYXlUYXNrcygpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9