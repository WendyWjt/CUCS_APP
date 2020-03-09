(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["course-intro-cs134-course-intro-cs134-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-cs134/course-intro-cs134.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/course-list/course-intro-cs134/course-intro-cs134.page.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list\">\r\n          返回课程列表\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"\">\r\n          返回首页\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <body class=\"user-select\">\r\n    <style type=\"text/css\">\r\n      /* not available for firefox & IE explorer */\r\n      #box {\r\n          width: 100%;\r\n          height: 88%;\r\n          overflow-x: hidden;\r\n          overflow-y: scroll;\r\n          line-height: 30px;\r\n          text-align: center;\r\n      }\r\n      #box::-webkit-scrollbar {\r\n          display: none;\r\n          visibility: hidden;\r\n      }\r\n    </style>\r\n    <div id=\"box\" class=\"panel-body\">\r\n      <div style=\"border: 1px  #000000; width: 98%; margin: 0 auto;\">\r\n        <span>\r\n          <article class=\"article1\">\r\n            <header>\r\n                <h2>\r\n                  <a style=\"color:#5FBDCE; text-decoration: none;\">\r\n                    CS 134 Computer and Network Security - Gene Tsudik\r\n                  </a>\r\n                </h2>\r\n            </header>\r\n            <br>内容:Computer and Network Security\r\n            <br>\r\n            <br>Professor: Gene Tsudik\r\n            <br>\r\n            <br>难易程度: ★★★★\r\n            <br>\r\n            <br>先修科目:  ICS 6D & ICS 33/CSE 43 & CS 132/CS 143A\r\n            <br>\r\n            <br>TA:Ivan Nunes, Ercan Ozturk\r\n            <br>\r\n            <br>Discussion: 无\r\n            <br>\r\n            <br>Piazza:无\r\n            <br>\r\n            <br>Textbook:Network Security - Private Communication in a Public World\r\n            <br>\r\n            <br>Ratemyprofessor: 4.1\r\n            <br>\r\n            <br>Grading Criteria:\r\n            <br>\r\n            <br>· Homeworw 拿85%以上很难，TA评分吝啬\r\n            <br>\r\n            <br>· Quiz\r\n            <br>\r\n            <br>· Final  简单一点，有curve\r\n            <br>\r\n            <br>Comment:教授比较幽默，讲课还是不错的，语速属于pattis等级，说话也很清晰。一般会迟到5分钟左右。\"可谓GPA杀手，当然对于学霸来说也许也没什么，如果很珍惜自己的GPA，或者没有信息能完全掌握要求的内容，或者打算通过minimum的努力和机智拿A的同学，还是尽量不要作死，但这些纯属个人意见，大家可以去试听，当然也有一个风险是听完觉得没什么，然后第一次作业或者midterm成绩出来发现爆炸了。其中RSA等加密算法会比6D讲得深入一些，学的数学也稍微难一点，对modulo生疏的同学要注重研究一下（当然不是指计算remainder...），但这些毕竟只是这节课的一个部分，大部分还是非数学的，MIDTERM前相对math heavy，midterm后就没有了，protocol为主，主要是对一些protocol和攻击方法的理解。\r\n            <br>\r\n            <br>另外也许有些人以为会教你怎么去hack别人，no。但你能学到一些原理，具体的自己去探索了。\r\n            <br>\r\n            <br>建议感兴趣的同学，拿这节课的syllabus和textbook看一下，但是network方向的同学反正不能躲，加油吧！如果对network感兴趣的话，其实这是一门很有意思的课，也能学到不少网络安全知识，认真学，作业保持85以上，midterm不要崩，B+以上也许没问题？po主渣渣做不到但不代表学霸们不行。\"\r\n        </article>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs134/course-intro-cs134-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs134/course-intro-cs134-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: CourseIntroCs134PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroCs134PageRoutingModule", function() { return CourseIntroCs134PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _course_intro_cs134_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-intro-cs134.page */ "./src/app/tab1/course-list/course-intro-cs134/course-intro-cs134.page.ts");




var routes = [
    {
        path: '',
        component: _course_intro_cs134_page__WEBPACK_IMPORTED_MODULE_3__["CourseIntroCs134Page"]
    }
];
var CourseIntroCs134PageRoutingModule = /** @class */ (function () {
    function CourseIntroCs134PageRoutingModule() {
    }
    CourseIntroCs134PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CourseIntroCs134PageRoutingModule);
    return CourseIntroCs134PageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs134/course-intro-cs134.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs134/course-intro-cs134.module.ts ***!
  \**********************************************************************************/
/*! exports provided: CourseIntroCs134PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroCs134PageModule", function() { return CourseIntroCs134PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _course_intro_cs134_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course-intro-cs134-routing.module */ "./src/app/tab1/course-list/course-intro-cs134/course-intro-cs134-routing.module.ts");
/* harmony import */ var _course_intro_cs134_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-intro-cs134.page */ "./src/app/tab1/course-list/course-intro-cs134/course-intro-cs134.page.ts");







var CourseIntroCs134PageModule = /** @class */ (function () {
    function CourseIntroCs134PageModule() {
    }
    CourseIntroCs134PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _course_intro_cs134_routing_module__WEBPACK_IMPORTED_MODULE_5__["CourseIntroCs134PageRoutingModule"]
            ],
            declarations: [_course_intro_cs134_page__WEBPACK_IMPORTED_MODULE_6__["CourseIntroCs134Page"]]
        })
    ], CourseIntroCs134PageModule);
    return CourseIntroCs134PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs134/course-intro-cs134.page.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs134/course-intro-cs134.page.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\r\n  max-height: 35vh;\r\n  overflow: hidden;\r\n}\r\n\r\n.cucs-logo{\r\n  background: url('logo.png') no-repeat;\r\n  float: center;\r\n  vertical-align: bottom;\r\n  width: 100%;\r\n  height: 82px;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  color:rgb(0, 0, 0); \r\n  text-decoration: none;\r\n  box-shadow: 1px 2px 3px #ddd;\r\n  background: #fff;\r\n}\r\n\r\narticle {\r\n  text-align: left;\r\n  background: #fff;\r\n  text-indent: 2em;\r\n  margin-left: 1em;\r\n  margin-right: 1em;\r\n}\r\n\r\nion-button {\r\n  border-bottom: thin solid #5FBDCE;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQ0FBZ0Q7RUFDaEQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFFckIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC90YWIxL2NvdXJzZS1saXN0L2NvdXJzZS1pbnRyby1jczEzNC9jb3Vyc2UtaW50cm8tY3MxMzQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmN1Y3MtbG9nb3tcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL2xvZ28ucG5nXCIpIG5vLXJlcGVhdDtcclxuICBmbG9hdDogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA4MnB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOnJnYigwLCAwLCAwKTsgXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDJweCAzcHggI2RkZDtcclxuICBib3gtc2hhZG93OiAxcHggMnB4IDNweCAjZGRkO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcblxyXG5hcnRpY2xlIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgdGV4dC1pbmRlbnQ6IDJlbTtcclxuICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gIG1hcmdpbi1yaWdodDogMWVtO1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkICM1RkJEQ0U7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs134/course-intro-cs134.page.ts":
/*!********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs134/course-intro-cs134.page.ts ***!
  \********************************************************************************/
/*! exports provided: CourseIntroCs134Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroCs134Page", function() { return CourseIntroCs134Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CourseIntroCs134Page = /** @class */ (function () {
    function CourseIntroCs134Page() {
    }
    CourseIntroCs134Page.prototype.ngOnInit = function () {
    };
    CourseIntroCs134Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-intro-cs134',
            template: __webpack_require__(/*! raw-loader!./course-intro-cs134.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-cs134/course-intro-cs134.page.html"),
            styles: [__webpack_require__(/*! ./course-intro-cs134.page.scss */ "./src/app/tab1/course-list/course-intro-cs134/course-intro-cs134.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CourseIntroCs134Page);
    return CourseIntroCs134Page;
}());



/***/ })

}]);
//# sourceMappingURL=course-intro-cs134-course-intro-cs134-module-es5.js.map