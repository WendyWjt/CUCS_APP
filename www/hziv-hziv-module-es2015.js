(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hziv-hziv-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-infmatx43/hziv/hziv.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/course-list/course-intro-infmatx43/hziv/hziv.page.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list/course-intro-infmatx43\">\n          返回IN4MATX 43列表\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list\">\n          返回课程列表\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"\">\n          返回首页\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <body class=\"user-select\">\n    <style type=\"text/css\">\n      /* not available for firefox & IE explorer */\n      #box {\n          width: 100%;\n          height: 88%;\n          overflow-x: hidden;\n          overflow-y: scroll;\n          line-height: 30px;\n          text-align: center;\n      }\n      #box::-webkit-scrollbar {\n          display: none;\n          visibility: hidden;\n      }\n    </style>\n    <div id=\"box\" class=\"panel-body\">\n      <div style=\"border: 1px  #000000; width: 98%; margin: 0 auto;\">\n        <span>\n          <article class=\"article1\">\n            <header>\n                <h2>\n                  <a style=\"color:#5FBDCE; text-decoration: none;\">\n                    IN4MATX 43 INTRO TO SE - Hadar Ziv\n                  </a>\n                </h2>\n            </header>\n              内容：软件文档\n              <br>Professor:  Hadar Ziv\n\t\t\t\t\t\t\t<br>难易程度：★★\n\t\t\t\t\t\t\t<br>TA: -\n\t\t\t\t\t\t\t<br>Discussion: 有\n\t\t\t\t\t\t\t<br>Piazza: 有\n\t\t\t\t\t\t\t<br>Textbook: Tsui, Karam, Bernal, Essentials of Software Engineering (第三版)\n\t\t\t\t\t\t\t<br>Rate my professor 评分: 3.5\n\t\t\t\t\t\t\t<br>http://www.ratemyprofessors.com/ShowRatings.jsp?tid=421976\n\t\t\t\t\t\t\t<br>这个教授用的全都是Emily Navarro的教材，本人比较懒，上课支支吾吾有点无聊。所以建议IN4MATX 43不要选这个教授。\n\t\t\t\t\t\t\t<br>Grading Criteria:\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>· Quizzes: 12%\n\t\t\t\t\t\t\t<br>(total for all five quizzes; each student's lowest quiz score will be dropped; there might be QUIZ 6, time permitting)\n\t\t\t\t\t\t\t<br>· Midterm: 20%\n\t\t\t\t\t\t\t<br>· Final: 30%\n\t\t\t\t\t\t\t<br>· Three homeworks: 30%\n\t\t\t\t\t\t\t<br>(10% each). Homework \"0\": 5%\n\t\t\t\t\t\t\t<br>· Class attendance and participation: 3%\n\t\t\t\t\t\t\t<br>· Submitting the EEE course evaluation: 0.5% extra credit\n          </article>\n        </span>\n      </div>\n    </div>\n  </body>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-infmatx43/hziv/hziv-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-infmatx43/hziv/hziv-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: HzivPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HzivPageRoutingModule", function() { return HzivPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _hziv_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hziv.page */ "./src/app/tab1/course-list/course-intro-infmatx43/hziv/hziv.page.ts");




const routes = [
    {
        path: '',
        component: _hziv_page__WEBPACK_IMPORTED_MODULE_3__["HzivPage"]
    }
];
let HzivPageRoutingModule = class HzivPageRoutingModule {
};
HzivPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HzivPageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-infmatx43/hziv/hziv.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-infmatx43/hziv/hziv.module.ts ***!
  \*****************************************************************************/
/*! exports provided: HzivPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HzivPageModule", function() { return HzivPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _hziv_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hziv-routing.module */ "./src/app/tab1/course-list/course-intro-infmatx43/hziv/hziv-routing.module.ts");
/* harmony import */ var _hziv_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hziv.page */ "./src/app/tab1/course-list/course-intro-infmatx43/hziv/hziv.page.ts");







let HzivPageModule = class HzivPageModule {
};
HzivPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _hziv_routing_module__WEBPACK_IMPORTED_MODULE_5__["HzivPageRoutingModule"]
        ],
        declarations: [_hziv_page__WEBPACK_IMPORTED_MODULE_6__["HzivPage"]]
    })
], HzivPageModule);



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-infmatx43/hziv/hziv.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-infmatx43/hziv/hziv.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\r\n  max-height: 35vh;\r\n  overflow: hidden;\r\n}\r\n\r\n.cucs-logo{\r\n  background: url('logo.png') no-repeat;\r\n  float: center;\r\n  vertical-align: bottom;\r\n  width: 100%;\r\n  height: 82px;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  color:rgb(0, 0, 0); \r\n  text-decoration: none;\r\n  box-shadow: 1px 2px 3px #ddd;\r\n  background: #fff;\r\n}\r\n\r\narticle {\r\n  text-align: left;\r\n  background: #fff;\r\n  text-indent: 2em;\r\n  margin-left: 1em;\r\n  margin-right: 1em;\r\n}\r\n\r\nion-button {\r\n  border-bottom: thin solid #5FBDCE;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQ0FBZ0Q7RUFDaEQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFFckIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC90YWIxL2NvdXJzZS1saXN0L2NvdXJzZS1pbnRyby1pbmZtYXR4NDMvaHppdi9oeml2LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcclxuICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jdWNzLWxvZ297XHJcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9sb2dvLnBuZ1wiKSBuby1yZXBlYXQ7XHJcbiAgZmxvYXQ6IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogODJweDtcclxufVxyXG5cclxuaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjpyZ2IoMCwgMCwgMCk7IFxyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAycHggM3B4ICNkZGQ7XHJcbiAgYm94LXNoYWRvdzogMXB4IDJweCAzcHggI2RkZDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG5cclxuYXJ0aWNsZSB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHRleHQtaW5kZW50OiAyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCAjNUZCRENFO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-infmatx43/hziv/hziv.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-infmatx43/hziv/hziv.page.ts ***!
  \***************************************************************************/
/*! exports provided: HzivPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HzivPage", function() { return HzivPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HzivPage = class HzivPage {
    constructor() { }
    ngOnInit() {
    }
};
HzivPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hziv',
        template: __webpack_require__(/*! raw-loader!./hziv.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-infmatx43/hziv/hziv.page.html"),
        styles: [__webpack_require__(/*! ./hziv.page.scss */ "./src/app/tab1/course-list/course-intro-infmatx43/hziv/hziv.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HzivPage);



/***/ })

}]);
//# sourceMappingURL=hziv-hziv-module-es2015.js.map