"use strict";
(self["webpackChunkOhCampus"] = self["webpackChunkOhCampus"] || []).push([["src_app_pages_specialiclg_specialiclg_module_ts"],{

/***/ 70490:
/*!*****************************************************************!*\
  !*** ./src/app/pages/specialiclg/specialiclg-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecialiclgPageRoutingModule": () => (/* binding */ SpecialiclgPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _specialiclg_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./specialiclg.page */ 39835);




const routes = [
    {
        path: '',
        component: _specialiclg_page__WEBPACK_IMPORTED_MODULE_0__.SpecialiclgPage
    }
];
let SpecialiclgPageRoutingModule = class SpecialiclgPageRoutingModule {
};
SpecialiclgPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SpecialiclgPageRoutingModule);



/***/ }),

/***/ 77785:
/*!*********************************************************!*\
  !*** ./src/app/pages/specialiclg/specialiclg.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecialiclgPageModule": () => (/* binding */ SpecialiclgPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _specialiclg_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./specialiclg-routing.module */ 70490);
/* harmony import */ var _specialiclg_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./specialiclg.page */ 39835);







let SpecialiclgPageModule = class SpecialiclgPageModule {
};
SpecialiclgPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _specialiclg_routing_module__WEBPACK_IMPORTED_MODULE_0__.SpecialiclgPageRoutingModule
        ],
        declarations: [_specialiclg_page__WEBPACK_IMPORTED_MODULE_1__.SpecialiclgPage]
    })
], SpecialiclgPageModule);



/***/ }),

/***/ 39835:
/*!*******************************************************!*\
  !*** ./src/app/pages/specialiclg/specialiclg.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecialiclgPage": () => (/* binding */ SpecialiclgPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_specialiclg_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./specialiclg.page.html */ 73051);
/* harmony import */ var _specialiclg_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./specialiclg.page.scss */ 61892);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 81864);







let SpecialiclgPage = class SpecialiclgPage {
    constructor(service, activatedRoute, router, loadingController) {
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.loadingController = loadingController;
        this.trnkclgArry = [];
    }
    ngOnInit() {
        this.statename = JSON.parse(localStorage.getItem('state'));
        const storedCourseId = localStorage.getItem('selectedCourseId');
        const storedCourseName = localStorage.getItem('selectedCourseName');
        if (storedCourseId && storedCourseName) {
            this.courseId = storedCourseId;
            this.coursename = storedCourseName;
            console.log('Retrieved courseId:', this.courseId);
            console.log('Retrieved courseName:', this.coursename);
        }
        this.trespeciali();
    }
    trespeciali() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const loader = yield this.loadingController.create({
                message: `
        <div class="custom-spinner-container">
          <img src="assets/icon/logo11_50x38-removebg-preview.png" class="custom-spinner-icon" style="border-radius: 50%;">
          <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
        </div>
        <span style="margin-top: 10px;"></span>`,
                spinner: null,
                translucent: true,
                cssClass: 'custom-loading'
            });
            yield loader.present(); // Show the loader
            let selctpara = {
                "subcat_Id": this.courseId,
                "statename": this.statename
            };
            this.service.getTrendingSpecilizationBySubCatId(selctpara).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res);
                this.trespecialiArry = res.data;
                yield loader.dismiss(); // Dismiss the loader once data is received
            }), (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                console.error('Error fetching specializations:', err);
                yield loader.dismiss(); // Dismiss the loader in case of an error
            }));
        });
    }
    specourselist(keyword) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            localStorage.setItem('selectedKeyword', keyword);
            const loader = yield this.loadingController.create({
                message: `
      <div class="custom-spinner-container">
        <img src="assets/icon/logo11_50x38-removebg-preview.png" class="custom-spinner-icon" style="border-radius: 50%;">
        <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
      </div>
      <span style="margin-top: 10px;">Loading course list...</span>`,
                spinner: null,
                translucent: true,
                cssClass: 'custom-loading'
            });
            yield loader.present(); // Show the loader
            this.router.navigate(['/specourselist', keyword]).then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                yield loader.dismiss(); // Dismiss the loader after navigation
            })).catch(() => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                yield loader.dismiss(); // Dismiss the loader in case of an error
            }));
            console.log(keyword);
        });
    }
};
SpecialiclgPage.ctorParameters = () => [
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController }
];
SpecialiclgPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-specialiclg',
        template: _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_specialiclg_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_specialiclg_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SpecialiclgPage);



/***/ }),

