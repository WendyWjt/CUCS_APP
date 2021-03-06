(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["course-intro-ics33-course-intro-ics33-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-ics33/course-intro-ics33.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/course-list/course-intro-ics33/course-intro-ics33.page.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list\">\n          返回课程列表\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"\">\n          返回首页\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <body class=\"user-select\">\n    <style type=\"text/css\">\n      /* not available for firefox & IE explorer */\n      #box {\n          width: 100%;\n          height: 88%;\n          overflow-x: hidden;\n          overflow-y: scroll;\n          line-height: 30px;\n          text-align: center;\n      }\n      #box::-webkit-scrollbar {\n          display: none;\n          visibility: hidden;\n      }\n    </style>\n    <div id=\"box\" class=\"panel-body\">\n      <div style=\"border: 1px  #000000; width: 98%; margin: 0 auto;\">\n        <span>\n          <article class=\"article1\">\n            <header>\n                <h2>\n                  <a style=\"color:#5FBDCE; text-decoration: none;\">\n                    ICS 33 Intermediate Programming - Richard Pattis\n                  </a>\n                </h2>\n            </header>\n              内容：Python学习\n              <br>Professor: Richard Pattis\n\t\t\t\t\t\t\t<br>难易程度：★★★★\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>先修课目：ICS 32/CSE 42，和CSE 43是同一节课\n\t\t\t\t\t\t\t<br>TA: JORGENSEN, J\n\t\t\t\t\t\t\t<br>Lab: 一共有五个project，前面四个可以是pair programming， 而且不用换partner！！！最后一个游戏必须自己写。Lab 依旧不是强制性的。 两周一个project。但是比32写的那些要无聊一点。\n\t\t\t\t\t\t\t<br>Piazza: 无，但是有EEE上类似的问问题的地方\n\t\t\t\t\t\t\t<br>Textbook: 无\n\t\t\t\t\t\t\t<br>Rate my professor 评分: 3.4\n\t\t\t\t\t\t\t<br>http://www.ratemyprofessors.com/ShowRatings.jsp?tid=1094724\n\t\t\t\t\t\t\t<br>这个老师的笔记真的蛮多的，很话痨的老师，但是！很负责，讲的也很清楚，人也很好，基本上33都是他教！比32好拿A！\n\t\t\t\t\t\t\t<br>Grading Criteria:\n\t\t\t\t\t\t\t<br>· Quiz 20%\n\t\t\t\t\t\t\t<br>都是带回家写的，每周都有除了第一周和midterm的那一周没有。通常都是周四晚上交。\n\t\t\t\t\t\t\t<br>· Program assignments 28%\n\t\t\t\t\t\t\t<br>都有extra credit！！！ 提前两天交可以加两分，提前一天交可以加一分！\n\t\t\t\t\t\t\t<br>· Two in-lab exam 20%\n\t\t\t\t\t\t\t<br>是在自己的lab里面现场写code，听着有点害怕哈哈哈，其实不难的，可以找往年的题目在家多练习几遍，没有什么问题，基本上都能写出来。\n\t\t\t\t\t\t\t<br>· One midterm 12%\n\t\t\t\t\t\t\t<br>手写，网上也能找到往年midterm，多练习。\n\t\t\t\t\t\t\t<br>· Final exam 20%\n\t\t\t\t\t\t\t<br>没有sample，就靠自己啦~\n\t\t\t\t\t\t\t<br>Comment:\n\t\t\t\t\t\t\t<br>1.好好看老师的笔记，好好看老师的笔记，好好看老师的笔记。\n\t\t\t\t\t\t\t<br>2.人还算nice 讲的也算有趣 思路清晰 笔记要读的内容太多 可能缺乏一些重点. 建议好好复习midterm和final 多注重知识点的细节运用 要真正理解.\n          </article>\n        </span>\n      </div>\n    </div>\n  </body>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics33/course-intro-ics33-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics33/course-intro-ics33-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: CourseIntroIcs33PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroIcs33PageRoutingModule", function() { return CourseIntroIcs33PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _course_intro_ics33_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-intro-ics33.page */ "./src/app/tab1/course-list/course-intro-ics33/course-intro-ics33.page.ts");




const routes = [
    {
        path: '',
        component: _course_intro_ics33_page__WEBPACK_IMPORTED_MODULE_3__["CourseIntroIcs33Page"]
    }
];
let CourseIntroIcs33PageRoutingModule = class CourseIntroIcs33PageRoutingModule {
};
CourseIntroIcs33PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CourseIntroIcs33PageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics33/course-intro-ics33.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics33/course-intro-ics33.module.ts ***!
  \**********************************************************************************/
/*! exports provided: CourseIntroIcs33PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroIcs33PageModule", function() { return CourseIntroIcs33PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _course_intro_ics33_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course-intro-ics33-routing.module */ "./src/app/tab1/course-list/course-intro-ics33/course-intro-ics33-routing.module.ts");
/* harmony import */ var _course_intro_ics33_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-intro-ics33.page */ "./src/app/tab1/course-list/course-intro-ics33/course-intro-ics33.page.ts");







