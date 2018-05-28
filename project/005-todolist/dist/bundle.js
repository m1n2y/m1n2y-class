/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/api/BasicModel.js":
/*!******************************!*\
  !*** ./js/api/BasicModel.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function BasicModel(list) {\n    this.list = list || [];\n}\n\nBasicModel.prototype.$$add = function (row) {\n    this.list.push(row);\n}\n\nBasicModel.prototype.$$remove = function (id) {\n    var index = this.$$getIndexByID(id);\n    this.list.splice(index, 1);\n}\n\nBasicModel.prototype.$$update = function (row) {\n    var index = this.$$getIndexByID(row.id);\n    this.list[index] = Object.assign({}, this.list[index], row);\n}\n\nBasicModel.prototype.$$read = function () {\n    return this.list\n}\n\nBasicModel.prototype.$$find = function (id) {\n    this.list.find(function (item) {\n        return item.id == id;\n    });\n}\n\nBasicModel.prototype.$$getIndexByID = function (id) {\n    return this.list.findIndex(function (item) {\n        return item.id == id;\n    });\n}\n\nmodule.exports = BasicModel;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9hcGkvQmFzaWNNb2RlbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2FwaS9CYXNpY01vZGVsLmpzPzM2MjYiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gQmFzaWNNb2RlbChsaXN0KSB7XG4gICAgdGhpcy5saXN0ID0gbGlzdCB8fCBbXTtcbn1cblxuQmFzaWNNb2RlbC5wcm90b3R5cGUuJCRhZGQgPSBmdW5jdGlvbiAocm93KSB7XG4gICAgdGhpcy5saXN0LnB1c2gocm93KTtcbn1cblxuQmFzaWNNb2RlbC5wcm90b3R5cGUuJCRyZW1vdmUgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLiQkZ2V0SW5kZXhCeUlEKGlkKTtcbiAgICB0aGlzLmxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbn1cblxuQmFzaWNNb2RlbC5wcm90b3R5cGUuJCR1cGRhdGUgPSBmdW5jdGlvbiAocm93KSB7XG4gICAgdmFyIGluZGV4ID0gdGhpcy4kJGdldEluZGV4QnlJRChyb3cuaWQpO1xuICAgIHRoaXMubGlzdFtpbmRleF0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmxpc3RbaW5kZXhdLCByb3cpO1xufVxuXG5CYXNpY01vZGVsLnByb3RvdHlwZS4kJHJlYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMubGlzdFxufVxuXG5CYXNpY01vZGVsLnByb3RvdHlwZS4kJGZpbmQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICB0aGlzLmxpc3QuZmluZChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbS5pZCA9PSBpZDtcbiAgICB9KTtcbn1cblxuQmFzaWNNb2RlbC5wcm90b3R5cGUuJCRnZXRJbmRleEJ5SUQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5saXN0LmZpbmRJbmRleChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbS5pZCA9PSBpZDtcbiAgICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCYXNpY01vZGVsOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/api/BasicModel.js\n");

/***/ }),

