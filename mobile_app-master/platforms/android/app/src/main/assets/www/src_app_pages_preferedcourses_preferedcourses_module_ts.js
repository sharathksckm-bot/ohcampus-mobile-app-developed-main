"use strict";
(self["webpackChunkOhCampus"] = self["webpackChunkOhCampus"] || []).push([["src_app_pages_preferedcourses_preferedcourses_module_ts"],{

/***/ 12468:
/*!*************************************************************************!*\
  !*** ./src/app/pages/preferedcourses/preferedcourses-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreferedcoursesPageRoutingModule": () => (/* binding */ PreferedcoursesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _preferedcourses_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preferedcourses.page */ 66587);




const routes = [
    {
        path: '',
        component: _preferedcourses_page__WEBPACK_IMPORTED_MODULE_0__.PreferedcoursesPage
    }
];
let PreferedcoursesPageRoutingModule = class PreferedcoursesPageRoutingModule {
};
PreferedcoursesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PreferedcoursesPageRoutingModule);



/***/ }),

/***/ 70885:
/*!*****************************************************************!*\
  !*** ./src/app/pages/preferedcourses/preferedcourses.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreferedcoursesPageModule": () => (/* binding */ PreferedcoursesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _preferedcourses_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preferedcourses-routing.module */ 12468);
/* harmony import */ var _preferedcourses_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preferedcourses.page */ 66587);







let PreferedcoursesPageModule = class PreferedcoursesPageModule {
};
PreferedcoursesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _preferedcourses_routing_module__WEBPACK_IMPORTED_MODULE_0__.PreferedcoursesPageRoutingModule
        ],
        declarations: [_preferedcourses_page__WEBPACK_IMPORTED_MODULE_1__.PreferedcoursesPage]
    })
], PreferedcoursesPageModule);



/***/ }),

/***/ 66587:
/*!***************************************************************!*\
  !*** ./src/app/pages/preferedcourses/preferedcourses.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreferedcoursesPage": () => (/* binding */ PreferedcoursesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_preferedcourses_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./preferedcourses.page.html */ 99118);
/* harmony import */ var _preferedcourses_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preferedcourses.page.scss */ 595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 147);



/* eslint-disable @typescript-eslint/naming-convention */




let PreferedcoursesPage = class PreferedcoursesPage {
    constructor(router, service, googlePlus) {
        this.router = router;
        this.service = service;
        this.googlePlus = googlePlus;
        this.totalCourses = [];
    }
    ngOnInit() {
        this.loadUserData();
        this.getCategory();
    }
    loadUserData() {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            this.userData = JSON.parse(storedUserData);
        }
    }
    // logout_gmail() {
    //   this.googlePlus.logout()
    //     .then(res => {
    //       console.log(res);
    //       localStorage.removeItem('userData');
    //       this.router.navigateByUrl('/welcomepage');
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
    getCategory() {
        this.Category = '';
        // this.image ='';
        // console.log(this.Category);
        this.service.getCategory().subscribe(res => {
            this.Category = res.response_data;
            console.log(this.Category);
            // console.log(this.Category);
        });
    }
    getLevels(id) {
        this.router.navigate(['/chooselevel', +id]);
    }
};
PreferedcoursesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_3__.GooglePlus }
];
PreferedcoursesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-preferedcourses',
        template: _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_preferedcourses_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_preferedcourses_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PreferedcoursesPage);



/***/ }),

/***/ 99118:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/preferedcourses/preferedcourses.page.html ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"2\">\n         \n        </ion-col>\n        <ion-col size=\"8\" class=\"selfcenter text-center\">\n          <h6 class=\"m0\">What is your preferred course?</h6>\n        </ion-col>\n       \n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content fullscreen=\"true\" style=\"--background: aliceblue;\">\n<div class=\"prefCourse\" *ngFor=\"let item of Category; let i = index\">\n\n  <ion-item class=\"course-item\" (click)=\"getLevels(item.id)\">\n\n    <!-- Left Icon -->\n    <ion-avatar slot=\"start\">\n      <img src=\"assets/images/{{item.catname?.trim()}}.png\">\n    </ion-avatar>\n\n    <!-- Middle Text -->\n    <ion-label>\n      <h6 class=\"m0\">{{ item.catname }}</h6>\n      <p>{{ item.Total_Courses }}</p>\n    </ion-label>\n\n    <!-- Right Arrow -->\n    <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\n\n  </ion-item>\n\n</div>\n</ion-content>\n");

