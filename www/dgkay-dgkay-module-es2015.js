(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dgkay-dgkay-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-ics31/dgkay/dgkay.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/course-list/course-intro-ics31/dgkay/dgkay.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list/course-intro-ics31\">\n          返回ICS 31列表\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list\">\n          返回课程列表\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"\">\n          返回首页\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <body class=\"user-select\">\n    <style type=\"text/css\">\n      /* not available for firefox & IE explorer */\n      #box {\n          width: 100%;\n          height: 88%;\n          overflow-x: hidden;\n          overflow-y: scroll;\n          line-height: 30px;\n          text-align: center;\n      }\n      #box::-webkit-scrollbar {\n          display: none;\n          visibility: hidden;\n      }\n    </style>\n    <div id=\"box\" class=\"panel-body\">\n      <div style=\"border: 1px  #000000; width: 98%; margin: 0 auto;\">\n        <span>\n          <article class=\"article1\">\n            <header>\n                <h2>\n                  <a style=\"color:#5FBDCE; text-decoration: none;\">\n                    ICS 31 Intro to Programming - David G. Kay\n                  </a>\n                </h2>\n            </header>\n              内容：学习Python语言\n              <br>Professor: David G. Kay\n              <br>难易程度: ★\n\n              <br>先修课目：无\n              <br>TA: Yadhu Prakash TA给所负责Lab的全部Project判分，很宽松\n              <br>Lab: 去lab写program的话可以和小伙伴一起写，课程建议组队，有问题也可以问Tutor或TA，但我没怎么去过。。。\n              <br>Piazza: 有\n              <br>Textbook: Introduction to Computing Using Python在网上有电子版资源（其实不看也没关系，看了有助于巩固基础）\n              <br>Rate my professor 评分: 4.3 http://www.ratemyprofessors.com/ShowRatings.jsp?tid=105043\n              <br>这个老师人非常好，和蔼可亲，教学大纲清晰，再加上课程不难，大家对他印象都很好。要说唯一可能能改进的地方是上课时间打代码多过讲解，但对于一个编程课来说也是很正常的。\n              <br>Grading Criteria:\n              <br>· Lab Assignments (30%) \n              <br>10次weekly lab assignments，都是可以找搭档一起完成的，但是搭档不可以重复！\n              <br>· Weekly Quizzes (10%) \n              <br>These quizzes are given online through EEE. These quizzes are self-graded and you will receive credit for simply completing them (we won't check the correctness of your answers). The purpose of these quizzes is to help students keep up with the pace of the class. It's also used to help prepare you for the exams.\n              <br>这10%基本白送。\n              <br>· Class Participation (10%)\n              <br>This grade is based on participating in lab and working diligently with your partner. Contributing to Piazza posts can also help your grade in this category.\n              <br>这10%也基本是白送。\n              <br>· Two midterms (20% total)\n              <br>都有sample，老师会提供，网上也很好找到，套路一样多做几份没啥问题。\n              <br>· One final exam (30%) \n              <br>Comment:\n              <br>这节课对于之前没学过编程的人有难度，但即使没学过拿A也不困难。\n          </article>\n        </span>\n      </div>\n    </div>\n  </body>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics31/dgkay/dgkay-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics31/dgkay/dgkay-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: DgkayPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DgkayPageRoutingModule", function() { return DgkayPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dgkay_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dgkay.page */ "./src/app/tab1/course-list/course-intro-ics31/dgkay/dgkay.page.ts");




const routes = [
    {
        path: '',
        component: _dgkay_page__WEBPACK_IMPORTED_MODULE_3__["DgkayPage"]
    }
];
let DgkayPageRoutingModule = class DgkayPageRoutingModule {
};
DgkayPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DgkayPageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics31/dgkay/dgkay.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics31/dgkay/dgkay.module.ts ***!
  \***************************************************************************/
/*! exports provided: DgkayPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DgkayPageModule", function() { return DgkayPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dgkay_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dgkay-routing.module */ "./src/app/tab1/course-list/course-intro-ics31/dgkay/dgkay-routing.module.ts");
/* harmony import */ var _dgkay_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dgkay.page */ "./src/app/tab1/course-list/course-intro-ics31/dgkay/dgkay.page.ts");







let DgkayPageModule = class DgkayPageModule {
};
DgkayPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dgkay_routing_module__WEBPACK_IMPORTED_MODULE_5__["DgkayPageRoutingModule"]
        ],
        declarations: [_dgkay_page__WEBPACK_IMPORTED_MODULE_6__["DgkayPage"]]
    })
], DgkayPageModule);



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics31/dgkay/dgkay.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics31/dgkay/dgkay.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\r\n  max-height: 35vh;\r\n  overflow: hidden;\r\n}\r\n\r\n.cucs-logo{\r\n  background: url('logo.png') no-repeat;\r\n  float: center;\r\n  vertical-align: bottom;\r\n  width: 100%;\r\n  height: 82px;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  color:rgb(0, 0, 0); \r\n  text-decoration: none;\r\n  box-shadow: 1px 2px 3px #ddd;\r\n  background: #fff;\r\n}\r\n\r\narticle {\r\n  text-align: left;\r\n  background: #fff;\r\n  text-indent: 2em;\r\n  margin-left: 1em;\r\n  margin-right: 1em;\r\n}\r\n\r\nion-button {\r\n  border-bottom: thin solid #5FBDCE;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQ0FBZ0Q7RUFDaEQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFFckIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC90YWIxL2NvdXJzZS1saXN0L2NvdXJzZS1pbnRyby1pY3MzMS9kZ2theS9kZ2theS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGltZyB7XHJcbiAgbWF4LWhlaWdodDogMzV2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY3Vjcy1sb2dve1xyXG4gIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvbG9nby5wbmdcIikgbm8tcmVwZWF0O1xyXG4gIGZsb2F0OiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDgycHg7XHJcbn1cclxuXHJcbmgyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6cmdiKDAsIDAsIDApOyBcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMnB4IDNweCAjZGRkO1xyXG4gIGJveC1zaGFkb3c6IDFweCAycHggM3B4ICNkZGQ7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuXHJcbmFydGljbGUge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB0ZXh0LWluZGVudDogMmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgIzVGQkRDRTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics31/dgkay/dgkay.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics31/dgkay/dgkay.page.ts ***!
  \*************************************************************************/
/*! exports provided: DgkayPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DgkayPage", function() { return DgkayPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DgkayPage = class DgkayPage {
    constructor() { }
    ngOnInit() {
    }
};
DgkayPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dgkay',
        template: __webpack_require__(/*! raw-loader!./dgkay.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-ics31/dgkay/dgkay.page.html"),
        styles: [__webpack_require__(/*! ./dgkay.page.scss */ "./src/app/tab1/course-list/course-intro-ics31/dgkay/dgkay.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DgkayPage);



/***/ })

}]);
//# sourceMappingURL=dgkay-dgkay-module-es2015.js.map