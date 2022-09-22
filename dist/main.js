/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root{\\n    --dark-bg: slategray;\\n    --middle-bg: rgb(219, 219, 219);\\n    --light-bg: rgb(233, 233, 233);\\n    --dark-font: rgb(70, 79, 88); \\n    --light-font: white;\\n}\\n\\nbody{\\n    display:grid;\\n\\n    grid-template-columns: 1fr;\\n    grid-template-rows: 100px 1fr 40px;\\n\\n    margin: 0;\\n\\n    height: 100vh;\\n    width: 100vw;\\n}\\n\\n.header, .footer{\\n    grid-column: 1/2;\\n    background-color: var(--dark-bg)\\n}\\n\\n.header{\\n    grid-row: 1/2;\\n\\n    display:grid;\\n    grid-template-columns: 90px 1fr;\\n    grid-template-rows: 1fr;\\n\\n    align-items: center;\\n\\n}\\n\\n.logo{\\n    margin: 0 0 0 10px;\\n    height: 80px;\\n    width: 80px;\\n    border: 1px solid var(--light-font);\\n}\\n\\n.title{\\n    margin: 0 0 0 20px;\\n    color: var(--light-font);\\n    font-size: 50px;\\n    font-weight: 800;\\n}\\n\\n.main{\\n    grid-column: 1/2;\\n    grid-row: 2/3;\\n\\n    display:grid;\\n    grid-template-columns: 200px 1fr;\\n    grid-template-rows: 1fr;\\n}\\n\\n.nav{\\n    grid-column: 1/2;\\n    background-color: var(--middle-bg);\\n    display: grid;\\n    grid-template-columns: 1fr;\\n    grid-template-rows: 150px 40px 1fr;\\n}\\n\\n\\n.defaultProjects{\\n/*\\n    border: 1px solid blue;\\n*/\\n}\\n\\n.inboxRow, .todayRow, .thisWeekRow, .placeholderProject, .addProjectRow{\\n    display:grid;\\n    grid-template-columns: 20px 20px 1fr;\\n    margin: 0 0 15px 0;\\n    align-items: center;\\n}\\n\\n.inboxRow{\\n    margin: 30px 0 15px 0;\\n}\\n\\n#inbox:hover{\\n    cursor: pointer;\\n}\\n\\n.defaultProjText{\\n    grid-column: 3/4;\\n    color: var(--dark-font);\\n    font-size: 16px;\\n    font-weight: 500;\\n    margin: 0 0 0 15px;\\n}\\n\\n.img{\\n    margin: 0 0 0 20px;\\n    height: 20px;\\n    width: 20px; \\n    border: 1px solid var(--light-font);\\n}\\n\\n.imgBody{\\n    margin: 0 0 0 20px;\\n    height: 20px;\\n    width: 20px; \\n    border: 1px solid var(--dark-bg);\\n}\\n\\n.projectsTitle{\\n    padding: 0 0 0 20px;\\n\\n    color: var(--dark-font);\\n    font-size: 25px;\\n    /*\\n    border: 1px solid green;\\n    */\\n    display:grid;\\n    align-items: center;\\n    margin: 0 0 0 0;\\n}\\n\\n.userProjects{\\n    /*\\n    border: 1px solid red;\\n    */\\n}\\n\\n\\n.placeholderProject{\\n    margin: 20px 0 15px 0;\\n\\n}\\n\\n\\n#content{\\n    grid-column: 2/3;\\n    display: grid;\\n\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n#content-body{\\n    display:grid;\\n\\n    grid-template-columns: 30px 30px 1fr 1fr 30px 30px;\\n    grid-template-rows: 30px 30px 30px 30px 30px 30px;\\n\\n    width: 500px;\\n    height: 80vh;\\n    background-color: var(--light-bg);\\n\\n    justify-items: center;\\n    align-items: center;\\n}\\n/*index*/\\n\\ninput, button{\\n    appearance: none;\\n    border:none;\\n    outline: none;\\n    background: none;\\n}\\n\\n#new-task-form{\\n    grid-column: 2/5;\\n    grid-row: 2/3;\\n}\\n\\n#new-task-input{\\n    background-color: var(--middle-bg);\\n    padding: 10px;\\n    border-radius: 20px;\\n}\\n\\n#new-task-submit, .edit, .delete{\\n    margin: 0 10px 0 10px;\\n    font-weight: 600;\\n}\\n\\n#new-task-submit:hover, .edit:hover, .delete:hover{\\n    cursor: pointer;\\n    opacity: 0.8;\\n}\\n\\n#new-task-submit:active, .edit:active, .delete:active{\\n    opacity: 0.6;\\n}\\n\\n.task-list{\\n    grid-column: 3/5;\\n    grid-row: 5/7;\\n\\n    display:grid;\\n    justify-items:center;\\n    align-items: center;\\n\\n    grid-template-columns: 1fr 1fr;\\n    grid-template-rows: 1fr 1fr;\\n\\n}\\n\\n.text{\\n    width: 250px;\\n    margin: 0 0 10px 0;\\n    background-color: var(--middle-bg);\\n    padding: 10px;\\n    border-radius: 20px;\\n    color: var(--dark-font);\\n}\\n\\n.text:not(:read-only){\\n    color: var(--light-font);\\n}\\n\\n#tasks{\\n    grid-column: 1/3;\\n    grid-row: 2/3;\\n\\n    display:grid;\\n    grid-template-columns: 1fr 1fr;\\n    grid-template-rows: 1fr;\\n\\n    align-items: center;\\n}\\n\\n.h2-index{\\n    grid-column: 3/5;\\n    grid-row: 4/5;\\n}\\n\\n.actions{\\n    display: grid;\\n    grid-auto-columns: 1fr 1fr;\\n}\\n\\n.edit{\\n    margin: 0 10px 0 10px;\\n    grid-column: 1/2;\\n}\\n\\n.delete{\\n    grid-column: 2/3;\\n    margin: 0 0 0 0;\\n}\\n\\n/*inbox*/\\n.headerDiv{\\n    grid-column: 2/3;\\n    grid-row: 1/3;\\n    font-size: 20px;\\n}\\n\\n\\n#to-do-1{\\n    grid-column: 2/3;\\n    grid-row: 3/4;\\n\\n    height: 20px;\\n    width: 20px; \\n    border: 1px solid var(--dark-bg);\\n}\\n\\n.todoDiv{\\n    grid-column: 3/4;\\n    grid-row: 3/4;\\n}\\n\\n#add-task{\\n    grid-column: 2/3;\\n    grid-row: 4/5;\\n    \\n    height: 20px;\\n    width: 20px; \\n    border: 1px solid var(--dark-bg);\\n}\\n\\n.deleteTask{\\n    grid-column: 5/6;\\n    grid-row: 3/4;\\n    display:grid;\\n    border: 1px solid var(--dark-bg);\\n    height: 20px;\\n    width: 20px; \\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.bodyTaskCopy{\\n    grid-column: 3/4;\\n    grid-row: 4/5;\\n}\\n\\n.footer{\\n    grid-row: 3/4;\\n\\n    display:grid;\\n    justify-content: center;\\n    align-content: center\\n}\\n\\n.footerText{\\n    color: var(--light-font);\\n}\\n\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/clearExisting.js":
/*!******************************!*\
  !*** ./src/clearExisting.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearExisting\": () => (/* binding */ clearExisting)\n/* harmony export */ });\nvar clearExisting = function(){\n    //remove existing\n    var el = document.getElementById(\"content\");\n    while ( el.firstChild ) el.removeChild( el.firstChild );\n}\n\n\n//# sourceURL=webpack://todo-list/./src/clearExisting.js?");

/***/ }),

