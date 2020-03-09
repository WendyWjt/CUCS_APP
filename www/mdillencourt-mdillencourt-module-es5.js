(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mdillencourt-mdillencourt-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-ics6d/mdillencourt/mdillencourt.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/course-list/course-intro-ics6d/mdillencourt/mdillencourt.page.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list/course-intro-ics6d\">\n          返回ICS 6D列表\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"course-list\">\n          返回课程列表\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"dark\" fill=\"clear\" expand=\"block\" href=\"\">\n          返回首页\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <body class=\"user-select\">\n    <style type=\"text/css\">\n      /* not available for firefox & IE explorer */\n      #box {\n          width: 100%;\n          height: 88%;\n          overflow-x: hidden;\n          overflow-y: scroll;\n          line-height: 30px;\n          text-align: center;\n      }\n      #box::-webkit-scrollbar {\n          display: none;\n          visibility: hidden;\n      }\n    </style>\n    <div id=\"box\" class=\"panel-body\">\n      <div style=\"border: 1px  #000000; width: 98%; margin: 0 auto;\">\n        <span>\n          <article class=\"article1\">\n            <header>\n                <h2>\n                  <a style=\"color:#5FBDCE; text-decoration: none;\">\n                    ICS 6D Discrete Math For CS - Michael Dillencourt\n                  </a>\n                </h2>\n            </header>\n              内容：离散代数\n              <br>Professor: Michael Dillencourt\n\t\t\t\t\t\t\t<br>难易程度：★★\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>先修课目：建议6B,不是强制性。\n\t\t\t\t\t\t\t<br>TA: Zhengli Zhao &\n\t\t\t\t\t\t\t<br>Zahra Montazeri\n\t\t\t\t\t\t\t<br>Discussion: 不是强制性的，但TA人很好且讲得非常清楚，如果去了会很有帮助。\n\t\t\t\t\t\t\t<br>Piazza: 有\n\t\t\t\t\t\t\t<br>Textbook: online textbook zybook 大约五六十刀\n\t\t\t\t\t\t\t<br>Rate my professor 评分: 2.8\n\t\t\t\t\t\t\t<br>http://www.ratemyprofessors.com/ShowRatings.jsp?tid=59341\n\t\t\t\t\t\t\t<br>这个老师上课一般是念PPT，但由于年纪较大一般看不到学生举手，所以上课不怎么回答问题。讲的还可以，能看出PPT做得很认真且备过课。\n\t\t\t\t\t\t\t<br>Grading Criteria: (Spring 2017)\n\t\t\t\t\t\t\t<br>· Homework 8%\n\t\t\t\t\t\t\t<br>一共有八次作业，需要以PDF格式交，有一定难度（仿佛回到小学奥数），最后根据Curve会Drop一两次。Reader基本联系不上，所以改分比较困难。\n\t\t\t\t\t\t\t<br>· Reading Assignments 5%\n\t\t\t\t\t\t\t<br>做了就有分，记得每周点（想不起来可以一次点完一周的）\n\t\t\t\t\t\t\t<br>· Tests 45%\n\t\t\t\t\t\t\t<br>一共四个Test，每两周一个，会Drop一两次最低分。作业覆盖考试的全部内容。\n\t\t\t\t\t\t\t<br>· Final 42%\n\t\t\t\t\t\t\t<br>作业同样覆盖Final内容，老师会通知考哪些章节，没有练习题。\n\t\t\t\t\t\t\t<br>· Completing the Course Evaluation 1% (附加分)\n\t\t\t\t\t\t\t<br>Comment:\n\t\t\t\t\t\t\t<br>这节课算比较中规中矩，好好做作业的话考试肯定没问题的。\n          </article>\n        </span>\n      </div>\n    </div>\n  </body>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics6d/mdillencourt/mdillencourt-routing.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics6d/mdillencourt/mdillencourt-routing.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: MdillencourtPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdillencourtPageRoutingModule", function() { return MdillencourtPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mdillencourt_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mdillencourt.page */ "./src/app/tab1/course-list/course-intro-ics6d/mdillencourt/mdillencourt.page.ts");




var routes = [
    {
        path: '',
        component: _mdillencourt_page__WEBPACK_IMPORTED_MODULE_3__["MdillencourtPage"]
    }
];
var MdillencourtPageRoutingModule = /** @class */ (function () {
    function MdillencourtPageRoutingModule() {
    }
    MdillencourtPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], MdillencourtPageRoutingModule);
    return MdillencourtPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics6d/mdillencourt/mdillencourt.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics6d/mdillencourt/mdillencourt.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: MdillencourtPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdillencourtPageModule", function() { return MdillencourtPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mdillencourt_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mdillencourt-routing.module */ "./src/app/tab1/course-list/course-intro-ics6d/mdillencourt/mdillencourt-routing.module.ts");
/* harmony import */ var _mdillencourt_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mdillencourt.page */ "./src/app/tab1/course-list/course-intro-ics6d/mdillencourt/mdillencourt.page.ts");