/***/ }),

/***/ 595:
/*!*****************************************************************!*\
  !*** ./src/app/pages/preferedcourses/preferedcourses.page.scss ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = ".prefCourse ion-item {\n  --min-height: 48px;\n}\n.prefCourse ion-item ion-avatar img {\n  width: 28px;\n  height: 28px;\n}\n.prefCourse ion-item ion-label h6 {\n  font-size: 15px;\n  font-weight: 500;\n}\n.prefCourse ion-item ion-label p {\n  font-size: 13px;\n  color: gray;\n}\n.prefCourse ion-item ion-icon {\n  font-size: 14px;\n  color: #666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWZlcmVkY291cnNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0NFO0VBQ0Usa0JBQUE7QUE5Q0o7QUErQ0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQTdDTjtBQWtETTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQWhEUjtBQW1ETTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBakRSO0FBcURJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUFuRE4iLCJmaWxlIjoicHJlZmVyZWRjb3Vyc2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4vLyAucHJlZkNvdXJzZXtcbi8vICAgICAvLyBtYXJnaW4tdG9wOiAxcmVtO1xuLy8gICAgIGlvbi1sYWJlbHtcbi8vICAgICAgICAgZm9udC13ZWlnaHQ6IDIwO1xuLy8gICAgICAgICBmb250LXNpemU6IDlweDtcbi8vICAgICB9XG4vLyAgICAgc3Bhbntcbi8vICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuLy8gICAgICAgICBjb2xvcjogZ3JheTtcbi8vICAgICB9XG4vLyAgICAgLmltZ2Rpdntcbi8vICAgICAgICAgd2lkdGg6IDIwcHg7XG4vLyAgICAgICAgIGhlaWdodDogMTVweDtcbi8vICAgICAgICAgcGFkZGluZzogN3B4O1xuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuLy8gICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4vLyAgICAgICAgIGJhY2tncm91bmQ6ICNkZWViZjY7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICBpb24taXRlbXtcblxuLy8gICAgICAgICBoMiB7XG4vLyAgICAgICBmb250LXNpemU6IDEycHg7ICAgLy8gY2F0ZWdvcnkgbmFtZSBzaXplXG4vLyAgICAgICBmb250LXdlaWdodDogNTAwO1xuLy8gICAgIH1cblxuLy8gICAgIHAge1xuLy8gICAgICAgZm9udC1zaXplOiAxMHB4OyAgIC8vIHRvdGFsIGNvdXJzZXMgc2l6ZVxuLy8gICAgICAgY29sb3I6IGdyYXk7XG4vLyAgICAgfVxuLy8gICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiAxcmVtO1xuLy8gICAgICAgIH1cbi8vIH1cbi8vIC5ibHVle1xuLy8gICAgIGNvbG9yOmJsdWU7XG4vLyB9XG5cbi8vIC5jdXN0b20taWNvbiB7XG4vLyAgICAgd2lkdGg6IDdweDtcbi8vICAgICBoZWlnaHQ6IDVweDtcbi8vICAgICBtYXJnaW46IC0xcHggMnB4O1xuLy8gICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4vLyAgIH1cblxuLnByZWZDb3Vyc2Uge1xuXG4gIGlvbi1pdGVtIHtcbiAgICAtLW1pbi1oZWlnaHQ6IDQ4cHg7ICAgXG4gICAgaW9uLWF2YXRhciBpbWcge1xuICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgfVxuXG4gICAgaW9uLWxhYmVsIHtcblxuICAgICAgaDYge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7ICAgIFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4OyAgICAgIFxuICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDE0cHg7ICAgICAgXG4gICAgICBjb2xvcjogIzY2NjtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_preferedcourses_preferedcourses_module_ts.js.map