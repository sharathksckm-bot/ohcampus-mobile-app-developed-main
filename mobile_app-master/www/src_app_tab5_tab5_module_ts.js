"use strict";
(self["webpackChunkOhCampus"] = self["webpackChunkOhCampus"] || []).push([["src_app_tab5_tab5_module_ts"],{

/***/ 26672:
/*!*********************************************!*\
  !*** ./src/app/tab5/tab5-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab5PageRoutingModule": () => (/* binding */ Tab5PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _tab5_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab5.page */ 32584);




const routes = [
    {
        path: '',
        component: _tab5_page__WEBPACK_IMPORTED_MODULE_0__.Tab5Page
    }
];
let Tab5PageRoutingModule = class Tab5PageRoutingModule {
};
Tab5PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Tab5PageRoutingModule);



/***/ }),

/***/ 5184:
/*!*************************************!*\
  !*** ./src/app/tab5/tab5.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab5PageModule": () => (/* binding */ Tab5PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _tab5_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab5-routing.module */ 26672);
/* harmony import */ var _tab5_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab5.page */ 32584);







let Tab5PageModule = class Tab5PageModule {
};
Tab5PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tab5_routing_module__WEBPACK_IMPORTED_MODULE_0__.Tab5PageRoutingModule
        ],
        declarations: [_tab5_page__WEBPACK_IMPORTED_MODULE_1__.Tab5Page]
    })
], Tab5PageModule);



/***/ }),

/***/ 32584:
/*!***********************************!*\
  !*** ./src/app/tab5/tab5.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab5Page": () => (/* binding */ Tab5Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab5_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tab5.page.html */ 2358);
/* harmony import */ var _tab5_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab5.page.scss */ 65461);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 1331);






let Tab5Page = class Tab5Page {
    constructor(router, iab) {
        this.router = router;
        this.iab = iab;
    }
    ngOnInit() {
    }
    openWhatsApp() {
        const phone = '918884560456'; // international format, no '+'
        const message = 'Hello';
        const encodedMsg = encodeURIComponent(message);
        const url = `https://wa.me/${phone}?text=${encodedMsg}`;
        // Option 1: Open in system browser
        // window.open(url, '_system');
        // Option 2: Use InAppBrowser (optional)
        this.iab.create(url, '_system');
    }
    bck() {
        this.router.navigateByUrl('/tabs/tabs/tab1');
    }
    notification() {
        this.router.navigateByUrl('/notification');
    }
};
Tab5Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser }
];
Tab5Page = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tab5',
        template: _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab5_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab5_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab5Page);



/***/ }),

/***/ 2358:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tab5/tab5.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" class=\"headerBg\">\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"9\">\n          <ion-buttons class=\"primaryhead\">\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"3\" class=\"text-right selfcenter flex just-right\">\n          \n          <!-- <div class=\"notification\" (click)=\"notification()\">\n            <ion-icon name=\"notifications-outline\"></ion-icon>\n            <ion-badge color=\"danger\"></ion-badge>\n          </div> -->\n          <ion-icon routerLink=\"/editprofile\" class=\"notification\" name=\"person-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n  \n  <ion-content [fullscreen]=\"true\">\n    <!-- <ion-button (click)=\"openWhatsApp()\">Chat on WhatsApp</ion-button> -->\n  <div style=\"position:relative;\">\n    <img class=\"imgwh\" src=\"../../assets/icon/whatsapp.png\" (click)=\"openWhatsApp()\">\n    <div class=\"tooltip\" (click)=\"openWhatsApp()\"><h6>Chat on WhatsApp</h6></div>\n  </div>\n\n  </ion-content>\n  \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");

/***/ }),

/***/ 65461:
/*!*************************************!*\
  !*** ./src/app/tab5/tab5.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = ".imgwh {\n  width: 55px;\n  margin: 12px 16px;\n}\n\n.tooltip {\n  text-align: center;\n  border-radius: 6px;\n  padding: 4px 20px;\n  position: absolute;\n  z-index: 1;\n  top: 12%;\n  left: 25%;\n  border: 1px dashed #00bf36;\n  background: #f2fff5;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;\n}\n\n.tooltip h6 {\n  margin: 14px 0;\n}\n\n.tooltip::after {\n  content: \"\";\n  position: absolute;\n  bottom: 35%;\n  left: 0%;\n  margin-left: -21px;\n  border-width: 10px;\n  border-style: solid;\n  border-color: transparent #00cb39 transparent transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnREFBQTtBQUNKOztBQUFJO0VBQ0ksY0FBQTtBQUVSOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5REFBQTtBQUVKIiwiZmlsZSI6InRhYjUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZ3doe1xuICAgIHdpZHRoOiA1NXB4O1xuICAgIG1hcmdpbjogMTJweCAxNnB4O1xufVxuXG4udG9vbHRpcHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHBhZGRpbmc6IDRweCAyMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRvcDogMTIlO1xuICAgIGxlZnQ6IDI1JTtcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgIzAwYmYzNjtcbiAgICBiYWNrZ3JvdW5kOiAjZjJmZmY1O1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMHB4IDVweCAxNXB4IDBweDtcbiAgICBoNntcbiAgICAgICAgbWFyZ2luOiAxNHB4IDA7XG4gICAgfVxufVxuLnRvb2x0aXA6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDM1JTtcbiAgICBsZWZ0OiAwJTtcbiAgICBtYXJnaW4tbGVmdDogLTIxcHg7XG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjMDBjYjM5IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICB9Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_tab5_tab5_module_ts.js.map