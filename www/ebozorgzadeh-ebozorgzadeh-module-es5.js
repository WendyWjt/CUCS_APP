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

module.exports = "h2 {\n  text-align: center;\n  color: black;\n  text-decoration: none;\n  box-shadow: 1px 2px 3px #ddd;\n  background: #fff;\n}\n\narticle {\n  text-align: left;\n  background: #fff;\n  text-indent: 2em;\n  margin-left: 1em;\n  margin-right: 1em;\n}\n\nion-button {\n  border-bottom: thin solid #5FBDCE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9jb3Vyc2UtbGlzdC9jb3Vyc2UtaW50cm8taWNzNTEvZWJvem9yZ3phZGVoL0M6XFxVc2Vyc1xcOTg1NTJcXERlc2t0b3BcXENVQ1NfVjJcXENVQ1NfQVBQXzEyMThcXENVQ1NfQVBQL3NyY1xcYXBwXFx0YWIxXFxjb3Vyc2UtbGlzdFxcY291cnNlLWludHJvLWljczUxXFxlYm96b3JnemFkZWhcXGVib3pvcmd6YWRlaC5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjEvY291cnNlLWxpc3QvY291cnNlLWludHJvLWljczUxL2Vib3pvcmd6YWRlaC9lYm96b3JnemFkZWgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFFQSw0QkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FER0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0E7RUFDSSxpQ0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvdGFiMS9jb3Vyc2UtbGlzdC9jb3Vyc2UtaW50cm8taWNzNTEvZWJvem9yZ3phZGVoL2Vib3pvcmd6YWRlaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjpyZ2IoMCwgMCwgMCk7IFxyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMnB4IDNweCAjZGRkO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAzcHggI2RkZDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcblxyXG5hcnRpY2xlIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgdGV4dC1pbmRlbnQ6IDJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkICM1RkJEQ0U7XHJcbn0iLCJoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDJweCAzcHggI2RkZDtcbiAgYm94LXNoYWRvdzogMXB4IDJweCAzcHggI2RkZDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuYXJ0aWNsZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHRleHQtaW5kZW50OiAyZW07XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCAjNUZCRENFO1xufSJdfQ== */"

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