(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-about-us-about-us-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/about-us/about-us.page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/about-us/about-us.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\n  <ion-item href=\"/cucs/home\">\n    <ion-icon slot=\"start\" color=\"medium\" name=\"arrow-round-back\"></ion-icon>\n    <ion-label>返回</ion-label>\n  </ion-item>\n  <body class=\"user-select\">\n    <style type=\"text/css\">\n      /* not available for firefox & IE explorer */\n      #box {\n          width: 100%;\n          height: 88%;\n          overflow-x: hidden;\n          overflow-y: scroll;\n          line-height: 30px;\n          text-align: center;\n      }\n      #box::-webkit-scrollbar {\n          display: none;\n          visibility: hidden;\n      }\n    </style>\n    <div id=\"box\" class=\"panel-body\">\n      <div style=\"border: 1px  #000000; width: 98%; margin: 0 auto;\">\n        <span>\n          <article class=\"article1\">\n            <header>\n                <h2>\n                  <a style=\"color:#5FBDCE; text-decoration: none;\">\n                    About Us\n                  </a>\n                </h2>\n            </header>\n            <br>Chinese Union in Computer Science (CUCS) 成立于2017年4月，社团创立的初衷是希望建立一个能让ICS学院的所有中国学生进行学术或非学术性沟通交流的平台。目前社团分为四个部门，分别是：\n            <br>\n            <br>学术部  活动部  宣传部  外联\n            <br>\n            <br>未来社团将会不定期举行学术分享会以及关于ICS学院Lower Level课程（如ICS 31, 32, 33）的Review Session，以此来帮助刚进入ICS学院，并不是很熟悉编程的同学们更好的学习掌握课程内容。社团近期还计划建立一个Project Platform帮助大家寻找志同道合的朋友一起做想做的事。除此之外，社团未来还会有各种非学术的休闲活动，让大家有机会认识更多有共同语言的朋友，丰富课外生活。\n            <ion-grid>\n              <ion-row>\n                <ion-col>\n                  <div class=\"cucs-web\"></div>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <div class=\"cucs-weixin\"></div>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </article>\n        </span>\n      </div>\n    </div>\n  </body>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/about-us/about-us-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/tab1/about-us/about-us-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: AboutUsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPageRoutingModule", function() { return AboutUsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _about_us_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-us.page */ "./src/app/tab1/about-us/about-us.page.ts");




const routes = [
    {
        path: '',
        component: _about_us_page__WEBPACK_IMPORTED_MODULE_3__["AboutUsPage"]
    }
];
let AboutUsPageRoutingModule = class AboutUsPageRoutingModule {
};
AboutUsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AboutUsPageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/about-us/about-us.module.ts":
/*!**************************************************!*\
  !*** ./src/app/tab1/about-us/about-us.module.ts ***!
  \**************************************************/
/*! exports provided: AboutUsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPageModule", function() { return AboutUsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _about_us_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-us-routing.module */ "./src/app/tab1/about-us/about-us-routing.module.ts");
/* harmony import */ var _about_us_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about-us.page */ "./src/app/tab1/about-us/about-us.page.ts");







let AboutUsPageModule = class AboutUsPageModule {
};
AboutUsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _about_us_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutUsPageRoutingModule"]
        ],
        declarations: [_about_us_page__WEBPACK_IMPORTED_MODULE_6__["AboutUsPage"]]
    })
], AboutUsPageModule);



/***/ }),

