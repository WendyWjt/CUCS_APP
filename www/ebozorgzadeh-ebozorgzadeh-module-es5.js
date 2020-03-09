(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ebozorgzadeh-ebozorgzadeh-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-ics51/ebozorgzadeh/ebozorgzadeh.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/course-list/course-intro-ics51/ebozorgzadeh/ebozorgzadeh.page.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list/course-intro-ics51\">\n          返回ICS 51列表\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list\">\n          返回课程列表\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"\">\n          返回首页\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <body class=\"user-select\">\n    <style type=\"text/css\">\n      /* not available for firefox & IE explorer */\n      #box {\n          width: 100%;\n          height: 88%;\n          overflow-x: hidden;\n          overflow-y: scroll;\n          line-height: 30px;\n          text-align: center;\n      }\n      #box::-webkit-scrollbar {\n          display: none;\n          visibility: hidden;\n      }\n    </style>\n    <div id=\"box\" class=\"panel-body\">\n      <div style=\"border: 1px  #000000; width: 98%; margin: 0 auto;\">\n        <span>\n          <article class=\"article1\">\n            <header>\n                <h2>\n                  <a style=\"color:#5FBDCE; text-decoration: none;\">\n                    ICS 51 Intro Computer Organization - Eli Bozorgzadeh\n                  </a>\n                </h2>\n            </header>\n              内容：学习基础汇编语言MIPS、硬件知识\n              <br>难易程度：★★★\n\t\t\t\t\t\t\t<br>先修课程：ics31 or cse 41 or cse 21 or ics21 or in4matx 42\n\t\t\t\t\t\t\t<br>And ics 6B\n\t\t\t\t\t\t\t<br>TA: Neftali Wtkinson, Majid Shoushtari, Shreya Chippagiri\n\t\t\t\t\t\t\t<br>Discussion: 这节课discussion和lecture是两节不同的课。Lecture 是讲计算机组成，Discussion是TA讲assembly。推荐去\n\t\t\t\t\t\t\t<br>Lab: Assembly Code 有问题可以去咨询TA, 通常没什么人去。\n\t\t\t\t\t\t\t<br>Textbook: \"Structured Computer Organization\" (6th Edition), by Tanenbaum and Austin.\n\t\t\t\t\t\t\t<br>Rate my professor: 2.6\n\t\t\t\t\t\t\t<br>Grading criteria:\n\t\t\t\t\t\t\t<br>·Lab assignment (3 labs) : 35%\n\t\t\t\t\t\t\t<br>·Quizzes(4) : 30%\n\t\t\t\t\t\t\t<br>(两周一个quiz, 可以drop一个最低分)\n\t\t\t\t\t\t\t<br>·Final exam :35%\n\t\t\t\t\t\t\t<br>Comment:\n\t\t\t\t\t\t\t<br>Eli 讲课略有口音，PPT大部分都是书上的内容，通常会在spring quarter教。听不懂的内容推荐看书。Quiz 会有Sample，考试内容和sample，hw 类似， 不是cumulative。final 稍有难度， 不过期末会有比较大的curve。Final 和 quiz都是概念 + 汇编语言。Eli 最大的问题就是有时候sample quiz的答案和hw 的答案会是错的， 平时要多去piazza上确认答案的准确率。教授很少回复piazza，大多时候都是学生互相讨论，TA 有时候会确认答案。\n\t\t\t\t\t\t\t<br>51这门课不看书可能会听得云里雾里，推荐上课前读recommended readings。\n          </article>\n        </span>\n      </div>\n    </div>\n  </body>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics51/ebozorgzadeh/ebozorgzadeh-routing.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics51/ebozorgzadeh/ebozorgzadeh-routing.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: EbozorgzadehPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EbozorgzadehPageRoutingModule", function() { return EbozorgzadehPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ebozorgzadeh_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ebozorgzadeh.page */ "./src/app/tab1/course-list/course-intro-ics51/ebozorgzadeh/ebozorgzadeh.page.ts");




var routes = [
    {
        path: '',
        component: _ebozorgzadeh_page__WEBPACK_IMPORTED_MODULE_3__["EbozorgzadehPage"]
    }
];
var EbozorgzadehPageRoutingModule = /** @class */ (function () {
    function EbozorgzadehPageRoutingModule() {
    }
    EbozorgzadehPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], EbozorgzadehPageRoutingModule);
    return EbozorgzadehPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics51/ebozorgzadeh/ebozorgzadeh.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics51/ebozorgzadeh/ebozorgzadeh.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: EbozorgzadehPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EbozorgzadehPageModule", function() { return EbozorgzadehPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ebozorgzadeh_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ebozorgzadeh-routing.module */ "./src/app/tab1/course-list/course-intro-ics51/ebozorgzadeh/ebozorgzadeh-routing.module.ts");
/* harmony import */ var _ebozorgzadeh_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ebozorgzadeh.page */ "./src/app/tab1/course-list/course-intro-ics51/ebozorgzadeh/ebozorgzadeh.page.ts");







