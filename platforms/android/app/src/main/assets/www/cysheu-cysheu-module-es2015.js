(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cysheu-cysheu-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-cs122-a/cysheu/cysheu.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/course-list/course-intro-cs122-a/cysheu/cysheu.page.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list/course-intro-cs122-a\">\r\n          返回CS 122A列表\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list\">\r\n          返回课程列表\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"\">\r\n          返回首页\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <body class=\"user-select\">\r\n    <style type=\"text/css\">\r\n      /* not available for firefox & IE explorer */\r\n      #box {\r\n          width: 100%;\r\n          height: 88%;\r\n          overflow-x: hidden;\r\n          overflow-y: scroll;\r\n          line-height: 30px;\r\n          text-align: center;\r\n      }\r\n      #box::-webkit-scrollbar {\r\n          display: none;\r\n          visibility: hidden;\r\n      }\r\n    </style>\r\n    <div id=\"box\" class=\"panel-body\">\r\n      <div style=\"border: 1px  #000000; width: 98%; margin: 0 auto;\">\r\n        <span>\r\n          <article class=\"article1\">\r\n            <header>\r\n                <h2>\r\n                  <a style=\"color:#5FBDCE; text-decoration: none;\">\r\n                    CS 122A Introduction to Data Management - Chen-Yu (Phillip) Sheu\r\n                  </a>\r\n                </h2>\r\n            </header>\r\n            <br>Professor:Chen-Yu (Phillip) Sheu\r\n            <br>\r\n            <br>难易程度: ★★★★\r\n            <br>\r\n            <br>先修课目：ICS 33/CSE 43/EECS 114\r\n            <br>\r\n            <br>TA: Bryan Chou, Jenny Jin\r\n            <br>\r\n            <br>Discussion:  无\r\n            <br>\r\n            <br>Piazza: 无\r\n            <br>\r\n            <br>Textbook: Database System Concepts\r\n            <br>\r\n            <br>Rate my professor 评分: 3.1\r\n            <br>\r\n            <br>Grading criteria:\r\n            <br>\r\n            <br>· Assignment 20%\r\n            <br>\r\n            <br>· Mini-Project 10%\r\n            <br>\r\n            <br>· Midterm 30%\r\n            <br>\r\n            <br>· Final 40%\r\n            <br>\r\n            <br>Comment:\r\n            <br>\r\n            <br>上课有些口音 语速较慢 偶尔会提到不相关内容 全程手写 学要看书配合理解。作业简单、 mini-project简单但是设定麻烦，没有详细教程、期中很简单、期末设置题量过大，题型概念不难但过于复杂 不适用于正常期末试卷。\r\n          </article>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs122-a/cysheu/cysheu-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs122-a/cysheu/cysheu-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: CysheuPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CysheuPageRoutingModule", function() { return CysheuPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cysheu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cysheu.page */ "./src/app/tab1/course-list/course-intro-cs122-a/cysheu/cysheu.page.ts");




const routes = [
    {
        path: '',
        component: _cysheu_page__WEBPACK_IMPORTED_MODULE_3__["CysheuPage"]
    }
];
let CysheuPageRoutingModule = class CysheuPageRoutingModule {
};
CysheuPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CysheuPageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs122-a/cysheu/cysheu.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs122-a/cysheu/cysheu.module.ts ***!
  \*******************************************************************************/
/*! exports provided: CysheuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CysheuPageModule", function() { return CysheuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cysheu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cysheu-routing.module */ "./src/app/tab1/course-list/course-intro-cs122-a/cysheu/cysheu-routing.module.ts");
/* harmony import */ var _cysheu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cysheu.page */ "./src/app/tab1/course-list/course-intro-cs122-a/cysheu/cysheu.page.ts");







let CysheuPageModule = class CysheuPageModule {
};
CysheuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cysheu_routing_module__WEBPACK_IMPORTED_MODULE_5__["CysheuPageRoutingModule"]
        ],
        declarations: [_cysheu_page__WEBPACK_IMPORTED_MODULE_6__["CysheuPage"]]
    })
], CysheuPageModule);



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs122-a/cysheu/cysheu.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs122-a/cysheu/cysheu.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\r\n  max-height: 35vh;\r\n  overflow: hidden;\r\n}\r\n\r\n.cucs-logo{\r\n  background: url('logo.png') no-repeat;\r\n  float: center;\r\n  vertical-align: bottom;\r\n  width: 100%;\r\n  height: 82px;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  color:rgb(0, 0, 0); \r\n  text-decoration: none;\r\n  box-shadow: 1px 2px 3px #ddd;\r\n  background: #fff;\r\n}\r\n\r\narticle {\r\n  text-align: left;\r\n  background: #fff;\r\n  text-indent: 2em;\r\n  margin-left: 1em;\r\n  margin-right: 1em;\r\n}\r\n\r\nion-button {\r\n  border-bottom: thin solid #5FBDCE;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQ0FBZ0Q7RUFDaEQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFFckIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC90YWIxL2NvdXJzZS1saXN0L2NvdXJzZS1pbnRyby1jczEyMi1hL2N5c2hldS9jeXNoZXUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmN1Y3MtbG9nb3tcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL2xvZ28ucG5nXCIpIG5vLXJlcGVhdDtcclxuICBmbG9hdDogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA4MnB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOnJnYigwLCAwLCAwKTsgXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDJweCAzcHggI2RkZDtcclxuICBib3gtc2hhZG93OiAxcHggMnB4IDNweCAjZGRkO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcblxyXG5hcnRpY2xlIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgdGV4dC1pbmRlbnQ6IDJlbTtcclxuICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gIG1hcmdpbi1yaWdodDogMWVtO1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkICM1RkJEQ0U7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs122-a/cysheu/cysheu.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs122-a/cysheu/cysheu.page.ts ***!
  \*****************************************************************************/
/*! exports provided: CysheuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CysheuPage", function() { return CysheuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CysheuPage = class CysheuPage {
    constructor() { }
    ngOnInit() {
    }
};
CysheuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cysheu',
        template: __webpack_require__(/*! raw-loader!./cysheu.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-cs122-a/cysheu/cysheu.page.html"),
        styles: [__webpack_require__(/*! ./cysheu.page.scss */ "./src/app/tab1/course-list/course-intro-cs122-a/cysheu/cysheu.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CysheuPage);



/***/ })

}]);
//# sourceMappingURL=cysheu-cysheu-module-es2015.js.map