(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["course-intro-cs122-b-course-intro-cs122-b-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-cs122-b/course-intro-cs122-b.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/course-list/course-intro-cs122-b/course-intro-cs122-b.page.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list\">\r\n          返回课程列表\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"\">\r\n          返回首页\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <body class=\"user-select\">\r\n    <style type=\"text/css\">\r\n      /* not available for firefox & IE explorer */\r\n      #box {\r\n          width: 100%;\r\n          height: 88%;\r\n          overflow-x: hidden;\r\n          overflow-y: scroll;\r\n          line-height: 30px;\r\n          text-align: center;\r\n      }\r\n      #box::-webkit-scrollbar {\r\n          display: none;\r\n          visibility: hidden;\r\n      }\r\n    </style>\r\n    <div id=\"box\" class=\"panel-body\">\r\n      <div style=\"border: 1px  #000000; width: 98%; margin: 0 auto;\">\r\n        <span>\r\n          <article class=\"article1\">\r\n            <header>\r\n                <h2>\r\n                  <a style=\"color:#5FBDCE; text-decoration: none;\">\r\n                    CS 122B Project in Databases and Web Applications - Chen Li\r\n                  </a>\r\n                </h2>\r\n            </header>\r\n            <br>内容:Project in Databases and Web Applications\r\n            <br>\r\n            <br>Professor: Chen Li\r\n            <br>\r\n            <br>难易程度: ★★★★\r\n            <br>\r\n            <br>先修科目: CS 122A/EECS 116 & ICS 45J，与CS 137, IN4MATX 124冲突\r\n            <br>\r\n            <br>TA:Qiushi Bai, Zuozhi Wang\r\n            <br>\r\n            <br>Discussion:无\r\n            <br>\r\n            <br>Piazza:有\r\n            <br>\r\n            <br>Textbook:无\r\n            <br>\r\n            <br>Ratemyprofessor: 2.7\r\n            <br>\r\n            <br>Grading Criteria:\r\n            <br>\r\n            <br>· Project  88%\r\n            <br>\r\n            <br>· Quiz  11%\r\n            <br>\r\n            <br>· Evaluation 1%\r\n            <br>\r\n            <br>Comments:\r\n            <br>\r\n            <br>1.不错。需要花大量时间去研究\r\n            <br>\r\n            <br>2.老师回答问题还是快的，课上讲的会在quiz里考。教材link挺有用。提前做project一般没问题，project前自己过一遍demo基本稳了。project占比大，所以拿高分不难。\r\n            <br>\r\n            <br>3.上课讲很快。project2还没到due的时间，大家还没写完project2，就已经开始提前讲project3了。写好project就行\r\n            <br>\r\n            <br>4.教授讲课一定要听，会涉及到quiz的考点，和project的实现方法。作业量非常大，4分的课要有上8分课的准备。\r\n            <br>\r\n            <br>5.老师是中国人，课都能听懂，每一次课的具体学习内容其实包含在slides以及project的网站链接里，最主要的来自于课堂讲的内容，能不逃课最好不要逃课。project做的事情特别多，但是非常切合现实中要做一些事，学习一些全新的知识的流程。project里包含了很多各方面的技能，能学到很多东西，切记上课认真听看老师演示如何完成project。\r\n            <br>\r\n            <br>6.没去过lecture, 教授人不错。比较依赖自学, 提前预习\r\n        </article>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs122-b/course-intro-cs122-b-routing.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs122-b/course-intro-cs122-b-routing.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: CourseIntroCs122BPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroCs122BPageRoutingModule", function() { return CourseIntroCs122BPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _course_intro_cs122_b_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-intro-cs122-b.page */ "./src/app/tab1/course-list/course-intro-cs122-b/course-intro-cs122-b.page.ts");




var routes = [
    {
        path: '',
        component: _course_intro_cs122_b_page__WEBPACK_IMPORTED_MODULE_3__["CourseIntroCs122BPage"]
    }
];
var CourseIntroCs122BPageRoutingModule = /** @class */ (function () {
    function CourseIntroCs122BPageRoutingModule() {
    }
    CourseIntroCs122BPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CourseIntroCs122BPageRoutingModule);
    return CourseIntroCs122BPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs122-b/course-intro-cs122-b.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs122-b/course-intro-cs122-b.module.ts ***!
  \**************************************************************************************/
/*! exports provided: CourseIntroCs122BPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroCs122BPageModule", function() { return CourseIntroCs122BPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _course_intro_cs122_b_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course-intro-cs122-b-routing.module */ "./src/app/tab1/course-list/course-intro-cs122-b/course-intro-cs122-b-routing.module.ts");
/* harmony import */ var _course_intro_cs122_b_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-intro-cs122-b.page */ "./src/app/tab1/course-list/course-intro-cs122-b/course-intro-cs122-b.page.ts");







var CourseIntroCs122BPageModule = /** @class */ (function () {
    function CourseIntroCs122BPageModule() {
    }
    CourseIntroCs122BPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _course_intro_cs122_b_routing_module__WEBPACK_IMPORTED_MODULE_5__["CourseIntroCs122BPageRoutingModule"]
            ],
            declarations: [_course_intro_cs122_b_page__WEBPACK_IMPORTED_MODULE_6__["CourseIntroCs122BPage"]]
        })
    ], CourseIntroCs122BPageModule);
    return CourseIntroCs122BPageModule;
}());



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs122-b/course-intro-cs122-b.page.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs122-b/course-intro-cs122-b.page.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\r\n  max-height: 35vh;\r\n  overflow: hidden;\r\n}\r\n\r\n.cucs-logo{\r\n  background: url('logo.png') no-repeat;\r\n  float: center;\r\n  vertical-align: bottom;\r\n  width: 100%;\r\n  height: 82px;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  color:rgb(0, 0, 0); \r\n  text-decoration: none;\r\n  box-shadow: 1px 2px 3px #ddd;\r\n  background: #fff;\r\n}\r\n\r\narticle {\r\n  text-align: left;\r\n  background: #fff;\r\n  text-indent: 2em;\r\n  margin-left: 1em;\r\n  margin-right: 1em;\r\n}\r\n\r\nion-button {\r\n  border-bottom: thin solid #5FBDCE;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQ0FBZ0Q7RUFDaEQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFFckIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC90YWIxL2NvdXJzZS1saXN0L2NvdXJzZS1pbnRyby1jczEyMi1iL2NvdXJzZS1pbnRyby1jczEyMi1iLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcclxuICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jdWNzLWxvZ297XHJcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9sb2dvLnBuZ1wiKSBuby1yZXBlYXQ7XHJcbiAgZmxvYXQ6IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogODJweDtcclxufVxyXG5cclxuaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjpyZ2IoMCwgMCwgMCk7IFxyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAycHggM3B4ICNkZGQ7XHJcbiAgYm94LXNoYWRvdzogMXB4IDJweCAzcHggI2RkZDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG5cclxuYXJ0aWNsZSB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHRleHQtaW5kZW50OiAyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCAjNUZCRENFO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs122-b/course-intro-cs122-b.page.ts":
/*!************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs122-b/course-intro-cs122-b.page.ts ***!
  \************************************************************************************/
/*! exports provided: CourseIntroCs122BPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroCs122BPage", function() { return CourseIntroCs122BPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CourseIntroCs122BPage = /** @class */ (function () {
    function CourseIntroCs122BPage() {
    }
    CourseIntroCs122BPage.prototype.ngOnInit = function () {
    };
    CourseIntroCs122BPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-intro-cs122-b',
            template: __webpack_require__(/*! raw-loader!./course-intro-cs122-b.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-cs122-b/course-intro-cs122-b.page.html"),
            styles: [__webpack_require__(/*! ./course-intro-cs122-b.page.scss */ "./src/app/tab1/course-list/course-intro-cs122-b/course-intro-cs122-b.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CourseIntroCs122BPage);
    return CourseIntroCs122BPage;
}());



/***/ })

}]);
//# sourceMappingURL=course-intro-cs122-b-course-intro-cs122-b-module-es5.js.map