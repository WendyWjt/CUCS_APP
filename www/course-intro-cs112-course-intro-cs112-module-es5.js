(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["course-intro-cs112-course-intro-cs112-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-cs112/course-intro-cs112.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/course-list/course-intro-cs112/course-intro-cs112.page.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list\">\r\n          返回课程列表\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"\">\r\n          返回首页\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <body class=\"user-select\">\r\n    <style type=\"text/css\">\r\n      /* not available for firefox & IE explorer */\r\n      #box {\r\n          width: 100%;\r\n          height: 88%;\r\n          overflow-x: hidden;\r\n          overflow-y: scroll;\r\n          line-height: 30px;\r\n          text-align: center;\r\n      }\r\n      #box::-webkit-scrollbar {\r\n          display: none;\r\n          visibility: hidden;\r\n      }\r\n    </style>\r\n    <div id=\"box\" class=\"panel-body\">\r\n      <div style=\"border: 1px  #000000; width: 98%; margin: 0 auto;\">\r\n        <span>\r\n          <article class=\"article1\">\r\n            <header>\r\n                <h2>\r\n                  <a style=\"color:#5FBDCE; text-decoration: none;\">\r\n                    CS 112 Computer Graphics - Gopi Meenakshisundaram\r\n                  </a>\r\n                </h2>\r\n            </header>\r\n            内容:Computer Graphics\r\n            <br>\r\n            <br>Professor: Gopi Meenakshisundaram\r\n            <br>\r\n            <br>难易程度: ★★★★\r\n            <br>\r\n            <br>先修科目: ICS 33/CSE 43和ICS 45C/CSE 45C和MATH 3A/ICS 6N\r\n            <br>\r\n            <br>TA:Jia Chen, Nitin Agarwal\r\n            <br>\r\n            <br>Discussion: 无\r\n            <br>\r\n            <br>Piazza:有\r\n            <br>\r\n            <br>Textbook:无\r\n            <br>\r\n            <br>Ratemyprofessor: 2.9\r\n            <br>\r\n            <br>Grading Criteria:\r\n            <br>\r\n            <br>·Project  60%\r\n            <br>\r\n            <br>·Final project 20%\r\n            <br>\r\n            <br>·Midterm 20%\r\n            <br>\r\n            <br>Comments:\r\n            <br>\r\n            <br>1.Gopi讲课比较认真而且还挺有趣的，不是干巴巴念幻灯片那种，看得出来对课程内容都很熟悉。有一点点印度口音不过不严重。最后一节课还跟大家讨论人生，总的来说还是不错的，不愧是Associated Dean。这学期排的课是每周一节，周一晚上6:30 - 9:20三小时的那种，导致大家都很难认真地听完整个课。不过总的来说这学期的grading构成比以前改了很多，导致难度降低了不少。（从前是有两个midterm，一个final，还有project，written assignment，pop quiz等，这学期只有project和一个midterm，连final都去掉了）\r\n            <br>\r\n            <br>\r\n            <br>2.上课有ppt，但是ppt讲的不太清楚。大部分时间讲的都不是ppt上面的内容，而且midterm很多都跟他上课讲的有关系。但是由于课程内容比较难而且比较抽象，上课很无聊容易走神。老师印度人但是英语还是比较标准的，但是不知是懒还是因为是副dean事情比较多，经常忘记上传ppt，piazza也不回。今年是由于某些特殊情况评分标准有所变化。以前这门课quiz，homework，project，midterm，final都有的，加上TA对project放了很多水，笔者这学期这门课平均分还不低。这门课程对线性代数和空间几何的能力要求比较高，如果这些不是很在行又对graphics不感兴趣的话上课会十分痛苦。如果上课很痛苦的话，考试和project会很难，建议参考前几年的考试，很多原题。Project是Javascript写的，但是TA给了绝大部分码，也给了很多example，参照example和piazza绝大部分的project都能在1-2天内完成，不过我们TA是放了很多水的而且piazza上帮助很多。综上所述，这门课的成绩完全取决于TA下手狠不狠，project不会多找TA。\r\n          </article>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs112/course-intro-cs112-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs112/course-intro-cs112-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: CourseIntroCs112PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroCs112PageRoutingModule", function() { return CourseIntroCs112PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _course_intro_cs112_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-intro-cs112.page */ "./src/app/tab1/course-list/course-intro-cs112/course-intro-cs112.page.ts");




var routes = [
    {
        path: '',
        component: _course_intro_cs112_page__WEBPACK_IMPORTED_MODULE_3__["CourseIntroCs112Page"]
    }
];
var CourseIntroCs112PageRoutingModule = /** @class */ (function () {
    function CourseIntroCs112PageRoutingModule() {
    }
    CourseIntroCs112PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CourseIntroCs112PageRoutingModule);
    return CourseIntroCs112PageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs112/course-intro-cs112.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs112/course-intro-cs112.module.ts ***!
  \**********************************************************************************/
/*! exports provided: CourseIntroCs112PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroCs112PageModule", function() { return CourseIntroCs112PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _course_intro_cs112_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course-intro-cs112-routing.module */ "./src/app/tab1/course-list/course-intro-cs112/course-intro-cs112-routing.module.ts");
/* harmony import */ var _course_intro_cs112_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-intro-cs112.page */ "./src/app/tab1/course-list/course-intro-cs112/course-intro-cs112.page.ts");







var CourseIntroCs112PageModule = /** @class */ (function () {
    function CourseIntroCs112PageModule() {
    }
    CourseIntroCs112PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _course_intro_cs112_routing_module__WEBPACK_IMPORTED_MODULE_5__["CourseIntroCs112PageRoutingModule"]
            ],
            declarations: [_course_intro_cs112_page__WEBPACK_IMPORTED_MODULE_6__["CourseIntroCs112Page"]]
        })
    ], CourseIntroCs112PageModule);
    return CourseIntroCs112PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs112/course-intro-cs112.page.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs112/course-intro-cs112.page.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\r\n  max-height: 35vh;\r\n  overflow: hidden;\r\n}\r\n\r\n.cucs-logo{\r\n  background: url('logo.png') no-repeat;\r\n  float: center;\r\n  vertical-align: bottom;\r\n  width: 100%;\r\n  height: 82px;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  color:rgb(0, 0, 0); \r\n  text-decoration: none;\r\n  box-shadow: 1px 2px 3px #ddd;\r\n  background: #fff;\r\n}\r\n\r\narticle {\r\n  text-align: left;\r\n  background: #fff;\r\n  text-indent: 2em;\r\n  margin-left: 1em;\r\n  margin-right: 1em;\r\n}\r\n\r\nion-button {\r\n  border-bottom: thin solid #5FBDCE;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQ0FBZ0Q7RUFDaEQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFFckIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC90YWIxL2NvdXJzZS1saXN0L2NvdXJzZS1pbnRyby1jczExMi9jb3Vyc2UtaW50cm8tY3MxMTIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmN1Y3MtbG9nb3tcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL2xvZ28ucG5nXCIpIG5vLXJlcGVhdDtcclxuICBmbG9hdDogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA4MnB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOnJnYigwLCAwLCAwKTsgXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDJweCAzcHggI2RkZDtcclxuICBib3gtc2hhZG93OiAxcHggMnB4IDNweCAjZGRkO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcblxyXG5hcnRpY2xlIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgdGV4dC1pbmRlbnQ6IDJlbTtcclxuICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gIG1hcmdpbi1yaWdodDogMWVtO1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkICM1RkJEQ0U7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs112/course-intro-cs112.page.ts":
/*!********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs112/course-intro-cs112.page.ts ***!
  \********************************************************************************/
/*! exports provided: CourseIntroCs112Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroCs112Page", function() { return CourseIntroCs112Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CourseIntroCs112Page = /** @class */ (function () {
    function CourseIntroCs112Page() {
    }
    CourseIntroCs112Page.prototype.ngOnInit = function () {
    };
    CourseIntroCs112Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-intro-cs112',
            template: __webpack_require__(/*! raw-loader!./course-intro-cs112.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-cs112/course-intro-cs112.page.html"),
            styles: [__webpack_require__(/*! ./course-intro-cs112.page.scss */ "./src/app/tab1/course-list/course-intro-cs112/course-intro-cs112.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CourseIntroCs112Page);
    return CourseIntroCs112Page;
}());



/***/ })

}]);
//# sourceMappingURL=course-intro-cs112-course-intro-cs112-module-es5.js.map