/***/ 73051:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/specialiclg/specialiclg.page.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-icon style=\"margin-top: 5px;\" name=\"chevron-back-outline\"  routerLink=\"/tabs/tabs/tab1\"></ion-icon>  \n        </ion-col>\n        <ion-col size=\"8\">\n          \n          <ion-buttons>\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"3\" class=\"text-right selfcenter flex just-right\">\n          \n          <div class=\"notification\">\n            <!-- <ion-icon name=\"notifications-outline\"></ion-icon> -->\n            <ion-badge color=\"danger\"></ion-badge>\n            <ion-icon routerLink=\"/editprofile\" name=\"person-outline\"></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n \n  \n<div class=\"trending\">\n<div>\n  <h4>Courses Under {{coursename}}</h4>\n  <p> Select a course and know the colleges offering that course.</p>\n\n  <div class=\"spllist\" *ngFor=\"let item of trespecialiArry\">\n    <ion-label>\n      <h3 (click)=\"specourselist(item.name)\">{{item.name}}</h3>\n    </ion-label>\n    <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n  </div>\n</div>\n</div>\n\n</ion-content>\n<ion-footer class=\"main-footer\">\n  <ion-toolbar>\n\n    <div class=\"footer-tabs\">\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab1\">\n        <ion-icon name=\"home\"></ion-icon>\n        <span>Home</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab2\">\n        <ion-icon name=\"search-outline\"></ion-icon>\n        <span>Search</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab3\">\n        <ion-icon name=\"albums-outline\"></ion-icon>\n        <span>Recommended</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab4\">\n        <ion-icon name=\"bookmark-outline\"></ion-icon>\n        <span>Shortlist</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab5\">\n        <ion-icon name=\"chatbox-outline\"></ion-icon>\n        <span>Assistant</span>\n      </div>\n\n    </div>\n\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ 61892:
/*!*********************************************************!*\
  !*** ./src/app/pages/specialiclg/specialiclg.page.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "/* Add your CSS styles for college list here */\n.college-list {\n  font-family: Arial, sans-serif;\n}\n.college-list h2 {\n  color: #333;\n}\n.college-list ul {\n  list-style-type: none;\n  padding: 0;\n}\n.college-list li {\n  margin-bottom: 10px;\n  padding: 5px 10px;\n  background-color: #f9f9f9;\n  border-radius: 5px;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);\n}\n.college-list li:hover {\n  background-color: #eaeaea;\n}\n.trending {\n  background: #f2f9ff;\n  padding: 20px 10px;\n  border-radius: 16px;\n  margin: 0px 10px 10px;\n  border: 1px solid #b6ddff;\n}\n.trending .setlist {\n  padding: 10px;\n  border: 1px solid #b8b88a;\n  border-radius: 15px;\n  margin: 10px;\n}\n.trending ion-item {\n  --padding-start: 0;\n  padding-inline-end: 0;\n  --background: transparent;\n}\n.trending h4 {\n  margin-top: 0;\n}\n.notification {\n  color: var(--ion-color-primary);\n  position: relative;\n}\n.notification ion-badge {\n  position: absolute;\n  right: -5%;\n  top: -7px;\n  font-size: 10px;\n  border-radius: 50px;\n  width: 20px;\n  height: 20px;\n  padding: 6px 4px;\n}\n.spllist {\n  margin-bottom: 12px;\n  border-bottom: 1px solid gray;\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwZWNpYWxpY2xnLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4Q0FBQTtBQUNBO0VBQ0ksOEJBQUE7QUFDSjtBQUVFO0VBQ0UsV0FBQTtBQUNKO0FBRUU7RUFDRSxxQkFBQTtFQUNBLFVBQUE7QUFDSjtBQUVFO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtBQUNKO0FBRUU7RUFDRSx5QkFBQTtBQUNKO0FBR0U7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBQUo7QUFFRTtFQUNFLGFBQUE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUFOO0FBYUU7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFYSjtBQWFFO0VBQ0UsYUFBQTtBQVhKO0FBZUU7RUFDRSwrQkFBQTtFQUNBLGtCQUFBO0FBWko7QUFhSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBWFI7QUFjQTtFQUNFLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FBWEYiLCJmaWxlIjoic3BlY2lhbGljbGcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQWRkIHlvdXIgQ1NTIHN0eWxlcyBmb3IgY29sbGVnZSBsaXN0IGhlcmUgKi9cbi5jb2xsZWdlLWxpc3Qge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgfVxuICBcbiAgLmNvbGxlZ2UtbGlzdCBoMiB7XG4gICAgY29sb3I6ICMzMzM7XG4gIH1cbiAgXG4gIC5jb2xsZWdlLWxpc3QgdWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIFxuICAuY29sbGVnZS1saXN0IGxpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIH1cbiAgXG4gIC5jb2xsZWdlLWxpc3QgbGk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XG4gIH1cbiAgXG5cbiAgLnRyZW5kaW5ne1xuICAgIGJhY2tncm91bmQ6ICNmMmY5ZmY7XG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgbWFyZ2luOiAwcHggMTBweCAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiNmRkZmY7XG4gIFxuICAuc2V0bGlzdHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2I4Yjg4YTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICBtYXJnaW46IDEwcHg7XG4gIH1cbiAgLy8gLmxpc3RjbGFzc3tcbiAgLy8gICBwYWRkaW5nOiAxM3B4O1xuICAvLyAgIGZvbnQtc2l6ZTogMjFweDtcbiAgLy8gICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAvLyAgIGNvbG9yOiAjNDg0NDQwO1xuICAvLyAgIHdpZHRoOiAxNTFweDtcbiAgLy8gICBoZWlnaHQ6IDQ3cHg7XG4gIC8vICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLy8gICBtYXJnaW46IDA7XG4gIC8vICAgYmFja2dyb3VuZDogIzFkNmVmZjtcbiAgLy8gfVxuICBpb24taXRlbXtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwO1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgaDR7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuICBcbiAgfVxuICAubm90aWZpY2F0aW9ue1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGlvbi1iYWRnZXtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogLTUlO1xuICAgICAgICB0b3A6IC03cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgcGFkZGluZzogNnB4IDRweDtcbiAgICB9XG59XG4uc3BsbGlzdHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTBweDtcblxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_specialiclg_specialiclg_module_ts.js.map