let CourseIntroIcs33PageModule = class CourseIntroIcs33PageModule {
};
CourseIntroIcs33PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _course_intro_ics33_routing_module__WEBPACK_IMPORTED_MODULE_5__["CourseIntroIcs33PageRoutingModule"]
        ],
        declarations: [_course_intro_ics33_page__WEBPACK_IMPORTED_MODULE_6__["CourseIntroIcs33Page"]]
    })
], CourseIntroIcs33PageModule);



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics33/course-intro-ics33.page.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics33/course-intro-ics33.page.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\r\n  max-height: 35vh;\r\n  overflow: hidden;\r\n}\r\n\r\n.cucs-logo{\r\n  background: url('logo.png') no-repeat;\r\n  float: center;\r\n  vertical-align: bottom;\r\n  width: 100%;\r\n  height: 82px;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  color:rgb(0, 0, 0); \r\n  text-decoration: none;\r\n  box-shadow: 1px 2px 3px #ddd;\r\n  background: #fff;\r\n}\r\n\r\narticle {\r\n  text-align: left;\r\n  background: #fff;\r\n  text-indent: 2em;\r\n  margin-left: 1em;\r\n  margin-right: 1em;\r\n}\r\n\r\nion-button {\r\n  border-bottom: thin solid #5FBDCE;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQ0FBZ0Q7RUFDaEQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFFckIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC90YWIxL2NvdXJzZS1saXN0L2NvdXJzZS1pbnRyby1pY3MzMy9jb3Vyc2UtaW50cm8taWNzMzMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmN1Y3MtbG9nb3tcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL2xvZ28ucG5nXCIpIG5vLXJlcGVhdDtcclxuICBmbG9hdDogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA4MnB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOnJnYigwLCAwLCAwKTsgXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDJweCAzcHggI2RkZDtcclxuICBib3gtc2hhZG93OiAxcHggMnB4IDNweCAjZGRkO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcblxyXG5hcnRpY2xlIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgdGV4dC1pbmRlbnQ6IDJlbTtcclxuICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gIG1hcmdpbi1yaWdodDogMWVtO1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkICM1RkJEQ0U7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics33/course-intro-ics33.page.ts":
/*!********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics33/course-intro-ics33.page.ts ***!
  \********************************************************************************/
/*! exports provided: CourseIntroIcs33Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroIcs33Page", function() { return CourseIntroIcs33Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CourseIntroIcs33Page = class CourseIntroIcs33Page {
    constructor() { }
    ngOnInit() {
    }
};
CourseIntroIcs33Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-course-intro-ics33',
        template: __webpack_require__(/*! raw-loader!./course-intro-ics33.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-ics33/course-intro-ics33.page.html"),
        styles: [__webpack_require__(/*! ./course-intro-ics33.page.scss */ "./src/app/tab1/course-list/course-intro-ics33/course-intro-ics33.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CourseIntroIcs33Page);



/***/ })

}]);
//# sourceMappingURL=course-intro-ics33-course-intro-ics33-module-es2015.js.map