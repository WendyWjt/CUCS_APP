(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["anicolau-anicolau-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-ics51/anicolau/anicolau.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/course-list/course-intro-ics51/anicolau/anicolau.page.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list/course-intro-ics51\">\n          返回ICS 51列表\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list\">\n          返回课程列表\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"\">\n          返回首页\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <body class=\"user-select\">\n    <style type=\"text/css\">\n      /* not available for firefox & IE explorer */\n      #box {\n          width: 100%;\n          height: 88%;\n          overflow-x: hidden;\n          overflow-y: scroll;\n          line-height: 30px;\n          text-align: center;\n      }\n      #box::-webkit-scrollbar {\n          display: none;\n          visibility: hidden;\n      }\n    </style>\n    <div id=\"box\" class=\"panel-body\">\n      <div style=\"border: 1px  #000000; width: 98%; margin: 0 auto;\">\n        <span>\n          <article class=\"article1\">\n            <header>\n                <h2>\n                  <a style=\"color:#5FBDCE; text-decoration: none;\">\n                    ICS 51 Intro Computer Organization - Alex Nicolau\n                  </a>\n                </h2>\n            </header>\n              内容：学习基础汇编语言MIPS、硬件知识\n              <br>Professor:  ALEX NICOLAU\n\t\t\t\t\t\t\t<br>难易程度: ★★\n\t\t\t\t\t\t\t<br>先修课目：ics 21 OR IcsH21 OR CSE 21 OR IN4MATX 42 OR ap cs OR Ics 31 任何一节  和 6B\n              <br>TA: 有好多。。。省略\n\t\t\t\t\t\t\t<br>Discussion & Lab: 都不是强制性的，discussion跟lecture一样是所有人一起上的，有的时候是讲作业答案，经常讲code，建议去听一听。lab的话，只要code写出来，基本上不用去。\n\t\t\t\t\t\t\t<br>Piazza: 有\n              <br>Textbook: Andrew S. Tanenbaum and Todd Austin, Structured Computer Organization (第六版)\n\t\t\t\t\t\t\t<br>书讲的还是更能让人理解。听不懂lecture的话，可以看看书。\n\t\t\t\t\t\t\t<br>Rate my professor 评分: 2.5\n\t\t\t\t\t\t\t<br>http://www.ratemyprofessors.com/ShowRatings.jsp?tid=447604\n\t\t\t\t\t\t\t<br>经常看不到这个老师，一言不合就是TA带lecture，，但是作业，code都不难，midterm也还行。\n\t\t\t\t\t\t\t<br>Grading Criteria:\n\t\t\t\t\t\t\t<br>(1) Homework 10％， 三个手写作业，有难度但是很多题目都能查到，而且给分松，不全按correctness给分。\n\t\t\t\t\t\t\t<br>(2) Lab 30％， 比较有难度，但是会给出思路和输出结果，而且时间比较充足，总体来说还好。\n\t\t\t\t\t\t\t<br>(3) Midterm 35％，两个Midterm，多数题目是ppt上出现过的，但是Assembly比较难。\n\t\t\t\t\t\t\t<br>(4) Final 25％，大多是复习过的题目，没有Assembly.\n\t\t\t\t\t\t\t<br>Comments\n\t\t\t\t\t\t\t<br>教授：这个教授讲课很啰嗦，而且经常消失或是直接找TA代课。听下去需要一定的意志力。\n              <br>课程：不确定到最后学到了什么，但是不能不学。Lab和Homework应该比较好拿分，考final前仔细复习一下review session上讲的题目就可以。\n              -->\n          </article>\n        </span>\n      </div>\n    </div>\n  </body>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics51/anicolau/anicolau-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics51/anicolau/anicolau-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: AnicolauPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnicolauPageRoutingModule", function() { return AnicolauPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _anicolau_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./anicolau.page */ "./src/app/tab1/course-list/course-intro-ics51/anicolau/anicolau.page.ts");




const routes = [
    {
        path: '',
        component: _anicolau_page__WEBPACK_IMPORTED_MODULE_3__["AnicolauPage"]
    }
];
let AnicolauPageRoutingModule = class AnicolauPageRoutingModule {
};
AnicolauPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AnicolauPageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics51/anicolau/anicolau.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics51/anicolau/anicolau.module.ts ***!
  \*********************************************************************************/
/*! exports provided: AnicolauPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnicolauPageModule", function() { return AnicolauPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _anicolau_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./anicolau-routing.module */ "./src/app/tab1/course-list/course-intro-ics51/anicolau/anicolau-routing.module.ts");
/* harmony import */ var _anicolau_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./anicolau.page */ "./src/app/tab1/course-list/course-intro-ics51/anicolau/anicolau.page.ts");







