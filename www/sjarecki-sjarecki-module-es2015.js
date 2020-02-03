(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sjarecki-sjarecki-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-ics6d/sjarecki/sjarecki.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/course-list/course-intro-ics6d/sjarecki/sjarecki.page.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list/course-intro-ics6d\">\n          返回ICS 6D列表\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list\">\n          返回课程列表\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"\">\n          返回首页\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <body class=\"user-select\">\n    <style type=\"text/css\">\n      /* not available for firefox & IE explorer */\n      #box {\n          width: 100%;\n          height: 88%;\n          overflow-x: hidden;\n          overflow-y: scroll;\n          line-height: 30px;\n          text-align: center;\n      }\n      #box::-webkit-scrollbar {\n          display: none;\n          visibility: hidden;\n      }\n    </style>\n    <div id=\"box\" class=\"panel-body\">\n      <div style=\"border: 1px  #000000; width: 98%; margin: 0 auto;\">\n        <span>\n          <article class=\"article1\">\n            <header>\n                <h2>\n                  <a style=\"color:#5FBDCE; text-decoration: none;\">\n                    ICS 6D Discrete Math For CS - Stanislaw Jarecki\n                  </a>\n                </h2>\n            </header>\n              内容：离散代数\n              <br>Professor: Stanislaw Jarecki\n\t\t\t\t\t\t\t<br>难易程度：★★\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>先修课目：建议6B,不是强制性。\n\t\t\t\t\t\t\t<br>TA: 无\n\t\t\t\t\t\t\t<br>Discussion: 不强制\n\t\t\t\t\t\t\t<br>Piazza : 有\n\t\t\t\t\t\t\t<br>Textbook: Discrete Mathmaticis (zybook)\n\t\t\t\t\t\t\t<br>Rate my professor 评分: 3.0\n\t\t\t\t\t\t\t<br>Grading Criteria: ( 每个学期都会稍有变动）\n\t\t\t\t\t\t\t<br>（1）Homework: 18% 评分一半看完成度 一半看随机两道题的正确率\n\t\t\t\t\t\t\t<br>（2）Reading: 6% 看zyBook的完成度 应该都能满分\n\t\t\t\t\t\t\t<br>（3）4 Tests : 76% (19% each) 难度还适中 基本范围不超出zybook和HW\n\t\t\t\t\t\t\t<br>Comment:\n\t\t\t\t\t\t\t<br>教授：老师人挺好的，但是口音比较迷；讲课思路容易从最抽象的讲到例子，所以对于比较难的概念不预习直接听他讲可能比较难理解；有些课会没有PPT只在黑板上讲题，但是有PPT的话PPT还蛮详细的；讲题步骤黑板上写的比较详细，但是板书比较混乱，不跟着听容易不知道在解哪道题；考试允许带一张A4纸小抄，可打印或手写，并且如果前四次考试过了有C以上，是没有期末考的。\n\t\t\t\t\t\t\t<br>课程：作业题要求清晰，完全可以对照zybook自学，弄懂后考试没有问题；4次test每次19%，容错率比较高，允许cheat sheet，比较宽松；不要依赖课上老师讲的，多用其他资料学习容易得A。\n          </article>\n        </span>\n      </div>\n    </div>\n  </body>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics6d/sjarecki/sjarecki-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics6d/sjarecki/sjarecki-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: SjareckiPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SjareckiPageRoutingModule", function() { return SjareckiPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sjarecki_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sjarecki.page */ "./src/app/tab1/course-list/course-intro-ics6d/sjarecki/sjarecki.page.ts");




const routes = [
    {
        path: '',
        component: _sjarecki_page__WEBPACK_IMPORTED_MODULE_3__["SjareckiPage"]
    }
];
let SjareckiPageRoutingModule = class SjareckiPageRoutingModule {
};
SjareckiPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SjareckiPageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics6d/sjarecki/sjarecki.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics6d/sjarecki/sjarecki.module.ts ***!
  \*********************************************************************************/
/*! exports provided: SjareckiPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SjareckiPageModule", function() { return SjareckiPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sjarecki_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sjarecki-routing.module */ "./src/app/tab1/course-list/course-intro-ics6d/sjarecki/sjarecki-routing.module.ts");
/* harmony import */ var _sjarecki_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sjarecki.page */ "./src/app/tab1/course-list/course-intro-ics6d/sjarecki/sjarecki.page.ts");







let SjareckiPageModule = class SjareckiPageModule {
};
SjareckiPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sjarecki_routing_module__WEBPACK_IMPORTED_MODULE_5__["SjareckiPageRoutingModule"]
        ],
        declarations: [_sjarecki_page__WEBPACK_IMPORTED_MODULE_6__["SjareckiPage"]]
    })
], SjareckiPageModule);



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics6d/sjarecki/sjarecki.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics6d/sjarecki/sjarecki.page.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  text-align: center;\n  color: black;\n  text-decoration: none;\n  box-shadow: 1px 2px 3px #ddd;\n  background: #fff;\n}\n\narticle {\n  text-align: left;\n  background: #fff;\n  text-indent: 2em;\n  margin-left: 1em;\n  margin-right: 1em;\n}\n\nion-button {\n  border-bottom: thin solid #5FBDCE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9jb3Vyc2UtbGlzdC9jb3Vyc2UtaW50cm8taWNzNmQvc2phcmVja2kvQzpcXFVzZXJzXFw5ODU1MlxcRGVza3RvcFxcQ1VDU19WMlxcQ1VDU19BUFBfMTIxOFxcQ1VDU19BUFAvc3JjXFxhcHBcXHRhYjFcXGNvdXJzZS1saXN0XFxjb3Vyc2UtaW50cm8taWNzNmRcXHNqYXJlY2tpXFxzamFyZWNraS5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjEvY291cnNlLWxpc3QvY291cnNlLWludHJvLWljczZkL3NqYXJlY2tpL3NqYXJlY2tpLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBRUEsNEJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdBO0VBQ0ksaUNBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvY291cnNlLWxpc3QvY291cnNlLWludHJvLWljczZkL3NqYXJlY2tpL3NqYXJlY2tpLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOnJnYigwLCAwLCAwKTsgXHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAycHggM3B4ICNkZGQ7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDNweCAjZGRkO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuXHJcbmFydGljbGUge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB0ZXh0LWluZGVudDogMmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAgIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgIzVGQkRDRTtcclxufSIsImgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMnB4IDNweCAjZGRkO1xuICBib3gtc2hhZG93OiAxcHggMnB4IDNweCAjZGRkO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG5hcnRpY2xlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdGV4dC1pbmRlbnQ6IDJlbTtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG5cbmlvbi1idXR0b24ge1xuICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkICM1RkJEQ0U7XG59Il19 */"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics6d/sjarecki/sjarecki.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics6d/sjarecki/sjarecki.page.ts ***!
  \*******************************************************************************/
/*! exports provided: SjareckiPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SjareckiPage", function() { return SjareckiPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SjareckiPage = class SjareckiPage {
    constructor() { }
    ngOnInit() {
    }
};
SjareckiPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sjarecki',
        template: __webpack_require__(/*! raw-loader!./sjarecki.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-ics6d/sjarecki/sjarecki.page.html"),
        styles: [__webpack_require__(/*! ./sjarecki.page.scss */ "./src/app/tab1/course-list/course-intro-ics6d/sjarecki/sjarecki.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SjareckiPage);



/***/ })

}]);
//# sourceMappingURL=sjarecki-sjarecki-module-es2015.js.map