/***/ "./src/app/tab1/about-us/about-us.page.scss":
/*!**************************************************!*\
  !*** ./src/app/tab1/about-us/about-us.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\r\n  max-height: 35vh;\r\n  overflow: hidden;\r\n}\r\n\r\n.cucs-logo{\r\n  background: url('logo.png') no-repeat;\r\n  float: center;\r\n  vertical-align: bottom;\r\n  width: 100%;\r\n  height: 82px;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  color:rgb(0, 0, 0); \r\n  text-decoration: none;\r\n  box-shadow: 1px 2px 3px #ddd;\r\n  background: #fff;\r\n}\r\n\r\narticle {\r\n  text-align: left;\r\n  background: #fff;\r\n  text-indent: 2em;\r\n  margin-left: 1em;\r\n  margin-right: 1em;\r\n}\r\n\r\nion-button {\r\n  border-bottom: thin solid #5FBDCE;\r\n}\r\n\r\n.cucs-web {\n  background: url('cucs_web.png') no-repeat;\n  float: center;\n  vertical-align: bottom;\n  width: 100%;\n  height: 300px;\n}\r\n\r\n.cucs-weixin {\n  background: url('cucs_weixin.png') no-repeat;\n  float: center;\n  vertical-align: bottom;\n  width: 100%;\n  height: 500px;\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMS9hYm91dC11cy9DOlxcVXNlcnNcXDk4NTUyXFxEZXNrdG9wXFxDVUNTX1YyXFxDVUNTX0FQUF8xMjE4XFxDVUNTX0FQUC9zcmNcXGFwcFxcdGFiMVxcYWJvdXQtdXNcXGFib3V0LXVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMS9hYm91dC11cy9hYm91dC11cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUNBQWdEO0VBQ2hELGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBRXJCLDRCQUE0QjtFQUM1QixnQkFBZ0I7QUFDbEI7O0FBR0E7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQy9CQTtFQUNJLHlDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNBSjs7QURHQTtFQUNJLDRDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvYWJvdXQtdXMvYWJvdXQtdXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmN1Y3MtbG9nb3tcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL2xvZ28ucG5nXCIpIG5vLXJlcGVhdDtcclxuICBmbG9hdDogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA4MnB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOnJnYigwLCAwLCAwKTsgXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDJweCAzcHggI2RkZDtcclxuICBib3gtc2hhZG93OiAxcHggMnB4IDNweCAjZGRkO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcblxyXG5hcnRpY2xlIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgdGV4dC1pbmRlbnQ6IDJlbTtcclxuICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gIG1hcmdpbi1yaWdodDogMWVtO1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkICM1RkJEQ0U7XHJcbn0iLCJAaW1wb3J0IHVybChcIi4uL3RhYjEucGFnZS5zY3NzXCIpO1xyXG5cclxuLmN1Y3Mtd2Vie1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9jdWNzX3dlYi5wbmdcIikgbm8tcmVwZWF0O1xyXG4gICAgZmxvYXQ6IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi5jdWNzLXdlaXhpbntcclxuICAgIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvY3Vjc193ZWl4aW4ucG5nXCIpIG5vLXJlcGVhdDtcclxuICAgIGZsb2F0OiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG59IiwiQGltcG9ydCB1cmwoXCIuLi90YWIxLnBhZ2Uuc2Nzc1wiKTtcbi5jdWNzLXdlYiB7XG4gIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvY3Vjc193ZWIucG5nXCIpIG5vLXJlcGVhdDtcbiAgZmxvYXQ6IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAwcHg7XG59XG5cbi5jdWNzLXdlaXhpbiB7XG4gIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvY3Vjc193ZWl4aW4ucG5nXCIpIG5vLXJlcGVhdDtcbiAgZmxvYXQ6IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/tab1/about-us/about-us.page.ts":
/*!************************************************!*\
  !*** ./src/app/tab1/about-us/about-us.page.ts ***!
  \************************************************/
/*! exports provided: AboutUsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPage", function() { return AboutUsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutUsPage = class AboutUsPage {
    constructor() { }
    ngOnInit() {
    }
};
AboutUsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us',
        template: __webpack_require__(/*! raw-loader!./about-us.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/about-us/about-us.page.html"),
        styles: [__webpack_require__(/*! ./about-us.page.scss */ "./src/app/tab1/about-us/about-us.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AboutUsPage);



/***/ })

}]);
//# sourceMappingURL=tab1-about-us-about-us-module-es2015.js.map