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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml { color-scheme: dark }\n\nbody {\n  --scrollbar-width: 0px;\n  min-height: 100vh;\n  font-family: \"Futura\", Arial, Helvetica, system-ui, sans-serif;\n  overflow-x: hidden;\n}\n\n.content {\n  display: grid;\n  grid-template-columns: 0.5fr 3.5fr; /* repeat(4, 1fr) instead? */\n}\n\n.content > * {\n  padding: 15px;\n  font-size: 32px;\n  font-weight: bold;\n  font-family: Arial, Helvetica, sans-serif;\n  color: black;\n}\n\n.heading {\n  min-width: 100vw;\n\n  grid-column: 2 / span 2;\n  grid-row: 1;\n  padding: 40px 30px 40px;\n  margin-bottom: 4px;\n  box-shadow: -3px 10px 5px #c7c9cc;\n\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n}\n\n/* Keep in mind original image is 512 x 512 px */\n.image-button {\n  height: 100px;\n  width: 100px;\n  border-radius: 50%;\n}\n\n/* Styling for \"Add Task\" button in the heading goes in this spot */\n\n.sidebar {\n  grid-column: 1;\n  /* grid-row: 1 / span 2; */\n}\n\n  & ul {\n    list-style-type: none;\n    margin-bottom: 1em;\n  }\n\n  & li {\n    margin-bottom: 20px;\n  }\n\n/* TODO: Temporary styling for main. Revisit this at some point if it doesn't look right */\nmain {\n  /* grid-column: 2 / 5; */\n\n  background-color: #EEE;\n  grid-column: 2 / span 2;\n  grid-row: 2;\n  gap: 15px;\n\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n}\n\ndialog[id\\$=\"-dialog\"] {\n  border: none;\n  background-color: #323232;\n  padding: 40px 30px 40px;\n  border-radius: 8px;\n  box-shadow: 0 5px 3px #c7c9cc;\n\n  width: 20%;\n  margin: 0 auto;\n  position: absolute;\n  top: 25%;\n}\n\nform[id\\$=\"-form\"] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  gap: 2rem;\n\n  & p {\n    font-size: 20px;\n    font-weight: 700;\n  }\n\n  & button[id\\$=\"Task\"],\n    button[id\\$=\"Project\"] {\n    background-color: #596D48;\n    font-size: 16px;\n    font-weight: 700;\n    text-transform: uppercase;\n  }\n\n  & button[id\\$=\"Task\"]:hover,\n    button[id\\$=\"Project\"]:hover {\n    background: hsl(92 20% 56%);\n  }\n}\n\nlabel, input {\n  display: block;\n  padding: 0;\n  margin: 10px 0;\n  width: 80%;\n  height: auto;\n}\n\n.form-buttons > button {\n  margin: 2rem;\n  padding: 16px 32px;\n  border: none;\n  border-radius: 8px;\n  display: inline-block;\n}\n\n/* Open state of the dialog form */\ndialog[open] {\n  opacity: 1;\n  transform: scaleY(1);\n}\n\n/* Closed state of the dialog form */\ndialog {\n  opacity: 0;\n  transform: scaleY(0);\n  transition: all 0.7s ease-out allow-discrete;\n}\n\n/* Before the \"open state\". This has to be after dialog[open] to take effect as they have same CSS specificity */\n@starting-style {\n  dialog[open] {\n    opacity: 0;\n    transform: scaleY(0);\n  }\n}\n\n/* Transition the backdrop effect when the dialog form is opened */\ndialog::backdrop {\n  background-color: rgb(0 0 0 / 0%);\n  transition: all 0.7s allow-discrete;\n}\n\ndialog[open]::backdrop {\n  background-color: rgb(0 0 0 / 75%);\n}\n\n/* Don't nest this inside the above selector. It can't represent pseudo-elements */\n@starting-style {\n  dialog[open]::backdrop {\n    background-color: rgb(0 0 0 / 0%);\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://krappie-todo-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _krappieUI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./krappieUI.js */ \"./src/krappieUI.js\");\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ \"./src/projects.js\");\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks.js */ \"./src/tasks.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _sounds_quick_fart_with_reverb_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sounds/quick-fart-with-reverb.mp3 */ \"./src/sounds/quick-fart-with-reverb.mp3\");\n/* harmony import */ var _img_plus_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/plus.png */ \"./src/img/plus.png\");\n// TODO: if remove button functionality for existing projects goes here, don't forget to add the myProjects.splice(-1, 1) method to it;\n\n\n\n\n\n\n\n\n_projects_js__WEBPACK_IMPORTED_MODULE_1__.appState.myProjects.push(_projects_js__WEBPACK_IMPORTED_MODULE_1__.appState.defaultProject);\n \n// OPTION: separate function that only renders elements for the default project\n(0,_krappieUI_js__WEBPACK_IMPORTED_MODULE_0__.renderProject)();\n// main.appendChild(whatever the 'default' project showing all tasks will be); \n\n// Dialog forms DOM\nconst taskDialog = document.getElementById(\"task-dialog\");\nconst projectDialog = document.getElementById(\"project-dialog\");\n\n// Sidebar buttons DOM. May get rid of sidebarTodayBtn (see comment in HTML regarding this element)\nconst sidebarTaskBtn = document.getElementById(\"add-task-2\");\nconst sidebarTodayBtn = document.getElementById(\"today-button\");\nconst sidebarProjectBtn = document.getElementById(\"add-project\");\n\n// Icon for Add Task button in the header\nconst headerTask = document.getElementById(\"add-task\");\n\nconst taskIcon = new Image();\ntaskIcon.src = _img_plus_png__WEBPACK_IMPORTED_MODULE_5__;\n\nheaderTask.appendChild(taskIcon);\n\n// Function for playing fart sound when user interacts with app logo. Click is enabled, but how can we also enable other interactions for accessibility like 'keydown' etc?\nfunction poopSound() {\n  const poopLogo = document.querySelector(\".app-logo\");\n\n  poopLogo.addEventListener('click', function(e) {\n    // Create the audio element via JS\n    const audio = document.createElement(\"audio\");\n    audio.setAttribute(\"data-image\", \"logo-sound\");\n\n    // Wire the mp3 file up to the already existing img file\n    const imageButton = document.querySelector(\".image-button\");\n    audio.src = _sounds_quick_fart_with_reverb_mp3__WEBPACK_IMPORTED_MODULE_4__;\n\n    // Text to show if the users' browser doesn't support the mp3 file\n    const audioError = document.createTextNode(\"Your browser does not support the HTML5 audio tag.\");\n    audio.appendChild(audioError);\n\n    // Append the audio itself to the image file\n    imageButton.appendChild(audio);\n\n    if(!audio) return; // stops function from running altogether\n    audio.currentTime = 1; // rewinds file to just before the sound clip starts (1 second mark)\n    audio.play();\n  });\n};\n\npoopSound();\n\n// Header \"Add Task\" button functionality that brings up the form to enter Task details\nheaderTask.addEventListener('click', () => {\n  taskDialog.showModal();\n  (0,_krappieUI_js__WEBPACK_IMPORTED_MODULE_0__.populateProjects)(); // appState.myProjects may need to be a parameter here\n});\n\n// Sidebar \"Add Task\" button functionality that brings up the form to enter Task details\nsidebarTaskBtn.addEventListener('click', () => {\n  taskDialog.showModal();\n  (0,_krappieUI_js__WEBPACK_IMPORTED_MODULE_0__.populateProjects)(); // appState.myProjects may need to be a parameter here\n});\n\n// \"Confirm\" button functionality that checks that all required task sections were completed by the user, then submits it to the main area and closes the Task form\n// TODO: This is the only button that doesn't work for several reasons\n_krappieUI_js__WEBPACK_IMPORTED_MODULE_0__.confirmTask.addEventListener('click', (e) => {\n  let taskComplete = document.getElementById(\"task-form\").checkValidity();\n  if (taskComplete) {\n    e.preventDefault();\n    (0,_tasks_js__WEBPACK_IMPORTED_MODULE_2__.storeTask)();\n    document.getElementById(\"task-form\").reset();\n    taskDialog.close();\n  }\n});\n\n// \"Cancel\" button functionality that deletes all info that was entered, then closes the Task form\n_krappieUI_js__WEBPACK_IMPORTED_MODULE_0__.cancelTask.addEventListener('click', () => {\n  document.getElementById(\"task-form\").reset();\n  taskDialog.close();\n});\n\n// Sidebar \"Add Project\" button functionality that brings up the form to enter Project details\nsidebarProjectBtn.addEventListener('click', () => {\n  projectDialog.showModal();\n});\n\n// \"Confirm\" button functionality that checks that all required project sections were completed by the user, then submits it to the main area and closes the Project form\n_krappieUI_js__WEBPACK_IMPORTED_MODULE_0__.confirmProject.addEventListener('click', (e) => {\n  let projectComplete = document.getElementById(\"project-form\").checkValidity();\n  if (projectComplete) {\n    e.preventDefault();\n    _projects_js__WEBPACK_IMPORTED_MODULE_1__.appState.addProject();\n    document.getElementById(\"project-form\").reset();\n    projectDialog.close();\n  }\n});\n\n// \"Cancel\" button functionality that deletes all info that was entered, then closes the Project form\n_krappieUI_js__WEBPACK_IMPORTED_MODULE_0__.cancelProject.addEventListener('click', () => {\n  document.getElementById(\"project-form\").reset();\n  projectDialog.close();\n});\n\n\n\n//# sourceURL=webpack://krappie-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/krappieUI.js":
/*!**************************!*\
  !*** ./src/krappieUI.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cancelProject: () => (/* binding */ cancelProject),\n/* harmony export */   cancelTask: () => (/* binding */ cancelTask),\n/* harmony export */   confirmProject: () => (/* binding */ confirmProject),\n/* harmony export */   confirmTask: () => (/* binding */ confirmTask),\n/* harmony export */   populateProjects: () => (/* binding */ populateProjects),\n/* harmony export */   projectForm: () => (/* binding */ projectForm),\n/* harmony export */   renderProject: () => (/* binding */ renderProject),\n/* harmony export */   renderTask: () => (/* binding */ renderTask),\n/* harmony export */   taskForm: () => (/* binding */ taskForm)\n/* harmony export */ });\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ \"./src/projects.js\");\n// TODO: Don't forget to create a container element in the DOM for everything to generate under, then return that container element at the bottom of this file\n\n\n\n// Global DOM elements related to adding projects and tasks to the app\nconst projectForm = document.getElementById(\"project-dialog\");\nconst confirmProject = document.getElementById(\"confirmProject\");\nconst cancelProject = document.getElementById(\"cancelProject\");\nconst taskForm = document.getElementById(\"task-dialog\");\nconst confirmTask = document.getElementById(\"confirmTask\");\nconst cancelTask = document.getElementById(\"cancelTask\");\n\n// Generate all project info here using the \"DOM level 1\" technique (see \"Traversing an HTML table with JS & DOM interfaces\" documentation if needed)\n// e.g: bookDisplay() function in the Library project\nfunction renderProject() {\n  for (const project in _projects_js__WEBPACK_IMPORTED_MODULE_0__.appState.myProjects) {\n    // DOM for \"My Projects\" section of the sidebar as well as the main area\n    const projectSidebar = document.querySelector(\".menu-2\");\n    const main = document.querySelector(\"main\");\n\n    // Generate the sidebar button\n    const projectBtn = document.createElement(\"button\");\n    let projectBtnText = document.createTextNode(`${_projects_js__WEBPACK_IMPORTED_MODULE_0__.appState.myProjects[project].projectTitle}`);\n    projectBtn.classList.add(\"project-btn\");\n\n    // Function to remove all currently showing content in main when a Project button is clicked. \n    // Just goes back to adding all projects in the array like before (duplicates) if splice is removed\n    // projectBtn.addEventListener('click', () => {\n    //   main.replaceChildren(projectName);\n    // });\n\n    // Generate \"Project Name\" header to be added to the main area\n    const projectName = document.createElement(\"ul\");\n    let projectNameText = document.createTextNode(`${_projects_js__WEBPACK_IMPORTED_MODULE_0__.appState.myProjects[project].projectTitle}`);\n    projectName.classList.add(\"project-name\");\n\n    projectBtn.appendChild(projectBtnText);\n    projectSidebar.appendChild(projectBtn);\n    projectName.appendChild(projectNameText);\n    main.appendChild(projectName);\n\n    // When here under projectDisplay():\n\n    // This function will only replace the current project showing in main area once. Will not show another project afterwards if you click it's related sidebar button\n    // No matter what button is clicked, all previous <ul> are removed and only the last <ul> shows, even if it's not related to the button clicked.\n    // Keep in mind the <ul> remains when projectDisplay is run, but the project related to it inside the array is deleted due to splice\n\n    // When placed in index.js by itself, the buttons do nothing on click\n\n    // TODO: We need to figure out how to separate this code somehow. projectDisplay() is doing too much as it is\n    const projectButtons = document.querySelectorAll(\".project-btn\");\n\n    projectButtons.forEach(projectBtn => {\n      projectBtn.addEventListener('click', () => { // Took the \"e\" out of the parentheses. Will put it back in if needed later on.\n        // TODO: Code to generate the project related to the button clicked via \"tabbed browsing\" goes here. See example code in comments below.\n        // Goal is to render the page elements of the corresponding button WITHOUT recreating the button again\n\n        // TODO: Debug and step through this function and find out exactly what is happening when previously generated buttons are clicked\n        // NOTE: Do we need to write code that says if the value of the ul is equal to the value of the button, then replace any current content and append the ul of that button\n        main.replaceChildren();\n        main.appendChild(projectName); // currentProject argument gives Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.\n\n        // Previous version that tried to run the code only if the text from the button and the ul matched up\n\n        // const currentProject = document.querySelector(\".project-name\");\n\n        // if (button.textContent === currentProject.textContent) {\n        //   main.replaceChildren(); \n        //   main.appendChild(currentProject);\n        // }\n      });\n    });\n  }\n}\n\n// Function for rendering all Project options to the \"Add to Project\" drop-down menu in the Task form\nfunction populateProjects() {\n  const projectSelect = document.getElementById(\"add-to-project\");\n\n  _projects_js__WEBPACK_IMPORTED_MODULE_0__.appState.myProjects.forEach(project => {\n    const projectOption = document.createElement(\"option\");\n\n    // Uncaught TypeError: Cannot read properties of undefined (reading 'projectTitle')\n    // projectOption.textContent = `${appState.myProjects[project].projectTitle}`;\n\n    // This \"works\" but reads it like it does in console (shows as [Object object] in the drop-down)\n    // projectOption.textContent = project;\n\n    let projectOptionText = document.createTextNode(`${_projects_js__WEBPACK_IMPORTED_MODULE_0__.appState.myProjects[project].projectTitle}`);\n\n    // TODO: Add some type of conditional that adds setAttribute('selected') for the option that is the default \"Today\" project (if else statement)\n    \n    projectOption.appendChild(projectOptionText);\n    projectSelect.appendChild(projectOption);\n  });\n}\n\n// Function for dynamically adding the task to the <main> area\n// May need to completely redo this function. The \"Library project\" DOM level 1 technique might not work for this one (task is an array within an object within another array)\nfunction renderTask() {\n  for (const task in _projects_js__WEBPACK_IMPORTED_MODULE_0__.appState.myProjects) {\n    // Should the actual rendering of the <ul> be handled by index.js? (have this function run in index.js, then append everything to the project <ul> afterwards in index.js)\n    // const taskList = document.createElement(\"ul\");\n    // taskList.classList.add(\"task-info\");\n\n    // Checkbox rendering goes here or under taskName\n    const isChecked = task.checked ? 'done' : '';\n\n    // Sets up the name of the task entered as a list element so the user can have a list of tasks\n    const taskName = document.createElement(\"li\");\n    taskName.setAttribute('data-key', task.id);\n    taskName.classList.add(`todo-item-${isChecked}`);\n\n    // Renders <p> tags for the Date, Priority level and Description box from the \"Add Task\" form (to be used as parents for the text info below)\n    const taskDate = document.createElement(\"p\");\n    const taskPriority = document.createElement(\"p\");\n    const taskDescription = document.createElement(\"p\");\n\n    taskDate.classList.add(\"task-date\");\n    taskPriority.classList.add(\"task-priority\");\n    taskDescription.classList.add(\"task-description\");\n\n    // Text info DOM that takes user input from the \"Add Task\" form and creates text nodes to be attached to the <p> tags above\n    const taskNameInfo = document.createTextNode(`${_projects_js__WEBPACK_IMPORTED_MODULE_0__.appState.myProjects[task].taskTitle}`);\n    const taskDateInfo = document.createTextNode(`${_projects_js__WEBPACK_IMPORTED_MODULE_0__.appState.myProjects[task].dueDate}`);\n    const taskPriorityInfo = document.createTextNode(`${_projects_js__WEBPACK_IMPORTED_MODULE_0__.appState.myProjects[task].priority}`);\n    const taskDescriptionInfo = document.createTextNode(`${_projects_js__WEBPACK_IMPORTED_MODULE_0__.appState.myProjects[task].description}`);\n\n    // Attaches text info via user input to the <p> tags that were created\n    taskName.appendChild(taskNameInfo);\n    taskDate.appendChild(taskDateInfo);\n    taskPriority.appendChild(taskPriorityInfo);\n    taskDescription.appendChild(taskDescriptionInfo);\n\n    // Places the Date, Time, Priority level and Description as children under the Task Name <li>\n    // TODO: Test to see if this looks ok in the UI. Think of a different implementation if it doesn't\n    taskName.appendChild(taskDate);\n    taskName.appendChild(taskPriority);\n    taskName.appendChild(taskDescription);\n\n    // Places the task itself (via it's name) as a child under the Project <ul>\n    // Uncaught ReferenceError: projectName is not defined\n    projectName.appendChild(taskName);\n\n    // TODO: Code for a conditional statement that checks to see if the project the user selected exists before adding the task to it (if else statement)\n  }\n}\n\n// Example of navigation bar button functionality in the Restaurant project that switches pages via tabbed browsing\n\n// const navButtons = document.querySelectorAll('.nav-button');\n\n// navButtons.forEach(button => {\n//   button.addEventListener('click', () => {\n//     let currentButton = document.querySelector('button[aria-current]');\n\n//     switch (button.textContent) {\n//       case 'Menu':\n//         currentButton.removeAttribute('aria-current');\n//         button.setAttribute('aria-current', 'page');\n//         content.replaceChildren();\n//         content.appendChild(menupage());\n//         break;\n\n//       case 'Home':\n//         currentButton.removeAttribute('aria-current');\n//         button.setAttribute('aria-current', 'page');\n//         content.replaceChildren();\n//         content.appendChild(homepage());\n//         break;\n\n//       case 'Contact':\n//         currentButton.removeAttribute('aria-current');\n//         button.setAttribute('aria-current', 'page');\n//         content.replaceChildren();\n//         content.appendChild(contactPage());\n//         break;\n//     }\n//   })\n// })\n\n// Example from Tic Tac Toe game that places player marker in a given cell once clicked, then switches player turn. Use this to figure out what project button was clicked.\n// cells.forEach((cell, index) => {\n//   cell.addEventListener('click', () => {\n//     const row = Math.floor(index / 3);\n//     const col = index % 3;\n//     Gameboard.makeMove(row, col, gameFlow.getCurrentPlayer().marker);\n//     cell.textContent = gameFlow.getCurrentPlayer().marker; \n//     cell.setAttribute(\"disabled\", \"\");\n\n//     // Switches the player's turn on the condition that there is no game winner yet, then displays the current turn on the UI\n//     if (!Gameboard.checkWin()) {\n//       gameFlow.switchTurn();\n//       console.log(`${gameFlow.getCurrentPlayer().name()}'s turn.`); \n//       info.replaceChildren();\n//       info.textContent = `${gameFlow.getCurrentPlayer().name()}'s turn`;\n//     } \n//   });\n// });\n\n\n\n//# sourceURL=webpack://krappie-todo-list/./src/krappieUI.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   appState: () => (/* binding */ appState),\n/* harmony export */   createProject: () => (/* binding */ createProject)\n/* harmony export */ });\n/* harmony import */ var _krappieUI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./krappieUI.js */ \"./src/krappieUI.js\");\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.js */ \"./src/tasks.js\");\n // Change this back to importing each export separately?\n\n\n// Creates \"project\" objects to be added to the \"myProjects\" array\nfunction createProject (projectTitle) {\n  const tasks = []; // Initializes tasks as an empty array\n  // const taskId = createTask.id; // Change this to appState.\n  // const taskCheck = createTask.checked;\n\n  // TODO: This likely needs to find the right project to add the tasks array to? Link this up with the findProject method in the appState below\n  function addTask(taskTitle, dueDate, priority, description) {\n    const newTask = (0,_tasks_js__WEBPACK_IMPORTED_MODULE_1__.createTask)(taskTitle, dueDate, priority, description);\n    tasks.push(newTask);\n  }\n\n  return { projectTitle, tasks, addTask }\n}\n\n// OPTION: Try to refactor this into a factory function in the future? Rename it to appStatus?\nconst appState = {\n  myProjects: [], // List of projects and tasks within those projects\n  defaultProject: createProject(\"Today\"),\n  // OPTION: Add \"Priority Level\" drop-down menu and \"Description\" text box. Need to be rendered as well in UI file.\n  addProject: function () {\n    let projectTitle = document.getElementById(\"project-title\").value; // Potentially add '.trim()' to the end of this line if there's whitespace that needs to be removed\n\n    if (projectTitle) {\n      const newProject = createProject(projectTitle); \n      \n      this.myProjects.push(newProject);\n      // This might not have to be here. Could maybe just run this under the button logic itself.\n      _krappieUI_js__WEBPACK_IMPORTED_MODULE_0__.renderProject(); // Remove the dot notation if changes on line 1 are made\n    }\n  },\n  // TODO: This still might not work. Shows \"(parameter) project: never\". May need to rename \"project\" to something else in the find method.\n  findProject: function (projectTitle) { \n    return this.myProjects.find(project => project.projectTitle === projectTitle); \n  }\n};\n\n\n\n// Old code for storing new \"Project\" objects into a new array via user input. In case of emergency, use this.\n// function storeProject() {\n//   let projectTitle = document.getElementById(\"project-title\").value; // Potentially add '.trim()' to the end of this line if there's whitespace that needs to be removed\n\n//   if (projectTitle) {\n//     const newProject = new Project(projectTitle);\n//     myProjects.push(newProject);\n//     renderProject();\n//   }\n// }\n\n//# sourceURL=webpack://krappie-todo-list/./src/projects.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTask: () => (/* binding */ createTask),\n/* harmony export */   removeTask: () => (/* binding */ removeTask),\n/* harmony export */   storeTask: () => (/* binding */ storeTask),\n/* harmony export */   toggleTaskChecked: () => (/* binding */ toggleTaskChecked),\n/* harmony export */   updateTask: () => (/* binding */ updateTask)\n/* harmony export */ });\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ \"./src/projects.js\");\n/* harmony import */ var _krappieUI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./krappieUI.js */ \"./src/krappieUI.js\");\n\n\n\n// Function for making \"Task\" objects & reporting the \"Task\" added to the project (does NOT add it to the UI or array; there is a separate function for this)\n// OPTION: Rename this function due to misleading name? (task doesn't actually get created, simply has contents of a given task)\nfunction createTask (taskTitle, dueDate, priority, description) {\n  let checked = false; // Checkbox whose default is not checked. Does NOT currently add the \"checkbox\" itself to the task (see HTML file for details). May need to be a method.\n\n  // ID number for each project assigned at \"random?\" used to find the task that the user clicked on to modify or delete. Symbol(\"UID\") could work as well?\n  let id = Date.now().toString(); \n\n  // Alternate way of generating a random id number\n  // let id = 0;\n  // function getUniqueId(): string {\n  //   return id++ + '';\n  // }\n\n  return { taskTitle, dueDate, priority, description, checked, id };\n}\n\n// Deletes a task\nfunction removeTask(taskId) {\n  const taskFilter = tasks.findIndex(task => task.id === taskId);\n  const taskItem = \n    taskFilter != -1\n      ? tasks.splice(todoFilter, 1)\n      : \"ERROR: Todo not found\";\n  \n  // TODO: Might not need this. Delete if so. Might be able to just return ternary operator with no addt'l variable.\n  return taskItem; \n}\n\n// Updates information on an existing task\nfunction updateTask(taskId, updates) {\n  const taskFind = tasks.find(task => task.id === taskId);\n  if (taskFind) {\n    Object.assign(taskFind, updates); // Change target of \"tasks\" back to \"task\"?\n  }\n}\n\n// Toggles \"complete\" status of a given task\nfunction toggleTaskChecked(taskId) {\n  const toggleStatus = tasks.find(task => task.id === taskId);\n  if (toggleStatus) {\n    toggleStatus.checked = !toggleStatus.checked;\n  }\n}\n\n// Stores the \"task\" object to the projects array, then runs the task rendering function to display it on the UI\n// Add \"projectIndex\" back in as a function parameter if needed\nfunction storeTask() {\n  let taskTitle = document.getElementById(\"task-title\").value; // Potentially add '.trim()' to the end of this line if there's whitespace that needs to be removed\n  let dueDate = document.getElementById(\"due-date\").value;\n  let priority = document.getElementById(\"priority\").value;\n  let description = document.getElementById(\"description\").value;\n\n  if (taskTitle && dueDate && priority) { // Do we need !isNaN(dueDate) instead?\n    // TODO: Refactor \"addTask\" to get it to work.\n\n    // Uncaught TypeError: Cannot read properties of undefined (reading 'addTask'). Likely due to addTask function not being part of myProjects property (it's just an array).\n    // appState.myProjects[projectIndex].addTask(taskTitle, dueDate, priority, description); \n\n    // Uncaught TypeError: createProject.addTask is not a function\n    // createProject.addTask(taskTitle, dueDate, priority, description); \n\n    // My attempt at combining the previous two functions to get the task to be added to the tasks array within a project\n    // Uncaught TypeError: Cannot read properties of undefined (reading 'createProject')\n    // appState.myProjects[0].createProject.addTask(taskTitle, dueDate, priority, description);\n    \n    _krappieUI_js__WEBPACK_IMPORTED_MODULE_1__.renderTask();\n  }\n}\n\n// Code to test functions\n\n// let task1 = createTask (\n//   \"Buy Groceries\", \n//   \"2024-05-26\", \n//   \"Important\", \n//   \"Buy milk, eggs, bananas and kiwi for breakfast and smoothies\"\n// );\n\n// let task2 = createTask (\n//   \"Finish To-Do List project\", \n//   \"2024-06-01\", \n//   \"Urgent\", \n//   \"Finish the To-Do List project assignment in TOP\"\n// );\n\n// appState.defaultProject.addTask(\n//   task1.todoTitle,\n//   task1.dueDate,\n//   task1.priority,\n//   task1.description\n// );\n\n// appState.defaultProject.addTask(\n//   task2.todoTitle,\n//   task2.dueDate,\n//   task2.priority,\n//   task2.description\n// );\n\n// let taskIdNumber = appState.defaultProject.tasks[0].id;\n// let taskIdNumber2 = appState.defaultProject.tasks[1].id;\n// console.log(project1);\n\n// Just having the properties by themselves threw a Ref Error of \"property not defined\" for each one\n// May still need the values to be empty strings or just have no values at all in the future when UI is implemented despite Ref error\n\n// const updates = {\n//   taskTitle: \"Buy More Groceries\",\n//   dueDate: \"2024-06-01\",\n//   priority: \"Urgent\",\n//   description: \"Costco run\"\n// };\n\n// Keep in mind these next tests might not work anymore due to separating the task functions from createProject for module purposes.\n\n// appState.defaultProject.updateTask(taskIdNumber, updates);\n\n// console.log(project1);\n// console.log(appState.defaultProject.tasks);\n\n// appState.defaultProject.toggleTaskChecked(todoIdNumber2);\n// console.log(appState.defaultProject.tasks);\n\n// appState.defaultProject.removeTask(todoIdNumber);\n// console.log(appState.defaultProject.tasks);\n\n// As the second index, currently this adds the entire object to \"projectTitle\", then leaves the other properties as undefined\n\n// project2.addTodo(task2);\n// console.log(project2);\n\n\n\n// Old code for another solution I came up with on my own that updated list of todos using map (Object.assign is cleaner). Keep it (in case of emergency, break glass)\n//   function updateTodo(todoId, updates) {\n//     const revisedTodos = todos.map(todo => {\n//       if (todo.id === todoId) {\n//         return { ...todo, ...updates }\n//       }\n//     });\n    \n//     return revisedTodos;\n//   }\n\n//# sourceURL=webpack://krappie-todo-list/./src/tasks.js?");

/***/ }),

/***/ "./src/img/plus.png":
/*!**************************!*\
  !*** ./src/img/plus.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e9799d5c99d2723ec5eb.png\";\n\n//# sourceURL=webpack://krappie-todo-list/./src/img/plus.png?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;