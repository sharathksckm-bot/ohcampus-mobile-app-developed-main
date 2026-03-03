"use strict";
(self["webpackChunkOhCampus"] = self["webpackChunkOhCampus"] || []).push([["src_app_pages_coursewisearticles_coursewisearticles_module_ts"],{

/***/ 5321:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/coursewisearticles/coursewisearticles-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursewisearticlesPageRoutingModule": () => (/* binding */ CoursewisearticlesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _coursewisearticles_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coursewisearticles.page */ 69441);




const routes = [
    {
        path: '',
        component: _coursewisearticles_page__WEBPACK_IMPORTED_MODULE_0__.CoursewisearticlesPage
    }
];
let CoursewisearticlesPageRoutingModule = class CoursewisearticlesPageRoutingModule {
};
CoursewisearticlesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CoursewisearticlesPageRoutingModule);



/***/ }),

/***/ 74780:
/*!***********************************************************************!*\
  !*** ./src/app/pages/coursewisearticles/coursewisearticles.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursewisearticlesPageModule": () => (/* binding */ CoursewisearticlesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _coursewisearticles_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coursewisearticles-routing.module */ 5321);
/* harmony import */ var _coursewisearticles_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coursewisearticles.page */ 69441);







let CoursewisearticlesPageModule = class CoursewisearticlesPageModule {
};
CoursewisearticlesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _coursewisearticles_routing_module__WEBPACK_IMPORTED_MODULE_0__.CoursewisearticlesPageRoutingModule
        ],
        declarations: [_coursewisearticles_page__WEBPACK_IMPORTED_MODULE_1__.CoursewisearticlesPage]
    })
], CoursewisearticlesPageModule);



/***/ }),

/***/ 69441:
/*!*********************************************************************!*\
  !*** ./src/app/pages/coursewisearticles/coursewisearticles.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursewisearticlesPage": () => (/* binding */ CoursewisearticlesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_coursewisearticles_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./coursewisearticles.page.html */ 62930);
/* harmony import */ var _coursewisearticles_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coursewisearticles.page.scss */ 27384);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 81864);








let CoursewisearticlesPage = class CoursewisearticlesPage {
    constructor(service, activatedRoute, router, loadingController) {
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.loadingController = loadingController;
        this.articlarry = [];
    }
    ngOnInit() {
        this.articles();
    }
    articles() {
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
            this.service.articlesection().subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res);
                this.articlarry = res.blogcategory;
                console.log(this.articlarry);
                yield loader.dismiss(); // Dismiss the loader once data is received
            }), (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                console.error('Error fetching articles:', err);
                yield loader.dismiss(); // Dismiss the loader in case of an error
            }));
        });
    }
    catlist(blogid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.router.navigate(['/articalbycat', blogid]);
        });
    }
};
CoursewisearticlesPage.ctorParameters = () => [
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController }
];
CoursewisearticlesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-coursewisearticles',
        template: _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_coursewisearticles_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_coursewisearticles_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CoursewisearticlesPage);



/***/ }),

/***/ 62930:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/coursewisearticles/coursewisearticles.page.html ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-icon style=\"margin-top: 5px;\" name=\"chevron-back-outline\"  routerLink=\"/tabs/tabs/tab1\"></ion-icon>  \n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-buttons>\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"3\" class=\"text-right selfcenter flex just-right\">\n          <div class=\"notification\">\n            <!-- <ion-icon name=\"notifications-outline\"></ion-icon> -->\n            <ion-badge color=\"danger\"></ion-badge>\n          <ion-icon routerLink=\"/editprofile\" name=\"person-outline\"></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n<div class=\"trending\" style=\"height: 98%;\">\n  <div>\n    <h4>Article Categories </h4>\n  \n    <ion-item detail=\"true\"  *ngFor=\"let item of articlarry\">\n      <ion-label>\n        <h3 (click)=\"catlist(item.id)\">{{item.name}}</h3>\n      </ion-label>\n    </ion-item>\n    \n  </div>\n  </div>\n</ion-content>\n\n<ion-footer class=\"main-footer\">\n  <ion-toolbar>\n\n    <div class=\"footer-tabs\">\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab1\">\n        <ion-icon name=\"home\"></ion-icon>\n        <span>Home</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab2\">\n        <ion-icon name=\"search-outline\"></ion-icon>\n        <span>Search</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab3\">\n        <ion-icon name=\"albums-outline\"></ion-icon>\n        <span>Recommended</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab4\">\n        <ion-icon name=\"bookmark-outline\"></ion-icon>\n        <span>Shortlist</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab5\">\n        <ion-icon name=\"chatbox-outline\"></ion-icon>\n        <span>Assistant</span>\n      </div>\n\n    </div>\n\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ 27384:
/*!***********************************************************************!*\
  !*** ./src/app/pages/coursewisearticles/coursewisearticles.page.scss ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = ".setdiv {\n  margin: 10px;\n}\n\n.pset {\n  background-color: #9bd61e;\n  color: #fff;\n  border: none;\n  border-radius: 25px;\n  cursor: pointer;\n  padding: 10px;\n  margin: 4px;\n}\n\n.trending {\n  background: #f2f9ff;\n  padding: 20px 10px;\n  border-radius: 16px;\n  margin: 0px 10px 10px;\n  border: 1px solid #b6ddff;\n}\n\n.trending .setlist {\n  padding: 10px;\n  border: 1px solid #b8b88a;\n  border-radius: 15px;\n  margin: 10px;\n}\n\n.trending ion-item {\n  --padding-start: 0;\n  padding-inline-end: 0;\n  --background: transparent;\n}\n\n.trending h4 {\n  margin-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzZXdpc2VhcnRpY2xlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFFSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFBSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFDRTtFQUNFLGFBQUE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNOOztBQVlFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBVko7O0FBWUU7RUFDRSxhQUFBO0FBVkoiLCJmaWxlIjoiY291cnNld2lzZWFydGljbGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXRkaXZ7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuXG4ucHNldHtcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5YmQ2MWU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiA0cHg7XG59XG4udHJlbmRpbmd7XG4gICAgYmFja2dyb3VuZDogI2YyZjlmZjtcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBtYXJnaW46IDBweCAxMHB4IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2I2ZGRmZjtcbiAgXG4gIC5zZXRsaXN0e1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjYjhiODhhO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgIG1hcmdpbjogMTBweDtcbiAgfVxuICAvLyAubGlzdGNsYXNze1xuICAvLyAgIHBhZGRpbmc6IDEzcHg7XG4gIC8vICAgZm9udC1zaXplOiAyMXB4O1xuICAvLyAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gIC8vICAgY29sb3I6ICM0ODQ0NDA7XG4gIC8vICAgd2lkdGg6IDE1MXB4O1xuICAvLyAgIGhlaWdodDogNDdweDtcbiAgLy8gICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAvLyAgIG1hcmdpbjogMDtcbiAgLy8gICBiYWNrZ3JvdW5kOiAjMWQ2ZWZmO1xuICAvLyB9XG4gIGlvbi1pdGVte1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDA7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuICBoNHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG4gIFxuICB9Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_coursewisearticles_coursewisearticles_module_ts.js.map