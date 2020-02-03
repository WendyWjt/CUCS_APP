(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["khermans-khermans-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-ics45j/khermans/khermans.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/course-list/course-intro-ics45j/khermans/khermans.page.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list/course-intro-ics45j\">\n          返回ICS 45J列表\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list\">\n          返回课程列表\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"\">\n          返回首页\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <body class=\"user-select\">\n    <style type=\"text/css\">\n      /* not available for firefox & IE explorer */\n      #box {\n          width: 100%;\n          height: 88%;\n          overflow-x: hidden;\n          overflow-y: scroll;\n          line-height: 30px;\n          text-align: center;\n      }\n      #box::-webkit-scrollbar {\n          display: none;\n          visibility: hidden;\n      }\n    </style>\n    <div id=\"box\" class=\"panel-body\">\n      <div style=\"border: 1px  #000000; width: 98%; margin: 0 auto;\">\n        <span>\n          <article class=\"article1\">\n            <header>\n                <h2>\n                  <a style=\"color:#5FBDCE; text-decoration: none;\">\n                    ICS 45J Programming in Java as a Second Language - Kimberly Hermans\n                  </a>\n                </h2>\n            </header>\n              内容：学习Java\n              <br>Professor:  Kimberly Hermans\n\t\t\t\t\t\t\t<br>难易程度：★★★\n\t\t\t\t\t\t\t<br>TA：NA\n\t\t\t\t\t\t\t<br>Discussion: 不强制\n\t\t\t\t\t\t\t<br>Piazza : 有\n\t\t\t\t\t\t\t<br>Textbook: NA\n\t\t\t\t\t\t\t<br>Rate my professor 评分：1.6\n\t\t\t\t\t\t\t<br>Grading Criteria:\n\t\t\t\t\t\t\t<br>1）Homework 30% 总共六个project，一个6%. 最后连个lab的描述比较不清晰，教授从来不回邮件, 只能靠一堆人在piazza上讨论.\n\t\t\t\t\t\t\t<br>(2) Midterm 30%, 题目的量很大，题目中的错误较多，发卷子的速度很慢。\n\t\t\t\t\t\t\t<br>(3) Final 40%, 一共85个单选题，有一部分提是送分题\n\t\t\t\t\t\t\t<br>Comments:\n\t\t\t\t\t\t\t<br>教授：整节课的结构十分不紧凑，然而老师经常碰到问题不会debug还有向同学求助。回邮件的速度非常慢（从来没回过？），在piazza也都是TA在回答问题. 讲课不太清晰，基本就是把功能用法讲一遍，不太会讲设计意图或者别的一些相关拓展；上课不让玩手机和聊天，被她发现可能会直接当堂被提醒；PPT传的比较慢，有些课堂通知会直接发在Piazza上不会发邮件，所以Piazza要定期看一下有没有通知；Project的Introduction比较迷，所以感觉Introduction最好早点看起来，然后疯狂去找TA和老师问细节；后半学期会讲Android Studio，但是讲的比较迷也比较含糊，更像她打一遍代码给你看，不过作业的Project的代码基本可以在她给的Sample project里面找到相关的代码借鉴或者自己学一下；考试比较迷，期中题量很大期末全是选择题，会考一些method的运用细节，期末也考了概念。\n\t\t\t\t\t\t\t<br>课程：前半个学期的课比较简单，基本都是31-33的相关知识点换JAVA写一遍；后半个学期会粗略讲多线程和Android Studio，Android Studio很实用但是不考；Project提早一点开始写难度也不大，最后一个Android Studio的project很多问题主要是软件问题很多而不是码代码的问题，所以提早一点开始会有更多时间处理使用软件时候的突发问题。\n          </article>\n        </span>\n      </div>\n    </div>\n  </body>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics45j/khermans/khermans-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics45j/khermans/khermans-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: KhermansPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhermansPageRoutingModule", function() { return KhermansPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _khermans_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./khermans.page */ "./src/app/tab1/course-list/course-intro-ics45j/khermans/khermans.page.ts");




var routes = [
    {
        path: '',
        component: _khermans_page__WEBPACK_IMPORTED_MODULE_3__["KhermansPage"]
    }
];
var KhermansPageRoutingModule = /** @class */ (function () {
    function KhermansPageRoutingModule() {
    }
    KhermansPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], KhermansPageRoutingModule);
    return KhermansPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics45j/khermans/khermans.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics45j/khermans/khermans.module.ts ***!
  \**********************************************************************************/
/*! exports provided: KhermansPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhermansPageModule", function() { return KhermansPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _khermans_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./khermans-routing.module */ "./src/app/tab1/course-list/course-intro-ics45j/khermans/khermans-routing.module.ts");
/* harmony import */ var _khermans_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./khermans.page */ "./src/app/tab1/course-list/course-intro-ics45j/khermans/khermans.page.ts");







