(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["course-intro-cs178-course-intro-cs178-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-cs178/course-intro-cs178.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/course-list/course-intro-cs178/course-intro-cs178.page.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list\">\r\n          返回课程列表\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"\">\r\n          返回首页\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <body class=\"user-select\">\r\n    <style type=\"text/css\">\r\n      /* not available for firefox & IE explorer */\r\n      #box {\r\n          width: 100%;\r\n          height: 88%;\r\n          overflow-x: hidden;\r\n          overflow-y: scroll;\r\n          line-height: 30px;\r\n          text-align: center;\r\n      }\r\n      #box::-webkit-scrollbar {\r\n          display: none;\r\n          visibility: hidden;\r\n      }\r\n    </style>\r\n    <div id=\"box\" class=\"panel-body\">\r\n      <div style=\"border: 1px  #000000; width: 98%; margin: 0 auto;\">\r\n        <span>\r\n          <article class=\"article1\">\r\n            <header>\r\n                <h2>\r\n                  <a style=\"color:#5FBDCE; text-decoration: none;\">\r\n                    CS 178 Machine Learning and Data-Mining\r\n                  </a>\r\n                </h2>\r\n            </header>\r\n            <ion-list>\r\n              <ion-item href='course-list/course-intro-cs178/esudderth'>\r\n                <ion-icon slot=\"start\" color=\"medium\" name=\"star\"></ion-icon>\r\n                <ion-label>Erik Sudderth</ion-label>\r\n              </ion-item>\r\n              <ion-item href='course-list/course-intro-cs178/athomas'>\r\n                <ion-icon slot=\"start\" color=\"medium\" name=\"star\"></ion-icon>\r\n                <ion-label>Ihler, Alexander Thomas</ion-label>\r\n              </ion-item>\r\n            </ion-list>\r\n          </article>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs178/course-intro-cs178-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs178/course-intro-cs178-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: CourseIntroCs178PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroCs178PageRoutingModule", function() { return CourseIntroCs178PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _course_intro_cs178_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-intro-cs178.page */ "./src/app/tab1/course-list/course-intro-cs178/course-intro-cs178.page.ts");




var routes = [
    {
        path: '',
        component: _course_intro_cs178_page__WEBPACK_IMPORTED_MODULE_3__["CourseIntroCs178Page"]
    },
    {
        path: 'esudderth',
        loadChildren: function () { return __webpack_require__.e(/*! import() | esudderth-esudderth-module */ "esudderth-esudderth-module").then(__webpack_require__.bind(null, /*! ./esudderth/esudderth.module */ "./src/app/tab1/course-list/course-intro-cs178/esudderth/esudderth.module.ts")).then(function (m) { return m.EsudderthPageModule; }); }
    },
    {
        path: 'athomas',
        loadChildren: function () { return __webpack_require__.e(/*! import() | athomas-athomas-module */ "athomas-athomas-module").then(__webpack_require__.bind(null, /*! ./athomas/athomas.module */ "./src/app/tab1/course-list/course-intro-cs178/athomas/athomas.module.ts")).then(function (m) { return m.AthomasPageModule; }); }
    }
];
var CourseIntroCs178PageRoutingModule = /** @class */ (function () {
    function CourseIntroCs178PageRoutingModule() {
    }
    CourseIntroCs178PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CourseIntroCs178PageRoutingModule);
    return CourseIntroCs178PageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs178/course-intro-cs178.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs178/course-intro-cs178.module.ts ***!
  \**********************************************************************************/
/*! exports provided: CourseIntroCs178PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroCs178PageModule", function() { return CourseIntroCs178PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _course_intro_cs178_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course-intro-cs178-routing.module */ "./src/app/tab1/course-list/course-intro-cs178/course-intro-cs178-routing.module.ts");
/* harmony import */ var _course_intro_cs178_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-intro-cs178.page */ "./src/app/tab1/course-list/course-intro-cs178/course-intro-cs178.page.ts");







var CourseIntroCs178PageModule = /** @class */ (function () {
    function CourseIntroCs178PageModule() {
    }
    CourseIntroCs178PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _course_intro_cs178_routing_module__WEBPACK_IMPORTED_MODULE_5__["CourseIntroCs178PageRoutingModule"]
            ],
            declarations: [_course_intro_cs178_page__WEBPACK_IMPORTED_MODULE_6__["CourseIntroCs178Page"]]
        })
    ], CourseIntroCs178PageModule);
    return CourseIntroCs178PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs178/course-intro-cs178.page.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs178/course-intro-cs178.page.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\r\n  max-height: 35vh;\r\n  overflow: hidden;\r\n}\r\n\r\n.cucs-logo{\r\n  background: url('logo.png') no-repeat;\r\n  float: center;\r\n  vertical-align: bottom;\r\n  width: 100%;\r\n  height: 82px;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  color:rgb(0, 0, 0); \r\n  text-decoration: none;\r\n  box-shadow: 1px 2px 3px #ddd;\r\n  background: #fff;\r\n}\r\n\r\narticle {\r\n  text-align: left;\r\n  background: #fff;\r\n  text-indent: 2em;\r\n  margin-left: 1em;\r\n  margin-right: 1em;\r\n}\r\n\r\nion-button {\r\n  border-bottom: thin solid #5FBDCE;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQ0FBZ0Q7RUFDaEQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFFckIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC90YWIxL2NvdXJzZS1saXN0L2NvdXJzZS1pbnRyby1jczE3OC9jb3Vyc2UtaW50cm8tY3MxNzgucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmN1Y3MtbG9nb3tcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL2xvZ28ucG5nXCIpIG5vLXJlcGVhdDtcclxuICBmbG9hdDogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA4MnB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOnJnYigwLCAwLCAwKTsgXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDJweCAzcHggI2RkZDtcclxuICBib3gtc2hhZG93OiAxcHggMnB4IDNweCAjZGRkO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcblxyXG5hcnRpY2xlIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgdGV4dC1pbmRlbnQ6IDJlbTtcclxuICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gIG1hcmdpbi1yaWdodDogMWVtO1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkICM1RkJEQ0U7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs178/course-intro-cs178.page.ts":
/*!********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs178/course-intro-cs178.page.ts ***!
  \********************************************************************************/
/*! exports provided: CourseIntroCs178Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroCs178Page", function() { return CourseIntroCs178Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CourseIntroCs178Page = /** @class */ (function () {
    function CourseIntroCs178Page() {
    }
    CourseIntroCs178Page.prototype.ngOnInit = function () {
    };
    CourseIntroCs178Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-intro-cs178',
            template: __webpack_require__(/*! raw-loader!./course-intro-cs178.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-cs178/course-intro-cs178.page.html"),
            styles: [__webpack_require__(/*! ./course-intro-cs178.page.scss */ "./src/app/tab1/course-list/course-intro-cs178/course-intro-cs178.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CourseIntroCs178Page);
    return CourseIntroCs178Page;
}());



/***/ })

}]);
//# sourceMappingURL=course-intro-cs178-course-intro-cs178-module-es5.js.map