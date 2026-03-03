"use strict";
(self["webpackChunkOhCampus"] = self["webpackChunkOhCampus"] || []).push([["src_app_pages_questionpaper_questionpaper_module_ts"],{

/***/ 57103:
/*!*********************************************************************!*\
  !*** ./src/app/pages/questionpaper/questionpaper-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionpaperPageRoutingModule": () => (/* binding */ QuestionpaperPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _questionpaper_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questionpaper.page */ 70486);




const routes = [
    {
        path: '',
        component: _questionpaper_page__WEBPACK_IMPORTED_MODULE_0__.QuestionpaperPage
    }
];
let QuestionpaperPageRoutingModule = class QuestionpaperPageRoutingModule {
};
QuestionpaperPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], QuestionpaperPageRoutingModule);



/***/ }),

/***/ 31228:
/*!*************************************************************!*\
  !*** ./src/app/pages/questionpaper/questionpaper.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionpaperPageModule": () => (/* binding */ QuestionpaperPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _questionpaper_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questionpaper-routing.module */ 57103);
/* harmony import */ var _questionpaper_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questionpaper.page */ 70486);







let QuestionpaperPageModule = class QuestionpaperPageModule {
};
QuestionpaperPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _questionpaper_routing_module__WEBPACK_IMPORTED_MODULE_0__.QuestionpaperPageRoutingModule
        ],
        declarations: [_questionpaper_page__WEBPACK_IMPORTED_MODULE_1__.QuestionpaperPage]
    })
], QuestionpaperPageModule);



/***/ }),

/***/ 70486:
/*!***********************************************************!*\
  !*** ./src/app/pages/questionpaper/questionpaper.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionpaperPage": () => (/* binding */ QuestionpaperPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_questionpaper_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./questionpaper.page.html */ 51532);
/* harmony import */ var _questionpaper_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questionpaper.page.scss */ 49661);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 1331);








let QuestionpaperPage = class QuestionpaperPage {
    constructor(activatedRoute, router, service, iab) {
        var _a;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.service = service;
        this.iab = iab;
        let paras = (_a = this.router.getCurrentNavigation()) === null || _a === void 0 ? void 0 : _a.extras.queryParams;
        let paramjson = JSON.parse(JSON.stringify(paras));
        this.examId = paramjson.examId;
        console.log(this.examId);
    }
    ngOnInit() {
        this.getQue_PaperByExamId();
    }
    getQue_PaperByExamId() {
        let selctpara = {
            "examId": this.examId
        };
        this.service.getQue_PaperByExamId(selctpara).subscribe(res => {
            var _a, _b, _c;
            this.examdescription = (_a = res.examslist[0]) === null || _a === void 0 ? void 0 : _a.description;
            this.exampaper = (_b = res.examslist[0]) === null || _b === void 0 ? void 0 : _b.questionpaper;
            this.examtitle = (_c = res.examslist[0]) === null || _c === void 0 ? void 0 : _c.title;
            this.questionpaper = res.docsData[0];
            this.questionpaperdata = res.docsData;
            console.log(this.questionpaper);
        });
    }
    openExamPaper(url) {
        // exampaper.exam_question_paper
        this.iab.create(url, '_system');
    }
};
QuestionpaperPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__.InAppBrowser }
];
QuestionpaperPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-questionpaper',
        template: _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_questionpaper_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_questionpaper_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], QuestionpaperPage);



/***/ }),

/***/ 51532:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/questionpaper/questionpaper.page.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-header style=\"border-bottom: 1px solid #ddd;\">\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"3\">\n          <ion-icon style=\"margin-top: 5px;\" name=\"chevron-back-outline\" routerLink=\"/tabs/tabs/tab1\"></ion-icon>  \n        </ion-col>\n        <ion-col size=\"8\">\n         <h3>{{examtitle}}</h3>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"q-papers\">\n\n  <h6>Exam Description :</h6>\n  <p class=\"desc\"  [innerHTML]=\"examdescription\"></p>\n  <h6>\n        \n    Question Papers :</h6>\n      <h6 *ngIf=\"questionpaper==null\">Will be available soon</h6>\n      \n        \n\n     \n\n      \n            <div *ngIf=\"questionpaper!=null\">\n            \n        <ion-row class=\"papelist\" *ngFor=\"let item of questionpaperdata\">\n          <!-- <ion-col size=\"10\">\n            <p class=\"p1\">{{questionpaper.docs_title}}</p>\n          </ion-col>\n          <ion-col size=\"2\">\n            <img src=\"../../../assets/icon/download.png\" width=\"32\" (click)=\"openExamPaper(questionpaper.exam_docs)\">\n          </ion-col> -->\n          <ng-container *ngFor=\"let questionpaper of item.documents\">\n            <ion-col size=\"10\">\n              <p class=\"p1\">{{ questionpaper.docs_title }}</p>\n            </ion-col>\n            <ion-col size=\"2\">\n              <img src=\"../../../assets/icon/download.png\" width=\"32\" (click)=\"openExamPaper(questionpaper.exam_docs)\">\n            </ion-col>\n          </ng-container>\n        </ion-row>\n      </div>\n  \n</div>\n\n</ion-content>");

/***/ }),

/***/ 49661:
/*!*************************************************************!*\
  !*** ./src/app/pages/questionpaper/questionpaper.page.scss ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = ".q-papers {\n  margin: 10px;\n}\n.q-papers .papelist {\n  margin: 10px 0;\n  align-items: center;\n  background: aliceblue;\n  border-radius: 8px;\n  padding: 4px;\n  border: 1px solid #eef2f5;\n}\n.q-papers img {\n  margin: auto;\n  display: block;\n}\n.q-papers ion-button {\n  text-transform: capitalize;\n}\n.q-papers .desc {\n  color: #979799;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9ucGFwZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUFBQTtBQURKO0FBRUk7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBQVI7QUFFSTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FBQVI7QUFFSTtFQUNJLDBCQUFBO0FBQVI7QUFFSTtFQUNJLGNBQUE7QUFBUiIsImZpbGUiOiJxdWVzdGlvbnBhcGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4ucS1wYXBlcnN7XG4gICAgbWFyZ2luOjEwcHg7XG4gICAgLnBhcGVsaXN0e1xuICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZDogYWxpY2VibHVlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZjJmNTtcbiAgICB9XG4gICAgaW1ne1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICBpb24tYnV0dG9ue1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB9XG4gICAgLmRlc2N7XG4gICAgICAgIGNvbG9yOiAjOTc5Nzk5O1xuICAgIH1cbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_questionpaper_questionpaper_module_ts.js.map