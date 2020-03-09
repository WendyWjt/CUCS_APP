(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mlevorato-mlevorato-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-cs132/mlevorato/mlevorato.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/course-list/course-intro-cs132/mlevorato/mlevorato.page.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list/course-intro-cs132\">\r\n          返回CS 132列表\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list\">\r\n          返回课程列表\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"\">\r\n          返回首页\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <body class=\"user-select\">\r\n    <style type=\"text/css\">\r\n      /* not available for firefox & IE explorer */\r\n      #box {\r\n          width: 100%;\r\n          height: 88%;\r\n          overflow-x: hidden;\r\n          overflow-y: scroll;\r\n          line-height: 30px;\r\n          text-align: center;\r\n      }\r\n      #box::-webkit-scrollbar {\r\n          display: none;\r\n          visibility: hidden;\r\n      }\r\n    </style>\r\n    <div id=\"box\" class=\"panel-body\">\r\n      <div style=\"border: 1px  #000000; width: 98%; margin: 0 auto;\">\r\n        <span>\r\n          <article class=\"article1\">\r\n            <header>\r\n                <h2>\r\n                  <a style=\"color:#5FBDCE; text-decoration: none;\">\r\n                    CS 132 Computer Networks - Marco Levorato\r\n                  </a>\r\n                </h2>\r\n            </header>\r\n            <br>内容: Computer Networks\r\n            <br>\r\n            <br>Professor:Marco Levorato\r\n            <br>\r\n            <br>难易程度: ★★★\r\n            <br>\r\n            <br>先修科目:EECS 55/STATS 67,  和EECS 148是同一节课\r\n            <br>\r\n            <br>TA:Zoheb Shaikh and Davide Callegaro\r\n            <br>\r\n            <br>Discussion: 无\r\n            <br>\r\n            <br>Piazza:有\r\n            <br>\r\n            <br>Textbook:Computer Networking: A Top-Down Approach Featuring the Internet, James Kurose & Keith Ross, Addison-Wesley, 6th Edition\r\n            <br>\r\n            <br>Ratemyprofessor: 3.0\r\n            <br>\r\n            <br>Grading Criteria:\r\n            <br>\r\n            <br>· Homework 40%\r\n            <br>\r\n            <br>· Midterm 20%\r\n            <br>\r\n            <br>· Final  40%\r\n            <br>\r\n            <br>Comments:\r\n            <br>\r\n            <br>1.教授的口音很重，讲课的速度也很慢，非常的催眠，所以来听课的同学很少，大家也经常会容易走神。PPT都会放在网上，但是很多概念缺乏详细的解释，需要结合书本来学习。这门计算机网络的课概念非常多，几乎没有编程的内容，但是要是想很透彻的学习，必须要结合书本认真的阅读，书上其实有很详细的解释，而且还可以在网上找到中文版本。总体来说难度还是有的，所以不能掉以轻心，平时最好可以多抽时间看看书，不然到了midterm和final之前一下看几百页还是吃不消的啊。。。\r\n            <br>\r\n            <br>2.有ppt，课后发每堂ppt。ppt都是图，主要是讲，口音很重，上课睡倒一半。不讲题，看书吧。TA和老师很好很有激情很有耐心，可惜都是意大利口音口音很重的。作业基本都能搜到而且对考试很有帮助。6取4drop2相对很宽容了。课本有中文版：计算机网络原理：自顶向下方法第六版。写得很清楚很详细，上课我都睡过去还是书好看，考试不难，批得很松\r\n        </article>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs132/mlevorato/mlevorato-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs132/mlevorato/mlevorato-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: MlevoratoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MlevoratoPageRoutingModule", function() { return MlevoratoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _mlevorato_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mlevorato.page */ "./src/app/tab1/course-list/course-intro-cs132/mlevorato/mlevorato.page.ts");




const routes = [
    {
        path: '',
        component: _mlevorato_page__WEBPACK_IMPORTED_MODULE_3__["MlevoratoPage"]
    }
];
let MlevoratoPageRoutingModule = class MlevoratoPageRoutingModule {
};
MlevoratoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MlevoratoPageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs132/mlevorato/mlevorato.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs132/mlevorato/mlevorato.module.ts ***!
  \***********************************************************************************/
/*! exports provided: MlevoratoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MlevoratoPageModule", function() { return MlevoratoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mlevorato_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mlevorato-routing.module */ "./src/app/tab1/course-list/course-intro-cs132/mlevorato/mlevorato-routing.module.ts");
/* harmony import */ var _mlevorato_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mlevorato.page */ "./src/app/tab1/course-list/course-intro-cs132/mlevorato/mlevorato.page.ts");







let MlevoratoPageModule = class MlevoratoPageModule {
};
MlevoratoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mlevorato_routing_module__WEBPACK_IMPORTED_MODULE_5__["MlevoratoPageRoutingModule"]
        ],
        declarations: [_mlevorato_page__WEBPACK_IMPORTED_MODULE_6__["MlevoratoPage"]]
    })
], MlevoratoPageModule);



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs132/mlevorato/mlevorato.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs132/mlevorato/mlevorato.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\r\n  max-height: 35vh;\r\n  overflow: hidden;\r\n}\r\n\r\n.cucs-logo{\r\n  background: url('logo.png') no-repeat;\r\n  float: center;\r\n  vertical-align: bottom;\r\n  width: 100%;\r\n  height: 82px;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  color:rgb(0, 0, 0); \r\n  text-decoration: none;\r\n  box-shadow: 1px 2px 3px #ddd;\r\n  background: #fff;\r\n}\r\n\r\narticle {\r\n  text-align: left;\r\n  background: #fff;\r\n  text-indent: 2em;\r\n  margin-left: 1em;\r\n  margin-right: 1em;\r\n}\r\n\r\nion-button {\r\n  border-bottom: thin solid #5FBDCE;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQ0FBZ0Q7RUFDaEQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFFckIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC90YWIxL2NvdXJzZS1saXN0L2NvdXJzZS1pbnRyby1jczEzMi9tbGV2b3JhdG8vbWxldm9yYXRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcclxuICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jdWNzLWxvZ297XHJcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9sb2dvLnBuZ1wiKSBuby1yZXBlYXQ7XHJcbiAgZmxvYXQ6IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogODJweDtcclxufVxyXG5cclxuaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjpyZ2IoMCwgMCwgMCk7IFxyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAycHggM3B4ICNkZGQ7XHJcbiAgYm94LXNoYWRvdzogMXB4IDJweCAzcHggI2RkZDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG5cclxuYXJ0aWNsZSB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHRleHQtaW5kZW50OiAyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCAjNUZCRENFO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-cs132/mlevorato/mlevorato.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-cs132/mlevorato/mlevorato.page.ts ***!
  \*********************************************************************************/
/*! exports provided: MlevoratoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MlevoratoPage", function() { return MlevoratoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MlevoratoPage = class MlevoratoPage {
    constructor() { }
    ngOnInit() {
    }
};
MlevoratoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mlevorato',
        template: __webpack_require__(/*! raw-loader!./mlevorato.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-cs132/mlevorato/mlevorato.page.html"),
        styles: [__webpack_require__(/*! ./mlevorato.page.scss */ "./src/app/tab1/course-list/course-intro-cs132/mlevorato/mlevorato.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MlevoratoPage);



/***/ })

}]);
//# sourceMappingURL=mlevorato-mlevorato-module-es2015.js.map