/***/ "./src/inbox.js":
/*!**********************!*\
  !*** ./src/inbox.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"conLog\": () => (/* binding */ conLog),\n/* harmony export */   \"inbox\": () => (/* binding */ inbox)\n/* harmony export */ });\nvar conLog = function(string){\n    return console.log(string);\n}\n//create inbox\nvar inbox = function(){\n    const contentHtml = document.getElementById(\"content\");\n\n    const contentBody = document.createElement(\"div\");\n    contentBody.setAttribute(`id`, `content-body`);\n\n    const headerDiv = document.createElement(\"div\");\n    headerDiv.classList.add(\"headerDiv\");\n    headerDiv.textContent = \"Inbox\";\n    \n    const todoImg = document.createElement(\"div\");\n    todoImg.setAttribute(`id`, `to-do-1`);\n    \n    const todoDiv = document.createElement(\"div\");\n    todoDiv.classList.add(\"todoDiv\");\n    todoDiv.textContent = \"Test\";\n    \n    const imagePlaceholder = document.createElement(\"div\");\n    imagePlaceholder.setAttribute(`id`, `add-task`);\n    \n    const addTask = document.createElement(\"div\");\n    addTask.classList.add(\"bodyTaskCopy\");\n    addTask.textContent = \"Add Task\";\n\n    const deleteTask = document.createElement(\"div\");\n    deleteTask.classList.add(\"deleteTask\");\n    deleteTask.setAttribute(`id`, `deleteTask`);\n    deleteTask.textContent = \"X\";\n\n    contentHtml.appendChild(contentBody);\n\n    contentBody.appendChild(headerDiv);\n    \n    contentBody.appendChild(todoImg);\n    contentBody.appendChild(todoDiv);\n    contentBody.appendChild(deleteTask);\n\n    contentBody.appendChild(imagePlaceholder);\n    contentBody.appendChild(addTask);\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/inbox.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _clearExisting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearExisting */ \"./src/clearExisting.js\");\n/* harmony import */ var _taskList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskList */ \"./src/taskList.js\");\n/* harmony import */ var _inbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inbox */ \"./src/inbox.js\");\n\n\n\n\n\n\n//generate default view\n\n(0,_clearExisting__WEBPACK_IMPORTED_MODULE_1__.clearExisting)();\n(0,_taskList__WEBPACK_IMPORTED_MODULE_2__.taskHeader)();\n(0,_taskList__WEBPACK_IMPORTED_MODULE_2__.taskList)();\n\nwindow.addEventListener(`load`, () => {\n\n    const form = document.querySelector(\"#new-task-form\");\n    const input = document.querySelector(\"#new-task-input\");\n    const list_el = document.querySelector(\"#tasks\")\n\n\n    form.addEventListener(`submit`, (e) => {\n      e.preventDefault();\n      \n      const task = input.value;\n    \n      if (!task){\n          alert(\"Please fill out the task\");\n          return;\n      }\n      \n      const task_el = document.getElementById(\"tasks\")\n\n      const task_content_el = document.createElement(\"div\");\n      task_content_el.classList.add(\"content\");\n\n      task_el.appendChild(task_content_el);\n\n      const task_input_el = document.createElement(`input`);\n      task_input_el.type = \"text\";\n      task_input_el.classList.add(\"text\");\n      task_input_el.value = task;\n      task_input_el.setAttribute(`readonly`, `readonly`);\n\n      task_content_el.appendChild(task_input_el);\n\n      const task_actions_el = document.createElement(\"div\");\n      task_actions_el.classList.add(\"actions\");\n\n      const task_edit_el = document.createElement(\"button\");\n      task_edit_el.classList.add(\"edit\");\n      task_edit_el.innerHTML = \"Edit\";\n\n      const task_delete_el = document.createElement(\"button\");\n      task_delete_el.classList.add(\"delete\");\n      task_delete_el.innerHTML = \"Delete\";\n\n      task_actions_el.appendChild(task_edit_el);\n      task_actions_el.appendChild(task_delete_el);\n\n      task_el.appendChild(task_actions_el);\n\n      list_el.appendChild(task_el);\n    })\n})\n\n\n\n\n\n\n\n\n//inbox button\nvar inboxButtonPressed = function(){\n    ;(0,_clearExisting__WEBPACK_IMPORTED_MODULE_1__.clearExisting)();\n    //conLog(\"Hello\");\n    //generateTable()\n    (0,_inbox__WEBPACK_IMPORTED_MODULE_3__.inbox)();\n\n}\n\nconst inboxButton = document.getElementById(\"inbox\");\ninboxButton.addEventListener(`click`, function(){\n    inboxButtonPressed();\n})\n\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/taskList.js":
