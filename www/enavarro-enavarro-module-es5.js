(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["enavarro-enavarro-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-infmatx43/enavarro/enavarro.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/course-list/course-intro-infmatx43/enavarro/enavarro.page.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list/course-intro-infmatx43\">\n          返回IN4MATX 43列表\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list\">\n          返回课程列表\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"\">\n          返回首页\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <body class=\"user-select\">\n    <style type=\"text/css\">\n      /* not available for firefox & IE explorer */\n      #box {\n          width: 100%;\n          height: 88%;\n          overflow-x: hidden;\n          overflow-y: scroll;\n          line-height: 30px;\n          text-align: center;\n      }\n      #box::-webkit-scrollbar {\n          display: none;\n          visibility: hidden;\n      }\n    </style>\n    <div id=\"box\" class=\"panel-body\">\n      <div style=\"border: 1px  #000000; width: 98%; margin: 0 auto;\">\n        <span>\n          <article class=\"article1\">\n            <header>\n                <h2>\n                  <a style=\"color:#5FBDCE; text-decoration: none;\">\n                    IN4MATX 43 INTRO TO SE - Emily Navarro\n                  </a>\n                </h2>\n            </header>\n              内容：软件文档\n              <br>Professor:  EMILY NAVARRO\n\t\t\t\t\t\t\t<br>难易程度：★★★\n\t\t\t\t\t\t\t<br>先修课目：ICS 32，可以和ICS 105替换\n\t\t\t\t\t\t\t<br>TA: 无\n\t\t\t\t\t\t\t<br>Discussion: 无\n\t\t\t\t\t\t\t<br>Piazza: 有\n\t\t\t\t\t\t\t<br>Textbook: 无\n\t\t\t\t\t\t\t<br>Rate my professor 评分: 4.0\n\t\t\t\t\t\t\t<br>Grading Criteria:\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>· Assignment     65%\n\t\t\t\t\t\t\t<br>· Midterm     15%\n\t\t\t\t\t\t\t<br>· Final      30%\n\t\t\t\t\t\t\t<br>Comment:\n\t\t\t\t\t\t\t<br>Emily 讲课很清晰, ppt很有条例, 上她的课总能学到很多, 她很讲究公平, 不会让同学白多做努力, 和白偷懒, 都不会逃过她的眼皮。 小组内 会有互相的评价， 每条评价 她都是仔细审核， 评价高的同学 她会给额外的分， 非常公平 讲课也好 是个难得的好老师。这节课主要看小组作业 小组每周都有due 只有找对队友 在组内多做奉献 即使 mid final 没考好 也能拿到好成绩\n          </article>\n        </span>\n      </div>\n    </div>\n  </body>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-infmatx43/enavarro/enavarro-routing.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-infmatx43/enavarro/enavarro-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: EnavarroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnavarroPageRoutingModule", function() { return EnavarroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _enavarro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enavarro.page */ "./src/app/tab1/course-list/course-intro-infmatx43/enavarro/enavarro.page.ts");




var routes = [
    {
        path: '',
        component: _enavarro_page__WEBPACK_IMPORTED_MODULE_3__["EnavarroPage"]
    }
];
var EnavarroPageRoutingModule = /** @class */ (function () {
    function EnavarroPageRoutingModule() {
    }
    EnavarroPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], EnavarroPageRoutingModule);
    return EnavarroPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-infmatx43/enavarro/enavarro.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-infmatx43/enavarro/enavarro.module.ts ***!
  \*************************************************************************************/
/*! exports provided: EnavarroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnavarroPageModule", function() { return EnavarroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _enavarro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enavarro-routing.module */ "./src/app/tab1/course-list/course-intro-infmatx43/enavarro/enavarro-routing.module.ts");
/* harmony import */ var _enavarro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enavarro.page */ "./src/app/tab1/course-list/course-intro-infmatx43/enavarro/enavarro.page.ts");







var EnavarroPageModule = /** @class */ (function () {
    function EnavarroPageModule() {
    }
    EnavarroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _enavarro_routing_module__WEBPACK_IMPORTED_MODULE_5__["EnavarroPageRoutingModule"]
            ],
            declarations: [_enavarro_page__WEBPACK_IMPORTED_MODULE_6__["EnavarroPage"]]
        })
    ], EnavarroPageModule);
    return EnavarroPageModule;
}());



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-infmatx43/enavarro/enavarro.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-infmatx43/enavarro/enavarro.page.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\r\n  max-height: 35vh;\r\n  overflow: hidden;\r\n}\r\n\r\n.cucs-logo{\r\n  background: url('logo.png') no-repeat;\r\n  float: center;\r\n  vertical-align: bottom;\r\n  width: 100%;\r\n  height: 82px;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  color:rgb(0, 0, 0); \r\n  text-decoration: none;\r\n  box-shadow: 1px 2px 3px #ddd;\r\n  background: #fff;\r\n}\r\n\r\narticle {\r\n  text-align: left;\r\n  background: #fff;\r\n  text-indent: 2em;\r\n  margin-left: 1em;\r\n  margin-right: 1em;\r\n}\r\n\r\nion-button {\r\n  border-bottom: thin solid #5FBDCE;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQ0FBZ0Q7RUFDaEQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFFckIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC90YWIxL2NvdXJzZS1saXN0L2NvdXJzZS1pbnRyby1pbmZtYXR4NDMvZW5hdmFycm8vZW5hdmFycm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmN1Y3MtbG9nb3tcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL2xvZ28ucG5nXCIpIG5vLXJlcGVhdDtcclxuICBmbG9hdDogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA4MnB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOnJnYigwLCAwLCAwKTsgXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDJweCAzcHggI2RkZDtcclxuICBib3gtc2hhZG93OiAxcHggMnB4IDNweCAjZGRkO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcblxyXG5hcnRpY2xlIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgdGV4dC1pbmRlbnQ6IDJlbTtcclxuICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gIG1hcmdpbi1yaWdodDogMWVtO1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkICM1RkJEQ0U7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-infmatx43/enavarro/enavarro.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-infmatx43/enavarro/enavarro.page.ts ***!
  \***********************************************************************************/
/*! exports provided: EnavarroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnavarroPage", function() { return EnavarroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EnavarroPage = /** @class */ (function () {
    function EnavarroPage() {
    }
    EnavarroPage.prototype.ngOnInit = function () {
    };
    EnavarroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-enavarro',
            template: __webpack_require__(/*! raw-loader!./enavarro.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-infmatx43/enavarro/enavarro.page.html"),
            styles: [__webpack_require__(/*! ./enavarro.page.scss */ "./src/app/tab1/course-list/course-intro-infmatx43/enavarro/enavarro.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EnavarroPage);
    return EnavarroPage;
}());



/***/ })

}]);
//# sourceMappingURL=enavarro-enavarro-module-es5.js.map