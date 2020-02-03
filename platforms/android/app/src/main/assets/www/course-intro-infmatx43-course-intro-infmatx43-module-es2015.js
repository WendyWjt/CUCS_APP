(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["course-intro-infmatx43-course-intro-infmatx43-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-infmatx43/course-intro-infmatx43.page.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/course-list/course-intro-infmatx43/course-intro-infmatx43.page.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list\">\n          返回课程列表\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"\">\n          返回首页\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <body class=\"user-select\">\n    <style type=\"text/css\">\n      /* not available for firefox & IE explorer */\n      #box {\n          width: 100%;\n          height: 88%;\n          overflow-x: hidden;\n          overflow-y: scroll;\n          line-height: 30px;\n          text-align: center;\n      }\n      #box::-webkit-scrollbar {\n          display: none;\n          visibility: hidden;\n      }\n    </style>\n    <div id=\"box\" class=\"panel-body\">\n      <div style=\"border: 1px  #000000; width: 98%; margin: 0 auto;\">\n        <span>\n          <article class=\"article1\">\n            <header>\n                <h2>\n                  <a style=\"color:#5FBDCE; text-decoration: none;\">\n                    IN4MATX 43 INTRO TO SE\n                  </a>\n                </h2>\n            </header>\n            <ion-list>\n              <ion-item href='course-list/course-intro-infmatx43/enavarro'>\n                <ion-icon slot=\"start\" color=\"medium\" name=\"star\"></ion-icon>\n                <ion-label>Emily Navarro</ion-label>\n              </ion-item>\n              <ion-item href='course-list/course-intro-infmatx43/hziv'>\n                <ion-icon slot=\"start\" color=\"medium\" name=\"star\"></ion-icon>\n                <ion-label>Hadar Ziv</ion-label>\n              </ion-item>\n            </ion-list>\n          </article>\n        </span>\n      </div>\n    </div>\n  </body>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-infmatx43/course-intro-infmatx43-routing.module.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-infmatx43/course-intro-infmatx43-routing.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: CourseIntroInfmatx43PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroInfmatx43PageRoutingModule", function() { return CourseIntroInfmatx43PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _course_intro_infmatx43_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-intro-infmatx43.page */ "./src/app/tab1/course-list/course-intro-infmatx43/course-intro-infmatx43.page.ts");




const routes = [
    {
        path: '',
        component: _course_intro_infmatx43_page__WEBPACK_IMPORTED_MODULE_3__["CourseIntroInfmatx43Page"]
    },
    {
        path: 'enavarro',
        loadChildren: () => __webpack_require__.e(/*! import() | enavarro-enavarro-module */ "enavarro-enavarro-module").then(__webpack_require__.bind(null, /*! ./enavarro/enavarro.module */ "./src/app/tab1/course-list/course-intro-infmatx43/enavarro/enavarro.module.ts")).then(m => m.EnavarroPageModule)
    },
    {
        path: 'hziv',
        loadChildren: () => __webpack_require__.e(/*! import() | hziv-hziv-module */ "hziv-hziv-module").then(__webpack_require__.bind(null, /*! ./hziv/hziv.module */ "./src/app/tab1/course-list/course-intro-infmatx43/hziv/hziv.module.ts")).then(m => m.HzivPageModule)
    }
];
let CourseIntroInfmatx43PageRoutingModule = class CourseIntroInfmatx43PageRoutingModule {
};
CourseIntroInfmatx43PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CourseIntroInfmatx43PageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-infmatx43/course-intro-infmatx43.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-infmatx43/course-intro-infmatx43.module.ts ***!
  \******************************************************************************************/
/*! exports provided: CourseIntroInfmatx43PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroInfmatx43PageModule", function() { return CourseIntroInfmatx43PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _course_intro_infmatx43_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course-intro-infmatx43-routing.module */ "./src/app/tab1/course-list/course-intro-infmatx43/course-intro-infmatx43-routing.module.ts");
/* harmony import */ var _course_intro_infmatx43_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-intro-infmatx43.page */ "./src/app/tab1/course-list/course-intro-infmatx43/course-intro-infmatx43.page.ts");







let CourseIntroInfmatx43PageModule = class CourseIntroInfmatx43PageModule {
};
CourseIntroInfmatx43PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _course_intro_infmatx43_routing_module__WEBPACK_IMPORTED_MODULE_5__["CourseIntroInfmatx43PageRoutingModule"]
        ],
        declarations: [_course_intro_infmatx43_page__WEBPACK_IMPORTED_MODULE_6__["CourseIntroInfmatx43Page"]]
    })
], CourseIntroInfmatx43PageModule);



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-infmatx43/course-intro-infmatx43.page.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-infmatx43/course-intro-infmatx43.page.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  text-align: center;\n  color: black;\n  text-decoration: none;\n  box-shadow: 1px 2px 3px #ddd;\n  background: #fff;\n}\n\narticle {\n  text-align: left;\n  background: #fff;\n  text-indent: 2em;\n  margin-left: 1em;\n  margin-right: 1em;\n}\n\nion-button {\n  border-bottom: thin solid #5FBDCE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9jb3Vyc2UtbGlzdC9jb3Vyc2UtaW50cm8taW5mbWF0eDQzL0M6XFxVc2Vyc1xcOTg1NTJcXERlc2t0b3BcXENVQ1NfVjJcXENVQ1NfQVBQXzEyMThcXENVQ1NfQVBQL3NyY1xcYXBwXFx0YWIxXFxjb3Vyc2UtbGlzdFxcY291cnNlLWludHJvLWluZm1hdHg0M1xcY291cnNlLWludHJvLWluZm1hdHg0My5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjEvY291cnNlLWxpc3QvY291cnNlLWludHJvLWluZm1hdHg0My9jb3Vyc2UtaW50cm8taW5mbWF0eDQzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBRUEsNEJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdBO0VBQ0ksaUNBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvY291cnNlLWxpc3QvY291cnNlLWludHJvLWluZm1hdHg0My9jb3Vyc2UtaW50cm8taW5mbWF0eDQzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOnJnYigwLCAwLCAwKTsgXHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAycHggM3B4ICNkZGQ7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDNweCAjZGRkO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuXHJcbmFydGljbGUge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB0ZXh0LWluZGVudDogMmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAgIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgIzVGQkRDRTtcclxufSIsImgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMnB4IDNweCAjZGRkO1xuICBib3gtc2hhZG93OiAxcHggMnB4IDNweCAjZGRkO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG5hcnRpY2xlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdGV4dC1pbmRlbnQ6IDJlbTtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG5cbmlvbi1idXR0b24ge1xuICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkICM1RkJEQ0U7XG59Il19 */"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-infmatx43/course-intro-infmatx43.page.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-infmatx43/course-intro-infmatx43.page.ts ***!
  \****************************************************************************************/
/*! exports provided: CourseIntroInfmatx43Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroInfmatx43Page", function() { return CourseIntroInfmatx43Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CourseIntroInfmatx43Page = class CourseIntroInfmatx43Page {
    constructor() { }
    ngOnInit() {
    }
};
CourseIntroInfmatx43Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-course-intro-infmatx43',
        template: __webpack_require__(/*! raw-loader!./course-intro-infmatx43.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-infmatx43/course-intro-infmatx43.page.html"),
        styles: [__webpack_require__(/*! ./course-intro-infmatx43.page.scss */ "./src/app/tab1/course-list/course-intro-infmatx43/course-intro-infmatx43.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CourseIntroInfmatx43Page);



/***/ })

}]);
//# sourceMappingURL=course-intro-infmatx43-course-intro-infmatx43-module-es2015.js.map