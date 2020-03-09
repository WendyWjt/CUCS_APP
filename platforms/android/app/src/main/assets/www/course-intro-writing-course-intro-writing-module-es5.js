(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["course-intro-writing-course-intro-writing-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-writing/course-intro-writing.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/course-list/course-intro-writing/course-intro-writing.page.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list\">\n          返回课程列表\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"\">\n          返回首页\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <body class=\"user-select\">\n    <style type=\"text/css\">\n      /* not available for firefox & IE explorer */\n      #box {\n          width: 100%;\n          height: 88%;\n          overflow-x: hidden;\n          overflow-y: scroll;\n          line-height: 30px;\n          text-align: center;\n      }\n      #box::-webkit-scrollbar {\n          display: none;\n          visibility: hidden;\n      }\n    </style>\n    <div id=\"box\" class=\"panel-body\">\n      <div style=\"border: 1px  #000000; width: 98%; margin: 0 auto;\">\n        <span>\n          <article class=\"article1\">\n            <header>\n                <h2>\n                  <a style=\"color:#5FBDCE; text-decoration: none;\">\n                    Writing 39A & 39B & 39C\n                  </a>\n                </h2>\n            </header>\n              <br>Writing 39A Kat Eason\n              <br>\n              <br>（强推！）\n              <br>\n              <br>三篇paper\n              <br>\n              <br>Rate my professor 评分：4.9 http://www.ratemyprofessors.com/ShowRatings.jsp?tid=927085\n              <br>\n              <br>就是很酷很好的老师，不是特别水，但是就是很喜欢她，读的东西也很有趣的，让人能提的起兴趣写写写，给的反馈都很实际很有用，不是在讲大空话。而且一定是报课的时候第一个被抢光位置的老师。（个人感觉）\n              <br>\n              <br>\n              <br>Writing 39B Tarah Keepermen\n              <br>\n              <br>两篇paper\n              <br>\n              <br>Rate my professor 评分：4.9 http://www.ratemyprofessors.com/ShowRatings.jsp?tid=1984756\n              <br>\n              <br>这个老师绝对的水，客观的说就是学不到啥东西，有的时候讲课真的不想听，给的反馈就是很普通的一些空话，不过真的水啊，感觉平时的作业她根本不会看的。因为感觉蛮随意的，就会没有动力好好写。跟Eason比起来，责任感相差大。读的东西也挺狗血，当时的theme是teen fantasy，基本上都是女生小团体之类的撕逼故事。（（个人感觉））（但是，老师长得很可爱很少女，混在人群里，根本就是学生。）\n              <br>\n              <br>\n              <br>Writing 39C Kendra Fish\n              <br>\n              <br>两篇research paper\n              <br>\n              <br>Rate my professor 评分：4.3 http://www.ratemyprofessors.com/ShowRatings.jsp?tid=1784728\n              <br>\n              <br>不是特别水，也挺有意思的老师，按照她给的建议改的话，没有什么问题，评价都不太一样，因人而异吧，但是还挺负责任的，人也很好，我觉得给我的一些反馈意见也非常有用。（个人感觉）\n          </article>\n        </span>\n      </div>\n    </div>\n  </body>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-writing/course-intro-writing-routing.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-writing/course-intro-writing-routing.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: CourseIntroWritingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroWritingPageRoutingModule", function() { return CourseIntroWritingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _course_intro_writing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-intro-writing.page */ "./src/app/tab1/course-list/course-intro-writing/course-intro-writing.page.ts");




var routes = [
    {
        path: '',
        component: _course_intro_writing_page__WEBPACK_IMPORTED_MODULE_3__["CourseIntroWritingPage"]
    }
];
var CourseIntroWritingPageRoutingModule = /** @class */ (function () {
    function CourseIntroWritingPageRoutingModule() {
    }
    CourseIntroWritingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CourseIntroWritingPageRoutingModule);
    return CourseIntroWritingPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-writing/course-intro-writing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-writing/course-intro-writing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: CourseIntroWritingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroWritingPageModule", function() { return CourseIntroWritingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _course_intro_writing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course-intro-writing-routing.module */ "./src/app/tab1/course-list/course-intro-writing/course-intro-writing-routing.module.ts");
/* harmony import */ var _course_intro_writing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-intro-writing.page */ "./src/app/tab1/course-list/course-intro-writing/course-intro-writing.page.ts");







var CourseIntroWritingPageModule = /** @class */ (function () {
    function CourseIntroWritingPageModule() {
    }
    CourseIntroWritingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _course_intro_writing_routing_module__WEBPACK_IMPORTED_MODULE_5__["CourseIntroWritingPageRoutingModule"]
            ],
            declarations: [_course_intro_writing_page__WEBPACK_IMPORTED_MODULE_6__["CourseIntroWritingPage"]]
        })
    ], CourseIntroWritingPageModule);
    return CourseIntroWritingPageModule;
}());



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-writing/course-intro-writing.page.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-writing/course-intro-writing.page.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\r\n  max-height: 35vh;\r\n  overflow: hidden;\r\n}\r\n\r\n.cucs-logo{\r\n  background: url('logo.png') no-repeat;\r\n  float: center;\r\n  vertical-align: bottom;\r\n  width: 100%;\r\n  height: 82px;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  color:rgb(0, 0, 0); \r\n  text-decoration: none;\r\n  box-shadow: 1px 2px 3px #ddd;\r\n  background: #fff;\r\n}\r\n\r\narticle {\r\n  text-align: left;\r\n  background: #fff;\r\n  text-indent: 2em;\r\n  margin-left: 1em;\r\n  margin-right: 1em;\r\n}\r\n\r\nion-button {\r\n  border-bottom: thin solid #5FBDCE;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQ0FBZ0Q7RUFDaEQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFFckIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC90YWIxL2NvdXJzZS1saXN0L2NvdXJzZS1pbnRyby13cml0aW5nL2NvdXJzZS1pbnRyby13cml0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcclxuICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jdWNzLWxvZ297XHJcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9sb2dvLnBuZ1wiKSBuby1yZXBlYXQ7XHJcbiAgZmxvYXQ6IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogODJweDtcclxufVxyXG5cclxuaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjpyZ2IoMCwgMCwgMCk7IFxyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAycHggM3B4ICNkZGQ7XHJcbiAgYm94LXNoYWRvdzogMXB4IDJweCAzcHggI2RkZDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG5cclxuYXJ0aWNsZSB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHRleHQtaW5kZW50OiAyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCAjNUZCRENFO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-writing/course-intro-writing.page.ts":
/*!************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-writing/course-intro-writing.page.ts ***!
  \************************************************************************************/
/*! exports provided: CourseIntroWritingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroWritingPage", function() { return CourseIntroWritingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CourseIntroWritingPage = /** @class */ (function () {
    function CourseIntroWritingPage() {
    }
    CourseIntroWritingPage.prototype.ngOnInit = function () {
    };
    CourseIntroWritingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-intro-writing',
            template: __webpack_require__(/*! raw-loader!./course-intro-writing.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-writing/course-intro-writing.page.html"),
            styles: [__webpack_require__(/*! ./course-intro-writing.page.scss */ "./src/app/tab1/course-list/course-intro-writing/course-intro-writing.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CourseIntroWritingPage);
    return CourseIntroWritingPage;
}());



/***/ })

}]);
//# sourceMappingURL=course-intro-writing-course-intro-writing-module-es5.js.map