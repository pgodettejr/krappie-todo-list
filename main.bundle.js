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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml { color-scheme: dark }\n\nbody {\n  --scrollbar-width: 0px;\n  min-height: 100vh;\n  font-family: \"Futura\", Arial, Helvetica, system-ui, sans-serif;\n  overflow-x: hidden;\n}\n\n.content {\n  display: grid;\n  grid-template-columns: 0.5fr 3.5fr; /* repeat(4, 1fr) instead? */\n}\n\n.content > * {\n  padding: 15px;\n  font-size: 32px;\n  font-weight: bold;\n  font-family: Arial, Helvetica, sans-serif;\n  color: black;\n}\n\n.heading {\n  min-width: 100vw;\n\n  grid-column: 2 / span 2;\n  grid-row: 1;\n  padding: 40px 30px 40px;\n  margin-bottom: 4px;\n  box-shadow: -3px 10px 5px #c7c9cc;\n\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n}\n\n/* Keep in mind original image is 512 x 512 px */\n.image-button {\n  height: 100px;\n  width: 100px;\n  border-radius: 50%;\n}\n\n.search #search-text {\n  background-color: #EEE;\n  width: 60%;\n  border-radius: 28px;\n}\n\n/* Styling for \"Add Task\" and \"Settings\" buttons in the heading goes in this spot */\n\n.sidebar {\n  grid-column: 1;\n  /* grid-row: 1 / span 2; */\n}\n\n  & ul {\n    list-style-type: none;\n    margin-bottom: 1em;\n  }\n\n  & li {\n    margin-bottom: 20px;\n  }\n\n/* TODO: Temporary styling for main. Revisit this at some point if it doesn't look right */\nmain {\n  /* grid-column: 2 / 5; */\n\n  background-color: #EEE;\n  grid-column: 2 / span 2;\n  grid-row: 2;\n  gap: 15px;\n\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n}\n\ndialog[id\\$=\"-dialog\"] {\n  border: none;\n  background-color: #323232;\n  padding: 40px 30px 40px;\n  border-radius: 8px;\n  box-shadow: 0 5px 3px #c7c9cc;\n\n  width: 20%;\n  margin: 0 auto;\n  position: absolute;\n  top: 25%;\n}\n\nform[id\\$=\"-form\"] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  gap: 2rem;\n\n  & p {\n    font-size: 20px;\n    font-weight: 700;\n  }\n\n  & button[id\\$=\"Task\"],\n    button[id\\$=\"Project\"] {\n    background-color: #596D48;\n    font-size: 16px;\n    font-weight: 700;\n    text-transform: uppercase;\n  }\n\n  & button[id\\$=\"Task\"]:hover,\n    button[id\\$=\"Project\"]:hover {\n    background: hsl(92 20% 56%);\n  }\n}\n\nlabel, input {\n  display: block;\n  padding: 0;\n  margin: 10px 0;\n  width: 80%;\n  height: auto;\n}\n\n.form-buttons > button {\n  margin: 2rem;\n  padding: 16px 32px;\n  border: none;\n  border-radius: 8px;\n  display: inline-block;\n}\n\n/* Open state of the dialog form */\ndialog[open] {\n  opacity: 1;\n  transform: scaleY(1);\n}\n\n/* Closed state of the dialog form */\ndialog {\n  opacity: 0;\n  transform: scaleY(0);\n  transition: all 0.7s ease-out allow-discrete;\n}\n\n/* Before the \"open state\". This has to be after dialog[open] to take effect as they have same CSS specificity */\n@starting-style {\n  dialog[open] {\n    opacity: 0;\n    transform: scaleY(0);\n  }\n}\n\n/* Transition the backdrop effect when the dialog form is opened */\ndialog::backdrop {\n  background-color: rgb(0 0 0 / 0%);\n  transition: all 0.7s allow-discrete;\n}\n\ndialog[open]::backdrop {\n  background-color: rgb(0 0 0 / 75%);\n}\n\n/* Don't nest this inside the above selector. It can't represent pseudo-elements */\n@starting-style {\n  dialog[open]::backdrop {\n    background-color: rgb(0 0 0 / 0%);\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://krappie-todo-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://krappie-todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://krappie-todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://krappie-todo-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://krappie-todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://krappie-todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://krappie-todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://krappie-todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://krappie-todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://krappie-todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   myProjects: () => (/* binding */ myProjects)\n/* harmony export */ });\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.js */ \"./src/tasks.js\");\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ \"./src/projects.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _sounds_quick_fart_with_reverb_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sounds/quick-fart-with-reverb.mp3 */ \"./src/sounds/quick-fart-with-reverb.mp3\");\n/* harmony import */ var _img_settings_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/settings.png */ \"./src/img/settings.png\");\n/* harmony import */ var _img_plus_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/plus.png */ \"./src/img/plus.png\");\n// TODO: if remove button functionality for existing projects goes here, don't forget to add the myProjects.splice(-1, 1) method to it;\n\n\n\n\n\n\n\n\n// Dialog forms DOM\nconst taskDialog = document.getElementById(\"task-dialog\");\nconst projectDialog = document.getElementById(\"project-dialog\");\n\n// Icons for Add Task and Settings buttons in the header\nconst headerTask = document.getElementById(\"add-task\");\nconst headerSettings = document.getElementById(\"settings\");\n\nconst settingsIcon = new Image();\nsettingsIcon.src = _img_settings_png__WEBPACK_IMPORTED_MODULE_4__;\n\nconst taskIcon = new Image();\ntaskIcon.src = _img_plus_png__WEBPACK_IMPORTED_MODULE_5__;\n\nheaderSettings.appendChild(settingsIcon);\nheaderTask.appendChild(taskIcon);\n\n// Sidebar buttons DOM\nconst sidebarTaskBtn = document.getElementById(\"add-task-2\");\nconst sidebarInboxBtn = document.getElementById(\"inbox-button\");\nconst sidebarTodayBtn = document.getElementById(\"today-button\");\nconst sidebarUpcomingBtn = document.getElementById(\"upcoming-button\");\nconst sidebarProjectBtn = document.getElementById(\"add-project\");\n\n// Function for making \"Task\" objects & reporting the \"Task\" added to the project\nfunction Task (taskTitle, dueDate, priority, description) {\n  this.taskTitle = taskTitle;\n  this.dueDate = dueDate;\n  this.priority = priority;\n  this.description = description;\n\n  this.checked = false // Checkbox whose default is not checked. Does NOT currently add the \"checkbox\" itself to the task (see HTML file for details). May need to be a method.\n  this.id = function() { // ID number for each project assigned at \"random?\". Would be used to find the task that the user clicked on to delete\n    let id = Date.now();\n    return id;\n  }\n}\n\n// Function for making \"Project\" objects to be created as a project inside of an array\nfunction Project (projectTitle) {\n  this.projectTitle = projectTitle;\n  this.tasks = []; // Initializes tasks as an empty array\n\n  this.addTask = function(taskTitle, dueDate, priority, description) {\n    const newTask = new Task(taskTitle, dueDate, priority, description);\n    this.tasks.push(newTask);\n  }\n}\n\n// List of projects and tasks within those projects\nconst myProjects = [];\n\n// Stores new \"Project\" objects into a new array via user input\n// OPTION: Add \"Priority Level\" drop-down menu and \"Description\" text box. Would also need to add them to the Class above. Need to be rendered as well.\nfunction addProject() {\n  let projectTitle = document.getElementById(\"project-title\").value; // Potentially add '.trim()' to the end of this line if there's whitespace that needs to be removed\n\n  if (projectTitle) {\n    const newProject = new Project(projectTitle);\n    myProjects.push(newProject);\n    (0,_projects_js__WEBPACK_IMPORTED_MODULE_1__.projectDisplay)();\n  }\n}\n\nfunction addTaskToProject(projectIndex) {\n  let taskTitle = document.getElementById(\"task-title\").value; // Potentially add '.trim()' to the end of this line if there's whitespace that needs to be removed\n  let dueDate = document.getElementById(\"due-date\").value;\n  let priority = document.getElementById(\"priority\").value;\n  let description = document.getElementById(\"description\").value;\n\n  if (taskTitle && dueDate && priority) { // Do we need !isNaN(dueDate) instead?\n    myProjects[projectIndex].addTask(taskTitle, dueDate, priority, description);\n    (0,_tasks_js__WEBPACK_IMPORTED_MODULE_0__.taskDisplay)();\n  }\n}\n\n// Function for playing fart sound when user interacts with app logo. Click is enabled, but how can we also enable other interactions for accessibility like 'keydown' etc?\nfunction poopSound() {\n  const poopLogo = document.querySelector(\".app-logo\");\n\n  poopLogo.addEventListener('click', function(e) {\n    // Create the audio element via JS\n    const audio = document.createElement(\"audio\");\n    audio.setAttribute(\"data-image\", \"logo-sound\");\n\n    // Wire the mp3 file up to the already existing img file\n    const imageButton = document.querySelector(\".image-button\");\n    audio.src = _sounds_quick_fart_with_reverb_mp3__WEBPACK_IMPORTED_MODULE_3__;\n\n    // Text to show if the users' browser doesn't support the mp3 file\n    const audioError = document.createTextNode(\"Your browser does not support the HTML5 audio tag.\");\n    audio.appendChild(audioError);\n\n    // Append the audio itself to the image file\n    imageButton.appendChild(audio);\n\n    if(!audio) return; // stops function from running altogether\n    audio.currentTime = 1; // rewinds file to just before the sound clip starts (1 second mark)\n    audio.play();\n  });\n};\n\npoopSound();\n\n// Header \"Add Task\" button functionality that brings up the form to enter Task details\nheaderTask.addEventListener('click', () => {\n  taskDialog.showModal();\n});\n\n// Sidebar \"Add Task\" button functionality that brings up the form to enter Task details\nsidebarTaskBtn.addEventListener('click', () => {\n  taskDialog.showModal();\n});\n\n// \"Confirm\" button functionality that checks that all required task sections were completed by the user, then submits it to the main area\n_tasks_js__WEBPACK_IMPORTED_MODULE_0__.confirmTask.addEventListener('click', (e) => {\n  let taskComplete = document.getElementById(\"task-form\").checkValidity();\n  if (taskComplete) {\n    e.preventDefault();\n    addTaskToProject();\n    document.getElementById(\"task-form\").reset();\n    taskDialog.close();\n  }\n});\n\n// \"Cancel\" button functionality that deletes all info that was entered, then closes the Task form\n_tasks_js__WEBPACK_IMPORTED_MODULE_0__.cancelTask.addEventListener('click', () => {\n  document.getElementById(\"task-form\").reset();\n  taskDialog.close();\n});\n\n// Sidebar \"Add Project\" button functionality that brings up the form to enter Project details\nsidebarProjectBtn.addEventListener('click', () => {\n  projectDialog.showModal();\n});\n\n// \"Confirm\" button functionality that checks that all required project sections were completed by the user, then submits it to the main area\n_projects_js__WEBPACK_IMPORTED_MODULE_1__.confirmProject.addEventListener('click', (e) => {\n  let projectComplete = document.getElementById(\"project-form\").checkValidity();\n  if (projectComplete) {\n    e.preventDefault();\n    addProject();\n    document.getElementById(\"project-form\").reset();\n    projectDialog.close();\n  }\n});\n\n// \"Cancel\" button functionality that deletes all info that was entered, then closes the Project form\n_projects_js__WEBPACK_IMPORTED_MODULE_1__.cancelProject.addEventListener('click', () => {\n  document.getElementById(\"project-form\").reset();\n  projectDialog.close();\n});\n\n//# sourceURL=webpack://krappie-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cancelProject: () => (/* binding */ cancelProject),\n/* harmony export */   confirmProject: () => (/* binding */ confirmProject),\n/* harmony export */   projectDisplay: () => (/* binding */ projectDisplay),\n/* harmony export */   projectForm: () => (/* binding */ projectForm)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n// TODO: Don't forget to create a container element in the DOM for everything to generate under, then return that container element at the bottom of this file\n\n\n\n// Global DOM elements related to adding projects and tasks to the app\nconst projectForm = document.getElementById(\"project-dialog\");\nconst confirmProject = document.getElementById(\"confirmProject\");\nconst cancelProject = document.getElementById(\"cancelProject\");\n\n// class Project {\n//   constructor(projectTitle) {\n//     this.projectTitle = projectTitle;\n//   }\n// }\n\n// function addProject() {\n//   let projectTitle = document.getElementById(\"project-title\").value; // Potentially add '.trim()' to the end of this line if there's whitespace that needs to be removed\n\n//   if (projectTitle) {\n//     const newProject = new Project(projectTitle);\n\n//     // As this line of code is currently, we get \"Uncaught ReferenceError: arr is not defined\"\n//     // if 'let' is added before 'arr' we get \"Uncaught ReferenceError: Cannot access 'arr' before initialization\"\n//     arr = (arr || [] ).concat(newProject) // Does \"newProject\" need to be enclosed in [] to prevent the values which are arrays from being flattened?\n\n//     projectDisplay(); // Function for dynamically adding the project to the Sidebar and main areas\n//   }\n// }\n\n// Generate all project info here using the \"DOM level 1\" technique (see \"Traversing an HTML table with JS & DOM interfaces\" documentation if needed)\n// e.g: bookDisplay() function in the Library project\nfunction projectDisplay() {\n  for (const project in _index_js__WEBPACK_IMPORTED_MODULE_0__.myProjects) {\n    // DOM for \"My Projects\" section of the sidebar as well as the main area\n    const projectSidebar = document.querySelector(\".menu-2\");\n    const main = document.querySelector(\"main\");\n\n    // Generate the sidebar button\n    const projectBtn = document.createElement(\"button\");\n    let projectBtnText = document.createTextNode(`${_index_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[project].projectTitle}`);\n    projectBtn.classList.add(\"project-btn\");\n\n    // Generate \"Project Name\" header to be added to the main area\n    const projectName = document.createElement(\"ul\");\n    let projectNameText = document.createTextNode(`${_index_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[project].projectTitle}`);\n    projectName.classList.add(\"project-name\");\n\n    projectBtn.appendChild(projectBtnText);\n    projectSidebar.appendChild(projectBtn);\n    projectName.appendChild(projectNameText);\n    main.appendChild(projectName);\n\n    // Project button functionality. Could this be placed outside of this function? What about removing it from this JS entirely and placing it in index.js?\n    const projectButtons = document.querySelectorAll(\".project-btn\");\n\n    // Currently this will only replace the current project showing in main area once. Will not show another project afterwards if you click it's related sidebar button\n    projectButtons.forEach(projectBtn => {\n      projectBtn.addEventListener('click', () => { // Took the \"e\" out of the parentheses. Will put it back in if needed later on.\n        // TODO: Code to generate the project related to the button clicked via \"tabbed browsing\" goes here. See \"Restaurant\" project as an example\n        main.replaceChildren();\n        main.appendChild(projectName);\n      });\n    });\n  }\n\n  _index_js__WEBPACK_IMPORTED_MODULE_0__.myProjects.splice(-1, 1)\n}\n\n\n\n//# sourceURL=webpack://krappie-todo-list/./src/projects.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cancelTask: () => (/* binding */ cancelTask),\n/* harmony export */   confirmTask: () => (/* binding */ confirmTask),\n/* harmony export */   taskDisplay: () => (/* binding */ taskDisplay),\n/* harmony export */   taskForm: () => (/* binding */ taskForm)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n// TODO: Don't forget to create a container element in the DOM for everything to generate under, then return that container element at the bottom of this file\n\n\n\n// Global DOM elements related to adding projects and tasks to the app\nconst taskForm = document.getElementById(\"task-dialog\");\nconst confirmTask = document.getElementById(\"confirmTask\");\nconst cancelTask = document.getElementById(\"cancelTask\");\n\n// List of projects and tasks within those projects\n// const myProjects = [];\n\n// Class for making \"Task\" objects & reporting the \"Task\" project\n// class Task {\n//   constructor(taskTitle, dueDate, time, priority, description, checked, id) {\n//     this.taskTitle = taskTitle;\n//     this.dueDate = dueDate;\n//     this.time = time; // Changing this to \"Add to Project\" drop-down menu\n//     this.priority = priority; // TODO: Research how to add colors next to each option in the Drop down menu (img files that are color dots & add them as children in the HTML?)\n//     this.description = description; \n//     this.checked = false; // Checkbox whose default is not checked. Does NOT currently add the \"checkbox\" itself to the task (see HTML file for details)\n//     this.id = Date.now(); // Id number for each project assigned at \"random?\". Would be used to find the task that the user clicked on to delete\n//   }\n// }\n\n// Code example if we had gone with the nested object option (add tasks within the Add Project dialog)\n// this.task = function addTaskToClass() {\n//   todo: '';\n// }\n\n// Stores new Tasks objects into the myProjects array via user input. \n// NOTE: DOM elements may need to be changed to querySelector if they don't work\n// function addTask() {\n//   let taskTitle = document.getElementById(\"task-title\").value; // Potentially add '.trim()' to the end of this line if there's whitespace that needs to be removed\n//   let dueDate = document.getElementById(\"due-date\").value;\n//   let time = document.getElementById(\"task-time\").value;\n//   let priority = document.getElementById(\"priority\").value;\n//   let description = document.getElementById(\"description\").value;\n//   // let task = document.getElementById(\"\").value;\n\n//   if (taskTitle && dueDate && priority) { // Do we need !isNaN(dueDate) instead?\n//     const newTask = new Task(taskTitle, dueDate, time, priority, description, checked, id);\n//     myProjects.push(newTask); // Possibly change this to 'arr.push(newTask)' to reflect the task being added to the project array that was set up via user input\n//     // taskDisplay(); <-- Function for dynamically adding the task to the <main> area that needs to be written below\n//   }\n// }\n\n// Render all task info here using the \"DOM level 1\" technique (see \"Traversing an HTML table with JS & DOM interfaces\" documentation if needed)\n// Function for dynamically adding the task to the <main> area\n// e.g: bookDisplay() function in the Library project\nfunction taskDisplay() {\n  for (const task in _index_js__WEBPACK_IMPORTED_MODULE_0__.myProjects) {\n    // Should the actual rendering of the <ul> be handled by index.js? (have this function run in index.js, then append everything to the project <ul> afterwards in index.js)\n    // const taskList = document.createElement(\"ul\");\n    // taskList.classList.add(\"task-info\");\n\n    // Checkbox rendering goes here or under taskName\n    const isChecked = task.checked ? 'done' : '';\n\n    // Sets up the name of the task entered as a list element so the user can have a list of tasks\n    const taskName = document.createElement(\"li\");\n    taskName.setAttribute('data-key', task.id);\n    taskName.classList.add(`todo-item ${isChecked}`);\n\n    // Renders <p> tags for the Date, Time, Priority level and Description box from the \"Add Task\" form (to be used as parents for the text info below)\n    const taskDate = document.createElement(\"p\");\n    const taskTime = document.createElement(\"p\");\n    const taskPriority = document.createElement(\"p\");\n    const taskDescription = document.createElement(\"p\");\n\n    taskDate.classList.add(\"task-date\");\n    taskTime.classList.add(\"task-time\");\n    taskPriority.classList.add(\"task-priority\");\n    taskDescription.classList.add(\"task-description\");\n\n    // Text info DOM that takes user input from the \"Add Task\" form and creates text nodes to be attached to the <p> tags above\n    const taskNameInfo = document.createTextNode(`${_index_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[task].taskTitle}`);\n    const taskDateInfo = document.createTextNode(`${_index_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[task].dueDate}`);\n    const taskTimeInfo = document.createTextNode(`${_index_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[task].time}`);\n    const taskPriorityInfo = document.createTextNode(`${_index_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[task].priority}`);\n    const taskDescriptionInfo = document.createTextNode(`${_index_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[task].description}`);\n\n    // Attaches text info via user input to the <p> tags that were created\n    taskName.appendChild(taskNameInfo);\n    taskDate.appendChild(taskDateInfo);\n    taskTime.appendChild(taskTimeInfo);\n    taskPriority.appendChild(taskPriorityInfo);\n    taskDescription.appendChild(taskDescriptionInfo);\n\n    // Places the Date, Time, Priority level and Description as children under the Task Name <li>\n    // TODO: Test to see if this looks ok in the UI. Think of a different implementation if it doesn't\n    taskName.appendChild(taskDate);\n    taskName.appendChild(taskTime);\n    taskName.appendChild(taskPriority);\n    taskName.appendChild(taskDescription);\n\n    // TODO: Figure out how to append taskName to the <ul> that was made in projects.js\n    projectName.appendChild(taskName); // Don't think it's this simple since projectName is in a separate file\n\n    // TODO: Code for a conditional statement that checks to see if the project the user selected exists before adding the task to it (if else statement)\n  }\n}\n\n\n\n\n//# sourceURL=webpack://krappie-todo-list/./src/tasks.js?");

/***/ }),

/***/ "./src/img/plus.png":
/*!**************************!*\
  !*** ./src/img/plus.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e9799d5c99d2723ec5eb.png\";\n\n//# sourceURL=webpack://krappie-todo-list/./src/img/plus.png?");

/***/ }),

/***/ "./src/img/settings.png":
/*!******************************!*\
  !*** ./src/img/settings.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0e1d8aec7a8d7e02ae41.png\";\n\n//# sourceURL=webpack://krappie-todo-list/./src/img/settings.png?");

/***/ }),

/***/ "./src/sounds/quick-fart-with-reverb.mp3":
/*!***********************************************!*\
  !*** ./src/sounds/quick-fart-with-reverb.mp3 ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a54bfbefec96d10a38e3.mp3\";\n\n//# sourceURL=webpack://krappie-todo-list/./src/sounds/quick-fart-with-reverb.mp3?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;