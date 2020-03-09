(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["course-intro-inf121-course-intro-inf121-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-inf121/course-intro-inf121.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/course-list/course-intro-inf121/course-intro-inf121.page.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list\">\r\n          返回课程列表\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"\">\r\n          返回首页\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <body class=\"user-select\">\r\n    <style type=\"text/css\">\r\n      /* not available for firefox & IE explorer */\r\n      #box {\r\n          width: 100%;\r\n          height: 88%;\r\n          overflow-x: hidden;\r\n          overflow-y: scroll;\r\n          line-height: 30px;\r\n          text-align: center;\r\n      }\r\n      #box::-webkit-scrollbar {\r\n          display: none;\r\n          visibility: hidden;\r\n      }\r\n    </style>\r\n    <div id=\"box\" class=\"panel-body\">\r\n      <div style=\"border: 1px  #000000; width: 98%; margin: 0 auto;\">\r\n        <span>\r\n          <article class=\"article1\">\r\n            <header>\r\n                <h2>\r\n                  <a style=\"color:#5FBDCE; text-decoration: none;\">\r\n                    INF 121 Software Design: Applications - Andre Van Der Hoek\r\n                  </a>\r\n                </h2>\r\n            </header>\r\n            <br>Professor:  Andre Van Der Hoek\r\n            <br>\r\n            <br>难易程度：★★★★★\r\n            <br>\r\n            <br>先修科目: ICS 33 or CSE 33\r\n            <br>\r\n            <br>TA：NA\r\n            <br>\r\n            <br>Discussion: 不强制\r\n            <br>\r\n            <br>Piazza : 有\r\n            <br>\r\n            <br>Textbook:  software design decoded\r\n            <br>\r\n            <br>Rate my professor 评分：3.8\r\n            <br>\r\n            <br>Grading Criteria:\r\n            <br>\r\n            <br>Projects: 60%  第一个project 会给分特别严格，后面会松很多\r\n            <br>Midterm: 15% 主要内容都在ppt上和书本上\r\n            <br>Final: 25% 主要内容都在ppt上和书本上\r\n            <br>\r\n            <br>Comments:\r\n            <br>\r\n            <br>教授：有ppt 但写的很混乱，教授重在培养学生的思维能力和实践能力。\r\n            <br>教授很看重学生的进步和在团队里的表现。\r\n            <br>书本是教授参与写的，给software design 带来很多有利地引导，很有用\r\n            <br>\r\n            <br>课程：这节课难度很大（TA给分实在太严厉了）但只要付出足够的努力，还是可以争取到很不错的成绩。 这节课project 的占分最大，并且每个project都是随机分配的小组，锻炼学生在陌生的环境中迅速和队友达到共识且合作顺利，这个project的分数基本可以决定学生的最终成绩，所以一定要努力去做好每一个project。并且也要在团队里多付出，因为每个project 都会组内评价。 最终的curve不明确，教授说基于学生的进步情况和团队里的表现情况，也就是根据小组评价。所以project尤为重要，要努力做好。\r\n        </article>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-inf121/course-intro-inf121-routing.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-inf121/course-intro-inf121-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: CourseIntroInf121PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroInf121PageRoutingModule", function() { return CourseIntroInf121PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _course_intro_inf121_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-intro-inf121.page */ "./src/app/tab1/course-list/course-intro-inf121/course-intro-inf121.page.ts");




const routes = [
    {
        path: '',
        component: _course_intro_inf121_page__WEBPACK_IMPORTED_MODULE_3__["CourseIntroInf121Page"]
    }
];
let CourseIntroInf121PageRoutingModule = class CourseIntroInf121PageRoutingModule {
};
CourseIntroInf121PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CourseIntroInf121PageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-inf121/course-intro-inf121.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-inf121/course-intro-inf121.module.ts ***!
  \************************************************************************************/
/*! exports provided: CourseIntroInf121PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroInf121PageModule", function() { return CourseIntroInf121PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _course_intro_inf121_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course-intro-inf121-routing.module */ "./src/app/tab1/course-list/course-intro-inf121/course-intro-inf121-routing.module.ts");
/* harmony import */ var _course_intro_inf121_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-intro-inf121.page */ "./src/app/tab1/course-list/course-intro-inf121/course-intro-inf121.page.ts");







let CourseIntroInf121PageModule = class CourseIntroInf121PageModule {
};
CourseIntroInf121PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _course_intro_inf121_routing_module__WEBPACK_IMPORTED_MODULE_5__["CourseIntroInf121PageRoutingModule"]
        ],
        declarations: [_course_intro_inf121_page__WEBPACK_IMPORTED_MODULE_6__["CourseIntroInf121Page"]]
    })
], CourseIntroInf121PageModule);



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-inf121/course-intro-inf121.page.scss":
/*!************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-inf121/course-intro-inf121.page.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\r\n  max-height: 35vh;\r\n  overflow: hidden;\r\n}\r\n\r\n.cucs-logo{\r\n  background: url('logo.png') no-repeat;\r\n  float: center;\r\n  vertical-align: bottom;\r\n  width: 100%;\r\n  height: 82px;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  color:rgb(0, 0, 0); \r\n  text-decoration: none;\r\n  box-shadow: 1px 2px 3px #ddd;\r\n  background: #fff;\r\n}\r\n\r\narticle {\r\n  text-align: left;\r\n  background: #fff;\r\n  text-indent: 2em;\r\n  margin-left: 1em;\r\n  margin-right: 1em;\r\n}\r\n\r\nion-button {\r\n  border-bottom: thin solid #5FBDCE;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQ0FBZ0Q7RUFDaEQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFFckIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC90YWIxL2NvdXJzZS1saXN0L2NvdXJzZS1pbnRyby1pbmYxMjEvY291cnNlLWludHJvLWluZjEyMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGltZyB7XHJcbiAgbWF4LWhlaWdodDogMzV2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY3Vjcy1sb2dve1xyXG4gIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvbG9nby5wbmdcIikgbm8tcmVwZWF0O1xyXG4gIGZsb2F0OiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDgycHg7XHJcbn1cclxuXHJcbmgyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6cmdiKDAsIDAsIDApOyBcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMnB4IDNweCAjZGRkO1xyXG4gIGJveC1zaGFkb3c6IDFweCAycHggM3B4ICNkZGQ7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuXHJcbmFydGljbGUge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB0ZXh0LWluZGVudDogMmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgIzVGQkRDRTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-inf121/course-intro-inf121.page.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-inf121/course-intro-inf121.page.ts ***!
  \**********************************************************************************/
/*! exports provided: CourseIntroInf121Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroInf121Page", function() { return CourseIntroInf121Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CourseIntroInf121Page = class CourseIntroInf121Page {
    constructor() { }
    ngOnInit() {
    }
};
CourseIntroInf121Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-course-intro-inf121',
        template: __webpack_require__(/*! raw-loader!./course-intro-inf121.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-inf121/course-intro-inf121.page.html"),
        styles: [__webpack_require__(/*! ./course-intro-inf121.page.scss */ "./src/app/tab1/course-list/course-intro-inf121/course-intro-inf121.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CourseIntroInf121Page);



/***/ })

}]);
//# sourceMappingURL=course-intro-inf121-course-intro-inf121-module-es2015.js.map