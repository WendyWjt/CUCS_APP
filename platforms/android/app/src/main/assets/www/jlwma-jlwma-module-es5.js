(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["jlwma-jlwma-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-cs122-a/jlwma/jlwma.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/course-list/course-intro-cs122-a/jlwma/jlwma.page.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list/course-intro-cs122-a\">\r\n          返回CS 122A列表\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list\">\r\n          返回课程列表\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"\">\r\n          返回首页\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <body class=\"user-select\">\r\n    <style type=\"text/css\">\r\n      /* not available for firefox & IE explorer */\r\n      #box {\r\n          width: 100%;\r\n          height: 88%;\r\n          overflow-x: hidden;\r\n          overflow-y: scroll;\r\n          line-height: 30px;\r\n          text-align: center;\r\n      }\r\n      #box::-webkit-scrollbar {\r\n          display: none;\r\n          visibility: hidden;\r\n      }\r\n    </style>\r\n    <div id=\"box\" class=\"panel-body\">\r\n      <div style=\"border: 1px  #000000; width: 98%; margin: 0 auto;\">\r\n        <span>\r\n          <article class=\"article1\">\r\n            <header>\r\n                <h2>\r\n                  <a style=\"color:#5FBDCE; text-decoration: none;\">\r\n                    CS 122A Introduction to Data Management - Jennifer Lee Wong-ma\r\n                  </a>\r\n                </h2>\r\n            </header>\r\n            <br>Professor: Jennifer Lee Wong-ma\r\n            <br>\r\n            <br>难易程度：★★★★\r\n            <br>\r\n            <br>TA：NA\r\n            <br>\r\n            <br>Discussion: 强制\r\n            <br>\r\n            <br>Piazza : 有\r\n            <br>\r\n            <br>Textbook: NA\r\n            <br>\r\n            <br>Rate my professor 评分：3.0\r\n            <br>\r\n            <br>Grading Criteria:\r\n            <br>\r\n            <br>1. Homework 40% 有8个作业 要细心写 不然小错会扣分\r\n            <br>\r\n            <br>2.Midterm 25%\r\n            <br>\r\n            <br>3.Final 30% midterm 和 final都有不同的version，问题要细心读，final比较难\r\n            <br>\r\n            <br>4.Quiz 5% 每个Discussion会有quiz，做完自己改，只要去了discussion都会满分\r\n            <br>\r\n            <br>Comments:\r\n            <br>\r\n            <br>教授：教授讲课挺容易明白的，但是说话速度有点快，上课会写notes，notes和homework都会放在piazza上. 非常有意思，老师非常organized 并且会upload资料，包括old midterm and finals\r\n            <br>\r\n            <br>课程：听课比自己看notes好，midterm之前的课还比较容易懂，后面的有点难度，想考好必须听课. 作业好好写，考试多做题，尽量去Discussion 和 lecture\r\n          </article>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs122-a/jlwma/jlwma-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs122-a/jlwma/jlwma-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: JlwmaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JlwmaPageRoutingModule", function() { return JlwmaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _jlwma_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jlwma.page */ "./src/app/tab1/course-list/course-intro-cs122-a/jlwma/jlwma.page.ts");




var routes = [
    {
        path: '',
        component: _jlwma_page__WEBPACK_IMPORTED_MODULE_3__["JlwmaPage"]
    }
];
var JlwmaPageRoutingModule = /** @class */ (function () {
    function JlwmaPageRoutingModule() {
    }
    JlwmaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], JlwmaPageRoutingModule);
    return JlwmaPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs122-a/jlwma/jlwma.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs122-a/jlwma/jlwma.module.ts ***!
  \*****************************************************************************/
/*! exports provided: JlwmaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JlwmaPageModule", function() { return JlwmaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _jlwma_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jlwma-routing.module */ "./src/app/tab1/course-list/course-intro-cs122-a/jlwma/jlwma-routing.module.ts");
/* harmony import */ var _jlwma_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jlwma.page */ "./src/app/tab1/course-list/course-intro-cs122-a/jlwma/jlwma.page.ts");







var JlwmaPageModule = /** @class */ (function () {
    function JlwmaPageModule() {
    }
    JlwmaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _jlwma_routing_module__WEBPACK_IMPORTED_MODULE_5__["JlwmaPageRoutingModule"]
            ],
            declarations: [_jlwma_page__WEBPACK_IMPORTED_MODULE_6__["JlwmaPage"]]
        })
    ], JlwmaPageModule);
    return JlwmaPageModule;
}());



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs122-a/jlwma/jlwma.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs122-a/jlwma/jlwma.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\r\n  max-height: 35vh;\r\n  overflow: hidden;\r\n}\r\n\r\n.cucs-logo{\r\n  background: url('logo.png') no-repeat;\r\n  float: center;\r\n  vertical-align: bottom;\r\n  width: 100%;\r\n  height: 82px;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  color:rgb(0, 0, 0); \r\n  text-decoration: none;\r\n  box-shadow: 1px 2px 3px #ddd;\r\n  background: #fff;\r\n}\r\n\r\narticle {\r\n  text-align: left;\r\n  background: #fff;\r\n  text-indent: 2em;\r\n  margin-left: 1em;\r\n  margin-right: 1em;\r\n}\r\n\r\nion-button {\r\n  border-bottom: thin solid #5FBDCE;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQ0FBZ0Q7RUFDaEQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFFckIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC90YWIxL2NvdXJzZS1saXN0L2NvdXJzZS1pbnRyby1jczEyMi1hL2psd21hL2psd21hLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcclxuICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jdWNzLWxvZ297XHJcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9sb2dvLnBuZ1wiKSBuby1yZXBlYXQ7XHJcbiAgZmxvYXQ6IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogODJweDtcclxufVxyXG5cclxuaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjpyZ2IoMCwgMCwgMCk7IFxyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAycHggM3B4ICNkZGQ7XHJcbiAgYm94LXNoYWRvdzogMXB4IDJweCAzcHggI2RkZDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG5cclxuYXJ0aWNsZSB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHRleHQtaW5kZW50OiAyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCAjNUZCRENFO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs122-a/jlwma/jlwma.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs122-a/jlwma/jlwma.page.ts ***!
  \***************************************************************************/
/*! exports provided: JlwmaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JlwmaPage", function() { return JlwmaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JlwmaPage = /** @class */ (function () {
    function JlwmaPage() {
    }
    JlwmaPage.prototype.ngOnInit = function () {
    };
    JlwmaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jlwma',
            template: __webpack_require__(/*! raw-loader!./jlwma.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-cs122-a/jlwma/jlwma.page.html"),
            styles: [__webpack_require__(/*! ./jlwma.page.scss */ "./src/app/tab1/course-list/course-intro-cs122-a/jlwma/jlwma.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JlwmaPage);
    return JlwmaPage;
}());



/***/ })

}]);
//# sourceMappingURL=jlwma-jlwma-module-es5.js.map