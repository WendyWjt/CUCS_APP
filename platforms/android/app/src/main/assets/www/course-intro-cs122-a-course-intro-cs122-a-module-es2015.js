(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["course-intro-cs122-a-course-intro-cs122-a-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-cs122-a/course-intro-cs122-a.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/course-list/course-intro-cs122-a/course-intro-cs122-a.page.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list\">\r\n          返回课程列表\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"\">\r\n          返回首页\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <body class=\"user-select\">\r\n    <style type=\"text/css\">\r\n      /* not available for firefox & IE explorer */\r\n      #box {\r\n          width: 100%;\r\n          height: 88%;\r\n          overflow-x: hidden;\r\n          overflow-y: scroll;\r\n          line-height: 30px;\r\n          text-align: center;\r\n      }\r\n      #box::-webkit-scrollbar {\r\n          display: none;\r\n          visibility: hidden;\r\n      }\r\n    </style>\r\n    <div id=\"box\" class=\"panel-body\">\r\n      <div style=\"border: 1px  #000000; width: 98%; margin: 0 auto;\">\r\n        <span>\r\n          <article class=\"article1\">\r\n            <header>\r\n                <h2>\r\n                  <a style=\"color:#5FBDCE; text-decoration: none;\">\r\n                    CS 122A Introduction to Data Management\r\n                  </a>\r\n                </h2>\r\n            </header>\r\n            <ion-list>\r\n              <ion-item href='course-list/course-intro-cs122-a/mcarey'>\r\n                <ion-icon slot=\"start\" color=\"medium\" name=\"star\"></ion-icon>\r\n                <ion-label>Mike Carey</ion-label>\r\n              </ion-item>\r\n              <ion-item href='course-list/course-intro-cs122-a/cysheu'>\r\n                <ion-icon slot=\"start\" color=\"medium\" name=\"star\"></ion-icon>\r\n                <ion-label>Chen-Yu (Phillip) Sheu</ion-label>\r\n              </ion-item>\r\n              <ion-item href='course-list/course-intro-cs122-a/jlwma'>\r\n                <ion-icon slot=\"start\" color=\"medium\" name=\"star\"></ion-icon>\r\n                <ion-label>Jennifer Lee Wong-ma</ion-label>\r\n              </ion-item>\r\n            </ion-list>\r\n          </article>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs122-a/course-intro-cs122-a-routing.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs122-a/course-intro-cs122-a-routing.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: CourseIntroCs122APageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroCs122APageRoutingModule", function() { return CourseIntroCs122APageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _course_intro_cs122_a_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-intro-cs122-a.page */ "./src/app/tab1/course-list/course-intro-cs122-a/course-intro-cs122-a.page.ts");




const routes = [
    {
        path: '',
        component: _course_intro_cs122_a_page__WEBPACK_IMPORTED_MODULE_3__["CourseIntroCs122APage"]
    },
    {
        path: 'mcarey',
        loadChildren: () => __webpack_require__.e(/*! import() | mcarey-mcarey-module */ "mcarey-mcarey-module").then(__webpack_require__.bind(null, /*! ./mcarey/mcarey.module */ "./src/app/tab1/course-list/course-intro-cs122-a/mcarey/mcarey.module.ts")).then(m => m.McareyPageModule)
    },
    {
        path: 'cysheu',
        loadChildren: () => __webpack_require__.e(/*! import() | cysheu-cysheu-module */ "cysheu-cysheu-module").then(__webpack_require__.bind(null, /*! ./cysheu/cysheu.module */ "./src/app/tab1/course-list/course-intro-cs122-a/cysheu/cysheu.module.ts")).then(m => m.CysheuPageModule)
    },
    {
        path: 'jlwma',
        loadChildren: () => __webpack_require__.e(/*! import() | jlwma-jlwma-module */ "jlwma-jlwma-module").then(__webpack_require__.bind(null, /*! ./jlwma/jlwma.module */ "./src/app/tab1/course-list/course-intro-cs122-a/jlwma/jlwma.module.ts")).then(m => m.JlwmaPageModule)
    }
];
let CourseIntroCs122APageRoutingModule = class CourseIntroCs122APageRoutingModule {
};
CourseIntroCs122APageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CourseIntroCs122APageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs122-a/course-intro-cs122-a.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs122-a/course-intro-cs122-a.module.ts ***!
  \**************************************************************************************/
/*! exports provided: CourseIntroCs122APageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroCs122APageModule", function() { return CourseIntroCs122APageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _course_intro_cs122_a_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course-intro-cs122-a-routing.module */ "./src/app/tab1/course-list/course-intro-cs122-a/course-intro-cs122-a-routing.module.ts");
/* harmony import */ var _course_intro_cs122_a_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-intro-cs122-a.page */ "./src/app/tab1/course-list/course-intro-cs122-a/course-intro-cs122-a.page.ts");







