"use strict";
(self["webpackChunkOhCampus"] = self["webpackChunkOhCampus"] || []).push([["src_app_pages_notification_notification_module_ts"],{

/***/ 54863:
/*!*******************************************************************!*\
  !*** ./src/app/pages/notification/notification-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationPageRoutingModule": () => (/* binding */ NotificationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.page */ 95259);




const routes = [
    {
        path: '',
        component: _notification_page__WEBPACK_IMPORTED_MODULE_0__.NotificationPage
    }
];
let NotificationPageRoutingModule = class NotificationPageRoutingModule {
};
NotificationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NotificationPageRoutingModule);



/***/ }),

/***/ 89770:
/*!***********************************************************!*\
  !*** ./src/app/pages/notification/notification.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationPageModule": () => (/* binding */ NotificationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _notification_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-routing.module */ 54863);
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.page */ 95259);







let NotificationPageModule = class NotificationPageModule {
};
NotificationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _notification_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationPageRoutingModule
        ],
        declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_1__.NotificationPage]
    })
], NotificationPageModule);



/***/ }),

/***/ 95259:
/*!*********************************************************!*\
  !*** ./src/app/pages/notification/notification.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationPage": () => (/* binding */ NotificationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_notification_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./notification.page.html */ 27440);
/* harmony import */ var _notification_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.page.scss */ 34445);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ 59353);





// import OneSignal from 'onesignal-cordova-plugin';

let NotificationPage = class NotificationPage {
    constructor(router, service) {
        this.router = router;
        this.service = service;
        this.loginuserId = JSON.parse(localStorage.getItem('user')).id;
    }
    ngOnInit() {
        this.getNotification();
        // this.OneSignalInit();
    }
    bck() {
        this.router.navigateByUrl('/tabs/tab1');
    }
    getNotification() {
        let selectpara = {
            "userid": this.loginuserId
        };
        this.service.getNotificationData(selectpara).subscribe((res) => {
            console.log(res);
            this.data = res.response_data;
        });
    }
};
NotificationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService }
];
NotificationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-notification',
        template: _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_notification_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_notification_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], NotificationPage);



/***/ }),

/***/ 27440:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/notification/notification.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-grid >\n      <ion-row>\n        <ion-col size=\"2\">\n          <ion-icon name=\"chevron-back-outline\" class=\"f30\" routerLink=\"/tabs/tabs/tab1\"></ion-icon>\n          <!-- <ion-icon name=\"arrow-back-outline\" routerLink=\"/tabs/tabs/tab1\"></ion-icon> -->\n        </ion-col>\n        <ion-col size=\"8\" class=\"text-center\">\n          <h2 class=\"primaryhead m0\">Notification </h2>\n        </ion-col>\n        \n        <ion-col size=\"2\" class=\"text-right\">\n          <!-- <ion-icon name=\"search-outline\" class=\"primaryhead f30\"></ion-icon> -->\n        </ion-col>\n        </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header> \n<ion-content style=\"--background: aliceblue;\">\n  <ion-list  class=\"notification-list\">\n \n   <ion-item lines=\"none\" *ngFor=\"let data of data\">\n    <div>\n      <div class=\"headnote\"><ion-label >{{data.title}}</ion-label> \n        <!-- <p class=\"dys\" >10 days</p> -->\n      </div>\n      <p> {{data.message}}</p>\n\n    </div>\n   </ion-item>\n   \n   \n  \n   \n   \n    \n   \n  </ion-list>\n</ion-content>\n\n<ion-footer class=\"main-footer\">\n  <ion-toolbar>\n\n    <div class=\"footer-tabs\">\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab1\">\n        <ion-icon name=\"home\"></ion-icon>\n        <span>Home</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab2\">\n        <ion-icon name=\"search-outline\"></ion-icon>\n        <span>Search</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab3\">\n        <ion-icon name=\"albums-outline\"></ion-icon>\n        <span>Recommended</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab4\">\n        <ion-icon name=\"bookmark-outline\"></ion-icon>\n        <span>Shortlist</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab5\">\n        <ion-icon name=\"chatbox-outline\"></ion-icon>\n        <span>Assistant</span>\n      </div>\n\n    </div>\n\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ 34445:
/*!***********************************************************!*\
  !*** ./src/app/pages/notification/notification.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = ".notification-list {\n  padding: 0;\n  margin: 1rem 10px;\n  --background: aliceblue;\n  background: aliceblue;\n}\n.notification-list ion-item {\n  margin-bottom: 10px;\n  border-radius: 8px;\n}\n.notification-list p.dys {\n  color: #2ebb02;\n  background: #eaffe4;\n  padding: 3px 10px;\n  border-radius: 50px;\n  font-size: 12px;\n}\n.notification-list .headnote {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px dashed #cee4fd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBQUo7QUFFRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUVFO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFBSjtBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQ0FBQTtBQUFGIiwiZmlsZSI6Im5vdGlmaWNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5ub3RpZmljYXRpb24tbGlzdHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMXJlbSAxMHB4O1xuICAgIC0tYmFja2dyb3VuZDogYWxpY2VibHVlO1xuICAgIGJhY2tncm91bmQ6IGFsaWNlYmx1ZTtcbiAgICBcbiAgaW9uLWl0ZW17XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIH1cbiAgcC5keXMge1xuICAgIGNvbG9yOiAjMmViYjAyO1xuICAgIGJhY2tncm91bmQ6ICNlYWZmZTQ7XG4gICAgcGFkZGluZzogM3B4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uaGVhZG5vdGV7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2NlZTRmZDtcbn1cblxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_notification_notification_module_ts.js.map