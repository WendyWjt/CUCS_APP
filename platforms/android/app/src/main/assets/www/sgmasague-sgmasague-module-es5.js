(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sgmasague-sgmasague-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-ics32/sgmasague/sgmasague.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/course-list/course-intro-ics32/sgmasague/sgmasague.page.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list/course-intro-ics32\">\n          返回ICS 32列表\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list\">\n          返回课程列表\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"\">\n          返回首页\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <body class=\"user-select\">\n    <style type=\"text/css\">\n      /* not available for firefox & IE explorer */\n      #box {\n          width: 100%;\n          height: 88%;\n          overflow-x: hidden;\n          overflow-y: scroll;\n          line-height: 30px;\n          text-align: center;\n      }\n      #box::-webkit-scrollbar {\n          display: none;\n          visibility: hidden;\n      }\n    </style>\n    <div id=\"box\" class=\"panel-body\">\n      <div style=\"border: 1px  #000000; width: 98%; margin: 0 auto;\">\n        <span>\n          <article class=\"article1\">\n            <header>\n                <h2>\n                  <a style=\"color:#5FBDCE; text-decoration: none;\">\n                    ICS 32 Program Software Library - Sergio Gago Masague\n                  </a>\n                </h2>\n            </header>\n              内容：学习Python语言\n              <br>Professor: Sergio Gago Masague\n\t\t\t\t\t\t\t<br>难易程度：★★★\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>先修课目：31 或者可以通过placement test 跳过31。详情：\n\t\t\t\t\t\t\t<br>http://www.ics.uci.edu/~kay/courses/31/placement.html\n\t\t\t\t\t\t\t<br>TA: Sajjad Taheri\n\t\t\t\t\t\t\t<br>Discussion: NA\n\t\t\t\t\t\t\t<br>Lab: 前两个project 强制pair programming， 要去lab找靠谱的partner。如果没有去lab，TA会强制分配给你一个partner。 Lab人很少，如果project有问题去lab还是很有帮助的\n\t\t\t\t\t\t\t<br>Piazza: 无\n\t\t\t\t\t\t\t<br>Textbook: 无\n\t\t\t\t\t\t\t<br>Rate my professor 评分: 无\n\t\t\t\t\t\t\t<br>这个老师目前只在summer10-week 教早八的课， 2016教ics 32， 2017教ics 46. 作业和考试基本沿用Thornton 的内容， 改进了一些比较偏门的题目。比Thornton简单一点。 有一次可以晚交99hours 作业的机会。 Office hour 很耐心。 如果midterm考不好的话可以用final 代替。他曾经说过他的goal 是尽可能让更多的人pass。Final review很有用，讲的全是考试会考的内容。\n\t\t\t\t\t\t\t<br>Grading Criteria: (Summer 2016)\n\t\t\t\t\t\t\t<br>· Five programming projects, 40% (weighted equally at 8% each)\n\t\t\t\t\t\t\t<br>· Midterm, 25%\n\t\t\t\t\t\t\t<br>· Final Exam, 35%\n\t\t\t\t\t\t\t<br>Comment:\n\t\t\t\t\t\t\t<br>承上启下的一门课，刚开始会觉得比31难很多。尤其是第一个project会觉得不知道自己在做什么。但是后面就会好很多了，笔记上有很多作业需要的code可以抄。\n          </article>\n        </span>\n      </div>\n    </div>\n  </body>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics32/sgmasague/sgmasague-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics32/sgmasague/sgmasague-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: SgmasaguePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SgmasaguePageRoutingModule", function() { return SgmasaguePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sgmasague_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sgmasague.page */ "./src/app/tab1/course-list/course-intro-ics32/sgmasague/sgmasague.page.ts");




var routes = [
    {
        path: '',
        component: _sgmasague_page__WEBPACK_IMPORTED_MODULE_3__["SgmasaguePage"]
    }
];
var SgmasaguePageRoutingModule = /** @class */ (function () {
    function SgmasaguePageRoutingModule() {
    }
    SgmasaguePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SgmasaguePageRoutingModule);
    return SgmasaguePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics32/sgmasague/sgmasague.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics32/sgmasague/sgmasague.module.ts ***!
  \***********************************************************************************/
/*! exports provided: SgmasaguePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SgmasaguePageModule", function() { return SgmasaguePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sgmasague_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sgmasague-routing.module */ "./src/app/tab1/course-list/course-intro-ics32/sgmasague/sgmasague-routing.module.ts");
/* harmony import */ var _sgmasague_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sgmasague.page */ "./src/app/tab1/course-list/course-intro-ics32/sgmasague/sgmasague.page.ts");







