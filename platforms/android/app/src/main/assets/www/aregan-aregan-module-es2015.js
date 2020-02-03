(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["aregan-aregan-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-ics6b/aregan/aregan.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/course-list/course-intro-ics6b/aregan/aregan.page.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list/course-intro-ics6b\">\n          返回ICS 6B列表\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list\">\n          返回课程列表\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"\">\n          返回首页\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <body class=\"user-select\">\n    <style type=\"text/css\">\n      /* not available for firefox & IE explorer */\n      #box {\n          width: 100%;\n          height: 88%;\n          overflow-x: hidden;\n          overflow-y: scroll;\n          line-height: 30px;\n          text-align: center;\n      }\n      #box::-webkit-scrollbar {\n          display: none;\n          visibility: hidden;\n      }\n    </style>\n    <div id=\"box\" class=\"panel-body\">\n      <div style=\"border: 1px  #000000; width: 98%; margin: 0 auto;\">\n        <span>\n          <article class=\"article1\">\n            <header>\n                <h2>\n                  <a style=\"color:#5FBDCE; text-decoration: none;\">\n                    ICS 6B Boolean Algebra & Logic - Amelia C. Regan\n                  </a>\n                </h2>\n            </header>\n              内容：逻辑代数\n              <br>Professor: Amelia C. Regan\n\t\t\t\t\t\t\t<br>难易程度: ★\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>先修课目：无\n\t\t\t\t\t\t\t<br>TA: Mehdi Rahimzadeh &\n\t\t\t\t\t\t\t<br>Reza Asadi\n\t\t\t\t\t\t\t<br>Grader:  Hyungik Oh & Wentao Zhu\n\t\t\t\t\t\t\t<br>Discussion:  不是强制性的，我好像都没怎么去过， 不过有问题可以在piazza上问。\n\t\t\t\t\t\t\t<br>Piazza: 有\n\t\t\t\t\t\t\t<br>Textbook: online textbook zybook 大概是$50左右\n\t\t\t\t\t\t\t<br>Rate my professor 评分: 3.0\n\t\t\t\t\t\t\t<br>http://www.ratemyprofessors.com/ShowRatings.jsp?tid=959140\n\t\t\t\t\t\t\t<br>个人感觉这个老师不难，经常上课自己都讲不清楚，容易犯糊涂，一个小时20分钟的课，从来没有上完过，基本都早放了。\n\t\t\t\t\t\t\t<br>Grading criteria: （可能有所变动）\n\t\t\t\t\t\t\t<br>· Reading Assignments 7%\n\t\t\t\t\t\t\t<br>在online textbook里完成，很简单，只需要按时浏览并把里面的一些简单例题都做出来。做错了也没关系，没有次数限制。基本上是白送的分。\n\t\t\t\t\t\t\t<br>· Homework 8%\n\t\t\t\t\t\t\t<br>一共有八个作业，手写的，要好好写（感觉都是靠做作业来学而且考试跟作业很像），由两个grader改，改的还蛮松的，基本上都是满分。\n\t\t\t\t\t\t\t<br>· Midterm exams 60%\n\t\t\t\t\t\t\t<br>有三个midterm 跟作业很像\n\t\t\t\t\t\t\t<br>· Final 25%\n\t\t\t\t\t\t\t<br>Comment:\n\t\t\t\t\t\t\t<br>这节课的内容不难，学霸型的同学完全可以把这课当水课上，只要好好看书好好做作业,拿A完全是没有任何问题的！！！\n          </article>\n        </span>\n      </div>\n    </div>\n  </body>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics6b/aregan/aregan-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics6b/aregan/aregan-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: AreganPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreganPageRoutingModule", function() { return AreganPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _aregan_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aregan.page */ "./src/app/tab1/course-list/course-intro-ics6b/aregan/aregan.page.ts");




const routes = [
    {
        path: '',
        component: _aregan_page__WEBPACK_IMPORTED_MODULE_3__["AreganPage"]
    }
];
let AreganPageRoutingModule = class AreganPageRoutingModule {
};
AreganPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AreganPageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics6b/aregan/aregan.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics6b/aregan/aregan.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AreganPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreganPageModule", function() { return AreganPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _aregan_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aregan-routing.module */ "./src/app/tab1/course-list/course-intro-ics6b/aregan/aregan-routing.module.ts");
/* harmony import */ var _aregan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aregan.page */ "./src/app/tab1/course-list/course-intro-ics6b/aregan/aregan.page.ts");







let AreganPageModule = class AreganPageModule {
};
AreganPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _aregan_routing_module__WEBPACK_IMPORTED_MODULE_5__["AreganPageRoutingModule"]
        ],
        declarations: [_aregan_page__WEBPACK_IMPORTED_MODULE_6__["AreganPage"]]
    })
], AreganPageModule);



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics6b/aregan/aregan.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics6b/aregan/aregan.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  text-align: center;\n  color: black;\n  text-decoration: none;\n  box-shadow: 1px 2px 3px #ddd;\n  background: #fff;\n}\n\narticle {\n  text-align: left;\n  background: #fff;\n  text-indent: 2em;\n  margin-left: 1em;\n  margin-right: 1em;\n}\n\nion-button {\n  border-bottom: thin solid #5FBDCE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9jb3Vyc2UtbGlzdC9jb3Vyc2UtaW50cm8taWNzNmIvYXJlZ2FuL0M6XFxVc2Vyc1xcOTg1NTJcXERlc2t0b3BcXENVQ1NfVjJcXENVQ1NfQVBQXzEyMThcXENVQ1NfQVBQL3NyY1xcYXBwXFx0YWIxXFxjb3Vyc2UtbGlzdFxcY291cnNlLWludHJvLWljczZiXFxhcmVnYW5cXGFyZWdhbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjEvY291cnNlLWxpc3QvY291cnNlLWludHJvLWljczZiL2FyZWdhbi9hcmVnYW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFFQSw0QkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FER0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0E7RUFDSSxpQ0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvdGFiMS9jb3Vyc2UtbGlzdC9jb3Vyc2UtaW50cm8taWNzNmIvYXJlZ2FuL2FyZWdhbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjpyZ2IoMCwgMCwgMCk7IFxyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMnB4IDNweCAjZGRkO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAzcHggI2RkZDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcblxyXG5hcnRpY2xlIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgdGV4dC1pbmRlbnQ6IDJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkICM1RkJEQ0U7XHJcbn0iLCJoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDJweCAzcHggI2RkZDtcbiAgYm94LXNoYWRvdzogMXB4IDJweCAzcHggI2RkZDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuYXJ0aWNsZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHRleHQtaW5kZW50OiAyZW07XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCAjNUZCRENFO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics6b/aregan/aregan.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics6b/aregan/aregan.page.ts ***!
  \***************************************************************************/
/*! exports provided: AreganPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreganPage", function() { return AreganPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AreganPage = class AreganPage {
    constructor() { }
    ngOnInit() {
    }
};
AreganPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-aregan',
        template: __webpack_require__(/*! raw-loader!./aregan.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-ics6b/aregan/aregan.page.html"),
        styles: [__webpack_require__(/*! ./aregan.page.scss */ "./src/app/tab1/course-list/course-intro-ics6b/aregan/aregan.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AreganPage);



/***/ })

}]);
//# sourceMappingURL=aregan-aregan-module-es2015.js.map