/***/ "./js/api/ToDo.js":
/*!************************!*\
  !*** ./js/api/ToDo.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var BasicModel = __webpack_require__(/*! ./BasicModel */ \"./js/api/BasicModel.js\");\n\nfunction ToDo(list, max_id) {\n    BasicModel.call(this, list);\n    this.max_id = max_id || 1;\n}\n\nToDo.prototype = Object.create(BasicModel.prototype);\nToDo.constructor = ToDo;\n\nToDo.prototype.update = function (todo) {\n    if (!(todo.title && todo.title != ''))\n        return;\n    if (!todo.tag)\n        todo.tag = 1;\n    \n    if (todo.id) {\n        this.$$update(todo);\n    } else {\n        todo.id = ++this.max_id;\n        this.$$add(todo);\n    }\n}\n\nToDo.prototype.remove = function (id) {\n    if (this.$$getIndexByID(id) != -1)\n        this.$$remove(id);\n}\n\nToDo.prototype.query = function (id) {\n    if (id)\n        return this.$$find(id);\n    return this.$$read();\n}\n\nToDo.prototype.queryByTagID = function (tagID) {\n    return this.list.filter(function (row) {\n        row.tag_id = tagID;\n    });\n}\n\nmodule.exports = ToDo;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9hcGkvVG9Eby5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2FwaS9Ub0RvLmpzP2NiZjYiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIEJhc2ljTW9kZWwgPSByZXF1aXJlKCcuL0Jhc2ljTW9kZWwnKTtcblxuZnVuY3Rpb24gVG9EbyhsaXN0LCBtYXhfaWQpIHtcbiAgICBCYXNpY01vZGVsLmNhbGwodGhpcywgbGlzdCk7XG4gICAgdGhpcy5tYXhfaWQgPSBtYXhfaWQgfHwgMTtcbn1cblxuVG9Eby5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEJhc2ljTW9kZWwucHJvdG90eXBlKTtcblRvRG8uY29uc3RydWN0b3IgPSBUb0RvO1xuXG5Ub0RvLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAodG9kbykge1xuICAgIGlmICghKHRvZG8udGl0bGUgJiYgdG9kby50aXRsZSAhPSAnJykpXG4gICAgICAgIHJldHVybjtcbiAgICBpZiAoIXRvZG8udGFnKVxuICAgICAgICB0b2RvLnRhZyA9IDE7XG4gICAgXG4gICAgaWYgKHRvZG8uaWQpIHtcbiAgICAgICAgdGhpcy4kJHVwZGF0ZSh0b2RvKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0b2RvLmlkID0gKyt0aGlzLm1heF9pZDtcbiAgICAgICAgdGhpcy4kJGFkZCh0b2RvKTtcbiAgICB9XG59XG5cblRvRG8ucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChpZCkge1xuICAgIGlmICh0aGlzLiQkZ2V0SW5kZXhCeUlEKGlkKSAhPSAtMSlcbiAgICAgICAgdGhpcy4kJHJlbW92ZShpZCk7XG59XG5cblRvRG8ucHJvdG90eXBlLnF1ZXJ5ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgaWYgKGlkKVxuICAgICAgICByZXR1cm4gdGhpcy4kJGZpbmQoaWQpO1xuICAgIHJldHVybiB0aGlzLiQkcmVhZCgpO1xufVxuXG5Ub0RvLnByb3RvdHlwZS5xdWVyeUJ5VGFnSUQgPSBmdW5jdGlvbiAodGFnSUQpIHtcbiAgICByZXR1cm4gdGhpcy5saXN0LmZpbHRlcihmdW5jdGlvbiAocm93KSB7XG4gICAgICAgIHJvdy50YWdfaWQgPSB0YWdJRDtcbiAgICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUb0RvOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/api/ToDo.js\n");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var TodoUI = __webpack_require__(/*! ./ui/ToDoUI */ \"./js/ui/ToDoUI.js\");\n\nvar todo_ui = new TodoUI({\n    form: '.todo-form',\n    list: '.todo-list',\n});\ntodo_ui.init();\n\n// var tag_ui = new TagUI({\n//     form: 'tag',\n// });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2luZGV4LmpzP2VlMWMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFRvZG9VSSA9IHJlcXVpcmUoJy4vdWkvVG9Eb1VJJyk7XG5cbnZhciB0b2RvX3VpID0gbmV3IFRvZG9VSSh7XG4gICAgZm9ybTogJy50b2RvLWZvcm0nLFxuICAgIGxpc3Q6ICcudG9kby1saXN0Jyxcbn0pO1xudG9kb191aS5pbml0KCk7XG5cbi8vIHZhciB0YWdfdWkgPSBuZXcgVGFnVUkoe1xuLy8gICAgIGZvcm06ICd0YWcnLFxuLy8gfSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/index.js\n");

/***/ }),

