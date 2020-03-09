(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["course-intro-inf151-course-intro-inf151-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-inf151/course-intro-inf151.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/course-list/course-intro-inf151/course-intro-inf151.page.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list\">\r\n          返回课程列表\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"\">\r\n          返回首页\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <body class=\"user-select\">\r\n    <style type=\"text/css\">\r\n      /* not available for firefox & IE explorer */\r\n      #box {\r\n          width: 100%;\r\n          height: 88%;\r\n          overflow-x: hidden;\r\n          overflow-y: scroll;\r\n          line-height: 30px;\r\n          text-align: center;\r\n      }\r\n      #box::-webkit-scrollbar {\r\n          display: none;\r\n          visibility: hidden;\r\n      }\r\n    </style>\r\n    <div id=\"box\" class=\"panel-body\">\r\n      <div style=\"border: 1px  #000000; width: 98%; margin: 0 auto;\">\r\n        <span>\r\n          <article class=\"article1\">\r\n            <header>\r\n                <h2>\r\n                  <a style=\"color:#5FBDCE; text-decoration: none;\">\r\n                    INF 151  Project Management - Mark Gloria\r\n                  </a>\r\n                </h2>\r\n            </header>\r\n            <br>Professor: Mark Gloria\r\n            <br>\r\n            <br>难易程度：★★★★\r\n            <br>\r\n            <br>先修科目: IN4MATX 43 or ICS 52\r\n            <br>\r\n            <br>TA：NA\r\n            <br>\r\n            <br>Discussion: 不强制\r\n            <br>\r\n            <br>Piazza : 无\r\n            <br>\r\n            <br>Textbook: NA\r\n            <br>\r\n            <br>Rate my professor 评分：3.4\r\n            <br>\r\n            <br>Grading Criteria:\r\n            <br>\r\n            <br>1）Assignments 35% 一个有10个group作业，由TA+批改，基本上按照要求写就给分，还是比较容易的。\r\n            <br>\r\n            <br>（2）Quizzes 10% 一共9次左右quiz，要求课前阅读材料，只要做了课前阅读quiz不难，drop最低分。\r\n            <br>\r\n            <br>（3）Midterm 20% 还挺难的，要求对课本glossary有很深的了解\r\n            <br>\r\n            <br>（4）Final 25% 特别难，comprehensive而且有很多要背的内容\r\n            <br>\r\n            <br>Comments:\r\n            <br>\r\n            <br>教授：讲课基本按照ppt，考试内容确实是她上课时候说过的，但是她课上说的真的超级浅，导致有一种考试很简单的错觉. 老师喜欢先Quiz再讲东西，reading是必须要做的。老师比较和蔼，但是教学方式我个人认为比较落后。\r\n            <br>\r\n            <br>课程：这是所有INF课里比较难拿A的之一，主要难度在于midterm和final. 课程基本上就是介绍每种Management，要记很多东西。Project作业很简单，最后也不用交自己的project，只需要presentation。认真读书做quiz和考试是最重要的。\r\n        </article>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-inf151/course-intro-inf151-routing.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-inf151/course-intro-inf151-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: CourseIntroInf151PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroInf151PageRoutingModule", function() { return CourseIntroInf151PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _course_intro_inf151_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-intro-inf151.page */ "./src/app/tab1/course-list/course-intro-inf151/course-intro-inf151.page.ts");




const routes = [
    {
        path: '',
        component: _course_intro_inf151_page__WEBPACK_IMPORTED_MODULE_3__["CourseIntroInf151Page"]
    }
];
let CourseIntroInf151PageRoutingModule = class CourseIntroInf151PageRoutingModule {
};
CourseIntroInf151PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CourseIntroInf151PageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-inf151/course-intro-inf151.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-inf151/course-intro-inf151.module.ts ***!
  \************************************************************************************/
/*! exports provided: CourseIntroInf151PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroInf151PageModule", function() { return CourseIntroInf151PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _course_intro_inf151_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course-intro-inf151-routing.module */ "./src/app/tab1/course-list/course-intro-inf151/course-intro-inf151-routing.module.ts");
/* harmony import */ var _course_intro_inf151_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-intro-inf151.page */ "./src/app/tab1/course-list/course-intro-inf151/course-intro-inf151.page.ts");







let CourseIntroInf151PageModule = class CourseIntroInf151PageModule {
};
CourseIntroInf151PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _course_intro_inf151_routing_module__WEBPACK_IMPORTED_MODULE_5__["CourseIntroInf151PageRoutingModule"]
        ],
        declarations: [_course_intro_inf151_page__WEBPACK_IMPORTED_MODULE_6__["CourseIntroInf151Page"]]
    })
], CourseIntroInf151PageModule);



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-inf151/course-intro-inf151.page.scss":
/*!************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-inf151/course-intro-inf151.page.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\r\n  max-height: 35vh;\r\n  overflow: hidden;\r\n}\r\n\r\n.cucs-logo{\r\n  background: url('logo.png') no-repeat;\r\n  float: center;\r\n  vertical-align: bottom;\r\n  width: 100%;\r\n  height: 82px;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  color:rgb(0, 0, 0); \r\n  text-decoration: none;\r\n  box-shadow: 1px 2px 3px #ddd;\r\n  background: #fff;\r\n}\r\n\r\narticle {\r\n  text-align: left;\r\n  background: #fff;\r\n  text-indent: 2em;\r\n  margin-left: 1em;\r\n  margin-right: 1em;\r\n}\r\n\r\nion-button {\r\n  border-bottom: thin solid #5FBDCE;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQ0FBZ0Q7RUFDaEQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFFckIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC90YWIxL2NvdXJzZS1saXN0L2NvdXJzZS1pbnRyby1pbmYxNTEvY291cnNlLWludHJvLWluZjE1MS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGltZyB7XHJcbiAgbWF4LWhlaWdodDogMzV2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY3Vjcy1sb2dve1xyXG4gIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvbG9nby5wbmdcIikgbm8tcmVwZWF0O1xyXG4gIGZsb2F0OiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDgycHg7XHJcbn1cclxuXHJcbmgyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6cmdiKDAsIDAsIDApOyBcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMnB4IDNweCAjZGRkO1xyXG4gIGJveC1zaGFkb3c6IDFweCAycHggM3B4ICNkZGQ7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuXHJcbmFydGljbGUge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB0ZXh0LWluZGVudDogMmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgIzVGQkRDRTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-inf151/course-intro-inf151.page.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-inf151/course-intro-inf151.page.ts ***!
  \**********************************************************************************/
/*! exports provided: CourseIntroInf151Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroInf151Page", function() { return CourseIntroInf151Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CourseIntroInf151Page = class CourseIntroInf151Page {
    constructor() { }
    ngOnInit() {
    }
};
CourseIntroInf151Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-course-intro-inf151',
        template: __webpack_require__(/*! raw-loader!./course-intro-inf151.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-inf151/course-intro-inf151.page.html"),
        styles: [__webpack_require__(/*! ./course-intro-inf151.page.scss */ "./src/app/tab1/course-list/course-intro-inf151/course-intro-inf151.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CourseIntroInf151Page);



/***/ })

}]);
//# sourceMappingURL=course-intro-inf151-course-intro-inf151-module-es2015.js.map