let AnicolauPageModule = class AnicolauPageModule {
};
AnicolauPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _anicolau_routing_module__WEBPACK_IMPORTED_MODULE_5__["AnicolauPageRoutingModule"]
        ],
        declarations: [_anicolau_page__WEBPACK_IMPORTED_MODULE_6__["AnicolauPage"]]
    })
], AnicolauPageModule);



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics51/anicolau/anicolau.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics51/anicolau/anicolau.page.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  text-align: center;\n  color: black;\n  text-decoration: none;\n  box-shadow: 1px 2px 3px #ddd;\n  background: #fff;\n}\n\narticle {\n  text-align: left;\n  background: #fff;\n  text-indent: 2em;\n  margin-left: 1em;\n  margin-right: 1em;\n}\n\nion-button {\n  border-bottom: thin solid #5FBDCE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9jb3Vyc2UtbGlzdC9jb3Vyc2UtaW50cm8taWNzNTEvYW5pY29sYXUvQzpcXFVzZXJzXFw5ODU1MlxcRGVza3RvcFxcQ1VDU19WMlxcQ1VDU19BUFBfMTIxOFxcQ1VDU19BUFAvc3JjXFxhcHBcXHRhYjFcXGNvdXJzZS1saXN0XFxjb3Vyc2UtaW50cm8taWNzNTFcXGFuaWNvbGF1XFxhbmljb2xhdS5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjEvY291cnNlLWxpc3QvY291cnNlLWludHJvLWljczUxL2FuaWNvbGF1L2FuaWNvbGF1LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBRUEsNEJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdBO0VBQ0ksaUNBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvY291cnNlLWxpc3QvY291cnNlLWludHJvLWljczUxL2FuaWNvbGF1L2FuaWNvbGF1LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOnJnYigwLCAwLCAwKTsgXHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAycHggM3B4ICNkZGQ7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDNweCAjZGRkO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuXHJcbmFydGljbGUge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB0ZXh0LWluZGVudDogMmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAgIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgIzVGQkRDRTtcclxufSIsImgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMnB4IDNweCAjZGRkO1xuICBib3gtc2hhZG93OiAxcHggMnB4IDNweCAjZGRkO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG5hcnRpY2xlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdGV4dC1pbmRlbnQ6IDJlbTtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG5cbmlvbi1idXR0b24ge1xuICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkICM1RkJEQ0U7XG59Il19 */"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics51/anicolau/anicolau.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics51/anicolau/anicolau.page.ts ***!
  \*******************************************************************************/
/*! exports provided: AnicolauPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnicolauPage", function() { return AnicolauPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AnicolauPage = class AnicolauPage {
    constructor() { }
    ngOnInit() {
    }
};
AnicolauPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-anicolau',
        template: __webpack_require__(/*! raw-loader!./anicolau.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-ics51/anicolau/anicolau.page.html"),
        styles: [__webpack_require__(/*! ./anicolau.page.scss */ "./src/app/tab1/course-list/course-intro-ics51/anicolau/anicolau.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AnicolauPage);



/***/ })

}]);
//# sourceMappingURL=anicolau-anicolau-module-es2015.js.map