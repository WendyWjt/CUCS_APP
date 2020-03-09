(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["course-intro-ics45c-course-intro-ics45c-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-ics45c/course-intro-ics45c.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/course-list/course-intro-ics45c/course-intro-ics45c.page.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list\">\n          返回课程列表\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"\">\n          返回首页\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <body class=\"user-select\">\n    <style type=\"text/css\">\n      /* not available for firefox & IE explorer */\n      #box {\n          width: 100%;\n          height: 88%;\n          overflow-x: hidden;\n          overflow-y: scroll;\n          line-height: 30px;\n          text-align: center;\n      }\n      #box::-webkit-scrollbar {\n          display: none;\n          visibility: hidden;\n      }\n    </style>\n    <div id=\"box\" class=\"panel-body\">\n      <div style=\"border: 1px  #000000; width: 98%; margin: 0 auto;\">\n        <span>\n          <article class=\"article1\">\n            <header>\n                <h2>\n                  <a style=\"color:#5FBDCE; text-decoration: none;\">\n                    ICS 45C Programming in C/C++ as a Second Language\n                  </a>\n                </h2>\n            </header>\n            <ion-list>\n              <ion-item href='course-list/course-intro-ics45c/athornton'>\n                <ion-icon slot=\"start\" color=\"medium\" name=\"star\"></ion-icon>\n                <ion-label>Alex Thornton</ion-label>\n              </ion-item>\n              <ion-item href='course-list/course-intro-ics45c/rklefstad'>\n                <ion-icon slot=\"start\" color=\"medium\" name=\"star\"></ion-icon>\n                <ion-label>Raymond Klefstad</ion-label>\n              </ion-item>\n              <ion-item href='course-list/course-intro-ics45c/zwu'>\n                <ion-icon slot=\"start\" color=\"medium\" name=\"star\"></ion-icon>\n                <ion-label>Zhengping Wu</ion-label>\n              </ion-item>\n            </ion-list>\n          </article>\n        </span>\n      </div>\n    </div>\n  </body>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics45c/course-intro-ics45c-routing.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics45c/course-intro-ics45c-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: CourseIntroIcs45cPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroIcs45cPageRoutingModule", function() { return CourseIntroIcs45cPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _course_intro_ics45c_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-intro-ics45c.page */ "./src/app/tab1/course-list/course-intro-ics45c/course-intro-ics45c.page.ts");




var routes = [
    {
        path: '',
        component: _course_intro_ics45c_page__WEBPACK_IMPORTED_MODULE_3__["CourseIntroIcs45cPage"]
    },
    {
        path: 'rklefstad',
        loadChildren: function () { return __webpack_require__.e(/*! import() | rklefstad-rklefstad-module */ "rklefstad-rklefstad-module").then(__webpack_require__.bind(null, /*! ./rklefstad/rklefstad.module */ "./src/app/tab1/course-list/course-intro-ics45c/rklefstad/rklefstad.module.ts")).then(function (m) { return m.RklefstadPageModule; }); }
    },
    {
        path: 'zwu',
        loadChildren: function () { return __webpack_require__.e(/*! import() | zwu-zwu-module */ "zwu-zwu-module").then(__webpack_require__.bind(null, /*! ./zwu/zwu.module */ "./src/app/tab1/course-list/course-intro-ics45c/zwu/zwu.module.ts")).then(function (m) { return m.ZwuPageModule; }); }
    },
    {
        path: 'athornton',
        loadChildren: function () { return __webpack_require__.e(/*! import() | athornton-athornton-module */ "athornton-athornton-module").then(__webpack_require__.bind(null, /*! ./athornton/athornton.module */ "./src/app/tab1/course-list/course-intro-ics45c/athornton/athornton.module.ts")).then(function (m) { return m.AthorntonPageModule; }); }
    }
];
var CourseIntroIcs45cPageRoutingModule = /** @class */ (function () {
    function CourseIntroIcs45cPageRoutingModule() {
    }
    CourseIntroIcs45cPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CourseIntroIcs45cPageRoutingModule);
    return CourseIntroIcs45cPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics45c/course-intro-ics45c.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics45c/course-intro-ics45c.module.ts ***!
  \************************************************************************************/
/*! exports provided: CourseIntroIcs45cPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroIcs45cPageModule", function() { return CourseIntroIcs45cPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _course_intro_ics45c_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course-intro-ics45c-routing.module */ "./src/app/tab1/course-list/course-intro-ics45c/course-intro-ics45c-routing.module.ts");
/* harmony import */ var _course_intro_ics45c_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-intro-ics45c.page */ "./src/app/tab1/course-list/course-intro-ics45c/course-intro-ics45c.page.ts");







var CourseIntroIcs45cPageModule = /** @class */ (function () {
    function CourseIntroIcs45cPageModule() {
    }
    CourseIntroIcs45cPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _course_intro_ics45c_routing_module__WEBPACK_IMPORTED_MODULE_5__["CourseIntroIcs45cPageRoutingModule"]
            ],
            declarations: [_course_intro_ics45c_page__WEBPACK_IMPORTED_MODULE_6__["CourseIntroIcs45cPage"]]
        })
    ], CourseIntroIcs45cPageModule);
    return CourseIntroIcs45cPageModule;
}());



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics45c/course-intro-ics45c.page.scss":
/*!************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics45c/course-intro-ics45c.page.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\r\n  max-height: 35vh;\r\n  overflow: hidden;\r\n}\r\n\r\n.cucs-logo{\r\n  background: url('logo.png') no-repeat;\r\n  float: center;\r\n  vertical-align: bottom;\r\n  width: 100%;\r\n  height: 82px;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  color:rgb(0, 0, 0); \r\n  text-decoration: none;\r\n  box-shadow: 1px 2px 3px #ddd;\r\n  background: #fff;\r\n}\r\n\r\narticle {\r\n  text-align: left;\r\n  background: #fff;\r\n  text-indent: 2em;\r\n  margin-left: 1em;\r\n  margin-right: 1em;\r\n}\r\n\r\nion-button {\r\n  border-bottom: thin solid #5FBDCE;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQ0FBZ0Q7RUFDaEQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFFckIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC90YWIxL2NvdXJzZS1saXN0L2NvdXJzZS1pbnRyby1pY3M0NWMvY291cnNlLWludHJvLWljczQ1Yy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGltZyB7XHJcbiAgbWF4LWhlaWdodDogMzV2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY3Vjcy1sb2dve1xyXG4gIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvbG9nby5wbmdcIikgbm8tcmVwZWF0O1xyXG4gIGZsb2F0OiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDgycHg7XHJcbn1cclxuXHJcbmgyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6cmdiKDAsIDAsIDApOyBcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMnB4IDNweCAjZGRkO1xyXG4gIGJveC1zaGFkb3c6IDFweCAycHggM3B4ICNkZGQ7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuXHJcbmFydGljbGUge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB0ZXh0LWluZGVudDogMmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgIzVGQkRDRTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics45c/course-intro-ics45c.page.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics45c/course-intro-ics45c.page.ts ***!
  \**********************************************************************************/
/*! exports provided: CourseIntroIcs45cPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroIcs45cPage", function() { return CourseIntroIcs45cPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CourseIntroIcs45cPage = /** @class */ (function () {
    function CourseIntroIcs45cPage() {
    }
    CourseIntroIcs45cPage.prototype.ngOnInit = function () {
    };
    CourseIntroIcs45cPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-intro-ics45c',
            template: __webpack_require__(/*! raw-loader!./course-intro-ics45c.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-ics45c/course-intro-ics45c.page.html"),
            styles: [__webpack_require__(/*! ./course-intro-ics45c.page.scss */ "./src/app/tab1/course-list/course-intro-ics45c/course-intro-ics45c.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CourseIntroIcs45cPage);
    return CourseIntroIcs45cPage;
}());



/***/ })

}]);
//# sourceMappingURL=course-intro-ics45c-course-intro-ics45c-module-es5.js.map