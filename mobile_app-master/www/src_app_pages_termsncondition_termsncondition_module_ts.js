"use strict";
(self["webpackChunkOhCampus"] = self["webpackChunkOhCampus"] || []).push([["src_app_pages_termsncondition_termsncondition_module_ts"],{

/***/ 23917:
/*!*************************************************************************!*\
  !*** ./src/app/pages/termsncondition/termsncondition-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsnconditionPageRoutingModule": () => (/* binding */ TermsnconditionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _termsncondition_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./termsncondition.page */ 50471);




const routes = [
    {
        path: '',
        component: _termsncondition_page__WEBPACK_IMPORTED_MODULE_0__.TermsnconditionPage
    }
];
let TermsnconditionPageRoutingModule = class TermsnconditionPageRoutingModule {
};
TermsnconditionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TermsnconditionPageRoutingModule);



/***/ }),

/***/ 93681:
/*!*****************************************************************!*\
  !*** ./src/app/pages/termsncondition/termsncondition.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsnconditionPageModule": () => (/* binding */ TermsnconditionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _termsncondition_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./termsncondition-routing.module */ 23917);
/* harmony import */ var _termsncondition_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./termsncondition.page */ 50471);







let TermsnconditionPageModule = class TermsnconditionPageModule {
};
TermsnconditionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _termsncondition_routing_module__WEBPACK_IMPORTED_MODULE_0__.TermsnconditionPageRoutingModule
        ],
        declarations: [_termsncondition_page__WEBPACK_IMPORTED_MODULE_1__.TermsnconditionPage]
    })
], TermsnconditionPageModule);



/***/ }),

/***/ 50471:
/*!***************************************************************!*\
  !*** ./src/app/pages/termsncondition/termsncondition.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsnconditionPage": () => (/* binding */ TermsnconditionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_termsncondition_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./termsncondition.page.html */ 77816);
/* harmony import */ var _termsncondition_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./termsncondition.page.scss */ 91158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 81864);






let TermsnconditionPage = class TermsnconditionPage {
    constructor(router, loadingController) {
        this.router = router;
        this.loadingController = loadingController;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const loader = yield this.loadingController.create({
                message: 'Loading...',
                duration: 500,
                spinner: 'crescent' // You can choose a different spinner style
            });
            yield loader.present(); // Show the loader
        });
    }
    notification() {
        this.router.navigateByUrl('/notification');
    }
};
TermsnconditionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController }
];
TermsnconditionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-termsncondition',
        template: _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_termsncondition_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_termsncondition_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TermsnconditionPage);



/***/ }),

/***/ 77816:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/termsncondition/termsncondition.page.html ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" class=\"headerBg\">\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-icon style=\"margin-top: 20px;\" name=\"chevron-back-outline\"  routerLink=\"/tabs/tabs/tab1\"></ion-icon>  \n\n        <ion-col size=\"8\">\n          <ion-buttons class=\"primaryhead\">\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"3\" class=\"text-right selfcenter flex just-right\">\n          <!-- <div class=\"notification\" (click)=\"notification()\"><ion-icon name=\"notifications-outline\"></ion-icon>\n            <ion-badge color=\"danger\"></ion-badge>\n          </div> -->\n          <ion-icon routerLink=\"/editprofile\" name=\"person-outline\" class=\"primary-color\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title class=\"cardtitset\">Terms And Condition</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n      You can continue to browse and use this website, only when you are harmonizing (agreeing) to abide (inform) and be bound with the following terms and conditions.\n      The content in the OhCampus.com can be appraised (updated) or confiscated (removed) by the company without any prior notice.\n      Our website may link to other websites hardly. These links are imparted (provided) only for your convenience, which provide further information. That does not signify that we are sanction (authorized) for their website. We are not accountable (responsible) for the content of the linked website.\n      If the content endowed by the college is not genuine, then company will confiscate (remove) those content, when company get notifications.\n      The data like text, video, images, company logo in site is subject to copyright law.\n      Unauthorized use of this website may give to a claim for damages and be a criminal offence.\n      \n      Cookies\n      \n      When we provide overhaul, we want to make them useful, affluent and reliable. Where services are delivered on the internet, this sometimes involves placing small amounts of information on your device, which cannot be used to identify you personally.\n      \n      These piece of information’s are used to improve services for you through, for example:\n      •    Qualifying a service to (be acquainted with) recognizes your device, so you don't have to give the same information numerous times during a task.\n      •    Recognizing that you may already have given a username and password, so you don't need to do it for every webpage requested.\n      •    Computing how many people are using our services, so they can be made easier to use and there's enough capacity to ensure they are fast.\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n<ion-footer class=\"main-footer\">\n  <ion-toolbar>\n\n    <div class=\"footer-tabs\">\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab1\">\n        <ion-icon name=\"home\"></ion-icon>\n        <span>Home</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab2\">\n        <ion-icon name=\"search-outline\"></ion-icon>\n        <span>Search</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab3\">\n        <ion-icon name=\"albums-outline\"></ion-icon>\n        <span>Recommended</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab4\">\n        <ion-icon name=\"bookmark-outline\"></ion-icon>\n        <span>Shortlist</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab5\">\n        <ion-icon name=\"chatbox-outline\"></ion-icon>\n        <span>Assistant</span>\n      </div>\n\n    </div>\n\n  </ion-toolbar>\n</ion-footer>\n\n");

/***/ }),

/***/ 91158:
/*!*****************************************************************!*\
  !*** ./src/app/pages/termsncondition/termsncondition.page.scss ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "ion-card ion-card-header {\n  padding: 0;\n}\nion-card .cardtitset {\n  text-align: center;\n  background-color: #c4dafa !important;\n  padding: 10px;\n  margin-bottom: 10px;\n  color: black !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1zbmNvbmRpdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxVQUFBO0FBRFI7QUFNQTtFQUNJLGtCQUFBO0VBQ0Usb0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUpOIiwiZmlsZSI6InRlcm1zbmNvbmRpdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1jYXJke1xuICAgIGlvbi1jYXJkLWhlYWRlcntcbiAgICAgICAgcGFkZGluZzowO1xuICAgIH1cblxuXG5cbi5jYXJkdGl0c2V0e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk2LCAyMTgsIDI1MCwgMSkgIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG59XG5cblxuXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_termsncondition_termsncondition_module_ts.js.map