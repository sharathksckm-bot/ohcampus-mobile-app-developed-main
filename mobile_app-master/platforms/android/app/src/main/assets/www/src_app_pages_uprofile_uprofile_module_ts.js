"use strict";
(self["webpackChunkOhCampus"] = self["webpackChunkOhCampus"] || []).push([["src_app_pages_uprofile_uprofile_module_ts"],{

/***/ 59617:
/*!***********************************************************!*\
  !*** ./src/app/pages/uprofile/uprofile-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UprofilePageRoutingModule": () => (/* binding */ UprofilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _uprofile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uprofile.page */ 79987);




const routes = [
    {
        path: '',
        component: _uprofile_page__WEBPACK_IMPORTED_MODULE_0__.UprofilePage
    }
];
let UprofilePageRoutingModule = class UprofilePageRoutingModule {
};
UprofilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UprofilePageRoutingModule);



/***/ }),

/***/ 70283:
/*!***************************************************!*\
  !*** ./src/app/pages/uprofile/uprofile.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UprofilePageModule": () => (/* binding */ UprofilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _uprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uprofile-routing.module */ 59617);
/* harmony import */ var _uprofile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uprofile.page */ 79987);







let UprofilePageModule = class UprofilePageModule {
};
UprofilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _uprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__.UprofilePageRoutingModule
        ],
        declarations: [_uprofile_page__WEBPACK_IMPORTED_MODULE_1__.UprofilePage]
    })
], UprofilePageModule);



/***/ }),

/***/ 79987:
/*!*************************************************!*\
  !*** ./src/app/pages/uprofile/uprofile.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UprofilePage": () => (/* binding */ UprofilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_uprofile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./uprofile.page.html */ 44798);
/* harmony import */ var _uprofile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uprofile.page.scss */ 87514);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




let UprofilePage = class UprofilePage {
    constructor() { }
    ngOnInit() {
    }
    logout() {
    }
};
UprofilePage.ctorParameters = () => [];
UprofilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-uprofile',
        template: _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_uprofile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_uprofile_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], UprofilePage);



/***/ }),

/***/ 44798:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/uprofile/uprofile.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>User Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- User Profile Section -->\n  <ion-card>\n    <ion-card-header>\n      <ion-avatar slot=\"start\">\n        <img src=\"assets/img/avatar.png\" alt=\"User Avatar\">\n      </ion-avatar>\n      <ion-card-title>User Name</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-icon name=\"mail-outline\" slot=\"start\"></ion-icon>\n        <ion-label>user@example.com</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-icon name=\"call-outline\" slot=\"start\"></ion-icon>\n        <ion-label>(123) 456-7890</ion-label>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <!-- Logout Button -->\n  <ion-footer>\n    <ion-button expand=\"full\" color=\"danger\" (click)=\"logout()\">\n      <ion-icon slot=\"start\" name=\"log-out-outline\"></ion-icon>\n      Logout\n    </ion-button>\n  </ion-footer>\n</ion-content>");

/***/ }),

/***/ 87514:
/*!***************************************************!*\
  !*** ./src/app/pages/uprofile/uprofile.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "ion-card {\n  margin: 16px;\n  border-radius: 8px;\n}\n\nion-avatar {\n  --size: 80px;\n}\n\nion-item {\n  --padding-start: 16px;\n  --inner-padding-end: 16px;\n}\n\nion-footer {\n  padding: 16px;\n  background-color: #f9f9f9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVFO0VBQ0UsWUFBQTtBQUNKOztBQUVFO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBQ0oiLCJmaWxlIjoidXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xuICAgIG1hcmdpbjogMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIH1cblxuICBpb24tYXZhdGFyIHtcbiAgICAtLXNpemU6IDgwcHg7XG4gIH1cblxuICBpb24taXRlbSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDE2cHg7XG4gIH1cblxuICBpb24tZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIH0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_uprofile_uprofile_module_ts.js.map