/*!*************************!*\
  !*** ./src/taskList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"taskHeader\": () => (/* binding */ taskHeader),\n/* harmony export */   \"taskList\": () => (/* binding */ taskList)\n/* harmony export */ });\nvar taskHeader = function(){\n\n    const content = document.getElementById(\"content\");\n\n    const contentBody = document.createElement(`div`);\n    contentBody.setAttribute(`id`, `content-body`);\n        //Add Task Form\n\n    const taskForm = document.createElement(\"form\");\n    taskForm.setAttribute(`id`, `new-task-form`);\n    \n    const textInput = document.createElement(\"input\");\n    textInput.setAttribute(`type`, `text`);\n    textInput.setAttribute(`id`, `new-task-input`);\n    textInput.setAttribute(`placeholder`, `What are you planning?`);\n\n    const textSubmit = document.createElement(`input`);\n    textSubmit.setAttribute(`type`, `submit`);\n    textSubmit.setAttribute(`id`, `new-task-submit`);\n    textSubmit.setAttribute(`value`, `Add Task`);\n\n    taskForm.appendChild(textInput);\n    taskForm.appendChild(textSubmit);\n\n        contentBody.appendChild(taskForm);\n        content.appendChild(contentBody);\n}\n\n        //Task List\n\nvar taskList = function(){\n\n    //\n    const content = document.getElementById(\"content\");\n    const contentBody = document.getElementById(\"content-body\");\n\n    const taskList = document.createElement(\"section\");\n    taskList.classList.add(\"task-list\");\n\n        //header\n    const tasksHeader = document.createElement(\"h2\");\n    tasksHeader.classList.add(`h2-index`);\n    tasksHeader.textContent = \"Tasks\";\n\n    const tasks = document.createElement(\"div\");\n    tasks.setAttribute(`id`, `tasks`);\n\n        //content\n    const taskContent = document.createElement(`div`);\n    taskContent.classList.add(`content`);\n\n    const taskInput = document.createElement(`input`);\n    taskInput.setAttribute(`type`, `text`);\n    taskInput.classList.add(`text`);\n    taskInput.setAttribute(`value`, `default task: go to zoo`);\n    taskInput.setAttribute(`readonly`, ``);\n\n    contentBody.appendChild(tasksHeader);\n    taskList.appendChild(tasks);\n\n    taskContent.appendChild(taskInput);\n    tasks.appendChild(taskContent);\n    \n        contentBody.appendChild(taskList);\n        content.appendChild(contentBody);\n\n        //add buttons:\n\n    const actions = document.createElement(`div`);\n    actions.classList.add(`actions`);\n\n    const editButton = document.createElement(`button`);\n    editButton.classList.add(\"edit\");\n    editButton.textContent = \"Edit\";\n\n    const deleteButton = document.createElement(`button`);\n    deleteButton.classList.add(\"delete\");\n    deleteButton.textContent = \"Delete\";\n\n    actions.appendChild(editButton);\n    actions.appendChild(deleteButton);\n\n        tasks.appendChild(actions);\n        content.appendChild(contentBody);\n}\n\n//# sourceURL=webpack://todo-list/./src/taskList.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;