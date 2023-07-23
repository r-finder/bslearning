/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/views/dataPage.pug":
/*!********************************!*\
  !*** ./src/views/dataPage.pug ***!
  \********************************/
/***/ ((module) => {

function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (data) {
      pug_mixins["tableHead"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cthead\u003E ";
// iterate data 
;(function(){
  var $$obj = data ;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var d = $$obj[pug_index0];
pug_html = pug_html + "\u003Cth\u003E" + (pug_escape(null == (pug_interp = d) ? "" : pug_interp)) + "\u003C\u002Fth\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var d = $$obj[pug_index0];
pug_html = pug_html + "\u003Cth\u003E" + (pug_escape(null == (pug_interp = d) ? "" : pug_interp)) + "\u003C\u002Fth\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fthead\u003E";
};
pug_mixins["tableRow"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ctr\u003E ";
// iterate data 
;(function(){
  var $$obj = data ;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var d = $$obj[pug_index1];
pug_html = pug_html + "\u003Ctd\u003E\u003Cdiv class=\"dataTable_cell--innerDiv\"\u003E" + (pug_escape(null == (pug_interp = d) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Ftd\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var d = $$obj[pug_index1];
pug_html = pug_html + "\u003Ctd\u003E\u003Cdiv class=\"dataTable_cell--innerDiv\"\u003E" + (pug_escape(null == (pug_interp = d) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Ftd\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftr\u003E";
};
pug_mixins["dataTable"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ctable class=\"dataTable\"\u003E";
pug_mixins["tableHead"](data.headers);
pug_html = pug_html + "\u003Ctbody\u003E";
// iterate data.rows
;(function(){
  var $$obj = data.rows;
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var row = $$obj[pug_index2];
pug_mixins["tableRow"].call({
block: function(){
pug_html = pug_html + " ";
}
}, row);
      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var row = $$obj[pug_index2];
pug_mixins["tableRow"].call({
block: function(){
pug_html = pug_html + " ";
}
}, row);
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftbody\u003E\u003C\u002Ftable\u003E";
};
pug_mixins["dataTable"](data);
    }.call(this, "data" in locals_for_with ?
        locals_for_with.data :
        typeof data !== 'undefined' ? data : undefined));
    ;;return pug_html;};module.exports=template;

/***/ }),

/***/ "./src/views/ViewPage.js":
/*!*******************************!*\
  !*** ./src/views/ViewPage.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dataPage_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataPage.pug */ "./src/views/dataPage.pug");
// const tmpl = require('./dataPage.pug');



class ViewPage {
  static render = (data) => {
    const dtElement = document.querySelector('.dataTable');
    dtElement.innerHTML = _dataPage_pug__WEBPACK_IMPORTED_MODULE_0__({data: data});
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewPage);


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
/******/ 			// no module.id needed
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************!*\
  !*** ./src/views/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ViewPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewPage.js */ "./src/views/ViewPage.js");
//require('./dataPage.js');



//import Bullshit from './bullshit.js';

class App {
    static init() {

    }

    static run() {

    }

    // static getData = () => {
    //     const bs = new Bullshit();
    //
    //     let result = {
    //       headers: ['x1', 'x2', 'x3', 'x4', 'x5', 'x6', 'x7', 'x8', 'x9', 'x10'],
    //       rows: []
    //     };
    //
    //     for (let i=0; i<100; i++) {
    //       let row = bs.generateDataRow([
    //         {type:'int', min:0, max:1000},
    //         {type:'date', daysBack: 1000},
    //         {type:'bool'},
    //         {type:'name', gender: 'male'},
    //         {type:'name', gender: 'female'},
    //         {type:'date', daysBack: 100},
    //         {type:'name'},
    //         {type:'xxx'},
    //         {type:'xxx'},
    //         {type:'xxx'} ])
    //       result.rows.push(row);
    //     }
    //
    //     return result;
    // }

    static updatePage = () => {
      const url = 'http://localhost:3000/getdata';

      fetch(url, {
        method: 'GET',
        //mode: 'no-cors',
      }).then((response) => {
        return response.json();
      }).then(response => {
        // if (!response.ok) {
        //   console.log(response);
        //   throw new Error('Network response was not ok');
        // }

        const data = response.json();

        console.log('\n#### RES: ', {response, data});

        _ViewPage_js__WEBPACK_IMPORTED_MODULE_0__["default"].render(data); //TODO

      }).catch(error => {
        console.error('Unable to fetch data:', error);
      });


    }
}

App.init();
App.run();

window.App = App;

})();

/******/ })()
;
//# sourceMappingURL=index.1.fcc8ed7c.js.map