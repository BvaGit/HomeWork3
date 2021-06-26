/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/*!******************************!*\
  !*** ./src/script/script.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");


const file = document.querySelector("#file");
const title = document.querySelector("#title");
const descr = document.querySelector("#descr");
const btnOk = document.querySelector("#btnOk");
const cards = document.querySelector('.cards');

const url = "http://localhost:3000/api/";


function requstPOST(url, data){
     return (
            
        fetch(url, {
            method: "POST",
            headers: {
                'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                'Content-Type': 'multipart/form-data'
            },
            body: JSON.stringify(data)
        })
        
    );
}

function requestGET(url){
    return(
        fetch(url)
    )
}

function render(arr){
    arr.map((item) => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <div class="card__img">
        <img src="" alt="">
        </div>
        <h2 class="card__title">${item.title}</h2>
        <div class="card__line"></div>
        <p class="card__descr">${item.descript}</p>
        <p class="card__date">${item.dateauth}</p>
        `
        cards.append(div)
    })
    

}

function addData(){
    const objDataInput = {
        title: title.value,
        img: file.value,
        descript: descr.value,
        dateauth: "2021-07-07"
    }

    requstPOST(url + "add", objDataInput)
    .then((data) => data.json())
    .then(data => console.log(data));
}

requestGET(url + "get")
.then(data => data.json())
.then(data => render(data))


btnOk.addEventListener("click", addData);



})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map