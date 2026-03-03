"use strict";
(self["webpackChunkOhCampus"] = self["webpackChunkOhCampus"] || []).push([["src_app_pages_trendcrsdetails_trendcrsdetails_module_ts"],{

/***/ 37919:
/*!*************************************************************************!*\
  !*** ./src/app/pages/trendcrsdetails/trendcrsdetails-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrendcrsdetailsPageRoutingModule": () => (/* binding */ TrendcrsdetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _trendcrsdetails_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trendcrsdetails.page */ 34337);




const routes = [
    {
        path: '',
        component: _trendcrsdetails_page__WEBPACK_IMPORTED_MODULE_0__.TrendcrsdetailsPage
    }
];
let TrendcrsdetailsPageRoutingModule = class TrendcrsdetailsPageRoutingModule {
};
TrendcrsdetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TrendcrsdetailsPageRoutingModule);



/***/ }),

/***/ 26584:
/*!*****************************************************************!*\
  !*** ./src/app/pages/trendcrsdetails/trendcrsdetails.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrendcrsdetailsPageModule": () => (/* binding */ TrendcrsdetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _trendcrsdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trendcrsdetails-routing.module */ 37919);
/* harmony import */ var _trendcrsdetails_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trendcrsdetails.page */ 34337);







let TrendcrsdetailsPageModule = class TrendcrsdetailsPageModule {
};
TrendcrsdetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _trendcrsdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__.TrendcrsdetailsPageRoutingModule
        ],
        declarations: [_trendcrsdetails_page__WEBPACK_IMPORTED_MODULE_1__.TrendcrsdetailsPage]
    })
], TrendcrsdetailsPageModule);



/***/ }),

/***/ 34337:
/*!***************************************************************!*\
  !*** ./src/app/pages/trendcrsdetails/trendcrsdetails.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrendcrsdetailsPage": () => (/* binding */ TrendcrsdetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_trendcrsdetails_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./trendcrsdetails.page.html */ 94206);
/* harmony import */ var _trendcrsdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trendcrsdetails.page.scss */ 59031);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 71570);









let TrendcrsdetailsPage = class TrendcrsdetailsPage {
    constructor(router, service, route, loadingController, sanitizer) {
        this.router = router;
        this.service = service;
        this.route = route;
        this.loadingController = loadingController;
        this.sanitizer = sanitizer;
    }
    ngOnInit() {
        this.courseId = this.route.snapshot.paramMap.get('id');
        this.placementdetail();
    }
    sanitizeHtml(text) {
        return this.sanitizer.bypassSecurityTrustHtml(text.replace(/\n/g, '<br>'));
    }
    placementdetail() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
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
            yield loading.present(); // Display the loader
            this.service.trndcrsdetail(this.courseId).subscribe(res => {
                console.log(res);
                this.crsdetailarry = res.data; // Assign response data to crsdetailarry
                console.log(this.crsdetailarry);
                loading.dismiss(); // Dismiss the loader once data is fetched
            }, error => {
                console.error('Error fetching course details:', error);
                loading.dismiss(); // Dismiss the loader in case of an error
            });
        });
    }
};
TrendcrsdetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer }
];
TrendcrsdetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-trendcrsdetails',
        template: _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_trendcrsdetails_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_trendcrsdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TrendcrsdetailsPage);



/***/ }),

