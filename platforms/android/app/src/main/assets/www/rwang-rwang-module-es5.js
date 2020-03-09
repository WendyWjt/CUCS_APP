(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rwang-rwang-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-ics31/rwang/rwang.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/course-list/course-intro-ics31/rwang/rwang.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list/course-intro-ics31\">\n          返回ICS 31列表\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list\">\n          返回课程列表\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"\">\n          返回首页\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <body class=\"user-select\">\n    <style type=\"text/css\">\n      /* not available for firefox & IE explorer */\n      #box {\n          width: 100%;\n          height: 88%;\n          overflow-x: hidden;\n          overflow-y: scroll;\n          line-height: 30px;\n          text-align: center;\n      }\n      #box::-webkit-scrollbar {\n          display: none;\n          visibility: hidden;\n      }\n    </style>\n    <div id=\"box\" class=\"panel-body\">\n      <div style=\"border: 1px  #000000; width: 98%; margin: 0 auto;\">\n        <span>\n          <article class=\"article1\">\n            <header>\n                <h2>\n                  <a style=\"color:#5FBDCE; text-decoration: none;\">\n                    ICS 31 Intro to Programming - Richert Wang\n                  </a>\n                </h2>\n            </header>\n              内容：学习Python语言\n              <br>Professor: Richert Wang\n\t\t\t\t\t\t\t<br>TA: Junkyu Lee  10个project都是TA改的，感觉改的没有非常严。\n\t\t\t\t\t\t\t<br>Lab: 去lab写program比较好，因为10个program都是pair programming,就是一周一个program的节奏。\n\t\t\t\t\t\t\t<br>Piazza: 有\n\t\t\t\t\t\t\t<br>Textbook: 无\n\t\t\t\t\t\t\t<br>Rate my professor 评分: 4.0\n\t\t\t\t\t\t\t<br>http://www.ratemyprofessors.com/ShowRatings.jsp?tid=1395406\n\t\t\t\t\t\t\t<br>这个老师也比较中规中矩，按套路出牌，但是貌似他不怎么教31这节课。\n\t\t\t\t\t\t\t<br>Grading Criteria:（同上）\n\t\t\t\t\t\t\t<br>Comment:\n\t\t\t\t\t\t\t<br>这节课就是入门级的学习python，即使老师不一样midterm sample还有写的这是个program的内容跟其他老师没有什么区别的。\n          </article>\n        </span>\n      </div>\n    </div>\n  </body>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics31/rwang/rwang-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics31/rwang/rwang-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: RwangPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RwangPageRoutingModule", function() { return RwangPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _rwang_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rwang.page */ "./src/app/tab1/course-list/course-intro-ics31/rwang/rwang.page.ts");




var routes = [
    {
        path: '',
        component: _rwang_page__WEBPACK_IMPORTED_MODULE_3__["RwangPage"]
    }
];
var RwangPageRoutingModule = /** @class */ (function () {
    function RwangPageRoutingModule() {
    }
    RwangPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], RwangPageRoutingModule);
    return RwangPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics31/rwang/rwang.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics31/rwang/rwang.module.ts ***!
  \***************************************************************************/
/*! exports provided: RwangPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RwangPageModule", function() { return RwangPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _rwang_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rwang-routing.module */ "./src/app/tab1/course-list/course-intro-ics31/rwang/rwang-routing.module.ts");
/* harmony import */ var _rwang_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rwang.page */ "./src/app/tab1/course-list/course-intro-ics31/rwang/rwang.page.ts");







var RwangPageModule = /** @class */ (function () {
    function RwangPageModule() {
    }
    RwangPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _rwang_routing_module__WEBPACK_IMPORTED_MODULE_5__["RwangPageRoutingModule"]
            ],
            declarations: [_rwang_page__WEBPACK_IMPORTED_MODULE_6__["RwangPage"]]
        })
    ], RwangPageModule);
    return RwangPageModule;
}());



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics31/rwang/rwang.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics31/rwang/rwang.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\r\n  max-height: 35vh;\r\n  overflow: hidden;\r\n}\r\n\r\n.cucs-logo{\r\n  background: url('logo.png') no-repeat;\r\n  float: center;\r\n  vertical-align: bottom;\r\n  width: 100%;\r\n  height: 82px;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  color:rgb(0, 0, 0); \r\n  text-decoration: none;\r\n  box-shadow: 1px 2px 3px #ddd;\r\n  background: #fff;\r\n}\r\n\r\narticle {\r\n  text-align: left;\r\n  background: #fff;\r\n  text-indent: 2em;\r\n  margin-left: 1em;\r\n  margin-right: 1em;\r\n}\r\n\r\nion-button {\r\n  border-bottom: thin solid #5FBDCE;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQ0FBZ0Q7RUFDaEQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFFckIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC90YWIxL2NvdXJzZS1saXN0L2NvdXJzZS1pbnRyby1pY3MzMS9yd2FuZy9yd2FuZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGltZyB7XHJcbiAgbWF4LWhlaWdodDogMzV2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY3Vjcy1sb2dve1xyXG4gIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvbG9nby5wbmdcIikgbm8tcmVwZWF0O1xyXG4gIGZsb2F0OiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDgycHg7XHJcbn1cclxuXHJcbmgyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6cmdiKDAsIDAsIDApOyBcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMnB4IDNweCAjZGRkO1xyXG4gIGJveC1zaGFkb3c6IDFweCAycHggM3B4ICNkZGQ7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuXHJcbmFydGljbGUge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB0ZXh0LWluZGVudDogMmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgIzVGQkRDRTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics31/rwang/rwang.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics31/rwang/rwang.page.ts ***!
  \*************************************************************************/
/*! exports provided: RwangPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RwangPage", function() { return RwangPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RwangPage = /** @class */ (function () {
    function RwangPage() {
    }
    RwangPage.prototype.ngOnInit = function () {
    };
    RwangPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rwang',
            template: __webpack_require__(/*! raw-loader!./rwang.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-ics31/rwang/rwang.page.html"),
            styles: [__webpack_require__(/*! ./rwang.page.scss */ "./src/app/tab1/course-list/course-intro-ics31/rwang/rwang.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RwangPage);
    return RwangPage;
}());



/***/ })

}]);
//# sourceMappingURL=rwang-rwang-module-es5.js.map