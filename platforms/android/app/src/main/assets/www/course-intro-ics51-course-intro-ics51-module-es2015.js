(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["course-intro-ics51-course-intro-ics51-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-ics51/course-intro-ics51.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/course-list/course-intro-ics51/course-intro-ics51.page.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list\">\n          返回课程列表\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"\">\n          返回首页\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <body class=\"user-select\">\n    <style type=\"text/css\">\n      /* not available for firefox & IE explorer */\n      #box {\n          width: 100%;\n          height: 88%;\n          overflow-x: hidden;\n          overflow-y: scroll;\n          line-height: 30px;\n          text-align: center;\n      }\n      #box::-webkit-scrollbar {\n          display: none;\n          visibility: hidden;\n      }\n    </style>\n    <div id=\"box\" class=\"panel-body\">\n      <div style=\"border: 1px  #000000; width: 98%; margin: 0 auto;\">\n        <span>\n          <article class=\"article1\">\n            <header>\n                <h2>\n                  <a style=\"color:#5FBDCE; text-decoration: none;\">\n                    ICS 51 Intro Computer Organization\n                  </a>\n                </h2>\n            </header>\n            <ion-list>\n              <ion-item href='course-list/course-intro-ics51/anicolau'>\n                <ion-icon slot=\"start\" color=\"medium\" name=\"star\"></ion-icon>\n                <ion-label>Alex Nicolau</ion-label>\n              </ion-item>\n              <ion-item href='course-list/course-intro-ics51/ebozorgzadeh'>\n                <ion-icon slot=\"start\" color=\"medium\" name=\"star\"></ion-icon>\n                <ion-label>Eli Bozorgzadeh</ion-label>\n              </ion-item>\n              <ion-item href='course-list/course-intro-ics51/salfaro'>\n                <ion-icon slot=\"start\" color=\"medium\" name=\"star\"></ion-icon>\n                <ion-label>Shannon Alfaro</ion-label>\n              </ion-item>\n              <ion-item href='course-list/course-intro-ics51/iharris'>\n                <ion-icon slot=\"start\" color=\"medium\" name=\"star\"></ion-icon>\n                <ion-label>Ian Harris</ion-label>\n              </ion-item>\n            </ion-list>\n          </article>\n        </span>\n      </div>\n    </div>\n  </body>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics51/course-intro-ics51-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics51/course-intro-ics51-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: CourseIntroIcs51PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroIcs51PageRoutingModule", function() { return CourseIntroIcs51PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _course_intro_ics51_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-intro-ics51.page */ "./src/app/tab1/course-list/course-intro-ics51/course-intro-ics51.page.ts");




const routes = [
    {
        path: '',
        component: _course_intro_ics51_page__WEBPACK_IMPORTED_MODULE_3__["CourseIntroIcs51Page"]
    },
    {
        path: 'anicolau',
        loadChildren: () => __webpack_require__.e(/*! import() | anicolau-anicolau-module */ "anicolau-anicolau-module").then(__webpack_require__.bind(null, /*! ./anicolau/anicolau.module */ "./src/app/tab1/course-list/course-intro-ics51/anicolau/anicolau.module.ts")).then(m => m.AnicolauPageModule)
    },
    {
        path: 'ebozorgzadeh',
        loadChildren: () => __webpack_require__.e(/*! import() | ebozorgzadeh-ebozorgzadeh-module */ "ebozorgzadeh-ebozorgzadeh-module").then(__webpack_require__.bind(null, /*! ./ebozorgzadeh/ebozorgzadeh.module */ "./src/app/tab1/course-list/course-intro-ics51/ebozorgzadeh/ebozorgzadeh.module.ts")).then(m => m.EbozorgzadehPageModule)
    },
    {
        path: 'salfaro',
        loadChildren: () => __webpack_require__.e(/*! import() | salfaro-salfaro-module */ "salfaro-salfaro-module").then(__webpack_require__.bind(null, /*! ./salfaro/salfaro.module */ "./src/app/tab1/course-list/course-intro-ics51/salfaro/salfaro.module.ts")).then(m => m.SalfaroPageModule)
    },
    {
        path: 'iharris',
        loadChildren: () => __webpack_require__.e(/*! import() | iharris-iharris-module */ "iharris-iharris-module").then(__webpack_require__.bind(null, /*! ./iharris/iharris.module */ "./src/app/tab1/course-list/course-intro-ics51/iharris/iharris.module.ts")).then(m => m.IharrisPageModule)
    }
];
let CourseIntroIcs51PageRoutingModule = class CourseIntroIcs51PageRoutingModule {
};
CourseIntroIcs51PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CourseIntroIcs51PageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics51/course-intro-ics51.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics51/course-intro-ics51.module.ts ***!
  \**********************************************************************************/
/*! exports provided: CourseIntroIcs51PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroIcs51PageModule", function() { return CourseIntroIcs51PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _course_intro_ics51_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course-intro-ics51-routing.module */ "./src/app/tab1/course-list/course-intro-ics51/course-intro-ics51-routing.module.ts");
/* harmony import */ var _course_intro_ics51_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-intro-ics51.page */ "./src/app/tab1/course-list/course-intro-ics51/course-intro-ics51.page.ts");







