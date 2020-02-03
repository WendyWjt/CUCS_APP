(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["course-intro-ics6n-course-intro-ics6n-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-ics6n/course-intro-ics6n.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/course-list/course-intro-ics6n/course-intro-ics6n.page.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list\">\n          返回课程列表\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"\">\n          返回首页\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <body class=\"user-select\">\n    <style type=\"text/css\">\n      /* not available for firefox & IE explorer */\n      #box {\n          width: 100%;\n          height: 88%;\n          overflow-x: hidden;\n          overflow-y: scroll;\n          line-height: 30px;\n          text-align: center;\n      }\n      #box::-webkit-scrollbar {\n          display: none;\n          visibility: hidden;\n      }\n    </style>\n    <div id=\"box\" class=\"panel-body\">\n      <div style=\"border: 1px  #000000; width: 98%; margin: 0 auto;\">\n        <span>\n          <article class=\"article1\">\n            <header>\n                <h2>\n                  <a style=\"color:#5FBDCE; text-decoration: none;\">\n                    ICS 6N Computational Linear Algebra - Gopi Meenakshisundaram\n                  </a>\n                </h2>\n            </header>\n              内容：线性代数\n              <br>Professor: Gopi Meenakshisundaram\n\t\t\t\t\t\t\t<br>难易程度：★★★\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>先修课目：无，可以和Math 3A替换\n\t\t\t\t\t\t\t<br>TA: 不明\n\t\t\t\t\t\t\t<br>Discussion:有\n\t\t\t\t\t\t\t<br>Piazza: 有\n\t\t\t\t\t\t\t<br>Textbook: 无\n\t\t\t\t\t\t\t<br>Rate my professor 评分: 2.9\n\t\t\t\t\t\t\t<br>Grading Criteria:\n\t\t\t\t\t\t\t<br>· Homework 占比较少\n\t\t\t\t\t\t\t<br>· Quiz 4次，比重逐个递增\n\t\t\t\t\t\t\t<br>· Midterm\n\t\t\t\t\t\t\t<br>· Final\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>题目都和作业类似。 改的挺松的\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>Comment:\n\t\t\t\t\t\t\t<br>从prof到ta印度口音严重。但如果努力听的话对知识的讲解还是不错的。成绩基本上是由quiz，midterm和final决定的，而这些考试虽然难度不低，但题目和平时作业相似度较高，并且偏向计算，理解各种题型怎么算考试分数就不会低。每次作业都弄清楚，考试前复习一下作业题，分数就不会低。\n          </article>\n        </span>\n      </div>\n    </div>\n  </body>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics6n/course-intro-ics6n-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics6n/course-intro-ics6n-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: CourseIntroIcs6nPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroIcs6nPageRoutingModule", function() { return CourseIntroIcs6nPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _course_intro_ics6n_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-intro-ics6n.page */ "./src/app/tab1/course-list/course-intro-ics6n/course-intro-ics6n.page.ts");




const routes = [
    {
        path: '',
        component: _course_intro_ics6n_page__WEBPACK_IMPORTED_MODULE_3__["CourseIntroIcs6nPage"]
    }
];
let CourseIntroIcs6nPageRoutingModule = class CourseIntroIcs6nPageRoutingModule {
};
CourseIntroIcs6nPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CourseIntroIcs6nPageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics6n/course-intro-ics6n.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics6n/course-intro-ics6n.module.ts ***!
  \**********************************************************************************/
/*! exports provided: CourseIntroIcs6nPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroIcs6nPageModule", function() { return CourseIntroIcs6nPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _course_intro_ics6n_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course-intro-ics6n-routing.module */ "./src/app/tab1/course-list/course-intro-ics6n/course-intro-ics6n-routing.module.ts");
/* harmony import */ var _course_intro_ics6n_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-intro-ics6n.page */ "./src/app/tab1/course-list/course-intro-ics6n/course-intro-ics6n.page.ts");







let CourseIntroIcs6nPageModule = class CourseIntroIcs6nPageModule {
};
CourseIntroIcs6nPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _course_intro_ics6n_routing_module__WEBPACK_IMPORTED_MODULE_5__["CourseIntroIcs6nPageRoutingModule"]
        ],
        declarations: [_course_intro_ics6n_page__WEBPACK_IMPORTED_MODULE_6__["CourseIntroIcs6nPage"]]
    })
], CourseIntroIcs6nPageModule);



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics6n/course-intro-ics6n.page.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics6n/course-intro-ics6n.page.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  text-align: center;\n  color: black;\n  text-decoration: none;\n  box-shadow: 1px 2px 3px #ddd;\n  background: #fff;\n}\n\narticle {\n  text-align: left;\n  background: #fff;\n  text-indent: 2em;\n  margin-left: 1em;\n  margin-right: 1em;\n}\n\nion-button {\n  border-bottom: thin solid #5FBDCE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9jb3Vyc2UtbGlzdC9jb3Vyc2UtaW50cm8taWNzNm4vQzpcXFVzZXJzXFw5ODU1MlxcRGVza3RvcFxcQ1VDU19WMlxcQ1VDU19BUFBfMTIxOFxcQ1VDU19BUFAvc3JjXFxhcHBcXHRhYjFcXGNvdXJzZS1saXN0XFxjb3Vyc2UtaW50cm8taWNzNm5cXGNvdXJzZS1pbnRyby1pY3M2bi5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjEvY291cnNlLWxpc3QvY291cnNlLWludHJvLWljczZuL2NvdXJzZS1pbnRyby1pY3M2bi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUVBLDRCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURHQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHQTtFQUNJLGlDQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC90YWIxL2NvdXJzZS1saXN0L2NvdXJzZS1pbnRyby1pY3M2bi9jb3Vyc2UtaW50cm8taWNzNm4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6cmdiKDAsIDAsIDApOyBcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDJweCAzcHggI2RkZDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAycHggM3B4ICNkZGQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG5cclxuYXJ0aWNsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHRleHQtaW5kZW50OiAyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCAjNUZCRENFO1xyXG59IiwiaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAycHggM3B4ICNkZGQ7XG4gIGJveC1zaGFkb3c6IDFweCAycHggM3B4ICNkZGQ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbmFydGljbGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0ZXh0LWluZGVudDogMmVtO1xuICBtYXJnaW4tbGVmdDogMWVtO1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgIzVGQkRDRTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics6n/course-intro-ics6n.page.ts":
/*!********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics6n/course-intro-ics6n.page.ts ***!
  \********************************************************************************/
/*! exports provided: CourseIntroIcs6nPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseIntroIcs6nPage", function() { return CourseIntroIcs6nPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CourseIntroIcs6nPage = class CourseIntroIcs6nPage {
    constructor() { }
    ngOnInit() {
    }
};
CourseIntroIcs6nPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-course-intro-ics6n',
        template: __webpack_require__(/*! raw-loader!./course-intro-ics6n.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-ics6n/course-intro-ics6n.page.html"),
        styles: [__webpack_require__(/*! ./course-intro-ics6n.page.scss */ "./src/app/tab1/course-list/course-intro-ics6n/course-intro-ics6n.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CourseIntroIcs6nPage);



/***/ })

}]);
//# sourceMappingURL=course-intro-ics6n-course-intro-ics6n-module-es2015.js.map