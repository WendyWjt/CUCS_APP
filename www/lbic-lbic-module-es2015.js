(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lbic-lbic-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-ics6b/lbic/lbic.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/course-list/course-intro-ics6b/lbic/lbic.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list/course-intro-ics6b\">\n          返回ICS 6B列表\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list\">\n          返回课程列表\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"\">\n          返回首页\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <body class=\"user-select\">\n    <style type=\"text/css\">\n      /* not available for firefox & IE explorer */\n      #box {\n          width: 100%;\n          height: 88%;\n          overflow-x: hidden;\n          overflow-y: scroll;\n          line-height: 30px;\n          text-align: center;\n      }\n      #box::-webkit-scrollbar {\n          display: none;\n          visibility: hidden;\n      }\n    </style>\n    <div id=\"box\" class=\"panel-body\">\n      <div style=\"border: 1px  #000000; width: 98%; margin: 0 auto;\">\n        <span>\n          <article class=\"article1\">\n            <header>\n                <h2>\n                  <a style=\"color:#5FBDCE; text-decoration: none;\">\n                    ICS 6B Boolean Algebra & Logic - Lubomir Bic\n                  </a>\n                </h2>\n            </header>\n              内容：逻辑代数\n              <br>Professor: Lubomir Bic\n\t\t\t\t\t\t\t<br>难易程度: ★★★\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>先修课目：无\n\t\t\t\t\t\t\t<br>TA: Sameera Ghayyur &\n\t\t\t\t\t\t\t<br>Bojun Wang\n\t\t\t\t\t\t\t<br>Discussion:  不强制\n\t\t\t\t\t\t\t<br>Piazza: 无\n\t\t\t\t\t\t\t<br>Textbook:Discrete Mathmaticis (zybook)\n\t\t\t\t\t\t\t<br>Rate my professor 评分: 2.8\n\t\t\t\t\t\t\t<br>Grading criteria:\n\t\t\t\t\t\t\t<br>· Homework (写了就有分) 10%\n\t\t\t\t\t\t\t<br>· Midterm exam 45%\n\t\t\t\t\t\t\t<br>· Final 45%\n\t\t\t\t\t\t\t<br>Comment:\n\t\t\t\t\t\t\t<br>1. 因为这门课是网课，lecture都是提前录好的，每个lecture都讲的很清楚。只是这个老师出题会比较难，不过他会curve，所以努力弄明白他讲的内容就可以. 这节课的90%的分数来源于midterm和final，所以这两场考试一定要准备充足！\n\t\t\t\t\t\t\t<br>2: 上课就是讲作业，考试简单，请细心，不然容易翻船\n          </article>\n        </span>\n      </div>\n    </div>\n  </body>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics6b/lbic/lbic-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics6b/lbic/lbic-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: LbicPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LbicPageRoutingModule", function() { return LbicPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _lbic_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lbic.page */ "./src/app/tab1/course-list/course-intro-ics6b/lbic/lbic.page.ts");




const routes = [
    {
        path: '',
        component: _lbic_page__WEBPACK_IMPORTED_MODULE_3__["LbicPage"]
    }
];
let LbicPageRoutingModule = class LbicPageRoutingModule {
};
LbicPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LbicPageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics6b/lbic/lbic.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics6b/lbic/lbic.module.ts ***!
  \*************************************************************************/
/*! exports provided: LbicPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LbicPageModule", function() { return LbicPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _lbic_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lbic-routing.module */ "./src/app/tab1/course-list/course-intro-ics6b/lbic/lbic-routing.module.ts");
/* harmony import */ var _lbic_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lbic.page */ "./src/app/tab1/course-list/course-intro-ics6b/lbic/lbic.page.ts");







let LbicPageModule = class LbicPageModule {
};
LbicPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _lbic_routing_module__WEBPACK_IMPORTED_MODULE_5__["LbicPageRoutingModule"]
        ],
        declarations: [_lbic_page__WEBPACK_IMPORTED_MODULE_6__["LbicPage"]]
    })
], LbicPageModule);



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics6b/lbic/lbic.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics6b/lbic/lbic.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  text-align: center;\n  color: black;\n  text-decoration: none;\n  box-shadow: 1px 2px 3px #ddd;\n  background: #fff;\n}\n\narticle {\n  text-align: left;\n  background: #fff;\n  text-indent: 2em;\n  margin-left: 1em;\n  margin-right: 1em;\n}\n\nion-button {\n  border-bottom: thin solid #5FBDCE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9jb3Vyc2UtbGlzdC9jb3Vyc2UtaW50cm8taWNzNmIvbGJpYy9DOlxcVXNlcnNcXDk4NTUyXFxEZXNrdG9wXFxDVUNTX1YyXFxDVUNTX0FQUF8xMjE4XFxDVUNTX0FQUC9zcmNcXGFwcFxcdGFiMVxcY291cnNlLWxpc3RcXGNvdXJzZS1pbnRyby1pY3M2YlxcbGJpY1xcbGJpYy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjEvY291cnNlLWxpc3QvY291cnNlLWludHJvLWljczZiL2xiaWMvbGJpYy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUVBLDRCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURHQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHQTtFQUNJLGlDQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC90YWIxL2NvdXJzZS1saXN0L2NvdXJzZS1pbnRyby1pY3M2Yi9sYmljL2xiaWMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6cmdiKDAsIDAsIDApOyBcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDJweCAzcHggI2RkZDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAycHggM3B4ICNkZGQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG5cclxuYXJ0aWNsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHRleHQtaW5kZW50OiAyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCAjNUZCRENFO1xyXG59IiwiaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAycHggM3B4ICNkZGQ7XG4gIGJveC1zaGFkb3c6IDFweCAycHggM3B4ICNkZGQ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbmFydGljbGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0ZXh0LWluZGVudDogMmVtO1xuICBtYXJnaW4tbGVmdDogMWVtO1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgIzVGQkRDRTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics6b/lbic/lbic.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics6b/lbic/lbic.page.ts ***!
  \***********************************************************************/
/*! exports provided: LbicPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LbicPage", function() { return LbicPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LbicPage = class LbicPage {
    constructor() { }
    ngOnInit() {
    }
};
LbicPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lbic',
        template: __webpack_require__(/*! raw-loader!./lbic.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-ics6b/lbic/lbic.page.html"),
        styles: [__webpack_require__(/*! ./lbic.page.scss */ "./src/app/tab1/course-list/course-intro-ics6b/lbic/lbic.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LbicPage);



/***/ })

}]);
//# sourceMappingURL=lbic-lbic-module-es2015.js.map