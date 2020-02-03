(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["enavarro-enavarro-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-infmatx43/enavarro/enavarro.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/course-list/course-intro-infmatx43/enavarro/enavarro.page.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list/course-intro-infmatx43\">\n          返回IN4MATX 43列表\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list\">\n          返回课程列表\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"\">\n          返回首页\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <body class=\"user-select\">\n    <style type=\"text/css\">\n      /* not available for firefox & IE explorer */\n      #box {\n          width: 100%;\n          height: 88%;\n          overflow-x: hidden;\n          overflow-y: scroll;\n          line-height: 30px;\n          text-align: center;\n      }\n      #box::-webkit-scrollbar {\n          display: none;\n          visibility: hidden;\n      }\n    </style>\n    <div id=\"box\" class=\"panel-body\">\n      <div style=\"border: 1px  #000000; width: 98%; margin: 0 auto;\">\n        <span>\n          <article class=\"article1\">\n            <header>\n                <h2>\n                  <a style=\"color:#5FBDCE; text-decoration: none;\">\n                    IN4MATX 43 INTRO TO SE - Emily Navarro\n                  </a>\n                </h2>\n            </header>\n              内容：软件文档\n              <br>Professor:  EMILY NAVARRO\n\t\t\t\t\t\t\t<br>难易程度：★★★\n\t\t\t\t\t\t\t<br>先修课目：ICS 32，可以和ICS 105替换\n\t\t\t\t\t\t\t<br>TA: 无\n\t\t\t\t\t\t\t<br>Discussion: 无\n\t\t\t\t\t\t\t<br>Piazza: 有\n\t\t\t\t\t\t\t<br>Textbook: 无\n\t\t\t\t\t\t\t<br>Rate my professor 评分: 4.0\n\t\t\t\t\t\t\t<br>Grading Criteria:\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>· Assignment     65%\n\t\t\t\t\t\t\t<br>· Midterm     15%\n\t\t\t\t\t\t\t<br>· Final      30%\n\t\t\t\t\t\t\t<br>Comment:\n\t\t\t\t\t\t\t<br>Emily 讲课很清晰, ppt很有条例, 上她的课总能学到很多, 她很讲究公平, 不会让同学白多做努力, 和白偷懒, 都不会逃过她的眼皮。 小组内 会有互相的评价， 每条评价 她都是仔细审核， 评价高的同学 她会给额外的分， 非常公平 讲课也好 是个难得的好老师。这节课主要看小组作业 小组每周都有due 只有找对队友 在组内多做奉献 即使 mid final 没考好 也能拿到好成绩\n          </article>\n        </span>\n      </div>\n    </div>\n  </body>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-infmatx43/enavarro/enavarro-routing.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-infmatx43/enavarro/enavarro-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: EnavarroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnavarroPageRoutingModule", function() { return EnavarroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _enavarro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enavarro.page */ "./src/app/tab1/course-list/course-intro-infmatx43/enavarro/enavarro.page.ts");




const routes = [
    {
        path: '',
        component: _enavarro_page__WEBPACK_IMPORTED_MODULE_3__["EnavarroPage"]
    }
];
let EnavarroPageRoutingModule = class EnavarroPageRoutingModule {
};
EnavarroPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EnavarroPageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-infmatx43/enavarro/enavarro.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-infmatx43/enavarro/enavarro.module.ts ***!
  \*************************************************************************************/
/*! exports provided: EnavarroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnavarroPageModule", function() { return EnavarroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _enavarro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enavarro-routing.module */ "./src/app/tab1/course-list/course-intro-infmatx43/enavarro/enavarro-routing.module.ts");
/* harmony import */ var _enavarro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enavarro.page */ "./src/app/tab1/course-list/course-intro-infmatx43/enavarro/enavarro.page.ts");







let EnavarroPageModule = class EnavarroPageModule {
};
EnavarroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _enavarro_routing_module__WEBPACK_IMPORTED_MODULE_5__["EnavarroPageRoutingModule"]
        ],
        declarations: [_enavarro_page__WEBPACK_IMPORTED_MODULE_6__["EnavarroPage"]]
    })
], EnavarroPageModule);



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-infmatx43/enavarro/enavarro.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-infmatx43/enavarro/enavarro.page.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  text-align: center;\n  color: black;\n  text-decoration: none;\n  box-shadow: 1px 2px 3px #ddd;\n  background: #fff;\n}\n\narticle {\n  text-align: left;\n  background: #fff;\n  text-indent: 2em;\n  margin-left: 1em;\n  margin-right: 1em;\n}\n\nion-button {\n  border-bottom: thin solid #5FBDCE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9jb3Vyc2UtbGlzdC9jb3Vyc2UtaW50cm8taW5mbWF0eDQzL2VuYXZhcnJvL0M6XFxVc2Vyc1xcOTg1NTJcXERlc2t0b3BcXENVQ1NfVjJcXENVQ1NfQVBQXzEyMThcXENVQ1NfQVBQL3NyY1xcYXBwXFx0YWIxXFxjb3Vyc2UtbGlzdFxcY291cnNlLWludHJvLWluZm1hdHg0M1xcZW5hdmFycm9cXGVuYXZhcnJvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMS9jb3Vyc2UtbGlzdC9jb3Vyc2UtaW50cm8taW5mbWF0eDQzL2VuYXZhcnJvL2VuYXZhcnJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBRUEsNEJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdBO0VBQ0ksaUNBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvY291cnNlLWxpc3QvY291cnNlLWludHJvLWluZm1hdHg0My9lbmF2YXJyby9lbmF2YXJyby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjpyZ2IoMCwgMCwgMCk7IFxyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMnB4IDNweCAjZGRkO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAzcHggI2RkZDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcblxyXG5hcnRpY2xlIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgdGV4dC1pbmRlbnQ6IDJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkICM1RkJEQ0U7XHJcbn0iLCJoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDJweCAzcHggI2RkZDtcbiAgYm94LXNoYWRvdzogMXB4IDJweCAzcHggI2RkZDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuYXJ0aWNsZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHRleHQtaW5kZW50OiAyZW07XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCAjNUZCRENFO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-infmatx43/enavarro/enavarro.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-infmatx43/enavarro/enavarro.page.ts ***!
  \***********************************************************************************/
/*! exports provided: EnavarroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnavarroPage", function() { return EnavarroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EnavarroPage = class EnavarroPage {
    constructor() { }
    ngOnInit() {
    }
};
EnavarroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-enavarro',
        template: __webpack_require__(/*! raw-loader!./enavarro.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-infmatx43/enavarro/enavarro.page.html"),
        styles: [__webpack_require__(/*! ./enavarro.page.scss */ "./src/app/tab1/course-list/course-intro-infmatx43/enavarro/enavarro.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EnavarroPage);



/***/ })

}]);
//# sourceMappingURL=enavarro-enavarro-module-es2015.js.map