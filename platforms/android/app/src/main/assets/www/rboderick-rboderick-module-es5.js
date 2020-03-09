(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rboderick-rboderick-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-math3-a/rboderick/rboderick.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/course-list/course-intro-math3-a/rboderick/rboderick.page.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list/course-intro-math3-a\">\r\n          返回Math 3A列表\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list\">\r\n          返回课程列表\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"\">\r\n          返回首页\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <body class=\"user-select\">\r\n    <style type=\"text/css\">\r\n      /* not available for firefox & IE explorer */\r\n      #box {\r\n          width: 100%;\r\n          height: 88%;\r\n          overflow-x: hidden;\r\n          overflow-y: scroll;\r\n          line-height: 30px;\r\n          text-align: center;\r\n      }\r\n      #box::-webkit-scrollbar {\r\n          display: none;\r\n          visibility: hidden;\r\n      }\r\n    </style>\r\n    <div id=\"box\" class=\"panel-body\">\r\n      <div style=\"border: 1px  #000000; width: 98%; margin: 0 auto;\">\r\n        <span>\r\n          <article class=\"article1\">\r\n            <header>\r\n                <h2>\r\n                  <a style=\"color:#5FBDCE; text-decoration: none;\">\r\n                    Math 3A Intro Linear Algebra - R. Broderick\r\n                  </a>\r\n                </h2>\r\n            </header>\r\n            <br>内容：矩阵\r\n            <br>\r\n            <br>Professor:  BRODERICK, R.\r\n            <br>\r\n            <br>难易程度: ★★\r\n            <br>\r\n            <br>先修课目：无\r\n            <br>\r\n            <br>TA: REN, R. 中国人\r\n            <br>\r\n            <br>Discussion: 基本上每周四都有一个quiz，所以周四一定要去啊，周二嘛就随意了，但是多听听课也没坏处的。quiz是TA出题。\r\n            <br>\r\n            <br>Piazza: 无\r\n            <br>\r\n            <br>Textbook: David C. Lay, Linear Algebra and its applications, 5th edition, Addison-Wesley\r\n            <br>\r\n            <br>Rate my professor 评分: 3.6\r\n            <br>\r\n            <br>http://www.ratemyprofessors.com/ShowRatings.jsp?tid=1963120\r\n            <br>\r\n            <br>规规矩矩人蛮好的老师，讲的蛮清楚的，考试也按套路。\r\n            <br>\r\n            <br>Grading Criteria:\r\n            <br>\r\n            <br>· Homework - 10%\r\n            <br>\r\n            <br>8个作业，会drop 最低分数的一次，都是TA改。\r\n            <br>\r\n            <br>· quizzes 20%\r\n            <br>\r\n            <br>8个quiz，也会drop 最低分数的一次，都是TA改。\r\n            <br>\r\n            <br>· Midterm - 30%\r\n            <br>\r\n            <br>· Final - 35%\r\n            <br>\r\n            <br>midterm，final都会给practice，平时作业也一定要会做，考试之前会在课上review，讲课讲的蛮清楚的，题目都是老师自己出，TA完全不知道题目。另外就是因为是50分钟的课，所以midterm的时候做题目时间比较紧。\r\n        </article>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-math3-a/rboderick/rboderick-routing.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-math3-a/rboderick/rboderick-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: RboderickPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RboderickPageRoutingModule", function() { return RboderickPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _rboderick_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rboderick.page */ "./src/app/tab1/course-list/course-intro-math3-a/rboderick/rboderick.page.ts");




var routes = [
    {
        path: '',
        component: _rboderick_page__WEBPACK_IMPORTED_MODULE_3__["RboderickPage"]
    }
];
var RboderickPageRoutingModule = /** @class */ (function () {
    function RboderickPageRoutingModule() {
    }
    RboderickPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], RboderickPageRoutingModule);
    return RboderickPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-math3-a/rboderick/rboderick.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-math3-a/rboderick/rboderick.module.ts ***!
  \*************************************************************************************/
/*! exports provided: RboderickPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RboderickPageModule", function() { return RboderickPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _rboderick_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rboderick-routing.module */ "./src/app/tab1/course-list/course-intro-math3-a/rboderick/rboderick-routing.module.ts");
/* harmony import */ var _rboderick_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rboderick.page */ "./src/app/tab1/course-list/course-intro-math3-a/rboderick/rboderick.page.ts");







var RboderickPageModule = /** @class */ (function () {
    function RboderickPageModule() {
    }
    RboderickPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _rboderick_routing_module__WEBPACK_IMPORTED_MODULE_5__["RboderickPageRoutingModule"]
            ],
            declarations: [_rboderick_page__WEBPACK_IMPORTED_MODULE_6__["RboderickPage"]]
        })
    ], RboderickPageModule);
    return RboderickPageModule;
}());



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-math3-a/rboderick/rboderick.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-math3-a/rboderick/rboderick.page.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\r\n  max-height: 35vh;\r\n  overflow: hidden;\r\n}\r\n\r\n.cucs-logo{\r\n  background: url('logo.png') no-repeat;\r\n  float: center;\r\n  vertical-align: bottom;\r\n  width: 100%;\r\n  height: 82px;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  color:rgb(0, 0, 0); \r\n  text-decoration: none;\r\n  box-shadow: 1px 2px 3px #ddd;\r\n  background: #fff;\r\n}\r\n\r\narticle {\r\n  text-align: left;\r\n  background: #fff;\r\n  text-indent: 2em;\r\n  margin-left: 1em;\r\n  margin-right: 1em;\r\n}\r\n\r\nion-button {\r\n  border-bottom: thin solid #5FBDCE;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQ0FBZ0Q7RUFDaEQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFFckIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC90YWIxL2NvdXJzZS1saXN0L2NvdXJzZS1pbnRyby1tYXRoMy1hL3Jib2Rlcmljay9yYm9kZXJpY2sucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmN1Y3MtbG9nb3tcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL2xvZ28ucG5nXCIpIG5vLXJlcGVhdDtcclxuICBmbG9hdDogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA4MnB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOnJnYigwLCAwLCAwKTsgXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDJweCAzcHggI2RkZDtcclxuICBib3gtc2hhZG93OiAxcHggMnB4IDNweCAjZGRkO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcblxyXG5hcnRpY2xlIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgdGV4dC1pbmRlbnQ6IDJlbTtcclxuICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gIG1hcmdpbi1yaWdodDogMWVtO1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkICM1RkJEQ0U7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-math3-a/rboderick/rboderick.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-math3-a/rboderick/rboderick.page.ts ***!
  \***********************************************************************************/
/*! exports provided: RboderickPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RboderickPage", function() { return RboderickPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RboderickPage = /** @class */ (function () {
    function RboderickPage() {
    }
    RboderickPage.prototype.ngOnInit = function () {
    };
    RboderickPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rboderick',
            template: __webpack_require__(/*! raw-loader!./rboderick.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-math3-a/rboderick/rboderick.page.html"),
            styles: [__webpack_require__(/*! ./rboderick.page.scss */ "./src/app/tab1/course-list/course-intro-math3-a/rboderick/rboderick.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RboderickPage);
    return RboderickPage;
}());



/***/ })

}]);
//# sourceMappingURL=rboderick-rboderick-module-es5.js.map