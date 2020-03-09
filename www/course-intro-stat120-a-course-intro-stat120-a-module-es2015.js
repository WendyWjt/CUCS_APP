(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["course-intro-stat120-a-course-intro-stat120-a-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-stat120-a/course-intro-stat120-a.page.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/course-list/course-intro-stat120-a/course-intro-stat120-a.page.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list\">\r\n          返回课程列表\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"\">\r\n          返回首页\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <body class=\"user-select\">\r\n    <style type=\"text/css\">\r\n      /* not available for firefox & IE explorer */\r\n      #box {\r\n          width: 100%;\r\n          height: 88%;\r\n          overflow-x: hidden;\r\n          overflow-y: scroll;\r\n          line-height: 30px;\r\n          text-align: center;\r\n      }\r\n      #box::-webkit-scrollbar {\r\n          display: none;\r\n          visibility: hidden;\r\n      }\r\n    </style>\r\n    <div id=\"box\" class=\"panel-body\">\r\n      <div style=\"border: 1px  #000000; width: 98%; margin: 0 auto;\">\r\n        <span>\r\n          <article class=\"article1\">\r\n            <header>\r\n                <h2>\r\n                  <a style=\"color:#5FBDCE; text-decoration: none;\">\r\n                    Stats 120A Introduction to Probability and Statistics - Sevan Krikor Gulesserian\r\n                  </a>\r\n                </h2>\r\n            </header>\r\n            <br>Professor: Sevan Krikor Gulesserian\r\n            <br>\r\n            <br>难易程度：★\r\n            <br>\r\n            <br>先修科目: Math 2A and Math 2B and (Math 2D or Math 4)\r\n            <br>\r\n            <br>TA：NA\r\n            <br>\r\n            <br>Discussion: 不强制\r\n            <br>\r\n            <br>Piazza : 无\r\n            <br>\r\n            <br>Textbook: NA\r\n            <br>\r\n            <br>Rate my professor 评分：4.5\r\n            <br>\r\n            <br>Grading Criteria:\r\n            <br>\r\n            <br>· Homework 25%\r\n            <br>\r\n            <br>· Midterm 35%\r\n            <br>\r\n            <br>· Final 40%\r\n            <br>\r\n            <br>Comments:\r\n            <br>\r\n            <br>选koko准没错 其实课讲的不怎么样...但分高考试简单\r\n            <br>\r\n            <br>课程：课本身不难 也可能是koko的考试的原因 考试和作业和sample很相像 搞懂稳a 课本身没curve但是作业会给满 总分差一两分一个等级的话他会直接给提高一个等级 人很好\r\n        </article>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-stat120-a/course-intro-stat120-a-routing.module.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-stat120-a/course-intro-stat120-a-routing.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: CourseIntroStat120APageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroStat120APageRoutingModule", function() { return CourseIntroStat120APageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _course_intro_stat120_a_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-intro-stat120-a.page */ "./src/app/tab1/course-list/course-intro-stat120-a/course-intro-stat120-a.page.ts");




const routes = [
    {
        path: '',
        component: _course_intro_stat120_a_page__WEBPACK_IMPORTED_MODULE_3__["CourseIntroStat120APage"]
    }
];
let CourseIntroStat120APageRoutingModule = class CourseIntroStat120APageRoutingModule {
};
CourseIntroStat120APageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CourseIntroStat120APageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-stat120-a/course-intro-stat120-a.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-stat120-a/course-intro-stat120-a.module.ts ***!
  \******************************************************************************************/
/*! exports provided: CourseIntroStat120APageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroStat120APageModule", function() { return CourseIntroStat120APageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _course_intro_stat120_a_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course-intro-stat120-a-routing.module */ "./src/app/tab1/course-list/course-intro-stat120-a/course-intro-stat120-a-routing.module.ts");
/* harmony import */ var _course_intro_stat120_a_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-intro-stat120-a.page */ "./src/app/tab1/course-list/course-intro-stat120-a/course-intro-stat120-a.page.ts");







let CourseIntroStat120APageModule = class CourseIntroStat120APageModule {
};
CourseIntroStat120APageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _course_intro_stat120_a_routing_module__WEBPACK_IMPORTED_MODULE_5__["CourseIntroStat120APageRoutingModule"]
        ],
        declarations: [_course_intro_stat120_a_page__WEBPACK_IMPORTED_MODULE_6__["CourseIntroStat120APage"]]
    })
], CourseIntroStat120APageModule);



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-stat120-a/course-intro-stat120-a.page.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-stat120-a/course-intro-stat120-a.page.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\r\n  max-height: 35vh;\r\n  overflow: hidden;\r\n}\r\n\r\n.cucs-logo{\r\n  background: url('logo.png') no-repeat;\r\n  float: center;\r\n  vertical-align: bottom;\r\n  width: 100%;\r\n  height: 82px;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  color:rgb(0, 0, 0); \r\n  text-decoration: none;\r\n  box-shadow: 1px 2px 3px #ddd;\r\n  background: #fff;\r\n}\r\n\r\narticle {\r\n  text-align: left;\r\n  background: #fff;\r\n  text-indent: 2em;\r\n  margin-left: 1em;\r\n  margin-right: 1em;\r\n}\r\n\r\nion-button {\r\n  border-bottom: thin solid #5FBDCE;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQ0FBZ0Q7RUFDaEQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFFckIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC90YWIxL2NvdXJzZS1saXN0L2NvdXJzZS1pbnRyby1zdGF0MTIwLWEvY291cnNlLWludHJvLXN0YXQxMjAtYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGltZyB7XHJcbiAgbWF4LWhlaWdodDogMzV2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY3Vjcy1sb2dve1xyXG4gIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvbG9nby5wbmdcIikgbm8tcmVwZWF0O1xyXG4gIGZsb2F0OiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDgycHg7XHJcbn1cclxuXHJcbmgyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6cmdiKDAsIDAsIDApOyBcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMnB4IDNweCAjZGRkO1xyXG4gIGJveC1zaGFkb3c6IDFweCAycHggM3B4ICNkZGQ7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuXHJcbmFydGljbGUge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB0ZXh0LWluZGVudDogMmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgIzVGQkRDRTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-stat120-a/course-intro-stat120-a.page.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-stat120-a/course-intro-stat120-a.page.ts ***!
  \****************************************************************************************/
/*! exports provided: CourseIntroStat120APage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroStat120APage", function() { return CourseIntroStat120APage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CourseIntroStat120APage = class CourseIntroStat120APage {
    constructor() { }
    ngOnInit() {
    }
};
CourseIntroStat120APage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-course-intro-stat120-a',
        template: __webpack_require__(/*! raw-loader!./course-intro-stat120-a.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-stat120-a/course-intro-stat120-a.page.html"),
        styles: [__webpack_require__(/*! ./course-intro-stat120-a.page.scss */ "./src/app/tab1/course-list/course-intro-stat120-a/course-intro-stat120-a.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CourseIntroStat120APage);



/***/ })

}]);
//# sourceMappingURL=course-intro-stat120-a-course-intro-stat120-a-module-es2015.js.map