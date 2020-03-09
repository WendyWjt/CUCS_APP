(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["course-intro-cs143-a-course-intro-cs143-a-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-cs143-a/course-intro-cs143-a.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/course-list/course-intro-cs143-a/course-intro-cs143-a.page.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list\">\r\n          返回课程列表\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"\">\r\n          返回首页\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <body class=\"user-select\">\r\n    <style type=\"text/css\">\r\n      /* not available for firefox & IE explorer */\r\n      #box {\r\n          width: 100%;\r\n          height: 88%;\r\n          overflow-x: hidden;\r\n          overflow-y: scroll;\r\n          line-height: 30px;\r\n          text-align: center;\r\n      }\r\n      #box::-webkit-scrollbar {\r\n          display: none;\r\n          visibility: hidden;\r\n      }\r\n    </style>\r\n    <div id=\"box\" class=\"panel-body\">\r\n      <div style=\"border: 1px  #000000; width: 98%; margin: 0 auto;\">\r\n        <span>\r\n          <article class=\"article1\">\r\n            <header>\r\n                <h2>\r\n                  <a style=\"color:#5FBDCE; text-decoration: none;\">\r\n                    CS 143A Principles of Operating Systems - Ardalan Amiri Sani\r\n                  </a>\r\n                </h2>\r\n            </header>\r\n            <br>内容：操作系统原理\r\n            <br>\r\n            <br>Professor: Ardalan Amiri Sani\r\n            <br>\r\n            <br>难易程度：★★★★\r\n            <br>\r\n            <br>先修科目：ICS 46 and ICS 51\r\n            <br>\r\n            <br>TA：Tiago Muck\r\n            <br>\r\n            <br>Paul Kirth\r\n            <br>\r\n            <br>Jia Chen\r\n            <br>\r\n            <br>Grader：Aditya Rajendra Joshi\r\n            <br>\r\n            <br>Seyedhamidreza Tavakolifard\r\n            <br>\r\n            <br>Discussion：非强制性，TA上课讲解例题和Project的要求。还是挺有帮助的。据Prof说dis会有TA自制pop quiz用来提升总成绩用，不过最终一个都没有\r\n            <br>\r\n            <br>Piazza: 有\r\n            <br>\r\n            <br>Textbook: Operating System Concepts, A. Silberschatz, P.B. Galvin and G. Gagne, Ninth Edition (any edition of this book beyond the Fifth edition will suffice). 网上有pdf\r\n            <br>\r\n            <br>Rate my professor 评分: 2.0\r\n            <br>\r\n            <br>http://www.ratemyprofessors.com/ShowRatings.jsp?tid=2257404\r\n            <br>\r\n            <br>这位老师上课的最大问题就是他讲的东西你几乎在书上几乎找不到，因此看书几乎无用。然后PPT非常简单，只记录各种概念与例题，只看PPT的话只能死记硬背所有的知识点。讲课的时候讲解的比较清楚但很无聊，无穷无尽的概念和理论，上课的时候很不容易集中精神。\r\n            <br>\r\n            <br>Grading criteria:\r\n            <br>\r\n            <br>· Homework  30%\r\n            <br>\r\n            <br>4个HW，每个5%，难度适中。后面两个有extra credit请一定一定拿好\r\n            <br>\r\n            <br>·1个project，10%\r\n            <br>\r\n            <br>是关于CPU schedule的算法，用java写的（没学过java也不用惊慌，要coding的部分跟Python C++区别不会太大），难度实际跟ICS 46的program差不多。时限为整个学期\r\n            <br>\r\n            <br>· Midterm exam 30%\r\n            <br>\r\n            <br>时间比较紧，因此做之前先扫一眼记得哪些会做（虽然不会有多少会的）。难度非常高，因为很多都是概念题而且必须阐述原因，没有任何sample。平均分5，60的样子\r\n            <br>\r\n            <br>· Final 30%\r\n            <br>\r\n            <br>同Midterm，并且cumulative。由于Midterm平均分实在太低，Final百分比比Midterm多的话可以替代。\r\n            <br>\r\n            <br>Comment: 这节课内容非常难。如果你是逃离CSE或者CE而进的ICS，如果ICS 51，ICS 53对于你来说很懵逼很难的话请一定不要来挑战这节课。这节课虽然跟硬件没什么大关系，但是绝大部分内容都是操作系统的概念，需要理解记住的知识点非常多。如果不是必修不感兴趣的话建议绕开这节课\r\n        </article>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs143-a/course-intro-cs143-a-routing.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs143-a/course-intro-cs143-a-routing.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: CourseIntroCs143APageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroCs143APageRoutingModule", function() { return CourseIntroCs143APageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _course_intro_cs143_a_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-intro-cs143-a.page */ "./src/app/tab1/course-list/course-intro-cs143-a/course-intro-cs143-a.page.ts");




var routes = [
    {
        path: '',
        component: _course_intro_cs143_a_page__WEBPACK_IMPORTED_MODULE_3__["CourseIntroCs143APage"]
    }
];
var CourseIntroCs143APageRoutingModule = /** @class */ (function () {
    function CourseIntroCs143APageRoutingModule() {
    }
    CourseIntroCs143APageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CourseIntroCs143APageRoutingModule);
    return CourseIntroCs143APageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs143-a/course-intro-cs143-a.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs143-a/course-intro-cs143-a.module.ts ***!
  \**************************************************************************************/
/*! exports provided: CourseIntroCs143APageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroCs143APageModule", function() { return CourseIntroCs143APageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _course_intro_cs143_a_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course-intro-cs143-a-routing.module */ "./src/app/tab1/course-list/course-intro-cs143-a/course-intro-cs143-a-routing.module.ts");
/* harmony import */ var _course_intro_cs143_a_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-intro-cs143-a.page */ "./src/app/tab1/course-list/course-intro-cs143-a/course-intro-cs143-a.page.ts");







var CourseIntroCs143APageModule = /** @class */ (function () {
    function CourseIntroCs143APageModule() {
    }
    CourseIntroCs143APageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _course_intro_cs143_a_routing_module__WEBPACK_IMPORTED_MODULE_5__["CourseIntroCs143APageRoutingModule"]
            ],
            declarations: [_course_intro_cs143_a_page__WEBPACK_IMPORTED_MODULE_6__["CourseIntroCs143APage"]]
        })
    ], CourseIntroCs143APageModule);
    return CourseIntroCs143APageModule;
}());



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs143-a/course-intro-cs143-a.page.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs143-a/course-intro-cs143-a.page.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\r\n  max-height: 35vh;\r\n  overflow: hidden;\r\n}\r\n\r\n.cucs-logo{\r\n  background: url('logo.png') no-repeat;\r\n  float: center;\r\n  vertical-align: bottom;\r\n  width: 100%;\r\n  height: 82px;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  color:rgb(0, 0, 0); \r\n  text-decoration: none;\r\n  box-shadow: 1px 2px 3px #ddd;\r\n  background: #fff;\r\n}\r\n\r\narticle {\r\n  text-align: left;\r\n  background: #fff;\r\n  text-indent: 2em;\r\n  margin-left: 1em;\r\n  margin-right: 1em;\r\n}\r\n\r\nion-button {\r\n  border-bottom: thin solid #5FBDCE;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQ0FBZ0Q7RUFDaEQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFFckIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC90YWIxL2NvdXJzZS1saXN0L2NvdXJzZS1pbnRyby1jczE0My1hL2NvdXJzZS1pbnRyby1jczE0My1hLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcclxuICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jdWNzLWxvZ297XHJcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9sb2dvLnBuZ1wiKSBuby1yZXBlYXQ7XHJcbiAgZmxvYXQ6IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogODJweDtcclxufVxyXG5cclxuaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjpyZ2IoMCwgMCwgMCk7IFxyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAycHggM3B4ICNkZGQ7XHJcbiAgYm94LXNoYWRvdzogMXB4IDJweCAzcHggI2RkZDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG5cclxuYXJ0aWNsZSB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHRleHQtaW5kZW50OiAyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCAjNUZCRENFO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs143-a/course-intro-cs143-a.page.ts":
/*!************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs143-a/course-intro-cs143-a.page.ts ***!
  \************************************************************************************/
/*! exports provided: CourseIntroCs143APage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroCs143APage", function() { return CourseIntroCs143APage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CourseIntroCs143APage = /** @class */ (function () {
    function CourseIntroCs143APage() {
    }
    CourseIntroCs143APage.prototype.ngOnInit = function () {
    };
    CourseIntroCs143APage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-intro-cs143-a',
            template: __webpack_require__(/*! raw-loader!./course-intro-cs143-a.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-cs143-a/course-intro-cs143-a.page.html"),
            styles: [__webpack_require__(/*! ./course-intro-cs143-a.page.scss */ "./src/app/tab1/course-list/course-intro-cs143-a/course-intro-cs143-a.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CourseIntroCs143APage);
    return CourseIntroCs143APage;
}());



/***/ })

}]);
//# sourceMappingURL=course-intro-cs143-a-course-intro-cs143-a-module-es5.js.map