var MdillencourtPageModule = /** @class */ (function () {
    function MdillencourtPageModule() {
    }
    MdillencourtPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _mdillencourt_routing_module__WEBPACK_IMPORTED_MODULE_5__["MdillencourtPageRoutingModule"]
            ],
            declarations: [_mdillencourt_page__WEBPACK_IMPORTED_MODULE_6__["MdillencourtPage"]]
        })
    ], MdillencourtPageModule);
    return MdillencourtPageModule;
}());



/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics6d/mdillencourt/mdillencourt.page.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics6d/mdillencourt/mdillencourt.page.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\r\n  max-height: 35vh;\r\n  overflow: hidden;\r\n}\r\n\r\n.cucs-logo{\r\n  background: url('logo.png') no-repeat;\r\n  float: center;\r\n  vertical-align: bottom;\r\n  width: 100%;\r\n  height: 82px;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  color:rgb(0, 0, 0); \r\n  text-decoration: none;\r\n  box-shadow: 1px 2px 3px #ddd;\r\n  background: #fff;\r\n}\r\n\r\narticle {\r\n  text-align: left;\r\n  background: #fff;\r\n  text-indent: 2em;\r\n  margin-left: 1em;\r\n  margin-right: 1em;\r\n}\r\n\r\nion-button {\r\n  border-bottom: thin solid #5FBDCE;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQ0FBZ0Q7RUFDaEQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFFckIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC90YWIxL2NvdXJzZS1saXN0L2NvdXJzZS1pbnRyby1pY3M2ZC9tZGlsbGVuY291cnQvbWRpbGxlbmNvdXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcclxuICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jdWNzLWxvZ297XHJcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9sb2dvLnBuZ1wiKSBuby1yZXBlYXQ7XHJcbiAgZmxvYXQ6IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogODJweDtcclxufVxyXG5cclxuaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjpyZ2IoMCwgMCwgMCk7IFxyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAycHggM3B4ICNkZGQ7XHJcbiAgYm94LXNoYWRvdzogMXB4IDJweCAzcHggI2RkZDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG5cclxuYXJ0aWNsZSB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHRleHQtaW5kZW50OiAyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCAjNUZCRENFO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/tab1/course-list/course-intro-ics6d/mdillencourt/mdillencourt.page.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/tab1/course-list/course-intro-ics6d/mdillencourt/mdillencourt.page.ts ***!
  \***************************************************************************************/
/*! exports provided: MdillencourtPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdillencourtPage", function() { return MdillencourtPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MdillencourtPage = /** @class */ (function () {
    function MdillencourtPage() {
    }
    MdillencourtPage.prototype.ngOnInit = function () {
    };
    MdillencourtPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mdillencourt',
            template: __webpack_require__(/*! raw-loader!./mdillencourt.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/course-list/course-intro-ics6d/mdillencourt/mdillencourt.page.html"),
            styles: [__webpack_require__(/*! ./mdillencourt.page.scss */ "./src/app/tab1/course-list/course-intro-ics6d/mdillencourt/mdillencourt.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MdillencourtPage);
    return MdillencourtPage;
}());



/***/ })

}]);
//# sourceMappingURL=mdillencourt-mdillencourt-module-es5.js.map