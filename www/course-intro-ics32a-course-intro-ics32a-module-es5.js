(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["course-intro-ics32a-course-intro-ics32a-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-ics32a/course-intro-ics32a.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/course-list/course-intro-ics32a/course-intro-ics32a.page.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list\">\n          返回课程列表\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"\">\n          返回首页\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <body class=\"user-select\">\n    <style type=\"text/css\">\n      /* not available for firefox & IE explorer */\n      #box {\n          width: 100%;\n          height: 88%;\n          overflow-x: hidden;\n          overflow-y: scroll;\n          line-height: 30px;\n          text-align: center;\n      }\n      #box::-webkit-scrollbar {\n          display: none;\n          visibility: hidden;\n      }\n    </style>\n    <div id=\"box\" class=\"panel-body\">\n      <div style=\"border: 1px  #000000; width: 98%; margin: 0 auto;\">\n        <span>\n          <article class=\"article1\">\n            <header>\n                <h2>\n                  <a style=\"color:#5FBDCE; text-decoration: none;\">\n                    ICS 32A Python Programming and Libraries (Accelerated) - Kimberly Hermans\n                  </a>\n                </h2>\n            </header>\n              内容：Python\n              <br>Professor: Hermans, K\n\t\t\t\t\t\t\t<br>难易程度：★★★★★\n\t\t\t\t\t\t\t<br>先修科目: 无\n\t\t\t\t\t\t\t<br>TA：NA\n\t\t\t\t\t\t\t<br>Discussion: 不强制\n\t\t\t\t\t\t\t<br>Piazza : 有\n\t\t\t\t\t\t\t<br>Textbook: NA\n\t\t\t\t\t\t\t<br>Rate my professor 评分：1.6\n\t\t\t\t\t\t\t<br>Grading Criteria:\n\t\t\t\t\t\t\t<br>INTRO PROJECT(2/2) 5%\n\t\t\t\t\t\t\t<br>PROJECT(4/4) 20%\n\t\t\t\t\t\t\t<br>LAB ATT(10/10) 5%\n\t\t\t\t\t\t\t<br>MIDTERM 30%\n\t\t\t\t\t\t\t<br>FINAL 40%\n\t\t\t\t\t\t\t<br>Comments:\n\t\t\t\t\t\t\t<br>教授：1. 没有NOTE, 全靠PPT. 一开始还蛮详细，midterm之后PPT也自暴自弃了，一个slide两行字，然后当场打码随缘学习。\n\t\t\t\t\t\t\t<br>2. 当场打码没有不出错过，最少一堂课五六次，报错就让底下的学生debug\n\t\t\t\t\t\t\t<br>3. PPT 一两句话的term解释（http，dns这种）考试考你看都没看过的definition单选\n\t\t\t\t\t\t\t<br>4. Project description除了第一个借了alex的其他短至三行字，长不过一页，最骚的是不写grading rubric\n\t\t\t\t\t\t\t<br>5.更骚的她细如针的project definition多余的信息全靠piazza问（比如这个function需要什么output，要不要driver）她本人每月随缘回答一两位有缘人。而且她大多数时候和TA完全不一个口径。比如俄罗斯方块触底能不能有一秒移动时间，TA说要，她说不要：）她midterm当着全班300人喷TA估计TA与她老死不相往来了。\n\t\t\t\t\t\t\t<br>6. 她喷TA是因为她midterm要求等大家坐好了，TA手动交叉form，第一排A/C,第二排B/D。然后一个个派。然后她不提前给seating chart，她又只带了一张，开头这张纸还失踪了一会。最后一队人在讲台迟20分钟才领到卷子。恩，她就是要怪TA办事不利。\n\t\t\t\t\t\t\t<br>事后TA都不来lecture了她班上扬言要不是学校分配，这些TA她要全部开掉：）\n\t\t\t\t\t\t\t<br>7. 考试不让问问题，尽管她midterm多道单选没有正确答案\n\t\t\t\t\t\t\t<br>课程：自学课，lecture不计attendance，自学大佬天选之课，去十次lab，去一次final，对着canvas和google学就完事了。\n          </article>\n        </span>\n      </div>\n    </div>\n  </body>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics32a/course-intro-ics32a-routing.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics32a/course-intro-ics32a-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: CourseIntroIcs32aPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroIcs32aPageRoutingModule", function() { return CourseIntroIcs32aPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _course_intro_ics32a_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-intro-ics32a.page */ "./src/app/tab1/course-list/course-intro-ics32a/course-intro-ics32a.page.ts");




var routes = [
    {
        path: '',
        component: _course_intro_ics32a_page__WEBPACK_IMPORTED_MODULE_3__["CourseIntroIcs32aPage"]
    }
];
var CourseIntroIcs32aPageRoutingModule = /** @class */ (function () {
    function CourseIntroIcs32aPageRoutingModule() {
    }
    CourseIntroIcs32aPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CourseIntroIcs32aPageRoutingModule);
    return CourseIntroIcs32aPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics32a/course-intro-ics32a.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics32a/course-intro-ics32a.module.ts ***!
  \************************************************************************************/
/*! exports provided: CourseIntroIcs32aPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroIcs32aPageModule", function() { return CourseIntroIcs32aPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _course_intro_ics32a_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course-intro-ics32a-routing.module */ "./src/app/tab1/course-list/course-intro-ics32a/course-intro-ics32a-routing.module.ts");
/* harmony import */ var _course_intro_ics32a_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-intro-ics32a.page */ "./src/app/tab1/course-list/course-intro-ics32a/course-intro-ics32a.page.ts");







var CourseIntroIcs32aPageModule = /** @class */ (function () {
    function CourseIntroIcs32aPageModule() {
    }
    CourseIntroIcs32aPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _course_intro_ics32a_routing_module__WEBPACK_IMPORTED_MODULE_5__["CourseIntroIcs32aPageRoutingModule"]
            ],
            declarations: [_course_intro_ics32a_page__WEBPACK_IMPORTED_MODULE_6__["CourseIntroIcs32aPage"]]
        })
    ], CourseIntroIcs32aPageModule);
    return CourseIntroIcs32aPageModule;
}());



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics32a/course-intro-ics32a.page.scss":
/*!************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics32a/course-intro-ics32a.page.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  text-align: center;\n  color: black;\n  text-decoration: none;\n  box-shadow: 1px 2px 3px #ddd;\n  background: #fff;\n}\n\narticle {\n  text-align: left;\n  background: #fff;\n  text-indent: 2em;\n  margin-left: 1em;\n  margin-right: 1em;\n}\n\nion-button {\n  border-bottom: thin solid #5FBDCE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9jb3Vyc2UtbGlzdC9jb3Vyc2UtaW50cm8taWNzMzJhL0M6XFxVc2Vyc1xcOTg1NTJcXERlc2t0b3BcXENVQ1NfVjJcXENVQ1NfQVBQXzEyMThcXENVQ1NfQVBQL3NyY1xcYXBwXFx0YWIxXFxjb3Vyc2UtbGlzdFxcY291cnNlLWludHJvLWljczMyYVxcY291cnNlLWludHJvLWljczMyYS5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjEvY291cnNlLWxpc3QvY291cnNlLWludHJvLWljczMyYS9jb3Vyc2UtaW50cm8taWNzMzJhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBRUEsNEJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdBO0VBQ0ksaUNBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvY291cnNlLWxpc3QvY291cnNlLWludHJvLWljczMyYS9jb3Vyc2UtaW50cm8taWNzMzJhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOnJnYigwLCAwLCAwKTsgXHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAycHggM3B4ICNkZGQ7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDNweCAjZGRkO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuXHJcbmFydGljbGUge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB0ZXh0LWluZGVudDogMmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAgIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgIzVGQkRDRTtcclxufSIsImgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMnB4IDNweCAjZGRkO1xuICBib3gtc2hhZG93OiAxcHggMnB4IDNweCAjZGRkO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG5hcnRpY2xlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdGV4dC1pbmRlbnQ6IDJlbTtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG5cbmlvbi1idXR0b24ge1xuICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkICM1RkJEQ0U7XG59Il19 */"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics32a/course-intro-ics32a.page.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics32a/course-intro-ics32a.page.ts ***!
  \**********************************************************************************/
/*! exports provided: CourseIntroIcs32aPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroIcs32aPage", function() { return CourseIntroIcs32aPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CourseIntroIcs32aPage = /** @class */ (function () {
    function CourseIntroIcs32aPage() {
    }
    CourseIntroIcs32aPage.prototype.ngOnInit = function () {
    };
    CourseIntroIcs32aPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-intro-ics32a',
            template: __webpack_require__(/*! raw-loader!./course-intro-ics32a.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-ics32a/course-intro-ics32a.page.html"),
            styles: [__webpack_require__(/*! ./course-intro-ics32a.page.scss */ "./src/app/tab1/course-list/course-intro-ics32a/course-intro-ics32a.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CourseIntroIcs32aPage);
    return CourseIntroIcs32aPage;
}());



/***/ })

}]);
//# sourceMappingURL=course-intro-ics32a-course-intro-ics32a-module-es5.js.map