let CourseIntroCs122APageModule = class CourseIntroCs122APageModule {
};
CourseIntroCs122APageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _course_intro_cs122_a_routing_module__WEBPACK_IMPORTED_MODULE_5__["CourseIntroCs122APageRoutingModule"]
        ],
        declarations: [_course_intro_cs122_a_page__WEBPACK_IMPORTED_MODULE_6__["CourseIntroCs122APage"]]
    })
], CourseIntroCs122APageModule);



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs122-a/course-intro-cs122-a.page.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs122-a/course-intro-cs122-a.page.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\r\n  max-height: 35vh;\r\n  overflow: hidden;\r\n}\r\n\r\n.cucs-logo{\r\n  background: url('logo.png') no-repeat;\r\n  float: center;\r\n  vertical-align: bottom;\r\n  width: 100%;\r\n  height: 82px;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  color:rgb(0, 0, 0); \r\n  text-decoration: none;\r\n  box-shadow: 1px 2px 3px #ddd;\r\n  background: #fff;\r\n}\r\n\r\narticle {\r\n  text-align: left;\r\n  background: #fff;\r\n  text-indent: 2em;\r\n  margin-left: 1em;\r\n  margin-right: 1em;\r\n}\r\n\r\nion-button {\r\n  border-bottom: thin solid #5FBDCE;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQ0FBZ0Q7RUFDaEQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFFckIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC90YWIxL2NvdXJzZS1saXN0L2NvdXJzZS1pbnRyby1jczEyMi1hL2NvdXJzZS1pbnRyby1jczEyMi1hLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcclxuICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jdWNzLWxvZ297XHJcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9sb2dvLnBuZ1wiKSBuby1yZXBlYXQ7XHJcbiAgZmxvYXQ6IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogODJweDtcclxufVxyXG5cclxuaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjpyZ2IoMCwgMCwgMCk7IFxyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAycHggM3B4ICNkZGQ7XHJcbiAgYm94LXNoYWRvdzogMXB4IDJweCAzcHggI2RkZDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG5cclxuYXJ0aWNsZSB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHRleHQtaW5kZW50OiAyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCAjNUZCRENFO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs122-a/course-intro-cs122-a.page.ts":
/*!************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs122-a/course-intro-cs122-a.page.ts ***!
  \************************************************************************************/
/*! exports provided: CourseIntroCs122APage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroCs122APage", function() { return CourseIntroCs122APage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CourseIntroCs122APage = class CourseIntroCs122APage {
    constructor() { }
    ngOnInit() {
    }
};
CourseIntroCs122APage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-course-intro-cs122-a',
        template: __webpack_require__(/*! raw-loader!./course-intro-cs122-a.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-cs122-a/course-intro-cs122-a.page.html"),
        styles: [__webpack_require__(/*! ./course-intro-cs122-a.page.scss */ "./src/app/tab1/course-list/course-intro-cs122-a/course-intro-cs122-a.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CourseIntroCs122APage);



/***/ })

}]);
//# sourceMappingURL=course-intro-cs122-a-course-intro-cs122-a-module-es2015.js.map