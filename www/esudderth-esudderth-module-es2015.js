(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["esudderth-esudderth-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-cs178/esudderth/esudderth.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/course-list/course-intro-cs178/esudderth/esudderth.page.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list/course-intro-cs178\">\r\n          返回CS 178列表\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list\">\r\n          返回课程列表\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"\">\r\n          返回首页\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <body class=\"user-select\">\r\n    <style type=\"text/css\">\r\n      /* not available for firefox & IE explorer */\r\n      #box {\r\n          width: 100%;\r\n          height: 88%;\r\n          overflow-x: hidden;\r\n          overflow-y: scroll;\r\n          line-height: 30px;\r\n          text-align: center;\r\n      }\r\n      #box::-webkit-scrollbar {\r\n          display: none;\r\n          visibility: hidden;\r\n      }\r\n    </style>\r\n    <div id=\"box\" class=\"panel-body\">\r\n      <div style=\"border: 1px  #000000; width: 98%; margin: 0 auto;\">\r\n        <span>\r\n          <article class=\"article1\">\r\n            <header>\r\n                <h2>\r\n                  <a style=\"color:#5FBDCE; text-decoration: none;\">\r\n                    CS 178 Machine Learning and Data-Mining - Erik Sudderth\r\n                  </a>\r\n                </h2>\r\n            </header>\r\n            <br>内容:Machine Learning and Data-Mining\r\n            <br>\r\n            <br>Professor: Erik Sudderth\r\n            <br>\r\n            <br>难易程度: ★★★\r\n            <br>\r\n            <br>先修科目: ICS 6B & ICS 6D & ICS 6N/MATH 3A & MATH 2B & STATS 67(或者STATS 120A+STATS 7)\r\n            <br>\r\n            <br>TA:John Hope\r\n            <br>\r\n            <br>Discussion: 无\r\n            <br>\r\n            <br>Piazza:有\r\n            <br>\r\n            <br>Textbook:无\r\n            <br>\r\n            <br>Ratemyprofessor: 3.2\r\n            <br>\r\n            <br>Grading Criteria:\r\n            <br>\r\n            <br>· Homework     25%\r\n            <br>\r\n            <br>· Project      15%\r\n            <br>\r\n            <br>· Midterm     25%\r\n            <br>\r\n            <br>· Final      35%\r\n            <br>\r\n            <br>Comments:\r\n            <br>\r\n            <br>1.Canvas有每节课的PPT，和历年的PPT几乎一样，YouTube也有别的老师录下来的视频，感觉讲的比我们老师还要好。熟悉概念就好，具体算法代码考试不考。\r\n            <br>\r\n            <br>2.感觉对学生背景expectation较高 很多东西上课时会快速略过。多做sample就行\r\n            <br>\r\n            <br>3.这个老师讲课很清楚的，就是这门课吧，比较容易听着听着就走神了,老师和ta小哥人都很不错。一开始上lecture都完全没有讲码，但是作业里都需要写码，所以一开始有点懵，但是学期后半部分又开始讲码了。但disscusion 上ta都会讲码，所以也不用太担心。disscusion是跟lecture一样的大课，所有人一起上。\r\n        </article>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs178/esudderth/esudderth-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs178/esudderth/esudderth-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: EsudderthPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsudderthPageRoutingModule", function() { return EsudderthPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _esudderth_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./esudderth.page */ "./src/app/tab1/course-list/course-intro-cs178/esudderth/esudderth.page.ts");




const routes = [
    {
        path: '',
        component: _esudderth_page__WEBPACK_IMPORTED_MODULE_3__["EsudderthPage"]
    }
];
let EsudderthPageRoutingModule = class EsudderthPageRoutingModule {
};
EsudderthPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EsudderthPageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs178/esudderth/esudderth.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs178/esudderth/esudderth.module.ts ***!
  \***********************************************************************************/
/*! exports provided: EsudderthPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsudderthPageModule", function() { return EsudderthPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _esudderth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./esudderth-routing.module */ "./src/app/tab1/course-list/course-intro-cs178/esudderth/esudderth-routing.module.ts");
/* harmony import */ var _esudderth_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./esudderth.page */ "./src/app/tab1/course-list/course-intro-cs178/esudderth/esudderth.page.ts");







let EsudderthPageModule = class EsudderthPageModule {
};
EsudderthPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _esudderth_routing_module__WEBPACK_IMPORTED_MODULE_5__["EsudderthPageRoutingModule"]
        ],
        declarations: [_esudderth_page__WEBPACK_IMPORTED_MODULE_6__["EsudderthPage"]]
    })
], EsudderthPageModule);



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs178/esudderth/esudderth.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs178/esudderth/esudderth.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\r\n  max-height: 35vh;\r\n  overflow: hidden;\r\n}\r\n\r\n.cucs-logo{\r\n  background: url('logo.png') no-repeat;\r\n  float: center;\r\n  vertical-align: bottom;\r\n  width: 100%;\r\n  height: 82px;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  color:rgb(0, 0, 0); \r\n  text-decoration: none;\r\n  box-shadow: 1px 2px 3px #ddd;\r\n  background: #fff;\r\n}\r\n\r\narticle {\r\n  text-align: left;\r\n  background: #fff;\r\n  text-indent: 2em;\r\n  margin-left: 1em;\r\n  margin-right: 1em;\r\n}\r\n\r\nion-button {\r\n  border-bottom: thin solid #5FBDCE;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQ0FBZ0Q7RUFDaEQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFFckIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC90YWIxL2NvdXJzZS1saXN0L2NvdXJzZS1pbnRyby1jczE3OC9lc3VkZGVydGgvZXN1ZGRlcnRoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcclxuICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jdWNzLWxvZ297XHJcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9sb2dvLnBuZ1wiKSBuby1yZXBlYXQ7XHJcbiAgZmxvYXQ6IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogODJweDtcclxufVxyXG5cclxuaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjpyZ2IoMCwgMCwgMCk7IFxyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAycHggM3B4ICNkZGQ7XHJcbiAgYm94LXNoYWRvdzogMXB4IDJweCAzcHggI2RkZDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG5cclxuYXJ0aWNsZSB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHRleHQtaW5kZW50OiAyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCAjNUZCRENFO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs178/esudderth/esudderth.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs178/esudderth/esudderth.page.ts ***!
  \*********************************************************************************/
/*! exports provided: EsudderthPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsudderthPage", function() { return EsudderthPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EsudderthPage = class EsudderthPage {
    constructor() { }
    ngOnInit() {
    }
};
EsudderthPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-esudderth',
        template: __webpack_require__(/*! raw-loader!./esudderth.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-cs178/esudderth/esudderth.page.html"),
        styles: [__webpack_require__(/*! ./esudderth.page.scss */ "./src/app/tab1/course-list/course-intro-cs178/esudderth/esudderth.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EsudderthPage);



/***/ })

}]);
//# sourceMappingURL=esudderth-esudderth-module-es2015.js.map