/***/ "./js/ui/Form.js":
/*!***********************!*\
  !*** ./js/ui/Form.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Form(form) {\n    this.form = form;\n}\n\nForm.prototype.$$getFormData = function () {\n    var data = {};\n    var inputs = this.form.querySelectorAll('[name]');\n    inputs.forEach(function (item) {\n        switch (item.nodeName) {\n            case 'INPUT':\n                switch (item.type) {\n                    case 'hidden':\n                    case 'text':\n                        data[item.name] = item.value;\n                        break;\n                    case 'checkbox':\n                        data[item.name] = item.checked;\n                        break;\n                }\n            case 'SELECT':\n                data[item.name] = item.value;\n                break;\n        }\n    });\n    return data;\n}\n\nForm.prototype.$$setFormData = function (item) {\n    for (var key in item) {\n        var input = this.form.querySelector(`[name=${key}]`);\n        switch (input.nodeName) {\n            case 'INPUT':\n                switch (input.type) {\n                    case 'hidden':\n                    case 'text':\n                        input.value = item[key];\n                        break;\n                    case 'checkbox':\n                        input.checked = item[key];\n                        break;\n                }\n            case 'SELECT':\n                input.value = item[key];\n                break;\n        }\n    }\n}\n\nForm.prototype.$$clearFormData = function () {\n    var inputs = this.form.querySelectorAll('[name]');\n    inputs.forEach(function (item) {\n        switch (item.nodeName) {\n            case 'INPUT':\n                switch (item.type) {\n                    case 'hidden':\n                    case 'text':\n                        item.value = '';\n                        break;\n                    case 'checkbox':\n                        item.checked = false;\n                        break;\n                }\n            case 'SELECT':\n                item.value = '';\n                break;\n        }\n    });\n}\n\nmodule.exports = Form;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy91aS9Gb3JtLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvdWkvRm9ybS5qcz9jZmM0Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIEZvcm0oZm9ybSkge1xuICAgIHRoaXMuZm9ybSA9IGZvcm07XG59XG5cbkZvcm0ucHJvdG90eXBlLiQkZ2V0Rm9ybURhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRhdGEgPSB7fTtcbiAgICB2YXIgaW5wdXRzID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lXScpO1xuICAgIGlucHV0cy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHN3aXRjaCAoaXRlbS5ub2RlTmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnSU5QVVQnOlxuICAgICAgICAgICAgICAgIHN3aXRjaCAoaXRlbS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2hpZGRlbic6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtpdGVtLm5hbWVdID0gaXRlbS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2l0ZW0ubmFtZV0gPSBpdGVtLmNoZWNrZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdTRUxFQ1QnOlxuICAgICAgICAgICAgICAgIGRhdGFbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGF0YTtcbn1cblxuRm9ybS5wcm90b3R5cGUuJCRzZXRGb3JtRGF0YSA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGl0ZW0pIHtcbiAgICAgICAgdmFyIGlucHV0ID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoYFtuYW1lPSR7a2V5fV1gKTtcbiAgICAgICAgc3dpdGNoIChpbnB1dC5ub2RlTmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnSU5QVVQnOlxuICAgICAgICAgICAgICAgIHN3aXRjaCAoaW5wdXQudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdoaWRkZW4nOlxuICAgICAgICAgICAgICAgICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gaXRlbVtrZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LmNoZWNrZWQgPSBpdGVtW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdTRUxFQ1QnOlxuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gaXRlbVtrZXldO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5Gb3JtLnByb3RvdHlwZS4kJGNsZWFyRm9ybURhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGlucHV0cyA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZV0nKTtcbiAgICBpbnB1dHMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBzd2l0Y2ggKGl0ZW0ubm9kZU5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ0lOUFVUJzpcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGl0ZW0udHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdoaWRkZW4nOlxuICAgICAgICAgICAgICAgICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ1NFTEVDVCc6XG4gICAgICAgICAgICAgICAgaXRlbS52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRm9ybTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/ui/Form.js\n");

/***/ }),