var EbozorgzadehPageModule = /** @class */ (function () {
    function EbozorgzadehPageModule() {
    }
    EbozorgzadehPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _ebozorgzadeh_routing_module__WEBPACK_IMPORTED_MODULE_5__["EbozorgzadehPageRoutingModule"]
            ],
            declarations: [_ebozorgzadeh_page__WEBPACK_IMPORTED_MODULE_6__["EbozorgzadehPage"]]
        })
    ], EbozorgzadehPageModule);
    return EbozorgzadehPageModule;
}());



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics51/ebozorgzadeh/ebozorgzadeh.page.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics51/ebozorgzadeh/ebozorgzadeh.page.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\r\n  max-height: 35vh;\r\n  overflow: hidden;\r\n}\r\n\r\n.cucs-logo{\r\n  background: url('logo.png') no-repeat;\r\n  float: center;\r\n  vertical-align: bottom;\r\n  width: 100%;\r\n  height: 82px;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  color:rgb(0, 0, 0); \r\n  text-decoration: none;\r\n  box-shadow: 1px 2px 3px #ddd;\r\n  background: #fff;\r\n}\r\n\r\narticle {\r\n  text-align: left;\r\n  background: #fff;\r\n  text-indent: 2em;\r\n  margin-left: 1em;\r\n  margin-right: 1em;\r\n}\r\n\r\nion-button {\r\n  border-bottom: thin solid #5FBDCE;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQ0FBZ0Q7RUFDaEQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFFckIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC90YWIxL2NvdXJzZS1saXN0L2NvdXJzZS1pbnRyby1pY3M1MS9lYm96b3JnemFkZWgvZWJvem9yZ3phZGVoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcclxuICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jdWNzLWxvZ297XHJcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9sb2dvLnBuZ1wiKSBuby1yZXBlYXQ7XHJcbiAgZmxvYXQ6IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogODJweDtcclxufVxyXG5cclxuaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjpyZ2IoMCwgMCwgMCk7IFxyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAycHggM3B4ICNkZGQ7XHJcbiAgYm94LXNoYWRvdzogMXB4IDJweCAzcHggI2RkZDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG5cclxuYXJ0aWNsZSB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHRleHQtaW5kZW50OiAyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCAjNUZCRENFO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics51/ebozorgzadeh/ebozorgzadeh.page.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics51/ebozorgzadeh/ebozorgzadeh.page.ts ***!
  \***************************************************************************************/
/*! exports provided: EbozorgzadehPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EbozorgzadehPage", function() { return EbozorgzadehPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EbozorgzadehPage = /** @class */ (function () {
    function EbozorgzadehPage() {
    }
    EbozorgzadehPage.prototype.ngOnInit = function () {
    };
    EbozorgzadehPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ebozorgzadeh',
            template: __webpack_require__(/*! raw-loader!./ebozorgzadeh.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-ics51/ebozorgzadeh/ebozorgzadeh.page.html"),
            styles: [__webpack_require__(/*! ./ebozorgzadeh.page.scss */ "./src/app/tab1/course-list/course-intro-ics51/ebozorgzadeh/ebozorgzadeh.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EbozorgzadehPage);
    return EbozorgzadehPage;
}());



/***/ })

}]);
//# sourceMappingURL=ebozorgzadeh-ebozorgzadeh-module-es5.js.map