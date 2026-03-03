"use strict";
(self["webpackChunkOhCampus"] = self["webpackChunkOhCampus"] || []).push([["src_app_tab2_tab2_module_ts"],{

/***/ 93092:
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageRoutingModule": () => (/* binding */ Tab2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 70442);




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page,
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ 14608:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": () => (/* binding */ Tab2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 70442);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2-routing.module */ 93092);








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page]
    })
], Tab2PageModule);



/***/ }),

/***/ 70442:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": () => (/* binding */ Tab2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tab2.page.html */ 72040);
/* harmony import */ var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.scss */ 53934);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 42720);







let Tab2Page = class Tab2Page {
    constructor(router, service) {
        this.router = router;
        this.service = service;
        this.colleges = [];
        this.exams = [];
        this.articles = [];
        this.text = '';
    }
    ngOnInit() { }
    bck() {
        this.router.navigateByUrl('/tabs/tabs/tab1');
    }
    onSearchInput() {
        if (this.text.trim() !== '') {
            (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)([
                this.service.getcollegesrch(this.text),
                this.service.getarticlesrch(this.text),
                this.service.getexamsearch(this.text)
            ]).subscribe(([collegeRes, articleRes, examRes]) => {
                this.colleges = collegeRes.colleges || [];
                this.articles = articleRes.article || [];
                this.exams = examRes.Exams || [];
            }, (error) => {
                console.error('Error fetching search results:', error);
                // Handle error, e.g., show a toast message
            });
        }
        else {
            this.colleges = [];
            this.exams = [];
            this.articles = [];
        }
    }
    getclgid(collegeid) {
        this.router.navigate(['/clgdetails', collegeid]);
    }
    getexmeid(examId) {
        this.router.navigate(['/examdetails', examId]);
    }
    getarticleid(blogId) {
        this.router.navigate(['/articledetails', blogId]);
    }
    notification() {
        this.router.navigateByUrl('/notification');
    }
};
Tab2Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService }
];
Tab2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-tab2',
        template: _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab2Page);



/***/ }),

/***/ 72040:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tab2/tab2.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n  <ion-header [translucent]=\"true\" class=\"headerBg\">\n    <ion-toolbar>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"9\">\n            <ion-buttons class=\"primaryhead\">\n              <ion-menu-button></ion-menu-button>\n            </ion-buttons>\n          </ion-col>\n          <ion-col size=\"3\" class=\"text-right selfcenter flex just-right\">         \n            <div class=\"notification\" (click)=\"notification()\"><ion-icon name=\"notifications-outline\"></ion-icon>\n              <ion-badge color=\"danger\"></ion-badge>\n            </div>\n            <!-- <ion-icon class=\"notification\" routerLink=\"/editprofile\" name=\"person-outline\"></ion-icon> -->\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-toolbar>\n  </ion-header>\n \n  <ion-content>\n    <div class=\"filtermlty\">\n      <ion-input placeholder=\"Search Colleges, Exam, QnA & Articles\" [(ngModel)]=\"text\" (keyup)=\"onSearchInput()\"></ion-input>\n      <ion-icon name=\"search\"></ion-icon>\n    </div>\n  \n    <div *ngIf=\"colleges.length > 0\">\n      <h2 class=\"setresulttitle\">Colleges</h2>\n      <ion-list class=\"filterlist\">\n        <ion-item *ngFor=\"let college of colleges\">\n        <p (click)=\"getclgid(college.id)\"> {{ college.title }}</p> \n        </ion-item>\n      </ion-list>\n    </div>\n  \n    <div *ngIf=\"exams.length > 0\">\n      <h2 class=\"setresulttitle\">Exams</h2>\n      <ion-list class=\"filterlist\">\n        <ion-item *ngFor=\"let exam of exams\">\n         <p (click)=\"getexmeid(exam.id)\"> {{ exam.title }}</p>\n        </ion-item>\n      </ion-list>\n    </div>\n  \n    <div *ngIf=\"articles.length > 0\">\n      <h2 class=\"setresulttitle\">Articles</h2>\n      <ion-list class=\"filterlist\">\n        <ion-item *ngFor=\"let article of articles\">\n         <p (click)=\"getarticleid(article.id)\">{{ article.title }}</p>\n        </ion-item>\n      </ion-list>\n    </div>\n  </ion-content>\n");

/***/ }),

/***/ 53934:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = ".notification {\n  color: var(--ion-color-primary);\n  position: relative;\n}\n.notification ion-badge {\n  position: absolute;\n  right: -5%;\n  top: -7px;\n  font-size: 10px;\n  border-radius: 50px;\n  width: 20px;\n  height: 20px;\n  padding: 6px 4px;\n}\n.filtermlty {\n  border: 1px solid #a5a5a5;\n  border-radius: 50px;\n  display: flex;\n  margin: 10px;\n  padding: 0px 4px 0px 12px;\n  background: #ffffff;\n}\n.filtermlty ion-input {\n  --box-shadow: none;\n  --border-radius: 50px;\n  --background: transparent;\n}\n.filtermlty {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.filtermlty input[type=text] {\n  padding: 10px;\n  border: 2px solid #11171a;\n  border-radius: 5px;\n  width: 100%;\n  margin-right: 10px;\n}\n.filtermlty ion-icon {\n  position: absolute;\n  right: 10px;\n  color: #555;\n  cursor: pointer;\n}\n.setresulttitle {\n  padding: 6px 10px;\n  color: #000000;\n  font-weight: 500;\n  background: aliceblue;\n}\n.filterlist {\n  padding: 0;\n  margin: 0px 10px 10px;\n}\n.filterlist ion-item {\n  --padding-start: 0;\n}\n.filterlist p {\n  margin: 6px 0px;\n  color: black;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0ksK0JBQUE7RUFDQSxrQkFBQTtBQU5KO0FBT0k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUxSO0FBU0E7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBTko7QUFPSTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUxOO0FBU0E7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQU5KO0FBU0U7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQU5KO0FBU0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQU5KO0FBU0U7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBTko7QUFTRTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtBQU5KO0FBT0k7RUFDRSxrQkFBQTtBQUxOO0FBT0k7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFMTiIsImZpbGUiOiJ0YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4vLyAuaW1ne1xuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvLyB0b3A6IDIzJTtcbi8vIH1cblxuLm5vdGlmaWNhdGlvbntcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBpb24tYmFkZ2V7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IC01JTtcbiAgICAgICAgdG9wOiAtN3B4O1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDZweCA0cHg7XG4gICAgfVxufVxuXG4uZmlsdGVybWx0eXtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYTVhNWE1O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgcGFkZGluZzogMHB4IDRweCAwcHggMTJweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGlvbi1pbnB1dHtcbiAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfSAgXG5cbn1cbi5maWx0ZXJtbHR5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIFxuICAuZmlsdGVybWx0eSBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMTExNzFhO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgXG4gIC5maWx0ZXJtbHR5IGlvbi1pY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgY29sb3I6ICM1NTU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLnNldHJlc3VsdHRpdGxle1xuICAgIHBhZGRpbmc6NnB4IDEwcHg7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBiYWNrZ3JvdW5kOiBhbGljZWJsdWU7XG4gIH1cblxuICAuZmlsdGVybGlzdHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMHB4IDEwcHggMTBweDtcbiAgICBpb24taXRlbXtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICB9XG4gICAgcHtcbiAgICAgIG1hcmdpbjogNnB4IDBweDtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG4gIH0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_tab2_tab2_module_ts.js.map