(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["course-intro-ics53-course-intro-ics53-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-ics53/course-intro-ics53.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/course-list/course-intro-ics53/course-intro-ics53.page.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list\">\n          返回课程列表\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"\">\n          返回首页\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <body class=\"user-select\">\n    <style type=\"text/css\">\n      /* not available for firefox & IE explorer */\n      #box {\n          width: 100%;\n          height: 88%;\n          overflow-x: hidden;\n          overflow-y: scroll;\n          line-height: 30px;\n          text-align: center;\n      }\n      #box::-webkit-scrollbar {\n          display: none;\n          visibility: hidden;\n      }\n    </style>\n    <div id=\"box\" class=\"panel-body\">\n      <div style=\"border: 1px  #000000; width: 98%; margin: 0 auto;\">\n        <span>\n          <article class=\"article1\">\n            <header>\n                <h2>\n                  <a style=\"color:#5FBDCE; text-decoration: none;\">\n                    ICS 53 Principles in System Design - Ian Harris\n                  </a>\n                </h2>\n            </header>\n              内容：计算机硬件，C语言\n              <br>Professor: Ian Harris\n\t\t\t\t\t\t\t<br>难易程度：★★★\n\t\t\t\t\t\t\t<br>先修科目: ICS 51，需和ICS 53L一起上\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>TA：无\n\t\t\t\t\t\t\t<br>Discussion: 无\n\t\t\t\t\t\t\t<br>Piazza : 有\n\t\t\t\t\t\t\t<br>Textbook: Computer Systems A Programmer‘s Perspective， Third Edition\n\t\t\t\t\t\t\t<br>Rate my professor 评分：4.0\n\t\t\t\t\t\t\t<br>Grading Criteria:\n\t\t\t\t\t\t\t<br>· Homework 80%\n\t\t\t\t\t\t\t<br>· Midterm 10%\n\t\t\t\t\t\t\t<br>· Final 10%\n\t\t\t\t\t\t\t<br>Comments:\n\t\t\t\t\t\t\t<br>1.上课非常有节奏感的 语言和ppt非常的clear and organized 一般会讲30分钟然后剩下给学生提问题 如果抽象思维比较差的话可能需要提前预习才能跟上上课节奏。作业的instruction有时候会比较模糊 但是老师基本排除了特殊情况 让我们的代码变得更简单 每个homework都是TA 在lab当堂改分 会比较紧张\n          </article>\n        </span>\n      </div>\n    </div>\n  </body>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics53/course-intro-ics53-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics53/course-intro-ics53-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: CourseIntroIcs53PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroIcs53PageRoutingModule", function() { return CourseIntroIcs53PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _course_intro_ics53_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-intro-ics53.page */ "./src/app/tab1/course-list/course-intro-ics53/course-intro-ics53.page.ts");




var routes = [
    {
        path: '',
        component: _course_intro_ics53_page__WEBPACK_IMPORTED_MODULE_3__["CourseIntroIcs53Page"]
    }
];
var CourseIntroIcs53PageRoutingModule = /** @class */ (function () {
    function CourseIntroIcs53PageRoutingModule() {
    }
    CourseIntroIcs53PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CourseIntroIcs53PageRoutingModule);
    return CourseIntroIcs53PageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics53/course-intro-ics53.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics53/course-intro-ics53.module.ts ***!
  \**********************************************************************************/
/*! exports provided: CourseIntroIcs53PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroIcs53PageModule", function() { return CourseIntroIcs53PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _course_intro_ics53_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course-intro-ics53-routing.module */ "./src/app/tab1/course-list/course-intro-ics53/course-intro-ics53-routing.module.ts");
/* harmony import */ var _course_intro_ics53_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-intro-ics53.page */ "./src/app/tab1/course-list/course-intro-ics53/course-intro-ics53.page.ts");







var CourseIntroIcs53PageModule = /** @class */ (function () {
    function CourseIntroIcs53PageModule() {
    }
    CourseIntroIcs53PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _course_intro_ics53_routing_module__WEBPACK_IMPORTED_MODULE_5__["CourseIntroIcs53PageRoutingModule"]
            ],
            declarations: [_course_intro_ics53_page__WEBPACK_IMPORTED_MODULE_6__["CourseIntroIcs53Page"]]
        })
    ], CourseIntroIcs53PageModule);
    return CourseIntroIcs53PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics53/course-intro-ics53.page.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics53/course-intro-ics53.page.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\r\n  max-height: 35vh;\r\n  overflow: hidden;\r\n}\r\n\r\n.cucs-logo{\r\n  background: url('logo.png') no-repeat;\r\n  float: center;\r\n  vertical-align: bottom;\r\n  width: 100%;\r\n  height: 82px;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  color:rgb(0, 0, 0); \r\n  text-decoration: none;\r\n  box-shadow: 1px 2px 3px #ddd;\r\n  background: #fff;\r\n}\r\n\r\narticle {\r\n  text-align: left;\r\n  background: #fff;\r\n  text-indent: 2em;\r\n  margin-left: 1em;\r\n  margin-right: 1em;\r\n}\r\n\r\nion-button {\r\n  border-bottom: thin solid #5FBDCE;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQ0FBZ0Q7RUFDaEQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFFckIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC90YWIxL2NvdXJzZS1saXN0L2NvdXJzZS1pbnRyby1pY3M1My9jb3Vyc2UtaW50cm8taWNzNTMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmN1Y3MtbG9nb3tcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL2xvZ28ucG5nXCIpIG5vLXJlcGVhdDtcclxuICBmbG9hdDogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA4MnB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOnJnYigwLCAwLCAwKTsgXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDJweCAzcHggI2RkZDtcclxuICBib3gtc2hhZG93OiAxcHggMnB4IDNweCAjZGRkO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcblxyXG5hcnRpY2xlIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgdGV4dC1pbmRlbnQ6IDJlbTtcclxuICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gIG1hcmdpbi1yaWdodDogMWVtO1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkICM1RkJEQ0U7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics53/course-intro-ics53.page.ts":
/*!********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics53/course-intro-ics53.page.ts ***!
  \********************************************************************************/
/*! exports provided: CourseIntroIcs53Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroIcs53Page", function() { return CourseIntroIcs53Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CourseIntroIcs53Page = /** @class */ (function () {
    function CourseIntroIcs53Page() {
    }
    CourseIntroIcs53Page.prototype.ngOnInit = function () {
    };
    CourseIntroIcs53Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-intro-ics53',
            template: __webpack_require__(/*! raw-loader!./course-intro-ics53.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-ics53/course-intro-ics53.page.html"),
            styles: [__webpack_require__(/*! ./course-intro-ics53.page.scss */ "./src/app/tab1/course-list/course-intro-ics53/course-intro-ics53.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CourseIntroIcs53Page);
    return CourseIntroIcs53Page;
}());



/***/ })

}]);
//# sourceMappingURL=course-intro-ics53-course-intro-ics53-module-es5.js.map