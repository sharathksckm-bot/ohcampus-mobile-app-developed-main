"use strict";
(self["webpackChunkOhCampus"] = self["webpackChunkOhCampus"] || []).push([["src_app_pages_eventdetails_eventdetails_module_ts"],{

/***/ 90662:
/*!*******************************************************************!*\
  !*** ./src/app/pages/eventdetails/eventdetails-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventdetailsPageRoutingModule": () => (/* binding */ EventdetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _eventdetails_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventdetails.page */ 56435);




const routes = [
    {
        path: '',
        component: _eventdetails_page__WEBPACK_IMPORTED_MODULE_0__.EventdetailsPage
    }
];
let EventdetailsPageRoutingModule = class EventdetailsPageRoutingModule {
};
EventdetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EventdetailsPageRoutingModule);



/***/ }),

/***/ 69934:
/*!***********************************************************!*\
  !*** ./src/app/pages/eventdetails/eventdetails.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventdetailsPageModule": () => (/* binding */ EventdetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _eventdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventdetails-routing.module */ 90662);
/* harmony import */ var _eventdetails_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventdetails.page */ 56435);







let EventdetailsPageModule = class EventdetailsPageModule {
};
EventdetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _eventdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__.EventdetailsPageRoutingModule
        ],
        declarations: [_eventdetails_page__WEBPACK_IMPORTED_MODULE_1__.EventdetailsPage]
    })
], EventdetailsPageModule);



/***/ }),

/***/ 56435:
/*!*********************************************************!*\
  !*** ./src/app/pages/eventdetails/eventdetails.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventdetailsPage": () => (/* binding */ EventdetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_eventdetails_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./eventdetails.page.html */ 10583);
/* harmony import */ var _eventdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventdetails.page.scss */ 79613);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 81864);








let EventdetailsPage = class EventdetailsPage {
    constructor(router, service, route, loadingController) {
        this.router = router;
        this.service = service;
        this.route = route;
        this.loadingController = loadingController;
    }
    ngOnInit() {
        this.eventid = this.route.snapshot.paramMap.get('event_id');
        this.eventdetail();
    }
    eventdetail() {
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
            this.service.geteventsdetails(this.eventid).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res);
                this.eventdetailarry = res.event_details;
                yield loader.dismiss(); // Dismiss the loader when data is received
            }), (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                console.error('Error fetching event details:', err);
                yield loader.dismiss(); // Dismiss the loader in case of an error
            }));
        });
    }
};
EventdetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController }
];
EventdetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-eventdetails',
        template: _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_eventdetails_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_eventdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EventdetailsPage);



/***/ }),

/***/ 10583:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/eventdetails/eventdetails.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-icon style=\"margin-top: 5px;\" name=\"chevron-back-outline\"  routerLink=\"/tabs/tabs/tab1\"></ion-icon>  \n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-buttons>\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"3\" class=\"text-right selfcenter flex just-right\">\n          <div class=\"notification\">\n            <!-- <ion-icon name=\"notifications-outline\"></ion-icon> -->\n            <ion-badge color=\"danger\"></ion-badge>\n          <ion-icon routerLink=\"/editprofile\" name=\"person-outline\"></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n \n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n<div class=\"maindiv\"  *ngFor=\"let item of eventdetailarry\">\n  <!-- first section -->\n  <div class=\"eventDetails\">\n    <div class=\"imgset\">\n      <img  [src]=\"item.image\">\n    </div>\n    <h4 style=\"text-align: center;\">{{item.event_name}}</h4>\n  </div>\n   <!-- second section -->\n<div>\n<h4>Details</h4>\n<p style=\"text-align: justify;\"  [innerHTML]=\"item.event_desc\">\n</p>\n</div>\n\n  <!-- second section -->\n<div>\n  <h4>Contact Details</h4>\n\n  <p>Phone : <span>{{item.event_phone}}</span></p>\n  <p>Email : <span>{{item.event_email}}</span></p>\n  <p>Website : <span>{{item.event_website}}</span></p>\n  <p>Start Date : <span>{{item.event_start_date}}</span></p>\n  <p>End Date : <span>{{item._end_date}}</span></p>\n\n  <h4>Address</h4>\n\n  <p>{{item.event_address}}</p>\n</div>\n\n\n\n\n</div>\n</ion-content>\n\n<ion-footer class=\"main-footer\">\n  <ion-toolbar>\n\n    <div class=\"footer-tabs\">\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab1\">\n        <ion-icon name=\"home\"></ion-icon>\n        <span>Home</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab2\">\n        <ion-icon name=\"search-outline\"></ion-icon>\n        <span>Search</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab3\">\n        <ion-icon name=\"albums-outline\"></ion-icon>\n        <span>Recommended</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab4\">\n        <ion-icon name=\"bookmark-outline\"></ion-icon>\n        <span>Shortlist</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab5\">\n        <ion-icon name=\"chatbox-outline\"></ion-icon>\n        <span>Assistant</span>\n      </div>\n\n    </div>\n\n  </ion-toolbar>\n</ion-footer>\n\n\n");

/***/ }),

/***/ 79613:
/*!***********************************************************!*\
  !*** ./src/app/pages/eventdetails/eventdetails.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = ".maindiv {\n  margin: 13px;\n}\n.maindiv .imgset {\n  width: 100%;\n}\n.eventDetails {\n  position: relative;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.eventDetails h4 {\n  color: #ffffff;\n  font-size: 16px;\n  margin: 0;\n  height: 62px;\n  position: absolute;\n  z-index: 99;\n  bottom: 0;\n  width: 100%;\n  padding: 6px;\n  box-shadow: rgba(0, 0, 0, 0.7) 0px -62px 20px -15px inset;\n  display: flex;\n  justify-content: center;\n  align-items: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50ZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQSxZQUFBO0FBQUE7QUFFSTtFQUVJLFdBQUE7QUFEUjtBQVlBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBVEo7QUFVSTtFQUNJLGNBQUE7RUFDTixlQUFBO0VBQ0UsU0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5REFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBUkoiLCJmaWxlIjoiZXZlbnRkZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLm1haW5kaXZ7XG5tYXJnaW46MTNweDtcblxuICAgIC5pbWdzZXR7XG4gICAgICAgIC8vIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAvLyBoZWlnaHQ6IDE4NXB4O1xuICAgIH1cblxufVxuXG5cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4uZXZlbnREZXRhaWxze1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaDR7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogNjJweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogOTk7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNykgMHB4IC02MnB4IDIwcHggLTE1cHggaW5zZXQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZW5kO1xuICAgIH1cbn1cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_eventdetails_eventdetails_module_ts.js.map