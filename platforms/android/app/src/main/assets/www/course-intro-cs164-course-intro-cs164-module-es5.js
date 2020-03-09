(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["course-intro-cs164-course-intro-cs164-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-cs164/course-intro-cs164.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/course-list/course-intro-cs164/course-intro-cs164.page.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list\">\r\n          返回课程列表\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"\">\r\n          返回首页\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <body class=\"user-select\">\r\n    <style type=\"text/css\">\r\n      /* not available for firefox & IE explorer */\r\n      #box {\r\n          width: 100%;\r\n          height: 88%;\r\n          overflow-x: hidden;\r\n          overflow-y: scroll;\r\n          line-height: 30px;\r\n          text-align: center;\r\n      }\r\n      #box::-webkit-scrollbar {\r\n          display: none;\r\n          visibility: hidden;\r\n      }\r\n    </style>\r\n    <div id=\"box\" class=\"panel-body\">\r\n      <div style=\"border: 1px  #000000; width: 98%; margin: 0 auto;\">\r\n        <span>\r\n          <article class=\"article1\">\r\n            <header>\r\n                <h2>\r\n                  <a style=\"color:#5FBDCE; text-decoration: none;\">\r\n                    CS 164 Computational Geometry and Geometric Modeling - Michael T. Goodrich\r\n                  </a>\r\n                </h2>\r\n            </header>\r\n            <br>内容:Computational Geometry and Geometric Modeling\r\n            <br>\r\n            <br>Professor: Michael T. Goodrich\r\n            <br>\r\n            <br>难易程度: ★★★★\r\n            <br>\r\n            <br>先修科目: ICS 46/CSE 46\r\n            <br>\r\n            <br>TA:Timothy Johnson (TA) and Pedro Matias (grader)\r\n            <br>\r\n            <br>Discussion: 无\r\n            <br>\r\n            <br>Piazza:有\r\n            <br>\r\n            <br>Textbook:de Berg, Cheong, van Kreveld, and Overmars, Computational Geometry: Algorithms and Applications, Springer, 2008, 3rd edition.\r\n            <br>\r\n            <br>Ratemyprofessor: 3.3\r\n            <br>\r\n            <br>Grading Criteria:\r\n            <br>\r\n            <br>· Homework     30%\r\n            <br>\r\n            <br>· Midterm1     20%\r\n            <br>\r\n            <br>· Midterm2     20%\r\n            <br>\r\n            <br>· Final      30%\r\n            <br>\r\n            <br>Comments:\r\n            <br>\r\n            <br>1.老师人很好 讲的很清楚 板书笔记 不会po但是书上没有的内容会给链接 建议记笔记 不会的可以问 作业会比较难 但好好听课作业好好写 考前复习一下笔记就行。这节课看着可怕其实也没有那么难 主要考试不为难人 题目相对简单 最后会给curve 建议好好听课并且记笔记 作业 作业不会或者有地方不清楚的话建议去office hour（reader的我没去过，professor的去的人比较少，ta的去的人相对比较多 ta不会说答案但是会给解题思路 可以跟去office hour的同学一起讨论）\r\n            <br>\r\n            <br>2.讲课思路非常清晰！几何算法算是挺难的课了，但是Goodrich的板书非常organized，由浅入深，还会用一些非常有趣的比喻活跃课堂气氛，lecture清晰易懂。如果课上不懂的话，可以去office hour找他答疑，他会给你讲得很细很清楚，基本没什么人的。这个课作业比较难，考试挺水的，而且教授讲课非常好，总的来说非常推荐。\r\n            <br>\r\n            <br>3.讲课比较清楚， 笔记写的也很清楚 ，内容难。上课全程手抄笔记， 错过一节课就gg ，内容很玄 2d和3d内容都有， 如果不是很有兴趣或者algorithm类很好建议不要take， 难拿a。\r\n        </article>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs164/course-intro-cs164-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs164/course-intro-cs164-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: CourseIntroCs164PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroCs164PageRoutingModule", function() { return CourseIntroCs164PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _course_intro_cs164_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-intro-cs164.page */ "./src/app/tab1/course-list/course-intro-cs164/course-intro-cs164.page.ts");




var routes = [
    {
        path: '',
        component: _course_intro_cs164_page__WEBPACK_IMPORTED_MODULE_3__["CourseIntroCs164Page"]
    }
];
var CourseIntroCs164PageRoutingModule = /** @class */ (function () {
    function CourseIntroCs164PageRoutingModule() {
    }
    CourseIntroCs164PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CourseIntroCs164PageRoutingModule);
    return CourseIntroCs164PageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs164/course-intro-cs164.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs164/course-intro-cs164.module.ts ***!
  \**********************************************************************************/
/*! exports provided: CourseIntroCs164PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroCs164PageModule", function() { return CourseIntroCs164PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _course_intro_cs164_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course-intro-cs164-routing.module */ "./src/app/tab1/course-list/course-intro-cs164/course-intro-cs164-routing.module.ts");
/* harmony import */ var _course_intro_cs164_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-intro-cs164.page */ "./src/app/tab1/course-list/course-intro-cs164/course-intro-cs164.page.ts");







var CourseIntroCs164PageModule = /** @class */ (function () {
    function CourseIntroCs164PageModule() {
    }
    CourseIntroCs164PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _course_intro_cs164_routing_module__WEBPACK_IMPORTED_MODULE_5__["CourseIntroCs164PageRoutingModule"]
            ],
            declarations: [_course_intro_cs164_page__WEBPACK_IMPORTED_MODULE_6__["CourseIntroCs164Page"]]
        })
    ], CourseIntroCs164PageModule);
    return CourseIntroCs164PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs164/course-intro-cs164.page.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs164/course-intro-cs164.page.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\r\n  max-height: 35vh;\r\n  overflow: hidden;\r\n}\r\n\r\n.cucs-logo{\r\n  background: url('logo.png') no-repeat;\r\n  float: center;\r\n  vertical-align: bottom;\r\n  width: 100%;\r\n  height: 82px;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  color:rgb(0, 0, 0); \r\n  text-decoration: none;\r\n  box-shadow: 1px 2px 3px #ddd;\r\n  background: #fff;\r\n}\r\n\r\narticle {\r\n  text-align: left;\r\n  background: #fff;\r\n  text-indent: 2em;\r\n  margin-left: 1em;\r\n  margin-right: 1em;\r\n}\r\n\r\nion-button {\r\n  border-bottom: thin solid #5FBDCE;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQ0FBZ0Q7RUFDaEQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFFckIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC90YWIxL2NvdXJzZS1saXN0L2NvdXJzZS1pbnRyby1jczE2NC9jb3Vyc2UtaW50cm8tY3MxNjQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmN1Y3MtbG9nb3tcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL2xvZ28ucG5nXCIpIG5vLXJlcGVhdDtcclxuICBmbG9hdDogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA4MnB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOnJnYigwLCAwLCAwKTsgXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDJweCAzcHggI2RkZDtcclxuICBib3gtc2hhZG93OiAxcHggMnB4IDNweCAjZGRkO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcblxyXG5hcnRpY2xlIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgdGV4dC1pbmRlbnQ6IDJlbTtcclxuICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gIG1hcmdpbi1yaWdodDogMWVtO1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkICM1RkJEQ0U7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs164/course-intro-cs164.page.ts":
/*!********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs164/course-intro-cs164.page.ts ***!
  \********************************************************************************/
/*! exports provided: CourseIntroCs164Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroCs164Page", function() { return CourseIntroCs164Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CourseIntroCs164Page = /** @class */ (function () {
    function CourseIntroCs164Page() {
    }
    CourseIntroCs164Page.prototype.ngOnInit = function () {
    };
    CourseIntroCs164Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-intro-cs164',
            template: __webpack_require__(/*! raw-loader!./course-intro-cs164.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-cs164/course-intro-cs164.page.html"),
            styles: [__webpack_require__(/*! ./course-intro-cs164.page.scss */ "./src/app/tab1/course-list/course-intro-cs164/course-intro-cs164.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CourseIntroCs164Page);
    return CourseIntroCs164Page;
}());



/***/ })

}]);
//# sourceMappingURL=course-intro-cs164-course-intro-cs164-module-es5.js.map