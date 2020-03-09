(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["course-intro-ics139w-course-intro-ics139w-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-ics139w/course-intro-ics139w.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/course-list/course-intro-ics139w/course-intro-ics139w.page.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list\">\n          返回课程列表\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"\">\n          返回首页\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <body class=\"user-select\">\n    <style type=\"text/css\">\n      /* not available for firefox & IE explorer */\n      #box {\n          width: 100%;\n          height: 88%;\n          overflow-x: hidden;\n          overflow-y: scroll;\n          line-height: 30px;\n          text-align: center;\n      }\n      #box::-webkit-scrollbar {\n          display: none;\n          visibility: hidden;\n      }\n    </style>\n    <div id=\"box\" class=\"panel-body\">\n      <div style=\"border: 1px  #000000; width: 98%; margin: 0 auto;\">\n        <span>\n          <article class=\"article1\">\n            <header>\n                <h2>\n                  <a style=\"color:#5FBDCE; text-decoration: none;\">\n                    ICS 139W Critical Writing on Information Technology\n                  </a>\n                </h2>\n            </header>\n            <ion-list>\n              <ion-item href='course-list/course-intro-ics139w/khermans'>\n                <ion-icon slot=\"start\" color=\"medium\" name=\"star\"></ion-icon>\n                <ion-label>Kimberly Hermans</ion-label>\n              </ion-item>\n              <ion-item href='course-list/course-intro-ics139w/salfaro'>\n                <ion-icon slot=\"start\" color=\"medium\" name=\"star\"></ion-icon>\n                <ion-label>Shannon Alfaro</ion-label>\n              </ion-item>\n              <ion-item href='course-list/course-intro-ics139w/rblack'>\n                <ion-icon slot=\"start\" color=\"medium\" name=\"star\"></ion-icon>\n                <ion-label>Rebecca Black</ion-label>\n              </ion-item>\n            </ion-list>\n          </article>\n        </span>\n      </div>\n    </div>\n  </body>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics139w/course-intro-ics139w-routing.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics139w/course-intro-ics139w-routing.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: CourseIntroIcs139wPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroIcs139wPageRoutingModule", function() { return CourseIntroIcs139wPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _course_intro_ics139w_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-intro-ics139w.page */ "./src/app/tab1/course-list/course-intro-ics139w/course-intro-ics139w.page.ts");




var routes = [
    {
        path: '',
        component: _course_intro_ics139w_page__WEBPACK_IMPORTED_MODULE_3__["CourseIntroIcs139wPage"]
    },
    {
        path: 'khermans',
        loadChildren: function () { return __webpack_require__.e(/*! import() | khermans-khermans-module */ "khermans-khermans-module").then(__webpack_require__.bind(null, /*! ./khermans/khermans.module */ "./src/app/tab1/course-list/course-intro-ics139w/khermans/khermans.module.ts")).then(function (m) { return m.KhermansPageModule; }); }
    },
    {
        path: 'salfaro',
        loadChildren: function () { return __webpack_require__.e(/*! import() | salfaro-salfaro-module */ "salfaro-salfaro-module").then(__webpack_require__.bind(null, /*! ./salfaro/salfaro.module */ "./src/app/tab1/course-list/course-intro-ics139w/salfaro/salfaro.module.ts")).then(function (m) { return m.SalfaroPageModule; }); }
    },
    {
        path: 'rblack',
        loadChildren: function () { return __webpack_require__.e(/*! import() | rblack-rblack-module */ "rblack-rblack-module").then(__webpack_require__.bind(null, /*! ./rblack/rblack.module */ "./src/app/tab1/course-list/course-intro-ics139w/rblack/rblack.module.ts")).then(function (m) { return m.RblackPageModule; }); }
    }
];
var CourseIntroIcs139wPageRoutingModule = /** @class */ (function () {
    function CourseIntroIcs139wPageRoutingModule() {
    }
    CourseIntroIcs139wPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CourseIntroIcs139wPageRoutingModule);
    return CourseIntroIcs139wPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics139w/course-intro-ics139w.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics139w/course-intro-ics139w.module.ts ***!
  \**************************************************************************************/
/*! exports provided: CourseIntroIcs139wPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroIcs139wPageModule", function() { return CourseIntroIcs139wPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _course_intro_ics139w_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course-intro-ics139w-routing.module */ "./src/app/tab1/course-list/course-intro-ics139w/course-intro-ics139w-routing.module.ts");
/* harmony import */ var _course_intro_ics139w_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-intro-ics139w.page */ "./src/app/tab1/course-list/course-intro-ics139w/course-intro-ics139w.page.ts");







var CourseIntroIcs139wPageModule = /** @class */ (function () {
    function CourseIntroIcs139wPageModule() {
    }
    CourseIntroIcs139wPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _course_intro_ics139w_routing_module__WEBPACK_IMPORTED_MODULE_5__["CourseIntroIcs139wPageRoutingModule"]
            ],
            declarations: [_course_intro_ics139w_page__WEBPACK_IMPORTED_MODULE_6__["CourseIntroIcs139wPage"]]
        })
    ], CourseIntroIcs139wPageModule);
    return CourseIntroIcs139wPageModule;
}());



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics139w/course-intro-ics139w.page.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics139w/course-intro-ics139w.page.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\r\n  max-height: 35vh;\r\n  overflow: hidden;\r\n}\r\n\r\n.cucs-logo{\r\n  background: url('logo.png') no-repeat;\r\n  float: center;\r\n  vertical-align: bottom;\r\n  width: 100%;\r\n  height: 82px;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  color:rgb(0, 0, 0); \r\n  text-decoration: none;\r\n  box-shadow: 1px 2px 3px #ddd;\r\n  background: #fff;\r\n}\r\n\r\narticle {\r\n  text-align: left;\r\n  background: #fff;\r\n  text-indent: 2em;\r\n  margin-left: 1em;\r\n  margin-right: 1em;\r\n}\r\n\r\nion-button {\r\n  border-bottom: thin solid #5FBDCE;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQ0FBZ0Q7RUFDaEQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFFckIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC90YWIxL2NvdXJzZS1saXN0L2NvdXJzZS1pbnRyby1pY3MxMzl3L2NvdXJzZS1pbnRyby1pY3MxMzl3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcclxuICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jdWNzLWxvZ297XHJcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9sb2dvLnBuZ1wiKSBuby1yZXBlYXQ7XHJcbiAgZmxvYXQ6IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogODJweDtcclxufVxyXG5cclxuaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjpyZ2IoMCwgMCwgMCk7IFxyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAycHggM3B4ICNkZGQ7XHJcbiAgYm94LXNoYWRvdzogMXB4IDJweCAzcHggI2RkZDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG5cclxuYXJ0aWNsZSB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHRleHQtaW5kZW50OiAyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCAjNUZCRENFO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics139w/course-intro-ics139w.page.ts":
/*!************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics139w/course-intro-ics139w.page.ts ***!
  \************************************************************************************/
/*! exports provided: CourseIntroIcs139wPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroIcs139wPage", function() { return CourseIntroIcs139wPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CourseIntroIcs139wPage = /** @class */ (function () {
    function CourseIntroIcs139wPage() {
    }
    CourseIntroIcs139wPage.prototype.ngOnInit = function () {
    };
    CourseIntroIcs139wPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-intro-ics139w',
            template: __webpack_require__(/*! raw-loader!./course-intro-ics139w.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-ics139w/course-intro-ics139w.page.html"),
            styles: [__webpack_require__(/*! ./course-intro-ics139w.page.scss */ "./src/app/tab1/course-list/course-intro-ics139w/course-intro-ics139w.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CourseIntroIcs139wPage);
    return CourseIntroIcs139wPage;
}());



/***/ })

}]);
//# sourceMappingURL=course-intro-ics139w-course-intro-ics139w-module-es5.js.map