/***/ "./js/ui/ToDoUI.js":
/*!*************************!*\
  !*** ./js/ui/ToDoUI.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Form = __webpack_require__(/*! ./Form */ \"./js/ui/Form.js\");\nvar Todo = __webpack_require__(/*! ../api/ToDo */ \"./js/api/ToDo.js\");\n\nfunction TodoUI(config) {\n\n    var defaultConfig = {\n        form: null,\n        list: null,\n    };\n    config = Object.assign({}, defaultConfig, config);\n\n    if (typeof config.form === 'string')\n        config.form = document.querySelector(config.form);\n    if (typeof config.list === 'string')\n        config.list = document.querySelector(config.list);\n\n    Form.call(this, config.form);\n    this.form = config.form;\n    this.list = config.list;\n\n    this.data = [\n        {\n            id: 1,\n            title: 'eat',\n            tag: 1,\n            completed: true,\n        },\n        {\n            id: 2,\n            title: 'sleep',\n            tag: 1,\n            completed: false,\n        },\n        {\n            id: 3,\n            title: 'sports',\n            tag: 1,\n            completed: false,\n        },\n    ];\n    this._todo = new Todo(this.data, 3);\n\n}\n\nTodoUI.prototype = Object.create(Form.prototype);\nTodoUI.constructor = TodoUI;\n\nTodoUI.prototype.init = function() {\n    this.render();\n    this.bindEvents();\n}\n\nTodoUI.prototype.render = function () {\n    this.list.innerHTML = '';\n    var _this = this;\n    this.data.forEach(function (row) {\n        var div = document.createElement('div');\n        div.classList.add('row', 'item', 'todo-item');\n        div.dataset.id = row.id;\n        div.dataset.tag = row.tag;\n        div.innerHTML = `\n            <span class=\"col title\">${row.title}</span>\n            <span class=\"col tool\">\n                <span data-action=\"update\">update</span>\n                <span data-action=\"remove\">delete</span>\n            </span>\n        `;\n        _this.list.appendChild(div);\n    });\n}\n\nTodoUI.prototype.bindEvents = function() {\n\n    var _this = this;\n\n    this.form.addEventListener('submit', function (e) {\n        e.preventDefault();\n        var row = _this.$$getFormData();\n        _this._todo.update(row);\n        _this.render();\n        //_this.$$clearFormData();\n        this.reset(); //keep the default select value\n    });\n\n    this.list.addEventListener('click', function (e) {\n        var target = e.target;\n        if (target.dataset.action == 'update') {\n            var todo_item = target.closest('.todo-item');\n            var row = {\n                id: todo_item.dataset.id,\n                title: todo_item.querySelector('.title').innerHTML,\n                tag: todo_item.dataset.tag,\n            };\n            _this.$$setFormData(row);\n        }\n        if (target.dataset.action == 'remove') {\n            var todo_item = target.closest('.todo-item');\n            var id = todo_item.dataset.id;\n            _this._todo.remove(id);\n            _this.render();\n        }\n    });\n}\n\nmodule.exports = TodoUI;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy91aS9Ub0RvVUkuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy91aS9Ub0RvVUkuanM/NWQzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgRm9ybSA9IHJlcXVpcmUoJy4vRm9ybScpO1xudmFyIFRvZG8gPSByZXF1aXJlKCcuLi9hcGkvVG9EbycpO1xuXG5mdW5jdGlvbiBUb2RvVUkoY29uZmlnKSB7XG5cbiAgICB2YXIgZGVmYXVsdENvbmZpZyA9IHtcbiAgICAgICAgZm9ybTogbnVsbCxcbiAgICAgICAgbGlzdDogbnVsbCxcbiAgICB9O1xuICAgIGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRDb25maWcsIGNvbmZpZyk7XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy5mb3JtID09PSAnc3RyaW5nJylcbiAgICAgICAgY29uZmlnLmZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbmZpZy5mb3JtKTtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5saXN0ID09PSAnc3RyaW5nJylcbiAgICAgICAgY29uZmlnLmxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbmZpZy5saXN0KTtcblxuICAgIEZvcm0uY2FsbCh0aGlzLCBjb25maWcuZm9ybSk7XG4gICAgdGhpcy5mb3JtID0gY29uZmlnLmZvcm07XG4gICAgdGhpcy5saXN0ID0gY29uZmlnLmxpc3Q7XG5cbiAgICB0aGlzLmRhdGEgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgdGl0bGU6ICdlYXQnLFxuICAgICAgICAgICAgdGFnOiAxLFxuICAgICAgICAgICAgY29tcGxldGVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgIHRpdGxlOiAnc2xlZXAnLFxuICAgICAgICAgICAgdGFnOiAxLFxuICAgICAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICB0aXRsZTogJ3Nwb3J0cycsXG4gICAgICAgICAgICB0YWc6IDEsXG4gICAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgIF07XG4gICAgdGhpcy5fdG9kbyA9IG5ldyBUb2RvKHRoaXMuZGF0YSwgMyk7XG5cbn1cblxuVG9kb1VJLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRm9ybS5wcm90b3R5cGUpO1xuVG9kb1VJLmNvbnN0cnVjdG9yID0gVG9kb1VJO1xuXG5Ub2RvVUkucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMuYmluZEV2ZW50cygpO1xufVxuXG5Ub2RvVUkucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmxpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB0aGlzLmRhdGEuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3JvdycsICdpdGVtJywgJ3RvZG8taXRlbScpO1xuICAgICAgICBkaXYuZGF0YXNldC5pZCA9IHJvdy5pZDtcbiAgICAgICAgZGl2LmRhdGFzZXQudGFnID0gcm93LnRhZztcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29sIHRpdGxlXCI+JHtyb3cudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb2wgdG9vbFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtYWN0aW9uPVwidXBkYXRlXCI+dXBkYXRlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtYWN0aW9uPVwicmVtb3ZlXCI+ZGVsZXRlPC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICBgO1xuICAgICAgICBfdGhpcy5saXN0LmFwcGVuZENoaWxkKGRpdik7XG4gICAgfSk7XG59XG5cblRvZG9VSS5wcm90b3R5cGUuYmluZEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciByb3cgPSBfdGhpcy4kJGdldEZvcm1EYXRhKCk7XG4gICAgICAgIF90aGlzLl90b2RvLnVwZGF0ZShyb3cpO1xuICAgICAgICBfdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgLy9fdGhpcy4kJGNsZWFyRm9ybURhdGEoKTtcbiAgICAgICAgdGhpcy5yZXNldCgpOyAvL2tlZXAgdGhlIGRlZmF1bHQgc2VsZWN0IHZhbHVlXG4gICAgfSk7XG5cbiAgICB0aGlzLmxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgIGlmICh0YXJnZXQuZGF0YXNldC5hY3Rpb24gPT0gJ3VwZGF0ZScpIHtcbiAgICAgICAgICAgIHZhciB0b2RvX2l0ZW0gPSB0YXJnZXQuY2xvc2VzdCgnLnRvZG8taXRlbScpO1xuICAgICAgICAgICAgdmFyIHJvdyA9IHtcbiAgICAgICAgICAgICAgICBpZDogdG9kb19pdGVtLmRhdGFzZXQuaWQsXG4gICAgICAgICAgICAgICAgdGl0bGU6IHRvZG9faXRlbS5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKS5pbm5lckhUTUwsXG4gICAgICAgICAgICAgICAgdGFnOiB0b2RvX2l0ZW0uZGF0YXNldC50YWcsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX3RoaXMuJCRzZXRGb3JtRGF0YShyb3cpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0YXJnZXQuZGF0YXNldC5hY3Rpb24gPT0gJ3JlbW92ZScpIHtcbiAgICAgICAgICAgIHZhciB0b2RvX2l0ZW0gPSB0YXJnZXQuY2xvc2VzdCgnLnRvZG8taXRlbScpO1xuICAgICAgICAgICAgdmFyIGlkID0gdG9kb19pdGVtLmRhdGFzZXQuaWQ7XG4gICAgICAgICAgICBfdGhpcy5fdG9kby5yZW1vdmUoaWQpO1xuICAgICAgICAgICAgX3RoaXMucmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUb2RvVUk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/ui/ToDoUI.js\n");

/***/ })

/******/ });