var SgmasaguePageModule = /** @class */ (function () {
    function SgmasaguePageModule() {
    }
    SgmasaguePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _sgmasague_routing_module__WEBPACK_IMPORTED_MODULE_5__["SgmasaguePageRoutingModule"]
            ],
            declarations: [_sgmasague_page__WEBPACK_IMPORTED_MODULE_6__["SgmasaguePage"]]
        })
    ], SgmasaguePageModule);
    return SgmasaguePageModule;
}());



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics32/sgmasague/sgmasague.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics32/sgmasague/sgmasague.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  text-align: center;\n  color: black;\n  text-decoration: none;\n  box-shadow: 1px 2px 3px #ddd;\n  background: #fff;\n}\n\narticle {\n  text-align: left;\n  background: #fff;\n  text-indent: 2em;\n  margin-left: 1em;\n  margin-right: 1em;\n}\n\nion-button {\n  border-bottom: thin solid #5FBDCE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9jb3Vyc2UtbGlzdC9jb3Vyc2UtaW50cm8taWNzMzIvc2dtYXNhZ3VlL0M6XFxVc2Vyc1xcOTg1NTJcXERlc2t0b3BcXENVQ1NfVjJcXENVQ1NfQVBQXzEyMThcXENVQ1NfQVBQL3NyY1xcYXBwXFx0YWIxXFxjb3Vyc2UtbGlzdFxcY291cnNlLWludHJvLWljczMyXFxzZ21hc2FndWVcXHNnbWFzYWd1ZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjEvY291cnNlLWxpc3QvY291cnNlLWludHJvLWljczMyL3NnbWFzYWd1ZS9zZ21hc2FndWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFFQSw0QkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FER0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0E7RUFDSSxpQ0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvdGFiMS9jb3Vyc2UtbGlzdC9jb3Vyc2UtaW50cm8taWNzMzIvc2dtYXNhZ3VlL3NnbWFzYWd1ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjpyZ2IoMCwgMCwgMCk7IFxyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMnB4IDNweCAjZGRkO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAzcHggI2RkZDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcblxyXG5hcnRpY2xlIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgdGV4dC1pbmRlbnQ6IDJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkICM1RkJEQ0U7XHJcbn0iLCJoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDJweCAzcHggI2RkZDtcbiAgYm94LXNoYWRvdzogMXB4IDJweCAzcHggI2RkZDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuYXJ0aWNsZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHRleHQtaW5kZW50OiAyZW07XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCAjNUZCRENFO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics32/sgmasague/sgmasague.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics32/sgmasague/sgmasague.page.ts ***!
  \*********************************************************************************/
/*! exports provided: SgmasaguePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SgmasaguePage", function() { return SgmasaguePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SgmasaguePage = /** @class */ (function () {
    function SgmasaguePage() {
    }
    SgmasaguePage.prototype.ngOnInit = function () {
    };
    SgmasaguePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sgmasague',
            template: __webpack_require__(/*! raw-loader!./sgmasague.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-ics32/sgmasague/sgmasague.page.html"),
            styles: [__webpack_require__(/*! ./sgmasague.page.scss */ "./src/app/tab1/course-list/course-intro-ics32/sgmasague/sgmasague.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SgmasaguePage);
    return SgmasaguePage;
}());



/***/ })

}]);
//# sourceMappingURL=sgmasague-sgmasague-module-es5.js.map