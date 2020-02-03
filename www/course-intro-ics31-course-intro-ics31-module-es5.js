(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["course-intro-ics31-course-intro-ics31-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-ics31/course-intro-ics31.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/course-list/course-intro-ics31/course-intro-ics31.page.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list\">\n          返回课程列表\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"\">\n          返回首页\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <body class=\"user-select\">\n    <style type=\"text/css\">\n      /* not available for firefox & IE explorer */\n      #box {\n          width: 100%;\n          height: 88%;\n          overflow-x: hidden;\n          overflow-y: scroll;\n          line-height: 30px;\n          text-align: center;\n      }\n      #box::-webkit-scrollbar {\n          display: none;\n          visibility: hidden;\n      }\n    </style>\n    <div id=\"box\" class=\"panel-body\">\n      <div style=\"border: 1px  #000000; width: 98%; margin: 0 auto;\">\n        <span>\n          <article class=\"article1\">\n            <header>\n                <h2>\n                  <a style=\"color:#5FBDCE; text-decoration: none;\">\n                    ICS 31 Intro to Programming\n                  </a>\n                </h2>\n            </header>\n            <ion-list>\n              <ion-item href='course-list/course-intro-ics31/dgkay'>\n                <ion-icon slot=\"start\" color=\"medium\" name=\"star\"></ion-icon>\n                <ion-label>David G. Kay</ion-label>\n              </ion-item>\n              <ion-item href='course-list/course-intro-ics31/rwang'>\n                <ion-icon slot=\"start\" color=\"medium\" name=\"star\"></ion-icon>\n                <ion-label>Richert Wang</ion-label>\n              </ion-item>\n              <ion-item href='course-list/course-intro-ics31/igassko'>\n                <ion-icon slot=\"start\" color=\"medium\" name=\"star\"></ion-icon>\n                <ion-label>Irene Gassko</ion-label>\n              </ion-item>\n              <ion-item href='course-list/course-intro-ics31/rklefstad'>\n                <ion-icon slot=\"start\" color=\"medium\" name=\"star\"></ion-icon>\n                <ion-label>Raymond Klefstad</ion-label>\n              </ion-item>\n              <ion-item href='course-list/course-intro-ics31/salfaro'>\n                <ion-icon slot=\"start\" color=\"medium\" name=\"star\"></ion-icon>\n                <ion-label>Shannon Alfaro</ion-label>\n              </ion-item>\n            </ion-list>\n          </article>\n        </span>\n      </div>\n    </div>\n  </body>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics31/course-intro-ics31-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics31/course-intro-ics31-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: CourseIntroIcs31PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroIcs31PageRoutingModule", function() { return CourseIntroIcs31PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _course_intro_ics31_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-intro-ics31.page */ "./src/app/tab1/course-list/course-intro-ics31/course-intro-ics31.page.ts");




var routes = [
    {
        path: '',
        component: _course_intro_ics31_page__WEBPACK_IMPORTED_MODULE_3__["CourseIntroIcs31Page"]
    },
    {
        path: 'dgkay',
        loadChildren: function () { return __webpack_require__.e(/*! import() | dgkay-dgkay-module */ "dgkay-dgkay-module").then(__webpack_require__.bind(null, /*! ./dgkay/dgkay.module */ "./src/app/tab1/course-list/course-intro-ics31/dgkay/dgkay.module.ts")).then(function (m) { return m.DgkayPageModule; }); }
    },
    {
        path: 'rwang',
        loadChildren: function () { return __webpack_require__.e(/*! import() | rwang-rwang-module */ "rwang-rwang-module").then(__webpack_require__.bind(null, /*! ./rwang/rwang.module */ "./src/app/tab1/course-list/course-intro-ics31/rwang/rwang.module.ts")).then(function (m) { return m.RwangPageModule; }); }
    },
    {
        path: 'igassko',
        loadChildren: function () { return __webpack_require__.e(/*! import() | igassko-igassko-module */ "igassko-igassko-module").then(__webpack_require__.bind(null, /*! ./igassko/igassko.module */ "./src/app/tab1/course-list/course-intro-ics31/igassko/igassko.module.ts")).then(function (m) { return m.IgasskoPageModule; }); }
    },
    {
        path: 'rklefstad',
        loadChildren: function () { return __webpack_require__.e(/*! import() | rklefstad-rklefstad-module */ "rklefstad-rklefstad-module").then(__webpack_require__.bind(null, /*! ./rklefstad/rklefstad.module */ "./src/app/tab1/course-list/course-intro-ics31/rklefstad/rklefstad.module.ts")).then(function (m) { return m.RklefstadPageModule; }); }
    },
    {
        path: 'salfaro',
        loadChildren: function () { return __webpack_require__.e(/*! import() | salfaro-salfaro-module */ "salfaro-salfaro-module").then(__webpack_require__.bind(null, /*! ./salfaro/salfaro.module */ "./src/app/tab1/course-list/course-intro-ics31/salfaro/salfaro.module.ts")).then(function (m) { return m.SalfaroPageModule; }); }
    }
];
var CourseIntroIcs31PageRoutingModule = /** @class */ (function () {
    function CourseIntroIcs31PageRoutingModule() {
    }
    CourseIntroIcs31PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CourseIntroIcs31PageRoutingModule);
    return CourseIntroIcs31PageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics31/course-intro-ics31.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics31/course-intro-ics31.module.ts ***!
  \**********************************************************************************/
/*! exports provided: CourseIntroIcs31PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroIcs31PageModule", function() { return CourseIntroIcs31PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _course_intro_ics31_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course-intro-ics31-routing.module */ "./src/app/tab1/course-list/course-intro-ics31/course-intro-ics31-routing.module.ts");
/* harmony import */ var _course_intro_ics31_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-intro-ics31.page */ "./src/app/tab1/course-list/course-intro-ics31/course-intro-ics31.page.ts");







var CourseIntroIcs31PageModule = /** @class */ (function () {
    function CourseIntroIcs31PageModule() {
    }
    CourseIntroIcs31PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _course_intro_ics31_routing_module__WEBPACK_IMPORTED_MODULE_5__["CourseIntroIcs31PageRoutingModule"]
            ],
            declarations: [_course_intro_ics31_page__WEBPACK_IMPORTED_MODULE_6__["CourseIntroIcs31Page"]]
        })
    ], CourseIntroIcs31PageModule);
    return CourseIntroIcs31PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics31/course-intro-ics31.page.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics31/course-intro-ics31.page.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  text-align: center;\n  color: black;\n  text-decoration: none;\n  box-shadow: 1px 2px 3px #ddd;\n  background: #fff;\n}\n\narticle {\n  text-align: left;\n  background: #fff;\n  text-indent: 2em;\n  margin-left: 1em;\n  margin-right: 1em;\n}\n\nion-button {\n  border-bottom: thin solid #5FBDCE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9jb3Vyc2UtbGlzdC9jb3Vyc2UtaW50cm8taWNzMzEvQzpcXFVzZXJzXFw5ODU1MlxcRGVza3RvcFxcQ1VDU19WMlxcQ1VDU19BUFBfMTIxOFxcQ1VDU19BUFAvc3JjXFxhcHBcXHRhYjFcXGNvdXJzZS1saXN0XFxjb3Vyc2UtaW50cm8taWNzMzFcXGNvdXJzZS1pbnRyby1pY3MzMS5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjEvY291cnNlLWxpc3QvY291cnNlLWludHJvLWljczMxL2NvdXJzZS1pbnRyby1pY3MzMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUVBLDRCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURHQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHQTtFQUNJLGlDQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC90YWIxL2NvdXJzZS1saXN0L2NvdXJzZS1pbnRyby1pY3MzMS9jb3Vyc2UtaW50cm8taWNzMzEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6cmdiKDAsIDAsIDApOyBcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDJweCAzcHggI2RkZDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAycHggM3B4ICNkZGQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG5cclxuYXJ0aWNsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHRleHQtaW5kZW50OiAyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCAjNUZCRENFO1xyXG59IiwiaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAycHggM3B4ICNkZGQ7XG4gIGJveC1zaGFkb3c6IDFweCAycHggM3B4ICNkZGQ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbmFydGljbGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0ZXh0LWluZGVudDogMmVtO1xuICBtYXJnaW4tbGVmdDogMWVtO1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgIzVGQkRDRTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics31/course-intro-ics31.page.ts":
/*!********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics31/course-intro-ics31.page.ts ***!
  \********************************************************************************/
/*! exports provided: CourseIntroIcs31Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroIcs31Page", function() { return CourseIntroIcs31Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CourseIntroIcs31Page = /** @class */ (function () {
    function CourseIntroIcs31Page() {
    }
    CourseIntroIcs31Page.prototype.ngOnInit = function () {
    };
    CourseIntroIcs31Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-intro-ics31',
            template: __webpack_require__(/*! raw-loader!./course-intro-ics31.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-ics31/course-intro-ics31.page.html"),
            styles: [__webpack_require__(/*! ./course-intro-ics31.page.scss */ "./src/app/tab1/course-list/course-intro-ics31/course-intro-ics31.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CourseIntroIcs31Page);
    return CourseIntroIcs31Page;
}());



/***/ })

}]);
//# sourceMappingURL=course-intro-ics31-course-intro-ics31-module-es5.js.map