let CourseIntroIcs51PageModule = class CourseIntroIcs51PageModule {
};
CourseIntroIcs51PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _course_intro_ics51_routing_module__WEBPACK_IMPORTED_MODULE_5__["CourseIntroIcs51PageRoutingModule"]
        ],
        declarations: [_course_intro_ics51_page__WEBPACK_IMPORTED_MODULE_6__["CourseIntroIcs51Page"]]
    })
], CourseIntroIcs51PageModule);



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics51/course-intro-ics51.page.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics51/course-intro-ics51.page.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  text-align: center;\n  color: black;\n  text-decoration: none;\n  box-shadow: 1px 2px 3px #ddd;\n  background: #fff;\n}\n\narticle {\n  text-align: left;\n  background: #fff;\n  text-indent: 2em;\n  margin-left: 1em;\n  margin-right: 1em;\n}\n\nion-button {\n  border-bottom: thin solid #5FBDCE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9jb3Vyc2UtbGlzdC9jb3Vyc2UtaW50cm8taWNzNTEvQzpcXFVzZXJzXFw5ODU1MlxcRGVza3RvcFxcQ1VDU19WMlxcQ1VDU19BUFBfMTIxOFxcQ1VDU19BUFAvc3JjXFxhcHBcXHRhYjFcXGNvdXJzZS1saXN0XFxjb3Vyc2UtaW50cm8taWNzNTFcXGNvdXJzZS1pbnRyby1pY3M1MS5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjEvY291cnNlLWxpc3QvY291cnNlLWludHJvLWljczUxL2NvdXJzZS1pbnRyby1pY3M1MS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUVBLDRCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURHQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHQTtFQUNJLGlDQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC90YWIxL2NvdXJzZS1saXN0L2NvdXJzZS1pbnRyby1pY3M1MS9jb3Vyc2UtaW50cm8taWNzNTEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6cmdiKDAsIDAsIDApOyBcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDJweCAzcHggI2RkZDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAycHggM3B4ICNkZGQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG5cclxuYXJ0aWNsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHRleHQtaW5kZW50OiAyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCAjNUZCRENFO1xyXG59IiwiaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAycHggM3B4ICNkZGQ7XG4gIGJveC1zaGFkb3c6IDFweCAycHggM3B4ICNkZGQ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbmFydGljbGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0ZXh0LWluZGVudDogMmVtO1xuICBtYXJnaW4tbGVmdDogMWVtO1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgIzVGQkRDRTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics51/course-intro-ics51.page.ts":
/*!********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics51/course-intro-ics51.page.ts ***!
  \********************************************************************************/
/*! exports provided: CourseIntroIcs51Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroIcs51Page", function() { return CourseIntroIcs51Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CourseIntroIcs51Page = class CourseIntroIcs51Page {
    constructor() { }
    ngOnInit() {
    }
};
CourseIntroIcs51Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-course-intro-ics51',
        template: __webpack_require__(/*! raw-loader!./course-intro-ics51.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-ics51/course-intro-ics51.page.html"),
        styles: [__webpack_require__(/*! ./course-intro-ics51.page.scss */ "./src/app/tab1/course-list/course-intro-ics51/course-intro-ics51.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CourseIntroIcs51Page);



/***/ })

}]);
//# sourceMappingURL=course-intro-ics51-course-intro-ics51-module-es2015.js.map