var KhermansPageModule = /** @class */ (function () {
    function KhermansPageModule() {
    }
    KhermansPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _khermans_routing_module__WEBPACK_IMPORTED_MODULE_5__["KhermansPageRoutingModule"]
            ],
            declarations: [_khermans_page__WEBPACK_IMPORTED_MODULE_6__["KhermansPage"]]
        })
    ], KhermansPageModule);
    return KhermansPageModule;
}());



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics45j/khermans/khermans.page.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics45j/khermans/khermans.page.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  text-align: center;\n  color: black;\n  text-decoration: none;\n  box-shadow: 1px 2px 3px #ddd;\n  background: #fff;\n}\n\narticle {\n  text-align: left;\n  background: #fff;\n  text-indent: 2em;\n  margin-left: 1em;\n  margin-right: 1em;\n}\n\nion-button {\n  border-bottom: thin solid #5FBDCE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9jb3Vyc2UtbGlzdC9jb3Vyc2UtaW50cm8taWNzNDVqL2toZXJtYW5zL0M6XFxVc2Vyc1xcOTg1NTJcXERlc2t0b3BcXENVQ1NfVjJcXENVQ1NfQVBQXzEyMThcXENVQ1NfQVBQL3NyY1xcYXBwXFx0YWIxXFxjb3Vyc2UtbGlzdFxcY291cnNlLWludHJvLWljczQ1alxca2hlcm1hbnNcXGtoZXJtYW5zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMS9jb3Vyc2UtbGlzdC9jb3Vyc2UtaW50cm8taWNzNDVqL2toZXJtYW5zL2toZXJtYW5zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBRUEsNEJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdBO0VBQ0ksaUNBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvY291cnNlLWxpc3QvY291cnNlLWludHJvLWljczQ1ai9raGVybWFucy9raGVybWFucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjpyZ2IoMCwgMCwgMCk7IFxyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMnB4IDNweCAjZGRkO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAzcHggI2RkZDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcblxyXG5hcnRpY2xlIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgdGV4dC1pbmRlbnQ6IDJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkICM1RkJEQ0U7XHJcbn0iLCJoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDJweCAzcHggI2RkZDtcbiAgYm94LXNoYWRvdzogMXB4IDJweCAzcHggI2RkZDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuYXJ0aWNsZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHRleHQtaW5kZW50OiAyZW07XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCAjNUZCRENFO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics45j/khermans/khermans.page.ts":
/*!********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics45j/khermans/khermans.page.ts ***!
  \********************************************************************************/
/*! exports provided: KhermansPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhermansPage", function() { return KhermansPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var KhermansPage = /** @class */ (function () {
    function KhermansPage() {
    }
    KhermansPage.prototype.ngOnInit = function () {
    };
    KhermansPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-khermans',
            template: __webpack_require__(/*! raw-loader!./khermans.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-ics45j/khermans/khermans.page.html"),
            styles: [__webpack_require__(/*! ./khermans.page.scss */ "./src/app/tab1/course-list/course-intro-ics45j/khermans/khermans.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], KhermansPage);
    return KhermansPage;
}());



/***/ })

}]);
//# sourceMappingURL=khermans-khermans-module-es5.js.map