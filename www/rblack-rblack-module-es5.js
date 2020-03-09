(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rblack-rblack-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-ics139w/rblack/rblack.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/course-list/course-intro-ics139w/rblack/rblack.page.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list/course-intro-ics139w\">\n          返回ICS 139W列表\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list\">\n          返回课程列表\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"\">\n          返回首页\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <body class=\"user-select\">\n    <style type=\"text/css\">\n      /* not available for firefox & IE explorer */\n      #box {\n          width: 100%;\n          height: 88%;\n          overflow-x: hidden;\n          overflow-y: scroll;\n          line-height: 30px;\n          text-align: center;\n      }\n      #box::-webkit-scrollbar {\n          display: none;\n          visibility: hidden;\n      }\n    </style>\n    <div id=\"box\" class=\"panel-body\">\n      <div style=\"border: 1px  #000000; width: 98%; margin: 0 auto;\">\n        <span>\n          <article class=\"article1\">\n            <header>\n                <h2>\n                  <a style=\"color:#5FBDCE; text-decoration: none;\">\n                    ICS 139W Critical Writing on Information Technology - Rebecca Black\n                  </a>\n                </h2>\n            </header>\n            内容:计算机专业类写作\n            <br>Professor: Rebecca Black\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>难易程度：★★\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>TA：NA\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>Discussion: 强制\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>Piazza : 无\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>Textbook: zybook\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>Rate my professor 评分：3.8\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>Grading Criteria:\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>（1）主要包括这四块：Changing the system, Writing Instructions, Resume/Cover Letter和Participation. 其中Changing the system是大头，分3个stages。\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>（2）Discussions不是每次都需要参加。必须参加的就计入Participation。\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>（3）基本上每次lecture都有练习，单人或者group，不管做的好坏，仅记录为Participation。\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>（4）在Changing the system中还有Presentation，做PPT和演讲（现场或者录制）Comments:\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>教授：老师很良心，会提供很多辅助资源。一开始听上去任务有点难，不过她会分模块布置任务。分解之后，就一目了然了。她会提取学生意见，会根据需要修改deadline时间或者作业格式。总而言之，非常的有弹性。\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>课程：课程的实用性还是很强的。从作业就可以看出来，基本上以后工作都可能会涉及到。这门课没有final，就是一个很大的福利。\n        </article>\n        </span>\n      </div>\n    </div>\n  </body>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics139w/rblack/rblack-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics139w/rblack/rblack-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: RblackPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RblackPageRoutingModule", function() { return RblackPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _rblack_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rblack.page */ "./src/app/tab1/course-list/course-intro-ics139w/rblack/rblack.page.ts");




var routes = [
    {
        path: '',
        component: _rblack_page__WEBPACK_IMPORTED_MODULE_3__["RblackPage"]
    }
];
var RblackPageRoutingModule = /** @class */ (function () {
    function RblackPageRoutingModule() {
    }
    RblackPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], RblackPageRoutingModule);
    return RblackPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics139w/rblack/rblack.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics139w/rblack/rblack.module.ts ***!
  \*******************************************************************************/
/*! exports provided: RblackPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RblackPageModule", function() { return RblackPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _rblack_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rblack-routing.module */ "./src/app/tab1/course-list/course-intro-ics139w/rblack/rblack-routing.module.ts");
/* harmony import */ var _rblack_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rblack.page */ "./src/app/tab1/course-list/course-intro-ics139w/rblack/rblack.page.ts");







var RblackPageModule = /** @class */ (function () {
    function RblackPageModule() {
    }
    RblackPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _rblack_routing_module__WEBPACK_IMPORTED_MODULE_5__["RblackPageRoutingModule"]
            ],
            declarations: [_rblack_page__WEBPACK_IMPORTED_MODULE_6__["RblackPage"]]
        })
    ], RblackPageModule);
    return RblackPageModule;
}());



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics139w/rblack/rblack.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics139w/rblack/rblack.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\r\n  max-height: 35vh;\r\n  overflow: hidden;\r\n}\r\n\r\n.cucs-logo{\r\n  background: url('logo.png') no-repeat;\r\n  float: center;\r\n  vertical-align: bottom;\r\n  width: 100%;\r\n  height: 82px;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  color:rgb(0, 0, 0); \r\n  text-decoration: none;\r\n  box-shadow: 1px 2px 3px #ddd;\r\n  background: #fff;\r\n}\r\n\r\narticle {\r\n  text-align: left;\r\n  background: #fff;\r\n  text-indent: 2em;\r\n  margin-left: 1em;\r\n  margin-right: 1em;\r\n}\r\n\r\nion-button {\r\n  border-bottom: thin solid #5FBDCE;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQ0FBZ0Q7RUFDaEQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFFckIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC90YWIxL2NvdXJzZS1saXN0L2NvdXJzZS1pbnRyby1pY3MxMzl3L3JibGFjay9yYmxhY2sucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmN1Y3MtbG9nb3tcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL2xvZ28ucG5nXCIpIG5vLXJlcGVhdDtcclxuICBmbG9hdDogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA4MnB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOnJnYigwLCAwLCAwKTsgXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDJweCAzcHggI2RkZDtcclxuICBib3gtc2hhZG93OiAxcHggMnB4IDNweCAjZGRkO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcblxyXG5hcnRpY2xlIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgdGV4dC1pbmRlbnQ6IDJlbTtcclxuICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gIG1hcmdpbi1yaWdodDogMWVtO1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkICM1RkJEQ0U7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics139w/rblack/rblack.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics139w/rblack/rblack.page.ts ***!
  \*****************************************************************************/
/*! exports provided: RblackPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RblackPage", function() { return RblackPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RblackPage = /** @class */ (function () {
    function RblackPage() {
    }
    RblackPage.prototype.ngOnInit = function () {
    };
    RblackPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rblack',
            template: __webpack_require__(/*! raw-loader!./rblack.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-ics139w/rblack/rblack.page.html"),
            styles: [__webpack_require__(/*! ./rblack.page.scss */ "./src/app/tab1/course-list/course-intro-ics139w/rblack/rblack.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RblackPage);
    return RblackPage;
}());



/***/ })

}]);
//# sourceMappingURL=rblack-rblack-module-es5.js.map