/***/ 94206:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/trendcrsdetails/trendcrsdetails.page.html ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-icon style=\"margin-top: 5px;\" name=\"chevron-back-outline\"  routerLink=\"/tabs/tabs/tab1\"></ion-icon>  \n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-buttons>\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"3\" class=\"text-right selfcenter flex just-right\">\n          <div class=\"notification\">\n            <!-- <ion-icon name=\"notifications-outline\"></ion-icon> -->\n            <ion-badge color=\"danger\"></ion-badge>\n          <ion-icon routerLink=\"/editprofile\" name=\"person-outline\"></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n   </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"maindiv\">\n  <div class=\"m10\">\n    <b>Course Details</b></div>\n  <div *ngFor=\"let item of crsdetailarry\">\n  <div class=\"m10\" >\n  <ion-card>\n    <img [src]=\"item.image\">\n  </ion-card>\n  <h5 class=\"titleset\">{{item.name}}</h5>\n</div>\n\n  <div class=\"m10\"> \n    <div><b>Course Description :</b></div>\n    <p class=\"m0\" innerHtml=\"{{item.course_description}}\"></p>\n</div>\n\n<div class=\"m10\"> \n  <p><b>Course Type :</b>  {{item.type}}</p>\n \n</div>\n\n<div class=\"m10\"> \n  <p><b>Course Duration :</b> {{item.duration}} Year</p>\n</div>\n\n<div class=\"m10\"> \n  <p> <b>Eligibility :</b> {{item.eligibility}} </p>\n</div>\n<div class=\"m10\"> \n  <div> <b>Scope :</b></div>\n  <p class=\"m0\">{{item.scope}}</p>\n</div>\n\n\n\n\n\n\n\n\n<!-- <div class=\"m10\"> \n  <div> <b>Job Profile :</b> <span [innerHTML]=\"item.job_profile.replace(/\\n/g, '')\"></span> </div>\n</div> -->\n<div class=\"m10\"> \n  <b>Job Profile :</b> <br> \n  <p class=\"m0\" [innerHTML]=\"sanitizeHtml(item.job_profile)\"></p>\n</div>\n<div class=\"m10\"> \n  <b>Certification :</b> <br> \n  <p class=\"m0\" [innerHTML]=\"sanitizeHtml(item.certification)\"></p>\n    <!-- {{item.certification}}  -->\n</div>\n\n</div>\n</div>\n</ion-content>\n\n<ion-footer class=\"main-footer\">\n  <ion-toolbar>\n\n    <div class=\"footer-tabs\">\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab1\">\n        <ion-icon name=\"home\"></ion-icon>\n        <span>Home</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab2\">\n        <ion-icon name=\"search-outline\"></ion-icon>\n        <span>Search</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab3\">\n        <ion-icon name=\"albums-outline\"></ion-icon>\n        <span>Recommended</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab4\">\n        <ion-icon name=\"bookmark-outline\"></ion-icon>\n        <span>Shortlist</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab5\">\n        <ion-icon name=\"chatbox-outline\"></ion-icon>\n        <span>Assistant</span>\n      </div>\n\n    </div>\n\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ 59031:
/*!*****************************************************************!*\
  !*** ./src/app/pages/trendcrsdetails/trendcrsdetails.page.scss ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = ".maindiv ion-card {\n  margin: 0;\n  --box-shadow:none;\n  box-shadow: none;\n  border-radius: 12px;\n}\n.maindiv ion-card img {\n  width: 100%;\n  display: block;\n}\n.maindiv .titleset {\n  margin: 6px;\n  text-align: center;\n}\n.maindiv h5 {\n  background-color: aliceblue;\n  padding: 8px 10px;\n}\n.maindiv .articlelist img {\n  border: 1px solid lightgray;\n  height: 70px;\n  width: 100%;\n  border-radius: 8px;\n}\n.maindiv p {\n  margin: 0;\n  font-size: 14px;\n}\n.maindiv ion-row {\n  border-bottom: 1px solid lightgray;\n  margin-bottom: 12px;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyZW5kY3JzZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRFI7QUFFUTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FBQVo7QUFHSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQURSO0FBR0k7RUFDSSwyQkFBQTtFQUNBLGlCQUFBO0FBRFI7QUFJSTtFQUNJLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUZSO0FBS0k7RUFDSSxTQUFBO0VBQ0EsZUFBQTtBQUhSO0FBS0k7RUFDSSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUhSIiwiZmlsZSI6InRyZW5kY3JzZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbmRpdntcbiAgICAvLyBwYWRkaW5nOiAxMHB4O1xuICAgIGlvbi1jYXJke1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIC0tYm94LXNoYWRvdzpub25lO1xuICAgICAgICBib3gtc2hhZG93Om5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgIH1cbiAgICAudGl0bGVzZXR7XG4gICAgICAgIG1hcmdpbjogNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICAgIH1cbiAgICBoNXtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xuICAgICAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICB9XG4gICAgLmFydGljbGVsaXN0e1xuICAgIGltZ3tcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgfVxuICAgICB9XG4gICAgcHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIGlvbi1yb3d7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICB9XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_trendcrsdetails_trendcrsdetails_module_ts.js.map