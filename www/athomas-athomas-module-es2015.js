(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["athomas-athomas-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-cs178/athomas/athomas.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/course-list/course-intro-cs178/athomas/athomas.page.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list/course-intro-cs178\">\r\n          返回CS 178列表\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list\">\r\n          返回课程列表\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"\">\r\n          返回首页\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <body class=\"user-select\">\r\n    <style type=\"text/css\">\r\n      /* not available for firefox & IE explorer */\r\n      #box {\r\n          width: 100%;\r\n          height: 88%;\r\n          overflow-x: hidden;\r\n          overflow-y: scroll;\r\n          line-height: 30px;\r\n          text-align: center;\r\n      }\r\n      #box::-webkit-scrollbar {\r\n          display: none;\r\n          visibility: hidden;\r\n      }\r\n    </style>\r\n    <div id=\"box\" class=\"panel-body\">\r\n      <div style=\"border: 1px  #000000; width: 98%; margin: 0 auto;\">\r\n        <span>\r\n          <article class=\"article1\">\r\n            <header>\r\n                <h2>\r\n                  <a style=\"color:#5FBDCE; text-decoration: none;\">\r\n                    CS 178 Machine Learning and Data-Mining - Ihler, Alexander Thomas\r\n                  </a>\r\n                </h2>\r\n            </header>\r\n            <br>Professor: Ihler, Alexander Thomas\r\n            <br>\r\n            <br>难易程度：★★★\r\n            <br>\r\n            <br>TA：NA\r\n            <br>\r\n            <br>Discussion: 不强制\r\n            <br>\r\n            <br>Piazza : 有\r\n            <br>\r\n            <br>Textbook: NA\r\n            <br>\r\n            <br>Grading Criteria:\r\n            <br>\r\n            <br>1.homework25%，hw应该是每两周due一次，难度中等偏上。要写码和算术画图。但是是对前一段知识点一个很好的复习。可以drop掉一个最低分。\r\n            <br>\r\n            <br>2.project15%，在final之前due，要求三个人一组写一些models出来。难度不大同时给分也不错，最后不要求交码只需要交report， 只要report好好写就好啦。\r\n            <br>\r\n            <br>3.midterm 25%，midterm有较难的题也有简单题，难度中等。\r\n            <br>\r\n            <br>4. final exam 35%，final相当简单了，把past exam完成同时理解，final基本没问题。\r\n            <br>\r\n            <br>Comments:\r\n            <br>\r\n            <br>教授：这个教授本身能力应该是很强的，可是他上课有一个问题就是，几乎听不懂，不知道在说什么。其实也是能理解的，每一个model他都要涉及到所以讲的很快。在一开始听不懂是很正常的，学有余力的同学可以去网站上看教授自己的视频或者YouTube学。就算是真的不是很理解也没关系，考试的内容和上课基本没关系。但是discussion还是毕竟重要的，ta会讲的比较详细，同时在考试前会带着大家过一遍卷子。\r\n            <br>\r\n            <br>课程：课程真的只能对machine learning models的知识学个皮毛，但是也毕竟只是一节introduction的课。如果只是想考个好成绩，在考试前用心学past exam就好。如果真的想学好这节课，还是要借助一些YouTube的视频或者是真的动手去做一些models才行。\r\n        </article>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs178/athomas/athomas-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs178/athomas/athomas-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: AthomasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AthomasPageRoutingModule", function() { return AthomasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _athomas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./athomas.page */ "./src/app/tab1/course-list/course-intro-cs178/athomas/athomas.page.ts");




const routes = [
    {
        path: '',
        component: _athomas_page__WEBPACK_IMPORTED_MODULE_3__["AthomasPage"]
    }
];
let AthomasPageRoutingModule = class AthomasPageRoutingModule {
};
AthomasPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AthomasPageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs178/athomas/athomas.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs178/athomas/athomas.module.ts ***!
  \*******************************************************************************/
/*! exports provided: AthomasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AthomasPageModule", function() { return AthomasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _athomas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./athomas-routing.module */ "./src/app/tab1/course-list/course-intro-cs178/athomas/athomas-routing.module.ts");
/* harmony import */ var _athomas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./athomas.page */ "./src/app/tab1/course-list/course-intro-cs178/athomas/athomas.page.ts");







let AthomasPageModule = class AthomasPageModule {
};
AthomasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _athomas_routing_module__WEBPACK_IMPORTED_MODULE_5__["AthomasPageRoutingModule"]
        ],
        declarations: [_athomas_page__WEBPACK_IMPORTED_MODULE_6__["AthomasPage"]]
    })
], AthomasPageModule);



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs178/athomas/athomas.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs178/athomas/athomas.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\r\n  max-height: 35vh;\r\n  overflow: hidden;\r\n}\r\n\r\n.cucs-logo{\r\n  background: url('logo.png') no-repeat;\r\n  float: center;\r\n  vertical-align: bottom;\r\n  width: 100%;\r\n  height: 82px;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  color:rgb(0, 0, 0); \r\n  text-decoration: none;\r\n  box-shadow: 1px 2px 3px #ddd;\r\n  background: #fff;\r\n}\r\n\r\narticle {\r\n  text-align: left;\r\n  background: #fff;\r\n  text-indent: 2em;\r\n  margin-left: 1em;\r\n  margin-right: 1em;\r\n}\r\n\r\nion-button {\r\n  border-bottom: thin solid #5FBDCE;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQ0FBZ0Q7RUFDaEQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFFckIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC90YWIxL2NvdXJzZS1saXN0L2NvdXJzZS1pbnRyby1jczE3OC9hdGhvbWFzL2F0aG9tYXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmN1Y3MtbG9nb3tcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL2xvZ28ucG5nXCIpIG5vLXJlcGVhdDtcclxuICBmbG9hdDogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA4MnB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOnJnYigwLCAwLCAwKTsgXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDJweCAzcHggI2RkZDtcclxuICBib3gtc2hhZG93OiAxcHggMnB4IDNweCAjZGRkO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcblxyXG5hcnRpY2xlIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgdGV4dC1pbmRlbnQ6IDJlbTtcclxuICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gIG1hcmdpbi1yaWdodDogMWVtO1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkICM1RkJEQ0U7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs178/athomas/athomas.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs178/athomas/athomas.page.ts ***!
  \*****************************************************************************/
/*! exports provided: AthomasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AthomasPage", function() { return AthomasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AthomasPage = class AthomasPage {
    constructor() { }
    ngOnInit() {
    }
};
AthomasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-athomas',
        template: __webpack_require__(/*! raw-loader!./athomas.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-cs178/athomas/athomas.page.html"),
        styles: [__webpack_require__(/*! ./athomas.page.scss */ "./src/app/tab1/course-list/course-intro-cs178/athomas/athomas.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AthomasPage);



/***/ })

}]);
//# sourceMappingURL=athomas-athomas-module-es2015.js.map