(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ssago-ssago-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-ics46/ssago/ssago.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/course-list/course-intro-ics46/ssago/ssago.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list/course-intro-ics46\">\n          返回ICS 46列表\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list\">\n          返回课程列表\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"\">\n          返回首页\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <body class=\"user-select\">\n    <style type=\"text/css\">\n      /* not available for firefox & IE explorer */\n      #box {\n          width: 100%;\n          height: 88%;\n          overflow-x: hidden;\n          overflow-y: scroll;\n          line-height: 30px;\n          text-align: center;\n      }\n      #box::-webkit-scrollbar {\n          display: none;\n          visibility: hidden;\n      }\n    </style>\n    <div id=\"box\" class=\"panel-body\">\n      <div style=\"border: 1px  #000000; width: 98%; margin: 0 auto;\">\n        <span>\n          <article class=\"article1\">\n            <header>\n                <h2>\n                  <a style=\"color:#5FBDCE; text-decoration: none;\">\n                    ICS 46 Data Structure Implementation and Analysis - Sergio Gago\n                  </a>\n                </h2>\n            </header>\n              内容：数据结构\n              <br>Professor: Sergio Gago\n\t\t\t\t\t\t\t<br>难易程度：★★★\n\t\t\t\t\t\t\t<br>TA：NA\n\t\t\t\t\t\t\t<br>Discussion: 不强制\n\t\t\t\t\t\t\t<br>Piazza : 有\n\t\t\t\t\t\t\t<br>Textbook: NA\n\t\t\t\t\t\t\t<br>Rate my professor 评分：4.1\n\t\t\t\t\t\t\t<br>Grading Criteria:\n\t\t\t\t\t\t\t<br>1) Warm-up project (Project #0) 2% 这个project目的就是用来熟悉46 VM的环境，跟Klefstad的45C里面写的String class很像。不过一定要好好看project description，很多同学因为include了不让用的library扣了大量的分数！\n\t\t\t\t\t\t\t<br>2) Projects 36% 一共四个project，好好写都能拿较高的分数。每个project共30分，20分来自于test case的正确率10分来自于design。四个里面我觉得第三个project最难，建议早点开始写。\n\t\t\t\t\t\t\t<br>3) Midterm 25% 一共24分，16道选择题加上2道coding。选择题基本偏向于考概念，notes都看了的话还算简单。\n\t\t\t\t\t\t\t<br>4) Final Exam 37% 一共30分，21道选择题加上3道coding。格式跟midterm差不多。\n\t\t\t\t\t\t\t<br>5) Extra Credit 2% （attendance + course evaluation）Attendance是要去75%的lecture并且check-in。\n\t\t\t\t\t\t\t<br>这节课没有Curve！\n\t\t\t\t\t\t\t<br>Comments:\n\t\t\t\t\t\t\t<br>教授：这个老师每节课都会有PPT和录像，都能在Canvas上面找到。PPT基本是从Thornton的notes总结出来的（完整的notes也会放在Canvas上面）。有时候解释不是特别清楚，不过在Piazza上会回问题。\n\t\t\t\t\t\t\t<br>课程：这节课变数比较大的就是midterm和final因为题都比较少，多错几道grade就下去了。但是考的大部分都是概念题，所以一定要好好看notes（划重点：必须要看完整版的！）。除了考试就是projects占分了，有问题可以去lab找TA或者office hour找老师要不就在Piazza上问问题。\n          </article>\n        </span>\n      </div>\n    </div>\n  </body>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics46/ssago/ssago-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics46/ssago/ssago-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: SsagoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SsagoPageRoutingModule", function() { return SsagoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ssago_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ssago.page */ "./src/app/tab1/course-list/course-intro-ics46/ssago/ssago.page.ts");




const routes = [
    {
        path: '',
        component: _ssago_page__WEBPACK_IMPORTED_MODULE_3__["SsagoPage"]
    }
];
let SsagoPageRoutingModule = class SsagoPageRoutingModule {
};
SsagoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SsagoPageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics46/ssago/ssago.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics46/ssago/ssago.module.ts ***!
  \***************************************************************************/
/*! exports provided: SsagoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SsagoPageModule", function() { return SsagoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ssago_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ssago-routing.module */ "./src/app/tab1/course-list/course-intro-ics46/ssago/ssago-routing.module.ts");
/* harmony import */ var _ssago_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ssago.page */ "./src/app/tab1/course-list/course-intro-ics46/ssago/ssago.page.ts");







let SsagoPageModule = class SsagoPageModule {
};
SsagoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ssago_routing_module__WEBPACK_IMPORTED_MODULE_5__["SsagoPageRoutingModule"]
        ],
        declarations: [_ssago_page__WEBPACK_IMPORTED_MODULE_6__["SsagoPage"]]
    })
], SsagoPageModule);



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics46/ssago/ssago.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics46/ssago/ssago.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  text-align: center;\n  color: black;\n  text-decoration: none;\n  box-shadow: 1px 2px 3px #ddd;\n  background: #fff;\n}\n\narticle {\n  text-align: left;\n  background: #fff;\n  text-indent: 2em;\n  margin-left: 1em;\n  margin-right: 1em;\n}\n\nion-button {\n  border-bottom: thin solid #5FBDCE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9jb3Vyc2UtbGlzdC9jb3Vyc2UtaW50cm8taWNzNDYvc3NhZ28vQzpcXFVzZXJzXFw5ODU1MlxcRGVza3RvcFxcQ1VDU19WMlxcQ1VDU19BUFBfMTIxOFxcQ1VDU19BUFAvc3JjXFxhcHBcXHRhYjFcXGNvdXJzZS1saXN0XFxjb3Vyc2UtaW50cm8taWNzNDZcXHNzYWdvXFxzc2Fnby5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjEvY291cnNlLWxpc3QvY291cnNlLWludHJvLWljczQ2L3NzYWdvL3NzYWdvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBRUEsNEJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdBO0VBQ0ksaUNBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvY291cnNlLWxpc3QvY291cnNlLWludHJvLWljczQ2L3NzYWdvL3NzYWdvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOnJnYigwLCAwLCAwKTsgXHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAycHggM3B4ICNkZGQ7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDNweCAjZGRkO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuXHJcbmFydGljbGUge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB0ZXh0LWluZGVudDogMmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAgIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgIzVGQkRDRTtcclxufSIsImgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMnB4IDNweCAjZGRkO1xuICBib3gtc2hhZG93OiAxcHggMnB4IDNweCAjZGRkO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG5hcnRpY2xlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdGV4dC1pbmRlbnQ6IDJlbTtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG5cbmlvbi1idXR0b24ge1xuICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkICM1RkJEQ0U7XG59Il19 */"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics46/ssago/ssago.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics46/ssago/ssago.page.ts ***!
  \*************************************************************************/
/*! exports provided: SsagoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SsagoPage", function() { return SsagoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SsagoPage = class SsagoPage {
    constructor() { }
    ngOnInit() {
    }
};
SsagoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ssago',
        template: __webpack_require__(/*! raw-loader!./ssago.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-ics46/ssago/ssago.page.html"),
        styles: [__webpack_require__(/*! ./ssago.page.scss */ "./src/app/tab1/course-list/course-intro-ics46/ssago/ssago.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SsagoPage);



/***/ })

}]);
//# sourceMappingURL=ssago-ssago-module-es2015.js.map