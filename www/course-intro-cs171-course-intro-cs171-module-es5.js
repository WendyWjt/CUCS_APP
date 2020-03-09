(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["course-intro-cs171-course-intro-cs171-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-cs171/course-intro-cs171.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/course-list/course-intro-cs171/course-intro-cs171.page.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list\">\r\n          返回课程列表\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"\">\r\n          返回首页\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <body class=\"user-select\">\r\n    <style type=\"text/css\">\r\n      /* not available for firefox & IE explorer */\r\n      #box {\r\n          width: 100%;\r\n          height: 88%;\r\n          overflow-x: hidden;\r\n          overflow-y: scroll;\r\n          line-height: 30px;\r\n          text-align: center;\r\n      }\r\n      #box::-webkit-scrollbar {\r\n          display: none;\r\n          visibility: hidden;\r\n      }\r\n    </style>\r\n    <div id=\"box\" class=\"panel-body\">\r\n      <div style=\"border: 1px  #000000; width: 98%; margin: 0 auto;\">\r\n        <span>\r\n          <article class=\"article1\">\r\n            <header>\r\n                <h2>\r\n                  <a style=\"color:#5FBDCE; text-decoration: none;\">\r\n                    CS 171 Introduction to Artificial Intelligence - Richard Lathrop\r\n                  </a>\r\n                </h2>\r\n            </header>\r\n            <br>内容:Introduction to Artificial Intelligence\r\n            <br>\r\n            <br>Professor: Richard Lathrop\r\n            <br>\r\n            <br>难易程度: ★★\r\n            <br>\r\n            <br>先修科目: STATS 67 (或者STATS 7+STATS 120A) 和 ICS 46/CSE 46和MATH 2B\r\n            <br>\r\n            <br>TA:Edwin Solares\r\n            <br>\r\n            <br>Discussion: 有\r\n            <br>\r\n            <br>Piazza:有\r\n            <br>\r\n            <br>Textbook:Russell & Norvig : Artificial Intelligence; A Modern Approach, 3rd edition\r\n            <br>\r\n            <br>Ratemyprofessor: 3.5\r\n            <br>\r\n            <br>Grading Criteria:\r\n            <br>\r\n            <br>(1) Quizzes 20% 四个quiz，drop一个最低的，多看看往年的quiz sample，一般分数都不会太差\r\n            <br>\r\n            <br>(2) Midterm Exam 25% 还是一样要看往年的sample\r\n            <br>\r\n            <br>(3) Coding Project 20% 分为三个部分：first, draft, final AI，只要好好按部就班完成一般都是满分\r\n            <br>\r\n            <br>(4) Discussion Attendance 10% 10次dis可以drop三个\r\n            <br>\r\n            <br>(5) Final Exam 25% 多看往年的sample，可能会有一些新的题型出现\r\n            <br>\r\n            <br>Comment:\r\n            <br>\r\n            <br>教授很老了，但是非常care学生，Piazza上所有问题都会耐心解答。教授人很好，非常为学生考虑，如果quiz或者是考试中出现一些模棱两可的题目，教授都会把这些题目cancel。唯一就是教授的声音很催眠，上课可能会睡着。\r\n            <br>\r\n            <br>课程：总体是一节比较简单的课程，project很有意思，用心学都能拿到好成绩。quiz，mid和final占的比较重 所以past exam的理解比较重要\r\n            <br>\r\n            <br>Lecture Nodes在Canvas上都会po出来。因为有历年试题作为练习题，加上考试题有很多和历年试题重复的，所以只要多做练习，Midterm和Final都很简单。最后教授给分也很不错，总体来说这门课不难拿A。\r\n        </article>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs171/course-intro-cs171-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs171/course-intro-cs171-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: CourseIntroCs171PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroCs171PageRoutingModule", function() { return CourseIntroCs171PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _course_intro_cs171_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-intro-cs171.page */ "./src/app/tab1/course-list/course-intro-cs171/course-intro-cs171.page.ts");




var routes = [
    {
        path: '',
        component: _course_intro_cs171_page__WEBPACK_IMPORTED_MODULE_3__["CourseIntroCs171Page"]
    }
];
var CourseIntroCs171PageRoutingModule = /** @class */ (function () {
    function CourseIntroCs171PageRoutingModule() {
    }
    CourseIntroCs171PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CourseIntroCs171PageRoutingModule);
    return CourseIntroCs171PageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs171/course-intro-cs171.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs171/course-intro-cs171.module.ts ***!
  \**********************************************************************************/
/*! exports provided: CourseIntroCs171PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroCs171PageModule", function() { return CourseIntroCs171PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _course_intro_cs171_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course-intro-cs171-routing.module */ "./src/app/tab1/course-list/course-intro-cs171/course-intro-cs171-routing.module.ts");
/* harmony import */ var _course_intro_cs171_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-intro-cs171.page */ "./src/app/tab1/course-list/course-intro-cs171/course-intro-cs171.page.ts");







var CourseIntroCs171PageModule = /** @class */ (function () {
    function CourseIntroCs171PageModule() {
    }
    CourseIntroCs171PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _course_intro_cs171_routing_module__WEBPACK_IMPORTED_MODULE_5__["CourseIntroCs171PageRoutingModule"]
            ],
            declarations: [_course_intro_cs171_page__WEBPACK_IMPORTED_MODULE_6__["CourseIntroCs171Page"]]
        })
    ], CourseIntroCs171PageModule);
    return CourseIntroCs171PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs171/course-intro-cs171.page.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs171/course-intro-cs171.page.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\r\n  max-height: 35vh;\r\n  overflow: hidden;\r\n}\r\n\r\n.cucs-logo{\r\n  background: url('logo.png') no-repeat;\r\n  float: center;\r\n  vertical-align: bottom;\r\n  width: 100%;\r\n  height: 82px;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  color:rgb(0, 0, 0); \r\n  text-decoration: none;\r\n  box-shadow: 1px 2px 3px #ddd;\r\n  background: #fff;\r\n}\r\n\r\narticle {\r\n  text-align: left;\r\n  background: #fff;\r\n  text-indent: 2em;\r\n  margin-left: 1em;\r\n  margin-right: 1em;\r\n}\r\n\r\nion-button {\r\n  border-bottom: thin solid #5FBDCE;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQ0FBZ0Q7RUFDaEQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFFckIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC90YWIxL2NvdXJzZS1saXN0L2NvdXJzZS1pbnRyby1jczE3MS9jb3Vyc2UtaW50cm8tY3MxNzEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmN1Y3MtbG9nb3tcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL2xvZ28ucG5nXCIpIG5vLXJlcGVhdDtcclxuICBmbG9hdDogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA4MnB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOnJnYigwLCAwLCAwKTsgXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDJweCAzcHggI2RkZDtcclxuICBib3gtc2hhZG93OiAxcHggMnB4IDNweCAjZGRkO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcblxyXG5hcnRpY2xlIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgdGV4dC1pbmRlbnQ6IDJlbTtcclxuICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gIG1hcmdpbi1yaWdodDogMWVtO1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkICM1RkJEQ0U7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs171/course-intro-cs171.page.ts":
/*!********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs171/course-intro-cs171.page.ts ***!
  \********************************************************************************/
/*! exports provided: CourseIntroCs171Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroCs171Page", function() { return CourseIntroCs171Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CourseIntroCs171Page = /** @class */ (function () {
    function CourseIntroCs171Page() {
    }
    CourseIntroCs171Page.prototype.ngOnInit = function () {
    };
    CourseIntroCs171Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-intro-cs171',
            template: __webpack_require__(/*! raw-loader!./course-intro-cs171.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-cs171/course-intro-cs171.page.html"),
            styles: [__webpack_require__(/*! ./course-intro-cs171.page.scss */ "./src/app/tab1/course-list/course-intro-cs171/course-intro-cs171.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CourseIntroCs171Page);
    return CourseIntroCs171Page;
}());



/***/ })

}]);
//# sourceMappingURL=course-intro-cs171-course-intro-cs171-module-es5.js.map